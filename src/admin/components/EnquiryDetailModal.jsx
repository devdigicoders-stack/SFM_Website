import React from 'react';
import { 
  FiX, 
  FiUser, 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiCalendar, 
  FiCheckCircle, 
  FiLayers,
  FiFileText
} from 'react-icons/fi';
import { FaBuilding } from 'react-icons/fa';

export default function EnquiryDetailModal({ enquiry, onClose, onStatusChange }) {
  if (!enquiry) return null;

  const statuses = ['Pending', 'Reviewed', 'Scheduled', 'Completed'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-scaleUp my-8">
        
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black px-3 py-1 rounded-full bg-[#0b1d3a] text-white">
              {enquiry.id}
            </span>
            <h3 className="text-lg font-bold text-sfm-navy font-display">
              Facility Audit Details
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Client & Organization Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Organization Name</span>
              <h4 className="text-base font-bold text-sfm-navy flex items-center gap-2">
                <FiBuilding className="text-[#c1121f]" /> {enquiry.companyName}
              </h4>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Contact Person</span>
              <h4 className="text-base font-bold text-sfm-navy flex items-center gap-2">
                <FiUser className="text-sky-600" /> {enquiry.contactPerson}
              </h4>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Direct Phone</span>
              <a href={`tel:${enquiry.phone}`} className="text-sm font-bold text-sfm-navy hover:text-[#c1121f] flex items-center gap-2">
                <FiPhone className="text-emerald-600" /> {enquiry.phone}
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Corporate Email</span>
              <a href={`mailto:${enquiry.email}`} className="text-sm font-bold text-sfm-navy hover:text-[#c1121f] flex items-center gap-2 truncate">
                <FiMail className="text-amber-600" /> {enquiry.email}
              </a>
            </div>
          </div>

          {/* Facility Specifications */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <FiLayers className="text-[#c1121f]" /> Facility Parameters
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400">Facility Type:</span>
                <strong className="block text-slate-800 font-bold">{enquiry.facilityType}</strong>
              </div>
              <div>
                <span className="text-slate-400">Approx Area:</span>
                <strong className="block text-slate-800 font-bold">{enquiry.sqFootage || 'Not specified'}</strong>
              </div>
            </div>
          </div>

          {/* Focus Capabilities Requested */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Focus Capabilities Requested:
            </h5>
            <div className="flex flex-wrap gap-2">
              {enquiry.servicesNeeded && enquiry.servicesNeeded.map((srv, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <FiCheckCircle className="text-emerald-600" /> {srv}
                </span>
              ))}
            </div>
          </div>

          {/* Client Pain Points / Notes */}
          {enquiry.notes && (
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
                <FiFileText /> Client Operational Notes:
              </h5>
              <p className="text-xs text-amber-950 leading-relaxed font-medium">{enquiry.notes}</p>
            </div>
          )}

          {/* Status Updater */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Current Status</span>
              <span className="text-xs font-black text-sfm-navy">{enquiry.status}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600">Update Status:</span>
              <select
                value={enquiry.status}
                onChange={(e) => onStatusChange(enquiry.id, e.target.value)}
                className="bg-white border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-sfm-navy shadow-sm cursor-pointer"
              >
                {statuses.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <a
            href={`tel:${enquiry.phone}`}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <FiPhone /> Call Client
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
