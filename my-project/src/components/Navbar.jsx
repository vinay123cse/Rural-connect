import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Navbar = () => {

  const { userData, logout, isLoggedOut } = useContext(AuthContext);
  console.log(userData);

  const [activeTab, setActiveTab] = useState('All Experts');
  const categories = [
    {name:'All Experts', path:'/'}, 
    {name:'Healthcare', path:'/healthcare'}, 
    {name:'Education', path:'/education'}, 
    {name:'Technical', path:'/technical'}, 
    {name:'Agriculture', path:'/agriculture'}];
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex-shrink-0">
                  <span className="text-2xl font-black tracking-tighter text-slate-900">
                    RURAL<span className="text-emerald-600">JOBS</span>
                  </span>
              </Link>
            </div>

            {/* Main Tabs (Indeed Style) */}
            <div className="hidden lg:flex ml-10 space-x-4 h-16 no-scrollbar scroll-smooth">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.path}
                  onClick={() => setActiveTab(cat.name)}
                  className={`relative px-3 h-full flex items-center sm:text-base font-bold transition-all ${
                    activeTab === cat.name
                      ? 'text-slate-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-emerald-600'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-2">
            {!userData ? (
              <div className='py-2 px-4 rounded-lg bg-emerald-50 flex items-center gap-2'>
              <Link
                to="/signup"
                className="sm:text-sm font-bold text-emerald-600 hover:text-emerald-800"
              >
                SignUp
              </Link>
              <div className="w-[1px] h-6 bg-slate-400 mx-2"></div>
              <Link
                to="/login"
                className="sm:text-sm font-bold text-emerald-600 hover:text-slate-900"
              >
                Login
              </Link>
              
             
              
            </div>
            ) : (
            <>
            <button
              className="flex items-center gap-2 sm:text-sm font-bold text-emerald-600 hover:text-slate-900 px-4 py-2 transition-all"
              onClick={logout}
              disabled={isLoggedOut}
              >
              {isLoggedOut ? (
                <>
                <div className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                <span className='text-emerald-600'>Logging out...</span>
                </>
              ) : (
                "Logout"
              )}
              
            </button>
            {/* <Link to="/editprofile" className="sm:text-sm font-bold text-emerald-600 hover:text-slate-900 px-4 py-2">
              Edit Profile
            </Link> */}
            <div className='w-10 h-10 rounded-full overflow-hidden bg-emerald-50 border border-slate-300 flex items-center justify-center '>
              {userData?.user?.dp ? (
                <img src={userData?.user?.dp || userData?.dp} alt="profile" className='w-full h-full object-cover' />
              ) : (
                <span className='text-emerald-700 font-bold text-lg leading-none'>
                  {userData?.user?.name?.charAt(0).toUpperCase()}
                </span>
                
              )}
              
            </div>
            </>
            )}
            
            
            
          </div>
        </div>
      </div>

      {/* Mobile Scrollable Tabs (Indeed Mobile Style) */}
      <div className="lg:hidden flex border-t border-slate-100 bg-white overflow-x-auto no-scrollbar scroll-smooth">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.path}
            onClick={() => setActiveTab(cat.name)}
            className={`whitespace-nowrap px-6 py-3 text-xs font-bold transition-all relative ${
              activeTab === cat.name
                ? 'text-emerald-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600'
                : 'text-slate-500'
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;