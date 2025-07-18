'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  TrendingUp, 
  Lock, 
  Unlock, 
  DollarSign, 
  Calendar,
  RefreshCw,
  Plus
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getTokenData } from '@/lib/marketData';
import { calculateVestingMetrics } from '@/lib/optionPricing';

interface UnlockEvent {
  id: string;
  unlockDate: string;
  amount: number;
  frequency: string;
}

interface VestingSchedule {
  id: string;
  name: string;
  totalQuantity: number;
  purchasePrice?: number;
  purchaseDate?: string;
  unlockEvents: UnlockEvent[];
  tokenSymbol?: string;
}

interface DashboardProps {
  schedules: VestingSchedule[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function Dashboard({ schedules }: DashboardProps) {
  const router = useRouter();
  const [tokenData, setTokenData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [selectedToken, setSelectedToken] = useState('SOL');

  useEffect(() => {
    loadTokenData();
  }, []);

  const loadTokenData = async () => {
    setLoading(true);
    const data: Record<string, any> = {};
    
    // Load data for all unique tokens
    const tokens = [...new Set(schedules.map(s => s.tokenSymbol || 'SOL'))];
    
    for (const token of tokens) {
      try {
        data[token] = await getTokenData(token);
      } catch (error) {
        console.error(`Failed to load data for ${token}:`, error);
      }
    }
    
    setTokenData(data);
    setLoading(false);
  };

  const calculateScheduleMetrics = (schedule: VestingSchedule) => {
    const token = schedule.tokenSymbol || 'SOL';
    const tokenInfo = tokenData[token];
    
    if (!tokenInfo) return null;

    const now = new Date();
    const futureEvents = schedule.unlockEvents
      .filter(event => new Date(event.unlockDate) > now)
      .sort((a, b) => new Date(a.unlockDate).getTime() - new Date(b.unlockDate).getTime());

    const unlockedQuantity = schedule.unlockEvents
      .filter(event => new Date(event.unlockDate) <= now)
      .reduce((sum, event) => sum + event.amount, 0);

    const nextUnlockDate = futureEvents.length > 0 ? new Date(futureEvents[0].unlockDate) : now;

    return calculateVestingMetrics(
      schedule.totalQuantity,
      unlockedQuantity,
      tokenInfo.current_price,
      0.87, // Default volatility - could be enhanced to fetch per token
      nextUnlockDate
    );
  };

  const generateUnlockTimeline = (schedule: VestingSchedule) => {
    const events = schedule.unlockEvents
      .sort((a, b) => new Date(a.unlockDate).getTime() - new Date(b.unlockDate).getTime());

    return events.map((event, index) => {
      const cumulativeAmount = events
        .slice(0, index + 1)
        .reduce((sum, e) => sum + e.amount, 0);
      
      return {
        date: new Date(event.unlockDate).toLocaleDateString(),
        amount: event.amount,
        cumulative: cumulativeAmount,
        percentage: (cumulativeAmount / schedule.totalQuantity) * 100
      };
    });
  };

  const totalPortfolioValue = schedules.reduce((sum, schedule) => {
    const metrics = calculateScheduleMetrics(schedule);
    return sum + (metrics?.discountedValue || 0);
  }, 0);

  const totalUnlockedValue = schedules.reduce((sum, schedule) => {
    const metrics = calculateScheduleMetrics(schedule);
    const token = schedule.tokenSymbol || 'SOL';
    const tokenInfo = tokenData[token];
    const unlockedQuantity = schedule.unlockEvents
      .filter(event => new Date(event.unlockDate) <= new Date())
      .reduce((sum, event) => sum + event.amount, 0);
    
    return sum + (unlockedQuantity * (tokenInfo?.current_price || 0));
  }, 0);

  const totalLockedValue = totalPortfolioValue - totalUnlockedValue;

  const portfolioData = [
    { name: 'Unlocked', value: totalUnlockedValue, color: '#00C49F' },
    { name: 'Locked', value: totalLockedValue, color: '#FFBB28' }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="animate-spin h-8 w-8" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Token Vesting Dashboard</h1>
          <p className="text-gray-600">Track and visualize your locked token positions</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={loadTokenData} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </Button>
          <Button onClick={() => router.push('/vesting-schedules/new')}>
            <Plus className="h-4 w-4 mr-2" />
            New Schedule
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      {schedules.length === 0 && (
        <Card className="mb-6">
          <CardContent className="text-center py-8">
            <h3 className="text-lg font-medium mb-2">Welcome to ParaFi Token Vesting</h3>
            <p className="text-gray-600 mb-4">
              Get started by creating your first vesting schedule to track locked token positions.
            </p>
            <Button onClick={() => router.push('/vesting-schedules/new')}>
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Schedule
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalPortfolioValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
            <p className="text-xs text-muted-foreground">
              {schedules.length} positions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unlocked Value</CardTitle>
            <Unlock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalUnlockedValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
            <p className="text-xs text-muted-foreground">
              {((totalUnlockedValue / totalPortfolioValue) * 100).toFixed(1)}% of portfolio
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Locked Value</CardTitle>
            <Lock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalLockedValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
            <p className="text-xs text-muted-foreground">
              {((totalLockedValue / totalPortfolioValue) * 100).toFixed(1)}% of portfolio
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Discount</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {schedules.length > 0 ? 
                (schedules.reduce((sum, schedule) => {
                  const metrics = calculateScheduleMetrics(schedule);
                  return sum + (metrics?.discountPercentage || 0);
                }, 0) / schedules.length).toFixed(1) : 0}%
            </div>
            <p className="text-xs text-muted-foreground">
              DLOM applied
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Composition */}
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Composition</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={portfolioData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {portfolioData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Token Price Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Token Prices</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={Object.values(tokenData)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="symbol" />
                <YAxis />
                <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, 'Price']} />
                <Bar dataKey="current_price" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Vesting Schedules Table */}
      <Card>
        <CardHeader>
          <CardTitle>Vesting Schedules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Name</th>
                  <th className="text-left p-2">Token</th>
                  <th className="text-left p-2">Total Quantity</th>
                  <th className="text-left p-2">Unlocked</th>
                  <th className="text-left p-2">Locked</th>
                  <th className="text-left p-2">Current Value</th>
                  <th className="text-left p-2">Discounted Value</th>
                  <th className="text-left p-2">Discount %</th>
                  <th className="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule) => {
                  const metrics = calculateScheduleMetrics(schedule);
                  const token = schedule.tokenSymbol || 'SOL';
                  const tokenInfo = tokenData[token];
                  
                  if (!metrics || !tokenInfo) return null;

                  return (
                    <tr key={schedule.id} className="border-b hover:bg-gray-50">
                      <td className="p-2 font-medium">{schedule.name}</td>
                      <td className="p-2">{token}</td>
                      <td className="p-2">{schedule.totalQuantity.toLocaleString()}</td>
                      <td className="p-2">{metrics.unlockedQuantity.toLocaleString()}</td>
                      <td className="p-2">{metrics.lockedQuantity.toLocaleString()}</td>
                      <td className="p-2">${metrics.totalValue.toLocaleString()}</td>
                      <td className="p-2">${metrics.discountedValue.toLocaleString()}</td>
                      <td className="p-2">{metrics.discountPercentage.toFixed(1)}%</td>
                      <td className="p-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => router.push(`/vesting-schedules/${schedule.id}`)}
                        >
                          View Details
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Unlock Timeline Chart */}
      {schedules.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Unlock Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={schedules.flatMap(schedule => generateUnlockTimeline(schedule))}>
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
      )}
    </div>
  );
} 