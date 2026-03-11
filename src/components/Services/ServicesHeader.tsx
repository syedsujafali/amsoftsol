"use client";

import React from "react";
const ServicesHeader = () => {
    return (
        <div className="text-center mb-8 sm:mb-10 lg:mb-14 flex flex-col items-center gap-4 sm:gap-5">
            <div
                className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium transition-all duration-500 ease-out hover:shadow-[0_0_28px_rgba(59,130,246,0.65)] hover:border-blue-500/60"
            >
                Our Services
            </div>

            <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight inline-block transition-all duration-500 ease-out hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            >
                What We <span className="text-blue-500">Offer</span>
            </h2>

            <p
                className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-1"
            >
                Comprehensive digital solutions tailored to your business needs.
                From concept to deployment, we deliver excellence at every step.
            </p>
        </div>
    );
};

export default ServicesHeader;
