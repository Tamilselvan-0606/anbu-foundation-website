import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Heart, ExternalLink, Utensils, HeartPulse, GraduationCap, HandHeart, CheckCircle2 } from 'lucide-react';
import { PageBanner } from '../components/PageBanner.tsx';

interface ContextType {
  openScholarshipModal: () => void;
  openGetInvolvedModal: () => void;
}

export const JoyOfGiving: React.FC = () => {
  const { openGetInvolvedModal } = useOutletContext<ContextType>();

  const initiatives = [
    {
      category: 'Food & Nutritional Support',
      icon: Utensils,
      color: 'text-[#831238] bg-[#F6E9EE]',
      items: [
        'Lunch is provided every day for the students of Little Hearts Residential School for the mentally Challenged in Mahabalipuram and Pudupakkam , St.Louis in Ponniammankoil and Banyan',
        'Food is provided periodically for orphanages such as Pope George garden in Madhavaram, Friends home in vellore (HIV affected people), Indira old age home in Injambakkam',
        'Every Saturday distributing fruits and necessary food topatients in Adyar Cancer Institute, Chennai'
      ]
    },
    {
      category: 'Healthcare & Medical Aid',
      icon: HeartPulse,
      color: 'text-[#831238] bg-[#F6E9EE]',
      items: [
        'Health care support for some of the children for cancer treatment in Meenakshi Mission Hospital of Madurai',
        'Health care support for autism affected children in MOTHER AND CHILD WELFARE AND RESEARCH FOUNDATION INDIA of Kolkatta'
      ]
    },
    {
      category: 'Educational Sponsorship',
      icon: GraduationCap,
      color: 'text-[#831238] bg-[#F6E9EE]',
      items: [
        'Helping hand for the education of few children belongs to Saranya children home, Help a child of India, PengalSamoogaNala trust, Christian mission charitable trust and students from world vision'
      ]
    },
    {
      category: 'Community & Relief Assistance',
      icon: HandHeart,
      color: 'text-[#831238] bg-[#F6E9EE]',
      items: [
        'Active in offering needed assistance to Sumanahalli society, Smile foundation, Health First India (Leprosy relief work)'
      ]
    }
  ];

  const beneficiaryPartners = [
    'Little Hearts Residential School',
    'Adyar Cancer Institute',
    'Meenakshi Mission Hospital',
    'St. Louis Ponniammankoil',
    'Banyan',
    'Mother and Child Welfare & Research Foundation',
    'Pope George Garden',
    'Friends Home Vellore',
    'Indira Old Age Home',
    'Saranya Children Home',
    'Help a Child of India',
    'Smile Foundation',
    'Health First India'
  ];

  return (
    <div className="space-y-0">
      <PageBanner
        title="Joy of Giving"
        subtitle="“Joy of giving is the Joy of living”"
        badge="Initiative · Compassionate Outreach"
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
                <span>Initiative · Compassionate Outreach</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
                Joy of Giving
              </h1>
            </div>
            <p className="text-sm font-serif italic text-[#D4AF37] max-w-sm text-right hidden md:block">
              “Joy of giving is the Joy of living”
            </p>
          </div>

          <div className="p-6 sm:p-12 lg:p-14 space-y-8">
            
            {/* Motto Banner */}
            <div className="border-b border-[#E9E1E5] pb-5 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#831238] leading-snug">
                “Joy of giving is the Joy of living”
              </h2>
            </div>

            {/* Narrative & Video Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* YouTube Video */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#831238]/20 bg-black aspect-video flex items-center">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/YBNfXKn1128"
                    title="Anbu Foundation - Joy of Giving Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-xs px-1">
                  <span className="font-medium text-[#70676C]">
                    Joy of Giving Outreach Video
                  </span>
                  <a
                    href="https://www.youtube.com/watch?v=YBNfXKn1128"
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
                <p className="font-medium text-[#831238]">
                  The foundation is extending its services to divergent sectors of the society. The prime services are offering food, healthcare and education.
                </p>
                <p className="text-[#70676C]">
                  Through grassroots outreach, daily nourishment programs, specialized pediatric healthcare interventions, and educational sponsorships, Anbu Foundation touches lives with unwavering dignity, compassion, and care.
                </p>
              </div>

            </div>

            {/* Outreach Services & Initiatives */}
            <div className="pt-6 border-t border-[#E9E1E5] space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#831238] block">
                  Outreach Activities
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-bold text-[#262126]">
                  Extending Service Across Divergent Sectors
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {initiatives.map((section, idx) => {
                  const Icon = section.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-[#FAF7F8] rounded-xl border border-[#E9E1E5] p-5 space-y-3.5 hover:border-[#831238]/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg ${section.color} flex items-center justify-center shrink-0`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-bold text-[#831238]">
                          {section.category}
                        </h4>
                      </div>

                      <ul className="space-y-2.5 pt-1">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#262126] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#831238] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Supported Institutions & Partner Organizations */}
            <div className="pt-6 border-t border-[#E9E1E5] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#831238] block">
                Partner Institutions &amp; Supported Organizations
              </span>
              <div className="flex flex-wrap gap-2">
                {beneficiaryPartners.map((partner) => (
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
                onClick={openGetInvolvedModal}
                className="px-6 py-3 text-xs font-semibold text-white bg-[#831238] hover:bg-[#5C0B25] rounded-lg shadow-sm transition-all cursor-pointer"
              >
                Support Joy of Giving Outreach
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
