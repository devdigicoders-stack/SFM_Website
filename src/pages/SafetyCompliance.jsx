import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { 
  FiShield, 
  FiCheckCircle, 
  FiLock, 
  FiUsers, 
  FiAlertTriangle, 
  FiAward,
  FiArrowRight
} from 'react-icons/fi';

export default function SafetyCompliance() {
  const safetyProtocols = [
    {
      title: 'Strict LOTO Implementation',
      subtitle: 'Lock-Out, Tag-Out Systems',
      description: 'Strictly deployed on all distribution boards and mechanical lines before work begins to guarantee zero energy isolation.',
      icon: <FiLock className="text-3xl text-sfm-red" />,
      tag: 'LOTO Protocol'
    },
    {
      title: 'Mandatory Certified PPE',
      subtitle: '100% Compliance with ISI-Marked Gear',
      description: '100% compliance with ISI-marked insulated boots, face shields, gloves, and double-lanyard harnesses.',
      icon: <FiShield className="text-3xl text-amber-600" />,
      tag: 'ISI-Marked PPE'
    },
    {
      title: 'Daily Tool-Box Talks (TBT)',
      subtitle: 'Mandatory 10-Minute Briefing',
      description: 'Mandatory 10-minute briefing on site parameters conducted by supervisors before every single shift.',
      icon: <FiUsers className="text-3xl text-sky-600" />,
      tag: 'Daily TBT'
    },
    {
      title: 'Height Safety Guidelines',
      subtitle: 'Certified Modular Scaffolding',
      description: 'Certified modular scaffolding checks and safe-line anchorage for all tasks over 1.8 meters.',
      icon: <FiAlertTriangle className="text-3xl text-purple-600" />,
      tag: 'Height Safety'
    }
  ];

  return (
    <AnimatedPage>
      {/* Hero */}
      <section className="relative py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
            Zero-Accident Vision & Corporate Protection
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-sfm-navy font-display">
            Safety Standards & Compliance Framework
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mt-3 leading-relaxed">
            Eliminating third-party operational liability with certified human safety protocols, 100% statutory ESIC/PF configurations, and five-star luxury hospitality audit readiness.
          </p>
        </div>
      </section>

      {/* 4 Core Pillars from Slide 5 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {safetyProtocols.map((proto, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      {proto.icon}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded bg-white text-slate-700 border border-slate-200">
                      {proto.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-sfm-navy font-display mb-1">
                    • {proto.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-wider">
                    {proto.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {proto.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-emerald-700 font-bold">
                  <FiCheckCircle className="text-emerald-600" /> 100% Standardized Enforcement
                </div>
              </div>
            ))}
          </div>

          {/* Absolute Compliance Adherence (Slide 5 Bottom Card) */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block">
                  Mitigating Zero Liability Transfer
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-sfm-navy font-display">
                  Absolute Compliance Adherence
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  All engineers are backed by complete ESIC/PF configurations and corporate insurance tiers, mitigating <strong className="text-slate-900">zero liability transfer</strong> to your firm.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
                    <span className="text-xs font-bold text-emerald-700 block">100% ESIC & PF</span>
                    <span className="text-[11px] text-slate-500">Statutory Compliant</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
                    <span className="text-xs font-bold text-sky-700 block">Corporate Insurance</span>
                    <span className="text-[11px] text-slate-500">Zero Liability Transfer</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
                    <span className="text-xs font-bold text-amber-700 block">Audit-Ready SOPs</span>
                    <span className="text-[11px] text-slate-500">5-Star Benchmark</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white border border-slate-200">
                <FiAward className="text-4xl text-amber-500 mb-2" />
                <h4 className="text-slate-900 font-bold text-base font-display">Statutory Compliance Dossier</h4>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  Request our verified insurance and compliance pack for your vendor onboarding team.
                </p>
                <Link
                  to="/contact"
                  className="w-full py-3 px-4 rounded-xl bg-sfm-navy hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Compliance Dossier</span>
                  <FiArrowRight />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>
    </AnimatedPage>
  );
}
