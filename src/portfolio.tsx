"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

/* ─────────── Project data ─────────── */
const projects = [
    {
        id: 1,
        title: "i-revive",
        description:
            "Professional website redesign and optimization with modern UI...",
        image: "/projects/irevive.png",
        tags: ["Next.js"],
        link: "https://www.i-revive.com/",
    },
    {
        id: 2,
        title: "Simply Smilez Dental",
        description:
            "Modern dental clinic website designed for clarity, trust, and...",
        image: "/projects/smilez.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "#",
    },
    {
        id: 3,
        title: "Aldo Modular Furniture",
        description:
            "Modern furniture business website showcasing modular designs,...",
        image: "/projects/aldo.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "#",
    },
    {
        id: 4,
        title: "Taskforce Interiors",
        description:
            "Interior design company website with premium visuals and...",
        image: "/projects/taskforce.png",
        tags: ["Next.js"],
        link: "#",
    },
    {
        id: 5,
        title: "Strength and Exercise",
        description:
            "Fitness and strength training website focused on exercise...",
        image: "/projects/strength.png",
        tags: ["Next.js"],
        link: "#",
    },
    {
        id: 6,
        title: "Almo Laminates",
        description:
            "Corporate laminate brand website showcasing products,...",
        image: "/projects/almo.png",
        tags: ["Wordpress"],
        link: "#",
    },
    {
        id: 7,
        title: "Shiva Roadlines",
        description:
            "Logistics and transportation company website highlighting...",
        image: "/projects/shiva.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "#",
    },
    {
        id: 8,
        title: "Turbo Shop",
        description:
            "Automotive turbo rebuild and repair services website with bold...",
        image: "/projects/turbo.png",
        tags: ["Next.js"],
        link: "#",
    },
];

/* ─────────── Tag pill colours ─────────── */
const tagColor: Record<string, string> = {
    "Next.js": "bg-blue-500/15 text-blue-400 border-blue-500/30",
    HTML: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    CSS: "bg-teal-500/15 text-teal-400 border-teal-500/30",
    JavaScript: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    Wordpress: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
};

/* ─────────── Variants ─────────── */
const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" },
    },
};

/* ─────────── Project Card ─────────── */
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
            }}
            className="
        group relative flex flex-col rounded-2xl overflow-hidden
        bg-[#0d1526] border border-white/10
        transition-[border-color,box-shadow] duration-300
        hover:border-blue-500/40
        hover:shadow-[0_0_55px_rgba(59,130,246,0.22)]
      "
        >
            {/* Screenshot */}
            <div className="relative w-full h-44 overflow-hidden bg-slate-800/60">
                <img
                    src={project.image}
                    alt={project.title}
                    className="
            w-full h-full object-cover object-top
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
                    onError={(e) => {
                        (e.target as HTMLImageElement).src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='180' fill='%230d1526'%3E%3Crect width='400' height='180' fill='%230d1526'/%3E%3Ctext x='50%25' y='50%25' fill='%233b82f6' font-size='14' font-family='sans-serif' text-anchor='middle' dy='.35em'%3EScreenshot coming soon%3C/text%3E%3C/svg%3E";
                    }}
                />

                {/* Hover overlay with visit icon */}
                <div
                    className="
            absolute inset-0 flex items-center justify-center
            bg-blue-600/0 group-hover:bg-blue-600/10
            transition-all duration-500
          "
                >
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileHover={{ scale: 1.15 }}
                        className="
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              bg-white/10 backdrop-blur-sm border border-white/20
              rounded-full p-3 text-white
            "
                    >
                        <FiExternalLink size={18} />
                    </motion.a>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`
                px-3 py-0.5 rounded-full text-xs font-medium border
                transition-all duration-300
                hover:scale-105 hover:brightness-125
                ${tagColor[tag] ?? "bg-white/10 text-gray-300 border-white/20"}
              `}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

