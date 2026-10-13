import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/foundationData.ts';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com',
      ariaLabel: 'Facebook',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      ariaLabel: 'Twitter',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      ariaLabel: 'LinkedIn',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      ariaLabel: 'Instagram',
    },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Founders Desk', path: '/founders-desk' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Eligibility', path: '/eligibility' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const initiativeLinks = [
    { name: 'Anbu Scholarship', path: '/initiatives/anbu-scholarship' },
    { name: 'Inclusive Education', path: '/initiatives/inclusive-education' },
    { name: 'School Supporting Programs', path: '/initiatives/school-supporting-programs' },
    { name: 'Rural Development', path: '/initiatives/rural-development' },
    { name: 'Joy of Giving', path: '/initiatives/joy-of-giving' },
    { name: 'Skill Development', path: '/initiatives/skill-development' },
  ];

  return (
    <footer className="bg-[#780C2F] text-white border-t border-[#8B1439]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Far Left Column: White Logo & Round Social Media Icons */}
          <div className="lg:col-span-3 flex flex-col items-start justify-start space-y-5 -mt-1 sm:-mt-2">
            <Link to="/" className="inline-block group" aria-label="Anbu Foundation Home">
              <img
                src="/images/logo.png"
                alt="Anbu Foundation"
                className="h-14 sm:h-16 lg:h-18 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Social Media Links (Round Shape) */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.ariaLabel}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#E5A823] text-white hover:text-[#780C2F] border border-white/20 hover:border-[#E5A823] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
                  >
                    <IconComponent className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-extrabold text-[13px] sm:text-sm tracking-wider uppercase">
              QUICK LINKS
            </h3>
            <div className="space-y-2.5">
              {quickLinks.map((item) => (
                <div key={item.name} className="flex items-center">
                  <span className="text-[#E5A823] mr-2 text-sm leading-none select-none">•</span>
                  <Link
                    to={item.path}
                    className="text-white hover:text-[#E5A823] transition-colors text-[13px] font-medium"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Initiatives Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-extrabold text-[13px] sm:text-sm tracking-wider uppercase">
              INITIATIVES
            </h3>
            <div className="space-y-2.5">
              {initiativeLinks.map((item) => (
                <div key={item.name} className="flex items-center">
                  <span className="text-[#E5A823] mr-2 text-sm leading-none select-none">•</span>
                  <Link
                    to={item.path}
                    className="text-white hover:text-[#E5A823] transition-colors text-[13px] font-medium"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-extrabold text-[13px] sm:text-sm tracking-wider uppercase">
              CONTACT DETAILS
            </h3>

            {/* Styled with the gold vertical accent border */}
            <div className="border-l-2 border-[#E5A823] pl-4 space-y-3">
              
              {/* Name & Title */}
              <div>
                <h4 className="text-white font-bold text-sm leading-snug">
                  Directors,
                </h4>
                <p className="text-white font-bold text-sm leading-snug">
                  Anbu Foundation
                </p>
                <p className="text-[#E5A823] font-bold text-[11px] uppercase tracking-wider mt-0.5">
                  SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY
                </p>
              </div>

              {/* Address */}
              <div className="text-white/95 text-[13px] leading-relaxed space-y-0.5">
                <p className="text-white/70 text-[11px]">
                  (Deemed to be University)
                </p>
                <p>
                  Jeppiaar Nagar,
                </p>
                <p>
                  Chennai – 600 119, Tamil Nadu, India
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="pt-0.5 text-[13px]">
                <span className="text-white font-medium block text-xs">
                  Phone:
                </span>
                <p className="mt-0.5 font-semibold text-[#E5A823]">
                  <a href="tel:+914424503200" className="hover:underline">
                    +91 44 24503200
                  </a>
                  {', '}
                  <a href="tel:+919940058263" className="hover:underline">
                    +91 9940058263
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="pt-0.5 text-[13px]">
                <span className="text-white font-medium block text-xs">
                  Email:
                </span>
                <a
                  href="mailto:anbuscholarship@gmail.com"
                  className="text-[#E5A823] font-semibold hover:underline break-all block mt-0.5"
                >
                  anbuscholarship@gmail.com
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-white/10 bg-[#5E0824] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-xs text-white/70">
          © {currentYear} Anbu Foundation · Sathyabama Institute of Science and Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
