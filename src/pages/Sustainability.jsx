import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { 
  FiCheckCircle, 
  FiArrowRight, 
  FiZap, 
  FiTrendingUp, 
  FiTrash2, 
  FiDroplet, 
  FiSun, 
  FiSliders, 
  FiActivity, 
  FiShield, 
  FiFileText,
  FiGlobe
} from 'react-icons/fi';

export default function Sustainability() {
  const sustainabilityPillars = [
    {
      title: 'Energy Efficiency',
      icon: <FiZap className="text-2xl text-sfm-red" />,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
      tag: 'Thermal & Power Optimization',
      tagColor: 'bg-red-50 text-sfm-red border-red-200',
      description: 'Optimizing chiller plants, HVAC systems, lighting, and electrical distribution to reduce power consumption and eliminate energy waste across facilities.',
      highlights: [
        'HVAC and central chiller plant coefficient of performance (COP) tuning',
        'Power factor correction and harmonic distortion reduction',
        'Smart LED scheduling, occupancy sensing, and load management',
        'Thermal insulation diagnostics to prevent heating/cooling losses'
      ]
    },
    {
      title: 'Resource Optimization',
      icon: <FiTrendingUp className="text-2xl text-sfm-navy" />,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      tag: 'Lifecycle & Asset Health',
      tagColor: 'bg-blue-50 text-sfm-navy border-blue-200',
      description: 'Maximizing the lifespan and operational performance of physical equipment and physical infrastructure through systematic lifecycle care and proactive management.',
      highlights: [
        'Condition-based predictive maintenance to prevent premature asset wear',
        'Balanced duty cycling for primary and backup pumps/generators',
        'Structured spare parts management to eliminate over-consumption',
        'Comprehensive asset health scorecards for capital planning'
      ]
    },
    {
      title: 'Waste Reduction',
      icon: <FiTrash2 className="text-2xl text-sfm-red" />,
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
      tag: 'Source Segregation & Circular Care',
      tagColor: 'bg-red-50 text-sfm-red border-red-200',
      description: 'Implementing source segregation, recycling protocols, and minimized landfill footprint across all commercial, retail, and hospitality facilities.',
      highlights: [
        'Strict colour-coded segregation for wet, dry, and recyclable waste',
        'Safe collection, containment, and certified disposal of hazardous oils & e-waste',
        'On-site organic waste converter (OWC) and composting operational support',
        'Consolidated packaging disposal with certified recycling channels'
      ]
    },
    {
      title: 'Water Conservation',
      icon: <FiDroplet className="text-2xl text-sfm-navy" />,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      tag: 'Zero-Leak & Hydro Balancing',
      tagColor: 'bg-blue-50 text-sfm-navy border-blue-200',
      description: 'Preventing water losses through zero-leak plumbing audits, hydro-pneumatic pressure balancing, cooling tower cycle management, and smart fixture calibration.',
      highlights: [
        'PHE pump line pressure stabilization to eliminate pipeline leaks and ruptures',
        'Cooling tower concentration cycle (CoC) & TDS water balancing',
        'Sensorized aerators and low-flow sanitary fixture installations',
        'Rainwater harvesting system upkeep and storm drain desilting'
      ]
    },
    {
      title: 'Sustainable Housekeeping Practices',
      icon: <FiSun className="text-2xl text-sfm-red" />,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      tag: 'Green Hygiene & Indoor Air Quality',
      tagColor: 'bg-red-50 text-sfm-red border-red-200',
      description: 'Mechanized, low-water cleaning techniques combined with micro-fiber tools, HEPA-filtered vacuuming, and protocols that protect indoor environmental air quality.',
      highlights: [
        'Mechanized single-disc floor scrubbers reducing water & detergent runoff by up to 40%',
        'Colour-coded micro-fiber cleaning systems eliminating cross-contamination',
        'HEPA-filtered extraction maintaining high Indoor Air Quality (IAQ)',
        'Zero single-use plastics policy across housekeeping service delivery'
      ]
    },
    {
      title: 'Responsible Chemical and Consumable Usage',
      icon: <FiSliders className="text-2xl text-sfm-navy" />,
      image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=800&q=80',
      tag: 'Eco-Certified Formulations',
      tagColor: 'bg-blue-50 text-sfm-navy border-blue-200',
      description: 'Using biodegradable, phosphate-free, and neutral-pH chemicals with precise dilution dispensing to minimize chemical runoff and preserve building surfaces.',
      highlights: [
        'Certified green formulations free from harsh VOCs and caustic solvents',
        'Automated chemical dilution dispensers preventing over-usage and wastage',
        'Biodegradable garbage liners and sustainable washroom consumables',
        'Complete Material Safety Data Sheet (MSDS) compliance at all sites'
      ]
    },
    {
      title: 'Energy Monitoring and Management',
      icon: <FiActivity className="text-2xl text-sfm-red" />,
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      tag: 'Continuous Measurement & Baselines',
      tagColor: 'bg-red-50 text-sfm-red border-red-200',
      description: 'Continuous tracking of utility consumption, power trends, and peak demands to pinpoint anomalies, prevent overruns, and maintain sustainable operating baselines.',
      highlights: [
        'Sub-meter tracking across high-consumption MEP equipment and chiller plants',
        'Continuous thermal scanning of electrical distribution boards to catch heat losses',
        'Peak load management and power factor optimization to reduce grid penalties',
        'Transparent daily, weekly, and monthly energy consumption reports'
      ]
    },
    {
      title: 'Operational Efficiency',
      icon: <FiShield className="text-2xl text-sfm-navy" />,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      tag: 'Unified SLA & Process Discipline',
      tagColor: 'bg-blue-50 text-sfm-navy border-blue-200',
      description: 'Eliminating process duplication, streamlining technician schedules, and combining technical engineering with soft services under a single accountable master SLA.',
      highlights: [
        'Single-vendor consolidated operations eliminating fragmented travel & coordination',
        'Multi-skilled ITI technician cadre trained in proactive preventive routines',
        'Standardized operating procedures (SOPs) matching 5-star hospitality benchmarks',
        'Prompt escalation protocols ensuring zero disruption to daily guest & tenant operations'
      ]
    },
    {
      title: 'ESG-Oriented Facility Practices',
      icon: <FiGlobe className="text-2xl text-sfm-red" />,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      tag: 'Environmental & Social Governance',
      tagColor: 'bg-red-50 text-sfm-red border-red-200',
      description: 'Embedding environmental stewardship, worker health and safety, and transparent governance into every contract, supporting our clients’ corporate sustainability goals.',
      highlights: [
        'Strict Lock-Out, Tag-Out (LOTO) protocols safeguarding technical personnel',
        '100% statutory labor compliance including PF, ESIC, and Workmen Compensation',
        'Carbon and resource footprint reduction targets integrated into SLA reviews',
        'Support for LEED, GRIHA, and ISO 14001 / ISO 45001 facility audits'
      ]
    },
    {
      title: 'Technology-Enabled Monitoring and Reporting',
      icon: <FiFileText className="text-2xl text-sfm-navy" />,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      tag: 'Digital Audits & Real-Time Dashboards',
      tagColor: 'bg-blue-50 text-sfm-navy border-blue-200',
      description: 'Digital tools track attendance, service delivery, task completion, checklists, and operational performance, providing total visibility and auditable sustainability data.',
      highlights: [
        'Real-time digital checklists with timestamp and geo-verified service completion',
        'Automated alerts on abnormal utility usage or maintenance deviations',
        'Executive dashboards offering complete visibility for property and facility heads',
        'Centralized audit-ready records simplifying green certification and compliance'
      ]
    }
  ];

  return (
    <AnimatedPage>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-slate-200/40 via-blue-50/20 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="w-12 h-1 bg-sfm-red rounded mb-4"></div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-sfm-red text-xs font-extrabold uppercase tracking-widest mb-3">
            <FiGlobe className="text-sfm-red" />
            <span>Sustainable Facility Operations</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-sfm-navy font-display tracking-tight leading-[1.15] max-w-4xl">
            Sustainability in Facility Management
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mt-4 leading-relaxed font-medium">
            We help facilities operate more efficiently by reducing energy and resource consumption, optimizing operations and implementing practical sustainability practices across technical and soft services.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-slate-200/80">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-sfm-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
            >
              <span>Request Sustainability Audit</span>
              <FiArrowRight />
            </Link>
            <Link
              to="/ifm-services"
              className="px-6 py-3.5 rounded-xl bg-sfm-navy hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
            >
              <span>Explore IFM Scope</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== THE 10 SUSTAINABILITY PILLARS ===================== */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 text-left">
            <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
              Comprehensive Sustainability Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-sfm-navy font-display">
              10 Core Areas of Sustainable Facility Management
            </h2>
            <p className="text-slate-600 text-base mt-2 leading-relaxed">
              Our structured approach combines engineering precision with responsible soft service practices to achieve measurable resource savings and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {sustainabilityPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-slate-50 border border-slate-200 hover:border-sfm-red transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                {/* Visual Header */}
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                  {/* Top Tag Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md bg-white/95 shadow-xs ${pillar.tagColor}`}>
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white text-slate-900 shadow-md shrink-0">
                      {pillar.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-bold text-lg font-display truncate">
                        {pillar.title}
                      </h3>
                      <span className="text-red-300 text-xs font-medium block truncate">
                        Pillar #{idx + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-200/80">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Practices & Deliverables:
                    </span>
                    {pillar.highlights.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <FiCheckCircle className="text-sfm-red shrink-0 mt-0.5 text-xs" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-500">Measurable Impact</span>
                    <Link
                      to="/contact"
                      className="font-bold text-sfm-red hover:text-red-800 inline-flex items-center gap-1 transition-colors group-hover:translate-x-0.5"
                    >
                      Audit This Service <FiArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== CTA / CONNECT SECTION ===================== */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-sfm-navy text-white shadow-xl relative overflow-hidden text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-sfm-red block">
                  Partner with Spartans
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-display leading-tight text-white">
                  Ready to Drive Real Sustainability in Your Facilities?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Contact our sales and engineering team to assess your current energy baselines, water efficiency, and housekeeping protocols for a structured green roadmap.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="w-full py-3.5 px-6 rounded-xl bg-sfm-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Connect with Sales Team</span>
                  <FiArrowRight />
                </Link>
                <Link
                  to="/rm-services"
                  className="w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider text-center transition-all border border-white/20 flex items-center justify-center gap-2"
                >
                  <span>View Technical R&M Scope</span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>
    </AnimatedPage>
  );
}
