import { useNavigate } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { IllustrationCard } from './IllustrationCard';
import { PaginationDots } from './PaginationDots';

interface OnboardingStepLayoutProps {
  imageUrl: string;
  gradientFrom: string;
  gradientTo: string;
  location: string;
  title: string;
  subtitle: string;
  currentStep: number;
  totalSteps: number;
  primaryButton: { label: string; to: string };
  secondaryButton?: { label: string; to: string };
}

export default function OnboardingStepLayout({
  imageUrl,
  gradientFrom,
  gradientTo,
  location,
  title,
  subtitle,
  currentStep,
  totalSteps,
  primaryButton,
  secondaryButton,
}: OnboardingStepLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FAF6EF' }}>
      <div className="w-[375px] h-[812px] px-6 py-12 flex flex-col">
        <div className="mb-8">
          <IllustrationCard
            imageUrl={imageUrl}
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
            location={location}
          />
        </div>

        <div className="flex-1 flex flex-col items-center text-center">
          <h1 className="text-3xl mb-4" style={{ color: '#2D1810' }}>
            {title}
          </h1>

          <p className="text-base leading-relaxed mb-10 px-2" style={{ color: '#5C4A3A' }}>
            {subtitle}
          </p>

          <div className="mt-auto w-full">
            <div className="w-full space-y-3">
              <button
                onClick={() => navigate(primaryButton.to)}
                className="w-full py-4 rounded-[16px] text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #C0622A 0%, #8B3D15 100%)' }}
              >
                <span className="text-base font-medium">{primaryButton.label}</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              {secondaryButton ? (
                <button
                  onClick={() => navigate(secondaryButton.to)}
                  className="w-full py-4 rounded-[16px] border transition-colors hover:bg-black/5"
                  style={{ borderColor: '#D4C4B0', color: '#5C4A3A' }}
                >
                  <span className="text-base font-medium">{secondaryButton.label}</span>
                </button>
              ) : null}
            </div>

            <div className="mt-4 flex justify-center">
              <PaginationDots currentStep={currentStep} totalSteps={totalSteps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
