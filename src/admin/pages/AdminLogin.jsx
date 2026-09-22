import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext';
import SfmLogo from '../../components/SfmLogo';
import { 
  FiMail, 
  FiLock, 
  FiArrowRight, 
  FiAlertCircle, 
  FiCheckCircle,
  FiShield,
  FiEye,
  FiEyeOff
} from 'react-icons/fi';

export default function AdminLogin() {
  const { login, defaultCredentials } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const res = login(email, password);
      setLoading(false);

      if (res.success) {
        const from = location.state?.from?.pathname || '/admin/dashboard';
        navigate(from, { replace: true });
      } else {
        setError(res.message);
      }
    }, 600);
  };

  const handleQuickDemoFill = () => {
    setEmail(defaultCredentials.email);
    setPassword(defaultCredentials.password);
    setError('');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-2xl bg-white border border-slate-200 shadow-sm mb-4">
            <SfmLogo size="md" showTagline={false} lightMode={true} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-sfm-navy font-display">
            SFM Executive Admin Portal
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Spartans Facility Management • B2B Command Suite
          </p>
        </div>

        {/* Login Box */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card space-y-6">
          
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-sfm-navy font-display">
              Administrator Authentication
            </h3>
            <p className="text-xs text-slate-400">
              Enter your authorized corporate credentials to access the panel.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-[#c1121f] font-bold flex items-center gap-2 animate-shake">
              <FiAlertCircle className="text-base shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Official Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@spartansfacility.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-sfm-navy focus:bg-white transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Security Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-3 text-sm text-slate-800 focus:outline-none focus:border-sfm-navy focus:bg-white transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-[#c1121f] hover:bg-[#a50f1a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {loading ? (
                <span>Verifying Credentials...</span>
              ) : (
                <>
                  <span>Sign In to Executive Dashboard</span>
                  <FiArrowRight />
                </>
              )}
            </button>
          </form>

          {/* Preset Demo Credentials Fill */}
          <div className="pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={handleQuickDemoFill}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <FiCheckCircle className="text-emerald-600" />
              <span>Fill Default Demo Credentials</span>
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-slate-400">
          <span>Protected by SFM Enterprise Security Layer • </span>
          <a href="/" className="text-[#0b1d3a] hover:underline font-bold">Return to Website</a>
        </div>

      </div>
    </div>
  );
}
