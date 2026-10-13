import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { ScrollToTop } from '../components/ScrollToTop.tsx';
import { ScholarshipModal } from '../components/ScholarshipModal.tsx';
import { GetInvolvedModal } from '../components/GetInvolvedModal.tsx';

export const MainLayout: React.FC = () => {
  const [isScholarshipOpen, setIsScholarshipOpen] = useState(false);
  const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F8] text-[#262126] font-sans">
      <ScrollToTop />
      
      <Navbar
        onOpenScholarship={() => setIsScholarshipOpen(true)}
        onOpenGetInvolved={() => setIsGetInvolvedOpen(true)}
      />

      <main className="flex-1">
        <Outlet context={{ 
          openScholarshipModal: () => setIsScholarshipOpen(true),
          openGetInvolvedModal: () => setIsGetInvolvedOpen(true)
        }} />
      </main>

      <Footer />

      <ScholarshipModal
        isOpen={isScholarshipOpen}
        onClose={() => setIsScholarshipOpen(false)}
      />

      <GetInvolvedModal
        isOpen={isGetInvolvedOpen}
        onClose={() => setIsGetInvolvedOpen(false)}
      />
    </div>
  );
};
