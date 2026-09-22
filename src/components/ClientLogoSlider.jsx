import React from 'react';
import { FiCheckCircle, FiAward } from 'react-icons/fi';

export default function ClientLogoSlider() {
  const clients = [
    { name: 'Taj Palace Lucknow', category: 'Luxury Flagship', highlight: 'Lead Technical FM Partner', icon: '🏛️' },
    { name: 'Novotel', category: 'Hospitality', highlight: 'E&M Uptime', icon: '🏨' },
    { name: 'Hyatt Regency', category: 'Luxury Hotel', highlight: 'HVAC & Power', icon: '✨' },
    { name: 'Ginger (An IHCL Brand)', category: 'Hospitality Chain', highlight: 'Comprehensive Cover', icon: '🌿' },
    { name: 'Hilton Garden Inn', category: 'Hospitality', highlight: 'Electrical & Life Safety', icon: '⭐' },
    { name: 'Phoenix Palassio', category: 'Mega Retail Mall', highlight: 'Hard Services & Fit-outs', icon: '🛍️' },
    { name: 'Teleperformance', category: 'Global BPO Hub', highlight: '24/7 Critical Uptime', icon: '🏢' },
    { name: 'Radisson', category: 'Hospitality', highlight: 'Planned Preventive', icon: '🌐' },
    { name: 'Marriott', category: 'Luxury Brand', highlight: 'Multi-system audits', icon: '💎' },
    { name: 'Lulu Mall', category: 'Commercial Retail', highlight: 'Central Command Support', icon: '🏬' },
  ];

  return (
    <section className="py-14 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-sfm-red text-xs font-bold tracking-wider uppercase mb-3">
          <FiAward className="text-sm" /> Proven Track Record
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-sfm-navy font-display">
          Our Valued Client Portfolio
        </h3>
        <p className="text-xs sm:text-sm uppercase font-bold tracking-widest text-slate-500 mt-1">
          Proven Track Record Across Key Commercial Verticals
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 gap-5 animate-marquee py-2">
          {clients.concat(clients).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-white border border-slate-200 hover:border-sfm-red/50 hover:shadow-card-hover transition-all duration-300 group min-w-[250px] shadow-sm"
            >
              <div className="text-2xl p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 text-sm font-display tracking-tight group-hover:text-sfm-red transition-colors">
                  {item.name}
                </span>
                <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                  <FiCheckCircle className="text-emerald-600 text-[10px]" />
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
