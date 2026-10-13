import React from 'react';
import { Link } from 'react-router-dom';
import SfmLogo from './SfmLogo';
import { usePublicData } from '../context/PublicDataContext';
import { FiPhoneCall, FiMail, FiMapPin, FiShield, FiCpu } from 'react-icons/fi';

export default function Footer() {
  const { socials, homepage } = usePublicData();

  return (
    <footer className="bg-slate-100 text-slate-700 pt-16 pb-24 sm:pb-14 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Company Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block p-3 sm:p-4 rounded-2xl  transition-all">
              <SfmLogo size="xl" />
            </div>
            
            {homepage?.heroDescription && (
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm pt-2">
                {homepage.heroDescription}
              </p>
            )}

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-sfm-red border border-red-200">
                <FiCpu className="text-xs" /> AI-Powered Tracking
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-200/80 text-sfm-navy border border-slate-300">
                <FiShield className="text-xs" /> 100% LOTO & ESIC Compliant
              </span>
            </div>

            {/* Social Media Links */}
            {(socials?.linkedin || socials?.facebook || socials?.instagram || socials?.whatsapp) && (
              <div className="pt-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Connect With Us</span>
                <div className="flex items-center gap-2">
                  {socials?.linkedin && (
                    <a
                      href={socials.linkedin.startsWith('http') ? socials.linkedin : `https://${socials.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-xs"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  )}
                   
                </div>
              </div>
            )}
          </div>

          {/* Proposal Navigation Links */}
          <div>
            <h4 className="text-[#0b1d3a] font-bold text-sm uppercase tracking-wider mb-4 font-display">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-[#0b1d3a] transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-[#0b1d3a] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/rm-services" className="text-slate-600 hover:text-[#0b1d3a] transition-colors">
                  R&M Services
                </Link>
              </li>
              <li>
                <Link to="/ifm-services" className="text-slate-600 hover:text-[#0b1d3a] transition-colors">
                  IFM Services
                </Link>
              </li>
              <li>
                <Link to="/service-details" className="text-slate-600 hover:text-[#0b1d3a] transition-colors">
                  Service Details
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-slate-600 hover:text-[#0b1d3a] transition-colors">
                  Sustainability & ESG
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-slate-600 hover:text-[#0b1d3a] transition-colors">
                  Blog & Knowledge Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* R&M Core Capabilities */}
          <div>
            <h4 className="text-[#0b1d3a] font-bold text-sm uppercase tracking-wider mb-4 font-display">
              R&M Hard Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/service-details" className="text-slate-600 hover:text-[#0b1d3a] transition-colors">
                  Electrical & Switchgears
                </Link>
              </li>
              <li>
                <Link to="/service-details" className="text-slate-600 hover:text-[#0b1d3a] transition-colors">
                  HVAC & Chiller Plants
                </Link>
              </li>
              <li>
                <Link to="/service-details" className="text-slate-600 hover:text-[#0b1d3a] transition-colors">
                  Hydro-Pneumatics (PHE)
                </Link>
              </li>
              <li>
                <Link to="/service-details" className="text-slate-600 hover:text-[#0b1d3a] transition-colors">
                  Fire & Life Safety Overhauls
                </Link>
              </li>
              <li>
                <Link to="/service-details" className="text-slate-600 hover:text-[#0b1d3a] transition-colors">
                  ELV & BMS Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/service-details" className="text-slate-600 hover:text-[#0b1d3a] transition-colors">
                  Civil Fit-outs & Glazing
                </Link>
              </li>
            </ul>
          </div>

          {/* Command Hub */}
          <div>
            <h4 className="text-[#0b1d3a] font-bold text-sm uppercase tracking-wider mb-4 font-display">
              Command Hub
            </h4>
            <div className="space-y-3 text-sm text-slate-600">
              {socials?.address && (
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-[#c1121f] mt-1 shrink-0" />
                  <span>{socials.address}</span>
                </div>
              )}
              {socials?.phone && (
                <div className="flex items-center gap-3">
                  <FiPhoneCall className="text-[#c1121f] shrink-0" />
                  <a href={`tel:${socials.phone}`} className="text-[#0b1d3a] font-bold hover:underline">
                    {socials.phone}
                  </a>
                </div>
              )}
              {socials?.email && (
                <div className="flex items-center gap-3">
                  <FiMail className="text-sfm-red shrink-0" />
                  <a href={`mailto:${socials.email}`} className="hover:text-[#0b1d3a] transition-colors text-xs break-all">
                    {socials.email}
                  </a>
                </div>
              )}
              <div className="pt-1 text-xs text-slate-500">
                Contact: <strong className="text-slate-800">{socials?.contactPerson && !socials.contactPerson.toLowerCase().includes('pranjal') ? socials.contactPerson : 'Sales Team'}</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="pt-8 pr-16 md:pr-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-slate-700">Seamless Facilities, Superior Service.</span>
            <span>•</span>
            <span className="text-sfm-red font-bold">SFM | SMS | AI TRACKING</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-medium text-slate-600">
            <span>© {new Date().getFullYear()} Spartans Facility Management</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Crafted with <FiShield className="text-[#c1121f] inline text-xs" /> by{' '}
              <a 
                href={socials?.website || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-[#0b1d3a] hover:text-[#c1121f] underline underline-offset-2 transition-colors ml-1"
              >
                Team DigiCoders
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
