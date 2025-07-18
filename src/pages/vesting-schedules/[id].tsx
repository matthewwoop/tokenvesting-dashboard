'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  ArrowLeft, 
  RefreshCw, 
  TrendingUp, 
  Lock, 
  Unlock, 
  DollarSign,
  Calendar,
  Clock
} from 'lucide-react';
import { getTokenData } from '@/lib/marketData';
import { calculateVestingMetrics } from '@/lib/optionPricing';

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

interface DLOMCalculation {
  id: string;
  runAt: string;
  totalUnlocked: number;
  totalLocked: number;
  discountPercent?: number;
  discountedValue?: number;
  resultsJson: any;
}

export default function VestingScheduleDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const [schedule, setSchedule] = useState<VestingSchedule | null>(null);
  const [calculation, setCalculation] = useState<DLOMCalculation | null>(null);
  const [tokenData, setTokenData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchScheduleData();
    }
  }, [id]);

  const fetchScheduleData = async () => {
    try {
      setLoading(true);
      
      // Fetch schedule
      const scheduleRes = await fetch(`/api/vesting-schedules/${id}`);
      if (!scheduleRes.ok) throw new Error('Schedule not found');
      const scheduleData = await scheduleRes.json();
      setSchedule(scheduleData);

      // Fetch latest calculation
      const calcRes = await fetch(`/api/vesting-schedules/${id}/calculations`);
      if (calcRes.ok) {
        const calcData = await calcRes.json();
        if (calcData.length > 0) {
          setCalculation(calcData[calcData.length - 1]);
        }
      }

      // Fetch token data
      const token = scheduleData.tokenSymbol || 'SOL';
      const tokenInfo = await getTokenData(token);
      setTokenData(tokenInfo);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const recalculateDLOM = async () => {
    try {
      const response = await fetch(`/api/vesting-schedules/${id}/calculate`, {
        method: 'POST'
      });
      if (response.ok) {
        await fetchScheduleData();
      }
    } catch (err) {
      console.error('Error recalculating:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4">Loading schedule details...</p>
        </div>
      </div>
    );
  }

  if (error || !schedule) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error || 'Schedule not found'}</p>
          <Button onClick={() => router.push('/')}>Back to Dashboard</Button>
        </div>
      </div>
    );
  }

  // Calculate current metrics
  const now = new Date();
  const unlockedQuantity = schedule.unlockEvents
    .filter(event => new Date(event.unlockDate) <= now)
    .reduce((sum, event) => sum + event.amount, 0);

  const lockedQuantity = schedule.totalQuantity - unlockedQuantity;
  const unlockPercentage = (unlockedQuantity / schedule.totalQuantity) * 100;

  // Generate timeline data
  const timelineData = schedule.unlockEvents
    .sort((a, b) => new Date(a.unlockDate).getTime() - new Date(b.unlockDate).getTime())
    .map((event, index) => {
      const cumulativeAmount = schedule.unlockEvents
        .slice(0, index + 1)
        .reduce((sum, e) => sum + e.amount, 0);
      
      return {
        date: new Date(event.unlockDate).toLocaleDateString(),
        amount: event.amount,
        cumulative: cumulativeAmount,
        percentage: (cumulativeAmount / schedule.totalQuantity) * 100,
        isUnlocked: new Date(event.unlockDate) <= now
      };
    });

  const pieData = [
    { name: 'Unlocked', value: unlockedQuantity, color: '#00C49F' },
    { name: 'Locked', value: lockedQuantity, color: '#FFBB28' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => router.push('/')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-3xl font-bold">{schedule.name}</h1>
              <p className="text-gray-600">{schedule.tokenSymbol} Vesting Schedule</p>
            </div>
          </div>
          <Button onClick={recalculateDLOM} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Recalculate
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tokens</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {schedule.totalQuantity.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                {schedule.tokenSymbol}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unlocked</CardTitle>
              <Unlock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {unlockedQuantity.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                {unlockPercentage.toFixed(1)}% of total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Locked</CardTitle>
              <Lock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {lockedQuantity.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                {(100 - unlockPercentage).toFixed(1)}% of total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Value</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${tokenData ? (schedule.totalQuantity * tokenData.current_price).toLocaleString() : 'N/A'}
              </div>
              <p className="text-xs text-muted-foreground">
                @ ${tokenData?.current_price?.toFixed(2) || 'N/A'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Token Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Token Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => [value.toLocaleString(), 'Tokens']} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Unlock Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Unlock Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={timelineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="cumulative" stroke="#8884d8" name="Cumulative Unlocked" />
                  <Line type="monotone" dataKey="percentage" stroke="#82ca9d" name="Unlock %" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* DLOM Calculation Results */}
        {calculation && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>DLOM Calculation Results</CardTitle>
              <p className="text-sm text-gray-600">
                Last calculated: {new Date(calculation.runAt).toLocaleString()}
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {calculation.discountPercent?.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600">DLOM Discount</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    ${calculation.discountedValue?.toLocaleString() || 'N/A'}
                  </div>
                  <div className="text-sm text-gray-600">Discounted Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    ${tokenData ? (schedule.totalQuantity * tokenData.current_price).toLocaleString() : 'N/A'}
                  </div>
                  <div className="text-sm text-gray-600">Spot Value</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Unlock Events Table */}
        <Card>
          <CardHeader>
            <CardTitle>Unlock Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Date</th>
                    <th className="text-left p-2">Amount</th>
                    <th className="text-left p-2">Frequency</th>
                    <th className="text-left p-2">Status</th>
                    <th className="text-left p-2">Days Remaining</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.unlockEvents
                    .sort((a, b) => new Date(a.unlockDate).getTime() - new Date(b.unlockDate).getTime())
                    .map((event, index) => {
                      const eventDate = new Date(event.unlockDate);
                      const isUnlocked = eventDate <= now;
                      const daysRemaining = Math.ceil((eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
                      
                      return (
                        <tr key={event.id} className="border-b hover:bg-gray-50">
                          <td className="p-2">{eventDate.toLocaleDateString()}</td>
                          <td className="p-2">{event.amount.toLocaleString()}</td>
                          <td className="p-2">{event.frequency}</td>
                          <td className="p-2">
                            <span className={`px-2 py-1 rounded text-xs ${
                              isUnlocked 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {isUnlocked ? 'Unlocked' : 'Locked'}
                            </span>
                          </td>
                          <td className="p-2">
                            {isUnlocked ? (
                              <span className="text-green-600">✓ Complete</span>
                            ) : (
                              <span className="text-gray-600">{daysRemaining} days</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}