/* ─────────── Main Export ─────────── */
export default function Portfolio() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section
            id="portfolio"
            className="relative min-h-screen w-full overflow-hidden bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-24"
        >
            {/* ── Fully Animated Background ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a1628] to-[#020617]" />

                {/* Aurora rotating layer */}
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div
                        className="w-[150%] h-[150%] rounded-full opacity-[0.07]"
                        style={{
                            background:
                                "conic-gradient(from 0deg, transparent 0deg, #3b82f6 60deg, transparent 120deg, #06b6d4 180deg, transparent 240deg, #8b5cf6 300deg, transparent 360deg)",
                        }}
                    />
                </motion.div>

                {/* Orb 1 – blue top-left */}
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.55, 0.3], x: [0, 120, -60, 0], y: [0, -60, 80, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-24 -left-16 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[130px]"
                />

                {/* Orb 2 – cyan bottom-right */}
                <motion.div
                    animate={{ scale: [1.2, 1, 1.3], opacity: [0.2, 0.45, 0.2], x: [0, -120, 100, 0], y: [0, 80, -80, 0] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-24 -right-16 w-[560px] h-[560px] bg-cyan-500/15 rounded-full blur-[150px]"
                />

                {/* Orb 3 – purple centre */}
                <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.12, 0.3, 0.12], x: [0, 60, -80, 0], y: [0, -40, 60, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[160px]"
                />

                {/* Orb 4 – indigo top-right */}
                <motion.div
                    animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.15, 0.35, 0.15], x: [0, -80, 60, 0], y: [0, 60, -50, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 8 }}
                    className="absolute -top-10 right-1/4 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px]"
                />

                {/* Orb 5 – teal bottom-left */}
                <motion.div
                    animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.1, 0.25, 0.1], x: [0, 100, -40, 0], y: [0, -80, 40, 0] }}
                    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute bottom-20 left-1/4 w-[380px] h-[380px] bg-teal-500/15 rounded-full blur-[110px]"
                />

                {/* Glowing scan line */}
                <motion.div
                    animate={{ y: ["-5%", "110%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
                />

                {/* Floating star particles */}
                {([
                    { w: 2, h: 2, top: "8%", left: "12%", dur: 6, del: 0 },
                    { w: 3, h: 3, top: "22%", left: "78%", dur: 8, del: 1.5 },
                    { w: 2, h: 2, top: "55%", left: "5%", dur: 7, del: 2.5 },
                    { w: 3, h: 3, top: "70%", left: "88%", dur: 9, del: 0.5 },
                    { w: 2, h: 2, top: "38%", left: "55%", dur: 5, del: 3 },
                    { w: 2, h: 2, top: "14%", left: "44%", dur: 10, del: 1 },
                    { w: 3, h: 3, top: "85%", left: "30%", dur: 7, del: 4 },
                    { w: 2, h: 2, top: "48%", left: "92%", dur: 8, del: 2 },
                    { w: 2, h: 2, top: "62%", left: "62%", dur: 6, del: 3.5 },
                    { w: 3, h: 3, top: "90%", left: "70%", dur: 11, del: 0.8 },
                    { w: 2, h: 2, top: "30%", left: "20%", dur: 9, del: 5 },
                    { w: 2, h: 2, top: "75%", left: "48%", dur: 7, del: 1.2 },
                    { w: 3, h: 3, top: "5%", left: "65%", dur: 13, del: 6 },
                    { w: 2, h: 2, top: "92%", left: "15%", dur: 8, del: 2.8 },
                    { w: 2, h: 2, top: "18%", left: "90%", dur: 6, del: 4.2 },
                    { w: 3, h: 3, top: "45%", left: "38%", dur: 10, del: 0.3 },
                    { w: 2, h: 2, top: "78%", left: "8%", dur: 9, del: 3.8 },
                    { w: 2, h: 2, top: "33%", left: "72%", dur: 7, del: 6.5 },
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
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* Edge vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,#020617_100%)]" />
            </div>


            {/* ── Content ── */}
            <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-14 px-2"
                >
                    {/* Badge */}
                    <span className="inline-block px-5 py-1.5 text-sm rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-5 transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105">
                        Our Portfolio
                    </span>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-1">
                        Recent{" "}
                        <span className="text-blue-500 transition-colors duration-500 hover:text-blue-600">
                            Projects
                        </span>
                    </h2>
                    <p className="mt-4 max-w-xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
                        Explore our latest work and see how we&apos;ve helped businesses
                        transform their digital presence.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                    className="flex justify-center mt-14"
                >
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        className="
              relative inline-flex items-center gap-2 px-8 py-3 rounded-full
              text-sm font-semibold text-white
              border border-blue-500/40
              bg-transparent
              overflow-hidden
              transition-all duration-500
              hover:shadow-[0_0_35px_rgba(59,130,246,0.4)]
              group
            "
                    >
                        {/* Shimmer sweep */}
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent skew-x-12" />
                        <span className="relative z-10">View All Projects</span>
                        <FiExternalLink className="relative z-10 text-blue-400 group-hover:translate-x-0.5 transition-transform duration-300" size={14} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
