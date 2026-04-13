// Service Professional Card
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ProCard = ({ _id, name, category, subSkill, locationName, rate, available, experience, rating, dp, color, phone }) => {

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
    } 
  }

//  const user = JSON.parse(localStorage.getItem("user"));
//  const myId = (userData?.user?.id || userData?.user?._id || user?.id || user?._id)?.toString();

//  const isMyCard = myId === _id.toString();

// 1. Safe parsing (checks if it's a real object string first)
const storedUser = localStorage.getItem("user");
const user = (storedUser && storedUser !== "undefined") ? JSON.parse(storedUser) : null;

// 2. Safe ID extraction (using optional chaining)
const myId = (userData?.user?.id || userData?.user?._id || user?.id || user?._id);

// 3. Safe comparison (using optional chaining on _id to prevent .toString() errors)
const isMyCard = myId && _id ? myId.toString() === _id.toString() : false;




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


    {isMyCard ? (
      <Link to="/editprofile" className="w-full block text-center text-emerald-600 py-2 rounded-lg font-bold hover:text-emerald-700 hover:border-emerald-600 hover: bg-emerald-50s border-emerald-600 border transition-all duration-300 active:scale-95 tracking-widest ease-in-out shadow-sm">
        Edit Profile
      </Link>
    ) : (
    <div className="flex gap-2">
      
      <button 
        onClick={() => handleAction('call')}
       className="flex-1 bg-emerald-600 text-white py-2 rounded-2xl font-black text-xs uppercase hover:bg-emerald-700 transition shadow-xl active:scale-95 text-center text-[10px]">
        📞 Call Now
      </button>
      
      <Link
        to={userData ? `/chat/${_id}` : "/login"}
        onClick={() => handleAction('chat')}
        className="w-14 h-14 border border-slate-400 rounded-2xl flex items-center justify-center hover:bg-slate-50 transition active:scale-90 text-base font-bold">
        Chat
      </Link>
    </div>

    )}
    
  
  </div>
)};

export default ProCard;
