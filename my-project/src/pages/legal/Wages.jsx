

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Wages = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-slate-800">
      <button onClick={() => navigate("/")} className="mb-6 text-emerald-600 font-bold flex items-center gap-2">
        <span>←</span> Back to Home
      </button>
      
      <h1 className="text-3xl font-black mb-4 text-emerald-600">Daily Wage Guide 2026</h1>
      <p className="mb-8 text-gray-600 italic">
        Ensuring transparency and fair pay for the rural workforce across India.
      </p>

      <div className="overflow-x-auto shadow-sm rounded-lg border border-slate-200">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-600 uppercase text-xs">
            <tr>
              <th className="p-4 border-b">Labor Category</th>
              <th className="p-4 border-b">Estimated Daily Wage (INR)</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            <tr><td className="p-4 font-semibold">Agricultural Labor</td><td className="p-4">₹350 — ₹500</td></tr>
            <tr><td className="p-4 font-semibold">Construction (Skilled Masons)</td><td className="p-4">₹800 — ₹1100</td></tr>
            <tr><td className="p-4 font-semibold">Domestic Help & Cleaning</td><td className="p-4">₹300 — ₹550</td></tr>
            <tr><td className="p-4 font-semibold">Electrician / Plumber / Technician</td><td className="p-4">₹650 — ₹950</td></tr>
            <tr><td className="p-4 font-semibold">General Loading/Unloading</td><td className="p-4">₹400 — ₹600</td></tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-5 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
        <h3 className="font-bold text-blue-900 mb-1">Important Note:</h3>
        <p className="text-sm text-blue-800">
          These rates are based on national averages and may vary depending on your specific state, district, or the complexity of the task. We recommend finalizing the wage via our real-time chat feature before commencing work.
        </p>
      </div>
    </div>
  );
};

export default Wages;