"use client";

import React from "react";
import { motion } from "framer-motion";

const PortfolioBackground = () => {
    const particles = [
        { w: 2, h: 2, top: "8%", left: "12%", dur: 8, del: 0 },
        { w: 3, h: 3, top: "22%", left: "78%", dur: 10, del: 1.5 },
        { w: 2, h: 2, top: "55%", left: "5%", dur: 9, del: 2.5 },
        { w: 3, h: 3, top: "70%", left: "88%", dur: 11, del: 0.5 },
        { w: 2, h: 2, top: "38%", left: "55%", dur: 7, del: 3 },
        { w: 2, h: 2, top: "14%", left: "44%", dur: 12, del: 1 },
        { w: 3, h: 3, top: "85%", left: "30%", dur: 9, del: 4 },
        { w: 2, h: 2, top: "48%", left: "92%", dur: 10, del: 2 },
    ] as const;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a1628] to-[#020617]" />
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ willChange: "transform" }}
            >
                <div
                    className="w-[150%] h-[150%] rounded-full opacity-[0.04]"
                    style={{
                        background: "conic-gradient(from 0deg, transparent 0deg, #3b82f6 60deg, transparent 120deg, #06b6d4 180deg, transparent 240deg, #8b5cf6 300deg, transparent 360deg)",
                    }}
                />
            </motion.div>

            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-24 -left-16 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px]"
                style={{ willChange: "transform, opacity" }}
            />
            <motion.div
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-24 -right-16 w-[560px] h-[560px] bg-cyan-500/10 rounded-full blur-[120px]"
                style={{ willChange: "transform, opacity" }}
            />
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.15, 0.06] }}
                transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[130px]"
                style={{ willChange: "transform, opacity" }}
            />

            <motion.div
                animate={{ y: ["-5%", "110%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
                style={{ willChange: "transform" }}
            />

            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                    transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.del }}
                    className="absolute rounded-full bg-blue-300"
                    style={{ width: p.w, height: p.h, top: p.top, left: p.left, willChange: "opacity, transform" }}
                />
            ))}

            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,#020617_100%)]" />
        </div>
    );
};

export default PortfolioBackground;
