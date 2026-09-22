import React from 'react';
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
  FiShield
} from 'react-icons/fi';

export default function RMServices() {
  const rmCapabilities = [
    {
      title: 'Electrical & Power Systems',
      headline: 'Routine checks, DB dressing, switchgear repairs, panel calibrations, UPS tests, and rapid breakdown response.',
      icon: <FiZap className="text-3xl text-amber-600" />,
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
      {/* Hero */}
      <section className="relative py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
            R&M – Repair & Maintenance Services (Hard Services)
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-sfm-navy font-display">
            Precision Engineering & On-Call Repairs
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mt-3 leading-relaxed">
            Directly from Spartans Facility Management (SFM) & SMS On-Call wing. Skilled execution across heavy electrical grids, chiller plants, PHE pumps, and life safety overhauls.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rmCapabilities.map((srv, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      {srv.icon}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded bg-white text-slate-700 border border-slate-200">
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-sfm-navy font-display mb-1">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 mb-6">
                    {srv.headline}
                  </p>

                  <ul className="space-y-2.5">
                    {srv.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
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
                    <span>Request R&M Scope</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic R&M Objectives Card from Presentation */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-card">
            <h3 className="text-xl font-bold text-sfm-navy font-display mb-4">
              Core R&M Strategic Objectives:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <strong className="text-slate-900 block font-bold mb-1">• Standardized Contracts</strong>
                <span>Clean, flat rates across locations to assure pricing predictability.</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <strong className="text-slate-900 block font-bold mb-1">• Extended Asset Longevity</strong>
                <span>Maximizing life cycles of heavy systems to reduce CAPEX drains.</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
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
