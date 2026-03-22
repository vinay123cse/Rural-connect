import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import EditProfile from './authorization/editProfile.jsx';
import Experts from './pages/Expert.jsx';
import { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

export default function App() {
  const location = useLocation();
  const paths = ["/login", "/signup", "/editprofile"];

  const currPath = paths.includes(location.pathname)

  return (
     <>
        <Toaster position='top-center' reverseOrder={false} />
       {!currPath && <Navbar />}
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/" element={<Experts />} />
          <Route path="/healthcare" element={<Experts />} />
          <Route path="/education" element={<Experts />} />
          <Route path="/technical" element={<Experts />} />
          <Route path="/agriculture" element={<Experts />} />
          </Routes>
        {!currPath && <Footer />}
   </>
  )
}


