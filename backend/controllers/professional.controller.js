import User from "../models/user.model.js";
import { getLatLngFromLocation as geocoding } from "../services/geocoding.js";


export const addProfessional = async (req, res) => {
    //console.log("Received profile update request with body:", req.body);
    try {
        const {name, category, subSkill, experience, rate, locationName} = req.body;

        let dpUrl;
        if(req.file) {
            dpUrl = req.file.path;
        }
        console.log(req.file);

        const {lat, lon} = await geocoding(locationName);
        console.log(`Geocoding result for location "${locationName}": lat=${lat}, lon=${lon}`);

        const updatedUser = 
            
            {
                name,
                category,
                subSkill,
                experience,
                rate,
                
                locationName,
                location: {
                    type: "Point",
                    coordinates: [lon, lat]
                },
                isProfileComplete: true
            };

            if(dpUrl) {
                updatedUser.dp = dpUrl;
            }

            const user = await User.findByIdAndUpdate(
                req.userId,
                updatedUser,
                {new: true}
            ).select("-password");
            
        

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("Profile updated successfully for user:", user);
        res.status(200).json({ message: "Profile updated successfully", user: user });
    } catch (error) {
        res.status(500).json({ message: error.message });   
    }
}