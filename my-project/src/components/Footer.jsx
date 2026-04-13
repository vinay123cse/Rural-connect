// import React from 'react'

// export default function Footer() {
//   return (
//     <div className='bottom-0 left-0 w-full'>
//         <footer className="bg-white border-t border-gray-300 mt-10">
//             <div className="max-w-7xl mx-auto px-8 pt-8 pb-8 md:pb-12">
//                 <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    
//                     {/* Brand Info */}
//                     <div className="md:col-span-4">
//                         <div className="flex items-center gap-2 mb-4">
//                             <div className="h-6 w-6 bg-emerald-600 rounded-lg"></div>
//                             <span className="text-xl font-black tracking-tighter uppercase">Rural<span className='text-emerald-600'>Jobs</span></span>
//                         </div>
//                         <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
//                             Connecting village talent with verified opportunities. 
//                             No middlemen, direct trust.
//                         </p>
//                     </div>

//                     {/* Links Grid */}
//                     <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
//                         <div className="flex flex-col gap-3">
//                             <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900 font-sans">For Seekers</h4>
//                             <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Browse Jobs</a>
//                             <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Career Advice</a>
//                             <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Salaries</a>
//                         </div>
//                         <div className="flex flex-col gap-3">
//                             <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900">For Employers</h4>
//                             <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Post a Job</a>
//                             <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Hiring Solutions</a>
//                             <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Pricing</a>
//                         </div>
//                         <div className="flex flex-col gap-3">
//                             <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900">Company</h4>
//                             <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">About Us</a>
//                             <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Help Center</a>
//                             <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Privacy</a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Legal Section */}
//                 <div className="pt-4 border-t border-slate-50 flex flex-col items-center gap-3">
//                     <div className="text-[13px] text-slate-400 font-medium">
//                     © 2026 RuralJobs Inc. Built for the future of rural work.
//                     </div>
                    
//                     <div className="flex items-center gap-4">
//                     <a href="#" className="text-[13px] text-slate-400 hover:text-slate-900 transition-colors">Cookies</a>
//                     <a href="#" className="text-[13px] text-slate-400 hover:text-slate-900 transition-colors">Terms</a>
//                     <a href="#" className="text-[13px] text-slate-400 hover:text-slate-900 transition-colors">Contact</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     </div>
//   )
// }
// export default function Footer() {
//   return (
   
// <footer className="bg-slate-900 text-slate-300 py-12 px-6">
//   <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
//     {/* Column 1: Brand */}
//     <div className="col-span-2 md:col-span-1">
//       <h2 className="text-2xl font-black text-white mb-4">RURAL<span className="text-emerald-500">JOBS</span></h2>
//       <p className="text-sm">Connecting rural talent with local opportunities.</p>
//     </div>

//     {/* Column 2: Seekers */}
//     <div>
//       <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Seekers</h3>
//       <ul className="space-y-2 text-sm">
//         <li className="hover:text-emerald-500 cursor-pointer">Local Jobs</li>
//         <li className="hover:text-emerald-500 cursor-pointer">Daily Wages</li>
//         <li className="hover:text-emerald-500 cursor-pointer">Career Tips</li>
//       </ul>
//     </div>

//     {/* Column 3: Safety */}
//     <div>
//       <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Trust & Safety</h3>
//       <ul className="space-y-2 text-sm">
//         <li className="hover:text-emerald-500 cursor-pointer">Verify Profile</li>
//         <li className="hover:text-emerald-500 cursor-pointer">Safe Hiring</li>
//         <li className="hover:text-emerald-500 cursor-pointer">Privacy</li>
//       </ul>
//     </div>

//     {/* Column 4: Support */}
//     <div>
//       <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Support</h3>
//       <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
//          <p className="text-xs text-emerald-500 font-bold mb-1">Need help?</p>
//          <button className="text-white text-sm font-bold flex items-center gap-2">
//             <span className="bg-emerald-500 p-1 rounded-full text-[8px]">📞</span> 1800-RURAL-JOB
//          </button>
//       </div>
//     </div>
//   </div>

//   <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
//     <p>&copy; 2026 Rural Job Finder. Made with ❤️ in India for the World.</p>
//   </div>
// </footer>
// )
// }



// for adsense

import { Link } from 'react-router-dom'; // Link use karna SEO ke liye accha hai

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1: Brand & About */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-2xl font-black text-white mb-4">RURAL<span className="text-emerald-500">JOBS</span></h2>
          <p className="text-sm leading-relaxed">
            India's most trusted platform for connecting rural talent with local opportunities. 
            Empowering the grassroots workforce through technology.
          </p>
        </div>

        {/* Column 2: Resources (SEO Friendly) */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/jobs" className="hover:text-emerald-500 transition-colors">Find Local Jobs</Link></li>
            <li><Link to="/wages" className="hover:text-emerald-500 transition-colors">Daily Wage Guide</Link></li>
            <li><Link to="/career-tips" className="hover:text-emerald-500 transition-colors">Career Advice</Link></li>
            <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal (Mandatory for AdSense) */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legal & Privacy</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-emerald-500 transition-colors text-emerald-500/90 font-medium">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-emerald-500 transition-colors">Terms of Service</Link></li>
            <li><Link to="/disclaimer" className="hover:text-emerald-500 transition-colors">Disclaimer</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact & Support */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact Support</h3>
          <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
             <p className="text-xs text-emerald-500 font-bold mb-2">Have questions?</p>
             <a href="tel:1800RURALJOB" className="text-white text-sm font-bold flex items-center gap-2 mb-2 hover:text-emerald-400">
                <span className="bg-emerald-500 p-1 rounded-full text-[10px]">📞</span> 1800-RURAL-JOB
             </a>
             <a href="mailto:support@ruraljobs.com" className="text-white text-xs font-medium flex items-center gap-2 hover:text-emerald-400">
                <span className="bg-slate-700 p-1 rounded-full text-[10px]">✉️</span> support@ruraljobs.com
             </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest">
        <p>&copy; 2026 Rural Job Finder India Private Limited.</p>
        <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
            <span className="hover:text-white cursor-pointer">Twitter</span>
            <span className="hover:text-white cursor-pointer">Facebook</span>
        </div>
        <p>Made with ❤️ in India for the World.</p>
      </div>
    </footer>
  );
} 