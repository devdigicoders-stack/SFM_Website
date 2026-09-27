import React, { useState, useEffect } from 'react';
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
  FiAward,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';

export default function IFMServices() {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: '5-Star Luxury Integrated Housekeeping & Guest Experience',
      subtitle: 'Hospital-grade hygiene, mechanized diamond scrubbing, and luxury hospitality SOPs.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
      tag: 'The Soul (SFM)'
    },
    {
      title: 'Heavy On-Call Breakdown Triage & Engineering Maintenance',
      subtitle: 'Emergency mechanical, HVAC, switchgear, and plumbing repair squads available 24/7.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      tag: 'The Backbone (SMS)'
    },
    {
      title: 'Real-Time AI Telemetry & Predictive Fault Diagnostics',
      subtitle: '72-hour anomaly detection on motor vibration, power harmonics, and temperature.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      tag: 'The Brain (Vigyani.ai)'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const triad = [
    {
      title: 'The Soul (SFM)',
      sub: 'Premium Housekeeping & High-Touch Soft Services',
      desc: 'Five-star luxury hospitality hygiene, hospital-grade disinfection, mechanized single-disc floor scrubbing, and specialized engineering oversight.',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
      icon: <FiShield className="text-3xl text-sfm-red" />,
      points: [
        'Luxury hospitality & hospital hygiene standards',
        'Certified daily operational oversight',
        '85%+ staff retention with verified background checks',
        '100% ESIC & PF statutory coverage'
      ],
      border: 'border-red-200 bg-slate-50'
    },
    {
      title: 'The Backbone (SMS)',
      sub: 'On-Call Repairs and Maintenance Services',
      desc: 'Rapid breakdown squads for central chiller plants, main HT/LT switchgears, hydro-pneumatic booster pumps, and architectural civil repairs.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      icon: <FiTool className="text-3xl text-amber-600" />,
      points: [
        'Standardized flat rates across multi-city branches',
        'VRV/VRF and chiller chemical descaling',
        '24/7 on-call rapid breakdown triage',
        'Statutory fire hydrant ring tests & logs'
      ],
      border: 'border-amber-200 bg-slate-50'
    },
    {
      title: 'The Brain (Vigyani.ai)',
      sub: 'AI Predictive Maintenance & Real-Time Dashboards',
      desc: 'AI sensors predict equipment failure before it disrupts operations. Real-time dashboards allow property managers to verify every SOP instantly.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
      icon: <FiCpu className="text-3xl text-sky-600" />,
      points: [
        'Predictive intelligence for 72h failure forecasts',
        'Real-time dashboards for C-Suite executives',
        'Robotic sanitization and automated supply chains',
        'Zero guest disruption & extended asset life'
      ],
      border: 'border-sky-200 bg-slate-50'
    }
  ];

  const softHardCapabilities = [
    {
      title: 'Mechanized Deep Housekeeping',
      tag: 'Soft Services',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80',
      desc: 'Diamond pad marble crystallization, auto-scrubber floor sanitization, and upholstery steam extraction.'
    },
    {
      title: 'Facade & High-Rise Glass Access',
      tag: 'Specialized Soft',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      desc: 'Cradle-assisted spider glazing cleaning, silicone weather sealing, and exterior architectural maintenance.'
    },
    {
      title: 'Substation & Transformer Overhauls',
      tag: 'Hard Engineering',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
      desc: 'High-voltage insulation tests, transformer oil filtration, breaker tripping calibrations, and CEA compliance.'
    },
    {
      title: 'Chilled Water & AHU Aeration',
      tag: 'Thermal Hard',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
      desc: 'Condenser coil descaling, UV-C indoor air disinfection, and psychrometric balancing for guest comfort.'
    }
  ];

  return (
    <AnimatedPage>
      {/* ===================== IMMERSIVE HERO SECTION ===================== */}
      <section className="relative pt-8 pb-10 lg:pt-10 lg:pb-14 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-red-600/15 via-blue-900/10 to-transparent pointer-events-none blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#c1121f] animate-ping"></span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
                Integrated Facility Management • Single Accountable Master SLA
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-[1.15]">
              One Partner. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">Total Accountability.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-3xl leading-relaxed">
              Redefining excellence in Integrated FM. A single accountable partner delivering 5-star hospitality soft services, certified hard engineering maintenance, and IoT-driven predictive telemetry.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-white font-display">1 Master</span>
                <span className="text-[11px] text-slate-400 block mt-0.5 font-medium">Unified SLA</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-red-400 font-display">85%+</span>
                <span className="text-[11px] text-slate-400 block mt-0.5 font-medium">Staff Retention</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-emerald-400 font-display">Zero</span>
                <span className="text-[11px] text-slate-400 block mt-0.5 font-medium">Liability Transfer</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-sky-400 font-display">72h</span>
                <span className="text-[11px] text-slate-400 block mt-0.5 font-medium">AI Failure Forecast</span>
              </div>
            </div>
          </div>

          {/* ===================== HERO SLIDER ===================== */}
          <div className="mt-12 relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950 aspect-[16/9] sm:aspect-[21/9] min-h-[360px] max-h-[500px] group">
            <img
              key={`ifm-slide-${activeSlide}`}
              src={heroSlides[activeSlide].image}
              alt={heroSlides[activeSlide].title}
              className="w-full h-full object-cover object-center animate-in fade-in zoom-in-95 duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
              <span className="px-3.5 py-1 rounded-full bg-[#c1121f] text-white text-xs font-black uppercase tracking-wider shadow-lg">
                {heroSlides[activeSlide].tag}
              </span>
              <span className="text-xs font-bold text-slate-200 bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                {activeSlide + 1} / {heroSlides.length}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white z-20">
              <div className="space-y-1.5 max-w-2xl text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-display leading-snug text-white drop-shadow-md">
                  {heroSlides[activeSlide].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium drop-shadow">
                  {heroSlides[activeSlide].subtitle}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 mr-2">
                  {heroSlides.map((_, idx) => (
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
                  onClick={() => setActiveSlide(prev => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                  className="p-2.5 rounded-xl bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors cursor-pointer border border-white/10"
                  title="Previous Slide"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveSlide(prev => (prev + 1) % heroSlides.length)}
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

      {/* ===================== THE 3 PILLARS SECTION ===================== */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="w-12 h-1 bg-sfm-red rounded mx-auto mb-3"></div>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {triad.map((t, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Header */}
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                    {t.icon}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
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
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== INTEGRATED SCOPE PHOTO SHOWCASE ===================== */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
                Full-Horizon Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-sfm-navy font-display">
                Integrated Soft & Hard Service Execution
              </h2>
              <p className="text-slate-600 text-base mt-2 max-w-2xl">
                From precision high-rise facade cleaning to critical substation overhauls — delivered under one unified SLA.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-sfm-red hover:underline"
            >
              <span>Request IFM Proposal</span>
              <FiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softHardCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-slate-900 text-[10px] font-black uppercase tracking-wider shadow">
                    {item.tag}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sfm-navy font-display text-base mb-1.5 group-hover:text-sfm-red transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== VIGYANI.AI TELEMETRY SIMULATION ===================== */}
      <section className="py-10 sm:py-12 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/80 text-[#c1121f] text-xs font-bold uppercase tracking-wider mb-4">
              <FiCpu /> Proprietary IoT Anomaly Engine
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display leading-tight">
              Live Sensor Telemetry Simulation (Vigyani.ai)
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              Moving from scheduled maintenance to telemetry-driven predictive overhauls. We monitor acoustic vibrations, thermal gradients, and motor current harmonics in real-time.
            </p>
          </div>

          <VigyaniLiveSim />

        </div>
      </section>
    </AnimatedPage>
  );
}
