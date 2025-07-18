import ScheduleForm from '@/components/vesting-schedules/ScheduleForm';

export default function NewVestingSchedule() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <ScheduleForm />
      </div>
    </div>
  );
}