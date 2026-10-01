import React, { useState } from 'react';
import type { NavPage } from '../types';
import { COMPANY_INFO } from '../data/content';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Calendar, 
  Building2,
  ShieldCheck
} from 'lucide-react';

import { Logo } from './Logo';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenDriveModal: () => void;
  onOpenBinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenDriveModal,
  onOpenBinModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'clothing-drive', label: 'Clothing Drives' },
    { id: 'host-bin', label: 'Host a Bin' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top utility contact & trust announcement bar */}
      <div className="bg-[#0b2416] text-white py-2 px-4 border-b border-forest-950/80 text-xs shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Friendly Operational Status & Regional Footprint */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 font-semibold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Elizabeth Dispatch: Mon–Fri 8AM–5:30PM</span>
            </div>

            {/* Geographic Coverage */}
            <div className="hidden md:flex items-center gap-1.5 text-slate-300 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>Division St, Elizabeth NJ • Serving NJ & NY Metro</span>
            </div>
          </div>

          {/* Right: Direct Human Contact & Licensed Trust Badge */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Direct Phone Pill Button */}
            <div className="flex items-center gap-1.5">
              <span className="hidden lg:inline text-slate-300 text-[11px]">Direct Route Line:</span>
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} 
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 active:bg-emerald-500/40 border border-emerald-400/40 text-emerald-200 hover:text-white transition-all font-bold text-xs shadow-xs"
              >
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Email link */}
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs"
            >
              <Mail className="w-3 h-3 text-emerald-400" />
              <span className="truncate max-w-[150px] lg:max-w-none">{COMPANY_INFO.email}</span>
            </a>

            {/* NJ Licensed Collector Badge */}
            <div className="hidden xl:inline-flex items-center gap-1 text-[11px] text-emerald-300/90 font-medium border-l border-emerald-900/60 pl-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>NJ Licensed Collector</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="focus:outline-none"
          >
            <Logo variant="full" size="md" theme="light" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  currentPage === link.id
                    ? 'text-forest-800 bg-forest-50/80 shadow-xs'
                    : 'text-slate-600 hover:text-forest-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenBinModal}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold text-ocean-900 bg-ocean-50 hover:bg-ocean-100 border border-ocean-200/80 transition-all shadow-xs"
            >
              <Building2 className="w-3.5 h-3.5 text-ocean-700" />
              <span>Host a Bin</span>
            </button>
            <button
              onClick={onOpenDriveModal}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-forest-700 hover:bg-forest-800 shadow-sm hover:shadow transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-200" />
              <span>Book a Drive</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-forest-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-3 rounded-lg text-base font-semibold ${
                  currentPage === link.id
                    ? 'text-forest-800 bg-forest-50 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDriveModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-forest-700 hover:bg-forest-800 text-sm shadow-sm"
            >
              <Calendar className="w-4 h-4 text-emerald-200" />
              <span>Book a Clothing Drive</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBinModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-ocean-900 bg-ocean-50 border border-ocean-200 text-sm"
            >
              <Building2 className="w-4 h-4 text-ocean-700" />
              <span>Host a Free Donation Bin</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
