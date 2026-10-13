import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Heart, CheckCircle2, ShieldCheck, ArrowRight, FileCheck, Scale, Award } from 'lucide-react';
import { PageBanner } from '../components/PageBanner.tsx';

interface ContextType {
  openScholarshipModal: () => void;
  openGetInvolvedModal: () => void;
}

export const Eligibility: React.FC = () => {
  const { openScholarshipModal } = useOutletContext<ContextType>();

  const eligibilityRequirements = [
    {
      num: '01',
      text: 'Must have secured 80% or above in both the 10th Standard (SSLC) and 12th Standard (HSC/Equivalent) examinations.',
      highlight: 'Academic Excellence'
    },
    {
      num: '02',
      text: 'Must have completed schooling in a Government or Government-Aided School',
      highlight: 'Schooling Criteria'
    },
    {
      num: '03',
      text: 'Preference will be given to students from economically weaker sections with a genuine need for financial assistance.',
      highlight: 'Economic Priority'
    },
    {
      num: '04',
      text: 'Annual family income should be within the limit prescribed by the Foundation (supporting income certificate may be required).',
      highlight: 'Income Limit'
    },
    {
      num: '05',
      text: 'The applicant should demonstrate good moral character, discipline, and commitment to academic excellence',
      highlight: 'Conduct & Character'
    },
    {
      num: '06',
      text: 'Preference may be given to first-generation learners pursuing higher education.',
      highlight: 'First-Generation Priority'
    },
    {
      num: '07',
      text: 'Orphaned students, children of single parents, or students from socially disadvantaged backgrounds may receive special consideration, subject to verification.',
      highlight: 'Special Consideration'
    },
    {
      num: '08',
      text: 'Applicants must submit all required documents, including academic records, Income certificate, community certificate (if applicable), and any other documents specified by the Foundation.',
      highlight: 'Documentation'
    },
    {
      num: '09',
      text: 'The scholarship is awarded based on merit-cum-means, subject to verification of documents and approval by the Scholarship Selection Committee.',
      highlight: 'Merit-cum-Means'
    },
    {
      num: '10',
      text: 'Recipients are expected to maintain satisfactory academic performance, good conduct, and regular attendance throughout the duration of the scholarship.',
      highlight: 'Performance & Attendance'
    },
    {
      num: '11',
      text: 'The decision of the ANBU Scholarship Committee regarding selection and continuation of the scholarship shall be final',
      highlight: 'Committee Discretion'
    }
  ];

  return (
    <div className="space-y-0">
      <PageBanner
        title="Eligibility Criteria"
        subtitle="Comprehensive guidelines, academic prerequisites, and selection criteria for Anbu Scholarship applicants."
        badge="Admission · Policy & Guidelines"
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
                <span>Admission · Criteria &amp; Guidelines</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
                Eligibility
              </h1>
            </div>
            <p className="text-sm font-serif italic text-[#D4AF37] max-w-sm text-right hidden md:block">
              ANBU Scholarship Policy &amp; Framework
            </p>
          </div>

          <div className="p-6 sm:p-12 lg:p-14 space-y-8">
            
            {/* Intro Lead */}
            <div className="border-b border-[#E9E1E5] pb-5">
              <h2 className="text-lg sm:text-xl font-sans font-semibold text-[#831238] leading-snug">
                To be considered for the ANBU Scholarship, applicants should satisfy the following eligibility requirements:
              </h2>
            </div>

            {/* Eligibility Requirements List */}
            <div className="space-y-3.5">
              {eligibilityRequirements.map((req) => (
                <div
                  key={req.num}
                  className="bg-[#FAF7F8] rounded-xl border border-[#E9E1E5] p-4 sm:p-5 flex items-start gap-4 hover:border-[#831238]/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F6E9EE] text-[#831238] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {req.num}
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#831238] block sm:inline sm:mr-2">
                      {req.highlight}:
                    </span>
                    <span className="text-[15px] text-[#262126] leading-relaxed text-justify">
                      {req.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Criteria Summary Box */}
            <div className="bg-[#FAF7F8] border border-[#E9E1E5] rounded-xl p-6 sm:p-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#831238]">
                <ShieldCheck className="w-4 h-4" />
                <span>Policy Transparency</span>
              </div>
              <p className="text-[15px] text-[#262126] font-medium leading-relaxed italic">
                “These additional criteria make the scholarship policy more transparent while allowing the Foundation to prioritize deserving students with both academic merit and financial need.”
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#E9E1E5] flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openScholarshipModal}
                className="px-6 py-3 text-xs font-semibold text-white bg-[#831238] hover:bg-[#5C0B25] rounded-lg shadow-sm transition-all cursor-pointer"
              >
                Apply for ANBU Scholarship
              </button>
              <Link
                to="/contact-us"
                className="px-6 py-3 text-xs font-semibold text-[#831238] bg-[#F6E9EE] hover:bg-[#ebd5df] rounded-lg transition-colors"
              >
                Contact Scholarship Committee
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
    </div>
  );
};
