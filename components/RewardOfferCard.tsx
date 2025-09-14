'use client';

import { Reward } from '@/lib/types';
import { cn } from '@/lib/utils';
import { PrimaryButton } from './PrimaryButton';

interface RewardOfferCardProps {
  reward: Reward;
  variant?: 'featured' | 'redeemable';
  onRedeem?: (rewardId: string) => void;
  userPoints?: number;
  className?: string;
}

export function RewardOfferCard({ 
  reward, 
  variant = 'redeemable', 
  onRedeem,
  userPoints = 0,
  className 
}: RewardOfferCardProps) {
  const canAfford = userPoints >= reward.pointCost;
  const isAvailable = reward.availability > 0;

  const getTypeIcon = (type: Reward['type']) => {
    switch (type) {
      case 'giftcard':
        return '🎁';
      case 'discount':
        return '🏷️';
      case 'cash':
        return '💰';
      default:
        return '🎯';
    }
  };

  return (
    <div className={cn(
      'bg-surface rounded-lg shadow-card border border-border overflow-hidden',
      variant === 'featured' && 'ring-2 ring-accent ring-opacity-50',
      !isAvailable && 'opacity-60',
      className
    )}>
      {reward.imageUrl && (
        <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
          <span className="text-4xl">{getTypeIcon(reward.type)}</span>
        </div>
      )}
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-text-primary text-sm leading-tight">
            {reward.name}
          </h3>
          {variant === 'featured' && (
            <span className="bg-accent text-text-primary text-xs px-2 py-1 rounded-full font-medium">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-text-secondary text-xs mb-3 line-clamp-2">
          {reward.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="text-primary font-semibold">
            {reward.pointCost} pts
          </div>
          <div className="text-xs text-text-secondary">
            {reward.availability} left
          </div>
        </div>
        
        <PrimaryButton
          size="sm"
          className="w-full"
          disabled={!canAfford || !isAvailable}
          onClick={() => onRedeem?.(reward.rewardId)}
        >
          {!isAvailable ? 'Sold Out' : !canAfford ? 'Need More Points' : 'Redeem'}
        </PrimaryButton>
        
        <div className="text-xs text-text-secondary mt-2 text-center">
          by {reward.partnerInfo}
        </div>
      </div>
    </div>
  );
}
