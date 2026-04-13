

const AboutUs = () => (
  <div className="max-w-4xl mx-auto p-10 pt-24 text-slate-800 text-center">
    <h1 className="text-4xl font-black mb-6">About <span className="text-emerald-600">RURALJOBS</span></h1>
    <p className="text-xl leading-relaxed mb-8">
      We are on a mission to empower the grassroots workforce of India. 
      <strong> RuralJobs</strong> was born with a simple idea: No worker should have to travel 100km for a job that is available in the next village.
    </p>
    <div className="grid md:grid-cols-2 gap-6 text-left">
      <div className="p-6 bg-white shadow-lg rounded-xl border-b-4 border-emerald-500">
        <h3 className="font-bold text-xl mb-2 text-emerald-600">Our Vision</h3>
        <p>To create a technology-driven ecosystem where every rural talent finds its local opportunity.</p>
      </div>
      <div className="p-6 bg-white shadow-lg rounded-xl border-b-4 border-emerald-500">
        <h3 className="font-bold text-xl mb-2 text-emerald-600">Our Impact</h3>
        <p>Connecting thousands of daily wage earners, artisans, and laborers with verified local hirers.</p>
      </div>
    </div>
    <p className="mt-12 font-medium">Made with ❤️ for Rural India.</p>
  </div>
);

export default AboutUs;