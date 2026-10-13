import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Heart, Sparkles, Scissors, Users, Award, BookOpen, CheckCircle2 } from 'lucide-react';

interface ContextType {
  openScholarshipModal: () => void;
  openGetInvolvedModal: () => void;
}

export const SkillDevelopment: React.FC = () => {
  const { openGetInvolvedModal } = useOutletContext<ContextType>();

  const vocationalTracks = [
    'Mushroom Cultivation',
    'Seaweed Cultivation',
    'Solar Lamp Making',
    'Soap Making',
    'Jewellery Making',
    'Ornamental Fish Cultivation',
    'Diploma in Cosmetology',
    'Diploma in Tailoring'
  ];

  return (
    <div className="min-h-[75vh] bg-gradient-to-b from-[#F6E9EE]/40 via-white to-[#FAF7F8] py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="bg-white rounded-none shadow-xl border border-[#E9E1E5]/80 overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-[#831238] text-white px-8 sm:px-12 py-8 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F6E9EE]/90">
                <Heart className="w-4 h-4 fill-white/30" />
                <span>Initiative · Livelihood &amp; Empowerment</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
                Skill Development
              </h1>
            </div>
            <p className="text-sm font-serif italic text-[#D4AF37] max-w-sm text-right hidden md:block">
              “Knowledge transforms into wisdom. Skill transforms into development.”
            </p>
          </div>

          <div className="p-6 sm:p-12 lg:p-14 space-y-8">
            
            {/* Motto Banner */}
            <div className="border-b border-[#E9E1E5] pb-5 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#831238] leading-snug">
                “Knowledge transforms into wisdom. Skill transforms into development."
              </h2>
            </div>

            {/* Narrative Content */}
            <div className="space-y-4 text-[15px] text-[#262126] leading-relaxed">
              <p>
                Our country has abundance of talent for this transformation to take place. We should offer enough motivation and assistance; Anbu is dedicated to prepare efficient skill pool for the society.
              </p>
            </div>

            {/* Vocational Training Tracks */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#831238] block mb-3">
                Skill Training Disciplines
              </span>
              <div className="flex flex-wrap gap-2">
                {vocationalTracks.map((track) => (
                  <span
                    key={track}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#FAF7F8] text-[#831238] border border-[#E9E1E5] font-semibold"
                  >
                    {track}
                  </span>
                ))}
              </div>
            </div>

            {/* Initiatives Section */}
            <div className="pt-6 border-t border-[#E9E1E5] space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#831238] block">
                  Key Milestones
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-bold text-[#262126]">
                  Some of the initiatives are:
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {/* Initiative 1 */}
                <div className="p-5 rounded-xl border border-[#E9E1E5] bg-[#FAF7F8] hover:border-[#831238]/30 transition-colors flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F6E9EE] text-[#831238] flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#831238]">
                      Livelihood Training for 2000+ Rural Women
                    </h4>
                    <p className="text-sm text-[#262126] leading-relaxed">
                      Trained more than 2000 women in ten villages of Kanchipuram district on the courses of Mushroom cultivation, Seaweed Cultivation, Solar lamp making, Soap making, Jewellery making and Ornamental fish cultivation
                    </p>
                  </div>
                </div>

                {/* Initiative 2 */}
                <div className="p-5 rounded-xl border border-[#E9E1E5] bg-[#FAF7F8] hover:border-[#831238]/30 transition-colors flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F6E9EE] text-[#831238] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#831238]">
                      Diploma Course in “Cosmetology”
                    </h4>
                    <p className="text-sm text-[#262126] leading-relaxed">
                      Diploma course in “Cosmetology” offering comprehensive practical techniques, skin and hair care expertise, and self-employment orientation.
                    </p>
                  </div>
                </div>

                {/* Initiative 3 */}
                <div className="p-5 rounded-xl border border-[#E9E1E5] bg-[#FAF7F8] hover:border-[#831238]/30 transition-colors flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F6E9EE] text-[#831238] flex items-center justify-center shrink-0 mt-0.5">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#831238]">
                      Diploma in Tailoring
                    </h4>
                    <p className="text-sm text-[#262126] leading-relaxed">
                      Diploma in Tailoring enabling women to acquire garment construction skills, pattern design, and micro-business entrepreneurship.
                    </p>
                  </div>
                </div>

                {/* Initiative 4 */}
                <div className="p-5 rounded-xl border border-[#E9E1E5] bg-[#FAF7F8] hover:border-[#831238]/30 transition-colors flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F6E9EE] text-[#831238] flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#831238]">
                      Women Empowerment Bureau (National Mission NMEW)
                    </h4>
                    <p className="text-sm text-[#262126] leading-relaxed">
                      Initiated a thematic convergence project titled “Women Empowerment Bureau for the Kanchipuram district, TamilNadu” sanctioned by the National Mission for Empowerment of Women (NMEW) under the Ministry of Women and Child Development and National Resource Centre for Women.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature Slogan Box */}
            <div className="bg-[#831238] text-white p-6 sm:p-8 rounded-xl text-center space-y-2 shadow-md">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">
                Foundational Motto
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-sans font-extrabold tracking-wider text-white">
                "SKILL HELPS TO LIVE"
              </h3>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#E9E1E5] flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openGetInvolvedModal}
                className="px-6 py-3 text-xs font-semibold text-white bg-[#831238] hover:bg-[#5C0B25] rounded-lg shadow-sm transition-all cursor-pointer"
              >
                Support Skill Development
              </button>
              <Link
                to="/contact-us"
                className="px-6 py-3 text-xs font-semibold text-[#831238] bg-[#F6E9EE] hover:bg-[#ebd5df] rounded-lg transition-colors"
              >
                Inquire About Courses
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
