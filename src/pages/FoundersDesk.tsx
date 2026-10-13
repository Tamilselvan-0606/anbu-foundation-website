import React from 'react';
import { Heart } from 'lucide-react';
import { PageBanner } from '../components/PageBanner.tsx';

export const FoundersDesk: React.FC = () => {
  return (
    <div className="space-y-0">
      <PageBanner
        title="Foundation Desk"
        subtitle="“Answering the Unanswered” — A message from the Founders of Anbu Foundation."
        badge="Executive Leadership"
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
                <span>Executive Leadership</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
                Foundation Desk
              </h1>
            </div>
            <p className="text-sm font-serif italic text-[#F6E9EE]/80 max-w-xs text-right hidden md:block">
              "Answering the Unanswered"
            </p>
          </div>

          <div className="p-6 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Photo Column */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-[#831238]/20 bg-[#F6E9EE]">
                  <img
                    src="/images/founders-desk.jpg"
                    alt="Dr. Marie Johnson and Dr. Mariazeena Johnson - Founders, Anbu Foundation"
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs uppercase tracking-widest text-[#70676C] font-semibold">
                    Anbu Foundation Founders
                  </span>
                </div>
              </div>

              {/* Message & Signatures Column */}
              <div className="lg:col-span-7 space-y-6 text-[#262126]">
                
                {/* Lead Headline */}
                <div className="border-b border-[#E9E1E5] pb-5">
                  <div className="text-[#831238] mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider">Founders' Message</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#831238] leading-snug">
                    "Welcome to the home of Love" - Anbu!
                  </h2>
                </div>

                {/* Message Body */}
                <div className="space-y-4 text-[15px] text-[#262126] leading-relaxed text-justify">
                  <p>
                    Most intrinsic feeling of Life is being Human. Humanity is not an act; it is the way of living. The cause of suffering in people has many reasons but the effect is unique and it is painful. Struggle for Education, Struggle for Survival and Struggle to Empower Self and Nation.
                  </p>
                  <p>
                    Anbu Foundation was started to bring back the happiness to the lives of people who are striving to live the life to the fullest. ANBU is committed to serve the Nation with a phenomenon of “Answering the Unanswered” by means of well-established structure.
                  </p>
                  <p>
                    Our agenda of service is imbibed with share love to all. The framework of the foundation is an aforethought to strengthen the lives of fellow citizens and thereby lifting the spirit of living, which is vital to the development of our Nation.
                  </p>
                  <p className="font-serif font-semibold text-lg sm:text-xl text-[#831238] pt-2">
                    We welcome you to this home of love - Anbu.
                  </p>
                </div>

                {/* Founders Credentials */}
                <div className="pt-6 border-t border-[#E9E1E5] grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Founder 1 */}
                  <div className="p-4 rounded-xl bg-[#FAF7F8] border border-[#E9E1E5]">
                    <h3 className="font-sans font-bold text-base text-[#262126]">
                      Dr. Marie Johnson
                    </h3>
                    <p className="text-xs font-semibold text-[#831238] mt-0.5">
                      Founder, Anbu Foundation
                    </p>
                    <p className="text-xs text-[#70676C] mt-1 leading-snug">
                      President, Sathyabama Institute of Science and Technology
                    </p>
                  </div>

                  {/* Founder 2 */}
                  <div className="p-4 rounded-xl bg-[#FAF7F8] border border-[#E9E1E5]">
                    <h3 className="font-sans font-bold text-base text-[#262126]">
                      Dr. Mariazeena Johnson
                    </h3>
                    <p className="text-xs font-semibold text-[#831238] mt-0.5">
                      Founder, Anbu Foundation
                    </p>
                    <p className="text-xs text-[#70676C] mt-1 leading-snug">
                      Chancellor, Sathyabama Institute of Science and Technology
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
    </div>
  );
};
