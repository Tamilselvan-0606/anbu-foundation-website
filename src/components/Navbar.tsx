import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/foundationData.ts';

interface NavbarProps {
  onOpenScholarship?: () => void;
  onOpenGetInvolved?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenScholarship, onOpenGetInvolved }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'about' | 'initiatives' | 'admission' | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);

  // Track scroll position for elevating navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Dropdown hover helpers with intentional delay to avoid jitter
  const handleMouseEnter = (menu: 'about' | 'initiatives' | 'admission') => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isAboutActive = isActive('/about-us') || isActive('/founders-desk');
  const isInitiativesActive = isActive('/initiatives');
  const isAdmissionActive = isActive('/eligibility') || isActive('/faq');

  return (
    <header className="sticky top-0 z-50 transition-all duration-200">
      {/* Main Navbar Bar */}
      <div className={`bg-[#F3E2E8] border-b border-[#E8D0D9] transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo at the left */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src="/images/logo-maroon.png"
              alt="Anbu Foundation"
              className="h-13 sm:h-15 lg:h-16 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav ref={desktopNavRef} className="hidden lg:flex items-center gap-1.5 xl:gap-3 text-[15px] xl:text-[16px] font-bold lg:mr-8 xl:mr-16">
            
            {/* 1. Home */}
            <Link
              to="/"
              className={`transition-all whitespace-nowrap ${
                isActive('/') && location.pathname === '/'
                  ? 'bg-[#831238] text-white font-bold px-3 py-1.5 rounded-lg shadow-sm'
                  : 'text-[#334155] hover:text-[#831238] font-bold px-3 py-1.5 rounded-lg hover:bg-black/5'
              }`}
            >
              Home
            </Link>

            {/* 2. About Us Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                className={`flex items-center gap-1 transition-all whitespace-nowrap cursor-pointer ${
                  isAboutActive
                    ? 'bg-[#831238] text-white font-bold px-3 py-1.5 rounded-lg shadow-sm'
                    : 'text-[#334155] hover:text-[#831238] font-bold px-2.5 py-1.5 rounded-lg hover:bg-black/5'
                }`}
                aria-expanded={activeDropdown === 'about'}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'about' ? 'rotate-180' : ''
                } ${isAboutActive ? 'text-white' : 'text-[#64748B]'}`} />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute left-0 top-full pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="w-56 bg-white rounded-xl shadow-xl border border-[#E8D0D9] py-2">
                    <Link
                      to="/about-us"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-[14px] xl:text-[15px] font-medium text-[#334155] hover:bg-[#F3E2E8] hover:text-[#831238] transition-colors whitespace-nowrap"
                    >
                      Foundation
                    </Link>
                    <Link
                      to="/founders-desk"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-[14px] xl:text-[15px] font-medium text-[#334155] hover:bg-[#F3E2E8] hover:text-[#831238] transition-colors whitespace-nowrap"
                    >
                      Foundation Desk
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Initiatives Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('initiatives')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'initiatives' ? null : 'initiatives')}
                className={`flex items-center gap-1 transition-all whitespace-nowrap cursor-pointer ${
                  isInitiativesActive
                    ? 'bg-[#831238] text-white font-bold px-3 py-1.5 rounded-lg shadow-sm'
                    : 'text-[#334155] hover:text-[#831238] font-bold px-2.5 py-1.5 rounded-lg hover:bg-black/5'
                }`}
                aria-expanded={activeDropdown === 'initiatives'}
              >
                <span>Initiatives</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'initiatives' ? 'rotate-180' : ''
                } ${isInitiativesActive ? 'text-white' : 'text-[#64748B]'}`} />
              </button>

              {activeDropdown === 'initiatives' && (
                <div className="absolute left-0 top-full pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="w-72 bg-white rounded-xl shadow-xl border border-[#E8D0D9] py-2">
                    <Link
                      to="/initiatives/anbu-scholarship"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-[14px] xl:text-[15px] font-medium text-[#334155] hover:bg-[#F3E2E8] hover:text-[#831238] transition-colors"
                    >
                      Anbu Scholarship
                    </Link>
                    <Link
                      to="/initiatives/inclusive-education"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-[14px] xl:text-[15px] font-medium text-[#334155] hover:bg-[#F3E2E8] hover:text-[#831238] transition-colors"
                    >
                      Inclusive Education
                    </Link>
                    <Link
                      to="/initiatives/skill-development"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-[14px] xl:text-[15px] font-medium text-[#334155] hover:bg-[#F3E2E8] hover:text-[#831238] transition-colors"
                    >
                      Skill Development
                    </Link>
                    <Link
                      to="/initiatives/joy-of-giving"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-[14px] xl:text-[15px] font-medium text-[#334155] hover:bg-[#F3E2E8] hover:text-[#831238] transition-colors"
                    >
                      Joy of Giving
                    </Link>
                    <Link
                      to="/initiatives/school-supporting-programs"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-[14px] xl:text-[15px] font-medium text-[#334155] hover:bg-[#F3E2E8] hover:text-[#831238] transition-colors"
                    >
                      School Supporting Programs
                    </Link>
                    <Link
                      to="/initiatives/rural-development"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-[14px] xl:text-[15px] font-medium text-[#334155] hover:bg-[#F3E2E8] hover:text-[#831238] transition-colors"
                    >
                      Rural Development
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Admission Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('admission')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'admission' ? null : 'admission')}
                className={`flex items-center gap-1 transition-all whitespace-nowrap cursor-pointer ${
                  isAdmissionActive
                    ? 'bg-[#831238] text-white font-bold px-3 py-1.5 rounded-lg shadow-sm'
                    : 'text-[#334155] hover:text-[#831238] font-bold px-2.5 py-1.5 rounded-lg hover:bg-black/5'
                }`}
                aria-expanded={activeDropdown === 'admission'}
              >
                <span>Admission</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'admission' ? 'rotate-180' : ''
                } ${isAdmissionActive ? 'text-white' : 'text-[#64748B]'}`} />
              </button>

              {activeDropdown === 'admission' && (
                <div className="absolute left-0 top-full pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="w-56 bg-white rounded-xl shadow-xl border border-[#E8D0D9] py-2">
                    <Link
                      to="/eligibility"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-[14px] xl:text-[15px] font-medium text-[#334155] hover:bg-[#F3E2E8] hover:text-[#831238] transition-colors whitespace-nowrap"
                    >
                      Eligibility
                    </Link>
                    <Link
                      to="/faq"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-[14px] xl:text-[15px] font-medium text-[#334155] hover:bg-[#F3E2E8] hover:text-[#831238] transition-colors whitespace-nowrap"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Success Stories */}
            <Link
              to="/success-stories"
              className={`transition-all whitespace-nowrap ${
                isActive('/success-stories')
                  ? 'bg-[#831238] text-white font-bold px-3 py-1.5 rounded-lg shadow-sm'
                  : 'text-[#334155] hover:text-[#831238] font-bold px-2.5 py-1.5 rounded-lg hover:bg-black/5'
              }`}
            >
              Success Stories
            </Link>

            {/* 6. Contact Us */}
            <Link
              to="/contact-us"
              className={`transition-all whitespace-nowrap ${
                isActive('/contact-us')
                  ? 'bg-[#831238] text-white font-bold px-3 py-1.5 rounded-lg shadow-sm'
                  : 'text-[#334155] hover:text-[#831238] font-bold px-2.5 py-1.5 rounded-lg hover:bg-black/5'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#334155] hover:text-[#831238] hover:bg-black/5 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F3E2E8] border-b border-[#E8D0D9] shadow-2xl px-6 py-6 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2 text-sm font-bold">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-lg transition-all ${
                location.pathname === '/' 
                  ? 'bg-[#831238] text-white font-bold shadow-sm' 
                  : 'text-[#334155] hover:text-[#831238]'
              }`}
            >
              Home
            </Link>

            <div className="py-1">
              <div className="px-3 text-[11px] font-extrabold uppercase tracking-wider text-[#64748B] mb-1">
                About Us
              </div>
              <Link to="/about-us" className="block px-5 py-2 text-[14px] font-medium text-[#334155] hover:text-[#831238]">
                Foundation
              </Link>
              <Link to="/founders-desk" className="block px-5 py-2 text-[14px] font-medium text-[#334155] hover:text-[#831238]">
                Foundation Desk
              </Link>
            </div>

            <div className="py-1">
              <div className="px-3 text-[11px] font-extrabold uppercase tracking-wider text-[#64748B] mb-1">
                Initiatives
              </div>
              <Link to="/initiatives/anbu-scholarship" className="block px-5 py-2 text-[14px] font-medium text-[#334155] hover:text-[#831238]">
                Anbu Scholarship
              </Link>
              <Link to="/initiatives/inclusive-education" className="block px-5 py-2 text-[14px] font-medium text-[#334155] hover:text-[#831238]">
                Inclusive Education
              </Link>
              <Link to="/initiatives/skill-development" className="block px-5 py-2 text-[14px] font-medium text-[#334155] hover:text-[#831238]">
                Skill Development
              </Link>
              <Link to="/initiatives/joy-of-giving" className="block px-5 py-2 text-[14px] font-medium text-[#334155] hover:text-[#831238]">
                Joy of Giving
              </Link>
              <Link to="/initiatives/school-supporting-programs" className="block px-5 py-2 text-[14px] font-medium text-[#334155] hover:text-[#831238]">
                School Supporting Programs
              </Link>
              <Link to="/initiatives/rural-development" className="block px-5 py-2 text-[14px] font-medium text-[#334155] hover:text-[#831238]">
                Rural Development
              </Link>
            </div>

            <div className="py-1">
              <div className="px-3 text-[11px] font-extrabold uppercase tracking-wider text-[#64748B] mb-1">
                Admission
              </div>
              <Link to="/eligibility" className="block px-5 py-2 text-[14px] font-medium text-[#334155] hover:text-[#831238]">
                Eligibility
              </Link>
              <Link to="/faq" className="block px-5 py-2 text-[14px] font-medium text-[#334155] hover:text-[#831238]">
                FAQ
              </Link>
            </div>

            <Link
              to="/success-stories"
              className={`px-3.5 py-2 rounded-lg transition-all ${
                isActive('/success-stories') 
                  ? 'bg-[#831238] text-white font-bold shadow-sm' 
                  : 'text-[#334155] hover:text-[#831238]'
              }`}
            >
              Success Stories
            </Link>

            <Link
              to="/contact-us"
              className={`px-3.5 py-2 rounded-lg transition-all ${
                isActive('/contact-us') 
                  ? 'bg-[#831238] text-white font-bold shadow-sm' 
                  : 'text-[#334155] hover:text-[#831238]'
              }`}
            >
              Contact Us
            </Link>
          </nav>

        </div>
      )}
    </header>
  );
};
