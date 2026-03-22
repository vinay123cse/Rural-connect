


// components/ExpertModal.jsx
const ExpertModal = ({ expert, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Header with Image */}
        <div className="relative h-48 bg-emerald-600">
          <button onClick={onClose} className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white">✕</button>
          <img 
            src={expert.dp} 
            className="absolute -bottom-12 left-10 w-32 h-32 rounded-[2rem] border-4 border-white object-cover shadow-lg"
          />
        </div>

        <div className="pt-16 px-10 pb-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-black text-slate-900">{expert.name}</h2>
              <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm">{expert.category}</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-slate-900">₹{expert.rate}</span>
              <p className="text-slate-400 font-bold text-xs">Per Day / Visit</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8 bg-slate-50 p-6 rounded-[2rem]">
            <div>
              <p className="text-slate-400 font-bold text-xs uppercase">Specialization</p>
              <p className="font-black text-slate-800">{expert.subSkill}</p>
            </div>
            <div>
              <p className="text-slate-400 font-bold text-xs uppercase">Experience</p>
              <p className="font-black text-slate-800">{expert.experience} Years</p>
            </div>
            <div>
              <p className="text-slate-400 font-bold text-xs uppercase">Location</p>
              <p className="font-black text-slate-800">📍 {expert.locationName}</p>
            </div>
            <div>
              <p className="text-slate-400 font-bold text-xs uppercase">Rating</p>
              <p className="font-black text-slate-800">⭐ {expert.rating || "4.8"}/5.0</p>
            </div>
          </div>

          <div className="flex gap-4">
             <a href={`tel:${expert.phone}`} className="flex-1 bg-emerald-600 text-white py-5 rounded-2xl font-black text-center shadow-xl hover:bg-slate-900 transition">
               📞 CALL {expert.name.toUpperCase()}
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertModal;