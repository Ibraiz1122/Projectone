import React from 'react';
import warehouseImg from '../assets/textile-warehouse.jpg';
import { COMPANY_INFO } from '../data/content';
import { 
  MapPin, 
  Globe2, 
  HeartHandshake, 
  ShieldCheck, 
  Leaf, 
  Users, 
  Phone, 
  Mail 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-20 pb-20 pt-6">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-forest-900 text-white p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-emerald-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Proudly Based in Elizabeth, New Jersey</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Bridging Local Communities With The Global Textile Economy
            </h1>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              At Wearables Exchange Inc. (an operating affiliate of Global Exchange Inc.), we believe no usable shirt, pair of jeans, or pair of sneakers belongs in a trash incinerator.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & WAREHOUSE OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-700">
              Our Elizabeth, NJ Roots
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              A Hands-On Collection & Export Hub
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Headquartered in Elizabeth, NJ, Wearables Exchange Inc. was established to solve two pressing challenges: giving local non-profits an easy, dignified fundraising mechanism and diverting hundreds of tons of reusable textiles away from overburdened regional landfills.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every bag collected from our partner bins and school drives is transported directly to our Elizabeth sorting warehouse. Here, our trained grading team meticulously inspects and sorts items by fabric, seasonality, and quality grade before they are compressed into protective commercial export bales.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>NJ State Licensed Collector</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-ocean-600 flex-shrink-0" />
                <span>Exporting to 24+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Direct School PTO Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-forest-600 flex-shrink-0" />
                <span>100% Zero-Landfill Goal</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src={warehouseImg}
                alt="Elizabeth NJ textile recycling warehouse facility"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center">
              Our Elizabeth distribution warehouse: sorted apparel staged for export bales.
            </p>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <p className="text-xs font-extrabold uppercase tracking-wider text-forest-700">
            What Drives Us
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Commitments to You & The Planet
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center">
              <Leaf className="w-6 h-6 text-forest-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Environmental Integrity</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We maximize the lifecycle of every garment. Wearable clothes are repurposed; items with heavy wear are processed into industrial wiping cloths and insulation fibers.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-ocean-100 text-ocean-800 flex items-center justify-center">
              <Users className="w-6 h-6 text-ocean-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Community Respect</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We take pride in our host properties. Our collection bins are kept immaculate, emptied regularly, and promptly attended to, honoring the trust of business owners and schools.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Globe2 className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Global Micro-Economy Support</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In international receiving markets, secondhand textiles sustain small family merchants, tailors, and marketplace vendors, providing affordable high-grade clothing.
            </p>
          </div>
        </div>
      </section>

      {/* OPERATIONS & LEADERSHIP CONTACT CARD */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-forest-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-emerald-900/60 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Subtle ambient light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Leadership & Office Information */}
          <div className="relative z-10 space-y-3 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-emerald-300 border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Leadership Contact • Elizabeth, NJ</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Have Questions for Our Leadership?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Reach Carla and our logistics coordinators directly at our Elizabeth operations office for partnership questions, school clothing drives, or bulk export inquiries.
            </p>
          </div>

          {/* Right: Uncompressed, Elegant Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap flex-shrink-0"
            >
              <Phone className="w-4 h-4 text-emerald-100 flex-shrink-0" />
              <span className="whitespace-nowrap font-mono tracking-tight font-bold">{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/15 transition-all duration-200 whitespace-nowrap flex-shrink-0"
            >
              <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="whitespace-nowrap">{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
