import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const Topbar = () => {
  return (
    <div className="w-full bg-white/90 text-gray-700 border-b border-gray-200 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row sm:justify-between items-center gap-2">

        {/* Left: Contact Info */}
        <div className="flex items-center gap-4">
          
          {/* Email */}
          <a
            href="mailto:info@amsoftware.com"
            className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition"
          >
            <FiMail className="w-4 h-4" />
            {/* Text hidden on mobile */}
            <span className="hidden sm:inline">info@amsoftware.com</span>
          </a>

          <span className="h-4 w-px bg-gray-300 hidden sm:block"></span>

          {/* Phone */}
          <a
            href="tel:+914048532637"
            className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition"
          >
            <FiPhone className="w-4 h-4" />
            {/* Text hidden on mobile */}
            <span className="hidden sm:inline">+91 40 4853 2637</span>
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          <a
            href="#"
            className="p-2 rounded-full text-white 
                       bg-linear-to-br from-[#0D47A1] to-[#1976D2]
                       bg-size-[200%_200%] bg-top-left 
                       hover:bg-bottom-right
                       transition-all duration-500
                       hover:scale-110
                       animate-gradient animate-float animate-glow"
          >
            <FaFacebookF size={14} />
          </a>

          <a
            href="#"
            className="p-2 rounded-full text-white 
                       bg-linear-to-br from-gray-700/40 to-black/70
                       bg-size-[200%_200%] bg-top-left 
                       hover:bg-bottom-right
                       transition-all duration-500
                       hover:scale-110
                       animate-gradient animate-float animate-glow"
          >
            <FaXTwitter size={14} />
          </a>

          <a
            href="#"
            className="p-2 rounded-full text-white 
                       bg-linear-to-br from-[#004182] to-[#0A66C2]
                       bg-size-[200%_200%] bg-top-left 
                       hover:bg-bottom-right
                       transition-all duration-500
                       hover:scale-110
                       animate-gradient animate-float animate-glow"
          >
            <FaLinkedinIn size={14} />
          </a>

          <a
            href="#"
            className="p-2 rounded-full text-white 
                       bg-linear-to-br from-[#C13584] via-[#833AB4] to-[#FCAF45]
                       bg-size-[200%_200%] bg-top-left 
                       hover:bg-bottom-right
                       transition-all duration-500
                       hover:scale-110
                       animate-gradient animate-float animate-glow"
          >
            <FaInstagram size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
