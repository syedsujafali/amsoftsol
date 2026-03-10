"use client";

import React from "react";
import { m } from "framer-motion";

interface FeatureCardProps {
    i: number;
    feat: {
        type: string;
        title?: string;
        subtitle?: string;
        label?: string;
        icon?: React.ReactNode;
    };
    isThrowing: boolean;
    isIntroSkipped: boolean;
    pos: { x: number; y: number };
    arc: { arcY: number; rot: number };
    offsets: { x: number; y: number };
}

const FeatureCard = ({
    i,
    feat,
    isThrowing,
    isIntroSkipped,
    pos,
    arc,
    offsets,
}: FeatureCardProps) => {
    const startX = offsets.x;
    const startY = offsets.y;

    const xFrames = isThrowing
        ? [startX, pos.x * 1.25, pos.x * 0.92, pos.x * 1.02, pos.x]
        : [startX, startX, startX, startX, startX];

    const yFrames = isThrowing
        ? [startY, pos.y + arc.arcY, pos.y * 1.08, pos.y * 0.98, pos.y]
        : [startY, startY, startY, startY, startY];

    const rFrames = isThrowing
        ? [0, arc.rot, arc.rot * 0.35, arc.rot * 0.1, 0]
        : [0, 0, 0, 0, 0];

    return (
        <m.div
            className="absolute z-20 will-change-transform pointer-events-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: isThrowing ? 1 : 0,
                scale: isThrowing ? [0.15, 1.1, 0.98, 1] : 0.15,
                x: xFrames,
                y: yFrames,
                rotate: rFrames,
                filter: isThrowing ? ["blur(10px)", "blur(0px)"] : "blur(10px)",
            }}
            transition={{
                duration: isIntroSkipped ? 0.5 : 1.25,
                delay: isIntroSkipped ? 0.1 + i * 0.08 : isThrowing ? 0.22 + i * 0.16 : 0,
                ease: [0.16, 1, 0.3, 1],
            }}
            style={{ willChange: "transform" }}
        >
            <m.div
                whileHover={{
                    scale: 1.08,
                    y: -12,
                    boxShadow: "0 20px 60px rgba(59,130,246,0.3), 0 0 40px rgba(6,182,212,0.2)",
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        mass: 0.8,
                    },
                }}
                className="
          w-32 h-36 lg:w-36 lg:h-40
          rounded-2xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          flex flex-col items-center justify-center
          text-white shadow-2xl
          cursor-pointer
          group
          transition-all duration-500 ease-out
          hover:bg-blue-500/10 hover:border-blue-400/40
        "
            >
                <m.div
                    animate={{
                        y: [0, -12, 0],
                        rotate: [0, 4, 0, -4, 0],
                    }}
                    transition={{
                        duration: 6 + i * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="flex flex-col items-center gap-3 text-center"
                    style={{ willChange: "transform" }}
                >
                    {feat.type === "text" ? (
                        <>
                            <span className="text-5xl font-extrabold bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                                {feat.title}
                            </span>
                            <span className="text-xs font-bold text-cyan-200/70 uppercase tracking-[0.2em]">
                                {feat.subtitle}
                            </span>
                        </>
                    ) : (
                        <>
                            <m.div
                                className="text-6xl lg:text-7xl transition-all duration-500 group-hover:scale-125"
                                style={{
                                    color: "#06b6d4",
                                    filter:
                                        "drop-shadow(0 0 20px rgba(6,182,212,0.8)) drop-shadow(0 0 40px rgba(59,130,246,0.6))",
                                    willChange: "transform",
                                }}
                                whileHover={{
                                    filter:
                                        "drop-shadow(0 0 30px rgba(6,182,212,1)) drop-shadow(0 0 60px rgba(59,130,246,0.8))",
                                    color: "#22d3ee",
                                }}
                            >
                                {feat.icon}
                            </m.div>
                            <span className="text-xs font-bold text-cyan-200/70 uppercase tracking-[0.2em]">
                                {feat.label}
                            </span>
                        </>
                    )}
                </m.div>
            </m.div>
        </m.div>
    );
};

export default FeatureCard;
