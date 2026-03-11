"use client";

import React from "react";
import { m } from "framer-motion";
import Counter from "./Counter";
import HeroButtons from "./HeroButtons";

interface HeroContentProps {
    isThrowing: boolean;
    isMobile: boolean;
    isIntroSkipped: boolean;
    throwVector: { x: number; y: number };
    leftContentRef: React.RefObject<HTMLDivElement | null>;
    stats: { number: string; label: string }[];
}

const HeroContent = ({
    isThrowing,
    isMobile,
    isIntroSkipped,
    throwVector,
    leftContentRef,
    stats,
}: HeroContentProps) => {
    return (
        <div
            ref={leftContentRef as React.RefObject<HTMLDivElement>}
            className={`flex-1 text-center lg:text-left pointer-events-auto w-full max-md:!animation-none ${isThrowing 
                ? (isMobile ? '' : isIntroSkipped ? 'animate-throw-in-hero-skip' : 'animate-throw-in-hero')
                : 'opacity-0'
                }`}
        >
            <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 mb-7 sm:mb-8 text-xs sm:text-sm font-medium text-blue-400 rounded-full bg-blue-500/10 border border-blue-400/30">
                <m.div
                    animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                />
                Leading Web Development Company
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mt-4 sm:mt-6 lg:mt-8 mb-5 sm:mb-6 lg:mb-8 leading-[1.12] tracking-tight relative">
                We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">Digital Experiences</span>
                <br />
                That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Matter</span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-gray-300/80 max-w-xl sm:max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed font-medium">
                Transform your business with cutting-edge web solutions. We craft scalable, innovative, and <span className="text-cyan-300 font-semibold">user-centric</span> digital products that drive growth.
            </p>

            <HeroButtons />

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-10">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <span className="text-2xl sm:text-3xl md:text-4xl text-blue-400 font-black tracking-tighter drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">
                            <Counter value={stat.number} />
                        </span>
                        <span className="text-xs sm:text-sm text-gray-300">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroContent;
