"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { posts } from "./Blog/constants";
import BlogCard from "./Blog/BlogCard";
import BlogBackground from "./Blog/BlogBackground";
import BlogHeader from "./Blog/BlogHeader";

export default function Blog() {
    return (
        <section
            id="blog"
            className="relative w-full overflow-hidden bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        >
            <BlogBackground />

            <div className="relative z-10 max-w-6xl mx-auto">
                <BlogHeader />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, i) => (
                        <BlogCard key={post.id} post={post} index={i} />
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <a
                        href="#"
                        className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white border border-blue-500/40 bg-transparent overflow-hidden group"
                    >
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent skew-x-12 transition-transform duration-500" />
                        <span className="relative z-10">View All Articles</span>
                        <FiArrowRight className="relative z-10 text-blue-400 group-hover:translate-x-1 transition-transform" size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
}
