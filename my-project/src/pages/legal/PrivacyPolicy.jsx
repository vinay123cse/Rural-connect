

import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-800 leading-relaxed">
      <h1 className="text-4xl font-black mb-6 text-slate-900 border-b-8 border-emerald-500/30 pb-2">
        Privacy Policy
      </h1>
      
      <p className="mb-8 text-gray-500 font-medium">Effective Date: April 13, 2026</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">1. Introduction</h2>
        <p>
          Welcome to <strong>RuralJobs</strong> (accessible via <strong>ruraljobs.co.in</strong>). We are committed to protecting your personal information and your right to privacy. This policy explains how we collect, use, and safeguard your data when you use our platform to find or post local opportunities.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">2. Information We Collect</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Personal Data:</strong> We collect phone numbers and passwords (encrypted) during signup.</li>
          <li><strong>Profile Data:</strong> Names, skills, and categories provided in the Expert Profile form.</li>
          <li><strong>Geographic Data:</strong> With your consent, we collect location coordinates to show you nearby jobs.</li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-slate-50 border-l-4 border-emerald-500 rounded-r-lg">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">3. Google AdSense & Cookies</h2>
        <p className="mb-4">
          We use <strong>Google AdSense</strong> to serve advertisements. Google, as a third-party vendor, uses cookies to serve ads based on your visit to this and other websites on the Internet.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-sm">
          <li>Google's use of advertising cookies enables it and its partners to serve ads based on your visits.</li>
          <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 underline" target="_blank">Google Ad Settings</a>.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">4. How We Use Your Data</h2>
        <p>Your data is used solely to:</p>
        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li>Connect workers with local hirers.</li>
          <li>Improve our real-time chat and search features.</li>
          <li>Maintain the security of your account.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">5. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please reach out:
          <br /><br />
          <strong>Email:</strong> support@ruraljobs.com
          <br />
          <strong>Address:</strong> Jaipur, Rajasthan, India
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;