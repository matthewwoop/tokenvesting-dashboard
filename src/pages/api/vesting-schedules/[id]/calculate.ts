import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';
import { getSpotPriceUSD, getAnnualizedVolatility } from '@/lib/marketData';
import { calculateVestingMetrics } from '@/lib/optionPricing';

interface UnlockEvent {
  unlockDate: Date;
  amount: number;
  frequency: string;
  duration?: number;
}

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { id } = req.query as { id: string };

  if (req.method === 'POST') {

    try {
      // Fetch the schedule and its unlockEvents
      const schedule = await prisma.vestingSchedule.findUnique({
        where: { id },
        include: { unlockEvents: true },
      });

      if (!schedule) {
        return res.status(404).json({ error: 'VestingSchedule not found' });
      }

      // Get market data for the token
      const tokenSymbol = schedule.tokenSymbol || 'SOL';
      const spotPrice = await getSpotPriceUSD(tokenSymbol);
      const volatility = await getAnnualizedVolatility(tokenSymbol);
      const riskFreeRate = 0.05; // 5% risk-free rate

      // Calculate current unlock status
      const now = new Date();
      const futureEvents = schedule.unlockEvents
        .filter((event) => new Date(event.unlockDate) > now)
        .sort((a, b) => new Date(a.unlockDate).getTime() - new Date(b.unlockDate).getTime());

      const unlockedQuantity = schedule.unlockEvents
        .filter((event) => new Date(event.unlockDate) <= now)
        .reduce((sum: number, event) => sum + event.amount, 0);

      const nextUnlockDate = futureEvents.length > 0 ? new Date(futureEvents[0].unlockDate) : now;

      // Calculate comprehensive metrics
      const metrics = calculateVestingMetrics(
        schedule.totalQuantity,
        unlockedQuantity,
        spotPrice,
        volatility,
        nextUnlockDate,
        riskFreeRate
      );

      // Calculate detailed results for each unlock event
      const results = schedule.unlockEvents.map((ev) => {
        const timeToUnlock = Math.max(
          (new Date(ev.unlockDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24 * 365), 0
        );
        
        return {
          date: ev.unlockDate,
          unlockAmount: ev.amount,
          timeToUnlock,
          isUnlocked: new Date(ev.unlockDate) <= now,
          frequency: ev.frequency,
          duration: ev.duration
        };
      });

      // Create & store DLOM Calculation
      const calc = await prisma.dLOMCalculation.create({
        data: {
          vestingScheduleId: id,
          totalUnlocked: metrics.unlockedQuantity,
          totalLocked: metrics.lockedQuantity,
          discountPercent: metrics.discountPercentage,
          discountedValue: metrics.discountedValue,
          resultsJson: {
            metrics: { ...metrics },
            results,
            marketData: {
              tokenSymbol,
              spotPrice,
              volatility,
              riskFreeRate
            }
          },
        },
      });

      return res.status(201).json(calc);

    } catch (err: any) {
      console.error('Error creating DLOMCalculation:', err);

      if (err?.code) {
        switch (err.code) {
          case 'P2025':
            return res.status(404).json({ error: 'Related record not found' });
          case 'P2002':
            return res.status(409).json({ error: 'Calculation already exists' });
          default:
            return res.status(400).json({ error: err.meta ?? err.message });
        }
      }

      return res
        .status(500)
        .json({ error: 'Unexpected error while creating calculation.' });
    }
  }

  // Only POST allowed here
  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}