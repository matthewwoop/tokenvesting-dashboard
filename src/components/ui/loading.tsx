import { RefreshCw } from 'lucide-react';

interface LoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Loading({ message = 'Loading...', size = 'md' }: LoadingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <RefreshCw className={`animate-spin ${sizeClasses[size]} mx-auto text-gray-600`} />
        <p className="mt-4 text-gray-600">{message}</p>
      </div>
    </div>
  );
} 