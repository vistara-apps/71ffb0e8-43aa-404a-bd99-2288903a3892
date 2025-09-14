'use client';

import { useState, useEffect } from 'react';
import { useMiniKit } from '@coinbase/minikit';
import { AppShell } from '@/components/AppShell';
import { PrimaryButton } from '@/components/PrimaryButton';
import { ProgressBar } from '@/components/ProgressBar';
import { RecycleItemCard } from '@/components/RecycleItemCard';
import { StatsCard } from '@/components/StatsCard';
import { ScanButton } from '@/components/ScanButton';
import { ChallengeCard } from '@/components/ChallengeCard';
import { FarcasterProfileLink } from '@/components/FarcasterProfileLink';
import { generateMockData, formatPoints, getPointsForNextLevel } from '@/lib/utils';
import { RecyclingLog } from '@/lib/types';

export default function HomePage() {
  const { context } = useMiniKit();
  const [data, setData] = useState(generateMockData());
  const [recentScans, setRecentScans] = useState<RecyclingLog[]>([]);
  const [activeTab, setActiveTab] = useState<'home' | 'rewards' | 'profile'>('home');

  const handleScan = (result: { itemType: string; points: number }) => {
    const newLog: RecyclingLog = {
      logId: Date.now().toString(),
      userId: data.user.userId,
      itemId: `item-${Date.now()}`,
      itemType: result.itemType,
      pointsEarned: result.points,
      timestamp: new Date(),
      scanMethod: 'barcode',
      verificationStatus: 'verified',
    };

    setRecentScans(prev => [newLog, ...prev.slice(0, 4)]);
    setData(prev => ({
      ...prev,
      user: {
        ...prev.user,
        pointsBalance: prev.user.pointsBalance + result.points,
      },
    }));
  };

  const pointsToNextLevel = getPointsForNextLevel(data.user.pointsBalance);

  return (
    <AppShell>
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">RecycleRewards</h1>
            <p className="text-primary-foreground/80 text-sm">
              Turn recycling into rewards
            </p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">♻️</span>
          </div>
        </div>

        {/* User Stats */}
        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-2xl font-bold">
                {formatPoints(data.user.pointsBalance)}
              </div>
              <div className="text-sm opacity-80">Total Points</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold">Level {data.user.level}</div>
              <div className="text-sm opacity-80">{pointsToNextLevel} to next</div>
            </div>
          </div>
          <ProgressBar
            value={data.user.pointsBalance % 100}
            max={100}
            variant="level"
            className="mb-2"
          />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex bg-surface border-b border-border sticky top-0 z-10">
        {[
          { id: 'home', label: 'Home', icon: '🏠' },
          { id: 'rewards', label: 'Rewards', icon: '🎁' },
          { id: 'profile', label: 'Profile', icon: '👤' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? 'text-primary border-b-2 border-primary'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <span className="mr-1">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'home' && (
          <div className="space-y-6">
            {/* Scan Button */}
            <div className="text-center">
              <ScanButton onScan={handleScan} className="w-full" />
              <p className="text-text-secondary text-sm mt-2">
                Scan barcodes or take photos to earn points
              </p>
            </div>

            {/* Recent Scans */}
            {recentScans.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-text-primary mb-3">
                  Recent Scans
                </h2>
                <div className="space-y-3">
                  {recentScans.map((log) => (
                    <RecycleItemCard
                      key={log.logId}
                      log={log}
                      variant="scanned"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Daily Stats */}
            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                Today's Impact
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <StatsCard
                  title="Items Recycled"
                  value={recentScans.length}
                  icon="♻️"
                  trend="up"
                />
                <StatsCard
                  title="Points Earned"
                  value={recentScans.reduce((sum, log) => sum + log.pointsEarned, 0)}
                  icon="⭐"
                  trend="up"
                />
              </div>
            </div>

            {/* Active Challenges */}
            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                Active Challenges
              </h2>
              <div className="space-y-3">
                {data.challenges.map((challenge) => (
                  <ChallengeCard key={challenge.id} challenge={challenge} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rewards' && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                Rewards Marketplace
              </h2>
              <p className="text-text-secondary">
                You have {formatPoints(data.user.pointsBalance)} points to spend
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {data.rewards.map((reward) => (
                <div
                  key={reward.rewardId}
                  className="bg-surface rounded-lg p-4 shadow-card border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">
                        {reward.type === 'giftcard' ? '🎁' : reward.type === 'discount' ? '🏷️' : '💰'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary mb-1">
                        {reward.name}
                      </h3>
                      <p className="text-text-secondary text-sm mb-2">
                        {reward.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-semibold">
                          {reward.pointCost} pts
                        </span>
                        <PrimaryButton
                          size="sm"
                          disabled={data.user.pointsBalance < reward.pointCost}
                        >
                          Redeem
                        </PrimaryButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-6">
            {/* Farcaster Profile */}
            <FarcasterProfileLink />

            {/* User Stats */}
            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                Your Stats
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <StatsCard
                  title="Total Points"
                  value={formatPoints(data.user.pointsBalance)}
                  icon="⭐"
                />
                <StatsCard
                  title="Current Level"
                  value={data.user.level}
                  icon="🏆"
                />
                <StatsCard
                  title="Items Recycled"
                  value="127"
                  icon="♻️"
                />
                <StatsCard
                  title="CO₂ Saved"
                  value="12.4kg"
                  icon="🌱"
                />
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                Achievements
              </h2>
              <div className="space-y-3">
                {data.user.achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="bg-surface rounded-lg p-4 shadow-card border border-border"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <h3 className="font-medium text-text-primary">
                          {achievement.name}
                        </h3>
                        <p className="text-text-secondary text-sm">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Share Button */}
            <div className="text-center">
              <PrimaryButton className="w-full">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share My Progress
                </span>
              </PrimaryButton>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
