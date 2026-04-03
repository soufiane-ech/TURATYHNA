import OnboardingStepLayout from './OnboardingStepLayout';

export default function OnboardingScreen3() {
  return (
    <OnboardingStepLayout
      imageUrl="https://images.unsplash.com/photo-1542166498816-dcf3df2db47e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NhbiUyMHBvdHRlcnklMjBhcnRpc2FuJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc0NjU5MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      gradientFrom="#E8A020"
      gradientTo="#8B5E0A"
      location="Poterie artisanale · Safi"
      title="Gagnez de vraies récompenses"
      subtitle="Accumulez des points en explorant le patrimoine et échangez-les contre des expériences culturelles et des produits artisanaux."
      currentStep={3}
      totalSteps={3}
      primaryButton={{ label: 'Commencer', to: '/login' }}
    />
  );
}