"use client";

import React from "react";
import { motion } from "framer-motion";

interface FAQHeaderProps {
    isInView: boolean;
}

const FAQHeader = ({ isInView }: FAQHeaderProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="text-center mb-12"
        >
            <span className="inline-block px-5 py-1.5 text-sm rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-5 transition-all duration-200 hover:shadow-[0_0_22px_rgba(59,130,246,0.5)] hover:scale-105 cursor-default">
                FAQ
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Frequently Asked <span className="text-blue-500">Questions</span>
            </h2>

            <p className="mt-4 max-w-lg mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
                Find answers to common questions about our services, process, and working with us.
            </p>
        </motion.div>
    );
};

export default FAQHeader;
