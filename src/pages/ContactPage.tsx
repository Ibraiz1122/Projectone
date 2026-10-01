import React, { useState } from 'react';
import type { ContactForm } from '../types';
import { COMPANY_INFO } from '../data/content';
import { sendContactEmail } from '../services/emailService';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare, 
  AlertCircle, 
  Loader2, 
  Building2, 
  ExternalLink 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    fullName: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const result = await sendContactEmail(formData);

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setErrorMessage(result.message || 'Transmission failed. Please call dispatch directly at (908) 787-8020.');
    }
  };

  return (
    <div className="space-y-12 pb-20 pt-6">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-forest-900 text-white p-7 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-emerald-300">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>We're Here to Help</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Get in Touch With Our Elizabeth, NJ Team
            </h1>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              Have questions about an upcoming school drive, requesting a bin for your retail lot, or inquiring about international export container shipments? We respond within 1 business day.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION & FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Warehouse Details (Compact, Tailored Mastercard) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-5">
              
              {/* Header with Location pill */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-forest-800 uppercase bg-forest-50 px-2.5 py-1 rounded-full border border-forest-100">
                    🟢 Elizabeth, NJ Hub
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1.5">
                    Operations & Dispatch
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-forest-50 border border-forest-100 text-forest-700 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Building2 className="w-4 h-4" />
                </div>
              </div>

              {/* Contact rows with compact, crisp spacing */}
              <ul className="space-y-3.5 text-xs sm:text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-forest-100/80 text-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-forest-700" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Warehouse Facility</p>
                    <p className="text-slate-900 font-semibold mt-0.5 text-xs sm:text-sm">{COMPANY_INFO.address}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] text-slate-500">{COMPANY_INFO.servingArea}</span>
                      <span className="text-slate-300">•</span>
                      <a 
                        href="https://maps.google.com/?q=420+Division+Street,+Elizabeth,+NJ+07201" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-[11px] font-bold text-forest-700 hover:text-forest-900 transition-colors"
                      >
                        <span>Open Maps</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-forest-100/80 text-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-forest-700" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone / Dispatch</p>
                    <a 
                      href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} 
                      className="text-slate-900 font-bold hover:text-forest-700 transition-colors text-sm sm:text-base block mt-0.5 whitespace-nowrap"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Direct line to routing & scheduling</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-forest-100/80 text-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-forest-700" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Direct Inquiries</p>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`} 
                      className="text-slate-900 font-bold hover:text-forest-700 transition-colors text-xs sm:text-sm break-all block mt-0.5"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Contact: Carla (Logistics & Partnerships)</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-forest-100/80 text-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-forest-700" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Receiving & Office Hours</p>
                    <p className="text-slate-900 font-medium text-[11px] sm:text-xs mt-0.5 leading-relaxed">{COMPANY_INFO.operatingHours}</p>
                  </div>
                </li>
              </ul>

              {/* Integrated Priority Rapid Bin Servicing Hotline Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-forest-950 to-slate-900 text-white shadow-md relative overflow-hidden border border-slate-800 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-bold text-emerald-300 tracking-wide uppercase">
                      Need Rapid Bin Maintenance?
                    </span>
                  </div>
                  <span className="text-[9px] font-bold bg-white/10 text-emerald-200 px-2 py-0.5 rounded-full border border-white/10 whitespace-nowrap">
                    Active Hosts
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Active property hosts needing urgent bin emptying or perimeter sweep can connect with dispatch directly:
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-900" />
                  <span>Call Dispatch Hotline: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right: Contact Form (Snug, Proportionate, Zero Empty Space) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-soft">
              
              {submitted ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5 max-w-md mx-auto">
                    <h3 className="text-2xl font-extrabold text-slate-900">Message Transmitted!</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Thank you for reaching out. Carla and our Elizabeth, NJ operations team have received your details and will follow up shortly.
                    </p>
                  </div>

                  {/* Reassuring Next Steps */}
                  <div className="w-full max-w-md mx-auto p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-2 text-xs text-slate-700">
                    <p className="font-bold text-slate-900 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>What Happens Next</span>
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-[10px]">1</span>
                      <span className="text-[11px]">Our dispatch desk reviews your inquiry within 1 business day.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-[10px]">2</span>
                      <span className="text-[11px]">Carla will follow up via phone <strong>(908) 787-8020</strong> or email.</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', subject: 'general', message: '' });
                    }}
                    className="btn-primary text-xs py-2 px-5 mx-auto mt-2"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Send an Online Inquiry</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Fill out the form below and our Elizabeth, NJ team will get right back to you.
                    </p>
                  </div>

                  {/* Error banner if submission failed */}
                  {errorMessage && (
                    <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-xs text-rose-800 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">Submission Error:</span>
                        <span>{errorMessage}</span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(908) 555-0100"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Inquiry Topic *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-forest-500 bg-white"
                      >
                        <option value="general">General Question</option>
                        <option value="drive">School / Charity Clothing Drive</option>
                        <option value="bin">Commercial Bin Placement</option>
                        <option value="export">International Export / Bales Inquiry</option>
                        <option value="service">Existing Bin Servicing Request</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know how we can help you..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-xs sm:text-sm py-2.5 disabled:opacity-75 disabled:cursor-not-allowed shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-emerald-200" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-emerald-200" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>

                  {/* Reassurance Footer Strip: Eliminates empty space & adds human trust */}
                  <div className="pt-3 flex flex-wrap items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 gap-2">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Privacy Protected</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-forest-700" />
                      <span>1 Business Day Response</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-forest-700" />
                      <span>Direct Dispatch Team</span>
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
