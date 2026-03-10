"use client";

import React from "react";
import { m } from "framer-motion";

const ServicesHeader = () => {
    return (
        <div className="text-center mb-12 sm:mb-14 lg:mb-20 flex flex-col items-center gap-4 sm:gap-5">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{
                    scale: 1.08,
                    transition: { type: "spring", stiffness: 160, damping: 18, mass: 0.6 },
                }}
                className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium transition-all duration-500 ease-out hover:shadow-[0_0_28px_rgba(59,130,246,0.65)] hover:border-blue-500/60"
            >
                Our Services
            </m.div>

            <m.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{
                    scale: 1.06,
                    transition: { type: "spring", stiffness: 160, damping: 18, mass: 0.6 },
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight inline-block transition-all duration-500 ease-out hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            >
                What We <span className="text-blue-500">Offer</span>
            </m.h2>

            <m.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-1"
            >
                Comprehensive digital solutions tailored to your business needs.
                From concept to deployment, we deliver excellence at every step.
            </m.p>
        </div>
    );
};

export default ServicesHeader;
