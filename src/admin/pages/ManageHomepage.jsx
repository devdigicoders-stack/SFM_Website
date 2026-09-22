import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { useAdminData } from '../context/AdminDataContext';
import { FiHome, FiSave, FiCheckCircle } from 'react-icons/fi';

export default function ManageHomepage() {
  const { homepageContent, updateHomepageContent } = useAdminData();
  const [formData, setFormData] = useState({ ...homepageContent });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateHomepageContent(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <FiHome className="text-[#c1121f]" />
              Manage Homepage Content
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Update presentation headlines, hero value propositions, metrics counters, and corporate proof points.
            </p>
          </div>
        </div>

        {savedSuccess && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <FiCheckCircle className="text-emerald-600 text-base" />
            Homepage content saved and updated live across the portal!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main Hero Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100">
              1. Hero Presentation Section
            </h2>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Hero Top Badge Tagline
              </label>
              <input
                type="text"
                value={formData.heroTagline}
                onChange={(e) => setFormData({ ...formData, heroTagline: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#c1121f]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Main Hero Headline (Deck 1 Page 1)
              </label>
              <input
                type="text"
                value={formData.heroHeading}
                onChange={(e) => setFormData({ ...formData, heroHeading: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#c1121f]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Sub-heading (Red Pill Highlight)
              </label>
              <input
                type="text"
                value={formData.heroSubheading}
                onChange={(e) => setFormData({ ...formData, heroSubheading: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#c1121f]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Hero Narrative & Core Mission Statement
              </label>
              <textarea
                rows={3}
                value={formData.heroDescription}
                onChange={(e) => setFormData({ ...formData, heroDescription: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed focus:outline-none focus:border-[#c1121f]"
              />
            </div>
          </div>

          {/* Key Metric Counters */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100">
              2. Trust Metrics & KPI Badges (Proposal Deck)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Client Retention Target
                </label>
                <input
                  type="text"
                  value={formData.retentionRate}
                  onChange={(e) => setFormData({ ...formData, retentionRate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#c1121f]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  OpEx Cost Reduction
                </label>
                <input
                  type="text"
                  value={formData.costReduction}
                  onChange={(e) => setFormData({ ...formData, costReduction: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#c1121f]"
                />
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold text-slate-700">
                Key Differentiator Proof Points
              </label>

              <input
                type="text"
                value={formData.milestone1}
                onChange={(e) => setFormData({ ...formData, milestone1: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#c1121f]"
              />

              <input
                type="text"
                value={formData.milestone2}
                onChange={(e) => setFormData({ ...formData, milestone2: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#c1121f]"
              />

              <input
                type="text"
                value={formData.milestone3}
                onChange={(e) => setFormData({ ...formData, milestone3: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#c1121f]"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0b1d3a] text-white text-xs font-black shadow-lg hover:bg-slate-800 transition-all cursor-pointer"
            >
              <FiSave className="text-base" />
              <span>Save Homepage Changes</span>
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
