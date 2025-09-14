'use client';

import { useMiniKit } from '@coinbase/minikit';
import { cn } from '@/lib/utils';

interface FarcasterProfileLinkProps {
  variant?: 'default';
  className?: string;
}

export function FarcasterProfileLink({ variant = 'default', className }: FarcasterProfileLinkProps) {
  const { context } = useMiniKit();
  
  if (!context?.user) {
    return null;
  }

  return (
    <div className={cn(
      'flex items-center gap-3 p-3 bg-surface rounded-lg border border-border',
      className
    )}>
      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white font-semibold text-sm">
          {context.user.displayName?.[0]?.toUpperCase() || 'U'}
        </span>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="font-medium text-text-primary truncate">
          {context.user.displayName || 'Farcaster User'}
        </div>
        <div className="text-sm text-text-secondary truncate">
          @{context.user.username || 'user'}
        </div>
      </div>
      
      <div className="text-purple-600">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
    </div>
  );
}
