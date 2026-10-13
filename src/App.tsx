import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout.tsx';
import { Home } from './pages/Home.tsx';
import { AboutUs } from './pages/AboutUs.tsx';
import { FoundersDesk } from './pages/FoundersDesk.tsx';
import { Scholarship } from './pages/Scholarship.tsx';
import { InclusiveEducation } from './pages/InclusiveEducation.tsx';
import { SkillDevelopment } from './pages/SkillDevelopment.tsx';
import { JoyOfGiving } from './pages/JoyOfGiving.tsx';
import { SchoolPrograms } from './pages/SchoolPrograms.tsx';
import { RuralDevelopment } from './pages/RuralDevelopment.tsx';
import { SuccessStories } from './pages/SuccessStories.tsx';
import { Eligibility } from './pages/Eligibility.tsx';
import { FAQ } from './pages/FAQ.tsx';
import { ContactUs } from './pages/ContactUs.tsx';
import { NotFound } from './pages/NotFound.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="founders-desk" element={<FoundersDesk />} />
          <Route path="initiatives/anbu-scholarship" element={<Scholarship />} />
          <Route path="initiatives/inclusive-education" element={<InclusiveEducation />} />
          <Route path="initiatives/skill-development" element={<SkillDevelopment />} />
          <Route path="initiatives/joy-of-giving" element={<JoyOfGiving />} />
          <Route path="initiatives/school-supporting-programs" element={<SchoolPrograms />} />
          <Route path="initiatives/rural-development" element={<RuralDevelopment />} />
          <Route path="initiatives/rural-development-women-empowerment" element={<RuralDevelopment />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="eligibility" element={<Eligibility />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
