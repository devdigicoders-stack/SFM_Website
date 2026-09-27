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
  const [activeFacilitySlide, setActiveFacilitySlide] = useState(0);

  const activeBanners = banners.filter(b => b.active !== false);

  const facilityProjects = [
    {
      title: 'Taj Palace Lucknow • 5-Star Central Chiller Operations',
      tag: 'Luxury Hospitality SLA',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      description: 'End-to-end HVAC uptime, automated chiller tube descaling, 100% ITI certified on-site engineering squad, and five-star guest audit adherence.',
      stats: '100% Uptime • Zero Unplanned Outages'
    },
    {
      title: 'Phoenix Palassio • High-Footfall Commercial Hard Services',
      tag: 'Mega Retail Infrastructure',
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80',
      description: 'Multi-megawatt substation maintenance, escalator/elevator backup synchronization, structural facade inspection, and stormwater hydro-pumping.',
      stats: '15-20% Chiller OpEx Reduction'
    },
    {
      title: 'Tier-1 IT Tech Park • 24/7 Server Room Thermal Integrity',
      tag: 'Corporate & Data Center',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      description: 'Precision PAC air conditioning diagnostics, UPS impedance checks, thermal thermography DB logs, and instant breakdown dispatch.',
      stats: '99.99% Server Thermal Stability'
    },
    {
      title: 'Hospital & Healthcare • Sterile Medical Gas & PHE Maintenance',
      tag: 'Critical Healthcare Care',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
      description: 'Operation theater laminar airflow modulation, negative pressure room testing, and hospital-grade sanitization protocols.',
      stats: '100% NABH/JCI Audit Ready'
    }
  ];

  useEffect(() => {
    const fTimer = setInterval(() => {
      setActiveFacilitySlide(prev => (prev + 1) % facilityProjects.length);
    }, 5500);
    return () => clearInterval(fTimer);
  }, [facilityProjects.length]);

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
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
      tag: 'Electrical Cover'
    },
    {
      title: 'HVAC & Chiller Plants',
      description: 'VRV/VRF diagnostics, chiller plant descaling, filter cycles, and compressor load analysis.',
      icon: <FiWind className="text-sky-600 text-2xl" />,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      tag: 'HVAC Systems'
    },
    {
      title: 'Plumbing & Public Health',
      description: 'Hydro-pneumatic pumping overhauls, structural leakage detection, and drainage systems clearing.',
      icon: <FiDroplet className="text-teal-600 text-2xl" />,
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80',
      tag: 'Public Health'
    },
    {
      title: 'Fire & Life Safety Overhauls',
      description: 'Hydrant lines testing, integrated smoke detectors, sprinkler system pressure checks, and emergency logs.',
      icon: <FiAlertOctagon className="text-[#c1121f] text-2xl" />,
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=600&q=80',
      tag: 'Life Safety'
    },
    {
      title: 'ELV & BMS Diagnostics',
      description: 'Low-voltage circuit configs, access control overhauls, CCTV network diagnostics, and sensor calibrations.',
      icon: <FiCpu className="text-purple-600 text-2xl" />,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      tag: 'Automation'
    },
    {
      title: 'Civil & Fit-outs',
      description: 'High-finish carpentry, ceiling fixes, glass glazing adjustments, masonry, and localized paint touch-ups.',
      icon: <FiLayers className="text-emerald-600 text-2xl" />,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
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
      <section className="relative pt-8 pb-12 lg:pt-10 lg:pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
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
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-8">
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
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-[#c1121f] font-bold flex items-center gap-1.5">
                <FiCheckCircle className="text-sm" />
                <span>SFM Single Unified Master SLA</span>
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
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-amber-700 font-bold flex items-center gap-1.5">
                <FiCheckCircle className="text-sm" />
                <span>Vigyani.ai 72h Predictive Alerts</span>
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
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-sky-700 font-bold flex items-center gap-1.5">
                <FiCheckCircle className="text-sm" />
                <span>100% Single-Point Accountability</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== VIDEO & LIVE OPERATIONS SHOWCASE ===================== */}
      <section className="py-10 sm:py-12 bg-slate-900 text-white relative overflow-hidden">
        {/* Ambient Backlight */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800 text-red-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>Operational Video Showcase</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white font-display leading-tight">
                Watch Spartans Engineering in Action
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                From precision chiller descaling and thermography scans to automated IoT telemetry dispatch — see how our certified ITI cadre executes zero-downtime overhauls.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-2xl font-black text-white font-heading">15 Mins</div>
                  <div className="text-xs text-slate-400 mt-0.5">Emergency Triage Time</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-2xl font-black text-[#c1121f] font-heading">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">ESIC & LOTO Backed</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c1121f] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-900/40 cursor-pointer"
                >
                  <span>Request Live On-Site Survey</span>
                  <FiArrowRight />
                </Link>
              </div>
            </div>

            {/* Right Video / Live Demo Box */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950 group">
                
                {/* Embedded High-Quality Tech Video Preview */}
                <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                  <video
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                  >
                    <source
                      src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-robotic-arm-working-in-a-lab-43403-large.mp4"
                      type="video/mp4"
                    />
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live Central Telemetry Hub
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-slate-700/60">
                    <div>
                      <div className="font-bold text-white">Lucknow Central Command</div>
                      <div className="text-[11px] text-slate-400">Monitoring 2,500+ Connected Asset Nodes</div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#c1121f] text-white font-extrabold text-[10px] uppercase">
                      24/7 Active
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================== STATS COUNTER ===================== */}
      <StatsCounter />

      {/* ===================== CORE SERVICES GRID ===================== */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
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
                className="rounded-3xl bg-white border border-slate-200 hover:border-[#0b1d3a] transition-all duration-300 shadow-sm hover:shadow-card-hover group flex flex-col justify-between overflow-hidden"
              >
                {/* Service Visual Header */}
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-slate-900 shadow">
                      {service.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                    {service.icon}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#0b1d3a] font-display mb-2 group-hover:text-[#c1121f] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to="/service-details"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#c1121f] group-hover:translate-x-1 transition-transform pt-3 border-t border-slate-100"
                  >
                    <span>View Scope & SLA Breakdown</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== VIGYANI.AI LIVE TELEMETRY ===================== */}
      <section className="py-10 sm:py-12 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
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

      {/* ===================== INTERACTIVE FACILITY SHOWCASE SLIDER ===================== */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="w-12 h-1 bg-[#c1121f] rounded mb-3"></div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
                Enterprise Case Studies & Deployments
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0b1d3a] font-display">
                Featured Facility Operations in Action
              </h2>
              <p className="text-slate-600 text-base mt-2 max-w-2xl">
                Explore how SFM delivers uninterrupted power, zero chiller outages, and 5-star audit standards across marquee locations.
              </p>
            </div>

            <Link
              to="/clients"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#c1121f] hover:underline"
            >
              <span>View Full Client Portfolio</span>
              <FiChevronRight />
            </Link>
          </div>

          {/* Interactive Slider Box */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-950 aspect-[16/9] sm:aspect-[21/9] min-h-[380px] max-h-[500px] group">
            <img
              key={`facility-${activeFacilitySlide}`}
              src={facilityProjects[activeFacilitySlide].image}
              alt={facilityProjects[activeFacilitySlide].title}
              className="w-full h-full object-cover object-center animate-in fade-in zoom-in-95 duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

            {/* Top Badges */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
              <span className="px-3.5 py-1 rounded-full bg-[#c1121f] text-white text-xs font-black uppercase tracking-wider shadow-lg">
                {facilityProjects[activeFacilitySlide].tag}
              </span>
              <span className="text-xs font-bold text-slate-200 bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                {activeFacilitySlide + 1} / {facilityProjects.length}
              </span>
            </div>

            {/* Bottom Caption & Controls */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white z-20">
              <div className="space-y-1.5 max-w-2xl text-left">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-400 block">
                  {facilityProjects[activeFacilitySlide].stats}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-display leading-snug text-white drop-shadow-md">
                  {facilityProjects[activeFacilitySlide].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl drop-shadow">
                  {facilityProjects[activeFacilitySlide].description}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 mr-2">
                  {facilityProjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveFacilitySlide(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeFacilitySlide === idx ? 'w-8 bg-[#c1121f]' : 'w-2.5 bg-white/40 hover:bg-white'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveFacilitySlide(prev => (prev === 0 ? facilityProjects.length - 1 : prev - 1))}
                  className="p-2.5 rounded-xl bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors cursor-pointer border border-white/10"
                  title="Previous Facility"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveFacilitySlide(prev => (prev + 1) % facilityProjects.length)}
                  className="p-2.5 rounded-xl bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors cursor-pointer border border-white/10"
                  title="Next Facility"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===================== CALL TO ACTION ===================== */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-card flex flex-col lg:flex-row items-center justify-between gap-8">
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
