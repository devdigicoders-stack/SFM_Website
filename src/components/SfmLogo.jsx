import React from 'react';
import { Link } from 'react-router-dom';

export default function SfmLogo({ size = 'md', showTagline = true, lightMode = true }) {
  return (
    <Link to="/" className="inline-flex items-center gap-3 group shrink-0 select-none">
      {/* Exact Shield & Spartan Helmet Logo from Presentation */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg 
          className={size === 'lg' ? 'w-16 h-16' : size === 'sm' ? 'w-9 h-9' : 'w-12 h-12'} 
          viewBox="0 0 100 110" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Shield Outline */}
          <path 
            d="M50 4L88 18V56C88 80 50 104 50 104C50 104 12 80 12 56V18L50 4Z" 
            fill="#ffffff" 
            stroke="#0b1d3a" 
            strokeWidth="6" 
            strokeLinejoin="round"
          />
          
          {/* Inner Shield Accent */}
          <path 
            d="M50 10L82 22V54C82 74 50 96 50 96C50 96 18 74 18 54V22L50 10Z" 
            fill="#0b1d3a" 
          />

          {/* Spartan Crest / Helmet in Crimson Red */}
          {/* Helmet Dome & Crest */}
          <path 
            d="M50 16C36 16 30 28 30 38C30 46 32 58 35 68C38 78 50 86 50 86C50 86 62 78 65 68C68 58 70 46 70 38C70 28 64 16 50 16Z" 
            fill="#c1121f" 
          />
          
          {/* Spartan Plume Curved Top */}
          <path 
            d="M47 16C47 16 48 24 50 26C52 24 53 16 53 16C58 17 66 22 66 30C66 32 65 35 64 36C61 30 55 26 50 26C45 26 39 30 36 36C35 35 34 32 34 30C34 22 42 17 47 16Z" 
            fill="#ffffff" 
          />

          {/* Eye Visor T-Shape Cutout */}
          <path 
            d="M38 42H62V48H53V72H47V48H38V42Z" 
            fill="#ffffff" 
          />

          {/* Helmet Cheek Guards */}
          <path 
            d="M33 50L43 50L41 68L35 64Z" 
            fill="#9b111e" 
          />
          <path 
            d="M67 50L57 50L59 68L65 64Z" 
            fill="#9b111e" 
          />

          {/* Vertical Shield Stripes at bottom */}
          <path d="M42 86V94" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <path d="M50 88V96" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <path d="M58 86V94" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Brand Typography strictly matching Presentation */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2 leading-none">
          <span className={`font-black tracking-tight font-display ${
            lightMode ? 'text-[#0b1d3a]' : 'text-white'
          } ${size === 'lg' ? 'text-4xl' : size === 'sm' ? 'text-xl' : 'text-3xl'}`}>
            SFM
          </span>
        </div>

        {/* Company Name Subtitle */}
        <span className={`font-black uppercase tracking-wider font-sans leading-tight mt-0.5 ${
          lightMode ? 'text-[#0b1d3a]' : 'text-slate-200'
        } ${size === 'lg' ? 'text-xs' : size === 'sm' ? 'text-[8px]' : 'text-[10px]'}`}>
          SPARTANS FACILITY MANAGEMENT
        </span>

        {/* Tagline in Red strictly matching Presentation */}
        {showTagline && (
          <span className={`font-bold italic text-[#c1121f] leading-none mt-0.5 font-sans ${
            size === 'lg' ? 'text-[11px]' : size === 'sm' ? 'text-[7px]' : 'text-[9px]'
          }`}>
            Seamless Facilities, Superior Service.
          </span>
        )}
      </div>
    </Link>
  );
}
