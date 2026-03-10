"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutHeroCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ scale: 1.06 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:shadow-[0_0_80px_rgba(59,130,246,0.25)] hover:border-blue-500/40 w-full max-w-xl mx-auto min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex flex-col justify-between"
        >
            <div className="flex flex-col items-center mt-4">
                <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 overflow-hidden border border-blue-500/30">
                    <img
                        src="/logo.png"
                        alt="About"
                        className="w-full h-full object-contain p-4 sm:p-5"
                    />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-3">
                    Design-Driven Development
                </h3>
                <p className="text-center text-gray-200 text-base">
                    Modern UI, Clean Code, Scalable Database
                </p>
            </div>

            <div className="flex items-center gap-4 px-5 sm:px-6 py-4 rounded-xl bg-black/30 border border-white/10 w-fit ml-auto mb-4 animate-float-button transition-all duration-500 hover:shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6] hover:border-blue-400">
                <span className="h-10 w-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg">
                    ✓
                </span>
                <div>
                    <p className="text-base font-medium">SEO Optimized</p>
                    <p className="text-sm text-gray-400">Performance Focused</p>
                </div>
            </div>

            <style jsx>{`
        @keyframes floatButton {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-button {
          animation: floatButton 2s ease-in-out infinite;
        }
      `}</style>
        </motion.div>
    );
};

export default AboutHeroCard;
