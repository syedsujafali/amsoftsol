"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCalendar, FiClock, FiArrowRight, FiUser } from "react-icons/fi";

/* ─────────── Blog data ─────────── */
const posts = [
    {
        id: 1,
        category: "Web Development",
        title: "The Future of Web Development: Trends Shaping Modern...",
        excerpt:
            "Explore the latest web development trends including performance optimization, modern frameworks, and scalable architectures that...",
        date: "Dec 1, 2024",
        readTime: "5 min read",
        author: "Amit Verma",
        image: "/blog/web-dev.jpg",
        categoryColor: "bg-blue-600/80",
        href: "#",
    },
    {
        id: 2,
        category: "Responsive Design",
        title: "Why Mobile Responsiveness Is Critical for Business Growth",
        excerpt:
            "Learn how mobile-first and responsive design improves user experience, boosts SEO rankings, and increases conversions across all devices.",
        date: "Nov 28, 2024",
        readTime: "6 min read",
        author: "Neha Sharma",
        image: "/blog/responsive.jpg",
        categoryColor: "bg-gray-900/80",
        href: "#",
    },
    {
        id: 3,
        category: "UI/UX Design",
        title: "UI/UX Design Principles That Drive Higher Conversions",
        excerpt:
            "Discover how clean layouts, intuitive navigation, and user-focused design decisions can significantly improve engagement and...",
        date: "Nov 25, 2024",
        readTime: "6 min read",
        author: "Rohit Mehta",
        image: "/blog/uiux.jpg",
        categoryColor: "bg-blue-700/80",
        href: "#",
    },
];

/* ─────────── Blog Card ─────────── */
function BlogCard({
    post,
    index,
}: {
    post: (typeof posts)[number];
    index: number;
}) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            /* spring keeps hover instant & smooth */
            style={{ willChange: "transform" }}
            className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#0d1526] border border-white/8 cursor-pointer"
        >
            {/* Hover glow border — CSS opacity, zero layout cost */}
            <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100"
                style={{
                    transition: "opacity 0.2s ease",
                    boxShadow:
                        "inset 0 0 0 1px rgba(59,130,246,0.45), 0 0 55px rgba(59,130,246,0.18)",
                }}
            />

            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden bg-slate-800/60 shrink-0">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center"
                    style={{
                        transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
                    }}
                    onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.transform =
                        "scale(1.07)")
                    }
                    onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")
                    }
                    onError={(e) => {
                        (e.target as HTMLImageElement).src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='220' fill='%230d1526'%3E%3Crect width='600' height='220' fill='%230d1526'/%3E%3Ctext x='50%25' y='50%25' fill='%233b82f6' font-size='14' font-family='sans-serif' text-anchor='middle' dy='.35em'%3EBlog image coming soon%3C/text%3E%3C/svg%3E";
                    }}
                />
                {/* Category badge */}
                <span
                    className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white rounded-lg backdrop-blur-sm ${post.categoryColor}`}
                >
                    {post.category}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-3">
                {/* Meta */}
                <div className="flex items-center gap-4 text-gray-500 text-xs">
                    <span className="flex items-center gap-1.5">
                        <FiCalendar size={12} />
                        {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <FiClock size={12} />
                        {post.readTime}
                    </span>
                </div>

                {/* Title */}
                <h3
                    className="text-base font-bold text-white leading-snug"
                    style={{ transition: "color 0.15s ease" }}
                >
                    <span className="group-hover:text-blue-300" style={{ transition: "color 0.15s ease" }}>
                        {post.title}
                    </span>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                </p>

                {/* Divider */}
                <div className="h-px bg-white/5" />

                {/* Author + Read More */}
                <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                            <FiUser size={13} />
                        </div>
                        <span>{post.author}</span>
                    </div>

                    <a
                        href={post.href}
                        className="flex items-center gap-1 text-blue-400 text-sm font-medium"
                        style={{ transition: "gap 0.15s ease" }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.gap = "6px";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.gap = "4px";
                        }}
                    >
                        Read More
                        <FiArrowRight size={14} />
                    </a>
                </div>
            </div>
        </motion.article>
    );
}

/* ─────────── Main Export ─────────── */
export default function Blog() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section
            id="blog"
            className="relative w-full overflow-hidden bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
        >
            {/* ── Animated background ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a1628] to-[#020617]" />

                {/* Aurora */}
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div
                        className="w-[140%] h-[140%] rounded-full opacity-[0.055]"
                        style={{
                            background:
                                "conic-gradient(from 0deg, transparent 0deg, #3b82f6 80deg, transparent 160deg, #06b6d4 230deg, transparent 300deg, #8b5cf6 350deg, transparent 360deg)",
                        }}
                    />
                </motion.div>

                {/* Orb left */}
                <motion.div
                    animate={{ scale: [1, 1.25, 1], opacity: [0.18, 0.38, 0.18], x: [0, 80, -40, 0], y: [0, -60, 60, 0] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-24 -left-16 w-[440px] h-[440px] bg-blue-600/20 rounded-full blur-[130px]"
                />
                {/* Orb right */}
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.12, 0.28, 0.12], x: [0, -90, 70, 0], y: [0, 70, -60, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute -bottom-24 -right-16 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[150px]"
                />
                {/* Orb centre */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 7 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-cyan-500/10 rounded-full blur-[140px]"
                />

                {/* Scan line */}
                <motion.div
                    animate={{ y: ["-5%", "110%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent"
                />

                {/* Particles */}
                {([
                    { w: 2, h: 2, top: "8%", left: "10%", dur: 7, del: 0 },
                    { w: 3, h: 3, top: "20%", left: "83%", dur: 9, del: 1.5 },
                    { w: 2, h: 2, top: "60%", left: "4%", dur: 8, del: 2.5 },
                    { w: 3, h: 3, top: "75%", left: "90%", dur: 10, del: 0.5 },
                    { w: 2, h: 2, top: "40%", left: "52%", dur: 6, del: 3 },
                    { w: 2, h: 2, top: "88%", left: "34%", dur: 8, del: 4 },
                    { w: 3, h: 3, top: "14%", left: "62%", dur: 11, del: 1 },
                    { w: 2, h: 2, top: "50%", left: "95%", dur: 7, del: 5 },
                ] as const).map((p, i) => (
                    <motion.div
                        key={i}
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                        transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.del }}
                        className="absolute rounded-full bg-blue-300"
                        style={{ width: p.w, height: p.h, top: p.top, left: p.left }}
                    />
                ))}

                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,#020617_100%)]" />
            </div>

            {/* ── Content ── */}
            <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-5 py-1.5 text-sm rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-5 cursor-default"
                        style={{ transition: "box-shadow 0.2s ease, transform 0.2s ease" }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLSpanElement).style.boxShadow = "0 0 22px rgba(59,130,246,0.5)";
                            (e.currentTarget as HTMLSpanElement).style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLSpanElement).style.boxShadow = "none";
                            (e.currentTarget as HTMLSpanElement).style.transform = "scale(1)";
                        }}
                    >
                        Our Blog
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Latest <span className="text-blue-500">Insights</span>
                    </h2>

                    <p className="mt-4 max-w-xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
                        Stay updated with the latest trends, tips, and insights from our team of experts.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, i) => (
                        <BlogCard key={post.id} post={post} index={i} />
                    ))}
                </div>

                {/* CTA */}
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
                        {/* Shimmer */}
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent skew-x-12"
                            style={{ transition: "transform 0.6s ease" }}
                        />
                        <span className="relative z-10">View All Articles</span>
                        <FiArrowRight className="relative z-10 text-blue-400" size={14} />
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
}
