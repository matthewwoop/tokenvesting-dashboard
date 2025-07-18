import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid schedule ID' });
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const calculations = await prisma.dLOMCalculation.findMany({
      where: {
        vestingScheduleId: id,
      },
      orderBy: {
        runAt: 'desc',
      },
    });

    return res.status(200).json(calculations);
  } catch (error) {
    console.error('Error fetching calculations:', error);
    return res.status(500).json({ error: 'Failed to fetch calculations' });
  }
} 