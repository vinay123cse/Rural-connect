
import { useEffect } from 'react'
import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


export default function Login() {
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        phone: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const checkPhone = /^\d{10}$/.test(formData.phone);
        if(!checkPhone){
            setError("Please enter a valid phone number");
            return;
        }

        if(!formData.phone || !formData.password){
            setError("All fields are required!!");
            return;
        }

        const payload = {       
            phone: formData.phone,
            password: formData.password,
        };
        
        try{
            const res = await login(payload);
            if(res){
                setSuccess(true);
                toast.success("Login successful!");
            }
                
            
        } catch(error){
            setError(error.message || "Login failed");
        }
    }

    useEffect(() => {
        if(success){
            const timer = setTimeout(() => {
                navigate("/");
            }, 2000)

            return () => clearTimeout(timer);
        }
    }, [success, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-black text-center mb-4 text-slate-900">RURAL<span className="text-emerald-600">JOBS</span></h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">phone</label>
                    <input type="phone" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" placeholder='+915467892276'/>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name='password' value={formData.password} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"/>
                </div>
                {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                <button type="submit" className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-emerald-500 focus:ring-offset-2">Login</button>
                <div className='text-center'>
                    <Link className='text-blue-500' to='/signup'>New user?Signup</Link>
                </div>
            </form>
            
        </div>
        {success && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold mb-4 text-green-600">Login Successful!</h3>
                    <p className="text-gray-700">You have successfully logged in.</p>
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
  );
}
