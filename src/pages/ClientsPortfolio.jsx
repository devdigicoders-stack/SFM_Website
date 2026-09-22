import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { 
  FiAward, 
  FiCheckCircle, 
  FiMapPin, 
  FiLayers, 
  FiArrowRight
} from 'react-icons/fi';

export default function ClientsPortfolio() {
  const verticals = [
    {
      name: 'Hospitality',
      icon: '🏨',
      clients: ['Taj Palace Lucknow', 'Novotel', 'Hyatt Regency', 'Ginger (An IHCL Brand)', 'Hilton Garden Inn', 'Radisson', 'Marriott'],
      highlight: '100% Guest Uptime & 5-Star Audit Readiness',
      description: 'Zero disruption in central air conditioning, banqueting power, high-pressure guest water supply, and luxury aesthetic woodwork.'
    },
    {
      name: 'Retail & Mega Malls',
      icon: '🛍️',
      clients: ['Phoenix Palassio', 'Lulu Mall'],
      highlight: 'Massive Footfall Hard Services & Civil Upkeep',
      description: 'Chiller plant descaling, emergency escalators/elevators electrical support, exterior glass facade upkeep, and high-volume public health plumbing.'
    },
    {
      name: 'Corporate & Tech Parks',
      icon: '🏢',
      clients: ['Teleperformance', 'Corporate Headquarters'],
      highlight: '24/7 Power Continuity & Server Room Thermal Integrity',
      description: 'Precision PAC cooling management, UPS load bank tests, and rapid electrical breakdown squad stationed on-site.'
    },
    {
      name: 'Healthcare & High-Stakes Labs',
      icon: '🏥',
      clients: ['Regional Hospital Networks', 'Diagnostic Labs'],
      highlight: 'Audit-Ready Technical & Medical Compliance',
      description: 'Negative pressure room diagnostics, laminar airflow air handling units (AHU), and strict technical maintenance.'
    }
  ];

  return (
    <AnimatedPage>
      {/* Hero from Slide 6 */}
      <section className="relative py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
            Proven Track Record Across Key Commercial Verticals
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-sfm-navy font-display">
            Our Valued Client Portfolio
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mt-3 leading-relaxed">
            Trusted partner for tier-1 brands across hospitality, retail, and corporate hubs in North India with scalable expansion.
          </p>
        </div>
      </section>

      {/* Flagship Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-card mb-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700 block">
                  Featured Strategic Milestone
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-sfm-navy font-display">
                  Taj Palace Lucknow Technical Service Partner
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Appointed as the lead technical service partner for this flagship luxury destination. Managing end-to-end daily engineering oversight, central chillers, and five-star "Audit-Ready" metrics every single day.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="text-2xl font-black text-sfm-navy font-display">100%</span>
                    <span className="text-xs text-slate-500 block mt-1">Uptime on Critical HVAC</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="text-2xl font-black text-emerald-600 font-display">5-Star</span>
                    <span className="text-xs text-slate-500 block mt-1">Audit Score Adherence</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="text-2xl font-black text-sky-600 font-display">24/7</span>
                    <span className="text-xs text-slate-500 block mt-1">Dedicated ITI Cadre</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 text-center">
                <div className="text-4xl mb-2">🏛️</div>
                <h4 className="text-sfm-navy font-bold text-lg font-display">Taj Brand Endorsement</h4>
                <p className="text-xs text-slate-500 mt-2 mb-6">
                  "SFM provides the rare combination of technical depth, discipline, and prompt escalation management required for luxury hotels."
                </p>
                <Link
                  to="/contact"
                  className="w-full py-3 px-4 rounded-xl bg-sfm-navy hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Full Case Study Report</span>
                  <FiArrowRight />
                </Link>
              </div>

            </div>
          </div>

          {/* Commercial Verticals Grid */}
          <div className="mb-10 text-left">
            <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
              Market Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-sfm-navy font-display">
              Preferred Partner for Tier-1 Brands
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verticals.map((vert, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all shadow-sm hover:shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">{vert.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-sfm-navy font-display">{vert.name}</h3>
                      <span className="text-xs text-sky-700 font-bold">{vert.highlight}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {vert.description}
                  </p>

                  <div className="pt-4 border-t border-slate-200">
                    <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block mb-2">
                      Key Client Portfolio:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {vert.clients.map((c, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg bg-white text-slate-800 text-xs font-semibold border border-slate-200">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500">White-Label & Direct SLA Models</span>
                  <Link to="/contact" className="text-xs text-sfm-red hover:underline font-bold flex items-center gap-1">
                    Partner With Us <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </AnimatedPage>
  );
}
