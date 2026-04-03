import OnboardingStepLayout from './OnboardingStepLayout';

export default function OnboardingScreen1() {
  return (
    <OnboardingStepLayout
      imageUrl="https://images.unsplash.com/photo-1708823082010-eba69aac286d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3V0b3ViaWElMjBNb3NxdWUlMjBNYXJyYWtlY2glMjBzdW5zZXR8ZW58MXx8fHwxNzc0NjU4MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      gradientFrom="#C0622A"
      gradientTo="#8B3D15"
      location="Mosquée Koutoubia · Marrakech"
      title="Découvrez le patrimoine marocain"
      subtitle="Explorez des siècles d'histoire, des monuments emblématiques et des traditions qui façonnent l'identité du Maroc."
      currentStep={1}
      totalSteps={3}
      primaryButton={{ label: 'Suivant', to: '/onboarding/2' }}
      secondaryButton={{ label: 'Passer', to: '/login' }}
    />
  );
}