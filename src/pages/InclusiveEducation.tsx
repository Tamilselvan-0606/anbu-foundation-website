import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Heart, ExternalLink, CheckCircle } from 'lucide-react';
import { INITIATIVES } from '../data/foundationData.ts';
import { PageBanner } from '../components/PageBanner.tsx';

interface ContextType {
  openScholarshipModal: () => void;
  openGetInvolvedModal: () => void;
}

export const InclusiveEducation: React.FC = () => {
  const { openScholarshipModal, openGetInvolvedModal } = useOutletContext<ContextType>();
  const initiative = INITIATIVES.find(i => i.id === 'inclusive-education')!;

  return (
    <div className="space-y-0">
      <PageBanner
        title="Inclusive Education"
        subtitle="“Togetherness is the tool for better tomorrow”"
        badge="Initiative · Access & Equity"
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
                <span>Initiative · Access &amp; Equity</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
                Inclusive Education
              </h1>
            </div>
            <p className="text-sm font-serif italic text-[#F6E9EE]/90 max-w-sm text-right hidden md:block">
              “Togetherness is the tool for better tomorrow”
            </p>
          </div>

          <div className="p-6 sm:p-12 lg:p-14 space-y-8">
            
            {/* Motto Banner */}
            <div className="border-b border-[#E9E1E5] pb-5">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#831238] leading-snug">
                “Togetherness is the tool for better tomorrow”
              </h2>
            </div>

            {/* Narrative Content */}
            <div className="space-y-4 text-[15px] text-[#262126] leading-relaxed text-justify">
              <p>
                Education is the only aspect that is equally significant as Breath for everyone. Education need not be formal; everyday offers many learning laps for us to evolve as a better human being. Any form of education should install the sense of progress.
              </p>
              <p>
                Anbu is blessed with an excellent platform in the form of our University in offering education embedded with inclusiveness. Hundreds of disabled, underprivileged students are offered education every year.
              </p>
              <p>
                Inculcating inclusivity among students is an integrated method of our training at Sathyabama Institute of Science and Technology. Apart from this, we are also associated and have numerous collaborations with many contemporary service organizations, so that the opportunity to help becomes more divergent. Our belief is <span className="font-semibold text-[#831238]">“Togetherness is the tool for better tomorrow”</span>.
              </p>
            </div>

            {/* Video Showcase */}
            <div className="pt-6 border-t border-[#E9E1E5] space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#831238] block">
                  Documentaries &amp; Impact Stories
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-bold text-[#262126]">
                  Inclusive Education in Action
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Video 1 */}
                <div className="bg-[#FAF7F8] rounded-xl border border-[#E9E1E5] p-3 sm:p-4 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative rounded-lg overflow-hidden border border-[#831238]/20 bg-black aspect-video flex items-center">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/synNfUV09Sg"
                      title="Inclusive Education - Anbu Foundation Documentary"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1 px-1">
                    <span className="font-medium text-[#70676C] line-clamp-1">
                      Scholarship for Acid Attack Survivors
                    </span>
                    <a
                      href="https://www.youtube.com/watch?v=synNfUV09Sg&source_ve_path=NzY3NTg&embeds_referring_euri=https%3A%2F%2Fanbufoundation.in%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#831238] hover:underline shrink-0 ml-2"
                    >
                      <span>Watch on YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="bg-[#FAF7F8] rounded-xl border border-[#E9E1E5] p-3 sm:p-4 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative rounded-lg overflow-hidden border border-[#831238]/20 bg-black aspect-video flex items-center">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/gq_DqK4fRrY"
                      title="Inclusive Education - Empowering Students with Inclusivity"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1 px-1">
                    <span className="font-medium text-[#70676C] line-clamp-1">
                      Empowering Lives Through Inclusivity
                    </span>
                    <a
                      href="https://www.youtube.com/watch?v=gq_DqK4fRrY&time_continue=0&source_ve_path=NzY3NTg&embeds_referring_euri=https%3A%2F%2Fanbufoundation.in%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#831238] hover:underline shrink-0 ml-2"
                    >
                      <span>Watch on YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Inclusivity Pillars */}
            <div className="pt-6 border-t border-[#E9E1E5] space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#831238] block">
                Equal Opportunity &amp; Accessibility Measures
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {initiative.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#FAF7F8] p-3.5 rounded-lg border border-[#E9E1E5]/70">
                    <CheckCircle className="w-4 h-4 text-[#831238] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#262126] font-medium leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openScholarshipModal}
                className="px-6 py-3 text-xs font-semibold text-white bg-[#831238] hover:bg-[#5C0B25] rounded-lg shadow-sm transition-all"
              >
                Apply for Inclusive Fellowship
              </button>
              <Link
                to="/eligibility"
                className="px-6 py-3 text-xs font-semibold text-[#831238] bg-[#F6E9EE] hover:bg-[#ebd5df] rounded-lg transition-colors"
              >
                Check Eligibility Criteria
              </Link>
              <button
                type="button"
                onClick={openGetInvolvedModal}
                className="px-6 py-3 text-xs font-semibold text-[#70676C] hover:text-[#262126] hover:bg-[#FAF7F8] rounded-lg border border-[#E9E1E5] transition-colors"
              >
                Support Assistive Aids
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
    </div>
  );
};
