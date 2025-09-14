'use client';

import { cn } from '@/lib/utils';

interface FarcasterProfileLinkProps {
  variant?: 'default';
  className?: string;
}

export function FarcasterProfileLink({ variant = 'default', className }: FarcasterProfileLinkProps) {
  // For now, we'll use mock data since MiniKit context isn't available in build
  // TODO: Integrate with MiniKit context when available
  return null;
}
