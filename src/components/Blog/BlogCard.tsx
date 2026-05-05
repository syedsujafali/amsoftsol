"use client";

import React from "react";
import Link from "next/link";
import { FiCalendar, FiClock } from "react-icons/fi";

interface BlogCardProps {
    post: any;
    index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
    return (
        <Link href={post.href || "#"}>
            <article
                style={{ willChange: "transform" }}
                className="group relative h-full flex flex-col rounded-2xl overflow-hidden bg-[#0d1526] border border-white/8 cursor-pointer transition-all duration-300 hover:border-blue-500/30"
            >
                <div
                    className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100"
                    style={{
                        transition: "opacity 0.2s ease",
                        boxShadow: "inset 0 0 0 1px rgba(59,130,246,0.45), 0 0 55px rgba(59,130,246,0.18)",
                    }}
                />

                <div className="relative w-full h-48 overflow-hidden bg-slate-800/60 shrink-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src =
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='220' fill='%230d1526'%3E%3Crect width='600' height='220' fill='%230d1526'/%3E%3Ctext x='50%25' y='50%25' fill='%233b82f6' font-size='14' font-family='sans-serif' text-anchor='middle' dy='.35em'%3EBlog image coming soon%3C/text%3E%3C/svg%3E";
                        }}
                    />
                    <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white rounded-lg backdrop-blur-sm ${post.categoryColor}`}>
                        {post.category}
                    </span>
                </div>

                <div className="flex flex-col flex-1 p-5 gap-3">
                    <div className="flex items-center gap-4 text-gray-500 text-xs">
                        <span className="flex items-center gap-1.5"><FiCalendar size={12} />{post.date}</span>
                        <span className="flex items-center gap-1.5"><FiClock size={12} />{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-blue-300 transition-colors duration-150">
                        {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                    </p>
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;
