'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AppShellProps {
  children: ReactNode;
  variant?: 'default' | 'glass';
  className?: string;
}

export function AppShell({ children, variant = 'default', className }: AppShellProps) {
  return (
    <div className={cn(
      'min-h-screen w-full max-w-md mx-auto relative',
      variant === 'glass' && 'backdrop-blur-sm bg-surface/80',
      variant === 'default' && 'bg-background',
      className
    )}>
      <div className="pb-20">
        {children}
      </div>
    </div>
  );
}
