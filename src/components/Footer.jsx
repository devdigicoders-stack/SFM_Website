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
            <SfmLogo size="md" showTagline={true} lightMode={true} />
            
            {homepage?.heroDescription && (
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm pt-2">
                {homepage.heroDescription}
              </p>
            )}

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200">
                <FiCpu className="text-xs" /> Vigyani.ai Enabled
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
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
                  {socials?.facebook && (
                    <a
                      href={socials.facebook.startsWith('http') ? socials.facebook : `https://${socials.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook"
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-xs"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.593 0 9 1.583 9 4.615V8z"/></svg>
                    </a>
                  )}
                  {socials?.instagram && (
                    <a
                      href={socials.instagram.startsWith('http') ? socials.instagram : `https://${socials.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram"
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-pink-600 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:border-pink-500 transition-all shadow-xs"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                  )}
                  {socials?.whatsapp && (
                    <a
                      href={`https://wa.me/${socials.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp Direct"
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-xs"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
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
                <Link to="/industries" className="text-slate-600 hover:text-[#0b1d3a] transition-colors">
                  Industries & Verticals
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
                  <FiMail className="text-sky-700 shrink-0" />
                  <a href={`mailto:${socials.email}`} className="hover:text-[#0b1d3a] transition-colors text-xs break-all">
                    {socials.email}
                  </a>
                </div>
              )}
              {socials?.contactPerson && (
                <div className="pt-1 text-xs text-slate-500">
                  Contact: <strong className="text-slate-800">{socials.contactPerson}</strong>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="pt-8 pr-16 md:pr-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-slate-700">Seamless Facilities, Superior Service.</span>
            <span>•</span>
            <span className="text-sky-700 font-bold">SFM | SMS | VIGYANI.AI</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-medium text-slate-600">
            <span>© {new Date().getFullYear()} Spartans Facility Management</span>
            <span>•</span>
            <span>
              Crafted with <span className="text-[#c1121f]">❤️</span> by{' '}
              <a 
                href={socials?.website || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-[#0b1d3a] hover:text-[#c1121f] underline underline-offset-2 transition-colors"
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
