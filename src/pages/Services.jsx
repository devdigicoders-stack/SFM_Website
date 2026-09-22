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
  FiTool
} from 'react-icons/fi';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'hard', label: 'Hard Engineering' },
    { id: 'safety', label: 'Life Safety & ELV' },
    { id: 'soft', label: 'Civil & Soft Services' },
  ];

  const serviceList = [
    {
      id: 'electrical',
      category: 'hard',
      title: 'Electrical & Power',
      subtitle: 'Routine checks, DB dressing, switchgear repairs, panel calibrations, UPS tests, and rapid breakdown response.',
      icon: <FiZap className="text-3xl text-amber-600" />,
      items: [
        'Routine distribution board (DB) dressing and thermal audits',
        'Main Switchgear, ACB & VCB repairs and contact servicing',
        'Relay and panel calibrations with precision diagnostic meters',
        'UPS load bank tests, battery impedance & harmonic distortion checks',
        '24/7 Rapid electrical breakdown response squads'
      ],
      tag: 'Electrical Cover'
    },
    {
      id: 'hvac',
      category: 'hard',
      title: 'HVAC Systems',
      subtitle: 'VRV/VRF diagnostics, chiller plant descaling, filter cycles, and compressor load analysis.',
      icon: <FiWind className="text-3xl text-sky-600" />,
      items: [
        'VRV / VRF diagnostic scanning & refrigerant loop balancing',
        'Water-cooled and air-cooled chiller plant chemical descaling',
        'Compressor load factor analysis & motor bearing telemetry',
        'AHU/FCU automated filter replacement cycles & coil sanitization',
        'Indoor air quality (IAQ) and humidity optimization'
      ],
      tag: 'HVAC Systems'
    },
    {
      id: 'plumbing',
      category: 'hard',
      title: 'Plumbing & Public Health',
      subtitle: 'Hydro-pneumatic pumping overhauls, structural leakage detection, and drainage systems clearing.',
      icon: <FiDroplet className="text-3xl text-teal-600" />,
      items: [
        'Hydro-pneumatic pumping system overhauls & VFD pump staging',
        'Non-invasive structural leakage detection & ultrasonic scans',
        'STP / WTP chemical balancing, filtration bed maintenance, and water audits',
        'Stormwater & sewer line motorized desilting',
        'Pressure reducing valve (PRV) recalibrations across high-rise floors'
      ],
      tag: 'Public Health'
    },
    {
      id: 'fire-safety',
      category: 'safety',
      title: 'Fire & Life Safety Overhauls',
      subtitle: 'Hydrant lines testing, integrated smoke detectors, sprinkler system pressure checks, and localized emergency logs.',
      icon: <FiAlertOctagon className="text-3xl text-sfm-red" />,
      items: [
        'Main fire hydrant ring line hydrodynamic pressure tests',
        'Integrated addressable smoke & heat detector sensitivity checks',
        'Sprinkler flow switch and jockey pump automatic start sequencing',
        'Fire damper testing and stairwell pressurization fan checks',
        'Localized emergency logs and NBC statutory compliance'
      ],
      tag: 'Life Safety'
    },
    {
      id: 'elv-bms',
      category: 'safety',
      title: 'ELV & BMS Diagnostics',
      subtitle: 'Low-voltage circuit configurations, access control overhauls, CCTV network diagnostics, and building automation sensor calibrations.',
      icon: <FiCpu className="text-3xl text-purple-600" />,
      items: [
        'Building Management System (BMS) DDC controller calibrations',
        'IP CCTV network diagnostics, NVR storage health, and optical alignments',
        'RFID & biometric access control gateway overhaul and badge sync',
        'Public Address and Voice Alarm (PAVA) acoustic integrity tests',
        'Low-voltage circuit tracing and structured Cat6/Fiber termination'
      ],
      tag: 'BMS & ELV'
    },
    {
      id: 'civil',
      category: 'soft',
      title: 'Civil & Fit-outs',
      subtitle: 'High-finish carpentry, ceiling fixes, glass glazing adjustments, masonry, and localized paint touch-ups.',
      icon: <FiLayers className="text-3xl text-emerald-600" />,
      items: [
        'High-finish carpentry, architectural door hardware, and acoustic seals',
        'Ceiling fixes, false ceiling grid realignment, and acoustic tiles',
        'Glass glazing adjustments and exterior silicone weather-proofing',
        'Precision floor tile relaying, marble repolishing, and masonry fixes',
        'Localized paint touch-ups for 5-star aesthetics'
      ],
      tag: 'Civil Works'
    },
    {
      id: 'soft-services',
      category: 'soft',
      title: 'Luxury Soft Services & Housekeeping',
      subtitle: 'Premium housekeeping, high-touch luxury hospitality SOPs, and hospital grade hygiene.',
      icon: <FiShield className="text-3xl text-rose-600" />,
      items: [
        'Mechanized single-disc floor scrubbing and industrial diamond polishing',
        'Hospital-grade terminal cleaning and OT/ICU disinfection protocols',
        'High-touch guest area sanitization and fragrance management systems',
        'Color-coded cross-contamination prevention microfiber protocols',
        'Digitally audited housekeeping checklists with instant supervisor signoff'
      ],
      tag: '5-Star Hospitality'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? serviceList 
    : serviceList.filter(s => s.category === selectedCategory);

  return (
    <AnimatedPage>
      {/* Hero Header */}
      <section className="relative py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
            Precision Engineering and Hard Services Cover
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-sfm-navy font-display">
            Comprehensive Maintenance Capabilities
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mt-3 leading-relaxed">
            Skilled execution across all major assets. Our technicians are certified ITI/Diploma holders undergoing rigorous training to interface safely with multi-vendor technical equipment.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-sfm-navy text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:text-sfm-navy hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map(service => (
              <div
                key={service.id}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded bg-white text-slate-700 border border-slate-200">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-sfm-navy font-display mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 mb-6">
                    {service.subtitle}
                  </p>

                  <ul className="space-y-2.5">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <FiCheckCircle className="text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    100% Verified Manpower & Background Checked
                  </span>
                  <Link
                    to="/contact"
                    className="text-xs font-bold text-sfm-red hover:text-sfm-crimson flex items-center gap-1.5 transition-colors"
                  >
                    <span>Request Service Scope</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise in Action (Slide 4 Deck 1) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block">
                Skilled Execution Across All Major Assets
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-sfm-navy font-display">
                Technical Expertise In Action
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our technicians are certified ITI/Diploma holders undergoing rigorous training to interface safely with multi-vendor technical equipment.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm left-accent-blue space-y-2">
                <h4 className="text-base font-bold text-sfm-navy font-display">
                  Asset Lifecycle Management
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We follow structured manufacturer specifications to ensure fixes are long-term, reducing continuous operational drain for your clients.
                </p>
              </div>

              <div className="space-y-2 text-sm text-slate-700 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-sfm-red font-bold">•</span>
                  <span><strong>100% Verified Manpower:</strong> Background checked specialist cadre.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sfm-red font-bold">•</span>
                  <span><strong>Precision Instrumentation:</strong> Advanced troubleshooting diagnostics.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-slate-200 shadow-card space-y-6">
              <h3 className="text-xl font-bold text-sfm-navy font-display">
                Comprehensive E&M Support Matrix
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block font-bold mb-1">HVAC & Chiller Uptime:</strong>
                  <span>Continuous compressor load analysis to prevent high ambient tripping during peak seasons.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block font-bold mb-1">Electrical Continuity:</strong>
                  <span>Main DB thermography to locate hot spots before insulation melt occurs.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block font-bold mb-1">Hydro-Pneumatic Balancing:</strong>
                  <span>VFD pump synchronization maintaining constant pressure across all floors.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
