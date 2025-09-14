'use client';

import { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';

interface ScanButtonProps {
  onScan?: (result: { itemType: string; points: number }) => void;
  className?: string;
}

export function ScanButton({ onScan, className }: ScanButtonProps) {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = async () => {
    setIsScanning(true);
    
    // Simulate scanning process
    setTimeout(() => {
      const mockResults = [
        { itemType: 'Plastic Bottle', points: 10 },
        { itemType: 'Aluminum Can', points: 15 },
        { itemType: 'Glass Jar', points: 20 },
        { itemType: 'Cardboard Box', points: 8 },
      ];
      
      const result = mockResults[Math.floor(Math.random() * mockResults.length)];
      onScan?.(result);
      setIsScanning(false);
    }, 2000);
  };

  return (
    <PrimaryButton
      variant={isScanning ? 'loading' : 'default'}
      size="lg"
      onClick={handleScan}
      className={className}
    >
      <span className="flex items-center gap-2">
        {!isScanning && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 16h4.01M12 8h4.01" />
          </svg>
        )}
        {isScanning ? 'Scanning...' : 'Scan Item'}
      </span>
    </PrimaryButton>
  );
}
