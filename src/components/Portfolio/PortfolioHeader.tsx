"use client";

import React from "react";
import { motion } from "framer-motion";

interface PortfolioHeaderProps {
    isInView: boolean;
}

const PortfolioHeader = ({ isInView }: PortfolioHeaderProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-14 px-2"
        >
            <span className="inline-block px-5 py-1.5 text-sm rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-5 transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105">
                Our Portfolio
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-1">
                Recent{" "}
                <span className="text-blue-500 transition-colors duration-500 hover:text-blue-600">
                    Projects
                </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
                Explore our latest work and see how we&apos;ve helped businesses
                transform their digital presence.
            </p>
        </motion.div>
    );
};

export default PortfolioHeader;
