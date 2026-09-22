import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import EnquiryDetailModal from '../components/EnquiryDetailModal';
import { useAdminData } from '../context/AdminDataContext';
import { 
  FiSearch, 
  FiFilter, 
  FiDownload, 
  FiEye, 
  FiTrash2, 
  FiPhone, 
  FiMail, 
  FiCheckCircle, 
  FiClock,
  FiPlus
} from 'react-icons/fi';
import { FaBuilding } from 'react-icons/fa';

export default function ManageEnquiry() {
  const { enquiries, updateEnquiryStatus, deleteEnquiry } = useAdminData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const statuses = ['All', 'Pending', 'Reviewed', 'Scheduled', 'Completed'];

  // Filter & Search Logic
  const filteredEnquiries = enquiries.filter((item) => {
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
    const matchesSearch = 
      item.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Export to CSV Function
  const handleExportCSV = () => {
    const headers = ['ID,Company,Contact Person,Phone,Email,Facility Type,Sq Footage,Status,Date\n'];
    const rows = filteredEnquiries.map(e => 
      `"${e.id}","${e.companyName}","${e.contactPerson}","${e.phone}","${e.email}","${e.facilityType}","${e.sqFootage}","${e.status}","${e.date}"\n`
    );
    const blob = new Blob([...headers, ...rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sfm_enquiries_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <AdminLayout title="Manage Facility Audit Enquiries">
      <div className="space-y-6">
        
        {/* Top Control Bar */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search company, phone, lead ID..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sfm-navy font-medium"
            />
          </div>

          {/* Status Filter Tabs & Export */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              {statuses.map(st => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedStatus === st
                      ? 'bg-white text-sfm-navy shadow-sm'
                      : 'text-slate-600 hover:text-sfm-navy'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            <button
              onClick={handleExportCSV}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FiDownload />
              <span>Export CSV</span>
            </button>
          </div>

        </div>

        {/* Enquiries Table */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Showing {filteredEnquiries.length} Audit Inquiries
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 uppercase font-extrabold text-[10px]">
                  <th className="pb-3 px-3">Lead ID</th>
                  <th className="pb-3">Organization & Contact</th>
                  <th className="pb-3">Facility Type & Size</th>
                  <th className="pb-3">Focus Scope</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right pr-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-12 text-center text-slate-400">
                      No matching facility audit inquiries found.
                    </td>
                  </tr>
                ) : (
                  filteredEnquiries.map((enq) => (
                    <tr key={enq.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-3 font-mono font-bold text-sfm-navy text-xs">
                        {enq.id}
                      </td>
                      <td className="py-4 pr-3">
                        <strong className="text-sm font-bold text-sfm-navy block font-display">
                          {enq.companyName}
                        </strong>
                        <span className="text-[11px] text-slate-500 block">{enq.contactPerson}</span>
                        <span className="text-[11px] text-slate-400 font-mono">{enq.phone} • {enq.email}</span>
                      </td>
                      <td className="py-4 pr-3">
                        <span className="font-bold text-slate-800 block text-xs">{enq.facilityType}</span>
                        <span className="text-[11px] text-slate-500">{enq.sqFootage || 'Standard Area'}</span>
                      </td>
                      <td className="py-4 pr-3">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {enq.servicesNeeded && enq.servicesNeeded.slice(0, 2).map((s, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">
                              {s.split('&')[0]}
                            </span>
                          ))}
                          {enq.servicesNeeded && enq.servicesNeeded.length > 2 && (
                            <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-bold">
                              +{enq.servicesNeeded.length - 2} more
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4">
                        <select
                          value={enq.status}
                          onChange={(e) => updateEnquiryStatus(enq.id, e.target.value)}
                          className={`px-2.5 py-1 rounded-xl text-[11px] font-bold border focus:outline-none cursor-pointer ${
                            enq.status === 'Completed'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : enq.status === 'Scheduled'
                              ? 'bg-sky-50 text-sky-800 border-sky-300'
                              : enq.status === 'Reviewed'
                              ? 'bg-amber-50 text-amber-800 border-amber-300'
                              : 'bg-red-50 text-[#c1121f] border-red-300'
                          }`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Reviewed">Reviewed</option>
                          <option value="Scheduled">Scheduled</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                      <td className="py-4 text-right pr-3 space-x-2">
                        <button
                          onClick={() => setSelectedEnquiry(enq)}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-sfm-navy font-bold text-xs transition-colors cursor-pointer"
                        >
                          View
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to delete inquiry from ${enq.companyName}?`)) {
                              deleteEnquiry(enq.id);
                            }
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
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
