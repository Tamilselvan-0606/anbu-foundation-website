import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Home, ArrowRight, HelpCircle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#FAF7F8]">
      <div className="max-w-md w-full bg-white rounded-2xl border border-[#E9E1E5] p-8 text-center shadow-xs space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-[#F6E9EE] text-[#831238] flex items-center justify-center mx-auto">
          <HelpCircle className="w-8 h-8" />
        </div>
        
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#831238]">
            404 Error
          </span>
          <h1 className="text-2xl font-sans font-bold text-[#262126] mt-1">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#70676C] mt-2 leading-relaxed">
            The page you are looking for may have been relocated or updated as part of the Anbu Foundation portal redesign.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#831238] hover:bg-[#5C0B25] rounded-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/initiatives/anbu-scholarship"
            className="px-5 py-2.5 text-xs font-semibold text-[#831238] bg-[#F6E9EE] hover:bg-[#ebd5df] rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <span>Explore Scholarships</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
