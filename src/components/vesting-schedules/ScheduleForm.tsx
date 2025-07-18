'use client';

import { useRouter } from 'next/navigation';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar, ChevronDown } from 'lucide-react';

type UnlockEvent = {
  unlockDate: Date;
  amount: number;
  frequency: 'cliff' | 'daily' | 'weekly' | 'monthly';
  duration?: number; // For recurring events
};

type FormValues = {
  name: string;
  tokenSymbol: string;
  totalQuantity: number;
  purchasePrice?: number;
  purchaseDate: Date;
  unlockEvents: UnlockEvent[];
};

const SUPPORTED_TOKENS = [
  { symbol: 'SOL', name: 'Solana' },
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'BTC', name: 'Bitcoin' },
  { symbol: 'USDC', name: 'USD Coin' },
  { symbol: 'USDT', name: 'Tether' },
  { symbol: 'MATIC', name: 'Polygon' },
  { symbol: 'AVAX', name: 'Avalanche' },
  { symbol: 'DOT', name: 'Polkadot' },
  { symbol: 'ADA', name: 'Cardano' },
  { symbol: 'LINK', name: 'Chainlink' }
];

const FREQUENCY_OPTIONS = [
  { value: 'cliff', label: 'Cliff (One-time)' },
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' }
];

