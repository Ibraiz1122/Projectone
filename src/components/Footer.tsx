import React from 'react';
import type { NavPage } from '../types';
import { COMPANY_INFO } from '../data/content';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Globe2, 
  ArrowUpRight 
} from 'lucide-react';

import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenDriveModal: () => void;
  onOpenBinModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDriveModal,
  onOpenBinModal,
}) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand info column */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={() => handleNav('home')} className="focus:outline-none">
              <Logo variant="full" size="md" theme="dark" />
            </button>

            <p className="text-sm text-slate-400 leading-relaxed">
              Based in Elizabeth, New Jersey, we bridge communities with the global circular economy. We provide turnkey clothing drive fundraisers for schools and non-profits, and maintain pristine, weather-sealed donation bins for commercial property managers.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>Fully Licensed, Insured & Bonded NJ Collector</span>
              </div>
              <div className="flex items-center gap-2 text-ocean-400">
                <Globe2 className="w-4 h-4 flex-shrink-0" />
                <span>Direct International Export & Material Re-use</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-emerald-400 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('clothing-drive')} className="hover:text-emerald-400 transition-colors">
                  School & Club Drives
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('host-bin')} className="hover:text-emerald-400 transition-colors">
                  Host a Donation Bin
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-emerald-400 transition-colors">
                  Our Mission & Warehouse
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-emerald-400 transition-colors">
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions / Programs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Community Programs</h4>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                <p className="text-xs font-bold text-emerald-300 uppercase tracking-wide">For Schools & Groups</p>
                <p className="text-xs text-slate-300 mt-1">Raise hundreds for your organization per collection drive with zero up-front cost.</p>
                <button 
                  onClick={onOpenDriveModal}
                  className="mt-2 text-xs font-semibold text-white inline-flex items-center gap-1 hover:text-emerald-400"
                >
                  <span>Book Drive Dates</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                <p className="text-xs font-bold text-ocean-300 uppercase tracking-wide">For Property Managers</p>
                <p className="text-xs text-slate-300 mt-1">Complimentary green donation bins with bi-weekly emptying and 24-hr clean response.</p>
                <button 
                  onClick={onOpenBinModal}
                  className="mt-2 text-xs font-semibold text-white inline-flex items-center gap-1 hover:text-ocean-400"
                >
                  <span>Request Bin Placement</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Elizabeth NJ Hub Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Elizabeth, NJ Operations</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-xs leading-relaxed">
                  {COMPANY_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} 
                  className="text-slate-200 hover:text-emerald-400 font-semibold text-xs"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="text-slate-300 hover:text-emerald-400 text-xs truncate"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-xs">
                  {COMPANY_INFO.operatingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Wearables Exchange Inc. All rights reserved. Operating in compliance with NJ textile recycling regulations.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Export Standards</span>
            <span className="hover:text-slate-400 cursor-pointer">Site Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
