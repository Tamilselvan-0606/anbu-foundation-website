import React, { useState } from 'react';
import { BookOpen, GraduationCap, Heart, Sparkles } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackCategory?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Anbu Foundation Sathyabama',
  className = '',
  fallbackTitle,
  fallbackCategory = 'Anbu Foundation',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div 
        className={`relative overflow-hidden bg-gradient-to-br from-[#831238] via-[#5C0B25] to-[#262126] flex flex-col justify-end p-6 text-white ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute top-4 right-4 text-white/30">
          <GraduationCap className="w-12 h-12" />
        </div>
        <div className="relative z-10">
          <span className="text-[11px] uppercase tracking-wider text-white/70 font-medium">
            {fallbackCategory}
          </span>
          <h4 className="text-base font-semibold text-white mt-1 leading-snug">
            {fallbackTitle || alt}
          </h4>
          <p className="text-xs text-white/60 mt-1">Sathyabama Institute of Science and Technology</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#F6E9EE] ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...rest}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#F6E9EE] animate-pulse flex items-center justify-center">
          <GraduationCap className="w-6 h-6 text-[#831238]/30" />
        </div>
      )}
    </div>
  );
};
