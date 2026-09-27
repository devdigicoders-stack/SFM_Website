import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { 
  FiAward, 
  FiCheckCircle, 
  FiArrowRight,
  FiShield,
  FiHome,
  FiShoppingBag,
  FiBriefcase,
  FiActivity,
  FiTool
} from 'react-icons/fi';

export default function Industries() {
  const industries = [
    {
      name: 'Luxury Hospitality & Five-Star Hotels',
      icon: <FiHome className="text-2xl text-[#c1121f]" />,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      subtitle: 'Zero Guest Disruption & 5-Star Audit Readiness',
      clients: 'Taj Palace Lucknow, Novotel, Hyatt Regency, Ginger (IHCL Brand), Hilton Garden Inn, Radisson, Marriott',
      painPoints: 'Ballroom AC failure during events, noisy chiller vibrations, guest water pressure drops, unverified staff entering VIP suites.',
      solution: 'Vigyani.ai 72h predictive vibration tracking, 100% background-verified ITI technicians, 24/7 dedicated on-site engineering triage, and luxury housekeeping SOPs.',
      metrics: ['100% Critical Power Uptime', 'Zero Unplanned Outages', '100% Audit Score Adherence']
    },
    {
      name: 'Retail & Mega Shopping Malls',
      icon: <FiShoppingBag className="text-2xl text-purple-600" />,
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80',
      subtitle: 'High Footfall Hard Services & Public Safety',
      clients: 'Phoenix Palassio, Lulu Mall',
      painPoints: 'Peak weekend escalator/elevator outages, exterior glass facade spider glazing leakage, food court grease-trap clogging, central chiller trips.',
      solution: 'Automated multi-ton chiller descaling, motorized stormwater/drainage desilting, facade scaffolding maintenance, and rapid breakdown response squads.',
      metrics: ['15-20% Chiller Energy Savings', 'Zero Peak Hour Stalls', '24/7 Rapid Emergency Cover']
    },
    {
      name: 'Corporate Campuses & BPO Tech Parks',
      icon: <FiBriefcase className="text-2xl text-blue-600" />,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      subtitle: '24/7 Server Room Thermal Integrity & Power Continuity',
      clients: 'Teleperformance, Multi-tenant IT Hubs',
      painPoints: 'Server room Precision AC (PAC) failure, UPS battery impedance degradation, compliance failures during multinational client vendor audits.',
      solution: 'Precision air conditioning diagnostics, UPS load bank testing, thermal DB scans, and single consolidated monthly master invoicing.',
      metrics: ['99.99% Server Thermal Stability', '100% LOTO Compliance', '1 Consolidated Invoice']
    },
    {
      name: 'Healthcare & High-Stakes Hospitals',
      icon: <FiActivity className="text-2xl text-emerald-600" />,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      subtitle: 'Statutory Medical Gas, OT Hygiene & Life Safety',
      clients: 'Regional Hospital Networks, Specialized Diagnostic Labs',
      painPoints: 'OT laminar flow contamination, negative pressure room leaks, ICU power flickers, strict statutory healthcare inspections.',
      solution: 'Hospital-grade HEPA filter cycles, hydro-pneumatic sterile water balancing, medical gas piping audits, and 100% ESIC/PF zero liability transfer.',
      metrics: ['100% OT Sterility Uptime', 'Zero Liability Transfer', 'NABH/JCI Audit Ready']
    },
    {
      name: 'Industrial & Manufacturing Plants',
      icon: <FiTool className="text-2xl text-amber-600" />,
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80',
      subtitle: 'Heavy Electrical Transformers & Machine Uptime',
      clients: 'Regional Manufacturing Facilities, Warehouses',
      painPoints: 'HT switchgear tripping, high ambient transformer overheating, unmonitored compressor wear causing production halts.',
      solution: 'Strict LOTO (Lock-Out, Tag-Out) implementation, ACB/VCB breaker overhauls, vibration telemetry, and ISI-marked 11kV insulated gear.',
      metrics: ['Zero Accidental Breaches', '100% LOTO Enforcement', 'Extended Asset Life']
    }
  ];

  return (
    <AnimatedPage>
      {/* Hero */}
      <section className="relative py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
            Industries / Business Areas
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-sfm-navy font-display">
            Tailored FM for Key Commercial Verticals
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mt-3 leading-relaxed">
            Delivering industry-specific engineering rigor, statutory compliance, and customized SLAs across luxury hospitality, malls, tech parks, and hospitals.
          </p>
        </div>
      </section>

      {/* Industry Cards List */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-50 border border-slate-200 shadow-card hover:shadow-card-hover transition-all overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Visual Image Banner & Left Header */}
                <div className="lg:col-span-5 relative bg-slate-900 min-h-[260px] overflow-hidden flex flex-col justify-end p-8 text-white">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  <div className="relative z-10 space-y-2">
                    <div className="text-3xl p-2.5 rounded-2xl bg-white/95 text-slate-900 backdrop-blur w-fit shadow-md">
                      {ind.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white font-display">
                      {ind.name}
                    </h3>
                    <p className="text-xs font-extrabold text-red-400 uppercase tracking-wider">
                      {ind.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right Solutions & Metrics */}
                <div className="lg:col-span-7 p-8 sm:p-10 space-y-6 flex flex-col justify-between">
                  
                  <div>
                    <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest block mb-1">
                      Trusted Client Portfolio
                    </span>
                    <p className="text-xs font-bold text-slate-800 leading-relaxed">
                      {ind.clients}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white border border-slate-200">
                      <strong className="text-xs font-bold text-sfm-red uppercase tracking-wider block mb-1">
                        Industry Pain Points:
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {ind.painPoints}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200">
                      <strong className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                        The Spartans Solution:
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {ind.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                    <div className="flex flex-wrap gap-2">
                      {ind.metrics.map((m, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-200/70 text-slate-800 text-xs font-bold flex items-center gap-1.5">
                          <FiCheckCircle className="text-emerald-600" />
                          {m}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="px-5 py-2.5 rounded-xl bg-[#0b1d3a] hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-2 shrink-0"
                    >
                      <span>Explore Vertical SLA</span>
                      <FiArrowRight />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedPage>
  );
}
