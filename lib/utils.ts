import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPoints(points: number): string {
  if (points >= 1000000) {
    return `${(points / 1000000).toFixed(1)}M`;
  }
  if (points >= 1000) {
    return `${(points / 1000).toFixed(1)}K`;
  }
  return points.toString();
}

export function calculateLevel(points: number): number {
  return Math.floor(points / 100) + 1;
}

export function getPointsForNextLevel(currentPoints: number): number {
  const currentLevel = calculateLevel(currentPoints);
  return currentLevel * 100 - currentPoints;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function generateMockData() {
  return {
    user: {
      userId: '0x1234567890abcdef',
      username: 'EcoWarrior',
      profilePicture: '/avatar.png',
      pointsBalance: 1250,
      level: 13,
      achievements: [
        {
          id: '1',
          name: 'First Scan',
          description: 'Scanned your first recyclable item',
          icon: '🎯',
          unlockedAt: new Date('2024-01-15'),
        },
        {
          id: '2',
          name: 'Eco Champion',
          description: 'Recycled 100 items',
          icon: '🏆',
          unlockedAt: new Date('2024-02-01'),
        },
      ],
    },
    recentLogs: [
      {
        logId: '1',
        userId: '0x1234567890abcdef',
        itemId: 'bottle-001',
        itemType: 'Plastic Bottle',
        pointsEarned: 10,
        timestamp: new Date(),
        scanMethod: 'barcode' as const,
        verificationStatus: 'verified' as const,
      },
      {
        logId: '2',
        userId: '0x1234567890abcdef',
        itemId: 'can-001',
        itemType: 'Aluminum Can',
        pointsEarned: 15,
        timestamp: new Date(Date.now() - 3600000),
        scanMethod: 'image' as const,
        verificationStatus: 'verified' as const,
      },
    ],
    rewards: [
      {
        rewardId: '1',
        name: '$5 Coffee Shop Gift Card',
        description: 'Enjoy a free coffee at participating locations',
        pointCost: 500,
        type: 'giftcard' as const,
        partnerInfo: 'Green Bean Coffee',
        availability: 50,
        imageUrl: '/coffee-reward.png',
      },
      {
        rewardId: '2',
        name: '20% Off Eco Products',
        description: 'Discount on sustainable household items',
        pointCost: 300,
        type: 'discount' as const,
        partnerInfo: 'EcoStore',
        availability: 100,
        imageUrl: '/eco-reward.png',
      },
      {
        rewardId: '3',
        name: 'Cash Out $2',
        description: 'Direct cash payout to your wallet',
        pointCost: 200,
        type: 'cash' as const,
        partnerInfo: 'RecycleRewards',
        availability: 999,
        imageUrl: '/cash-reward.png',
      },
    ],
    challenges: [
      {
        id: '1',
        name: 'Daily Recycler',
        description: 'Recycle 5 items today',
        targetValue: 5,
        currentValue: 2,
        pointsReward: 50,
        expiresAt: new Date(Date.now() + 86400000),
        type: 'daily' as const,
      },
      {
        id: '2',
        name: 'Weekly Warrior',
        description: 'Recycle 25 items this week',
        targetValue: 25,
        currentValue: 12,
        pointsReward: 200,
        expiresAt: new Date(Date.now() + 604800000),
        type: 'weekly' as const,
      },
    ],
  };
}
