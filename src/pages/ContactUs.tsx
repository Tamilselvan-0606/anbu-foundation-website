import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle, 
  Heart,
  ExternalLink
} from 'lucide-react';
import { PageBanner } from '../components/PageBanner.tsx';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    yourMessage: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Valid Email is required';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.yourMessage.trim()) errs.yourMessage = 'Message cannot be empty';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-0">
      
      {/* Header Banner */}
      <PageBanner
        title="Contact Us"
        subtitle="We welcome all enquiries regarding scholarships, social welfare initiatives, institutional partnerships, and volunteering."
        badge="Get In Touch"
        imageSrc="/images/contact-banner.jpg"
      />

      {/* Main Contact Grid */}
      <section className="py-20 bg-white border-b border-[#E9E1E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FAF7F8] rounded-none p-6 sm:p-8 border border-[#E9E1E5] shadow-xs space-y-6">
                
                {/* Address Card */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#831238] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 text-sm sm:text-base text-[#262126] leading-relaxed">
                    <p className="font-bold text-[#831238] text-base">
                      Directors,
                    </p>
                    <p className="font-semibold text-[#262126]">
                      Anbu Foundation
                    </p>
                    <p className="text-[#262126]">
                      Sathyabama Institute of Science and Technology
                    </p>
                    <p className="text-[#70676C] text-sm">
                      (Deemed to be University)
                    </p>
                    <p className="text-[#262126]">
                      Jeppiaar Nagar,
                    </p>
                    <p className="text-[#262126] font-medium">
                      Chennai-119, Tamil Nadu
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="pt-5 border-t border-[#E9E1E5] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#831238] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#831238]">
                      Phone Number
                    </h3>
                    <div className="text-sm sm:text-base font-semibold text-[#262126] space-y-0.5">
                      <p>
                        <a href="tel:+914424503200" className="hover:text-[#831238] transition-colors">
                          +91 44 24503200
                        </a>
                        ,{' '}
                        <a href="tel:+919940058263" className="hover:text-[#831238] transition-colors">
                          +91 9940058263
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* E-Mail */}
                <div className="pt-5 border-t border-[#E9E1E5] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#831238] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#831238]">
                      E-Mail
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#262126]">
                      <a href="mailto:anbuscholarship@gmail.com" className="hover:text-[#831238] hover:underline transition-colors">
                        anbuscholarship@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Get In Touch Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF7F8] rounded-none border border-[#E9E1E5] p-8 sm:p-10 shadow-xs">
                
                <h2 className="text-2xl font-sans font-bold text-[#831238] tracking-tight mb-2">
                  Get In Touch
                </h2>
                <p className="text-sm text-[#70676C] leading-relaxed mb-6">
                  Get in touch with us using the form below. We aim to respond to all enquiries within one working day.
                </p>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-3">
                    <div className="w-16 h-16 bg-[#F6E9EE] text-[#831238] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-sans font-bold text-[#262126]">
                      Thank You for Contacting Us
                    </h3>
                    <p className="text-sm text-[#70676C] max-w-sm mx-auto leading-relaxed">
                      Your message has been received. Our team will respond to you within one working day.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', subject: '', yourMessage: '' });
                      }}
                      className="mt-4 px-6 py-2.5 text-xs font-semibold text-white bg-[#831238] rounded-lg hover:bg-[#5C0B25] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#262126] mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm border rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                          errors.name ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5]'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-[#262126] mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm border rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                          errors.email ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5]'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-[#262126] mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm border rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                          errors.phone ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5]'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-[#262126] mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm border rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                          errors.subject ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5]'
                        }`}
                      />
                      {errors.subject && <p className="text-xs text-red-600 mt-1">{errors.subject}</p>}
                    </div>

                    {/* Your Message */}
                    <div>
                      <label className="block text-xs font-semibold text-[#262126] mb-1">
                        Your Message *
                      </label>
                      <textarea
                        rows={5}
                        value={formData.yourMessage}
                        onChange={(e) => setFormData({ ...formData, yourMessage: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm border rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-[#831238] ${
                          errors.yourMessage ? 'border-red-500 bg-red-50/30' : 'border-[#E9E1E5]'
                        }`}
                      />
                      {errors.yourMessage && <p className="text-xs text-red-600 mt-1">{errors.yourMessage}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#831238] hover:bg-[#5C0B25] rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? 'Sending...' : 'send message'}
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 bg-[#FAF7F8] border-b border-[#E9E1E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#831238] block">
                Location Coordinates
              </span>
              <h2 className="text-xl sm:text-2xl font-sans font-bold text-[#262126]">
                Google Map
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=Sathyabama+Institute+of+Science+and+Technology+Jeppiaar+Nagar+Chennai+600119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#831238] hover:underline"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Map Frame */}
          <div className="rounded-none overflow-hidden border border-[#E9E1E5] shadow-sm bg-white aspect-16/9 sm:aspect-21/9 min-h-[380px]">
            <iframe
              title="Sathyabama Institute of Science and Technology Google Map"
              src="https://maps.google.com/maps?q=Sathyabama%20Institute%20of%20Science%20and%20Technology%20Jeppiaar%20Nagar%20Chennai-119&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 min-h-[380px]"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

    </div>
  );
};
