import React, { useState, useEffect } from 'react';
import { 
  FiActivity, 
  FiAlertTriangle, 
  FiCheckCircle, 
  FiCpu, 
  FiZap, 
  FiDroplet, 
  FiWind, 
  FiRefreshCw, 
  FiSliders
} from 'react-icons/fi';

export default function VigyaniLiveSim() {
  const [anomalyTriggered, setAnomalyTriggered] = useState(false);
  const [hvacLoad, setHvacLoad] = useState(74);
  const [dbTemp, setDbTemp] = useState(42);
  const [vibrationIndex, setVibrationIndex] = useState(1.2);
  const [chillerPsi, setChillerPsi] = useState(118);
  const [healthScore, setHealthScore] = useState(99.4);
  const [autoResolving, setAutoResolving] = useState(false);

  // Live pulsing simulation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!anomalyTriggered && !autoResolving) {
        setHvacLoad(prev => +(72 + Math.random() * 4).toFixed(1));
        setDbTemp(prev => +(41 + Math.random() * 2).toFixed(1));
        setVibrationIndex(prev => +(1.1 + Math.random() * 0.2).toFixed(2));
        setChillerPsi(prev => Math.floor(115 + Math.random() * 5));
        setHealthScore(prev => +(99.2 + Math.random() * 0.6).toFixed(1));
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [anomalyTriggered, autoResolving]);

  const triggerAnomaly = () => {
    setAnomalyTriggered(true);
    setHvacLoad(96.8);
    setDbTemp(68.5);
    setVibrationIndex(4.8);
    setChillerPsi(164);
    setHealthScore(64.2);
  };

  const autoResolve = () => {
    setAutoResolving(true);
    setTimeout(() => {
      setAnomalyTriggered(false);
      setHvacLoad(73.5);
      setDbTemp(42.0);
      setVibrationIndex(1.18);
      setChillerPsi(118);
      setHealthScore(99.5);
      setAutoResolving(false);
    }, 1800);
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl relative overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 shadow-sm">
            <FiCpu className="text-2xl" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-bold text-sfm-navy font-display">Vigyani.ai Smart Telemetry</h4>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800 border border-sky-200">
                LIVE IoT v2.4
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Intelligence Over Intuition • Real-Time Predictive Telemetry
            </p>
          </div>
        </div>

        {/* Global Health Indicator */}
        <div className="flex items-center gap-3 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200">
          <div className="text-right">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">System Health</span>
            <span className={`text-xl font-black font-display transition-colors duration-300 ${
              anomalyTriggered ? 'text-sfm-red' : 'text-emerald-600'
            }`}>
              {healthScore}%
            </span>
          </div>
          <div className={`w-3.5 h-3.5 rounded-full ${
            anomalyTriggered ? 'bg-sfm-red animate-ping' : 'bg-emerald-500'
          }`}></div>
        </div>
      </div>

      {/* Live Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        
        {/* Sensor 1: HVAC Load */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between text-slate-600 text-xs mb-2">
            <span className="flex items-center gap-1.5 font-bold">
              <FiWind className="text-sky-600" /> Chiller Load
            </span>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
              hvacLoad > 85 ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-800'
            }`}>
              {hvacLoad > 85 ? 'OVERLOAD' : 'NOMINAL'}
            </span>
          </div>
          <div className="text-2xl font-black text-slate-900 font-display">{hvacLoad}%</div>
          <div className="w-full bg-slate-200 h-2 rounded-full mt-3 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${hvacLoad > 85 ? 'bg-sfm-red' : 'bg-sky-600'}`}
              style={{ width: `${Math.min(hvacLoad, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Sensor 2: DB Panel Thermal */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between text-slate-600 text-xs mb-2">
            <span className="flex items-center gap-1.5 font-bold">
              <FiZap className="text-amber-600" /> DB Panel Temp
            </span>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
              dbTemp > 55 ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-800'
            }`}>
              {dbTemp > 55 ? 'HIGH' : 'NORMAL'}
            </span>
          </div>
          <div className="text-2xl font-black text-slate-900 font-display">{dbTemp}°C</div>
          <div className="w-full bg-slate-200 h-2 rounded-full mt-3 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${dbTemp > 55 ? 'bg-sfm-red' : 'bg-amber-500'}`}
              style={{ width: `${(dbTemp / 80) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Sensor 3: Vibration Harmonics */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between text-slate-600 text-xs mb-2">
            <span className="flex items-center gap-1.5 font-bold">
              <FiActivity className="text-purple-600" /> Motor Vibration
            </span>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
              vibrationIndex > 3.0 ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-800'
            }`}>
              {vibrationIndex > 3.0 ? 'CRITICAL' : 'OPTIMAL'}
            </span>
          </div>
          <div className="text-2xl font-black text-slate-900 font-display">{vibrationIndex} mm/s</div>
          <div className="w-full bg-slate-200 h-2 rounded-full mt-3 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${vibrationIndex > 3.0 ? 'bg-sfm-red' : 'bg-purple-600'}`}
              style={{ width: `${Math.min((vibrationIndex / 5) * 100, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Sensor 4: Hydro-Pneumatic Line */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between text-slate-600 text-xs mb-2">
            <span className="flex items-center gap-1.5 font-bold">
              <FiDroplet className="text-teal-600" /> Hydro Pump
            </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
              STABLE
            </span>
          </div>
          <div className="text-2xl font-black text-slate-900 font-display">{chillerPsi} PSI</div>
          <div className="w-full bg-slate-200 h-2 rounded-full mt-3 overflow-hidden">
            <div 
              className="h-full rounded-full bg-teal-600 transition-all duration-500"
              style={{ width: `${(chillerPsi / 180) * 100}%` }}
            ></div>
          </div>
        </div>

      </div>

      {/* Alert Notification Banner when Anomaly occurs */}
      {anomalyTriggered ? (
        <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-bounce-short">
          <div className="flex items-center gap-3">
            <FiAlertTriangle className="text-sfm-red text-2xl shrink-0" />
            <div>
              <strong className="text-slate-900 text-sm block font-bold">
                [PREDICTIVE ALERT]: AHU-04 Bearing Degradation & DB Spike Detected
              </strong>
              <span className="text-xs text-slate-600">
                AI dispatched automated SMS rapid repair ticket #SFM-9042 before guest impact.
              </span>
            </div>
          </div>
          <button
            onClick={autoResolve}
            disabled={autoResolving}
            className="px-4 py-2 rounded-xl bg-sfm-navy text-white hover:bg-slate-800 font-bold text-xs flex items-center gap-2 shadow-sm shrink-0 cursor-pointer"
          >
            {autoResolving ? (
              <>
                <FiRefreshCw className="animate-spin" /> Auto-Calibrating...
              </>
            ) : (
              <>
                <FiCheckCircle className="text-emerald-400" /> Auto-Heal & Reset
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="mb-6 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs text-emerald-900 font-medium">
          <div className="flex items-center gap-2.5">
            <FiCheckCircle className="text-emerald-600 text-base shrink-0" />
            <span>AI Predictive Engine continuously analyzing 4,200+ telemetry points across all client assets. Zero guest downtime.</span>
          </div>
        </div>
      )}

      {/* Interactive Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs">
        <div className="text-slate-500 flex items-center gap-2 font-semibold">
          <FiSliders className="text-sky-700" />
          <span>Interactive Simulation Demo:</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={triggerAnomaly}
            disabled={anomalyTriggered}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              anomalyTriggered
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-red-50 text-sfm-red border border-red-200 hover:bg-sfm-red hover:text-white'
            }`}
          >
            ⚠️ Simulate HVAC Failure
          </button>
          <button
            onClick={autoResolve}
            className="px-4 py-2 rounded-xl font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 cursor-pointer flex items-center gap-1.5"
          >
            <FiRefreshCw className={autoResolving ? 'animate-spin' : ''} /> Reset Nominal
          </button>
        </div>
      </div>
    </div>
  );
}
