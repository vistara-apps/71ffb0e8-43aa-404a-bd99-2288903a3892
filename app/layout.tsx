import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'RecycleRewards - Turn your recycling into real rewards',
  description: 'A gamified mobile app that rewards eco-conscious consumers for recycling, with a marketplace for redeeming points.',
  openGraph: {
    title: 'RecycleRewards',
    description: 'Turn your recycling into real rewards',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
