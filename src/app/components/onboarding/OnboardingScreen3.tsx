import { useNavigate } from 'react-router';
import { IllustrationCard } from './IllustrationCard';
import { PaginationDots } from './PaginationDots';

export default function OnboardingScreen3() {
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
            imageUrl="https://images.unsplash.com/photo-1542166498816-dcf3df2db47e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NhbiUyMHBvdHRlcnklMjBhcnRpc2FuJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc0NjU5MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            gradientFrom="#E8A020"
            gradientTo="#8B5E0A"
            location="Poterie artisanale · Safi"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center text-center">
          {/* Title */}
          <h1 className="text-3xl mb-4" style={{ color: '#2D1810' }}>
            Gagnez de vraies récompenses
          </h1>

          {/* Subtitle */}
          <p className="text-base leading-relaxed mb-10 px-2" style={{ color: '#5C4A3A' }}>
            Accumulez des points en explorant le patrimoine et échangez-les contre des expériences culturelles et des produits artisanaux.
          </p>

          {/* Pagination Dots */}
          <div className="mb-8">
            <PaginationDots currentStep={3} totalSteps={3} />
          </div>

          {/* Primary Button (no secondary button on this screen) */}
          <div className="w-full">
            <button
              onClick={() => navigate('/login')}
              className="w-full py-4 rounded-[16px] text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #C0622A 0%, #8B3D15 100%)',
              }}
            >
              <span className="text-base font-medium">Commencer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}