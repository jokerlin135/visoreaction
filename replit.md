# Photo Enhance App - Web Application

A mobile-first photo enhancement web application built with React, Vite, and Tailwind CSS. Features AI-powered photo enhancement, aging simulation, and artistic photo transformations.

## Overview

This is a modern web application that provides various photo enhancement and transformation features. The app is designed with a mobile-first approach and includes multiple screens for different photo editing capabilities.

## Project Architecture

### Tech Stack
- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.x
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: ShadCN/UI components with Radix UI primitives
- **Icons**: Lucide React
- **Language**: TypeScript

### Project Structure
```
├── src/
│   └── main.tsx              # Application entry point
├── components/
│   ├── ui/                   # Reusable UI components (ShadCN)
│   ├── IntroPage.tsx         # Welcome/onboarding screens
│   ├── HomeScreen.tsx        # Main dashboard
│   ├── IAPPage.tsx           # In-app purchase/subscription
│   ├── ProIAPPage.tsx        # Pro subscription page
│   ├── SettingsScreen.tsx    # User settings
│   ├── AIToolsScreen.tsx     # AI tools overview
│   ├── TrendingScreen.tsx    # Trending effects
│   ├── ForYouScreen.tsx      # Personalized recommendations
│   ├── HeadshotsScreen.tsx   # Professional headshots
│   ├── TopHitsScreen.tsx     # Popular effects
│   ├── ExploreScreen.tsx     # Browse all features
│   ├── FixOldPhotoScreen.tsx # Photo restoration
│   ├── HDImageScreen.tsx     # HD enhancement
│   ├── AIPhotoScreen.tsx     # AI photo generation
│   ├── FaceSwapScreen.tsx    # Face swap feature
│   ├── FigurineScreen.tsx    # 3D figurine conversion
│   └── MineScreen.tsx        # User profile/gallery
├── styles/
│   └── globals.css           # Global styles and Tailwind config
├── App.tsx                   # Main app component with routing
├── index.html                # HTML entry point
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── package.json              # Dependencies and scripts
```

### Key Features
1. **Intro Flow**: 4-page onboarding with full-screen background images
2. **Subscription System**: IAP pages for basic and pro subscriptions
3. **Photo Enhancement**: Multiple AI-powered enhancement tools
4. **Aging Simulation**: Time-lapse aging technology
5. **Artistic Transformations**: Convert photos to various art styles
6. **Face Swap**: Character-based face replacement
7. **3D Figurine**: Convert photos to 3D figurine models
8. **HD Enhancement**: Upscale images to high definition

## Development Setup

### Running Locally
```bash
npm run dev
```
Server runs on `http://localhost:5000`

### Building for Production
```bash
npm run build
npm run preview
```

### Deployment
The app is configured for Replit Autoscale deployment:
- Build command: `npm run build`
- Run command: `npm run preview`
- Port: 5000

## Configuration

### Vite Configuration
- Host: `0.0.0.0` (allows Replit proxy access)
- Port: `5000` (strict port binding)
- HMR configured for proxy compatibility

### Tailwind CSS
- Custom design system with CSS variables
- Dark mode support
- ShadCN UI component library integrated
- Mobile-first responsive design

## Recent Changes (October 2025)

### Initial Setup
- Migrated from Expo to Vite + React for web deployment
- Configured Vite with proper host settings for Replit environment
- Set up Tailwind CSS with complete design system
- Fixed Figma asset imports by replacing with placeholder images
- Corrected versioned package imports in UI components
- Added all Tailwind directives to globals.css
- Configured deployment for Replit Autoscale

## User Preferences

Not set yet.

## Notes

- The app uses a state-based navigation system (no router library)
- All screens are conditionally rendered based on state
- Mobile-optimized with touch-friendly UI elements
- Background images from Unsplash
- AdMob banner integration prepared (components exist)
- Vietnamese pricing (₫) for subscription plans
