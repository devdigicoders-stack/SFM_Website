import React, { useState } from 'react';
import { FiTrendingUp, FiPieChart, FiActivity, FiLayers } from 'react-icons/fi';

export default function DashboardCharts() {
  const [hoveredMonth, setHoveredMonth] = useState(null);

  const monthlyData = [
    { month: 'Jan', enquiries: 14, audits: 8, height: '40%' },
    { month: 'Feb', enquiries: 22, audits: 12, height: '55%' },
    { month: 'Mar', enquiries: 35, audits: 19, height: '70%' },
    { month: 'Apr', enquiries: 28, audits: 16, height: '62%' },
    { month: 'May', enquiries: 42, audits: 26, height: '85%' },
    { month: 'Jun', enquiries: 56, audits: 34, height: '100%' },
  ];

  const sectorBreakdown = [
    { label: 'Hospitality / 5-Star', value: '45%', color: 'bg-[#c1121f]', count: '18 Sites' },
    { label: 'Retail & Mega Malls', value: '25%', color: 'bg-sky-600', count: '10 Sites' },
    { label: 'Corporate Tech Parks', value: '18%', color: 'bg-[#0b1d3a]', count: '7 Sites' },
    { label: 'Healthcare & Hospitals', value: '12%', color: 'bg-emerald-600', count: '5 Sites' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* 1. Monthly Enquiries & Audits Trend Chart */}
      <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-card">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
              Lead Growth Telemetry
            </span>
            <h3 className="text-xl font-bold text-sfm-navy font-display flex items-center gap-2">
              <FiTrendingUp className="text-[#c1121f]" /> Monthly Audit Inquiries & Conversions
            </h3>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#0b1d3a]"></span>
              <span className="text-slate-600 font-medium">Inquiries</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#c1121f]"></span>
              <span className="text-slate-600 font-medium">Audits Done</span>
            </div>
          </div>
        </div>

        {/* Bar Chart Visualizer */}
        <div className="h-64 flex items-end justify-between gap-3 pt-8 pb-2 px-2 border-b border-slate-100">
          {monthlyData.map((d, i) => (
            <div 
              key={i} 
              className="flex-1 flex flex-col items-center gap-2 h-full justify-end group relative cursor-pointer"
              onMouseEnter={() => setHoveredMonth(d)}
              onMouseLeave={() => setHoveredMonth(null)}
            >
              {/* Tooltip on hover */}
              {hoveredMonth?.month === d.month && (
                <div className="absolute -top-12 z-20 bg-slate-900 text-white text-[11px] font-bold py-1 px-2.5 rounded-lg shadow-lg whitespace-nowrap animate-fadeIn">
                  {d.month}: {d.enquiries} Leads ({d.audits} Audits)
                </div>
              )}

              <div className="w-full max-w-[42px] flex items-end justify-center gap-1.5 h-full">
                {/* Enquiries Bar */}
                <div 
                  className="w-1/2 bg-[#0b1d3a] group-hover:bg-[#1e3a8a] rounded-t-lg transition-all duration-300"
                  style={{ height: d.height }}
                ></div>
                {/* Audits Bar */}
                <div 
                  className="w-1/2 bg-[#c1121f] group-hover:bg-[#a50f1a] rounded-t-lg transition-all duration-300"
                  style={{ height: `${parseInt(d.height) * 0.65}%` }}
                ></div>
              </div>
              <span className="text-xs font-bold text-slate-500">{d.month}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-4">
          <span>H1 2026 Cumulative Pipeline</span>
          <span className="text-emerald-600 font-bold flex items-center gap-1">
            <FiActivity /> +48% MoM Lead Velocity
          </span>
        </div>
      </div>

      {/* 2. Facility Sector Distribution (Donut Breakdown) */}
      <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-card flex flex-col justify-between">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
            Sector Breakdown
          </span>
          <h3 className="text-xl font-bold text-sfm-navy font-display mb-6 flex items-center gap-2">
            <FiPieChart className="text-sky-600" /> Facility Mix
          </h3>

          {/* Visual Sector Bars */}
          <div className="space-y-4">
            {sectorBreakdown.map((sec, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">{sec.label}</span>
                  <span className="font-extrabold text-slate-900">{sec.value}</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${sec.color} transition-all duration-700`}
                    style={{ width: sec.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Uptime Status */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-800">SLA Performance</span>
          </div>
          <span className="text-sm font-black text-emerald-600 font-display">99.98%</span>
        </div>
      </div>

    </div>
  );
}
