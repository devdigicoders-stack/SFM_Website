import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import ClientLogoSlider from '../components/ClientLogoSlider';
import VigyaniLiveSim from '../components/VigyaniLiveSim';
import StatsCounter from '../components/StatsCounter';
import { usePublicData } from '../context/PublicDataContext';
import { 
  FiShield, 
  FiCpu, 
  FiTool, 
  FiArrowRight, 
  FiCheckCircle, 
  FiAlertOctagon, 
  FiLayers, 
  FiZap, 
  FiWind, 
  FiDroplet, 
  FiActivity, 
  FiChevronRight,
  FiChevronLeft,
  FiPhone,
  FiCalendar,
  FiAward
} from 'react-icons/fi';

export default function Home() {
  const { banners, homepage, socials } = usePublicData();
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeBanners = banners.filter(b => b.active !== false);

  useEffect(() => {
    if (activeBanners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % activeBanners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeBanners.length]);

  const activeSlideData = activeBanners[currentSlide] || {
    title: homepage?.heroHeading || '',
    subtitle: homepage?.heroSubheading || '',
    tagline: homepage?.heroTagline || '',
    badge: '',
    image: '',
    ctaText: '',
    ctaLink: '',
    secondaryCtaText: '',
    secondaryCtaLink: ''
  };

  const coreServices = [
    {
      title: 'Electrical & Power Systems',
      description: 'Routine checks, DB dressing, switchgear repairs, panel calibrations, UPS tests, and rapid breakdown response.',
      icon: <FiZap className="text-amber-600 text-2xl" />,
      tag: 'Electrical Cover'
    },
    {
      title: 'HVAC & Chiller Plants',
      description: 'VRV/VRF diagnostics, chiller plant descaling, filter cycles, and compressor load analysis.',
      icon: <FiWind className="text-sky-600 text-2xl" />,
      tag: 'HVAC Systems'
    },
    {
      title: 'Plumbing & Public Health',
      description: 'Hydro-pneumatic pumping overhauls, structural leakage detection, and drainage systems clearing.',
      icon: <FiDroplet className="text-teal-600 text-2xl" />,
      tag: 'Public Health'
    },
    {
      title: 'Fire & Life Safety Overhauls',
      description: 'Hydrant lines testing, integrated smoke detectors, sprinkler system pressure checks, and emergency logs.',
      icon: <FiAlertOctagon className="text-[#c1121f] text-2xl" />,
      tag: 'Life Safety'
    },
    {
      title: 'ELV & BMS Diagnostics',
      description: 'Low-voltage circuit configs, access control overhauls, CCTV network diagnostics, and sensor calibrations.',
      icon: <FiCpu className="text-purple-600 text-2xl" />,
      tag: 'Automation'
    },
    {
      title: 'Civil & Fit-outs',
      description: 'High-finish carpentry, ceiling fixes, glass glazing adjustments, masonry, and localized paint touch-ups.',
      icon: <FiLayers className="text-emerald-600 text-2xl" />,
      tag: 'Civil Works'
    },
  ];

  const heroTagline = activeSlideData.tagline || homepage?.heroTagline || '';
  const heroTitle = activeSlideData.title || homepage?.heroHeading || '';
  const heroSubtitle = activeSlideData.subtitle || homepage?.heroSubheading || '';
  const heroDesc = homepage?.heroDescription || '';
  const ctaText = activeSlideData.ctaText || '';
  const ctaLink = activeSlideData.ctaLink || '/contact';
  const secondaryCtaText = activeSlideData.secondaryCtaText || '';
  const secondaryCtaLink = activeSlideData.secondaryCtaLink || '/vigyani-ai';

  return (
    <AnimatedPage>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-red-100/30 via-slate-100/20 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Value Proposition & Dynamic Banners */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Dynamic Tagline Badge */}
              {(heroTagline || activeSlideData.badge) && (
                <div className="flex flex-wrap items-center gap-2">
                  {heroTagline && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200">
                      <span className="w-2 h-2 rounded-full bg-[#c1121f] animate-ping"></span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#c1121f]">
                        {heroTagline}
                      </span>
                    </div>
                  )}
                  {activeSlideData.badge && (
                    <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                      {activeSlideData.badge}
                    </span>
                  )}
                </div>
              )}

              {/* Dynamic Headings */}
              {(heroTitle || heroSubtitle) && (
                <div>
                  <div className="w-16 h-1.5 bg-[#c1121f] rounded mb-4"></div>
                  {heroTitle && (
                    <h1 key={`title-${currentSlide}`} className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0b1d3a] leading-[1.15] font-display animate-in fade-in duration-300">
                      {heroTitle}
                    </h1>
                  )}
                  {heroSubtitle && (
                    <p key={`subtitle-${currentSlide}`} className="text-xl sm:text-2xl font-bold text-slate-600 mt-3 font-display animate-in fade-in duration-300">
                      {heroSubtitle}
                    </p>
                  )}
                </div>
              )}

              {/* Dynamic Narrative Statement */}
              {heroDesc && (
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
                  {heroDesc}
                </p>
              )}

              {/* Key Milestones from Proposal */}
              {(homepage?.milestone1 || homepage?.milestone2) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {homepage?.milestone1 && (
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <FiCheckCircle className="text-emerald-600 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800">
                        {homepage.milestone1}
                      </span>
                    </div>
                  )}
                  {homepage?.milestone2 && (
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <FiCheckCircle className="text-sky-600 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800">
                        {homepage.milestone2}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons with Dynamic CTA Links */}
              {(ctaText || secondaryCtaText) && (
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  {ctaText && (
                    <Link
                      to={ctaLink}
                      className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#c1121f] hover:bg-red-700 text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3"
                    >
                      <span>{ctaText}</span>
                      <FiArrowRight />
                    </Link>
                  )}

                  {secondaryCtaText && (
                    <Link
                      to={secondaryCtaLink}
                      className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <FiCpu className="text-sky-600" />
                      <span>{secondaryCtaText}</span>
                    </Link>
                  )}
                </div>
              )}

              {/* Multi-Slide Indicator & Controls */}
              {activeBanners.length > 1 && (
                <div className="flex items-center gap-4 pt-3">
                  <div className="flex items-center gap-2">
                    {activeBanners.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2.5 rounded-full transition-all cursor-pointer ${
                          currentSlide === idx ? 'w-8 bg-[#c1121f]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setCurrentSlide(prev => (prev === 0 ? activeBanners.length - 1 : prev - 1))}
                      className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer text-xs"
                      title="Previous Banner"
                    >
                      <FiChevronLeft />
                    </button>
                    <button
                      onClick={() => setCurrentSlide(prev => (prev + 1) % activeBanners.length)}
                      className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer text-xs"
                      title="Next Banner"
                    >
                      <FiChevronRight />
                    </button>
                    <span className="text-[11px] font-bold text-slate-400 ml-1">
                      {currentSlide + 1} / {activeBanners.length}
                    </span>
                  </div>
                </div>
              )}

              {/* Tagline Footer */}
              <p className="text-xs text-slate-500 tracking-wider font-extrabold uppercase pt-1">
                Seamless Facilities, Superior Service.
              </p>
            </div>

            {/* Right Column: Dynamic Banner Visual Card & KPI Box */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Dynamic Banner Visual Feature Card */}
              {activeSlideData.image && (
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl group bg-slate-900 aspect-[16/10]">
                  <img
                    key={`img-${currentSlide}`}
                    src={activeSlideData.image}
                    alt={activeSlideData.title || 'Spartans Facility Management'}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 animate-in fade-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent"></div>
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    {activeSlideData.badge && (
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur text-slate-900 text-xs font-black uppercase tracking-wider shadow">
                        {activeSlideData.badge}
                      </span>
                    )}
                    <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shadow-lg ml-auto">
                      SFM
                    </span>
                  </div>

                  {(activeSlideData.tagline || activeSlideData.title) && (
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      {activeSlideData.tagline && (
                        <span className="text-[11px] font-extrabold text-red-400 uppercase tracking-widest block mb-1">
                          {activeSlideData.tagline}
                        </span>
                      )}
                      {activeSlideData.title && (
                        <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                          {activeSlideData.title}
                        </h4>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Dynamic Retention & Cost Reduction Stats Box */}
              {(homepage?.retentionRate || homepage?.costReduction) && (
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    {homepage?.retentionRate && (
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#c1121f]">
                          Client Retention Target
                        </span>
                        <div className="text-3xl font-black text-[#0b1d3a] font-heading">
                          {homepage.retentionRate}
                        </div>
                      </div>
                    )}
                    {homepage?.costReduction && (
                      <div className="text-right">
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
                          OpEx Cost Reduction
                        </span>
                        <div className="text-3xl font-black text-emerald-700 font-heading">
                          {homepage.costReduction}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    <h4 className="text-sm font-bold text-[#0b1d3a] font-display mb-1">
                      Peer-to-Peer Alignment
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We work white-labeled alongside your team, handling all mechanical, civil, and electrical breakdowns while completely protecting your front-facing client relationships.
                    </p>
                  </div>
                </div>
              )}

              {/* Core Objectives Box */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card space-y-3">
                <h4 className="text-sm font-bold text-[#0b1d3a] font-display">
                  Core Objectives
                </h4>
                
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <span className="text-[#c1121f] font-bold text-sm leading-none">•</span>
                    <span><strong>Standardized Contracts:</strong> Clean, flat rates across locations.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#c1121f] font-bold text-sm leading-none">•</span>
                    <span><strong>Extended Asset Longevity:</strong> Maximizing life cycles of heavy systems.</span>
                  </div>
                  {homepage?.milestone3 && (
                    <div className="flex items-start gap-2">
                      <span className="text-[#c1121f] font-bold text-sm leading-none">•</span>
                      <span><strong>Central Command:</strong> {homepage.milestone3}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* 3 Entities Banner */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-center">
                <span className="text-xs font-bold text-slate-700 tracking-wider">
                  SFM (The Soul) | SMS (The Backbone) | VIGYANI.AI (The Brain)
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ===================== CLIENT MARQUEE ===================== */}
      <ClientLogoSlider />

      {/* ===================== OPERATIONAL RISK ===================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="w-12 h-1 bg-[#c1121f] rounded mb-3"></div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
              Operational Risk
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1d3a] font-display">
              The Hidden Costs of Vendor Fragmentation
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Why traditional multi-agency models bleed operational budgets and cause guest disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Risk 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#c1121f] transition-all duration-300 group shadow-sm hover:shadow-card-hover">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-[#c1121f] flex items-center justify-center text-2xl mb-6">
                <FiActivity />
              </div>
              <h3 className="text-xl font-bold text-[#0b1d3a] font-display mb-2">
                Vendor Fatigue
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Juggling 5+ agencies with inconsistent standards leading to inefficiency, misaligned schedules, and billing chaos.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-[#c1121f] font-bold">
                ✓ SFM Single Unified Master SLA
              </div>
            </div>

            {/* Risk 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500 transition-all duration-300 group shadow-sm hover:shadow-card-hover">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl mb-6">
                <FiAlertOctagon />
              </div>
              <h3 className="text-xl font-bold text-[#0b1d3a] font-display mb-2">
                Reactive Firefighting
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Technical failures caught only after guest disruption, ballroom HVAC failure, and expensive operational downtime.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-amber-700 font-bold">
                ✓ Vigyani.ai 72h Predictive Alerts
              </div>
            </div>

            {/* Risk 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-500 transition-all duration-300 group shadow-sm hover:shadow-card-hover">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center text-2xl mb-6">
                <FiShield />
              </div>
              <h3 className="text-xl font-bold text-[#0b1d3a] font-display mb-2">
                Lack of Accountability
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                "The Blame Game" between technical and soft service teams creates silos, leaving property managers in jeopardy during audits.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-sky-700 font-bold">
                ✓ 100% Single-Point Accountability
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================== STATS COUNTER ===================== */}
      <StatsCounter />

      {/* ===================== CORE SERVICES GRID ===================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="w-12 h-1 bg-[#c1121f] rounded mb-3"></div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
                Full-Scope Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0b1d3a] font-display">
                Comprehensive Technical Maintenance
              </h2>
              <p className="text-slate-600 text-base mt-2 max-w-2xl">
                Dedicated engineering teams delivering proactive lifecycle overhauls across mechanical, electrical, and plumbing infrastructure.
              </p>
            </div>

            <Link
              to="/rm-services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#c1121f] hover:underline"
            >
              <span>Explore All R&M Services</span>
              <FiChevronRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#0b1d3a] transition-all duration-300 shadow-sm hover:shadow-card-hover group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-[#0b1d3a] group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0b1d3a] font-display mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <Link
                  to="/service-details"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#c1121f] group-hover:translate-x-1 transition-transform"
                >
                  <span>View Scope & SLA Breakdown</span>
                  <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== VIGYANI.AI LIVE TELEMETRY ===================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/80 text-[#c1121f] text-xs font-bold uppercase tracking-wider mb-4">
              <FiCpu /> Proprietary IoT Anomaly Engine
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display leading-tight">
              Predictive Maintenance Powered by Vigyani.ai
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              Moving from scheduled maintenance to telemetry-driven predictive overhauls. We monitor acoustic vibrations, thermal gradients, and motor current harmonics in real-time.
            </p>
          </div>

          <VigyaniLiveSim />

        </div>
      </section>

      {/* ===================== CALL TO ACTION ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-14 rounded-3xl bg-slate-50 border border-slate-200 shadow-card flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-left">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#c1121f] block">
                Next-Gen Facility Operations
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-[#0b1d3a] font-display">
                Transform Your Property's Uptime & Value
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                Connect with our senior engineering cadre for a complimentary technical survey, thermography scan, and custom SLA plan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#c1121f] hover:bg-red-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Book Facility Health Audit</span>
                <FiArrowRight />
              </Link>
              {socials?.phone && (
                <a
                  href={`tel:${socials.phone}`}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-[#0b1d3a] font-bold text-sm shadow-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <FiPhone className="text-[#c1121f]" />
                  <span>Call: {socials.phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
