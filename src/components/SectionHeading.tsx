import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  inverted?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  centered = false,
  className = '',
  inverted = false,
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {kicker && (
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
          <span className={inverted ? 'text-[#F6E9EE]/90' : 'text-[#831238]'}>{kicker}</span>
        </div>
      )}
      <h2 
        className={`text-2xl sm:text-3xl lg:text-4xl font-sans font-bold tracking-tight ${
          inverted ? 'text-white' : 'text-[#831238]'
        }`}
        style={{ textWrap: 'balance' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[15px] leading-relaxed ${inverted ? 'text-[#F6E9EE]/80' : 'text-[#70676C]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
