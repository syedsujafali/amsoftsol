"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-12 px-2"
        >
            <div className="flex flex-col items-center gap-4">
                <span className="inline-block px-5 py-1.5 text-sm rounded-full bg-blue-500/10 text-blue-400 transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105">
                    About Us
                </span>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-500 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-110 transform inline-block text-center">
                    We Are <span className="text-blue-500">AM Software Solution</span>
                </h1>
            </div>

            <p className="mt-3 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                A focused team of UI/UX designers, web developers, and SEO specialists
                building visually appealing, performance-driven digital products.
            </p>
        </motion.div>
    );
};

export default AboutHeader;
