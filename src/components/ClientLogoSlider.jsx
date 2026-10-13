import React from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_CLIENTS } from '../data/portfolioClients.jsx';
import { 
  FiCheckCircle, 
  FiAward, 
  FiArrowRight 
} from 'react-icons/fi';

export default function ClientLogoSlider() {
  const clients = PORTFOLIO_CLIENTS;

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
          Proven Track Record Across Key Commercial & Hospitality Verticals
        </p>
      </div>

      {/* Marquee Track with ALL Client Portfolio Brands */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 gap-5 animate-marquee hover:[animation-play-state:paused] py-2">
          {clients.concat(clients).map((item, idx) => (
            <Link
              key={idx}
              to="/clients"
              className="flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-white border border-slate-200 hover:border-sfm-red/50 hover:shadow-card-hover transition-all duration-300 group min-w-[270px] shadow-sm cursor-pointer"
              title={`${item.name} - Click to view portfolio details`}
            >
              <div className="text-2xl p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 group-hover:bg-red-50 transition-all shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="font-bold text-slate-900 text-sm font-display tracking-tight group-hover:text-sfm-red transition-colors truncate">
                    {item.name}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium truncate">
                  <FiCheckCircle className="text-sfm-red text-[11px] shrink-0" />
                  <span className="truncate">{item.highlight}</span>
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 font-semibold">
                  {item.category} • {item.location}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* View Portfolio Button Below Slider */}
      <div className="mt-8 text-center">
        <Link
          to="/clients"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-sfm-red text-slate-800 hover:text-sfm-red font-bold text-xs shadow-xs hover:shadow-sm transition-all"
        >
          <span>Explore All {PORTFOLIO_CLIENTS.length} Enterprise Client Engagements</span>
          <FiArrowRight className="text-xs" />
        </Link>
      </div>
    </section>
  );
}
