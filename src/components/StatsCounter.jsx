import React from 'react';
import { FiUsers, FiTrendingUp, FiShield, FiActivity } from 'react-icons/fi';

export default function StatsCounter() {
  const stats = [
    {
      value: '100%',
      label: 'Verified & Certified Manpower',
      subtext: 'ITI & Diploma qualified technical cadre with background checks',
      icon: <FiUsers className="text-sfm-red text-xl" />,
      border: 'hover:border-red-400'
    },
    {
      value: '85%+',
      label: 'Staff Retention Rate',
      subtext: 'Exceptional training programs & ESIC/PF backing',
      icon: <FiTrendingUp className="text-sky-600 text-xl" />,
      border: 'hover:border-sky-400'
    },
    {
      value: '15-20%',
      label: 'Overhead Cost Reduction',
      subtext: 'Vendor consolidation & CAPEX longevity through synergy',
      icon: <FiActivity className="text-emerald-600 text-xl" />,
      border: 'hover:border-emerald-400'
    },
    {
      value: '100%',
      label: 'LOTO & Safety Compliance',
      subtext: 'Zero liability transfer with ISI-marked insulated PPE',
      icon: <FiShield className="text-amber-600 text-xl" />,
      border: 'hover:border-amber-400'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className={`relative p-6 rounded-3xl bg-white border border-slate-200 transition-all duration-300 group shadow-sm hover:shadow-card-hover overflow-hidden ${item.border}`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span className="text-3xl lg:text-4xl font-black text-sfm-navy font-display tracking-tight">
              {item.value}
            </span>
          </div>
          <h4 className="text-base font-bold text-slate-900 font-display mb-1.5">
            {item.label}
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            {item.subtext}
          </p>
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-sfm-red group-hover:w-full transition-all duration-300"></div>
        </div>
      ))}
    </div>
  );
}
