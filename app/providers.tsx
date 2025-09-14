'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import { useEffect, useState } from 'react';

const baseChain = {
  id: 8453,
  name: 'Base',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://mainnet.base.org'] },
  },
};

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render OnchainKitProvider during SSR
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || ''}
      chain={baseChain}
    >
      {children}
    </OnchainKitProvider>
  );
}
