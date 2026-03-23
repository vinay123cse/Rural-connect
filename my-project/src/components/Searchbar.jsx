import React, { use } from 'react'
import { useState } from 'react';

export default function Searchbar({onSearch}) {

  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ job, location });
  }

  return (
    <form 
    className="w-full max-w-4xl bg-white shadow-lg rounded-3xl p-3 border border-gray-200 hover:border-gray-300 flex flex-col md:flex-row items-stretch gap-3 mt-6 mx-auto"
    onSubmit={handleSearch}>

       
            {/* Job input */}
            <div className="flex items-center rounded-lg px-4 flex-1">
                <span className="text-gray-400 mr-2">🔍</span>
                <input
                type="search"
                placeholder="Job title, keywords"
                className="w-full py-3 outline-none text-gray-700"
                onChange={(e) => setJob(e.target.value)}
                value={job}
                />
                <div className="hidden md:block w-[1px] h-8 bg-slate-200 self-center"></div>
                <span className="text-gray-400 mr-2">📍</span>
                <input
                type="search"
                placeholder="City, district"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                className="w-full py-3 outline-none text-gray-700"
                />
            </div>
            
            
            {/* Search button */}
            <button 
            className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-8 py-3 rounded-3xl hidden sm:block" 
            
            type='submit'>
                Find jobs
            </button>
    </form>

    
  )
}
