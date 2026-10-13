import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Heart, ExternalLink } from 'lucide-react';
import { PageBanner } from '../components/PageBanner.tsx';

interface ContextType {
  openScholarshipModal: () => void;
  openGetInvolvedModal: () => void;
}

export const SchoolPrograms: React.FC = () => {
  const { openGetInvolvedModal } = useOutletContext<ContextType>();

  const schools = [
    'Nallambakkam',
    'Hastinapuram',
    'Ezhilnagar',
    'Kannaginagar',
    'Karappakkam',
    'Sholinganallur'
  ];

  return (
    <div className="space-y-0">
      <PageBanner
        title="School Supporting Programs"
        subtitle="“Teach to a teacher, you are teaching many students. Support a School; you are supporting future of Society”"
        badge="Initiative · Grassroots Education"
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
                <span>Initiative · Grassroots Education</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
                School Supporting Programs
              </h1>
            </div>
            <p className="text-sm font-serif italic text-[#F6E9EE]/90 max-w-sm text-right hidden md:block">
              “Teach to a teacher, you are teaching many students Support a School; you are supporting future of Society”
            </p>
          </div>

          <div className="p-6 sm:p-12 lg:p-14 space-y-8">
            
            {/* Motto Banner */}
            <div className="border-b border-[#E9E1E5] pb-5">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#831238] leading-snug">
                “Teach to a teacher, you are teaching many students Support a School; you are supporting future of Society”
              </h2>
            </div>

            {/* Video & Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* YouTube Video */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#831238]/20 bg-black aspect-video flex items-center">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/WWeU-B8HVI0"
                    title="Anbu Foundation - School Supporting Programs Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-xs px-1">
                  <span className="font-medium text-[#70676C]">
                    School Supporting Programs Outreach
                  </span>
                  <a
                    href="https://www.youtube.com/watch?v=WWeU-B8HVI0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#831238] hover:underline"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Narrative Content */}
              <div className="lg:col-span-6 space-y-4 text-[15px] text-[#262126] leading-relaxed text-justify">
                <p>
                  Anbu is active in school supporting programs. Some of them are Government schools belong to Nallambakkam, Hastinapuram, Ezhilnagar, Kannaginagar, Karappakkam and Sholinganallur areas in and around Chennai.
                </p>
                <p>
                  We support these schools in the establishment of basic amenities, infrastructure pertaining to smart learning besides conducting many literary events, sports and personality development workshops.
                </p>
              </div>

            </div>

            {/* Partner Schools / Areas List */}
            <div className="pt-6 border-t border-[#E9E1E5] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#831238] block">
                Supported Government Schools &amp; Regions in Chennai
              </span>
              <div className="flex flex-wrap gap-2">
                {schools.map((school) => (
                  <span
                    key={school}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#FAF7F8] text-[#831238] border border-[#E9E1E5] font-semibold"
                  >
                    {school}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openGetInvolvedModal}
                className="px-6 py-3 text-xs font-semibold text-white bg-[#831238] hover:bg-[#5C0B25] rounded-lg shadow-sm transition-all"
              >
                Support School Programs
              </button>
              <Link
                to="/contact-us"
                className="px-6 py-3 text-xs font-semibold text-[#831238] bg-[#F6E9EE] hover:bg-[#ebd5df] rounded-lg transition-colors"
              >
                Partner With Us
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
    </div>
  );
};
