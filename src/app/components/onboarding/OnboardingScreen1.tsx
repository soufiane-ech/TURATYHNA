import { useNavigate } from 'react-router';
import { IllustrationCard } from './IllustrationCard';
import { PaginationDots } from './PaginationDots';
import { ChevronRight } from 'lucide-react';

export default function OnboardingScreen1() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#FAF6EF' }}
    >
      <div className="w-[375px] h-[812px] px-6 py-12 flex flex-col">
        {/* Illustration Card */}
        <div className="mb-8">
          <IllustrationCard
            imageUrl="https://images.unsplash.com/photo-1708823082010-eba69aac286d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3V0b3ViaWElMjBNb3NxdWUlMjBNYXJyYWtlY2glMjBzdW5zZXR8ZW58MXx8fHwxNzc0NjU4MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            gradientFrom="#C0622A"
            gradientTo="#8B3D15"
            location="Mosquée Koutoubia · Marrakech"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center text-center">
          {/* Title */}
          <h1 className="text-3xl mb-4" style={{ color: '#2D1810' }}>
            Découvrez le patrimoine marocain
          </h1>

          {/* Subtitle */}
          <p className="text-base leading-relaxed mb-10 px-2" style={{ color: '#5C4A3A' }}>
            Explorez des siècles d'histoire, des monuments emblématiques et des traditions qui façonnent l'identité du Maroc.
          </p>

          {/* Pagination Dots */}
          <div className="mb-8">
            <PaginationDots currentStep={1} totalSteps={3} />
          </div>

          {/* Buttons */}
          <div className="w-full space-y-3">
            {/* Primary Button */}
            <button
              onClick={() => navigate('/onboarding/2')}
              className="w-full py-4 rounded-[16px] text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #C0622A 0%, #8B3D15 100%)',
              }}
            >
              <span className="text-base font-medium">Suivant</span>
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => navigate('/login')}
              className="w-full py-4 rounded-[16px] border transition-colors hover:bg-black/5"
              style={{ 
                borderColor: '#D4C4B0',
                color: '#5C4A3A'
              }}
            >
              <span className="text-base font-medium">Passer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}