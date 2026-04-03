
# Turathna Onboarding

A modern React application for the Turathna app's onboarding and authentication flows. This project provides a smooth user experience for new users to sign up, log in, and complete their onboarding journey.

## Features

- **Authentication Flow**: Complete login, signup, and password recovery system
- **Onboarding Experience**: Multi-step onboarding with smooth transitions and fixed pagination
- **Responsive Design**: Mobile-first design optimized for various screen sizes
- **Modern UI**: Built with shadcn/ui components and custom Turathna theming
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Routing**: React Router
- **Animations**: Motion/React

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd onboarding
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── App.tsx                 # Main app component
│   ├── routes.ts               # Route definitions
│   ├── components/
│   │   ├── auth/               # Authentication components
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── SignUpScreen.tsx
│   │   │   ├── ForgotPasswordPhone.tsx
│   │   │   ├── ForgotPasswordCode.tsx
│   │   │   └── ForgotPasswordReset.tsx
│   │   ├── onboarding/         # Onboarding components
│   │   │   ├── OnboardingScreen1.tsx
│   │   │   ├── OnboardingScreen2.tsx
│   │   │   ├── OnboardingScreen3.tsx
│   │   │   ├── OnboardingStepLayout.tsx
│   │   │   ├── IllustrationCard.tsx
│   │   │   └── PaginationDots.tsx
│   │   ├── ui/                 # Reusable UI components (shadcn/ui)
│   │   └── figma/              # Figma-specific components
│   └── styles/                 # CSS files and theme
├── main.tsx                    # App entry point
└── index.html                  # HTML template
```

## Key Components

- **OnboardingStepLayout**: Shared layout component for onboarding screens with consistent positioning
- **IllustrationCard**: Reusable component for image backgrounds with gradient overlays
- **AppLogo**: Application logo component
- **PaginationDots**: Navigation indicators for onboarding steps

## Design System

The app uses a custom Turathna theme with:
- Background: #FAF6EF
- Primary colors: #C0622A, #8B3D15
- Modern, clean design with cultural elements

## Attributions

This project includes:
- Components from [shadcn/ui](https://ui.shadcn.com/) (MIT License)
- Photos from [Unsplash](https://unsplash.com) (Unsplash License)


  