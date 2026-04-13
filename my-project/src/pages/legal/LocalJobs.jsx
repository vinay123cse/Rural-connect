

const Jobs = () => (
  <div className="max-w-4xl mx-auto p-10 pt-24 text-slate-800">
    <h1 className="text-3xl font-black mb-6 text-emerald-600">Find Local Jobs</h1>
    <p className="text-lg mb-6">Connect with verified employers in your village or nearby town.</p>
    
    <div className="space-y-6">
      <div className="p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
        <h3 className="font-bold text-xl">1. Search by Category</h3>
        <p>Choose from categories like Agriculture, Construction, Domestic Help, or Logistics.</p>
      </div>
      <div className="p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
        <h3 className="font-bold text-xl">2. Use Real-Time Chat</h3>
        <p>Directly message the employer to discuss wages and work timings.</p>
      </div>
      <div className="p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
        <h3 className="font-bold text-xl">3. Safety First</h3>
        <p>Always verify the workplace and avoid sharing personal bank details over chat.</p>
      </div>
    </div>
  </div>
);

export default Jobs;