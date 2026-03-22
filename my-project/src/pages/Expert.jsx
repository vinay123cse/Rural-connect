// import { useLocation } from "react-router-dom";
// import ProCard from "../components/ProCard.jsx";

// const Experts = () => {
//   const { pathname } = useLocation();

//   const categoryMap = {
//     "/": "all",
//     "/healthcare": "healthcare",
//     "/education": "education",
//     "/technical": "technical",
//     "/agriculture": "agriculture",
//   };

//   const activeCategory = categoryMap[pathname] || "all";

//   const experts = [
//     {
//       id: 1,
//       name: "Dr. Sharma",
//       category: "healthcare",
//       subSkill: "Rural Doctor",
//       location: "Bihar",
//       rate: "₹500/day",
//       available: true,
//       experience: "10 years",
//       rating: "4.8",
//       dp: "https://i.pravatar.cc/150?img=1",
//       color: "text-red-600",
//       phone: "9876543210",
//     },
//     {
//       id: 2,
//       name: "Rahul Sir",
//       category: "education",
//       subSkill: "Maths Teacher",
//       location: "UP",
//       rate: "₹600/day",
//       available: false,
//       experience: "7 years",
//       rating: "4.6",
//       dp: "https://i.pravatar.cc/150?img=2",
//       color: "text-blue-600",
//       phone: "9876543222",
//     },
//     {
//       id: 3,
//       name: "Dr. Sharma",
//       category: "agriculture",
//       subSkill: "Rural Doctor",
//       location: "Bihar",
//       rate: "₹500/day",
//       available: true,
//       experience: "10 years",
//       rating: "4.8",
//       dp: "https://i.pravatar.cc/150?img=1",
//       color: "text-red-600",
//       phone: "9876543210",
//     },
//   ];

//   const filteredExperts =
//     activeCategory === "all"
//       ? experts
//       : experts.filter((e) => e.category === activeCategory);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       {/* Pros Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {filteredExperts.map((pro, index) => (
//             <ProCard key={index} {...pro} />
//           ))}
//         </div>
//     </div>
//   );
// };

// export default Experts;


import React, { useEffect, useState } from "react"; // 1. Hooks import karo
import { useLocation } from "react-router-dom";
import ProCard from "../components/ProCard.jsx";
import axios from "axios"; // 2. axios import karo

const Experts = () => {
  const { pathname } = useLocation();
  
  // 3. State banao jahan DB ka data save hoga
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryMap = {
    "/": "all",
    "/healthcare": "healthcare",
    "/education": "education",
    "/technical": "technical",
    "/agriculture": "agriculture",
  };

  const activeCategory = categoryMap[pathname] || "all";

  // 4. ✨ JADU YAHAN HAI: Backend se data fetch karo
  useEffect(() => {
    const fetchExperts = async () => {
      try {
        setLoading(true);
        // Apni Backend API ka URL dalo yahan
        const response = await axios.get("http://localhost:3000/get_nearby"); 
        setExperts(response.data); // DB se aaya data state mein set kar diya
        setLoading(false);
      } catch (error) {
        console.error("Data laane mein error:", error);
        setLoading(false);
      }
    };

    fetchExperts();
  }, []); // [] matlab sirf ek baar chalega jab page load hoga

  // 5. Filtering logic (Same rahega, bas ab ye real data par chalega)
  const filteredExperts =
    activeCategory === "all"
      ? experts
      : experts.filter((e) => e.category.toLowerCase() === activeCategory.toLowerCase());

  if (loading) return <div className="text-center py-20 font-bold">Loading Experts...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredExperts.length > 0 ? (
            filteredExperts.map((pro) => (
              <ProCard key={pro._id} {...pro} /> // DB mein id '_id' hoti hai
            ))
          ) : (
            <div className="col-span-full text-center text-slate-400 py-10">
              Is category mein koi expert nahi mila.
            </div>
          )}
        </div>
    </div>
  );
};

export default Experts;