"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface TestimonialsNavigationProps {
    isInView: boolean;
    index: number;
    total: number;
    go: (next: number, direction: number) => void;
}

const TestimonialsNavigation = ({ isInView, index, total, go }: TestimonialsNavigationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 mt-8"
        >
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={() => go(index - 1, -1)}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-gray-300 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
                <FiChevronLeft size={18} />
            </motion.button>

            <div className="flex items-center gap-2">
                {Array.from({ length: total }).map((_, i) => (
                    <motion.button
                        key={i}
                        onClick={() => go(i, i > index ? 1 : -1)}
                        aria-label={`Go to testimonial ${i + 1}`}
                        animate={{
                            width: i === index ? 28 : 8,
                            backgroundColor: i === index ? "#3b82f6" : "rgba(255,255,255,0.25)",
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="h-2 rounded-full cursor-pointer hover:opacity-90"
                        style={{ minWidth: 8 }}
                    />
                ))}
            </div>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={() => go(index + 1, 1)}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-gray-300 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
                <FiChevronRight size={18} />
            </motion.button>
        </motion.div>
    );
};

export default TestimonialsNavigation;
