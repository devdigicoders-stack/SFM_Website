import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import DashboardCharts from '../components/DashboardCharts';
import EnquiryDetailModal from '../components/EnquiryDetailModal';
import { useAdminData } from '../context/AdminDataContext';
import { 
  FiInbox, 
  FiClock, 
  FiCheckCircle, 
  FiEdit3, 
  FiArrowRight, 
  FiPlus, 
  FiEye, 
  FiActivity,
  FiTrendingUp,
  FiLayers
} from 'react-icons/fi';

export default function AdminDashboard() {
  const { enquiries, updateEnquiryStatus, blogs, categories } = useAdminData();
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const pendingCount = enquiries.filter(e => e.status === 'Pending').length;
  const scheduledCount = enquiries.filter(e => e.status === 'Scheduled').length;
  const completedCount = enquiries.filter(e => e.status === 'Completed').length;

  const stats = [
    {
      label: 'Total Audit Inquiries',
      value: enquiries.length,
      subtext: '+4 incoming this week',
      icon: <FiInbox className="text-xl text-sky-700" />,
      color: 'border-sky-200'
    },
    {
      label: 'Pending Review',
      value: pendingCount,
      subtext: 'Requires engineer triage',
      icon: <FiClock className="text-xl text-[#c1121f]" />,
      color: 'border-red-200'
    },
    {
      label: 'Audits Scheduled',
      value: scheduledCount,
      subtext: 'Taj & Phoenix Palassio',
      icon: <FiCheckCircle className="text-xl text-emerald-600" />,
      color: 'border-emerald-200'
    },
    {
      label: 'Knowledge Hub Articles',
      value: blogs.length,
      subtext: `${categories.length} Active Categories`,
      icon: <FiEdit3 className="text-xl text-purple-600" />,
      color: 'border-purple-200'
    }
  ];

  return (
    <AdminLayout title="Executive Overview Dashboard">
      <div className="space-y-8">
        
        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl bg-white border border-slate-200 shadow-card transition-all hover:shadow-card-hover ${st.color}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {st.label}
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                  {st.icon}
                </div>
              </div>
              <div className="text-3xl font-black text-sfm-navy font-display mb-1">
                {st.value}
              </div>
              <span className="text-xs text-slate-500 font-medium">
                {st.subtext}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Charts & Graphs Section */}
        <DashboardCharts />

        {/* Recent Inquiries & Quick Action Shortcuts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Recent Inquiries Table */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-card space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                  Incoming Pipeline
                </span>
                <h3 className="text-lg font-bold text-sfm-navy font-display">
                  Recent Facility Audit Requests
                </h3>
              </div>
              <Link
                to="/admin/enquiries"
                className="text-xs font-bold text-[#c1121f] hover:underline flex items-center gap-1"
              >
                <span>View All ({enquiries.length})</span>
                <FiArrowRight />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 uppercase font-extrabold text-[10px]">
                    <th className="pb-3">Client / Organization</th>
                    <th className="pb-3">Facility Type</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {enquiries.slice(0, 4).map((enq) => (
                    <tr key={enq.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 pr-2">
                        <span className="font-bold text-sfm-navy block text-xs">{enq.companyName}</span>
                        <span className="text-[11px] text-slate-500">{enq.contactPerson}</span>
                      </td>
                      <td className="py-3.5 text-slate-600 font-medium">{enq.facilityType}</td>
                      <td className="py-3.5">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                          enq.status === 'Completed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : enq.status === 'Scheduled'
                            ? 'bg-sky-100 text-sky-800'
                            : enq.status === 'Reviewed'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-red-100 text-[#c1121f]'
                        }`}>
                          {enq.status}
                        </span>
                      </td>
                      <td className="py-3.5 text-right">
                        <button
                          onClick={() => setSelectedEnquiry(enq)}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-sfm-navy font-bold text-xs transition-colors cursor-pointer"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-card space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                Executive Shortcuts
              </span>
              <h3 className="text-lg font-bold text-sfm-navy font-display">
                Quick Content Actions
              </h3>
            </div>

            <div className="space-y-3">
              <Link
                to="/admin/blogs"
                className="w-full p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-50 text-purple-700">
                    <FiPlus />
                  </div>
                  <div className="text-left">
                    <strong className="text-xs font-bold text-sfm-navy block">Write New Blog Article</strong>
                    <span className="text-[11px] text-slate-500">Rich text editor with tags</span>
                  </div>
                </div>
                <FiArrowRight className="text-xs text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/admin/banners"
                className="w-full p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-sky-50 text-sky-700">
                    <FiLayers />
                  </div>
                  <div className="text-left">
                    <strong className="text-xs font-bold text-sfm-navy block">Manage Hero Banners</strong>
                    <span className="text-[11px] text-slate-500">Update slider headlines</span>
                  </div>
                </div>
                <FiArrowRight className="text-xs text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/admin/social-links"
                className="w-full p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                    <FiActivity />
                  </div>
                  <div className="text-left">
                    <strong className="text-xs font-bold text-sfm-navy block">Update WhatsApp / Phone</strong>
                    <span className="text-[11px] text-slate-500">Pranjal Gupta: +91-8299726346</span>
                  </div>
                </div>
                <FiArrowRight className="text-xs text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* Enquiry Detail Modal */}
      {selectedEnquiry && (
        <EnquiryDetailModal
          enquiry={selectedEnquiry}
          onClose={() => setSelectedEnquiry(null)}
          onStatusChange={(id, status) => {
            updateEnquiryStatus(id, status);
            setSelectedEnquiry(prev => ({ ...prev, status }));
          }}
        />
      )}
    </AdminLayout>
  );
}
