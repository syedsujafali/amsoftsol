"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight, FaStar } from "react-icons/fa";

/* ─────────── Testimonial data ─────────── */
const testimonials = [
    {
        id: 1,
        quote:
            "Our website traffic and engagement improved significantly after their mobile responsiveness and UI/UX improvements. The site now feels fast, clean, and easy to use on phones and tablets.",
        name: "Neha Sharma",
        role: "Marketing Head, UrbanMart",
        initials: "NS",
        rating: 5,
        color: "from-blue-500 to-blue-600",
    },
    {
        id: 2,
        quote:
            "AM Software Solution delivered a stunning redesign of our dental clinic website. Patient inquiries increased noticeably after launch. Professional, on-time, and highly skilled team.",
        name: "Dr. Arjun Menon",
        role: "Founder, Simply Smilez Dental",
        initials: "AM",
        rating: 5,
        color: "from-cyan-500 to-blue-500",
    },
    {
        id: 3,
        quote:
            "They built our logistics platform from scratch with a clean dashboard and mobile-ready design. Communication was smooth throughout and the final product exceeded our expectations.",
        name: "Ramesh Patil",
        role: "Director, Shiva Roadlines",
        initials: "RP",
        rating: 5,
        color: "from-violet-500 to-blue-500",
    },
    {
        id: 4,
        quote:
            "The Turbo Shop website now truly represents our brand. Bold visuals, smooth navigation, and great SEO. We've started getting leads directly through the website for the first time.",
        name: "Sanjay Kulkarni",
        role: "Owner, Turbo Shop",
        initials: "SK",
        rating: 5,
        color: "from-indigo-500 to-blue-500",
    },
    {
        id: 5,
        quote:
            "Our furniture website looks premium and converts better than before. The team understood our brand vision instantly and translated it into a beautiful, functional site.",
        name: "Priya Nair",
        role: "CEO, Aldo Modular Furniture",
        initials: "PN",
        rating: 5,
        color: "from-teal-500 to-cyan-500",
    },
    {
        id: 6,
        quote:
            "I was amazed by the speed of delivery and the level of design quality. The new website brought us far more visibility. We get compliments from clients regularly about how professional it looks.",
        name: "Vikram Joshi",
        role: "Managing Director, Taskforce Interiors",
        initials: "VJ",
        color: "from-blue-400 to-indigo-600",
        rating: 5,
    },
];

/* ─────────── Star rating ─────────── */
function Stars({ count }: { count: number }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.07, type: "spring", stiffness: 400, damping: 20 }}
                >
                    <FaStar className="text-yellow-400 text-lg" />
                </motion.span>
            ))}
        </div>
    );
}

/* ─────────── Slide direction variants ─────────── */
const makeVariants = (dir: number) => ({
    enter: { x: dir > 0 ? 80 : -80, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: dir > 0 ? -80 : 80, opacity: 0 },
});

