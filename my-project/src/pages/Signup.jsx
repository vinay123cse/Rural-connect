import React, { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Signup() {
  const { signup } = useContext(AuthContext);

  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      phone: formData.phone,
      password: formData.password,
    };
    try{
     await signup(payload);
      setSuccess(true);
      toast.success("Signup successful! Redirecting to home page...");
    }catch(error){
      setError(error.message || "Signup failed");
    }
   
    
  };
  useEffect(() => {
          if(success){
              const timer = setTimeout(() => {
                  navigate("/");
              }, 1000)
  
              return () => clearTimeout(timer);
          }
      }, [success])
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-black text-center mb-4 text-slate-900">RURAL<span className="text-emerald-600">JOBS</span></h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          

          

          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-emerald-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-emerald-400"
            required
          />
          {error && <p className="text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700"
          >
            SignUp
          </button>
          <div className="text-center">
           <Link className="text-blue-500 text-center mx-auto" to="/login">Already have account?Login</Link>
          </div>
        </form>
      </div>

      {success && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
        <h2 className="text-xl font-bold text-emerald-600">
            Signup Successful 🎉
        </h2>
        <p className="mt-2 text-gray-600">
            Your account has been created
        </p>

        <button
            onClick={() => setSuccess(false)}
            className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded"
        >
            OK
        </button>
        </div>
        </div>
        )}

    </div>
    // success pop up

    
  );
}
