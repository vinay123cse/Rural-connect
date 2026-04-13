import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


export const AuthContext =  createContext();

const isLocal = window.location.hostname === "localhost";
export const client = axios.create({
    baseURL: isLocal 
        ? "http://localhost:3000" 
        : "https://rural-connect-6jba.onrender.com",
    headers: { "Content-Type": "application/json" },
})



export const AuthProvider = ({children}) => {
    // const authContext = useContext(AuthContext);

    const [userData, setUserData] = useState(null);
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userStr = localStorage.getItem("user");

        // FIX: Added extra check for "undefined" string
        if (token && userStr && userStr !== "undefined") {
            try {
                const parsedUser = JSON.parse(userStr);
                setUserData({ token, user: parsedUser });
            } catch (error) {
                console.error("Error parsing user from localStorage:", error);
                // If data is corrupted, clear it so it doesn't crash again
                localStorage.removeItem("user");
                localStorage.removeItem("token");
            }
        }
    }, []);



    const signup = async (data) => {
        try{
            const response = await client.post("/signup", data);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setUserData(response.data);
            
            return response.data;
        }catch(error){
            console.error("Signup error:", error.message);
        }
    }
    const login =  async (data) => {
        try{
            const response = await client.post("/login", data);
            if(!response.data){
                throw new Error("Login failed");
            }
            const {token, user} = response.data;

            if(token){
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setUserData(response.data);
                navigate("/");
                return response.data;

            }

            
            
            
            
        }catch(error){
            console.error("Login error:", error.response?.data || error.message);
            throw error;
        }
    }
    const logout = () => {
        setIsLoggedOut(true);
        setTimeout(() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setUserData(null);
            toast.success("Logged out successfully!",{icon: '👋'});
            setIsLoggedOut(false);
            navigate("/");
        },1500);
    }

    const updateProfile = async (data) => {
        try {
            const token = localStorage.getItem("token");
            console.log("token",token)
            if (!token) {
                toast.error("Session expired. Please log in again.");   
                logout();
                return;
            }
            const response = await client.put("/update_profile", data, {
                headers: {
                    "Content-Type" :"multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setUserData(response.data);
            navigate("/");
            return response.data;
        } catch (error) {
            console.error("Update profile error:", error.message);
        }
    }

    return (
        <AuthContext.Provider value={{ userData, signup, login, logout, updateProfile ,isLoggedOut}}>
            {children}
        </AuthContext.Provider>
    );
}