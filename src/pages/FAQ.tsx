import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Heart, HelpCircle, ChevronDown, MessageSquareQuote, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/foundationData.ts';
import { PageBanner } from '../components/PageBanner.tsx';

interface ContextType {
  openScholarshipModal: () => void;
  openGetInvolvedModal: () => void;
}

export const FAQ: React.FC = () => {
  const { openGetInvolvedModal } = useOutletContext<ContextType>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-0">
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Common inquiries, guidelines, and answers regarding Anbu Foundation initiatives and procedures."
        badge="Help & Information"
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
                <span>Help &amp; Information · Common Inquiries</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
                Frequently Asked Questions
              </h1>
            </div>
            <p className="text-sm font-serif italic text-[#D4AF37] max-w-sm text-right hidden md:block">
              Anbu Foundation Information &amp; Guidance
            </p>
          </div>

          <div className="p-6 sm:p-12 lg:p-14 space-y-8">
            
            {/* Introductory Lead */}
            <div className="border-b border-[#E9E1E5] pb-5">
              <h2 className="text-lg sm:text-xl font-sans font-semibold text-[#831238] leading-snug">
                Find answers to common questions about Anbu Foundation's vision, initiatives, and ways to participate.
              </h2>
            </div>

            {/* FAQs List */}
            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#FAF7F8] rounded-xl border border-[#E9E1E5] overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#F6E9EE]/40 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-8 h-8 rounded-lg bg-[#831238] text-white flex items-center justify-center shrink-0 mt-0.5">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        <h3 className="text-base sm:text-lg font-sans font-bold text-[#262126] leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#831238] shrink-0 mt-1 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Always visible on larger devices or smooth expanded view */}
                    <div
                      className={`px-5 sm:px-6 pb-6 pt-1 text-[15px] text-[#262126] leading-relaxed pl-16 text-justify ${
                        isOpen ? 'block' : 'hidden sm:block'
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Assistance Banner */}
            <div className="bg-[#FAF7F8] border border-[#E9E1E5] rounded-xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#831238]">
                <MessageSquareQuote className="w-4 h-4" />
                <span>Have More Questions?</span>
              </div>
              <p className="text-[15px] text-[#70676C] leading-relaxed">
                If you have additional inquiries regarding our scholarships, volunteering opportunities, or institutional partnerships, our team is happy to assist you.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#E9E1E5] flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openGetInvolvedModal}
                className="px-6 py-3 text-xs font-semibold text-white bg-[#831238] hover:bg-[#5C0B25] rounded-lg shadow-sm transition-all cursor-pointer"
              >
                Volunteer with Anbu Foundation
              </button>
              <Link
                to="/contact-us"
                className="px-6 py-3 text-xs font-semibold text-[#831238] bg-[#F6E9EE] hover:bg-[#ebd5df] rounded-lg transition-colors"
              >
                Contact Foundation Team
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
    </div>
  );
};
