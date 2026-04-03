import OnboardingStepLayout from './OnboardingStepLayout';

export default function OnboardingScreen2() {
  return (
    <OnboardingStepLayout
      imageUrl="https://images.unsplash.com/photo-1762380371774-33cf970e5e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NhbiUyMGFyY2hpdGVjdHVyZSUyMHplbGxpZ2UlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NzQ2NTk1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      gradientFrom="#1D7A6E"
      gradientTo="#0F4E47"
      location="Medersa Bou Inania · Fès"
      title="Apprenez en jouant"
      subtitle="Découvrez l'histoire du Maroc à travers des quiz, défis et mini-jeux interactifs."
      currentStep={2}
      totalSteps={3}
      primaryButton={{ label: 'Suivant', to: '/onboarding/3' }}
      secondaryButton={{ label: 'Passer', to: '/login' }}
    />
  );
}