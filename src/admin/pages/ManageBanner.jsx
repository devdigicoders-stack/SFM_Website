import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { useAdminData } from '../context/AdminDataContext';
import { FiPlus, FiTrash2, FiEdit, FiCheck, FiX, FiImage, FiExternalLink } from 'react-icons/fi';

export default function ManageBanner() {
  const { banners, saveBanner, deleteBanner } = useAdminData();
  const [editingBanner, setEditingBanner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    tagline: '',
    active: true,
    ctaText: 'Request Facility Health Audit',
    ctaLink: '/contact'
  });

  const handleOpenModal = (banner = null) => {
    if (banner) {
      setEditingBanner(banner);
      setFormData({
        title: banner.title,
        subtitle: banner.subtitle,
        tagline: banner.tagline,
        active: banner.active,
        ctaText: banner.ctaText,
        ctaLink: banner.ctaLink
      });
    } else {
      setEditingBanner(null);
      setFormData({
        title: '',
        subtitle: '',
        tagline: 'Spartans Facility Management • June 2026',
        active: true,
        ctaText: 'Request Facility Health Audit',
        ctaLink: '/contact'
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingBanner(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Please enter a banner headline.');
      return;
    }

    saveBanner({
      ...(editingBanner ? { id: editingBanner.id } : {}),
      ...formData
    });

    handleCloseModal();
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <FiImage className="text-[#c1121f]" />
              Manage Banners & Sliders
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Configure homepage hero slides, presentation headings, and CTA button destinations.
            </p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#c1121f] text-white text-xs font-black shadow-md hover:bg-red-700 transition-all cursor-pointer"
          >
            <FiPlus className="text-base" />
            <span>Create New Hero Slide</span>
          </button>
        </div>

        {/* Banners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {banners.map((ban, idx) => (
            <div
              key={ban.id}
              className={`bg-white rounded-2xl border ${ban.active ? 'border-slate-200' : 'border-dashed border-slate-300 opacity-75'} p-6 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-[#0b1d3a] transition-all`}
            >
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                  ban.active ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-500'
                }`}>
                  {ban.active ? 'Active Slide' : 'Draft / Inactive'}
                </span>
              </div>

              <div className="space-y-3 pr-24">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#c1121f]">
                  Slide #{idx + 1} • {ban.tagline}
                </div>
                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  {ban.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ban.subtitle}
                </p>

                <div className="pt-2 flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-500">CTA Target:</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 text-[11px] font-semibold flex items-center gap-1">
                    {ban.ctaText} ({ban.ctaLink})
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => saveBanner({ ...ban, active: !ban.active })}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                    ban.active 
                      ? 'border-slate-200 text-slate-600 hover:bg-slate-50' 
                      : 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  }`}
                >
                  {ban.active ? 'Disable' : 'Set Active'}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenModal(ban)}
                    className="p-2 rounded-lg text-slate-500 hover:text-[#0b1d3a] hover:bg-slate-100 transition-colors cursor-pointer"
                    title="Edit Banner"
                  >
                    <FiEdit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this banner?')) {
                        deleteBanner(ban.id);
                      }
                    }}
                    className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                    title="Delete Banner"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Add / Edit */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                <h3 className="text-sm font-black text-slate-900">
                  {editingBanner ? 'Edit Hero Banner Slide' : 'Create New Hero Banner Slide'}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tagline / Sub-label
                  </label>
                  <input
                    type="text"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 font-medium focus:outline-none focus:border-[#c1121f]"
                    placeholder="e.g. Spartans Facility Management • June 2026 Profile"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Main Slide Headline *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 font-bold focus:outline-none focus:border-[#c1121f]"
                    placeholder="e.g. Strategic Repairs & Maintenance Partner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Sub-heading / Description
                  </label>
                  <textarea
                    rows={3}
                    value={formData.subtitle}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 font-medium focus:outline-none focus:border-[#c1121f]"
                    placeholder="e.g. Pan-India B2B Hard Services & Engineering Excellence..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      CTA Button Text
                    </label>
                    <input
                      type="text"
                      value={formData.ctaText}
                      onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 font-medium focus:outline-none focus:border-[#c1121f]"
                      placeholder="Request Health Audit"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      CTA Redirect Link
                    </label>
                    <input
                      type="text"
                      value={formData.ctaLink}
                      onChange={(e) => setFormData({ ...formData, ctaLink: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 font-medium focus:outline-none focus:border-[#c1121f]"
                      placeholder="/contact or /ifm-services"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="bannerActive"
                    checked={formData.active}
                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                    className="rounded border-slate-300 text-[#c1121f] focus:ring-[#c1121f]"
                  />
                  <label htmlFor="bannerActive" className="text-xs font-bold text-slate-700 cursor-pointer">
                    Display actively on public website hero slider
                  </label>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-[#0b1d3a] text-white hover:bg-slate-800 transition-colors cursor-pointer shadow-md"
                  >
                    {editingBanner ? 'Save Changes' : 'Publish Banner'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
