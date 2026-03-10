"use client";

import React from "react";
import { motion } from "framer-motion";

interface BlogHeaderProps {
    isInView: boolean;
}

const BlogHeader = ({ isInView }: BlogHeaderProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="text-center mb-12"
        >
            <span className="inline-block px-5 py-1.5 text-sm rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-5 cursor-default transition-all duration-300 hover:shadow-[0_0_22px_rgba(59,130,246,0.5)] hover:scale-105">
                Our Blog
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Latest <span className="text-blue-500">Insights</span>
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
                Stay updated with the latest trends, tips, and insights from our team of experts.
            </p>
        </motion.div>
    );
};

export default BlogHeader;
