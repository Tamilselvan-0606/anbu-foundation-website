import React from 'react';
import { Heart } from 'lucide-react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  badge?: string;
  imageSrc?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  badge = 'Anbu Foundation',
  imageSrc = '/images/IMG_9211.jpg',
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-black select-none border-b border-[#E9E1E5]">
      {/* Banner Background Image */}
      <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px]">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-center"
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25 pointer-events-none" />

        {/* Content Container aligned with site grid */}
        <div className="absolute inset-0 flex items-end pb-8 sm:pb-10 lg:pb-12 pointer-events-none">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-2 sm:space-y-3 max-w-2xl text-white">
              {badge && (
                <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-[#831238] px-2.5 py-1 border border-white/20 shadow-xs">
                  <Heart className="w-3 h-3 fill-white" />
                  <span>{badge}</span>
                </div>
              )}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-white drop-shadow-md tracking-tight leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xs sm:text-sm md:text-base text-white/90 drop-shadow-sm line-clamp-2 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
