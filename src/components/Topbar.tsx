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
    <div className="w-full bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm text-sm z-50 relative animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row sm:justify-between items-center gap-3">

        {/* Left: Contact Info */}
        <div className="flex items-center gap-6">

          {/* Email */}
          <a
            href="mailto:info@amsoftware.com"
            className="group flex items-center gap-2 cursor-pointer transition-colors duration-300"
          >
            <div className="p-1.5 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-200">
              <FiMail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-gray-600 font-medium group-hover:text-blue-700 transition-colors hidden sm:inline">
              info@amsoftware.com
            </span>
          </a>

          <span className="h-4 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden sm:block"></span>

          {/* Phone */}
          <a
            href="tel:+914048532637"
            className="group flex items-center gap-2 cursor-pointer transition-colors duration-300"
          >
            <div className="p-1.5 rounded-full bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-green-200">
              <FiPhone className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="text-gray-600 font-medium group-hover:text-green-700 transition-colors hidden sm:inline">
              +91 40 4853 2637
            </span>
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-3">
          <SocialLink
            href="#"
            icon={<FaFacebookF size={14} />}
            color="bg-gradient-to-tr from-[#1877F2] to-[#3b5998]"
            shadow="hover:shadow-[#1877F2]/30"
          />
          <SocialLink
            href="#"
            icon={<FaXTwitter size={14} />}
            color="bg-gradient-to-tr from-[#000000] to-[#333333]"
            shadow="hover:shadow-black/30"
          />
          <SocialLink
            href="#"
            icon={<FaLinkedinIn size={14} />}
            color="bg-gradient-to-tr from-[#0077b5] to-[#00a0dc]"
            shadow="hover:shadow-[#0077b5]/30"
          />
          <SocialLink
            href="#"
            icon={<FaInstagram size={14} />}
            color="bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]"
            shadow="hover:shadow-[#FD1D1D]/30"
          />
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, color, shadow }: { href: string; icon: React.ReactNode; color: string; shadow: string }) => (
  <a
    href={href}
    className={`
      relative group p-2 rounded-full text-white overflow-hidden
      ${color} ${shadow}
      hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out
    `}
  >
    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
    <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
  </a>
);

export default Topbar;
