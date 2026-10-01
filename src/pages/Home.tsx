import React, { useState } from 'react';
import type { NavPage } from '../types';
import { COMPANY_INFO, HOW_IT_WORKS_STEPS, TESTIMONIALS, FAQS } from '../data/content';
import { AcceptedItemsGuide } from '../components/AcceptedItemsGuide';
import clothingDriveImg from '../assets/clothing-drive.jpg';
import outdoorBinImg from '../assets/outdoor-bin.jpg';
import warehouseImg from '../assets/textile-warehouse.jpg';
import { 
  Recycle, 
  Calendar, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Truck, 
  Globe2 
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: NavPage) => void;
  onOpenDriveModal: () => void;
  onOpenBinModal: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onOpenDriveModal,
  onOpenBinModal,
}) => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* FULL-WIDTH HERO SECTION RIGHT BELOW NAVBAR */}
      <section className="relative w-full text-white min-h-[620px] lg:min-h-[700px] flex items-center overflow-hidden bg-slate-950">
        {/* Full-width vivid background image without desaturation or dull blend */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center -z-0 opacity-80 scale-100 transition-transform duration-700"
          style={{ backgroundImage: `url(${warehouseImg})`, backgroundPosition: 'center 40%' }}
        />
        
        {/* High-end cinematic gradient: darker on left for text legibility, clear and visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30 -z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/30 -z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Main Hero Copy */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-300 bg-black/60 border border-emerald-500/40 backdrop-blur-md shadow-sm">
                <Recycle className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
                <span>Secondhand Clothing Collection & Export • Elizabeth, NJ</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-md">
                Turning Used Clothing Into <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300">
                  Community Value & Global Impact
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed drop-shadow-xs">
                We empower NJ & NY schools with cash fundraisers, place zero-cost donation bins for local properties, and responsibly export wearable textiles worldwide.
              </p>

              {/* Dual Primary Call-to-Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenDriveModal}
                  className="btn-primary text-sm sm:text-base py-4 px-7 shadow-lift bg-emerald-600 hover:bg-emerald-500 text-white"
                >
                  <Calendar className="w-5 h-5 text-emerald-100" />
                  <span>Book a Clothing Drive</span>
                </button>

                <button
                  onClick={onOpenBinModal}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white bg-black/40 hover:bg-black/60 active:bg-black/70 border border-white/30 backdrop-blur-md transition-all duration-200 text-sm sm:text-base shadow-sm"
                >
                  <Building2 className="w-5 h-5 text-cyan-300" />
                  <span>Host a Free Bin</span>
                </button>
              </div>

              {/* Trust assurances */}
              <div className="pt-4 border-t border-white/20 grid grid-cols-3 gap-4 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Zero Cost to Hosts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Bi-Weekly Emptying</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>NJ/NY Route Pickup</span>
                </div>
              </div>
            </div>

            {/* Right: Glassmorphic Bin Spotlight */}
            <div className="lg:col-span-4">
              <div className="bg-slate-950/70 border border-white/20 rounded-3xl p-5 shadow-2xl backdrop-blur-md space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
                  <img
                    src={outdoorBinImg}
                    alt="Outdoor green donation bin"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md">
                    Free Placement
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Commercial Partner Bins</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Heavy-gauge steel outdoor drop boxes serviced bi-weekly with zero cost to shopping centers & property owners.
                  </p>
                </div>
                <button
                  onClick={onOpenBinModal}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
                >
                  Request Bin for Your Property
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {COMPANY_INFO.stats.map((stat, i) => (
              <div key={i} className={`pt-6 lg:pt-0 ${i !== 0 ? 'lg:pl-8' : ''}`}>
                <p className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">
                  {stat.value}
                </p>
                <h4 className="text-base font-bold text-white mt-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUAL PATHWAYS SECTION: WHO WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-forest-800 bg-forest-50 border border-forest-200">
            <Sparkles className="w-3.5 h-3.5 text-forest-600" />
            <span>Tailored Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Two Simple Ways to Partner With Us
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Whether you are raising funds for students or seeking a clean, weather-tight amenity for your commercial real estate, Wearables Exchange handles all the heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card A: Clothing Drives for Schools & Groups */}
          <div className="card-hover p-8 sm:p-10 flex flex-col justify-between border-2 border-emerald-100 rounded-3xl bg-gradient-to-b from-white to-emerald-50/20">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center shadow-xs">
                <Calendar className="w-7 h-7 text-forest-700" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider text-forest-700">
                  Fundraising Program
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  School & Non-Profit Clothing Drives
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  The easiest fundraiser your organization will ever run. Collect bagged secondhand clothing, shoes, and linens from parents and community members, and get paid a competitive rate per pound.
                </p>
              </div>

              <ul className="space-y-3 text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>No products to sell, no upfront expenses, zero financial risk</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>We supply customized printable flyers & donor checklists</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Doorstep truck pickup with scale tickets and fast payout checks</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={onOpenDriveModal}
                className="btn-primary text-sm px-6 py-3"
              >
                <span>Book Your Drive Dates</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('clothing-drive')}
                className="text-xs font-bold text-slate-600 hover:text-forest-700"
              >
                Learn Details →
              </button>
            </div>
          </div>

          {/* Card B: Bins for Property Managers */}
          <div className="card-hover p-8 sm:p-10 flex flex-col justify-between border-2 border-ocean-100 rounded-3xl bg-gradient-to-b from-white to-ocean-50/20">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-ocean-100 text-ocean-800 flex items-center justify-center shadow-xs">
                <Building2 className="w-7 h-7 text-ocean-700" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider text-ocean-700">
                  Commercial Real Estate Amenity
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Host an Outdoor Donation Bin
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Attract conscientious local foot traffic to your shopping plaza, parking lot, or residential community while demonstrating clear environmental stewardship.
                </p>
              </div>

              <ul className="space-y-3 text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                  <span>100% Free delivery, scheduled maintenance, and graffiti removal</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                  <span>Bi-weekly emptying routine + 24-hr cleanliness guarantee</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-ocean-600 mt-0.5 flex-shrink-0" />
                  <span>$2,000,000 comprehensive liability insurance naming your site</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={onOpenBinModal}
                className="btn-secondary text-sm px-6 py-3"
              >
                <span>Request Free Bin Placement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('host-bin')}
                className="text-xs font-bold text-slate-600 hover:text-ocean-700"
              >
                Bin Specs →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS / GLOBAL EXPORT LIFECYCLE */}
      <section className="bg-slate-100/70 py-16 sm:py-24 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header Centered at Top */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-forest-800 bg-forest-100 border border-forest-200">
              <Globe2 className="w-3.5 h-3.5 text-forest-600" />
              <span>Circular Economy Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Where Does Your Donated Clothing Go?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Unlike organizations that incinerate unsold apparel, Wearables Exchange Inc. operates a direct export network, extending the lifespan of textiles across 24+ countries.
            </p>
          </div>

          {/* Balanced Side-by-Side Grid with Matching Heights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Visual Left: Extended Height Matching Image */}
            <div className="lg:col-span-5 h-full flex flex-col">
              <div className="relative rounded-3xl overflow-hidden shadow-card border border-slate-200/90 h-full min-h-[380px] lg:min-h-[420px] flex-grow group">
                <img
                  src={clothingDriveImg}
                  alt="Community clothing drive volunteers sorting donated apparel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right: 4-Step Cards (2x2 Balanced Grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div 
                  key={step.step} 
                  className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-2xl font-black text-forest-700/60 font-mono">
                        {step.step}
                      </span>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 tracking-wider">
                        {step.badge}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ACCEPTED ITEMS INTERACTIVE GUIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AcceptedItemsGuide />
      </section>

      {/* COMMUNITY TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <p className="text-xs font-extrabold uppercase tracking-wider text-forest-700">
            Trusted in New Jersey Communities
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Real Stories From Real Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-soft flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {'★'.repeat(5)}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <p className="font-bold text-slate-900 text-sm">{test.author}</p>
                <p className="text-xs text-forest-700 font-semibold">{test.role}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{test.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <p className="text-xs font-extrabold uppercase tracking-wider text-forest-700">
            Clear Answers
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Have questions about hosting a bin or scheduling a clothing drive? Here are the facts.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-forest-700 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-forest-700 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL BOTTOM CALL-TO-ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-forest-900 via-forest-800 to-ocean-900 text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Ready to collaborate?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Let's Keep Usable Clothes Out of Landfills Together.
            </h2>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Call our Elizabeth, NJ operations office at <span className="font-bold text-white underline">{COMPANY_INFO.phoneDisplay}</span> or click below to schedule your community clothing drive or request a free outdoor bin today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
            <button
              onClick={onOpenDriveModal}
              className="px-6 py-3.5 rounded-xl font-bold text-slate-900 bg-white hover:bg-emerald-50 transition-all text-sm shadow-md"
            >
              Book Clothing Drive
            </button>
            <button
              onClick={onOpenBinModal}
              className="px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all text-sm border border-emerald-500 shadow-md"
            >
              Request Free Bin
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
