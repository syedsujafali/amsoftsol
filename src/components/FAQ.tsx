"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────── FAQ data ─────────── */
const faqs = [
    {
        id: 1,
        question: "What services does AM Software Solution provide?",
        answer:
            "We offer UI/UX design, full-stack web development, website redesign, SEO optimization, and ongoing maintenance. Whether you need a landing page, an e-commerce platform, or a complex web application — we handle it end to end.",
    },
    {
        id: 2,
        question: "How long does it typically take to complete a project?",
        answer:
            "Project timelines vary based on complexity. A standard website redesign takes 2–4 weeks, while a custom web application can take 6–12 weeks. We provide a detailed timeline at the start of every project.",
    },
    {
        id: 3,
        question: "What is your development process like?",
        answer:
            "We follow a structured 4-phase process: Discovery & planning → Design (wireframes + UI) → Development → Testing & launch. We keep you involved at every stage with regular updates and review checkpoints.",
    },
    {
        id: 4,
        question: "Do you provide post-launch support and maintenance?",
        answer:
            "Yes. We offer flexible post-launch support packages covering bug fixes, content updates, performance monitoring, and feature additions. Your website stays fast, secure, and up to date.",
    },
    {
        id: 5,
        question: "How do you handle project pricing?",
        answer:
            "Pricing is project-based and depends on scope, complexity, and timeline. We provide a transparent, itemised quote after an initial consultation — no hidden fees.",
    },
    {
        id: 6,
        question: "Can you work with our existing website or systems?",
        answer:
            "Absolutely. We specialise in redesigning and improving existing websites. We can integrate with your current CMS, database, or third-party tools while modernising the UI and improving performance.",
    },
    {
        id: 7,
        question: "What technologies do you specialise in?",
        answer:
            "Our core stack includes Next.js, React, Node.js, and Tailwind CSS for web apps, along with WordPress for CMS-based sites. We also work with databases like PostgreSQL, MongoDB, and MySQL.",
    },
    {
        id: 8,
        question: "How do we get started with a project?",
        answer:
            "Simply reach out via our contact form or email. We'll schedule a free discovery call to understand your goals, then provide a proposal with timeline and pricing within 48 hours.",
    },
];

/* ─────────── Single FAQ item ─────────── */
function FAQItem({
    faq,
    index,
    isOpen,
    onToggle,
}: {
    faq: (typeof faqs)[number];
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
        >
            <motion.div
                whileHover={{ scale: 1.012, y: -2 }}
                transition={{ type: "spring", stiffness: 450, damping: 28 }}
                style={{ willChange: "transform" }}
                className="relative rounded-2xl bg-white/[0.04] backdrop-blur-sm overflow-hidden group cursor-pointer"
                onClick={onToggle}
            >
                {/* Border — CSS only, no framer-motion */}
                <div
                    className="absolute inset-0 rounded-2xl border pointer-events-none transition-colors duration-150"
                    style={{
                        borderColor: isOpen
                            ? "rgba(59,130,246,0.40)"
                            : "rgba(255,255,255,0.08)",
                    }}
                />

                {/* Hover glow */}
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(59,130,246,0.18), 0 0 28px rgba(59,130,246,0.07)" }}
                />

                {/* Active left accent */}
                <div
                    className="absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full transition-all duration-200 origin-top"
                    style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "scaleY(1)" : "scaleY(0)",
                    }}
                />

                {/* Question row */}
                <div className="flex items-center justify-between px-6 py-5 select-none">
                    <span
                        className="text-sm sm:text-base font-semibold pr-4 transition-colors duration-150"
                        style={{ color: isOpen ? "#60a5fa" : "white" }}
                    >
                        {faq.question}
                    </span>

                    {/* + / × icon — framer spring only on rotation (transform, GPU-only) */}
                    <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        style={{ willChange: "transform" }}
                        className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-lg leading-none font-light transition-colors duration-150 ${isOpen
                            ? "border-blue-500/60 text-blue-400 bg-blue-500/10"
                            : "border-white/20 text-gray-400 group-hover:border-blue-500/40 group-hover:text-blue-400"
                            }`}
                    >
                        +
                    </motion.span>
                </div>

                {/* Answer — pure CSS max-height transition (no JS per-frame calc) */}
                <div
                    className="overflow-hidden"
                    style={{
                        maxHeight: isOpen ? "500px" : "0px",
                        opacity: isOpen ? 1 : 0,
                        transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out",
                    }}
                >
                    <p className="px-6 pb-5 text-gray-400 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}



/* ─────────── Main Export ─────────── */
export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const toggle = (id: number) =>
        setOpenId((prev) => (prev === id ? null : id));

    return (
        <section
            id="faq"
            className="relative w-full overflow-hidden bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
        >
            {/* ── Animated background ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a1628] to-[#020617]" />

                {/* Aurora */}
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div
                        className="w-[140%] h-[140%] rounded-full opacity-[0.06]"
                        style={{
                            background:
                                "conic-gradient(from 0deg, transparent 0deg, #3b82f6 70deg, transparent 140deg, #06b6d4 210deg, transparent 280deg, #8b5cf6 340deg, transparent 360deg)",
                        }}
                    />
                </motion.div>

                {/* Orbs */}
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, 100, -60, 0], y: [0, -60, 80, 0] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-24 -left-16 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[130px]"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15], x: [0, -100, 80, 0], y: [0, 80, -60, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute -bottom-24 -right-16 w-[520px] h-[520px] bg-violet-600/12 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.18, 0.06] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 7 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-cyan-500/10 rounded-full blur-[140px]"
                />

                {/* Scan line */}
                <motion.div
                    animate={{ y: ["-5%", "110%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent"
                />

                {/* Particles */}
                {([
                    { w: 2, h: 2, top: "8%", left: "10%", dur: 7, del: 0 },
                    { w: 3, h: 3, top: "22%", left: "82%", dur: 9, del: 1.5 },
                    { w: 2, h: 2, top: "58%", left: "5%", dur: 8, del: 2.5 },
                    { w: 3, h: 3, top: "72%", left: "91%", dur: 10, del: 0.5 },
                    { w: 2, h: 2, top: "38%", left: "52%", dur: 6, del: 3 },
                    { w: 2, h: 2, top: "87%", left: "33%", dur: 8, del: 4 },
                    { w: 3, h: 3, top: "14%", left: "62%", dur: 11, del: 1 },
                    { w: 2, h: 2, top: "50%", left: "96%", dur: 7, del: 5 },
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
            <div className="relative z-10 max-w-3xl mx-auto" ref={ref}>

                {/* Header */}
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
                        Frequently Asked{" "}
                        <span className="text-blue-500">Questions</span>
                    </h2>

                    <p className="mt-4 max-w-lg mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
                        Find answers to common questions about our services, process, and
                        working with us.
                    </p>
                </motion.div>

                {/* FAQ list */}
                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            index={i}
                            isOpen={openId === faq.id}
                            onToggle={() => toggle(faq.id)}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-400 text-sm mb-4">
                        Still have questions? We&apos;re here to help!
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 420, damping: 22 }}
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-shadow duration-200 relative overflow-hidden group"
                    >
                        {/* Shimmer */}
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                        <span className="relative z-10">Contact Us</span>
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
}
