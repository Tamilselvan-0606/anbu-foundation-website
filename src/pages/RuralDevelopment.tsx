import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Heart, Sprout, Users, GraduationCap, ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import { INITIATIVES } from '../data/foundationData.ts';
import { PageBanner } from '../components/PageBanner.tsx';

interface ContextType {
  openScholarshipModal: () => void;
  openGetInvolvedModal: () => void;
}

export const RuralDevelopment: React.FC = () => {
  const { openGetInvolvedModal } = useOutletContext<ContextType>();

  const adoptedAreas = [
    { name: 'Nallambakkam', label: 'Adopted Village & Organic Farm' },
    { name: 'Ezhilnagar', label: 'Adopted Community' },
    { name: 'Kannaginagar', label: 'Adopted Community' },
    { name: 'Perumbakkam', label: 'Sub-urban Living Upliftment' },
    { name: 'Kanchipuram District', label: '10 Villages Empowerment' },
  ];

  return (
    <div className="space-y-0">
      <PageBanner
        title="Rural Development"
        subtitle="“India lives in its Villages” — Empowering communities and lifting livelihoods through grassroots stewardship."
        badge="Initiative · Grassroots Empowerment"
      />

      <div className="min-h-[60vh] bg-gradient-to-b from-[#F6E9EE]/40 via-white to-[#FAF7F8] py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="bg-white rounded-none shadow-xl border border-[#E9E1E5]/80 overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-[#831238] text-white px-8 sm:px-12 py-8 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F6E9EE]/90">
                <Heart className="w-4 h-4 fill-white/30" />
                <span>Initiative · Grassroots Empowerment</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
                Rural Development
              </h1>
            </div>
            <p className="text-sm font-serif italic text-[#D4AF37] max-w-sm text-right hidden md:block">
              “India lives in its Villages - Mahatma Gandhi”
            </p>
          </div>

          <div className="p-6 sm:p-12 lg:p-14 space-y-8">
            
            {/* Motto Banner */}
            <div className="border-b border-[#E9E1E5] pb-5 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#831238] leading-snug">
                “India lives in its Villages - Mahatma Gandhi”
              </h2>
            </div>

            {/* Narrative Content */}
            <div className="space-y-4 text-[15px] text-[#262126] leading-relaxed text-justify">
              <p>
                The progressive wheels of development possess smooth transit into future, when villages are empowered. Anbu assimilated this fact in its genome and stepped into rural development. Nallambakkam ,Ezhilnagar, Kannaginagar are adopted besides improving the conditions of living in slums of sub-urban areas such as Perumbakkam.
              </p>
            </div>

            {/* Adopted Areas Badges */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#831238] block mb-3">
                Adopted Villages &amp; Sub-urban Communities
              </span>
              <div className="flex flex-wrap gap-2.5">
                {adoptedAreas.map((area) => (
                  <div
                    key={area.name}
                    className="inline-flex items-center gap-2 text-xs px-3.5 py-2 rounded-lg bg-[#FAF7F8] text-[#262126] border border-[#E9E1E5]"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#831238]" />
                    <span className="font-semibold text-[#831238]">{area.name}</span>
                    <span className="text-[#70676C] hidden sm:inline">· {area.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Foundation Accomplishments Section */}
            <div className="pt-6 border-t border-[#E9E1E5] space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#831238] block">
                  Milestones &amp; Impact
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-bold text-[#262126]">
                  Foundation Accomplishments:
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {/* Accomplishment 1 */}
                <div className="p-5 rounded-xl border border-[#E9E1E5] bg-[#FAF7F8] hover:border-[#831238]/30 transition-colors flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F6E9EE] text-[#831238] flex items-center justify-center shrink-0 mt-0.5">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#831238]">
                      Organic Vegetable Farm at Nallambakkam
                    </h4>
                    <p className="text-sm text-[#262126] leading-relaxed">
                      Setting up an organic vegetable farm inside the school premises to help the people of Nallambakkam for their everyday living
                    </p>
                  </div>
                </div>

                {/* Accomplishment 2 */}
                <div className="p-5 rounded-xl border border-[#E9E1E5] bg-[#FAF7F8] hover:border-[#831238]/30 transition-colors flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F6E9EE] text-[#831238] flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#831238]">
                      Village Women Empowerment Programs
                    </h4>
                    <p className="text-sm text-[#262126] leading-relaxed">
                      Women empowerment programs in 10 villages in Kanchipuram district
                    </p>
                  </div>
                </div>

                {/* Accomplishment 3 */}
                <div className="p-5 rounded-xl border border-[#E9E1E5] bg-[#FAF7F8] hover:border-[#831238]/30 transition-colors flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F6E9EE] text-[#831238] flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#831238]">
                      My Saturday University
                    </h4>
                    <p className="text-sm text-[#262126] leading-relaxed">
                      My Saturday University – A Unique program to uplift the spirit of learning among students of sub-urban areas in Chennai city. Schools can register for the program by{' '}
                      <button
                        type="button"
                        onClick={openGetInvolvedModal}
                        className="text-[#831238] font-bold underline hover:text-[#5C0B25] transition-colors cursor-pointer"
                      >
                        clicking here!
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#E9E1E5] flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openGetInvolvedModal}
                className="px-6 py-3 text-xs font-semibold text-white bg-[#831238] hover:bg-[#5C0B25] rounded-lg shadow-sm transition-all"
              >
                Register School for Saturday University
              </button>
              <button
                type="button"
                onClick={openGetInvolvedModal}
                className="px-6 py-3 text-xs font-semibold text-[#831238] bg-[#F6E9EE] hover:bg-[#ebd5df] rounded-lg transition-colors"
              >
                Support Rural Development
              </button>
              <Link
                to="/contact-us"
                className="px-6 py-3 text-xs font-semibold text-[#70676C] hover:text-[#262126] transition-colors ml-auto text-sm"
              >
                Contact Foundation &rarr;
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
    </div>
  );
};
