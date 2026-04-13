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

  const [loading, setLoading] = useState(false);

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
    setLoading(true);

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

          {/* 4. Button ka text aur state change karo */}
          <button
            type="submit"
            disabled={loading} // Loading ke waqt button disable kar do
            className={`w-full p-2 rounded-lg text-white transition-all ${
              loading ? "bg-emerald-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"
            }`}
          >
          {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              "SignUp"
            )}
          </button>
          <div className="text-center">
           <Link className="text-blue-500 text-center mx-auto" to="/login">Already have account?Login</Link>
          </div>
        </form>
      </div>

      {/* {success && (
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
        )} */}

    </div>
    // success pop up

    
  );
}
