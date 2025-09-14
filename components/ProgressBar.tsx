'use client';

import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max: number;
  variant?: 'level' | 'challenge';
  className?: string;
  showLabel?: boolean;
  label?: string;
}

export function ProgressBar({ 
  value, 
  max, 
  variant = 'level', 
  className,
  showLabel = false,
  label
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-text-primary">
            {label}
          </span>
          <span className="text-sm text-text-secondary">
            {value}/{max}
          </span>
        </div>
      )}
      <div className={cn(
        'w-full rounded-full overflow-hidden',
        variant === 'level' && 'h-2 bg-border',
        variant === 'challenge' && 'h-3 bg-border'
      )}>
        <div
          className={cn(
            'h-full transition-all duration-300 ease-out',
            variant === 'level' && 'bg-primary',
            variant === 'challenge' && 'bg-accent'
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
