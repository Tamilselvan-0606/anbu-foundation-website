import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface ContextType {
  openScholarshipModal: () => void;
  openGetInvolvedModal: () => void;
}

export const Scholarship: React.FC = () => {
  const { openScholarshipModal } = useOutletContext<ContextType>();

  const partners = [
    'Agaram Foundation',
    'World Vision',
    'Indiavision',
    'Ability Foundation',
    'Banyan',
    'NAAM',
    'Maatram',
    'Tamilnadu Blind Association'
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
                <span>Flagship Initiative</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
                Anbu Scholarship
              </h1>
            </div>
            <p className="text-sm font-serif italic text-[#F6E9EE]/90 max-w-sm text-right hidden md:block">
              "Getting Education is the Basic Right Protecting this Right is our Basic Duty"
            </p>
          </div>

          <div className="p-6 sm:p-12 lg:p-14 space-y-8">
            
            {/* Motto Banner */}
            <div className="border-b border-[#E9E1E5] pb-5">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#831238] leading-snug">
                "Getting Education is the Basic Right Protecting this Right is our Basic Duty"
              </h2>
            </div>

            {/* Video & Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* YouTube Video */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#831238]/20 bg-black aspect-video flex items-center">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/K4mWKqTwZhE?start=10"
                    title="Anbu Scholarship Video - Getting Education is the Basic Right"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Narrative Content */}
              <div className="lg:col-span-6 space-y-4 text-[15px] text-[#262126] leading-relaxed">
                <p>
                  The Scholarship is offered for children who are meritorious and lacking financial support to continue their education. The foundation is associated with many trusts and peer foundations to offer this scholarship with higher degree of transparency and productivity. Agaram foundation, World vision, Indiavision, Ability foundation, Banyan, NAAM, Maatram and Tamilnadu Blind Association.
                </p>
                <p>
                  In addition to this, scholarship is offered for Army students, destitute women children, war-widow children and to the children of drivers in our University.
                </p>
                <p>
                  The screening is carried out by a well-structured mechanism that takes into account of the factors such as Family situation, Board examination performance and an entrance exam conducted by the Foundation.
                </p>
              </div>

            </div>

            {/* Partner Foundations List */}
            <div className="pt-6 border-t border-[#E9E1E5] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#831238] block">
                Associated Trusts &amp; Peer Foundations
              </span>
              <div className="flex flex-wrap gap-2">
                {partners.map((partner) => (
                  <span
                    key={partner}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#FAF7F8] text-[#831238] border border-[#E9E1E5] font-semibold"
                  >
                    {partner}
                  </span>
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
                Apply for Scholarship Online
              </button>
              <Link
                to="/eligibility"
                className="px-6 py-3 text-xs font-semibold text-[#831238] bg-[#F6E9EE] hover:bg-[#ebd5df] rounded-lg transition-colors"
              >
                Check Eligibility Criteria
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
