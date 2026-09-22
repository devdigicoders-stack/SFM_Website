import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { 
  FiAward, 
  FiCheckCircle, 
  FiArrowRight,
  FiShield
} from 'react-icons/fi';

export default function Industries() {
  const industries = [
    {
      name: 'Luxury Hospitality & Five-Star Hotels',
      icon: '🏨',
      subtitle: 'Zero Guest Disruption & 5-Star Audit Readiness',
      clients: 'Taj Palace Lucknow, Novotel, Hyatt Regency, Ginger (IHCL Brand), Hilton Garden Inn, Radisson, Marriott',
      painPoints: 'Ballroom AC failure during events, noisy chiller vibrations, guest water pressure drops, unverified staff entering VIP suites.',
      solution: 'Vigyani.ai 72h predictive vibration tracking, 100% background-verified ITI technicians, 24/7 dedicated on-site engineering triage, and luxury housekeeping SOPs.',
      metrics: ['100% Critical Power Uptime', 'Zero Unplanned Outages', '100% Audit Score Adherence']
    },
    {
      name: 'Retail & Mega Shopping Malls',
      icon: '🛍️',
      subtitle: 'High Footfall Hard Services & Public Safety',
      clients: 'Phoenix Palassio, Lulu Mall',
      painPoints: 'Peak weekend escalator/elevator outages, exterior glass facade spider glazing leakage, food court grease-trap clogging, central chiller trips.',
      solution: 'Automated multi-ton chiller descaling, motorized stormwater/drainage desilting, facade scaffolding maintenance, and rapid breakdown response squads.',
      metrics: ['15-20% Chiller Energy Savings', 'Zero Peak Hour Stalls', '24/7 Rapid Emergency Cover']
    },
    {
      name: 'Corporate Campuses & BPO Tech Parks',
      icon: '🏢',
      subtitle: '24/7 Server Room Thermal Integrity & Power Continuity',
      clients: 'Teleperformance, Multi-tenant IT Hubs',
      painPoints: 'Server room Precision AC (PAC) failure, UPS battery impedance degradation, compliance failures during multinational client vendor audits.',
      solution: 'Precision air conditioning diagnostics, UPS load bank testing, thermal DB scans, and single consolidated monthly master invoicing.',
      metrics: ['99.99% Server Thermal Stability', '100% LOTO Compliance', '1 Consolidated Invoice']
    },
    {
      name: 'Healthcare & High-Stakes Hospitals',
      icon: '🏥',
      subtitle: 'Statutory Medical Gas, OT Hygiene & Life Safety',
      clients: 'Regional Hospital Networks, Specialized Diagnostic Labs',
      painPoints: 'OT laminar flow contamination, negative pressure room leaks, ICU power flickers, strict statutory healthcare inspections.',
      solution: 'Hospital-grade HEPA filter cycles, hydro-pneumatic sterile water balancing, medical gas piping audits, and 100% ESIC/PF zero liability transfer.',
      metrics: ['100% OT Sterility Uptime', 'Zero Liability Transfer', 'NABH/JCI Audit Ready']
    },
    {
      name: 'Industrial & Manufacturing Plants',
      icon: '🏭',
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
      <section className="relative py-16 bg-slate-50 border-b border-slate-200">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Header */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="text-4xl p-3.5 rounded-2xl bg-white border border-slate-200 w-fit shadow-sm">
                    {ind.icon}
                  </div>
                  <h3 className="text-2xl font-black text-sfm-navy font-display">
                    {ind.name}
                  </h3>
                  <p className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                    {ind.subtitle}
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-extrabold text-slate-500 uppercase block mb-1">
                      Trusted Portfolio:
                    </span>
                    <span className="text-xs font-semibold text-slate-800 leading-relaxed block">
                      {ind.clients}
                    </span>
                  </div>
                </div>

                {/* Right Solutions & Metrics */}
                <div className="lg:col-span-8 space-y-6">
                  
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
                      className="px-5 py-2.5 rounded-xl bg-sfm-navy hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-2 shrink-0"
                    >
                      <span>Inquire for {ind.name.split('&')[0]}</span>
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
