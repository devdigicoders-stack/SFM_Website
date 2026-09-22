import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import VigyaniLiveSim from '../components/VigyaniLiveSim';
import { 
  FiShield, 
  FiCpu, 
  FiTool, 
  FiCheckCircle, 
  FiArrowRight, 
  FiActivity, 
  FiLayers, 
  FiAward 
} from 'react-icons/fi';

export default function IFMServices() {
  const triad = [
    {
      title: 'The Soul (SFM)',
      sub: 'Premium Housekeeping & High-Touch Soft Services',
      desc: 'Five-star luxury hospitality hygiene, hospital-grade disinfection, mechanized single-disc floor scrubbing, and specialized engineering oversight.',
      icon: <FiShield className="text-3xl text-sfm-red" />,
      points: [
        'Luxury hospitality & hospital hygiene standards',
        'Certified daily operational oversight',
        '85%+ staff retention with verified background checks',
        '100% ESIC & PF statutory coverage'
      ],
      border: 'border-red-200 bg-red-50/40'
    },
    {
      title: 'The Backbone (SMS)',
      sub: 'On-Call Repairs and Maintenance Services',
      desc: 'Rapid breakdown squads for central chiller plants, main HT/LT switchgears, hydro-pneumatic booster pumps, and architectural civil repairs.',
      icon: <FiTool className="text-3xl text-amber-600" />,
      points: [
        'Standardized flat rates across multi-city branches',
        'VRV/VRF and chiller chemical descaling',
        '24/7 on-call rapid breakdown triage',
        'Statutory fire hydrant ring tests & logs'
      ],
      border: 'border-amber-200 bg-amber-50/40'
    },
    {
      title: 'The Brain (Vigyani.ai)',
      sub: 'AI Predictive Maintenance & Real-Time Dashboards',
      desc: 'AI sensors predict equipment failure before it disrupts operations. Real-time dashboards allow property managers to verify every SOP instantly.',
      icon: <FiCpu className="text-3xl text-sky-600" />,
      points: [
        'Predictive intelligence for 72h failure forecasts',
        'Real-time dashboards for C-Suite executives',
        'Robotic sanitization and automated supply chains',
        'Zero guest disruption & extended asset life'
      ],
      border: 'border-sky-200 bg-sky-50/40'
    }
  ];

  return (
    <AnimatedPage>
      {/* Hero */}
      <section className="relative py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
            IFM – Integrated Facility Management Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-sfm-navy font-display">
            One Partner. Total Accountability.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mt-3 leading-relaxed">
            Redefining excellence in Integrated FM. A single accountable partner for premium technical, engineering, and soft services — powered by AI.
          </p>
        </div>
      </section>

      {/* The 3 Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left mb-14">
            <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
              Ecosystem Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-sfm-navy font-display">
              Soul, Backbone, Brain (Vigyani.ai)
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Combining local expertise, technical depth, and AI-enabled transparency into a unified Master SLA.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {triad.map((t, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl border shadow-sm flex flex-col justify-between ${t.border}`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                    {t.icon}
                  </div>
                  <h3 className="text-2xl font-black text-sfm-navy font-display mb-1">
                    {t.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                    {t.sub}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {t.desc}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-200/80 text-xs sm:text-sm text-slate-700">
                    {t.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FiCheckCircle className="text-emerald-600 mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200">
                  <span className="text-xs font-bold text-sfm-navy flex items-center gap-1">
                    Guaranteed Single SLA Ownership <FiCheckCircle className="text-emerald-600" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Vigyani Live Sensor Telemetry Integration */}
          <div className="mt-8">
            <div className="mb-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
                Integrated Predictive Layer
              </span>
              <h3 className="text-2xl font-bold text-sfm-navy font-display">
                Live Sensor Telemetry Simulation (Vigyani.ai)
              </h3>
            </div>
            <VigyaniLiveSim />
          </div>

        </div>
      </section>
    </AnimatedPage>
  );
}
