import { useEffect, useState } from 'react';
import axios from 'axios';
import ProCard from "../components/ProCard.jsx";
import Searchbar from '../components/Searchbar.jsx';

function Body() {
  const [pros, setPros] = useState([]); // Khali array se shuru karenge
  const [loading, setLoading] = useState(true);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [query, setQuery] = useState({ job: "", location: "" });

  // useEffect(() => {
  //   const fetchNearbyPros = async () => {
  //     // 1. Browser se current location mangna
  //     navigator.geolocation.getCurrentPosition(
  //       async (position) => {
  //         const { latitude, longitude } = position.coords;

  //         try {
  //           // 2. Aapki Backend API (URL check kar lena)
  //           // const response = await axios.get("http://localhost:3000/get_nearby", {
  //           //   params: { latitude, longitude },
  //           // });
  //           
  //           console.log("data from backend:", response.data);
  //           setPros(response.data);
  //         } catch (error) {
  //           console.error("Error fetching pros:", error);
  //         } finally {
  //           setLoading(false);
  //         }
  //       },
  //       (error) => {
  //         console.error("Location permission denied", error);
  //         setLoading(false);
  //         // Yahan aap chaho toh default data set kar sakte ho agar user location na de
  //       }
  //     );
  //   };

  //   fetchNearbyPros();
  // }, []);

  // Body.jsx mein purana useEffect hata kar ye daalo:

useEffect(() => {
  const fetchPros = async () => {
    try {
      setLoading(true); // Shuru mein loading true
      
      // Seedha API call, koi location ki zaroorat nahi
      const response = await axios.get("http://localhost:3000/get_nearby"); 
      
      console.log("Database se aaya data:", response.data);
      setPros(response.data);
    } catch (error) {
      console.error("Data fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchPros();
}, []); // Khali array matlab sirf ek baar chalega page load par

const handleSearch = (searchData) => {
   setQuery(searchData);
}
// 3. Filter Logic (Ye define karna bahut zaroori hai)
  const filteredPros = pros.filter((pro) => {
  // 1. Pehle safe variables banao (agar undefined ho toh khali string "" le lo)
  const jobQuery = (query?.job || "").toLowerCase();
  const locationQuery = (query?.location || "").toLowerCase();

  const category = (pro?.category || "").toLowerCase();
  const name = (pro?.name || "").toLowerCase();
  const subSkill = (pro?.subSkill || "").toLowerCase();
  const location = (pro?.locationName || "").toLowerCase();

  // 2. Ab check karo
  const matchesJob = category.includes(jobQuery) || name.includes(jobQuery) || subSkill.includes(jobQuery);
  const matchesLocation = location.includes(locationQuery);

  return matchesJob && matchesLocation;
});

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-[50vh]">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 font-black text-slate-500 italic uppercase tracking-widest text-xs">Expert dhoond rahe hain...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
     
      <main className="max-w-7xl mx-auto px-6 pt-4 pb-12">
        <div className="mb-8">
          <Searchbar onSearch={handleSearch} />
        </div>
        <header className="max-w-3xl mb-16 text-center mx-auto">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            Find the <span className="text-emerald-600">Expert</span> <br />You Need Today.
          </h1>
          <p className="text-slate-400 font-bold text-lg">Doctors, Teachers, and Skilled Professionals—verified and ready to help in your district.</p>
        </header>
        {/*-----------------------------------------------------------------------------------------*/}
        
        {/*-----------------------------------------------------------------------------------------*/}

      
        {/* Pros Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPros.length > 0 ? (
            filteredPros.map((pro) => (
              
              <ProCard 
                key={pro._id} 
                name={pro.name}
                category={pro.category}
                subSkill={pro.subSkill}
                locationName={pro.locationName} // Backend mein 'locationName' hai
                rate={`₹${pro.rate}`}
                available={pro.isProfileComplete}
                experience={`${pro.experience} Years`}
                rating={pro.rating || "4.2"}
                dp={pro.dp}
                color={pro.color || "text-emerald-500"}
                phone={pro.phone}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
              <p className="text-slate-500 font-bold">Bhai, is area mein abhi koi professional nahi mila!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Body;