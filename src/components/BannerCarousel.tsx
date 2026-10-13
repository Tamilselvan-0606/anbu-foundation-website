import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export interface BannerSlide {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const DEFAULT_SLIDES: BannerSlide[] = [
  {
    src: '/images/IMG_9211.jpg',
    alt: 'Anbu Foundation Annual Gathering with Founders, Leadership, and Scholars',
    title: 'Empowering Generations Through Education',
    subtitle: 'Annual gathering of scholars, leadership, and educators at Sathyabama Institute of Science and Technology',
  },
  {
    src: '/images/IMG_9196.jpg',
    alt: 'Anbu Foundation Scholarship Gathering Ceremony on Stage',
    title: 'Dedicated Leadership & Compassionate Guidance',
    subtitle: 'Inspiring young minds towards brighter and dignified futures with purpose and empathy',
  },
  {
    src: '/images/IMG_9169 (1).jpg',
    alt: 'Anbu Foundation Scholars Seated at the Auditorium',
    title: 'Nurturing Aspirations Across Tamil Nadu',
    subtitle: 'Hundreds of deserving students empowered every year through inclusive scholarship support',
  },
];

interface BannerCarouselProps {
  slides?: BannerSlide[];
  intervalMs?: number;
}

export const BannerCarousel: React.FC<BannerCarouselProps> = ({
  slides = DEFAULT_SLIDES,
  intervalMs = 5000,
}) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto carousel sliding with 5 second interval
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isPaused, intervalMs, nextSlide, slides.length]);

  // Touch swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-black select-none group border-b border-[#E9E1E5]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Anbu Foundation Highlights"
    >
      {/* Slides Container */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[560px] xl:h-[620px] overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* Gradient Overlay for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Slide Caption */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 pointer-events-none">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="space-y-1 sm:space-y-2 max-w-xl lg:max-w-2xl text-white pr-20 sm:pr-0">
                    <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-[#831238] px-2.5 py-1 border border-white/20 shadow-xs">
                      <Heart className="w-3 h-3 fill-white" />
                      <span>Anbu Foundation</span>
                    </span>
                    <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-sans font-bold text-white drop-shadow-md leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-white/90 drop-shadow-sm line-clamp-2 leading-relaxed hidden sm:block text-justify">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-[#831238] text-white flex items-center justify-center transition-all duration-200 border border-white/20 shadow-lg cursor-pointer opacity-80 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-[#831238] text-white flex items-center justify-center transition-all duration-200 border border-white/20 shadow-lg cursor-pointer opacity-80 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-8 z-20 flex items-center gap-1.5 sm:gap-2">
        {slides.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => setCurrent(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              current === dotIdx
                ? 'w-7 sm:w-8 h-2.5 bg-[#831238] border border-white/80 shadow-md'
                : 'w-2.5 h-2.5 bg-white/70 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
