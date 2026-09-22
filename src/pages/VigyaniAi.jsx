import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import VigyaniLiveSim from '../components/VigyaniLiveSim';
import { 
  FiCpu, 
  FiActivity, 
  FiEye, 
  FiZap, 
  FiLayers, 
  FiCheckCircle, 
  FiArrowRight
} from 'react-icons/fi';

export default function VigyaniAi() {
  const [activeTab, setActiveTab] = useState('predictive');

  const features = [
    {
      id: 'predictive',
      title: 'Predictive Intelligence',
      subtitle: 'Predict equipment failure before it disrupts operations',
      icon: <FiActivity className="text-2xl text-sky-600" />,
      description: 'AI sensors continuously analyze vibration signatures, thermal harmonics, current draw, and pressure drops across all major mechanical and electrical assets.',
      metrics: ['Predictive failure forecasting', 'Zero guest disruption', 'Proactive maintenance cycles']
    },
    {
      id: 'transparency',
      title: 'Total Transparency',
      subtitle: 'Real-time dashboards allow managers to verify every SOP instantly',
      icon: <FiEye className="text-2xl text-purple-600" />,
      description: 'Provides property general managers and chief engineers complete real-time visibility into machine health, active tickets, and verified technician check-ins.',
      metrics: ['Real-time executive dashboards', 'Instant SOP compliance logs', 'Energy consumption telemetry']
    },
    {
      id: 'automation',
      title: 'Scale & Automation',
      subtitle: 'Robotic sanitization and automated support for bulk supply chains',
      icon: <FiLayers className="text-2xl text-amber-600" />,
      description: 'Coordinates automated spares procurement and robotic disinfection devices to optimize operations across multi-site properties.',
      metrics: ['Automated reorder workflows', 'Robotic sanitization integration', '15-20% supply chain savings']
    }
  ];

  return (
    <AnimatedPage>
      {/* Hero */}
      <section className="relative py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
            Vigyani.ai • The Brain
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-sfm-navy font-display">
            Intelligence Over Intuition
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mt-3 leading-relaxed">
            Transitioning infrastructure from reactive firefighting to predictive, tech-led oversight with real-time AI sensors and executive dashboards.
          </p>
        </div>
      </section>

      {/* Main Interactive Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
              Live Sensor Telemetry Simulation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-sfm-navy font-display">
              Real-Time Equipment Health & Autonomous Diagnostics
            </h2>
          </div>

          <VigyaniLiveSim />

        </div>
      </section>

      {/* 3 Core AI Pillars Interactive from Slide 6 Deck 2 */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block">
                Feature Deep Dive
              </span>
              <h2 className="text-3xl font-black text-sfm-navy font-display">
                How Vigyani.ai Transforms Maintenance
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Click across the core modules to see how continuous machine learning guards million-dollar assets.
              </p>

              <div className="space-y-3 pt-2">
                {features.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setActiveTab(f.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      activeTab === f.id
                        ? 'bg-white border-sfm-navy shadow-card'
                        : 'bg-slate-100/60 border-slate-200 hover:bg-white text-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                        {f.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-sfm-navy font-display">{f.title}</h4>
                        <span className="text-xs text-slate-500">{f.subtitle.substring(0, 45)}...</span>
                      </div>
                    </div>
                    <FiArrowRight className={`text-sm ${activeTab === f.id ? 'text-sfm-red' : 'opacity-30'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Active Tab Preview Display */}
            <div className="lg:col-span-7">
              {(() => {
                const cur = features.find(f => f.id === activeTab);
                return (
                  <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-card relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                        {cur.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-sfm-navy font-display">{cur.title}</h3>
                        <p className="text-xs font-semibold text-slate-500">{cur.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-8">
                      {cur.description}
                    </p>

                    <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-4">
                      Core Impact Metrics:
                    </h5>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {cur.metrics.map((m, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                          <FiCheckCircle className="text-emerald-600 mx-auto mb-1.5" />
                          <span className="text-xs font-bold text-slate-900 block">{m}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-xs text-slate-500">
                        Compatible with BacNet, Modbus & MQTT Protocols
                      </span>
                      <Link
                        to="/contact"
                        className="px-5 py-2.5 rounded-xl bg-sfm-navy hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-2"
                      >
                        <span>Schedule Vigyani Demo</span>
                        <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
