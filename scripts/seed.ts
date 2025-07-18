const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database with sample data...');

  // Create sample vesting schedules
  const schedules = [
    {
      name: 'Team Grant - SOL',
      tokenSymbol: 'SOL',
      totalQuantity: 100000,
      purchasePrice: 120,
      purchaseDate: new Date('2024-01-15'),
      unlockEvents: [
        {
          unlockDate: new Date('2024-07-15'),
          amount: 100000,
          frequency: 'cliff'
        }
      ]
    },
    {
      name: 'Investor Lockup - ETH',
      tokenSymbol: 'ETH',
      totalQuantity: 5000,
      purchasePrice: 2800,
      purchaseDate: new Date('2024-02-01'),
      unlockEvents: [
        {
          unlockDate: new Date('2024-02-01'),
          amount: 1000,
          frequency: 'cliff'
        },
        {
          unlockDate: new Date('2024-05-01'),
          amount: 4000,
          frequency: 'monthly',
          duration: 12
        }
      ]
    },
    {
      name: 'Advisor Vesting - MATIC',
      tokenSymbol: 'MATIC',
      totalQuantity: 25000,
      purchasePrice: 0.6,
      purchaseDate: new Date('2024-03-01'),
      unlockEvents: [
        {
          unlockDate: new Date('2024-09-01'),
          amount: 25000,
          frequency: 'daily',
          duration: 365
        }
      ]
    }
  ];

  for (const scheduleData of schedules) {
    const { unlockEvents, ...scheduleInfo } = scheduleData;
    
    const schedule = await prisma.vestingSchedule.create({
      data: scheduleInfo
    });

    console.log(`✅ Created schedule: ${schedule.name}`);

    // Create unlock events
    for (const eventData of unlockEvents) {
      await prisma.unlockEvent.create({
        data: {
          ...eventData,
          vestingScheduleId: schedule.id
        }
      });
    }

    console.log(`✅ Added ${unlockEvents.length} unlock events`);

    // Trigger DLOM calculation
    try {
      await fetch(`http://localhost:3000/api/vesting-schedules/${schedule.id}/calculate`, {
        method: 'POST'
      });
      console.log(`✅ Calculated DLOM for ${schedule.name}`);
    } catch (error) {
      console.log(`⚠️  Could not calculate DLOM (server may not be running): ${error}`);
    }
  }

  console.log('🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 