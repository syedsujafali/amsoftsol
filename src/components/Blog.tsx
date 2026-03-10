"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { posts } from "./Blog/constants";
import BlogCard from "./Blog/BlogCard";
import BlogBackground from "./Blog/BlogBackground";
import BlogHeader from "./Blog/BlogHeader";

export default function Blog() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section
            id="blog"
            className="relative w-full overflow-hidden bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
        >
            <BlogBackground />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="relative z-10 max-w-6xl mx-auto"
                ref={ref}
            >
                <BlogHeader isInView={isInView} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, i) => (
                        <BlogCard key={post.id} post={post} index={i} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                    className="flex justify-center mt-12"
                >
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 420, damping: 22 }}
                        style={{ willChange: "transform" }}
                        className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white border border-blue-500/40 bg-transparent overflow-hidden group"
                    >
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent skew-x-12"
                            style={{ transition: "transform 0.6s ease" }}
                        />
                        <span className="relative z-10">View All Articles</span>
                        <FiArrowRight className="relative z-10 text-blue-400" size={14} />
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}