export default function ScheduleForm() {
  const router = useRouter();
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      tokenSymbol: 'SOL',
      totalQuantity: 0,
      purchasePrice: undefined,
      purchaseDate: new Date(),
      unlockEvents: []
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'unlockEvents'
  });

  const watchedEvents = watch('unlockEvents');
  const totalQuantity = watch('totalQuantity');

  // Calculate total allocated tokens
  const totalAllocated = watchedEvents.reduce((sum, event) => sum + (event.amount || 0), 0);
  const remainingTokens = totalQuantity - totalAllocated;

  const addCliffEvent = () => {
    append({
      unlockDate: new Date(),
      amount: 0,
      frequency: 'cliff'
    });
  };

  const addRecurringEvent = () => {
    append({
      unlockDate: new Date(),
      amount: 0,
      frequency: 'daily',
      duration: 30
    });
  };

  const onSubmit = async (data: FormValues) => {
    if (Math.abs(remainingTokens) > 0.01) {
      alert(`Total allocated tokens (${totalAllocated}) must equal total quantity (${totalQuantity})`);
      return;
    }

    try {
      // Create schedule
      const createRes = await fetch('/api/vesting-schedules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          tokenSymbol: data.tokenSymbol,
          totalQuantity: data.totalQuantity,
          purchasePrice: data.purchasePrice,
          purchaseDate: data.purchaseDate.toISOString()
        }),
      });

      if (!createRes.ok) {
        throw new Error('Failed to create schedule');
      }

      const { id } = await createRes.json();

      // POST events
      await Promise.all(
        data.unlockEvents.map(ev =>
          fetch(`/api/vesting-schedules/${id}/unlock-events`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              unlockDate: ev.unlockDate.toISOString(),
              amount: ev.amount,
              frequency: ev.frequency,
              duration: ev.duration
            }),
          })
        )
      );

      // Trigger calculation
      await fetch(`/api/vesting-schedules/${id}/calculate`, { method: 'POST' });

      // Redirect to results
      router.push(`/vesting-schedules/${id}`);
    } catch (error) {
      console.error('Error creating schedule:', error);
      alert('Failed to create schedule. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="max-w-4xl mx-auto mt-10 shadow">
        <CardHeader>
          <CardTitle className="text-2xl">Create a Vesting Schedule</CardTitle>
          <p className="text-gray-600">Define token lockup terms and unlock schedule</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* --- Schedule Details --- */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Schedule Name</Label>
              <Input
                id="name"
                placeholder="e.g. Team Grant, Investor Lockup"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <Label htmlFor="tokenSymbol">Token Symbol</Label>
              <select
                id="tokenSymbol"
                className="w-full p-2 border border-gray-300 rounded-md"
                {...register("tokenSymbol")}
              >
                {SUPPORTED_TOKENS.map(token => (
                  <option key={token.symbol} value={token.symbol}>
                    {token.symbol} - {token.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* --- Quantity & Price --- */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <Label htmlFor="totalQuantity">Total Quantity</Label>
              <Input
                id="totalQuantity"
                type="number"
                step="0.01"
                placeholder="100000"
                {...register("totalQuantity", { 
                  valueAsNumber: true, 
                  required: "Total quantity is required",
                  min: { value: 0, message: "Quantity must be positive" }
                })}
              />
              {errors.totalQuantity && <p className="text-red-500 text-sm mt-1">{errors.totalQuantity.message}</p>}
            </div>

            <div>
              <Label htmlFor="purchasePrice">Purchase Price (USD)</Label>
              <Input
                id="purchasePrice"
                type="number"
                step="0.01"
                placeholder="150.00"
                {...register("purchasePrice", { valueAsNumber: true })}
              />
            </div>

            <div>
              <Label htmlFor="purchaseDate">Purchase Date</Label>
              <Controller
                control={control}
                name="purchaseDate"
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    dateFormat="MMM dd, yyyy"
                  />
                )}
              />
            </div>
          </div>

          {/* --- Token Allocation Summary --- */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium">Token Allocation:</span>
              <div className="text-right">
                <div className="text-sm text-gray-600">
                  Allocated: {totalAllocated.toLocaleString()} / {totalQuantity.toLocaleString()}
                </div>
                <div className={`text-sm ${remainingTokens > 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {remainingTokens > 0 ? `Remaining: ${remainingTokens.toLocaleString()}` : '✓ Fully allocated'}
                </div>
              </div>
            </div>
            {totalQuantity > 0 && fields.length === 0 && (
              <div className="mt-2 text-sm text-blue-600">
                💡 Add unlock events to allocate your {totalQuantity.toLocaleString()} tokens
              </div>
            )}
            {totalQuantity === 0 && (
              <div className="mt-2 text-sm text-orange-600">
                💡 Enter a total quantity to get started
              </div>
            )}
          </div>

          {/* --- Unlock Events --- */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-lg font-medium">Unlock Events</Label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={addCliffEvent}
                >
                  + Add Cliff
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={addRecurringEvent}
                >
                  + Add Recurring
                </Button>
              </div>
            </div>

            {fields.map((field, idx) => (
              <div
                key={field.id}
                className="border rounded-lg p-4 space-y-4"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Event {idx + 1}</h4>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => remove(idx)}
                  >
                    Remove
                  </Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <Label>Unlock Date</Label>
                    <Controller
                      control={control}
                      name={`unlockEvents.${idx}.unlockDate`}
                      render={({ field }) => (
                        <DatePicker
                          selected={field.value}
                          onChange={(date) => field.onChange(date)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                          dateFormat="MMM dd, yyyy"
                        />
                      )}
                    />
                  </div>

                  <div>
                    <Label>Amount</Label>
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="10000"
                      {...register(
                        `unlockEvents.${idx}.amount` as const,
                        { valueAsNumber: true, required: "Amount is required" }
                      )}
                    />
                  </div>

                  <div>
                    <Label>Frequency</Label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md"
                      {...register(`unlockEvents.${idx}.frequency` as const)}
                    >
                      {FREQUENCY_OPTIONS.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {watchedEvents[idx]?.frequency !== 'cliff' && (
                    <div>
                      <Label>Duration (days)</Label>
                      <Input
                        type="number"
                        placeholder="30"
                        {...register(
                          `unlockEvents.${idx}.duration` as const,
                          { valueAsNumber: true }
                        )}
                      />
                    </div>
                  )}
                </div>

                {watchedEvents[idx]?.frequency !== 'cliff' && (
                  <div className="text-sm text-gray-600">
                    This will create recurring unlock events every {watchedEvents[idx]?.frequency} 
                    for {watchedEvents[idx]?.duration} days, starting from the unlock date.
                  </div>
                )}
              </div>
            ))}

            {fields.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No unlock events added yet. Click "Add Cliff" or "Add Recurring" to get started.
              </div>
            )}
          </div>

          {/* --- Submit --- */}
          <div className="flex gap-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => router.back()}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1"
              disabled={isSubmitting || totalQuantity === 0 || fields.length === 0 || Math.abs(remainingTokens) > 0.01}
            >
              {isSubmitting ? 'Creating...' : 
               totalQuantity === 0 ? 'Enter Total Quantity' :
               fields.length === 0 ? 'Add Unlock Events' :
               Math.abs(remainingTokens) > 0.01 ? `Allocate ${remainingTokens.toLocaleString()} More Tokens` :
               'Create Schedule'
              }
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}