import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, FileText, Send, User, Mail, Phone, GraduationCap } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/foundationData.ts';

interface ScholarshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScholarshipModal: React.FC<ScholarshipModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: 'B.Tech. / B.E.',
    academicScore: '',
    annualIncome: '',
    category: 'First-Generation Graduate',
    needStatement: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Valid email address is required';
    }
    if (!formData.phone.trim() || !/^\+?[0-9\s-]{10,14}$/.test(formData.phone)) {
      newErrors.phone = 'Valid phone number is required (10 digits)';
    }
    if (!formData.academicScore.trim() || isNaN(Number(formData.academicScore)) || Number(formData.academicScore) < 40 || Number(formData.academicScore) > 100) {
      newErrors.academicScore = 'Enter valid academic percentage (40 - 100)';
    }
    if (!formData.annualIncome.trim() || isNaN(Number(formData.annualIncome))) {
      newErrors.annualIncome = 'Enter approximate family annual income in ₹';
    }
    if (!formData.needStatement.trim()) {
      newErrors.needStatement = 'Please provide a brief statement of financial need';
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
      const generatedRef = `ANBU-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(generatedRef);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      program: 'B.Tech. / B.E.',
      academicScore: '',
      annualIncome: '',
      category: 'First-Generation Graduate',
      needStatement: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E9E1E5] overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="scholarship-modal-title"
      >
        {/* Header */}
        <div className="bg-[#831238] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#F6E9EE]/80 font-medium">
              Sathyabama Institute of Science and Technology
            </span>
            <h3 id="scholarship-modal-title" className="text-xl font-sans font-bold text-white mt-0.5">
              Anbu Scholarship Application
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close scholarship modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submittedRef ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#F6E9EE] text-[#831238] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-sans font-bold text-[#262126]">
                Application Dossier Initiated
              </h4>
              <p className="text-sm text-[#70676C] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#262126]">{formData.fullName}</strong>. Your preliminary scholarship registration has been recorded under reference number:
              </p>
              <div className="bg-[#FAF7F8] border border-[#E9E1E5] rounded-xl p-4 max-w-sm mx-auto">
                <div className="text-xs text-[#70676C] uppercase tracking-wider">Application Reference ID</div>
                <div className="text-xl font-mono font-bold text-[#831238] mt-1 tracking-wide">
                  {submittedRef}
                </div>
              </div>
              <div className="text-xs text-[#70676C] max-w-lg mx-auto text-left bg-[#F6E9EE]/40 p-4 rounded-xl border border-[#E9E1E5] space-y-2">
                <p className="font-semibold text-[#831238]">Next Steps for Verification:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Keep a copy of this reference code for your records.</li>
                  <li>Submit your self-attested Class 10 & 12 mark sheets along with your official Tahsildar Income Certificate.</li>
                  <li>Documents may be submitted in person at the Anbu Foundation Office, Administrative Block, Sathyabama Campus, Chennai.</li>
                  <li>For queries, reach out at <a href={`tel:${INSTITUTION_INFO.phone}`} className="underline font-medium text-[#831238]">{INSTITUTION_INFO.phone}</a>.</li>
                </ol>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#831238] text-white font-semibold rounded-lg hover:bg-[#5C0B25] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#70676C] pb-2 border-b border-[#E9E1E5]">
                Please provide accurate student and family details as per official government certificates. Fields marked with * are required.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#262126] mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Anand Kumar S"
                    className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                      errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5] bg-white'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-0.5">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#262126] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@example.com"
                    className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                      errors.email ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5] bg-white'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#262126] mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5] bg-white'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#262126] mb-1">
                    Degree / Course Track *
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-[#E9E1E5] rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-[#831238]"
                  >
                    <option value="B.Tech. / B.E.">B.Tech. / B.E. (Engineering)</option>
                    <option value="B.Sc. / B.A. / B.Com">B.Sc. / B.A. / B.Com (Arts & Science)</option>
                    <option value="B.Arch. / Planning">B.Arch. / Design & Architecture</option>
                    <option value="M.Tech. / M.Sc. / MBA">Postgraduate Degree (M.Tech / M.Sc / MBA)</option>
                    <option value="Biomedical / Pharmacy">Biomedical / Pharmacy Sciences</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#262126] mb-1">
                    HSC / Qualifying Score (%) *
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.academicScore}
                    onChange={(e) => setFormData({ ...formData, academicScore: e.target.value })}
                    placeholder="e.g. 88.5"
                    className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                      errors.academicScore ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5] bg-white'
                    }`}
                  />
                  {errors.academicScore && <p className="text-[11px] text-red-600 mt-0.5">{errors.academicScore}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#262126] mb-1">
                    Family Annual Income (₹) *
                  </label>
                  <input
                    type="number"
                    value={formData.annualIncome}
                    onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
                    placeholder="e.g. 150000"
                    className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                      errors.annualIncome ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5] bg-white'
                    }`}
                  />
                  {errors.annualIncome && <p className="text-[11px] text-red-600 mt-0.5">{errors.annualIncome}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#262126] mb-1">
                  Primary Concession Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-[#E9E1E5] rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-[#831238]"
                >
                  <option value="First-Generation Graduate">First-Generation College Graduate</option>
                  <option value="Single Parent / Orphan Ward">Single Parent / Guardian Hardship</option>
                  <option value="Rural Underprivileged Scholar">Rural Agricultural Family</option>
                  <option value="Differently-Abled Student">Differently-Abled (PwD) Student</option>
                  <option value="Merit-cum-Means General">General Merit-cum-Means</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#262126] mb-1">
                  Brief Statement of Financial Need *
                </label>
                <textarea
                  rows={3}
                  value={formData.needStatement}
                  onChange={(e) => setFormData({ ...formData, needStatement: e.target.value })}
                  placeholder="Explain your family economic circumstance and how the Anbu Scholarship will help fulfill your academic dreams..."
                  className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                    errors.needStatement ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5] bg-white'
                  }`}
                />
                {errors.needStatement && <p className="text-[11px] text-red-600 mt-0.5">{errors.needStatement}</p>}
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
                  {isSubmitting ? 'Registering...' : 'Submit Application'}
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