/* ─────────── Main Export ─────────── */
export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(1);
    const [paused, setPaused] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });

    const go = useCallback(
        (next: number, direction: number) => {
            setDir(direction);
            setIndex((next + testimonials.length) % testimonials.length);
        },
        []
    );

    /* Auto-advance every 5 s */
    useEffect(() => {
        if (paused) return;
        const t = setInterval(() => go(index + 1, 1), 5000);
        return () => clearInterval(t);
    }, [index, paused, go]);

    const current = testimonials[index];
    const variants = makeVariants(dir);

    return (
        <section
            id="testimonials"
            className="relative w-full overflow-hidden bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* ── Animated background ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a1628] to-[#020617]" />

                {/* Aurora */}
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div
                        className="w-[140%] h-[140%] rounded-full opacity-[0.06]"
                        style={{
                            background:
                                "conic-gradient(from 0deg, transparent 0deg, #3b82f6 60deg, transparent 120deg, #8b5cf6 200deg, transparent 260deg, #06b6d4 320deg, transparent 360deg)",
                        }}
                    />
                </motion.div>

                {/* Orb left */}
                <motion.div
                    animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.4, 0.2], x: [0, 80, -40, 0], y: [0, -60, 60, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-blue-600/20 rounded-full blur-[130px]"
                />
                {/* Orb right */}
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15], x: [0, -100, 80, 0], y: [0, 80, -60, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[150px]"
                />
                {/* Orb centre */}
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.2, 0.08] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 6 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]"
                />

                {/* Scan line */}
                <motion.div
                    animate={{ y: ["-5%", "110%"] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
                />

                {/* Star particles */}
                {([
                    { w: 2, h: 2, top: "10%", left: "8%", dur: 7, del: 0 },
                    { w: 3, h: 3, top: "25%", left: "80%", dur: 9, del: 1.5 },
                    { w: 2, h: 2, top: "60%", left: "4%", dur: 8, del: 2.5 },
                    { w: 3, h: 3, top: "75%", left: "90%", dur: 10, del: 0.5 },
                    { w: 2, h: 2, top: "40%", left: "50%", dur: 6, del: 3 },
                    { w: 2, h: 2, top: "88%", left: "35%", dur: 8, del: 4 },
                    { w: 3, h: 3, top: "15%", left: "60%", dur: 11, del: 1 },
                    { w: 2, h: 2, top: "50%", left: "95%", dur: 7, del: 5 },
                    { w: 2, h: 2, top: "80%", left: "18%", dur: 9, del: 3.5 },
                    { w: 3, h: 3, top: "5%", left: "40%", dur: 13, del: 6 },
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
            <div className="relative z-10 max-w-4xl mx-auto" ref={ref}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-5 py-1.5 text-sm rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105 cursor-default">
                        Testimonials
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        What Our{" "}
                        <span className="text-blue-500">Clients Say</span>
                    </h2>

                    <p className="mt-4 max-w-xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
                        Don&apos;t just take our word for it. Here&apos;s what our valued clients have
                        to say about working with us.
                    </p>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="relative"
                >
                    <motion.div
                        whileHover={{ y: -6, scale: 1.015 }}
                        transition={{ type: "spring", stiffness: 380, damping: 24 }}
                        className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden min-h-[260px] sm:min-h-[240px] p-8 sm:p-10 group"
                    >
                        {/* Hover glow border */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{ boxShadow: "inset 0 0 0 1px rgba(59,130,246,0.35), 0 0 60px rgba(59,130,246,0.18)" }}
                        />

                        {/* Inner glow line top */}
                        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

                        {/* Corner accent top-left */}
                        <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500/5 rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        {/* Corner accent bottom-right */}
                        <div className="absolute bottom-0 right-0 w-20 h-20 bg-violet-500/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        <AnimatePresence mode="wait" custom={dir}>
                            <motion.div
                                key={current.id}
                                custom={dir}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: "easeOut" }}
                            >
                                {/* Quote icon */}
                                <div className="mb-6">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 transition-all duration-300 group-hover:bg-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                                        <FaQuoteRight size={18} />
                                    </div>
                                </div>

                                {/* Quote text */}
                                <p className="text-base sm:text-lg text-gray-100 leading-relaxed mb-8 max-w-3xl">
                                    &ldquo;{current.quote}&rdquo;
                                </p>

                                {/* Author row */}
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div className="flex items-center gap-4">
                                        {/* Avatar */}
                                        <div
                                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${current.color} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                                        >
                                            {current.initials}
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm sm:text-base leading-tight">
                                                {current.name}
                                            </p>
                                            <p className="text-gray-400 text-xs sm:text-sm">
                                                {current.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stars */}
                                    <Stars key={current.id} count={current.rating} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>


                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="flex items-center justify-center gap-4 mt-8"
                >
                    {/* Prev */}
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

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {testimonials.map((_, i) => (
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

                    {/* Next */}
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

            </div>
        </section>
    );
}
