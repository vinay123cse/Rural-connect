import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
        
//     },
//     email: { 
//         type: String,
//         required: true,
//         unique: true,
//     },
//     phone: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     skills: {
//         type: [String],
//         default: [],
//     },
//     location: {
//         type: {type: String, default: 'Point'},
//         coordinates: {type: [Number], index: '2dsphere'}, // [longitude, latitude]
        
//     },

//     password: {
//         type: String,   
//         required: true,
//     },
    
    
// });

// userSchema.index({location: "2dsphere"})

// const User = mongoose.model("User", userSchema);

// export default User;




const userSchema = new mongoose.Schema({
    // --- SIGNUP DETAILS (Hamesha chahiye) ---
    phone: { type: String, required: true, unique: true, match: /^[0-9]{10}$/ },
    password: { type: String, required: true }, // Auth ke liye
    isProfileComplete: { type: Boolean, default: false }, // Yeh check karega ki details bhari hain ya nahi
    
    // --- PROFILE DETAILS (Onboarding ke baad bhari jayengi) ---
    name: { type: String, trim: true },
    category: { type: String }, 
    subSkill: { type: String },
    experience: { type: String },
    rate: { type: String },
    rating: { type: Number, default: 0 },
    available: { type: Boolean, default: true },
    dp: { type: String, default: 'https://i.pravatar.cc/150' },
    color: { type: String, default: 'text-emerald-500' },
    
    // --- LOCATION (Signup ke baad auto-fetch hogi) ---
    locationName: { type: String },
    location: {
        type: { type: String, enum: ['Point']},
        coordinates: { type: [Number] } // [lng, lat]
    }
}, { timestamps: true });

userSchema.index({ location: "2dsphere" }, { sparse: true });
const User = mongoose.model('User', userSchema);
export default User;