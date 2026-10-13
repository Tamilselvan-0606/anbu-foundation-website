import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types/index.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Image Viewer"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 hidden sm:flex items-center justify-center"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 hidden sm:flex items-center justify-center"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="relative max-h-[70vh] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <ImageWithFallback
            src={currentItem.image}
            alt={currentItem.title}
            fallbackTitle={currentItem.title}
            fallbackCategory={currentItem.category}
            className="max-h-[70vh] w-auto object-contain"
          />
        </div>
        <div className="text-center mt-4 max-w-xl text-white">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F6E9EE]/80">
            {currentItem.category} · {currentIndex + 1} of {items.length}
          </span>
          <h3 className="text-lg font-sans font-bold text-white mt-1">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/70 mt-1 leading-relaxed">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
