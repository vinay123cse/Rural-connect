import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const signupUser = async (req, res) => {
  try {
    const { phone, password } = req.body;
    console.log("signup body", req.body);

    if (!phone || !password) {
      return res.status(400).json({ message: "Phone and password required." });
    }

    const existing = await User.findOne({ phone });
    if (existing) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      phone,
      password: hashedPassword,
      // baaki fields empty rahengi
      isProfileComplete: false
    });

    res.status(201).json({ message: "Signup successful", userId: newUser._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const loginUser = async (req, res) => {
    try{
        console.log("this is the login body", req.body);
        const { phone, password } = req.body;
        
        if(!phone || !password) {
            return res.status(400).json({ message: "phone and password are required." });
        }
        const user = await User.findOne({ phone });
        if(!user) {
            return res.status(400).json({ message: "Invalid phone or password." });
        }   
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid phone or password." });
        }
        const token = jwt.sign({ id: user._id, phone: user.phone }, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRES_IN });
        console.log("Generated token:", token);
        console.log("login successful for user:", user);

        const { password: _, ...userData } = user._doc;  //password chhodkr baaki sb frontend ko bhej do

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: userData
    });

    }catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: error.message });
    }
}

// export const getNearByUsers = async (req, res) => {
//     try {
//         const { longitude, latitude } = req.query;

//         const users = await User.find({
//             location: {
//                 $near: {
//                     $geometry: {
//                         type: "Point",
//                         coordinates: [longitude, latitude]
//                     },
//                     $maxDistance: 5000 //5km
//                 }
//             }
//         }).select("-password");

//         return res.json(users);

//     }catch(error) {
//         res.status(500).json({ message: error.message });
//     }
// }


export const getNearByUsers = async (req, res) => {
    try {
        

        const users = await User.find({isProfileComplete: true}).select("-password");

        return res.json(users);

    }catch(error) {
        res.status(500).json({ message: error.message });
    }
}

export const getReceiverProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).select("-password");
        if(!user) {
            return res.status(404).json({ message: "User not found." });
        }
        //console.log("Receiver profile data:", user);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}