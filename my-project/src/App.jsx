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

export default function App() {
  const location = useLocation();
  const paths = ["/login", "/signup", "/editprofile"];
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
          </Routes>
        {!hideNavbarFooter && <Footer />}
   </>
  )
}


