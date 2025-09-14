'use client';

import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: string;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export function StatsCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  trend = 'neutral',
  className 
}: StatsCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <div className={cn(
      'bg-surface rounded-lg p-4 shadow-card border border-border',
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-text-secondary text-sm font-medium mb-1">
            {title}
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">
            {value}
          </div>
          {subtitle && (
            <div className={cn('text-sm', getTrendColor())}>
              {subtitle}
            </div>
          )}
        </div>
        {icon && (
          <div className="text-2xl ml-3">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
