import React, { useState, useEffect } from 'react';
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
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiActivity,
  FiUsers
} from 'react-icons/fi';

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);

  const gallerySlides = [
    {
      title: 'Precision Central Chiller & Thermal Overhauls',
      subtitle: 'Water-cooled & Air-cooled plants calibrated for zero guest downtime.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      badge: 'Chiller Engineering SLA'
    },
    {
      title: 'High-Voltage Switchgear & Breaker Audits',
      subtitle: 'Dual-key LOTO protocols, thermal scanning, and transformer protection.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
      badge: '100% CEA Compliant'
    },
    {
      title: '24/7 Central Telemetry Command Hub',
      subtitle: 'Real-time telemetry diagnostics powered by Vigyani.ai IoT node array.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      badge: 'Vigyani.ai AI Core'
    },
    {
      title: 'Luxury 5-Star Hospitality Soft Services',
      subtitle: 'Hospital-grade hygiene, mechanized diamond scrubbing, and luxury SOPs.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
      badge: 'Hospitality Gold Standard'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % gallerySlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [gallerySlides.length]);

  const pillars = [
    {
      title: 'The Soul (SFM)',
      tagline: 'Premium Housekeeping & Specialized Engineering',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
      description: 'The front-facing operational heartbeat delivering pristine luxury housekeeping, high-touch soft services, certified engineering oversight, and hospital/hotel standard SOP execution.',
      icon: <FiShield className="text-3xl text-sfm-red" />,
      points: [
        '5-Star Hospitality Hygiene SOPs',
        'Certified ITI/Diploma engineering cadre',
        'Rigorous daily operational oversight',
        '85%+ Staff Retention with ESIC/PF backing'
      ],
      border: 'border-red-200 bg-white'
    },
    {
      title: 'The Backbone (SMS)',
      tagline: 'On-Call Repairs & Maintenance Services',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
      description: 'The specialized mechanical and breakdown wing capable of rapid on-call triage, heavy chiller overhaul, switchgear replacement, and multi-city emergency repairs.',
      icon: <FiTool className="text-3xl text-amber-600" />,
      points: [
        'Rapid Breakdown Triage & Dispatch',
        'HVAC & VRV/VRF Chiller descaling',
        'Hydro-pneumatic pumping overhauls',
        'Standardized flat rates across branches'
      ],
      border: 'border-amber-200 bg-white'
    },
    {
      title: 'The Brain (Vigyani.ai)',
      tagline: 'AI Predictive Maintenance & Real-Time Dashboards',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      description: 'The intelligent technology core that monitors thousands of telemetry sensors in real time, predicting motor failures, electrical imbalances, and thermal spikes before human notice.',
      icon: <FiCpu className="text-3xl text-sky-600" />,
      points: [
        'AI vibration & thermal anomaly detection',
        'Real-time dashboards for C-Suite executives',
        'Automated digital ticketing & SOP verification',
        'Robotic sanitization & supply chain sync'
      ],
      border: 'border-sky-200 bg-white'
    }
  ];

  return (
    <AnimatedPage>
      {/* ===================== FULL IMMERSIVE HERO SECTION ===================== */}
      <section className="relative pt-8 pb-10 lg:pt-10 lg:pb-14 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden border-b border-slate-800">
        {/* Subtle Background Lighting / Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-red-600/15 via-blue-900/10 to-transparent pointer-events-none blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Hero Breadcrumb / Tagline */}
          <div className="max-w-4xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#c1121f] animate-ping"></span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
                Ecosystem & Corporate Profile • Established 2025
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-[1.15]">
              One Partner. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">Total Accountability.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal max-w-3xl leading-relaxed">
              Spartans Facility Management (SFM) combines luxury 5-star hospitality soft services, heavy mechanical & electrical breakdown triage (SMS), and real-time AI predictive telemetry (Vigyani.ai) into a single SLA-driven ecosystem.
            </p>

            {/* Quick Hero Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-white font-display">2025</span>
                <span className="text-[11px] text-slate-400 block mt-0.5 font-medium">HQ in Lucknow</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-red-400 font-display">100%</span>
                <span className="text-[11px] text-slate-400 block mt-0.5 font-medium">ITI / Diploma Cadre</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-emerald-400 font-display">85%+</span>
                <span className="text-[11px] text-slate-400 block mt-0.5 font-medium">Staff Retention</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-sky-400 font-display">24/7</span>
                <span className="text-[11px] text-slate-400 block mt-0.5 font-medium">Emergency Triage</span>
              </div>
            </div>
          </div>

          {/* ===================== HERO SLIDER SHOWCASE ===================== */}
          <div className="mt-12 relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950 aspect-[16/9] sm:aspect-[21/9] min-h-[360px] max-h-[500px] group">
            {/* Slide Image */}
            <img
              key={`slide-${activeSlide}`}
              src={gallerySlides[activeSlide].image}
              alt={gallerySlides[activeSlide].title}
              className="w-full h-full object-cover object-center animate-in fade-in zoom-in-95 duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

            {/* Top Badge & Slide Count */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
              <span className="px-3.5 py-1 rounded-full bg-[#c1121f] text-white text-xs font-black uppercase tracking-wider shadow-lg">
                {gallerySlides[activeSlide].badge}
              </span>
              <span className="text-xs font-bold text-slate-200 bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                {activeSlide + 1} / {gallerySlides.length}
              </span>
            </div>

            {/* Bottom Caption & Controls */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white z-20">
              <div className="space-y-1.5 max-w-2xl text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-display leading-snug text-white drop-shadow-md">
                  {gallerySlides[activeSlide].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium drop-shadow">
                  {gallerySlides[activeSlide].subtitle}
                </p>
              </div>

              {/* Slider Arrows & Dots */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 mr-2">
                  {gallerySlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeSlide === idx ? 'w-8 bg-[#c1121f]' : 'w-2.5 bg-white/40 hover:bg-white'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveSlide(prev => (prev === 0 ? gallerySlides.length - 1 : prev - 1))}
                  className="p-2.5 rounded-xl bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors cursor-pointer border border-white/10"
                  title="Previous Slide"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveSlide(prev => (prev + 1) % gallerySlides.length)}
                  className="p-2.5 rounded-xl bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors cursor-pointer border border-white/10"
                  title="Next Slide"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Origin & Goals from Slide 2 */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
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
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-2xl font-black text-sfm-navy font-display">2025</span>
                  <span className="text-xs text-slate-500 block mt-1">Established & Expanding</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-2xl font-black text-sfm-red font-display">Lucknow</span>
                  <span className="text-xs text-slate-500 block mt-1">HQ & Central Command Hub</span>
                </div>
              </div>
            </div>

            {/* Strategic Objectives Box */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card">
                <h3 className="text-xl font-bold text-sfm-navy font-display mb-6 flex items-center gap-2">
                  <FiTarget className="text-sfm-red" />
                  Core Objectives
                </h3>
                
                <div className="space-y-4 text-sm">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 font-bold block text-base mb-1">
                      • Standardized Contracts
                    </strong>
                    <span className="text-slate-600">
                      Clean, flat rates across locations to assure billing transparency.
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 font-bold block text-base mb-1">
                      • Extended Asset Longevity
                    </strong>
                    <span className="text-slate-600">
                      Maximizing life cycles of heavy chillers, switchgears, and pumping systems.
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
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
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
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
                className="rounded-3xl border border-slate-200 bg-slate-50 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Pillar Visual Image */}
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
                  
                  <div className="absolute bottom-3 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                    {pillar.icon}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
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

                  <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs font-bold text-sfm-navy flex items-center gap-1">
                      Full SLA Ownership <FiCheckCircle className="text-emerald-600" />
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#c1121f]">
                      Enterprise Tier
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alliance Section */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 text-left">
            <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block">
              Let's Build Operational Synergy Together
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-sfm-navy font-display mt-1">
              Strategic Alliance Alignment
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
              Partnering with SFM optimizes your technical reach, eliminates local vendor search times, and secures long-term client contract fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <strong className="text-base font-bold text-slate-900 block font-display mb-1">Geographic Flexibility</strong>
              <span className="text-xs text-slate-600 leading-relaxed block">Instantly back your expansions across multi-city branches without the drag of fixed headcounts.</span>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <strong className="text-base font-bold text-slate-900 block font-display mb-1">Streamlined Operations</strong>
              <span className="text-xs text-slate-600 leading-relaxed block">Clean digital billing consolidated itemwise by city, asset code, and ticket ID for finance.</span>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <strong className="text-base font-bold text-slate-900 block font-display mb-1">White-Label Protection</strong>
              <span className="text-xs text-slate-600 leading-relaxed block">Work seamlessly alongside your in-house managers while protecting your direct client brand.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== EXTENSIVE OPERATIONAL PHOTO GALLERY ===================== */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="w-12 h-1 bg-sfm-red rounded mx-auto mb-3"></div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
              Field Execution & Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-sfm-navy font-display">
              Real-World Facility Operations Gallery
            </h2>
            <p className="text-slate-600 text-base mt-2">
              From heavy HVAC descaling to 5-star hospitality diamond marble polishing and AI control rooms.
            </p>
          </div>

          {/* Photo Grid with Rich Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="relative rounded-3xl overflow-hidden group shadow-card border border-slate-200 bg-slate-900 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="Central Chiller Engineering"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-[#c1121f] mb-1.5 inline-block">
                  HVAC & Chiller Plants
                </span>
                <h4 className="text-base font-bold text-gray-300 font-display">Hydrodynamic Tube Descaling & Calibration</h4>
                <p className="text-xs text-slate-300 mt-0.5">Ensuring 100% cooling continuity in high-temperature peaks.</p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group shadow-card border border-slate-200 bg-slate-900 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
                alt="Electrical HT/LT Substation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-amber-600 mb-1.5 inline-block">
                  Electrical Infrastructure
                </span>
                <h4 className="text-base font-bold text-gray-300 font-display">Thermal Thermography & Breaker Audits</h4>
                <p className="text-xs text-slate-300 mt-0.5">Dual-key LOTO protocols and ACB/VCB preventative testing.</p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group shadow-card border border-slate-200 bg-slate-900 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="5-Star Luxury Housekeeping"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-600 mb-1.5 inline-block">
                  Luxury Soft Services
                </span>
                <h4 className="text-base font-bold text-gray-300 font-display">Hospitality Gold Standard SOPs</h4>
                <p className="text-xs text-slate-300 mt-0.5">High-touch sanitization, lobby grooming, and marble revitalization.</p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group shadow-card border border-slate-200 bg-slate-900 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="Vigyani.ai IoT Command Center"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-sky-600 mb-1.5 inline-block">
                  AI Telemetry Hub
                </span>
                <h4 className="text-base font-bold text-gray-300 font-display">Central Command & Dispatch (Lucknow)</h4>
                <p className="text-xs text-slate-300 mt-0.5">Live monitoring of 2,500+ motor vibration and temperature nodes.</p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group shadow-card border border-slate-200 bg-slate-900 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80"
                alt="Fire and Life Safety Testing"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-red-700 mb-1.5 inline-block">
                  Life Safety Systems
                </span>
                <h4 className="text-base font-bold text-gray-300 font-display">Hydrant Rings & Smoke Detection NBC Audits</h4>
                <p className="text-xs text-slate-300 mt-0.5">100% statutory adherence with routine hydro-pressure testing.</p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group shadow-card border border-slate-200 bg-slate-900 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80"
                alt="Plumbing Hydro-pneumatic Pumping"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-teal-600 mb-1.5 inline-block">
                  Hydro-Pneumatics & STP
                </span>
                <h4 className="text-base font-bold text-gray-300 font-display">Booster Pumping & High-Rise PHE</h4>
                <p className="text-xs text-slate-300 mt-0.5">Non-invasive leak detection and STP/WTP media management.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================== HEADQUARTERS & BOTTOM CALL TO ACTION ===================== */}
      <section className="py-10 sm:py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-card flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#c1121f] text-xs font-bold uppercase tracking-wider">
                <FiMapPin className="text-sm" /> Central Headquarters & Pan-India Hub
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-sfm-navy font-display">
                Lucknow, Uttar Pradesh
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                Directing critical hard breakdown triage, engineering compliance, and smart IoT operations for Tier-1 properties across North India & Pan-India.
              </p>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-sfm-red hover:bg-sfm-crimson text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
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
