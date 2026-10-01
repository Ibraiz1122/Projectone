import React, { useState } from 'react';
import type { ClothingDriveForm } from '../types';
import { sendDriveBookingEmail } from '../services/emailService';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  DollarSign, 
  Truck,
  Loader2,
  AlertCircle
} from 'lucide-react';

interface DriveBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DriveBookingModal: React.FC<DriveBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<ClothingDriveForm>({
    organizationName: '',
    organizationType: 'school',
    coordinatorName: '',
    email: '',
    phone: '',
    locationCity: '',
    locationState: 'NJ',
    targetDate: '',
    estimatedBags: '100-250',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const result = await sendDriveBookingEmail(formData);
    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setErrorMessage(result.message || 'Transmission failed. Please call (908) 787-8020 directly.');
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8">
        
        {/* Header banner */}
        <div className="bg-gradient-to-r from-forest-800 to-forest-700 text-white p-6 sm:p-8 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-emerald-200 backdrop-blur-xs mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>Zero-Cost Community Fundraiser</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Schedule a Clothing Drive
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1.5 max-w-lg leading-relaxed">
            Turn used clothing into direct cash payouts for your school, club, or church. We provide collection bags, marketing flyers, and door-to-door truck pickup in NJ/NY.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">
                Drive Request Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.coordinatorName || 'Coordinator'}</span>. Carla and our Elizabeth, NJ operations team will contact you at <span className="font-semibold text-slate-900">{formData.phone || formData.email}</span> within 24 hours to finalize dates and mail your drive toolkit.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-forest-50 border border-emerald-200/80 text-xs text-forest-900 flex items-center justify-center gap-3">
              <Truck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>We provide free bags, promotional flyers, and scheduled truck pickup!</span>
            </div>

            <button
              onClick={handleResetAndClose}
              className="btn-primary w-full max-w-xs mx-auto text-sm"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Quick value highlights */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-forest-50/70 border border-emerald-100 flex items-center gap-2.5">
                <DollarSign className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span className="font-semibold text-forest-900">Guaranteed Cash per Pound</span>
              </div>
              <div className="p-3 rounded-xl bg-ocean-50/70 border border-ocean-100 flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-ocean-700 flex-shrink-0" />
                <span className="font-semibold text-ocean-900">Free Logistics & Pickup</span>
              </div>
            </div>

            {/* Organization info */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                1. Organization Details
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Organization / School Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    placeholder="e.g. Elmora School No. 12 PTO"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Organization Type *
                  </label>
                  <select
                    value={formData.organizationType}
                    onChange={(e) => setFormData({ ...formData, organizationType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500 bg-white"
                  >
                    <option value="school">School / PTO / PTA</option>
                    <option value="church">Church / Religious Organization</option>
                    <option value="scout">Scout Troop / Youth Group</option>
                    <option value="sports_club">Sports Team / Booster Club</option>
                    <option value="nonprofit">Charity / Non-Profit</option>
                    <option value="other">Other Community Group</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Coordinator Contact */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                2. Coordinator Contact
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Coordinator Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.coordinatorName}
                    onChange={(e) => setFormData({ ...formData, coordinatorName: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(908) 555-0123"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="coordinator@school.org"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>
              </div>
            </div>

            {/* Logistics & Planning */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                3. Proposed Drive Timing & Location
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    City, State *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.locationCity}
                    onChange={(e) => setFormData({ ...formData, locationCity: e.target.value })}
                    placeholder="e.g. Elizabeth, NJ"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Preferred Drive Date / Window *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.targetDate}
                    onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Estimated Bags
                  </label>
                  <select
                    value={formData.estimatedBags}
                    onChange={(e) => setFormData({ ...formData, estimatedBags: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500 bg-white"
                  >
                    <option value="50-100">50 - 100 Bags (~1,000 lbs)</option>
                    <option value="100-250">100 - 250 Bags (~2,500 lbs)</option>
                    <option value="250-500">250 - 500 Bags (~5,000 lbs)</option>
                    <option value="500+">500+ Bags (Large Campus Drive)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Special Notes or Pickup Instructions
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Loading dock access behind gymnasium, preferred morning pickup..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                ></textarea>
              </div>
            </div>

            {/* Error banner */}
            {errorMessage && (
              <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-xs text-rose-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-sm px-6 py-2.5 disabled:opacity-75 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-emerald-200" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <span>Submit Drive Request</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
