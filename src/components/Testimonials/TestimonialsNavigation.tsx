"use client";

import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface TestimonialsNavigationProps {
    index: number;
    total: number;
    go: (next: number, direction: number) => void;
}

const TestimonialsNavigation = ({ index, total, go }: TestimonialsNavigationProps) => {
    return (
        <div className="flex items-center justify-center gap-4 mt-8">
            <button
                onClick={() => go(index - 1, -1)}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-gray-300 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
                <FiChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
                {Array.from({ length: total }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => go(i, i > index ? 1 : -1)}
                        aria-label={`Go to testimonial ${i + 1}`}
                        className="h-2 rounded-full cursor-pointer hover:opacity-90 bg-white/20 transition-all duration-300"
                        style={{ minWidth: 8, opacity: i === index ? 1 : 0.5, backgroundColor: i === index ? '#3b82f6' : 'rgba(255,255,255,0.2)' }}
                    />
                ))}
            </div>

            <button
                onClick={() => go(index + 1, 1)}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-gray-300 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
                <FiChevronRight size={18} />
            </button>
        </div>
    );
};

export default TestimonialsNavigation;
