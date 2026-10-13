import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  ArrowRight,
  Heart,
  GraduationCap,
  CheckCircle,
  Eye,
  Compass,
  Users,
  BookOpen
} from 'lucide-react';
import { IMPACT_HIGHLIGHTS } from '../data/foundationData.ts';
import { ImageWithFallback } from '../components/ImageWithFallback.tsx';

interface ContextType {
  openScholarshipModal: () => void;
  openGetInvolvedModal: () => void;
}

export const Home: React.FC = () => {
  const { openScholarshipModal } = useOutletContext<ContextType>();

  return (
    <div className="space-y-0">

      {/* SECTION 1: HERO SECTION (FULL SCREEN) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F6E9EE]/60 via-[#FAF7F8] to-white min-h-[calc(100vh-5rem)] flex items-center py-12 lg:py-0 border-b border-[#E9E1E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Editorial Headline & Messaging */}
            <div className="lg:col-span-6 space-y-6 max-w-xl">

              {/* Institutional Identifier Badge */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#831238] bg-[#F6E9EE] px-3.5 py-1.5 rounded-md border border-[#E9E1E5]">
                <Heart className="w-3.5 h-3.5 fill-[#831238]" />
                <span>Anbu Foundation</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#831238] tracking-tight leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Empowering Lives Through Education
              </h1>

              <p className="text-[15px] sm:text-[16px] text-[#70676C] leading-relaxed max-w-lg font-normal">
                Anbu Foundation, associated with Sathyabama Institute of Science and Technology, is committed to creating opportunities for deserving students and underserved communities through education, inclusive development, skill-building, and compassionate service.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#about-section"
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-[#831238] hover:bg-[#5C0B25] rounded-none shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>Explore Our Initiatives</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={openScholarshipModal}
                  className="px-6 py-3.5 text-sm font-semibold text-[#831238] bg-white border border-[#831238]/30 hover:border-[#831238] hover:bg-[#F6E9EE]/40 rounded-none transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-[#831238]" />
                  <span>Apply for Scholarship</span>
                </button>
              </div>
            </div>

            {/* Right Column: Photographic Focal Point */}
            <div className="lg:col-span-6 lg:-ml-4 xl:-ml-6">
              <div className="relative w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E9E1E5] aspect-16/10 sm:aspect-16/9 lg:aspect-7/5 w-full">
                  <ImageWithFallback
                    src="/images/hero-banner.jpg"
                    alt="Anbu Foundation 20 Years of Impact & Sathyabama Institute"
                    fallbackTitle="Anbu Foundation Celebration"
                    fallbackCategory="Sathyabama & Anbu Foundation"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F6E9EE]/90">
                      Celebrating Impact
                    </span>
                    <p className="text-sm font-sans italic text-white/95 mt-0.5">
                      "20 Years of Transforming Lives Through Education & Compassion"
                    </p>
                  </div>
                </div>

                {/* Subtle Decorative Maroon Offset Card */}
                <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white border border-[#E9E1E5] rounded-xl p-4 shadow-lg max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#831238] text-white flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5 fill-white/20" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#262126]">The Spirit of Anbu</div>
                      <div className="text-[11px] text-[#70676C]">Transforming compassion into action</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ABOUT ANBU FOUNDATION */}
      <section id="about-section" className="py-20 bg-white border-b border-[#E9E1E5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF7F8] rounded-2xl border border-[#E9E1E5] p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: About Intro & Message */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#831238] bg-[#F6E9EE] px-3 py-1 rounded-md">
                  <Heart className="w-3.5 h-3.5 fill-[#831238]" />
                  <span>About Anbu Foundation</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#831238] tracking-tight">
                  Dedicated to Uplifting Lives with Purpose &amp; Empathy
                </h2>
                <p className="text-[15px] text-[#70676C] leading-relaxed">
                  Rooted in the guiding philosophy of Sathyabama Institute of Science and Technology, Anbu Foundation is dedicated to transforming lives through inclusive education, rural revitalization, community health, and livelihood enablement.
                </p>
                <p className="text-[15px] text-[#262126] leading-relaxed">
                  We bridge the divide between capability and opportunity—ensuring every deserving child, student, and family finds a supportive platform to thrive with pride and dignity.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/about-us"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#831238] hover:bg-[#5C0B25] transition-all"
                  >
                    <span>Read Foundation Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/founders-desk"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#831238] bg-white border border-[#E9E1E5] hover:border-[#831238] transition-all"
                  >
                    <span>Founder's Desk</span>
                  </Link>
                </div>
              </div>

              {/* Right: 3 Core Pillars */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="p-4 rounded-xl bg-white border border-[#E9E1E5] flex items-start gap-3.5 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-[#831238] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#262126]">
                      Integrity in Ideation
                    </h3>
                    <p className="text-xs text-[#70676C] mt-0.5 leading-relaxed">
                      Conceived to serve unconditionally and create enduring value for all sections of society.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E9E1E5] flex items-start gap-3.5 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-[#831238] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#262126]">
                      Introspection in Planning
                    </h3>
                    <p className="text-xs text-[#70676C] mt-0.5 leading-relaxed">
                      Data-informed selection and multi-trust partnerships ensuring transparent and targeted support.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E9E1E5] flex items-start gap-3.5 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-[#831238] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#262126]">
                      Involvement in Execution
                    </h3>
                    <p className="text-xs text-[#70676C] mt-0.5 leading-relaxed">
                      Direct engagement on ground across schools, villages, and healthcare outreach initiatives.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ANBU FOUNDATION */}
      <section className="py-20 bg-white border-b border-[#E9E1E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">

            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#831238] bg-[#F6E9EE] px-3.5 py-1.5 rounded-md border border-[#E9E1E5]">
              <Heart className="w-3.5 h-3.5 fill-[#831238]" />
              <span>Anbu Foundation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#831238] tracking-tight">
              Anbu Foundation
            </h2>

            <div className="space-y-4 text-[#262126] text-[15px] leading-relaxed">
              <p>
                Anbu Scholarship is more than financial aid, it's a beacon of hope for students who dare to dream beyond their circumstances. Established in 2006, the scholarship was born from a deeply personal mission: to honor the values of compassion, equity, and education instilled by our parents. What began as a modest initiative has now flourished into a thriving movement, empowering hundreds of students across Tamil Nadu and beyond.
              </p>
              <p>
                Rooted in the belief that education is the most powerful tool for social upliftment, the Anbu Scholarship reflects our institution's unwavering commitment to inclusive growth. Each recipient is a testament to the transformative power of opportunity proof that talent knows no boundaries, and that with the right support, even the most disadvantaged can rise to greatness.
              </p>
              <p>
                The foundation collaborates with multiple trusts and peer organizations, ensuring transparency, accountability, and maximum reach. Together, we cultivate a garden of success stories, each one blooming with resilience, ambition, and gratitude.
              </p>
            </div>

            <div className="p-6 bg-[#F6E9EE]/60 rounded-2xl border-l-4 border-[#831238] mt-6">
              <p className="text-xl sm:text-2xl font-serif font-bold text-[#831238]">
                “We welcome you to this home of love” - Anbu!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: VISION AND MISSION */}
      <section className="py-20 bg-[#FAF7F8] border-b border-[#E9E1E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">

            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#831238] tracking-tight">
                Vision and Mission
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="bg-[#831238] rounded-none p-8 shadow-md space-y-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37] text-[#831238] flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-sans font-bold text-[#D4AF37]">
                    Vision
                  </h3>
                </div>
                <p className="text-[15px] text-white/90 leading-relaxed">
                  To build a society where every individual, irrespective of economic or social background, has access to quality education, healthcare, livelihood opportunities, and a life of dignity through compassionate service and sustainable development.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-[#831238] rounded-none p-8 shadow-md space-y-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37] text-[#831238] flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-sans font-bold text-[#D4AF37]">
                    Mission
                  </h3>
                </div>
                <p className="text-xs font-semibold text-[#F6E9EE]/90 uppercase tracking-wider">
                  The ANBU Foundation is committed to:
                </p>
                <ul className="space-y-3 pt-1">
                  {[
                    "Promoting quality education for deserving and underprivileged students.",
                    "Supporting healthcare initiatives that improve community well-being.",
                    "Empowering rural and marginalized communities through sustainable development.",
                    "Encouraging youth leadership, innovation, and social responsibility.",
                    "Preserving environmental resources through awareness and conservation programs.",
                    "Creating equal opportunities that foster inclusive growth and human dignity."
                  ].map((missionItem, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-3 text-sm text-white/90 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#F6E9EE] shrink-0 mt-1" />
                      <span>{missionItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: LIFE @ ANBU FOUNDATION */}
      <section id="initiatives" className="py-20 bg-white border-b border-[#E9E1E5] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-10">

            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#831238] tracking-tight">
                Life @ ANBU FOUNDATION
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Card 1: Anbu Scholarship */}
              <div className="bg-[#FAF7F8] rounded-2xl border border-[#E9E1E5] p-6 flex flex-col justify-between hover:border-[#831238]/40 hover:shadow-md transition-all">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F6E9EE] text-[#831238] flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-[#831238]">
                    Anbu Scholarship
                  </h3>
                  <p className="text-sm text-[#262126] leading-relaxed">
                    To do great work, need tools. While blood, sweat and tears have built empires.
                  </p>
                </div>
                <div className="pt-6 flex justify-center">
                  <Link
                    to="/initiatives/anbu-scholarship"
                    className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#831238] hover:bg-[#680A28] px-4 py-2 rounded-none shadow-sm hover:shadow transition-all group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Inclusive Education */}
              <div className="bg-[#FAF7F8] rounded-2xl border border-[#E9E1E5] p-6 flex flex-col justify-between hover:border-[#831238]/40 hover:shadow-md transition-all">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F6E9EE] text-[#831238] flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-[#831238]">
                    Inclusive Education
                  </h3>
                  <p className="text-sm text-[#262126] leading-relaxed">
                    Maintaining healthy and happy environments is an important, and often neglected part of aid work.
                  </p>
                </div>
                <div className="pt-6 flex justify-center">
                  <Link
                    to="/initiatives/inclusive-education"
                    className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#831238] hover:bg-[#680A28] px-4 py-2 rounded-none shadow-sm hover:shadow transition-all group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Skill Development */}
              <div className="bg-[#FAF7F8] rounded-2xl border border-[#E9E1E5] p-6 flex flex-col justify-between hover:border-[#831238]/40 hover:shadow-md transition-all">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F6E9EE] text-[#831238] flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-[#831238]">
                    Skill Development
                  </h3>
                  <p className="text-sm text-[#262126] leading-relaxed">
                    The more we give importance to skill development, the more competent will be our youth.
                  </p>
                </div>
                <div className="pt-6 flex justify-center">
                  <Link
                    to="/initiatives/skill-development"
                    className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#831238] hover:bg-[#680A28] px-4 py-2 rounded-none shadow-sm hover:shadow transition-all group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Card 4: Joy of Giving */}
              <div className="bg-[#FAF7F8] rounded-2xl border border-[#E9E1E5] p-6 flex flex-col justify-between hover:border-[#831238]/40 hover:shadow-md transition-all">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F6E9EE] text-[#831238] flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-sans font-bold text-[#831238]">
                    Joy of Giving
                  </h3>
                  <p className="text-sm text-[#262126] leading-relaxed">
                    Empty stomachs hurt. They break concentration and make the future seem impossible.
                  </p>
                </div>
                <div className="pt-6 flex justify-center">
                  <Link
                    to="/initiatives/joy-of-giving"
                    className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#831238] hover:bg-[#680A28] px-4 py-2 rounded-none shadow-sm hover:shadow transition-all group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
