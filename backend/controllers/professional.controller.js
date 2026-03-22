import User from "../models/user.model.js";
import { getLatLngFromLocation as geocoding } from "../services/geocoding.js";


export const addProfessional = async (req, res) => {
    console.log("Received profile update request with body:", req.body);
    try {
        const {name, category, subSkill, experience, rate, dp, locationName} = req.body;

        const {lat, lon} = await geocoding(locationName);
        console.log(`Geocoding result for location "${locationName}": lat=${lat}, lon=${lon}`);

        const updatedUser = await User.findByIdAndUpdate(
            req.userId,
            {
                name,
                category,
                subSkill,
                experience,
                rate,
                dp,
                locationName,
                location: {
                    type: "Point",
                    coordinates: [lon, lat]
                },
                isProfileComplete: true
            },
            { new: true }
        ).select("-password");

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("Profile updated successfully for user:", updatedUser);
        res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });   
    }
}