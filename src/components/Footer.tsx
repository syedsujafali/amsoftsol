"use client";

import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#020617] via-[#071029] to-[#0b1220] text-white pt-20 pb-10 px-6 border-t border-white/5 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-400">
            AM <span className="text-white">Software</span>
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            We are a leading web development company dedicated to transforming
            businesses through innovative digital solutions. Our expertise spans
            web, mobile, and cloud technologies.
          </p>

          <div className="flex gap-3">
            {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaGithub].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0d1526] border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-6 text-white">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {["Home", "About Us", "Services", "Portfolio", "Blog", "Contact"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-6 text-white">Our Services</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {[
              "Web Development",
              "Mobile App Development",
              "UI/UX Design",
              "E-commerce Development",
              "SEO & Digital Marketing",
              "Cloud & IT Solutions",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-6 text-white">Contact Info</h4>

          <div className="space-y-4 text-gray-400 text-sm">

            <div className="flex gap-3 items-start">
              <FiMapPin className="text-blue-400 mt-1" />
              <p>
                II–4–658 Mustafa Towers <br />
                Unit 203/C 2nd Floor, Lakdi ka pool <br />
                Hyderabad 500004
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <FiPhone className="text-blue-400" />
              <p>+91 40 4954 1452</p>
            </div>

            <div className="flex gap-3 items-center">
              <FiMail className="text-blue-400" />
              <p>info@amsoftware.com</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-16 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <p>© 2026 AM Software Solution. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}