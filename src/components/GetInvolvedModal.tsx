import React, { useState } from 'react';
import { X, CheckCircle, Heart, Users, GraduationCap, Building2, Send } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/foundationData.ts';

interface GetInvolvedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetInvolvedModal: React.FC<GetInvolvedModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roleType: 'Alumni / Professional Mentor',
    interestArea: 'Student Mentorship & Career Guidance',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Valid email address is required';
    }
    if (!formData.phone.trim() || !/^\+?[0-9\s-]{10,14}$/.test(formData.phone)) {
      newErrors.phone = 'Valid phone number is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please share how you would like to connect or collaborate';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      roleType: 'Alumni / Professional Mentor',
      interestArea: 'Student Mentorship & Career Guidance',
      message: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#E9E1E5] overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="get-involved-title"
      >
        <div className="bg-[#831238] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#F6E9EE]/80 font-medium">
              Anbu Foundation Community
            </span>
            <h3 id="get-involved-title" className="text-xl font-sans font-bold text-white mt-0.5">
              Connect With Anbu Foundation
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#F6E9EE] text-[#831238] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-sans font-bold text-[#262126]">
                Thank You for Your Solidarity
              </h4>
              <p className="text-sm text-[#70676C] max-w-md mx-auto leading-relaxed">
                Your expression of interest has been received by the Anbu Foundation outreach team at Sathyabama Institute of Science and Technology.
              </p>
              <div className="bg-[#FAF7F8] p-4 rounded-xl border border-[#E9E1E5] text-xs text-[#70676C] text-left space-y-1.5 max-w-md mx-auto">
                <p className="font-semibold text-[#831238]">Coordinator Contact:</p>
                <p>Anbu Foundation Outreach Cell</p>
                <p>Phone: {INSTITUTION_INFO.phone}</p>
                <p>Email: {INSTITUTION_INFO.email}</p>
                <p>Campus: Jeppiaar Nagar, Chennai – 600119</p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#831238] text-white font-semibold rounded-lg hover:bg-[#5C0B25] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#70676C] pb-2 border-b border-[#E9E1E5]">
                Collaborate with us in empowering students, mentoring youth, supporting rural schools, and serving local communities.
              </p>

              <div>
                <label className="block text-xs font-semibold text-[#262126] mb-1">
                  Full Name / Organization *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. R. Sundaram / ABC Technologies CSR"
                  className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                    errors.name ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5] bg-white'
                  }`}
                />
                {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#262126] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                      errors.email ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5] bg-white'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#262126] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="9876543210"
                    className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5] bg-white'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#262126] mb-1">
                    Your Profile
                  </label>
                  <select
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-[#E9E1E5] rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-[#831238]"
                  >
                    <option value="Alumni / Professional Mentor">University Alumni</option>
                    <option value="Academician / Guest Speaker">Academician / Educator</option>
                    <option value="Corporate CSR Partner">Corporate CSR Partner</option>
                    <option value="Medical / Healthcare Professional">Healthcare Professional</option>
                    <option value="Community Well-Wisher">Community Well-Wisher</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#262126] mb-1">
                    Collaboration Focus
                  </label>
                  <select
                    value={formData.interestArea}
                    onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-[#E9E1E5] rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-[#831238]"
                  >
                    <option value="Student Mentorship & Career Guidance">Scholar Mentorship & Career Guidance</option>
                    <option value="Rural School Support & Lab Kits">Rural School Infrastructure & Lab Kits</option>
                    <option value="Skill Training Workshops">Women & Youth Skill Training</option>
                    <option value="Health Camps & Medical Outreach">Medical Camps & Health Outreach</option>
                    <option value="Inclusive Education Aids">Assistive Tech & Disability Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#262126] mb-1">
                  How Would You Like to Connect? *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details of your expertise, proposed collaboration, or support initiative..."
                  className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                    errors.message ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5] bg-white'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-red-600 mt-0.5">{errors.message}</p>}
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-sm font-medium text-[#70676C] hover:text-[#262126] rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-[#831238] hover:bg-[#5C0B25] rounded-lg shadow-sm transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
