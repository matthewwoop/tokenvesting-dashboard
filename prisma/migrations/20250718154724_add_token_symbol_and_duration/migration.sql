-- AlterTable
ALTER TABLE "UnlockEvent" ADD COLUMN     "duration" INTEGER;

-- AlterTable
ALTER TABLE "VestingSchedule" ADD COLUMN     "tokenSymbol" TEXT NOT NULL DEFAULT 'SOL';
