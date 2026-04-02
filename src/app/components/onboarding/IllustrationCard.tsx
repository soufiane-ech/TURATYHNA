import { MapPin } from 'lucide-react';

interface IllustrationCardProps {
  imageUrl: string;
  gradientFrom: string;
  gradientTo: string;
  location?: string;
  overlayText?: string;
  height?: number;
}

export function IllustrationCard({ imageUrl, gradientFrom, gradientTo, location, overlayText, height = 230 }: IllustrationCardProps) {
  return (
    <div className="relative w-full rounded-[20px] overflow-hidden" style={{ height: `${height}px` }}>
      {/* Background Image */}
      <img 
        src={imageUrl} 
        alt={location || overlayText || ''}
        className="w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${gradientFrom}00 0%, ${gradientFrom}66 50%, ${gradientTo} 100%)`
        }}
      />
      
      {/* Overlay Content */}
      {overlayText ? (
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <span className="text-lg font-medium tracking-wide">{overlayText}</span>
        </div>
      ) : location ? (
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-1.5 text-white">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide">{location}</span>
        </div>
      ) : null}
    </div>
  );
}
