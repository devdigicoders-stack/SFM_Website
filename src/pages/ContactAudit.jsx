import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import confetti from 'canvas-confetti';
import { 
  FiCalendar, 
  FiCheckCircle, 
  FiPhoneCall, 
  FiMail, 
  FiMapPin, 
  FiShield, 
  FiArrowRight,
  FiSend
} from 'react-icons/fi';

import { submitEnquiryAPI } from '../services/api';
import { usePublicData } from '../context/PublicDataContext';

export default function ContactAudit() {
  const { socials, homepage } = usePublicData();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: 'Lucknow',
    facilityType: 'Hospitality',
    sqFootage: '50,000 - 150,000 sq ft',
    servicesNeeded: ['HVAC & Chiller Plants', 'Electrical & Power Systems'],
    preferredDate: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const facilityTypes = [
    'Hospitality / 5-Star Hotel',
    'Commercial Shopping Mall',
    'Hospital & Healthcare Hub',
    'Corporate Tech Park',
    'Industrial / Manufacturing Plant',
    'Educational Campus'
  ];

  const servicesList = [
    'HVAC & Chiller Plants',
    'Electrical & Power Systems',
    'Plumbing & Hydro-Pneumatics',
    'Fire & Life Safety Overhauls',
    'ELV & BMS Diagnostics',
    'Civil & Architectural Fit-outs',
    'Luxury Housekeeping & Soft Services',
    'AI-Powered Tracking & Monitoring'
  ];

  const handleServiceToggle = (service) => {
    if (formData.servicesNeeded.includes(service)) {
      setFormData({
        ...formData,
        servicesNeeded: formData.servicesNeeded.filter(s => s !== service)
      });
    } else {
      setFormData({
        ...formData,
        servicesNeeded: [...formData.servicesNeeded, service]
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitEnquiryAPI(formData);
    } catch (err) {
      console.warn('API error:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
      
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <AnimatedPage>
      {/* Hero */}
      <section className="relative py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="w-12 h-1 bg-sfm-red rounded mb-3"></div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
            Call to Action
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-sfm-navy font-display">
            Ready to Modernize Your Operations?
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mt-3 leading-relaxed">
            Transition from reactive firefighting to proactive, tech-led oversight today. Request a comprehensive deep-dive into your facility's health.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Section */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-card">
                
                {submitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-20 h-20 rounded-full bg-red-50 text-sfm-red border border-red-200 flex items-center justify-center mx-auto text-4xl">
                      <FiCheckCircle />
                    </div>
                    <h3 className="text-3xl font-black text-sfm-navy font-display">
                      Audit Request Confirmed!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900">{formData.contactPerson || 'Valued Partner'}</strong>. The <strong className="text-slate-900">Spartans Facility Management — Sales Team</strong> will connect with you shortly.
                    </p>
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 max-w-md mx-auto text-xs text-slate-600 space-y-1">
                      <div>Company: <span className="text-slate-900 font-bold">{formData.companyName || 'Registered Enterprise'}</span></div>
                      <div>Services: <span className="text-sfm-red font-bold">{formData.servicesNeeded.join(', ')}</span></div>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-sfm-navy hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer"
                    >
                      Book Another Facility Audit
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-slate-200 pb-4">
                      <h3 className="text-xl font-bold text-sfm-navy font-display">Technical Assessment & Audit Request</h3>
                      <p className="text-xs text-slate-500">Specify your facility parameters for detailed engineering analysis.</p>
                    </div>

                    {/* Facility Type & Size */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Facility Type
                        </label>
                        <select
                          value={formData.facilityType}
                          onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-sfm-navy"
                        >
                          {facilityTypes.map((ft, idx) => (
                            <option key={idx} value={ft}>{ft}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Approx. Area (Sq. Ft.)
                        </label>
                        <select
                          value={formData.sqFootage}
                          onChange={(e) => setFormData({ ...formData, sqFootage: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-sfm-navy"
                        >
                          <option value="Under 50,000 sq ft">Under 50,000 sq ft</option>
                          <option value="50,000 - 150,000 sq ft">50,000 - 150,000 sq ft</option>
                          <option value="150,000 - 500,000 sq ft">150,000 - 500,000 sq ft</option>
                          <option value="500,000+ sq ft">500,000+ sq ft (Campus)</option>
                        </select>
                      </div>
                    </div>

                    {/* Services Required Checkbox Pills */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Select Focus Audit Capabilities
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {servicesList.map((srv, idx) => {
                          const isSelected = formData.servicesNeeded.includes(srv);
                          return (
                            <button
                              type="button"
                              key={idx}
                              onClick={() => handleServiceToggle(srv)}
                              className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold text-left transition-all border flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? 'bg-red-50 border-sfm-red text-sfm-red font-bold'
                                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                              }`}
                            >
                              <span>{srv}</span>
                              {isSelected && <FiCheckCircle className="text-sfm-red text-sm shrink-0 ml-1" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Organization / Property Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Hotel Grand / Phoenix Center"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-sfm-navy"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Contact Person & Title *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. General Manager / Chief Engineer"
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-sfm-navy"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91-XXXXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-sfm-navy"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Official Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="ops@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-sfm-navy"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Specific Pain Points or Scope Requirements
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Mention any existing chiller issues, statutory audit upcoming dates, or vendor transition timelines..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-sfm-navy"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-sfm-red hover:bg-sfm-crimson text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <span>Submitting Audit Request...</span>
                      ) : (
                        <>
                          <FiSend />
                          <span>Submit Official Audit Request</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

            {/* Right Column: Contact Details (Slide 10 in Deck 2) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Slide 10 Exact Contact Us Card */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-card space-y-6">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-sfm-red block mb-1">
                    Contact Us
                  </span>
                  {socials?.contactPerson && (
                    <h3 className="text-xl sm:text-2xl font-black text-sfm-navy font-display">
                      {socials.contactPerson === 'Sales Team' ? 'Spartans Facility Management — Sales Team' : socials.contactPerson}
                    </h3>
                  )}
                  <p className="text-xs text-sfm-red font-bold">Sales & B2B Alliances</p>
                </div>

                <div className="space-y-4 text-sm">
                  {socials?.phone && (
                    <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      <FiPhoneCall className="text-sfm-red text-xl shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Direct Phone</span>
                        <a href={`tel:${socials.phone}`} className="text-sfm-navy font-bold hover:text-sfm-red transition-colors">
                          {socials.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {socials?.email && (
                    <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      <FiMail className="text-sfm-red text-xl shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Direct Email</span>
                        <a href={`mailto:${socials.email}`} className="text-slate-800 font-medium hover:underline text-xs break-all">
                          {socials.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {socials?.address && (
                    <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      <FiMapPin className="text-sfm-navy text-xl shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Command Hub</span>
                        <span className="text-slate-700 text-xs">
                          {socials.address}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <span className="text-xs text-slate-600 font-semibold">
                    Review our Taj Palace Lucknow technical excellence report.
                  </span>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm text-left">
                <h4 className="text-sm font-bold text-sfm-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FiShield className="text-sfm-red" />
                  What Happens During the Audit?
                </h4>
                <div className="space-y-3.5 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-sfm-red font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-sfm-navy block font-bold">Manpower Optimization Review</strong>
                      <span className="text-slate-600 leading-relaxed">Assess current deployment, shift patterns, productivity and identify opportunities to optimize manpower costs.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-sfm-red font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-sfm-navy block font-bold">Soft Services Assessment</strong>
                      <span className="text-slate-600 leading-relaxed">Review housekeeping practices, deployment, SOPs, consumables, cleaning standards and service quality.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-sfm-red font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-sfm-navy block font-bold">Technical Operations Review</strong>
                      <span className="text-slate-600 leading-relaxed">Evaluate maintenance practices, technician deployment, preventive maintenance and breakdown management.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-sfm-red font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-sfm-navy block font-bold">Cost & Resource Optimization</strong>
                      <span className="text-slate-600 leading-relaxed">Identify opportunities to reduce avoidable operational costs, resource wastage and unnecessary expenses.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-sfm-red font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-sfm-navy block font-bold">SOP & Process Gap Assessment</strong>
                      <span className="text-slate-600 leading-relaxed">Review existing processes and identify gaps in supervision, checklists, reporting and service delivery.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-sfm-red font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-sfm-navy block font-bold">Compliance & Safety Review</strong>
                      <span className="text-slate-600 leading-relaxed">Assess key statutory, safety and operational compliance requirements relevant to the facility.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2 border-t border-slate-200">
                    <span className="w-5 h-5 rounded-full bg-sfm-red text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">7</span>
                    <div>
                      <strong className="text-sfm-navy block font-bold">Actionable Optimization Report</strong>
                      <span className="text-slate-700 leading-relaxed font-medium">Receive a comprehensive report with key observations, cost-saving opportunities and practical recommendations within 48 hours.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

