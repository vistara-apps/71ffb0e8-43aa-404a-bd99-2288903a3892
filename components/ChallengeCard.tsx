'use client';

import { Challenge } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ProgressBar } from './ProgressBar';

interface ChallengeCardProps {
  challenge: Challenge;
  className?: string;
}

export function ChallengeCard({ challenge, className }: ChallengeCardProps) {
  const getTypeColor = (type: Challenge['type']) => {
    switch (type) {
      case 'daily':
        return 'bg-blue-100 text-blue-800';
      case 'weekly':
        return 'bg-purple-100 text-purple-800';
      case 'monthly':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const isCompleted = challenge.currentValue >= challenge.targetValue;
  const timeLeft = Math.max(0, challenge.expiresAt.getTime() - Date.now());
  const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));

  return (
    <div className={cn(
      'bg-surface rounded-lg p-4 shadow-card border border-border',
      isCompleted && 'ring-2 ring-primary ring-opacity-50',
      className
    )}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-text-primary">
              {challenge.name}
            </h3>
            <span className={cn(
              'px-2 py-1 rounded-full text-xs font-medium',
              getTypeColor(challenge.type)
            )}>
              {challenge.type}
            </span>
          </div>
          <p className="text-text-secondary text-sm">
            {challenge.description}
          </p>
        </div>
        
        <div className="text-right ml-3">
          <div className="text-lg font-semibold text-accent">
            +{challenge.pointsReward}
          </div>
          <div className="text-xs text-text-secondary">
            points
          </div>
        </div>
      </div>
      
      <ProgressBar
        value={challenge.currentValue}
        max={challenge.targetValue}
        variant="challenge"
        showLabel
        label={`Progress (${hoursLeft}h left)`}
      />
      
      {isCompleted && (
        <div className="mt-3 text-center">
          <span className="inline-flex items-center gap-1 text-primary font-medium text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Challenge Complete!
          </span>
        </div>
      )}
    </div>
  );
}
