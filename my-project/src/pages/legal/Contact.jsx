import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-10 pt-20">
      {/* Back Button */}
      <button 
        onClick={() => navigate("/")} 
        className="mb-8 text-emerald-600 font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
      >
        <span>←</span> Back to Home
      </button>

      <div className="text-center">
        <h1 className="text-4xl font-black mb-4 text-slate-900">Contact Support</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions or need assistance with your job search? Our dedicated support team is here to help you 24/7.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Email Support */}
          <div className="p-8 bg-white shadow-xl rounded-2xl border-t-4 border-emerald-500 hover:shadow-2xl transition-shadow">
            <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl text-slate-800">Email Us</h3>
            <p className="text-emerald-600 font-semibold mt-2">support@ruraljobs.com</p>
            <p className="text-xs text-gray-400 mt-4">Response time: Within 24 hours</p>
          </div>

          {/* Phone Support */}
          <div className="p-8 bg-white shadow-xl rounded-2xl border-t-4 border-emerald-500 hover:shadow-2xl transition-shadow">
            <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl text-slate-800">Call Us</h3>
            <p className="text-emerald-600 font-semibold mt-2">1800-RURAL-JOB</p>
            <p className="text-xs text-gray-400 mt-4">Toll-Free (Mon-Sat, 9AM-6PM)</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100">
          <p className="font-bold text-slate-800">Head Office</p>
          <p className="text-sm text-gray-500 mt-1">
            RuralJobs India Private Limited<br />
            Jaipur, Rajasthan, India - 302001
          </p>
        </div>
      </div>
    </div>
  );
};