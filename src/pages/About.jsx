import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { 
  FiShield, 
  FiCpu, 
  FiTool, 
  FiCheckCircle, 
  FiMapPin, 
  FiTarget, 
  FiAward,
  FiArrowRight
} from 'react-icons/fi';

export default function About() {
  const pillars = [
    {
      title: 'The Soul (SFM)',
      tagline: 'Premium Housekeeping & Specialized Engineering',
      description: 'The front-facing operational heartbeat delivering pristine luxury housekeeping, high-touch soft services, certified engineering oversight, and hospital/hotel standard SOP execution.',
      icon: <FiShield className="text-3xl text-sfm-red" />,
      points: [
        '5-Star Hospitality Hygiene SOPs',
        'Certified ITI/Diploma engineering cadre',
        'Rigorous daily operational oversight',
        '85%+ Staff Retention with ESIC/PF backing'
      ],
      border: 'border-red-200 bg-red-50/40'
    },
    {
      title: 'The Backbone (SMS)',
      tagline: 'On-Call Repairs & Maintenance Services',
      description: 'The specialized mechanical and breakdown wing capable of rapid on-call triage, heavy chiller overhaul, switchgear replacement, and multi-city emergency repairs.',
      icon: <FiTool className="text-3xl text-amber-600" />,
      points: [
        'Rapid Breakdown Triage & Dispatch',
        'HVAC & VRV/VRF Chiller descaling',
        'Hydro-pneumatic pumping overhauls',
        'Standardized flat rates across branches'
      ],
      border: 'border-amber-200 bg-amber-50/40'
    },
    {
      title: 'The Brain (Vigyani.ai)',
      tagline: 'AI Predictive Maintenance & Real-Time Dashboards',
      description: 'The intelligent technology core that monitors thousands of telemetry sensors in real time, predicting motor failures, electrical imbalances, and thermal spikes before human notice.',
      icon: <FiCpu className="text-3xl text-sky-600" />,
      points: [
        'AI vibration & thermal anomaly detection',
        'Real-time dashboards for C-Suite executives',
        'Automated digital ticketing & SOP verification',
        'Robotic sanitization & supply chain sync'
      ],
      border: 'border-sky-200 bg-sky-50/40'
    }
  ];

  return (
    <AnimatedPage>
      {/* Hero Banner */}
      <section className="relative py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
            Ecosystem Overview
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-sfm-navy font-display">
            One Partner. Total Accountability.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mt-3 leading-relaxed">
            Founded in 2025 with Headquarters in Lucknow. Trusted by Tier-1 Global Hospitality Brands across North India & Pan-India.
          </p>
        </div>
      </section>

      {/* Origin & Goals from Slide 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block">
                Goals & Strategic Objectives
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-sfm-navy font-display">
                Efficiency in Every Square Foot
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Transforming infrastructure upkeep into seamless operational uptime. We work white-labeled alongside your team, handling all mechanical, civil, and electrical breakdowns while completely protecting your front-facing brand relationships.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-black text-sfm-navy font-display">2025</span>
                  <span className="text-xs text-slate-500 block mt-1">Established & Expanding</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-black text-sfm-red font-display">Lucknow</span>
                  <span className="text-xs text-slate-500 block mt-1">HQ & Central Command Hub</span>
                </div>
              </div>
            </div>

            {/* Strategic Objectives Box */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-card">
                <h3 className="text-xl font-bold text-sfm-navy font-display mb-6 flex items-center gap-2">
                  <FiTarget className="text-sfm-red" />
                  Core Objectives
                </h3>
                
                <div className="space-y-4 text-sm">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <strong className="text-slate-900 font-bold block text-base mb-1">
                      • Standardized Contracts
                    </strong>
                    <span className="text-slate-600">
                      Clean, flat rates across locations to assure billing transparency.
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <strong className="text-slate-900 font-bold block text-base mb-1">
                      • Extended Asset Longevity
                    </strong>
                    <span className="text-slate-600">
                      Maximizing life cycles of heavy chillers, switchgears, and pumping systems.
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <strong className="text-slate-900 font-bold block text-base mb-1">
                      • Central Command
                    </strong>
                    <span className="text-slate-600">
                      Directed out of Lucknow to assure quick delivery and rapid escalation triage.
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 3 Pillars Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
              Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-sfm-navy font-display">
              Soul, Backbone, Brain (Vigyani.ai)
            </h2>
            <p className="text-slate-600 text-base mt-2">
              SFM | SMS | VIGYANI.AI — The triad that delivers zero downtime and total accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl border shadow-sm transition-all duration-300 flex flex-col justify-between ${pillar.border}`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-black text-sfm-navy font-display mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                    {pillar.tagline}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200/80">
                    {pillar.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <FiCheckCircle className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200">
                  <span className="text-xs font-bold text-sfm-navy flex items-center gap-1">
                    Full SLA Ownership <FiCheckCircle className="text-emerald-600" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alliance Callout (Slide 7 Deck 1) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block">
                Let's Build Operational Synergy Together
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-sfm-navy font-display">
                Strategic Alliance Alignment
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Partnering with SFM optimizes your technical reach, eliminates local vendor search times, and secures long-term client contract fulfillment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-sm font-bold text-slate-900 block font-display">Geographic Flexibility</strong>
                  <span className="text-xs text-slate-600">Instantly back your expansions across multi-city branches without the drag of fixed headcounts.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-sm font-bold text-slate-900 block font-display">Streamlined Operations</strong>
                  <span className="text-xs text-slate-600">Clean digital billing consolidated itemwise by city, asset code, and ticket ID for finance.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Headquarters & Command Hub</span>
              <h4 className="text-lg font-bold text-sfm-navy font-display mt-2 mb-4">
                Lucknow, Uttar Pradesh
              </h4>
              <Link
                to="/contact"
                className="w-full py-3 px-4 rounded-xl bg-sfm-red hover:bg-sfm-crimson text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Partner With Us</span>
                <FiArrowRight />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
