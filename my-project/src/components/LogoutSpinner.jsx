export const LogoutSpinner = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    {/* 🌀 Spinning Circle */}
    <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
    <p className="mt-4 text-slate-600 font-bold animate-pulse">Logging out</p>
  </div>
);
