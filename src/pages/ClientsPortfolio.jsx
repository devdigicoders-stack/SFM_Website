import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { 
  FiAward, 
  FiCheckCircle, 
  FiMapPin, 
  FiLayers, 
  FiArrowRight,
  FiHome,
  FiShoppingBag,
  FiBriefcase,
  FiActivity,
  FiShield
} from 'react-icons/fi';

export default function ClientsPortfolio() {

  const featuredClients = [
    {
      name: 'IndiQube',
      logo: 'IQ',
      logoColor: 'bg-sfm-navy',
      engagement: 'Interiors & Fit-outs',
      tag: 'Civil & Architectural',
      tagColor: 'text-sfm-navy bg-slate-100 border-slate-200',
      icon: <FiLayers className="text-xl text-sfm-red" />,
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80',
      description: 'High-finish interior fit-out work, false ceiling systems, glass partitions, and architectural finish maintenance across IndiQube co-working spaces.'
    },
    {
      name: 'Taj Hotels',
      logo: 'TAJ',
      logoColor: 'bg-sfm-red',
      engagement: 'Technical Services Provider',
      tag: 'Hard Services',
      tagColor: 'text-sfm-red bg-red-50 border-red-200',
      icon: <FiActivity className="text-xl text-sfm-navy" />,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      description: 'Designated technical services partner managing central HVAC, switchgear, plumbing, and ELV systems to maintain 5-star operational standards.'
    },
    {
      name: 'Hilton',
      logo: 'H',
      logoColor: 'bg-sfm-navy',
      engagement: 'Technical & Soft Services',
      tag: 'IFM Bundle',
      tagColor: 'text-sfm-navy bg-blue-50 border-blue-200',
      icon: <FiShield className="text-xl text-sfm-red" />,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
      description: 'Integrated Facility Management covering both hard services (HVAC, electrical, plumbing) and soft services (housekeeping, pest control) under a single SLA.'
    },
    {
      name: 'Land Rover',
      logo: 'LR',
      logoColor: 'bg-slate-800',
      engagement: 'On-call Repairs & AMC',
      tag: 'AMC + Reactive',
      tagColor: 'text-slate-700 bg-slate-100 border-slate-300',
      icon: <FiCheckCircle className="text-xl text-slate-600" />,
      image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=600&q=80',
      description: 'Annual Maintenance Contract and on-call repair services for showroom electrical systems, HVAC units, civil upkeep, and emergency breakdown response.'
    },
    {
      name: 'Bhalla Farms',
      logo: 'BF',
      logoColor: 'bg-sfm-navy',
      engagement: 'IFM Consultancy',
      tag: 'Consultancy',
      tagColor: 'text-sfm-navy bg-slate-100 border-slate-200',
      icon: <FiMapPin className="text-xl text-sfm-red" />,
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&q=80',
      description: 'Integrated Facility Management consultancy services covering operational audit, maintenance planning, vendor sourcing, and facility compliance advisory.'
    }
  ];

  const verticals = [
    {
      name: 'Hospitality',
      icon: <FiHome className="text-2xl text-[#c1121f]" />,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      clients: ['Taj Palace Lucknow', 'Hilton Garden Inn', 'Novotel', 'Hyatt Regency', 'Ginger (An IHCL Brand)', 'Radisson', 'Marriott'],
      highlight: '100% Guest Uptime & 5-Star Audit Readiness',
      description: 'Zero disruption in central air conditioning, banqueting power, high-pressure guest water supply, and luxury aesthetic woodwork.'
    },
    {
      name: 'Retail & Mega Malls',
      icon: <FiShoppingBag className="text-2xl text-sfm-navy" />,
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80',
      clients: ['Phoenix Palassio', 'Lulu Mall'],
      highlight: 'Massive Footfall Hard Services & Civil Upkeep',
      description: 'Chiller plant descaling, emergency escalators/elevators electrical support, exterior glass facade upkeep, and high-volume public health plumbing.'
    },
    {
      name: 'Corporate & Tech Parks',
      icon: <FiBriefcase className="text-2xl text-sfm-navy" />,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      clients: ['IndiQube', 'Land Rover', 'Teleperformance', 'Corporate Headquarters'],
      highlight: '24/7 Power Continuity & Server Room Thermal Integrity',
      description: 'Precision PAC cooling management, UPS load bank tests, rapid electrical breakdown squads, and fit-out services for corporate campuses.'
    },
    {
      name: 'Healthcare & High-Stakes Labs',
      icon: <FiActivity className="text-2xl text-sfm-red" />,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      clients: ['Regional Hospital Networks', 'Diagnostic Labs'],
      highlight: 'Audit-Ready Technical & Medical Compliance',
      description: 'Negative pressure room diagnostics, laminar airflow air handling units (AHU), and strict technical maintenance.'
    },
    {
      name: 'Agri & Estate Properties',
      icon: <FiMapPin className="text-2xl text-sfm-navy" />,
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80',
      clients: ['Bhalla Farms'],
      highlight: 'IFM Consultancy & Facility Advisory',
      description: 'End-to-end IFM consultancy services covering audit, compliance advisory, vendor management, and maintenance planning for large estate properties.'
    }
  ];

  return (
    <AnimatedPage>
      {/* Hero from Slide 6 */}
      <section className="relative py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
            Proven Track Record Across Key Commercial Verticals
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-sfm-navy font-display">
            Our Valued Client Portfolio
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mt-3 leading-relaxed">
            Trusted partner for tier-1 brands across hospitality, retail, and corporate hubs in North India with scalable expansion.
          </p>
        </div>
      </section>

      {/* Flagship Case Study */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-card mb-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-sfm-red block">
                  Featured Strategic Milestone
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-sfm-navy font-display">
                  Taj Palace Lucknow Technical Service Partner
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Appointed as the lead technical service partner for this flagship luxury destination. Managing end-to-end daily engineering oversight, central chillers, and five-star "Audit-Ready" metrics every single day.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="text-2xl font-black text-sfm-navy font-display">100%</span>
                    <span className="text-xs text-slate-500 block mt-1">Uptime on Critical HVAC</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="text-2xl font-black text-sfm-navy font-display">5-Star</span>
                    <span className="text-xs text-slate-500 block mt-1">Audit Score Adherence</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="text-2xl font-black text-sfm-navy font-display">24/7</span>
                    <span className="text-xs text-slate-500 block mt-1">Dedicated ITI Cadre</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-red-50 text-[#c1121f] flex items-center justify-center text-2xl mb-3 shadow-xs">
                  <FiShield />
                </div>
                <h4 className="text-sfm-navy font-bold text-lg font-display">Taj Brand Endorsement</h4>
                <p className="text-xs text-slate-500 mt-2 mb-6">
                  "SFM provides the rare combination of technical depth, discipline, and prompt escalation management required for luxury hotels."
                </p>
                <Link
                  to="/contact"
                  className="w-full py-3 px-4 rounded-xl bg-sfm-navy hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Full Case Study Report</span>
                  <FiArrowRight />
                </Link>
              </div>

            </div>
          </div>

          {/* Featured Client Engagements */}
          <div className="mb-10 text-left">
            <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
              Key Client Engagements
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-sfm-navy font-display mb-6">
              Featured Clients & Services
            </h2>

            {/* Client Portfolio Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredClients.map((client, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
                >
                  {/* Card Header & Preview Image */}
                  <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                    {/* Category Tag (Top Right) */}
                    <div className="absolute top-3 right-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-xs bg-white/95 ${client.tagColor}`}>
                        {client.icon}
                        <span>{client.tag}</span>
                      </span>
                    </div>

                    {/* Client Identity (Bottom Left) */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3">
                      <span className={`w-11 h-11 rounded-xl ${client.logoColor} text-white text-xs font-black flex items-center justify-center shrink-0 shadow-md ring-2 ring-white/20`}>
                        {client.logo}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-white font-bold text-lg font-display truncate drop-shadow-sm">
                          {client.name}
                        </h3>
                        <p className="text-slate-300 text-xs font-medium truncate">
                          {client.engagement}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body & Scope */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                          Scope & Deliverables
                        </span>
                        <div className="h-px bg-slate-100 flex-1"></div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {client.description}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-500 flex items-center gap-1.5">
                        <FiCheckCircle className="text-sfm-red" /> Active Contract
                      </span>
                      <Link
                        to="/contact"
                        className="font-bold text-sfm-red hover:text-red-700 inline-flex items-center gap-1 transition-colors group-hover:translate-x-0.5 duration-200"
                      >
                        Inquire <FiArrowRight className="text-xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Verticals Grid */}
          <div className="mb-10 text-left">
            <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
              Market Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-sfm-navy font-display">
              Preferred Partner for Tier-1 Brands
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verticals.map((vert, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all shadow-sm hover:shadow-card-hover flex flex-col justify-between overflow-hidden group"
              >
                {/* Photo Banner */}
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={vert.image}
                    alt={vert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/95 backdrop-blur shadow-sm flex items-center justify-center">
                      {vert.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-display">{vert.name}</h3>
                      <span className="text-[11px] text-red-300 font-bold">{vert.highlight}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {vert.description}
                    </p>

                    <div className="pt-4 border-t border-slate-200">
                      <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block mb-2">
                        Key Client Portfolio:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {vert.clients.map((c, i) => (
                          <span key={i} className="px-3 py-1 rounded-lg bg-white text-slate-800 text-xs font-semibold border border-slate-200 shadow-xs">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs text-slate-500">White-Label & Direct SLA Models</span>
                    <Link to="/contact" className="text-xs text-sfm-red hover:underline font-bold flex items-center gap-1">
                      Partner With Us <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </AnimatedPage>
  );
}
