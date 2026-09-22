import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { 
  FiZap, 
  FiWind, 
  FiDroplet, 
  FiAlertOctagon, 
  FiCpu, 
  FiLayers, 
  FiShield, 
  FiCheckCircle, 
  FiArrowRight,
  FiTool,
  FiFileText
} from 'react-icons/fi';

export default function ServiceDetails() {
  const [selectedService, setSelectedService] = useState('hvac');

  const services = {
    hvac: {
      name: 'HVAC & Central Chiller Plants',
      tag: 'Hard Services • Thermal Engineering',
      icon: <FiWind className="text-3xl text-sky-600" />,
      overview: 'Specialized management of complex HVAC units, air-cooled/water-cooled chillers, cooling towers, and variable refrigerant flow (VRV/VRF) loops to ensure 100% guest comfort and energy efficiency.',
      scope: [
        'VRV/VRF electronic error scanning & refrigerant loop balancing',
        'Chemical descaling of chiller tubes and cooling tower fill packs',
        'Motor bearing vibration analysis and electrical load factor logging',
        'Automated AHU/FCU filter maintenance schedules and UV-C disinfection',
        'Psychrometric indoor air quality (IAQ) and humidity modulation'
      ],
      tools: ['Ultrasonic Leak Detectors', 'Fluke Thermal Imagers', 'Refrigerant Recovery Units', 'Digital Manometer Gauges'],
      deliverables: 'Daily compressor load logs, periodic descaling certificates, and energy efficiency audit reports.'
    },
    electrical: {
      name: 'Electrical Power & Switchgear Systems',
      tag: 'Hard Services • Critical Continuity',
      icon: <FiZap className="text-3xl text-amber-600" />,
      overview: 'End-to-end power grid management, routine DB dressing, switchgear maintenance, transformer servicing, and power factor optimization to eliminate electrical fire risks.',
      scope: [
        'Routine distribution board (DB) dressing and cable dressing',
        'ACB / VCB breaker contact overhauls and tripping mechanism tests',
        'Relay calibrations and harmonic distortion mitigation',
        'UPS load bank testing & emergency diesel generator (DG) synchronisation',
        '24/7 Rapid electrical breakdown response squads'
      ],
      tools: ['Megger Insulation Testers', 'Thermal Thermography Cameras', 'Earth Resistance Testers', 'True RMS Clamp Meters'],
      deliverables: 'DB thermography heat-maps, statutory CEA compliance documentation, and UPS health logs.'
    },
    plumbing: {
      name: 'Plumbing & Hydro-Pneumatics (PHE)',
      tag: 'Hard Services • Fluid Dynamics',
      icon: <FiDroplet className="text-3xl text-teal-600" />,
      overview: 'Comprehensive hydro-pneumatic booster pumping management, structural leak detection, sewage treatment plant (STP) operation, and high-rise pressure balancing.',
      scope: [
        'Hydro-pneumatic pumping system overhauls & VFD staging calibration',
        'Non-invasive structural leakage detection & acoustic ultrasonic scans',
        'STP / WTP chemical balancing, filtration media servicing & BOD/COD water tests',
        'Motorized sewer line desilting and grease-trap clearing',
        'Pressure reducing valve (PRV) recalibration across multi-tier towers'
      ],
      tools: ['Acoustic Pipe Leak Detectors', 'Hydrostatic Pressure Test Rigs', 'Motorized Drain Clearing Augers'],
      deliverables: 'Water quality lab certificates, STP discharge compliance logs, and pump efficiency curves.'
    },
    fire: {
      name: 'Fire & Life Safety Overhauls',
      tag: 'Statutory Compliance • Life Protection',
      icon: <FiAlertOctagon className="text-3xl text-sfm-red" />,
      overview: '100% compliance with National Building Code (NBC) standards and local Fire Directorate statutory requirements. Routine hydrodynamic line pressure testing and sensor calibrations.',
      scope: [
        'Main fire hydrant ring hydrodynamic pressure testing',
        'Addressable optical smoke & thermal heat detector sensitivity checks',
        'Automatic sprinkler flow switch and diesel jockey pump sequencing',
        'Motorized fire damper testing & stairwell pressurization fans',
        'Emergency mock-drill execution and statutory log maintenance'
      ],
      tools: ['Hydrant Flow & Pressure Rigs', 'Aerosol Smoke Sensor Testers', 'Decibel Sound Meters for PAVA'],
      deliverables: 'Annual Fire NOC renewal assistance, monthly testing dossiers, and emergency drill logs.'
    },
    bms: {
      name: 'ELV & BMS Diagnostics',
      tag: 'Smart Buildings • Automation',
      icon: <FiCpu className="text-3xl text-purple-600" />,
      overview: 'Building automation sensor calibrations, IP CCTV surveillance network health, RFID access controls, and integrated public address systems for modern commercial complexes.',
      scope: [
        'Building Management System (BMS) DDC controller calibrations',
        'IP CCTV network diagnostics, NVR disk health & optical alignment',
        'RFID & biometric access control gateway overhaul and badge sync',
        'Public Address and Voice Alarm (PAVA) acoustic testing',
        'Low-voltage circuit tracing and Cat6/Fiber optic termination'
      ],
      tools: ['OTDR Fiber Testers', 'Network Cable Analyzers', 'Digital Multimeters', 'BMS Config Software'],
      deliverables: 'BMS sensor calibration logs, CCTV uptime reports, and access control audit trails.'
    },
    civil: {
      name: 'Civil & Fit-outs',
      tag: 'Aesthetic Upkeep • Architectural Maintenance',
      icon: <FiLayers className="text-3xl text-emerald-600" />,
      overview: 'High-finish carpentry, architectural door hardware, ceiling repairs, facade spider glazing, and localized paint touch-ups to uphold five-star luxury standards.',
      scope: [
        'High-finish carpentry, door closers, and acoustic seal adjustments',
        'False ceiling grid realignment, gypsum repairs, and acoustic tiles',
        'Exterior glass facade spider glazing adjustments & silicone weather-proofing',
        'Floor tile relaying, marble repolishing, and masonry fixes',
        'High-grade localized paint touch-ups for 5-star aesthetics'
      ],
      tools: ['Laser Level Gauges', 'Diamond Floor Polishing Machines', 'Scaffolding & Safe Harness Kits'],
      deliverables: 'Site snag-lists resolution certificates and civil maintenance signoff reports.'
    }
  };

  const cur = services[selectedService];

  return (
    <AnimatedPage>
      {/* Hero */}
      <section className="relative py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
            Service Details & Technical Specifications
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-sfm-navy font-display">
            Technical Service Specifications
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mt-3 leading-relaxed">
            Detailed engineering scope, specialized diagnostic tooling, and verified deliverables for each maintenance discipline.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Nav Tabs */}
            <div className="lg:col-span-4 space-y-2.5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-2">
                Select Service Capability
              </span>
              {Object.keys(services).map((key) => {
                const s = services[key];
                const active = selectedService === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedService(key)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      active
                        ? 'bg-slate-50 border-sfm-navy shadow-sm'
                        : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                        {s.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-sfm-navy font-display">{s.name}</h4>
                        <span className="text-[11px] text-slate-500">{s.tag.split('•')[0]}</span>
                      </div>
                    </div>
                    <FiArrowRight className={`text-sm ${active ? 'text-sfm-red' : 'opacity-30'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Service Detail Card */}
            <div className="lg:col-span-8">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-card space-y-8">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      {cur.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">{cur.tag}</span>
                      <h2 className="text-2xl sm:text-3xl font-black text-sfm-navy font-display">{cur.name}</h2>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">Technical Overview</h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{cur.overview}</p>
                </div>

                {/* Scope Points */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">Scope of Engineering Execution</h4>
                  <ul className="space-y-3">
                    {cur.scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                        <FiCheckCircle className="text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Diagnostic Tooling & Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <h5 className="text-xs font-bold text-sfm-navy uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <FiTool className="text-sfm-red" /> Precision Tooling
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {cur.tools.map((t, i) => (
                        <span key={i} className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <h5 className="text-xs font-bold text-sfm-navy uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <FiFileText className="text-sky-600" /> Audit Deliverables
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">{cur.deliverables}</p>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500">
                    Executed by 100% Verified ITI / Diploma Technical Specialists.
                  </span>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sfm-red hover:bg-sfm-crimson text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Quotation for {cur.name.split('&')[0]}</span>
                    <FiArrowRight />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
