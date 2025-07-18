import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/ui/loading";
import { ErrorMessage } from "@/components/ui/error";
import Dashboard from "@/components/vesting-schedules/Dashboard";

interface UnlockEvent {
  id: string;
  unlockDate: string;
  amount: number;
  frequency: string;
  duration?: number;
}

interface VestingSchedule {
  id: string;
  name: string;
  tokenSymbol: string;
  totalQuantity: number;
  purchasePrice?: number;
  purchaseDate?: string;
  unlockEvents: UnlockEvent[];
}

export default function Home() {
  const [schedules, setSchedules] = useState<VestingSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/vesting-schedules');
      if (!response.ok) {
        throw new Error('Failed to fetch schedules');
      }
      const data = await response.json();
      setSchedules(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Loading message="Loading vesting schedules..." size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <ErrorMessage message={error} onRetry={fetchSchedules} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Dashboard schedules={schedules} />
      </div>
    </div>
  );
}