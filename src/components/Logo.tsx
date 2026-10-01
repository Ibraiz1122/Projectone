import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  theme = 'light',
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  }[size];

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  }[size];

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px] sm:text-xs',
    lg: 'text-xs sm:text-sm',
  }[size];

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Precision Vector Emblem */}
      <div 
        className={`${iconDimensions} rounded-xl relative flex items-center justify-center p-2 bg-gradient-to-br from-[#166534] via-[#15803d] to-[#047857] shadow-md shadow-forest-900/15 border border-emerald-400/40 transition-transform duration-300 group-hover:scale-105 flex-shrink-0`}
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          <defs>
            <linearGradient id="wearablesGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#d1fae5" />
            </linearGradient>
            <linearGradient id="wearablesGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="100%" stopColor="#a7f3d0" />
            </linearGradient>
          </defs>

          {/* Interlocking 'W' & Circular Exchange Loop Ribbons */}
          {/* Left Ribbon Wing */}
          <path 
            d="M20 30 C 20 18, 38 18, 44 32 L 50 48 L 56 32 C 62 18, 80 18, 80 30 C 80 44, 68 54, 50 78 C 32 54, 20 44, 20 30 Z" 
            fill="none" 
            stroke="url(#wearablesGrad1)" 
            strokeWidth="9" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* Dynamic Circular Exchange Arrow Flow */}
          <path 
            d="M28 58 C 18 68, 32 86, 50 86 C 68 86, 82 68, 72 58" 
            fill="none" 
            stroke="url(#wearablesGrad2)" 
            strokeWidth="8" 
            strokeLinecap="round" 
          />

          {/* Circular return arrow head */}
          <path 
            d="M74 52 L 77 62 L 67 60 Z" 
            fill="#a7f3d0" 
          />

          {/* Center Hanger / Garment Fold Apex */}
          <path 
            d="M50 20 L 50 26 M44 26 L 56 26" 
            stroke="#ffffff" 
            strokeWidth="4" 
            strokeLinecap="round" 
          />

          {/* Sparkle Trust Dot */}
          <circle cx="50" cy="48" r="4.5" fill="#34d399" />
        </svg>
      </div>

      {/* Brand Typography (if variant is full) */}
      {variant === 'full' && (
        <div className="flex flex-col text-left">
          <div className={`${titleSizes} font-black tracking-tight leading-none flex items-center gap-1.5`}>
            <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
              Wearables
            </span>
            <span className="text-emerald-500 font-extrabold">
              Exchange
            </span>
          </div>
          <p className={`${subSizes} font-bold tracking-wider uppercase mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
            Collection & Global Export • Elizabeth, NJ
          </p>
        </div>
      )}
    </div>
  );
};
