import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid schedule ID' });
  }

  switch (req.method) {
    case 'POST': {
      // Create unlock events for a vesting schedule
      const { unlockDate, amount, frequency, duration } = req.body;

      if (!unlockDate || !amount || !frequency) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      try {
        const unlockEvent = await prisma.unlockEvent.create({
          data: {
            vestingScheduleId: id,
            unlockDate: new Date(unlockDate),
            amount: parseFloat(amount),
            frequency,
            duration: duration ? parseInt(duration) : undefined,
          },
        });

        return res.status(201).json(unlockEvent);
      } catch (error) {
        console.error('Error creating unlock event:', error);
        return res.status(500).json({ error: 'Failed to create unlock event' });
      }
    }

    case 'GET': {
      // Get all unlock events for a vesting schedule
      try {
        const unlockEvents = await prisma.unlockEvent.findMany({
          where: {
            vestingScheduleId: id,
          },
          orderBy: {
            unlockDate: 'asc',
          },
        });

        return res.status(200).json(unlockEvents);
      } catch (error) {
        console.error('Error fetching unlock events:', error);
        return res.status(500).json({ error: 'Failed to fetch unlock events' });
      }
    }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 