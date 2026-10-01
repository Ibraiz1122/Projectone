import React from 'react';
import outdoorBinImg from '../assets/outdoor-bin.jpg';
import { COMPANY_INFO } from '../data/content';
import { 
  Building2, 
  ShieldCheck, 
  Clock, 
  Truck, 
  Phone, 
  Sparkles, 
  Check 
} from 'lucide-react';

interface HostBinPageProps {
  onOpenBinModal: () => void;
}

export const HostBinPage: React.FC<HostBinPageProps> = ({ onOpenBinModal }) => {
  return (
    <div className="space-y-20 pb-20 pt-6">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Cost • Commercial Property Amenity • Full Liability Coverage</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Host a Clean, Weather-Sealed Clothing Donation Bin on Your Property
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Add an eco-friendly convenience for shoppers, tenants, and local neighbors. Wearables Exchange Inc. installs and maintains modern, tamper-resistant green donation bins across New Jersey & New York properties with zero hassle.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenBinModal}
                  className="btn-primary text-sm py-3.5 px-6 shadow-md"
                >
                  <Building2 className="w-4 h-4 text-emerald-200" />
                  <span>Request Free Bin Placement</span>
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Direct Line: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 aspect-[4/3]">
                <img
                  src={outdoorBinImg}
                  alt="Outdoor green clothing and shoe donation bin in commercial parking lot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY PROPERTY MANAGERS CHOOSE WEARABLES EXCHANGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <p className="text-xs font-extrabold uppercase tracking-wider text-forest-700">
            Commercial Standards
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            The Cleanest Bin Program in New Jersey
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We understand property aesthetics. Our bins are strictly maintained to uphold the curb appeal of your shopping center, grocery plaza, or residential building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Clock className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Bi-Weekly Route Servicing</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our drivers follow strict bi-weekly schedules to prevent bins from reaching capacity. Drivers perform a mandatory sweep and litter check within a 15-foot radius on every visit.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-ocean-100 text-ocean-800 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-ocean-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">$2,000,000 Liability Coverage</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We carry comprehensive commercial general liability insurance. Prior to bin delivery, we issue a Certificate of Insurance (COI) naming your property or management company as additional insured.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center">
              <Truck className="w-6 h-6 text-forest-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">24-Hour Cleanliness Hotline</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              If an unauthorized bulky item is left or unexpected volume occurs over a holiday weekend, simply text or call our dispatch. Our route truck responds within 24 hours guaranteed.
            </p>
          </div>

        </div>
      </section>

      {/* BIN TECHNICAL SPECIFICATIONS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-forest-700">
                Equipment Specs
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Engineered for Safety & Curb Appeal
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our heavy-gauge steel bins feature an internal one-way chute mechanism that prevents tampering, protects donated items from rain and snow, and keeps your lot looking tidy.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 font-bold" />
                  <span><strong>Footprint:</strong> Compact 4' wide x 4' deep footprint (fits 1 standard parking space or island)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 font-bold" />
                  <span><strong>Construction:</strong> 14-gauge heavy-duty weather-sealed galvannealed steel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 font-bold" />
                  <span><strong>Security:</strong> Anti-theft interior baffle + internal hardened padlock shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 font-bold" />
                  <span><strong>Finish:</strong> Industrial forest green powder coating with clear regulatory lettering</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 text-base">Host Agreement Summary:</h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• No long-term lock-in: Can be relocated or removed upon 14 days notice.</li>
                <li>• Zero financial liability or utility connection required.</li>
                <li>• Free delivery, leveling, and placement by our trained crew.</li>
                <li>• All permits & municipal compliance handled directly by Wearables Exchange.</li>
              </ul>
              
              <button
                onClick={onOpenBinModal}
                className="btn-primary w-full text-xs py-3 mt-2"
              >
                Apply for Bin Placement
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
