import { Router } from "express";
import { signupUser, loginUser, getNearByUsers } from "../controllers/user.controller.js";
import { addProfessional } from "../controllers/professional.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import User from "../models/user.model.js";

const router = Router();

// Sample route for user registration

router.route("/signup").post(signupUser);

router.route("/login").post(loginUser);
router.route("/update_profile").put(authenticate, addProfessional);

router.route("/get_nearby").get(getNearByUsers)

router.route("/user").get(authenticate, async (req, res) => {
    
        const user = await User.findById(req.userId).select("-password"); //tokrn se user id nikal li
        res.json(user);
    
});

export default router;