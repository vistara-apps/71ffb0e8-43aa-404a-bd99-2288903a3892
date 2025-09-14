'use client';

import { RecyclingLog } from '@/lib/types';
import { cn, formatDate } from '@/lib/utils';

interface RecycleItemCardProps {
  log: RecyclingLog;
  variant?: 'scanned' | 'logged';
  className?: string;
}

export function RecycleItemCard({ log, variant = 'logged', className }: RecycleItemCardProps) {
  const getStatusColor = (status: RecyclingLog['verificationStatus']) => {
    switch (status) {
      case 'verified':
        return 'text-green-600 bg-green-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'rejected':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-text-secondary bg-border';
    }
  };

  const getScanMethodIcon = (method: RecyclingLog['scanMethod']) => {
    return method === 'barcode' ? '📱' : '📷';
  };

  return (
    <div className={cn(
      'bg-surface rounded-lg p-4 shadow-card border border-border',
      variant === 'scanned' && 'animate-slide-up',
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">
              {getScanMethodIcon(log.scanMethod)}
            </span>
            <h3 className="font-medium text-text-primary">
              {log.itemType}
            </h3>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <span>{formatDate(log.timestamp)}</span>
            <span className={cn(
              'px-2 py-1 rounded-full text-xs font-medium',
              getStatusColor(log.verificationStatus)
            )}>
              {log.verificationStatus}
            </span>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-lg font-semibold text-primary">
            +{log.pointsEarned}
          </div>
          <div className="text-xs text-text-secondary">
            points
          </div>
        </div>
      </div>
    </div>
  );
}
