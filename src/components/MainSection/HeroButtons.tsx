"use client";

import React from "react";
import { m } from "framer-motion";
import { FaRocket } from "react-icons/fa";

const HeroButtons = () => {
    return (
        <m.div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-9 sm:mb-10 lg:mb-12">
            <m.a
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 35px rgba(59,130,246,0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="/contact"
                className="
          relative overflow-hidden group
          w-full sm:w-auto
          px-6 sm:px-8 py-3 sm:py-4 
          bg-gradient-to-r from-blue-600 to-cyan-500 
          text-white rounded-xl font-bold text-base sm:text-lg
          transition-all duration-300
          shadow-[0_0_20px_rgba(59,130,246,0.5)]
        "
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Free Quote{" "}
                    <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <m.div
                    className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                    style={{ skewX: -20 }}
                />
            </m.a>

            <m.a
                whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(34,211,238,0.8)",
                    backgroundColor: "rgba(34,211,238,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="/services"
                className="
          w-full sm:w-auto
          px-6 sm:px-8 py-3 sm:py-4 
          border-2 border-blue-500/50 
          text-blue-300 rounded-xl font-bold text-base sm:text-lg
          transition-all duration-300
          backdrop-blur-sm
          text-center
        "
            >
                Our Services
            </m.a>
        </m.div>
    );
};

export default HeroButtons;
