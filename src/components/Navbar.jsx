import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SfmLogo from './SfmLogo';
import { usePublicData } from '../context/PublicDataContext';
import { 
  FiPhoneCall, 
  FiMail, 
  FiMenu, 
  FiX, 
  FiChevronRight 
} from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { socials, homepage } = usePublicData();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'R&M Services', path: '/rm-services' },
    { name: 'IFM Services', path: '/ifm-services', badge: 'AI' },
    { name: 'Service Details', path: '/service-details' },
    { name: 'Industries', path: '/industries' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-slate-200">
      {/* Top Notification Bar - Solid & High Contrast */}
      {(homepage?.milestone3 || homepage?.milestone2 || socials?.phone || socials?.email) && (
        <div className="bg-[#0b1d3a] text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-4">
              {homepage?.milestone3 && (
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  {homepage.milestone3}
                </span>
              )}
              {homepage?.milestone3 && homepage?.milestone2 && (
                <span className="hidden md:inline-block text-slate-600">|</span>
              )}
              {homepage?.milestone2 && (
                <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
                  {homepage.milestone2}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs">
              {socials?.phone && (
                <a href={`tel:${socials.phone}`} className="text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <FiPhoneCall className="text-[#c1121f]" /> {socials.phone}
                </a>
              )}
              {socials?.phone && socials?.email && (
                <span className="text-slate-600">•</span>
              )}
              {socials?.email && (
                <a href={`mailto:${socials.email}`} className="text-slate-200 hover:text-white transition-colors hidden sm:flex items-center gap-1.5 font-medium">
                  <FiMail className="text-sky-400" /> {socials.email}
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation - 100% Solid White Background */}
      <header className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Exact Presentation Brand Logo */}
            <SfmLogo size="md" showTagline={true} lightMode={true} />

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3 py-2 rounded-lg text-xs font-bold transition-all duration-150 flex items-center gap-1 ${
                      active
                        ? 'text-[#0b1d3a] bg-slate-100 font-extrabold'
                        : 'text-slate-600 hover:text-[#0b1d3a] hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                    {link.badge && (
                      <span className="px-1.5 py-0.2 text-[9px] font-extrabold uppercase rounded bg-sky-100 text-sky-800 border border-sky-200">
                        {link.badge}
                      </span>
                    )}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#c1121f] rounded-full"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden xl:flex items-center gap-3">
              <Link
                to="/contact"
                className="px-4 py-2.5 rounded-xl bg-[#c1121f] hover:bg-[#a50f1a] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 transform active:scale-95 shrink-0"
              >
                <span>Book Facility Audit</span>
                <FiChevronRight className="text-xs" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-1 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive(link.path)
                    ? 'bg-red-50 text-[#c1121f] border-l-4 border-[#c1121f]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.name}
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-sky-100 text-sky-800">
                      {link.badge}
                    </span>
                  )}
                </span>
                <FiChevronRight className="text-xs opacity-50" />
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 px-4 bg-[#c1121f] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md"
              >
                <span>Book Facility Audit</span>
                <FiChevronRight />
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
