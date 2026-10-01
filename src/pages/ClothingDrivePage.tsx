import React, { useState } from 'react';
import clothingDriveImg from '../assets/clothing-drive.jpg';
import { COMPANY_INFO } from '../data/content';
import { AcceptedItemsGuide } from '../components/AcceptedItemsGuide';
import { 
  Calendar, 
  Sparkles, 
  Phone 
} from 'lucide-react';

interface ClothingDrivePageProps {
  onOpenDriveModal: () => void;
}

export const ClothingDrivePage: React.FC<ClothingDrivePageProps> = ({ onOpenDriveModal }) => {
  // Interactive Drive Payout Estimator
  const [bagCount, setBagCount] = useState<number>(200);

  // Typical average weight is ~22 lbs per full tall kitchen/black contractor bag
  const estimatedPounds = bagCount * 22;
  // Estimated payout rate ~$0.20 per pound for schools/non-profits
  const estimatedPayout = Math.round(estimatedPounds * 0.20);

  return (
    <div className="space-y-20 pb-20 pt-6">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          {/* Background image with multi-stop dark gradient */}
          <div 
            className="absolute inset-0 bg-cover bg-center -z-0 opacity-35 mix-blend-luminosity scale-105"
            style={{ backgroundImage: `url(${clothingDriveImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-900/90 to-slate-950/80 -z-0" />

          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-emerald-300 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero Risk • No Selling • Guaranteed Cash Payout</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Turn Donated Clothes Into Real Cash For Your School or Non-Profit
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl leading-relaxed">
              Hosting a clothing drive with Wearables Exchange Inc. is the easiest fundraiser in New Jersey. Families clear their closets of wearable apparel, our trucks handle pickup, and your organization receives payment by the pound.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenDriveModal}
                className="btn-primary text-sm py-3.5 px-6 shadow-md bg-emerald-600 hover:bg-emerald-500"
              >
                <Calendar className="w-4 h-4 text-emerald-200" />
                <span>Schedule Your Drive Dates</span>
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xs transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Us: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PAYOUT ESTIMATOR */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-soft">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-700">
              Interactive Estimator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How Much Can Your Organization Earn?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Drag the slider to estimate based on how many 13-30 gallon bags of clothes your families donate.
            </p>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            <div>
              <div className="flex justify-between items-center text-sm font-bold text-slate-800 mb-2">
                <span>Estimated Donated Bags:</span>
                <span className="text-lg font-extrabold text-forest-700 font-mono bg-forest-50 px-3 py-1 rounded-lg border border-forest-200">
                  {bagCount} Bags
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="600"
                step="10"
                value={bagCount}
                onChange={(e) => setBagCount(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-forest-700"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                <span>30 bags (Small Scout Troop)</span>
                <span>250 bags (Typical Middle School)</span>
                <span>600+ bags (Large District Drive)</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <p className="text-xs font-bold uppercase text-slate-500">Estimated Total Weight</p>
                <p className="text-3xl font-black text-slate-900 mt-1 font-mono">
                  ~{estimatedPounds.toLocaleString()} <span className="text-sm font-normal text-slate-500">lbs</span>
                </p>
                <p className="text-[11px] text-slate-500 mt-1">Diverted directly from NJ landfills</p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                <p className="text-xs font-bold uppercase text-emerald-800">Estimated Payout to Your Group</p>
                <p className="text-3xl font-black text-forest-700 mt-1 font-mono">
                  ${estimatedPayout.toLocaleString()}
                </p>
                <p className="text-[11px] text-emerald-700 mt-1">Check issued following warehouse weighing</p>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={onOpenDriveModal}
                className="btn-primary text-sm py-3 px-8 mx-auto"
              >
                Lock In Your Fundraiser Dates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STEP DRIVE PLAYBOOK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <p className="text-xs font-extrabold uppercase tracking-wider text-forest-700">
            Step-By-Step Playbook
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            How a Wearables Exchange Drive Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold">
              1
            </div>
            <h4 className="font-bold text-slate-900">Pick Your Dates</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Select a 1 to 2-week collection window. Spring and Fall closet clean-outs yield the highest community participation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold">
              2
            </div>
            <h4 className="font-bold text-slate-900">Distribute Our Flyers</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We send you customized printable PDF flyers and parent emails detailing accepted clothes, paired shoes, and packing tips.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold">
              3
            </div>
            <h4 className="font-bold text-slate-900">Truck Pickup Day</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our courteous Elizabeth NJ logistics drivers arrive at your designated loading zone or gym entrance and load all bags into our truck.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold">
              4
            </div>
            <h4 className="font-bold text-slate-900">Official Weight & Pay</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Your collection is certified on certified warehouse scales in Elizabeth, and your payout check is promptly mailed or transferred.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE ACCEPT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AcceptedItemsGuide />
      </section>

    </div>
  );
};
