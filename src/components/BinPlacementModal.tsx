import React, { useState } from 'react';
import type { BinPlacementForm } from '../types';
import { sendBinPlacementEmail } from '../services/emailService';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  Loader2,
  AlertCircle
} from 'lucide-react';

interface BinPlacementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BinPlacementModal: React.FC<BinPlacementModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<BinPlacementForm>({
    propertyName: '',
    propertyType: 'shopping_center',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'NJ',
    zipCode: '',
    parkingSpacesCount: '',
    preferredBinCount: '1',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const result = await sendBinPlacementEmail(formData);
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
        <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-forest-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-cyan-200 backdrop-blur-xs mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>100% Free Placement & Maintenance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Host a Clothing Donation Bin
          </h2>
          <p className="text-cyan-100 text-xs sm:text-sm mt-1.5 max-w-lg leading-relaxed">
            Enhance your commercial or residential property with a clean, weather-sealed green donation bin. Bi-weekly servicing, litter sweep guarantee, and full liability insurance included.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">
                Bin Placement Inquiry Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.contactPerson || 'Property Manager'}</span>. Our route logistics coordinator will review your location at <span className="font-semibold text-slate-900">{formData.address || formData.city}</span> and contact you shortly to schedule free delivery.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 flex items-center justify-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>We provide Certificate of Insurance (COI) naming your property as additional insured prior to delivery.</span>
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
            
            {/* Quick Guarantees */}
            <div className="grid grid-cols-3 gap-2.5 text-[11px] sm:text-xs">
              <div className="p-2.5 rounded-xl bg-forest-50/80 border border-emerald-100 text-forest-900 font-semibold text-center">
                ✓ Free Placement & Upkeep
              </div>
              <div className="p-2.5 rounded-xl bg-ocean-50/80 border border-ocean-100 text-ocean-900 font-semibold text-center">
                ✓ Bi-Weekly Servicing
              </div>
              <div className="p-2.5 rounded-xl bg-slate-100/80 border border-slate-200 text-slate-800 font-semibold text-center">
                ✓ $2M General Liability
              </div>
            </div>

            {/* Property information */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                1. Property & Location Information
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Property / Plaza Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.propertyName}
                    onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                    placeholder="e.g. Elizabeth Center Plaza"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Property Type *
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500 bg-white"
                  >
                    <option value="shopping_center">Commercial Shopping Center / Strip Mall</option>
                    <option value="retail_plaza">Retail Storefront / Standalone Business</option>
                    <option value="gas_station">Gas Station / Convenience Store</option>
                    <option value="residential_complex">Apartment / Residential Community</option>
                    <option value="school">School / College Campus Parking</option>
                    <option value="other">Other Commercial Lot</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="123 Broad St"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    City, State, Zip *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Elizabeth, NJ 07201"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>
              </div>
            </div>

            {/* Manager info */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                2. Contact / Property Manager
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="Marcus Sterling"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(908) 555-0199"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="mgt@property.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Number of Bins Requested
                  </label>
                  <select
                    value={formData.preferredBinCount}
                    onChange={(e) => setFormData({ ...formData, preferredBinCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500 bg-white"
                  >
                    <option value="1">1 Standard Bin (Recommended for medium lots)</option>
                    <option value="2">2 Bins (Large shopping center / high volume)</option>
                    <option value="3+">3+ Bins (Multiple locations / portfolio)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Placement Spot Notes
                  </label>
                  <input
                    type="text"
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    placeholder="e.g. Near corner lamp post, easy truck turnaround"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>
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
                  <span>Request Free Placement</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
