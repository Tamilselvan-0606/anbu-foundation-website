
import React from 'react';
import { Heart } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-[#F6E9EE]/40 via-white to-[#FAF7F8] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#831238] p-8 sm:p-14 shadow-xl space-y-8 text-white">
          
          {/* Header */}
          <div className="border-b border-white/15 pb-6 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wide uppercase border border-white/15">
              <Heart className="w-3.5 h-3.5 fill-white/30" />
              <span>Anbu Foundation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-sans font-bold text-[#D4AF37] tracking-tight">
              Foundation
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-4 text-white/90 text-[15px] leading-relaxed font-normal">
            <p>
              The inception of this idea to serve all is inherited from parents, 2008 had witnessed the first bud in and now it is a garden of happiness with the fragrance of success. The time to share the fruits to all has been arrived in this year of 2016, so the foundation is determined to extend its branches to all directions of enriching human value, where our service is atmost needed.
            </p>

            <p>
              Integrity in ideation, Introspection in planning and Involvement in execution are principles of our foundation.
            </p>

            <p>
              To experience the sunrise we should turn towards rising sun. To experience the impact of service to people in complete sense, we should interact and interlace with their lives.
            </p>

            <p>
              School adoption, Village adoption and many such programs are an embodiment of selflessness and has the objectives as longevity, freedom and peace.
            </p>

            <div className="pt-3 border-t border-white/15">
              <p className="text-base sm:text-lg font-serif font-bold text-[#D4AF37]">
                We welcome you to this home of love - Anbu.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
