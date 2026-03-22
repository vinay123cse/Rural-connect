import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  try {
    // console.log("Headers received at Backend:", req.headers); 
    // const authHeader = req.headers.authorization;
    
    // if (!authHeader) {
    //   console.log("Authorization header hi nahi aaya!");
    //   return res.status(401).json({ message: "Login required" });
    // }
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Login required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.log(process.env.JWT_SECRET)
     res.status(401).json({ message: "Invalid token" });
  }
};
