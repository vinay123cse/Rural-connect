

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CareerAdvice = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-slate-800">
      <button onClick={() => navigate("/")} className="mb-6 text-emerald-600 font-bold flex items-center gap-2">
        <span>←</span> Back to Home
      </button>
      
      <h1 className="text-3xl font-black mb-6 text-emerald-600">Career Growth for Rural Talent</h1>
      
      <div className="space-y-10">
        <section className="group">
          <h2 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-emerald-600 transition-colors">
            1. Optimize Your Digital Profile
          </h2>
          <p className="text-gray-600 leading-relaxed">
            On <strong>RuralJobs</strong>, your profile is your digital resume. Ensure you upload a clear professional photo and list all your past work experience. Profiles with complete details are 3x more likely to be contacted by local employers.
          </p>
        </section>

        <section className="group border-t pt-8">
          <h2 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-emerald-600 transition-colors">
            2. Continuous Skill Upgradation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The market is constantly evolving. Whether it's learning modern organic farming techniques or mastering new construction machinery, upgrading your skills allows you to negotiate for higher daily wages and secure long-term contracts.
          </p>
        </section>

        <section className="group border-t pt-8">
          <h2 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-emerald-600 transition-colors">
            3. Communication & Reliability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Professionalism matters. Be polite during chat interactions, be punctual at the job site, and deliver quality work. Building a reputation as a "Trusted Expert" on our platform will ensure a steady stream of local opportunities.
          </p>
        </section>
      </div>

      <div className="mt-16 text-center py-8 bg-slate-900 text-white rounded-2xl">
        <h3 className="text-xl font-bold mb-2">Ready to find your next opportunity?</h3>
        <p className="text-slate-400 text-sm mb-0">Update your RuralJobs profile today and stand out!</p>
      </div>
    </div>
  );
};

export default CareerAdvice;