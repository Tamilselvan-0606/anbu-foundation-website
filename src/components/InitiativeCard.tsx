import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Initiative } from '../types/index.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';

interface InitiativeCardProps {
  initiative: Initiative;
}

export const InitiativeCard: React.FC<InitiativeCardProps> = ({ initiative }) => {
  return (
    <article className="group flex flex-col bg-white rounded-xl border border-[#E9E1E5] overflow-hidden hover:border-[#831238]/40 hover:shadow-lg transition-all duration-300">
      <div className="relative h-52 overflow-hidden bg-[#F6E9EE]">
        <ImageWithFallback
          src={initiative.image}
          alt={initiative.title}
          fallbackTitle={initiative.title}
          fallbackCategory={initiative.category}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#831238] mb-2">
            {initiative.category}
          </div>
          <h3 className="text-xl font-sans font-bold text-[#262126] group-hover:text-[#831238] transition-colors line-clamp-1 mb-2.5">
            {initiative.title}
          </h3>
          <p className="text-sm text-[#70676C] leading-relaxed line-clamp-3 mb-6">
            {initiative.shortDescription}
          </p>
        </div>

        <div className="pt-4 border-t border-[#E9E1E5]">
          <Link
            to={initiative.slug}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#831238] hover:text-[#5C0B25] group-hover:translate-x-1 transition-all"
            aria-label={`${initiative.ctaText}: ${initiative.title}`}
          >
            <span>{initiative.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};
