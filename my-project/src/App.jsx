import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import EditProfile from './authorization/EditProfile.jsx';
import Experts from './pages/Expert.jsx';
import { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import ChatSection from './pages/ChatSection.jsx';
import PrivacyPolicy from './pages/legal/PrivacyPolicy.jsx';
import {Terms} from './pages/legal/Terms.jsx';
import {Disclaimer} from './pages/legal/Disclaimer.jsx';
import {Contact} from './pages/legal/Contact.jsx';
import  LocalJobs  from './pages/legal/LocalJobs.jsx';
import AboutUs from './pages/legal/About.jsx';
import Wages from './pages/legal/Wages.jsx';
import CareerAdvice from './pages/legal/CareerTips.jsx';

export default function App() {
  const location = useLocation();
  const paths = ["/login", "/signup", "/editprofile", "/privacy", "/terms", "/disclaimer", "/contact", "/jobs", "/about", "/wages", "/career-tips"];
  const isChatPage = location.pathname.startsWith("/chat/");

  const currPath = paths.includes(location.pathname)

  const hideNavbarFooter = currPath || isChatPage;

  return (
     <>
        <Toaster position='top-center' reverseOrder={false} />
       {!hideNavbarFooter && <Navbar />}
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/healthcare" element={<Experts />} />
          <Route path="/education" element={<Experts />} />
          <Route path="/technical" element={<Experts />} />
          <Route path="/agriculture" element={<Experts />} />
          <Route path='/chat/:receiverId' element={<ChatSection/>} />
          <Route path='/privacy' element={<PrivacyPolicy/>} />
          <Route path='/terms' element={<Terms/>} />
          <Route path='/disclaimer' element={<Disclaimer/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/jobs' element={<LocalJobs/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/wages' element={<Wages/>} />
          <Route path='/career-tips' element={<CareerAdvice/>} />
          </Routes>
        {!hideNavbarFooter && <Footer />}
   </>
  )
}


