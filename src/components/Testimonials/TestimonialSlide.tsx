"use client";

import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Stars from "./Stars";
import { makeVariants } from "./constants";

interface TestimonialSlideProps {
    current: any;
    dir: number;
}

const TestimonialSlide = ({ current, dir }: TestimonialSlideProps) => {
    const variants = makeVariants(dir);
    const [isExpanded, setIsExpanded] = useState(false);

    const maxLength = 160;
    const isLongQuote = current.quote.length > maxLength;
    const displayText = isExpanded ? current.quote : (isLongQuote ? `${current.quote.substring(0, maxLength)}...` : current.quote);

    return (
        <div className="relative">
            <div
                className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden min-h-[260px] sm:min-h-[240px] p-8 sm:p-10 group flex flex-col"
            >
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(59,130,246,0.35), 0 0 60px rgba(59,130,246,0.18)" }}
                />
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500/5 rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-violet-500/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <motion.div
                    key={current.id}
                    custom={dir}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="flex flex-col h-full"
                >
                    <div className="mb-6">
                        <div
                            className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 transition-all duration-300 group-hover:bg-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                        >
                            <FaQuoteRight size={18} />
                        </div>
                    </div>

                    <p className="text-base sm:text-lg text-gray-100 leading-relaxed mb-4 max-w-3xl transition-all duration-500">
                        &ldquo;{displayText}&rdquo;
                    </p>
                    
                    {isLongQuote && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-sm font-bold text-blue-400 mb-8 hover:text-blue-300 hover:tracking-wide transition-all duration-300 inline-flex items-center self-start group/btn"
                        >
                            {isExpanded ? "Read less" : "Read more"}
                        </button>
                    )}
                    {!isLongQuote && <div className="mb-8" />}

                    <div className="flex items-center justify-between flex-wrap gap-4 mt-auto">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${current.color} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                                {current.initials}
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm sm:text-base leading-tight">{current.name}</p>
                                <p className="text-gray-400 text-xs sm:text-sm">{current.role}</p>
                            </div>
                        </div>
                        <Stars key={current.id} count={current.rating} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TestimonialSlide;
