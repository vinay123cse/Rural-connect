// Service Professional Card
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';

const ProCard = ({ name, category, subSkill, locationName, rate, available, experience, rating, dp, color, phone }) => {

  const navigate = useNavigate();
  const { userData } = useContext(AuthContext);

  const handleAction = (action) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to perform this action.");
      navigate("/login");
      return;
    }
    if (action === "call") {
      window.location.href = `tel:${phone}`;
    } else if (action === "chat") {
      toast.success("Chat feature coming soon!");
    }
  }


 return (
  <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 group">
    <div className="flex items-center gap-4 mb-6">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-50">
          <img src={dp} alt={name} className="w-full h-full object-cover" />
        </div>
        {available && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-900 leading-tight">{name}</h3>
          <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg tracking-tighter">⭐ {rating}</span>
        </div>
        <div className={`text-[10px] font-black uppercase tracking-widest mt-1 ${color}`}>
          {category}
        </div>
      </div>
    </div>

    <div className="space-y-2 mb-6">
      <div className="flex justify-between text-sm">
        <span className="text-slate-400 font-bold">Skill</span>
        <span className="text-slate-900 font-bold">{subSkill}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-slate-400 font-bold">Experience</span>
        <span className="text-slate-900 font-bold">{experience}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-slate-400 font-bold">Price</span>
        <span className="text-emerald-700 font-black">{rate}</span>
      </div>
    </div>

    <div className="flex items-center gap-2 text-[12px] font-bold text-slate-400 mb-6 bg-slate-50 p-2 rounded-xl justify-center">
      {/*location object ko handle kiya */}
      <span>📍 {locationName || (typeof location === 'string' ? location : "Rural Area")}</span>
    </div>

    <div className="flex gap-2">
      
      <button 
        onClick={() => handleAction('call')}
       className="flex-1 bg-emerald-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition shadow-xl active:scale-95 text-center">
        📞 Call Now
      </button>
      
      <button 
        onClick={() => handleAction('chat')}
        className="w-14 h-14 border border-slate-200 rounded-2xl flex items-center justify-center hover:bg-slate-50 transition active:scale-90 text-xl">
        Chat
      </button>
    </div>
  </div>
)};

export default ProCard;

// // 1. Destructuring mein 'locationName' add kiya (Jo aapke form mein tha)
// const ProCard = ({ name, category, subSkill, location, locationName, rate, available, experience, rating, dp, color, phone }) => (
//   <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 group">
//     <div className="flex items-center gap-4 mb-6">
//       <div className="relative">
//         <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-50">
//           {/* 2. Fallback Image lagayi agar dp load na ho */}
//           <img 
//             src={dp || "https://via.placeholder.com/150"} 
//             alt={name} 
//             className="w-full h-full object-cover" 
//           />
//         </div>
//         {available && (
//           <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
//         )}
//       </div>
      
//       <div className="flex-1">
//         <div className="flex items-center justify-between">
//           <h3 className="text-lg font-black text-slate-900 leading-tight">{name}</h3>
//           <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg tracking-tighter">⭐ {rating}</span>
//         </div>
//         <div className={`text-[10px] font-black uppercase tracking-widest mt-1 ${color || 'text-emerald-500'}`}>
//           {category}
//         </div>
//       </div>
//     </div>

//     <div className="space-y-2 mb-6">
//       <div className="flex justify-between text-sm">
//         <span className="text-slate-400 font-bold">Skill</span>
//         <span className="text-slate-900 font-bold">{subSkill}</span>
//       </div>
//       <div className="flex justify-between text-sm">
//         <span className="text-slate-400 font-bold">Experience</span>
//         <span className="text-slate-900 font-bold">{experience}</span>
//       </div>
//       <div className="flex justify-between text-sm">
//         <span className="text-slate-400 font-bold">Price</span>
//         {/* ₹ symbol handle kiya */}
//         <span className="text-emerald-700 font-black">₹{rate}</span>
//       </div>
//     </div>

//     <div className="flex items-center gap-2 text-[12px] font-bold text-slate-400 mb-6 bg-slate-50 p-2 rounded-xl justify-center">
//       {/* 3. Sabse important fix: 'location' object ko handle kiya */}
//       <span>📍 {locationName || (typeof location === 'string' ? location : "Rural Area")}</span>
//     </div>

//     <div className="flex gap-2">
//       <a href={`tel:${phone}`} className="flex-1 bg-emerald-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition shadow-xl active:scale-95 text-center">
//         📞 Call Now
//       </a>
//       <button className="w-14 h-14 border border-slate-200 rounded-2xl flex items-center justify-center hover:bg-slate-50 transition active:scale-90 text-xl">
//         💬
//       </button>
//     </div>
//   </div>
// );

// export default ProCard;