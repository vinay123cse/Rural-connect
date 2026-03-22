import { useState } from "react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import {client} from "../context/authContext"


const ExpertProfileForm = () => {
  const { updateProfile, token } = useContext(AuthContext);

    const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    subSkill: "",
    experience: "",
    rate: "",
    rating: 0,
    available: true,
    dp: "",
    color: "text-emerald-500",
    locationName: "",
  
  });
  
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.name || !formData.category || !formData.subSkill || !formData.experience || !formData.rate || !formData.locationName || !formData.dp || !formData.rating) {
      toast.error("Please fill all required fields!");
      return;
    }
    
    try{
      const response = await updateProfile(formData);
      if(response){
        toast.success("Profile updated successfully!");
        Navigate("/");
      }

    }catch(error){
      console.error(error.message || "Profile update failed");
    }

    

  };

  return (

    <div className="min-h-screen bg-slate-50 pb-10">
     
        <div className="flex items-center justify-between border-b p-4 bg-white sticky top-0 z-10">
         <button onClick={() => Navigate(-1)} className="text-emerald-600 font bold">
          ← Back
         </button>
         <h2 className="font-bold text-slate-800">Complete Your Profile</h2>
         <div className="w-10"></div>
        </div>
      
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 bg-white shadow rounded space-y-4 my-auto mt-10"
      >
        
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-emerald-400"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-emerald-400"
        >
          <option value="">Select Category</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="technical">Technical</option>
          <option value="agriculture">Agriculture</option>
        </select>

        <input
          type="text"
          name="subSkill"
          value={formData.subSkill}
          placeholder="Sub Skill (e.g. Maths Teacher)"
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-emerald-400"
        />

        <input
          type="text"
          name="experience"
          value={formData.experience}
          placeholder="Experience (e.g. 5 years)"
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-emerald-400"
        />

        <input
          type="text"
          name="rate"
          value={formData.rate}
          placeholder="Rate (₹/day)"
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-emerald-400"
        />

        <input
          type="number"
          name="rating"
          value={formData.rating}
          placeholder="Rating"
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-emerald-400"
        />

        <input
          type="text"
          name="dp"
          value={formData.dp}
          placeholder="Profile Image URL"
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-emerald-400"
        />

        <input
          type="text"
          name="locationName"
          value={formData.locationName}
          placeholder="Location Name (Village / City)"
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-emerald-400"
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="available"
            
            checked={formData.available}
            onChange={handleChange}
            className="h-4 w-4"
          />
          Available for work
        </label>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 rounded"
        >
          Save Profile
        </button>
      </form>
    </div>
    
  );
};

export default ExpertProfileForm;
