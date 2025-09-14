# RecycleRewards - Base Mini App

Turn your recycling into real rewards with this gamified mobile app built on Base.

## Features

- **Gamified Recycling Tracking**: Scan barcodes or take photos to log recyclable items and earn points
- **Rewards Marketplace**: Redeem points for gift cards, discounts, and cash rewards
- **Social Integration**: Share achievements via Farcaster
- **Challenges & Achievements**: Daily, weekly, and monthly challenges to keep you motivated
- **Progress Tracking**: Level up system and detailed recycling statistics

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base Network integration via OnchainKit
- **Mini App**: Built with MiniKit for Base App integration
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety throughout

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   - Copy `.env.local` and add your OnchainKit API key
   - Get your API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Base App**:
   - The app is designed to run as a Mini App within Base App
   - For development, you can access it at `http://localhost:3000`

## Project Structure

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx           # Main dashboard page
├── providers.tsx      # MiniKit and OnchainKit providers
└── globals.css        # Global styles and design tokens

components/
├── AppShell.tsx       # Main app container
├── PrimaryButton.tsx  # Primary action button
├── ProgressBar.tsx    # Progress indicators
├── RecycleItemCard.tsx # Recycling log display
├── RewardOfferCard.tsx # Reward marketplace items
├── ScanButton.tsx     # Item scanning interface
├── StatsCard.tsx      # Statistics display
├── ChallengeCard.tsx  # Challenge progress
└── FarcasterProfileLink.tsx # Social profile integration

lib/
├── types.ts           # TypeScript type definitions
└── utils.ts           # Utility functions and mock data
```

## Design System

The app uses a green eco-friendly color palette:

- **Primary**: `hsl(142, 70%, 45%)` - Eco green
- **Accent**: `hsl(48, 100%, 50%)` - Bright yellow
- **Background**: `hsl(150, 10%, 95%)` - Light green-gray
- **Surface**: `hsl(150, 10%, 100%)` - Pure white
- **Text Primary**: `hsl(150, 10%, 15%)` - Dark green-gray
- **Text Secondary**: `hsl(150, 10%, 40%)` - Medium green-gray

## Key Features Implementation

### Scanning System
- Mock barcode/QR code scanning with realistic delays
- Image recognition simulation
- Point calculation based on item type
- Verification status tracking

### Rewards System
- Point-based economy
- Multiple reward types (gift cards, discounts, cash)
- Partner integration ready
- Availability tracking

### Gamification
- Level progression system
- Achievement unlocking
- Daily/weekly/monthly challenges
- Progress visualization

### Social Features
- Farcaster profile integration
- Achievement sharing
- Community challenges
- Social proof elements

## Base Mini App Integration

This app is built specifically for Base Mini Apps with:

- **MiniKitProvider** configuration for Base network
- **OnchainKit** components for wallet integration
- **Farcaster** social features
- **Mobile-first** responsive design
- **Frame actions** for in-app interactions

## Development Notes

- All React components use `.tsx` extensions for TypeScript
- Mobile-first responsive design approach
- Proper error boundaries and loading states
- Accessibility features included
- Performance optimized with proper code splitting

## Deployment

The app is ready for deployment to Vercel or similar platforms. Make sure to:

1. Set environment variables in your deployment platform
2. Configure domain for Base Mini App manifest
3. Test thoroughly in Base App environment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
