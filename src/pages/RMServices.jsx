import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { 
  FiZap, 
  FiWind, 
  FiDroplet, 
  FiAlertOctagon, 
  FiCpu, 
  FiLayers, 
  FiCheckCircle, 
  FiArrowRight,
  FiTool,
  FiShield,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';

export default function RMServices() {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Precision Central Chiller & Chilled Water Plants',
      subtitle: 'Water-cooled & Air-cooled VRV/VRF descaling calibrated for zero peak downtime.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      tag: 'Thermal & Chiller SLA'
    },
    {
      title: 'High-Voltage Switchgear & Substation Overhauls',
      subtitle: 'Dual-key LOTO protocols, thermal scanning, and transformer protection across multi-tier towers.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
      tag: '100% CEA Statutory Compliance'
    },
    {
      title: 'Hydro-Pneumatics, Booster Pumping & High-Rise PHE',
      subtitle: 'Non-invasive acoustic leak scans, STP/WTP media filtration, and pressure zone balancing.',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80',
      tag: 'Fluid Dynamics'
    },
    {
      title: 'Fire Hydrant Rings & Integrated NBC Life Safety',
      subtitle: 'Hydrodynamic line pressure tests, addressable smoke loops, and emergency jockey pump sequencing.',
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80',
      tag: 'Statutory Life Safety'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const rmCapabilities = [
    {
      title: 'Electrical & Power Systems',
      headline: 'Routine checks, DB dressing, switchgear repairs, panel calibrations, UPS tests, and rapid breakdown response.',
      icon: <FiZap className="text-3xl text-amber-600" />,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      features: [
        'Main Switchgear, ACB & VCB repairs & contact calibrations',
        'Routine distribution board (DB) dressing & thermography scans',
        'Relay testing and capacitor bank power factor (PF) corrections',
        'UPS load bank tests & battery bank impedance audits',
        'Emergency breakdown response squads available 24/7'
      ],
      tag: 'Critical Power'
    },
    {
      title: 'HVAC & Chiller Plant Systems',
      headline: 'VRV/VRF diagnostics, chiller plant descaling, filter cycles, and compressor load analysis.',
      icon: <FiWind className="text-3xl text-sky-600" />,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      features: [
        'VRV/VRF diagnostic scanning and computerized refrigerant balancing',
        'Water-cooled and air-cooled chiller descaling & condenser tube cleaning',
        'Compressor load factor telemetry and bearing vibration analysis',
        'AHU/FCU automated filter replacement cycles & coil disinfection',
        'Psychrometric indoor air quality (IAQ) and humidity management'
      ],
      tag: 'Thermal Engineering'
    },
    {
      title: 'Plumbing & Public Health (PHE)',
      headline: 'Hydro-pneumatic pumping overhauls, structural leakage detection, and drainage systems clearing.',
      icon: <FiDroplet className="text-3xl text-teal-600" />,
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
      features: [
        'Hydro-pneumatic pumping system overhauls & VFD pump staging',
        'Non-invasive structural leakage detection & acoustic listening tests',
        'STP / WTP chemical balancing, filtration bed changes & water audits',
        'Motorized drain snakes & sewer line desilting',
        'Pressure reducing valve (PRV) recalibrations across high-rise zones'
      ],
      tag: 'Fluid Systems'
    },
    {
      title: 'Fire & Life Safety Overhauls',
      headline: 'Hydrant lines testing, integrated smoke detectors, sprinkler system pressure checks, and emergency logs.',
      icon: <FiAlertOctagon className="text-sfm-red" />,
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80',
      features: [
        'Main fire hydrant ring line hydrodynamic pressure testing',
        'Addressable smoke & heat detector sensitivity calibration',
        'Automatic sprinkler flow switch and jockey pump sequencing',
        'Fire damper testing and stairwell pressurization fan checks',
        'Localized emergency drill logs and NBC compliance documentation'
      ],
      tag: 'Statutory Safety'
    },
    {
      title: 'ELV & BMS Diagnostics',
      headline: 'Low-voltage circuit configs, access control overhauls, CCTV network diagnostics, and building automation.',
      icon: <FiCpu className="text-purple-600" />,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      features: [
        'Building Management System (BMS) DDC controller calibrations',
        'IP CCTV network diagnostics, NVR recording health & camera focus',
        'RFID & biometric access control gateway overhaul and badge sync',
        'Public Address and Voice Alarm (PAVA) acoustic audits',
        'Structured Cat6/Fiber termination and low-voltage tracing'
      ],
      tag: 'Smart Automation'
    },
    {
      title: 'Civil & Architectural Fit-outs',
      headline: 'High-finish carpentry, ceiling fixes, glass glazing adjustments, masonry, and localized paint touch-ups.',
      icon: <FiLayers className="text-emerald-600" />,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      features: [
        'High-finish carpentry, architectural door hardware & acoustic seals',
        'False ceiling grid realignment, gypsum repairs, and acoustic tiles',
        'Exterior glass facade spider glazing adjustments & silicone weather-proofing',
        'Floor tile relaying, marble repolishing, and masonry fixes',
        'Localized paint touch-ups for 5-star hotel & corporate aesthetics'
      ],
      tag: 'Civil Upkeep'
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
                R&M Hard Engineering Services • SMS On-Call Wing
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-[1.15]">
              Precision Engineering & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">On-Call Repairs</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-3xl leading-relaxed">
              Directly from Spartans Facility Management (SFM) & SMS On-Call wing. 100% ITI/Diploma certified specialists executing rapid breakdown triage, HVAC descaling, switchgear protection, and multi-facility SLAs.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-white font-display">15 Mins</span>
                <span className="text-[11px] text-slate-400 block mt-0.5 font-medium">Emergency Triage</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-red-400 font-display">100%</span>
                <span className="text-[11px] text-slate-400 block mt-0.5 font-medium">ITI / Diploma Cadre</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-emerald-400 font-display">15-20%</span>
                <span className="text-[11px] text-slate-400 block mt-0.5 font-medium">OpEx Cost Reduction</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-sky-400 font-display">24/7</span>
                <span className="text-[11px] text-slate-400 block mt-0.5 font-medium">Central Telemetry</span>
              </div>
            </div>
          </div>

          {/* ===================== HERO SLIDER ===================== */}
          <div className="mt-12 relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950 aspect-[16/9] sm:aspect-[21/9] min-h-[360px] max-h-[500px] group">
            <img
              key={`rm-slide-${activeSlide}`}
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

      {/* ===================== R&M CAPABILITIES GRID WITH RICH PHOTO COVERS ===================== */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left mb-8">
            <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
              Engineering Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-sfm-navy font-display">
              Full-Scope Hard Services Breakdown
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Executed with calibrated diagnostic meters, thermography cameras, and structured SLA checklists.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rmCapabilities.map((srv, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-card-hover flex flex-col justify-between overflow-hidden group"
              >
                {/* Photo Banner */}
                <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/95 text-slate-900 shadow">
                      {srv.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                      {srv.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-display">{srv.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-6 leading-relaxed">
                      {srv.headline}
                    </p>

                    <ul className="space-y-2.5">
                      {srv.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <FiCheckCircle className="text-emerald-600 mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      100% Certified ITI/Diploma Holders
                    </span>
                    <Link
                      to="/contact"
                      className="text-xs font-bold text-sfm-red hover:text-sfm-crimson flex items-center gap-1.5"
                    >
                      <span>Request Scope Quotation</span>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic R&M Objectives Card from Presentation */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-card">
            <h3 className="text-xl font-bold text-sfm-navy font-display mb-4">
              Core R&M Strategic Objectives:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <strong className="text-slate-900 block font-bold mb-1">• Standardized Contracts</strong>
                <span>Clean, flat rates across locations to assure pricing predictability.</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <strong className="text-slate-900 block font-bold mb-1">• Extended Asset Longevity</strong>
                <span>Maximizing life cycles of heavy systems to reduce CAPEX drains.</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <strong className="text-slate-900 block font-bold mb-1">• Central Command Hub</strong>
                <span>Directed out of Lucknow to assure quick delivery and rapid SLA resolution.</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </AnimatedPage>
  );
}
