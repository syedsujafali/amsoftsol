import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-[#020617] text-white px-6">
      <div className="relative z-10 max-w-2xl text-center space-y-8">
        <h1 className="text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 drop-shadow-[0_0_40px_rgba(34,211,238,0.4)]">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-wide">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="pt-8">
          <Link 
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600/20 border border-blue-500/40 hover:bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={18} />
            Return Home
          </Link>
        </div>
      </div>
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
    </div>
  );
}
