import React from 'react';
import { useAdminAuth } from '../context/AdminAuthContext';
import { useAdminData } from '../context/AdminDataContext';
import {
  FiMenu,
  FiBell,
  FiUser,
  FiLogOut,
  FiExternalLink,
  FiSearch
} from 'react-icons/fi';

export default function AdminHeader({ onOpenMobileSidebar, title = 'Dashboard' }) {
  const { adminUser, logout } = useAdminAuth();
  const { enquiries } = useAdminData();
  const pendingCount = enquiries.filter(e => e.status === 'Pending').length;

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 h-20 px-4 sm:px-8 flex items-center justify-between shadow-sm">
      {/* Left: Mobile Toggle & Page Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={onOpenMobileSidebar}
          className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
        >
          <FiMenu className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-sfm-navy font-display">
            {title}
          </h1>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            Spartans Facility Management Admin Suite
          </span>
        </div>
      </div>

      {/* Right: Actions, Notifications & Profile */}
      <div className="flex items-center gap-3 sm:gap-4">

        {/*  */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
        >
          <span>Live Site</span>
          <FiExternalLink className="text-[10px]" />
        </a>

        {/* Notifications Icon with pending count badge */}
        <div className="relative p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer">
          <FiBell className="w-4 h-4" />
          {pendingCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#c1121f] text-white text-[9px] font-black flex items-center justify-center">
              {pendingCount}
            </span>
          )}
        </div>

        {/* Admin Profile Chip */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
          <div className="w-9 h-9 rounded-xl bg-[#0b1d3a] text-white flex items-center justify-center font-black text-xs font-display shadow-sm">
            {adminUser.avatar || 'PG'}
          </div>
          <div className="hidden md:block text-left">
            <span className="text-xs font-bold text-sfm-navy block leading-tight">
              {adminUser.name}
            </span>
            <span className="text-[10px] text-slate-400 font-semibold block">
              {adminUser.role}
            </span>
          </div>

          <button
            onClick={logout}
            title="Logout"
            className="p-2 rounded-xl text-slate-400 hover:text-[#c1121f] hover:bg-red-50 transition-colors cursor-pointer"
          >
            <FiLogOut className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
}
