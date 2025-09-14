export interface User {
  userId: string;
  username: string;
  profilePicture?: string;
  pointsBalance: number;
  level: number;
  achievements: Achievement[];
}

export interface RecyclingLog {
  logId: string;
  userId: string;
  itemId: string;
  itemType: string;
  pointsEarned: number;
  timestamp: Date;
  scanMethod: 'barcode' | 'image';
  verificationStatus: 'pending' | 'verified' | 'rejected';
}

export interface Reward {
  rewardId: string;
  name: string;
  description: string;
  pointCost: number;
  type: 'discount' | 'giftcard' | 'cash';
  partnerInfo: string;
  availability: number;
  imageUrl?: string;
}

export interface RewardRedemption {
  redemptionId: string;
  userId: string;
  rewardId: string;
  pointsUsed: number;
  timestamp: Date;
  status: 'pending' | 'fulfilled' | 'cancelled';
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface Challenge {
  id: string;
  name: string;
  description: string;
  targetValue: number;
  currentValue: number;
  pointsReward: number;
  expiresAt: Date;
  type: 'daily' | 'weekly' | 'monthly';
}
