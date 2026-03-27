"use client";

import React from "react";
import { m } from "framer-motion";
import Image from "next/image";

interface LogoHubProps {
    hubRef: React.RefObject<HTMLDivElement | null>;
    isDone: boolean;
    isMobile: boolean;
    introPhase: "logoOnly" | "spinning" | "throwing" | "done";
    offsets: { x: number; y: number };
    isIntroSkipped: boolean;
}

const LogoHub = ({
    hubRef,
    isDone,
    isMobile,
    introPhase,
    offsets,
    isIntroSkipped,
}: LogoHubProps) => {
    return (
        <div className="relative z-10 flex items-center justify-center pointer-events-auto">
            <m.div
                className="absolute w-[360px] h-[360px] lg:w-[400px] lg:h-[400px] rounded-full pointer-events-none"
                style={{
                    background:
                        "conic-gradient(from 0deg, transparent 0%, rgba(59, 130, 246, 0.35) 50%, transparent 50.1%)",
                    maskImage: "radial-gradient(circle, transparent 30%, black 70%)",
                    WebkitMaskImage: "radial-gradient(circle, transparent 30%, black 70%)",
                    willChange: "transform",
                }}
                animate={{
                    opacity: 1,
                    rotate: 360,
                }}
                transition={{
                    rotate: { duration: 4.5, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 0.5 },
                }}
            />

            {[0, 1].map((i) => (
                <m.div
                    key={`atmos-${i}`}
                    className="absolute w-28 h-28 lg:w-32 lg:h-32 rounded-full border border-pink-500/30"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{
                        scale: 3.5,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ willChange: "transform" }}
                />
            ))}

            <m.div
                className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center border border-white/30 z-10 overflow-hidden"
                animate={{
                    scale: isDone ? [1, 1.08, 1] : 1,
                    boxShadow: isDone
                        ? [
                            "0 0 45px rgba(255,255,255,0.12), 0 0 80px rgba(34,211,238,0.20)",
                            "0 0 70px rgba(255,255,255,0.18), 0 0 140px rgba(59,130,246,0.35)",
                            "0 0 45px rgba(255,255,255,0.12), 0 0 80px rgba(34,211,238,0.20)",
                        ]
                        : "0 0 30px rgba(255,255,255,0.12)",
                }}
                transition={{
                    scale: isDone
                        ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 0.2 },
                    boxShadow: isDone
                        ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 0.2 },
                }}
                style={{ willChange: "transform" }}
            >
                <m.div
                    className="absolute inset-0 rounded-full"
                    animate={{ opacity: 1 }}
                    style={{
                        background:
                            "conic-gradient(from 0deg, rgba(34,211,238,0.9), rgba(59,130,246,0.9), rgba(99,102,241,0.9), rgba(34,211,238,0.9))",
                        maskImage: "radial-gradient(circle, transparent 55%, black 70%)",
                        WebkitMaskImage: "radial-gradient(circle, transparent 55%, black 70%)",
                    }}
                    transition={{ duration: 0.8 }}
                />

                <m.div
                    ref={hubRef}
                    className="relative z-10 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                        isMobile
                            ? { x: 0, y: 0, scale: 1, opacity: 1 }
                            : {
                                x: (introPhase === "logoOnly" || introPhase === "spinning") ? offsets.x : 0,
                                y: (introPhase === "logoOnly" || introPhase === "spinning") ? offsets.y : 0,
                                scale: 1,
                                opacity: 1,
                            }
                    }
                    transition={{
                        x: { duration: isIntroSkipped ? 0.3 : 1.2, ease: [0.16, 1, 0.3, 1] },
                        y: { duration: isIntroSkipped ? 0.3 : 1.2, ease: [0.16, 1, 0.3, 1] },
                        scale: { duration: 0.8 },
                        opacity: { duration: 0.6 }
                    }}
                >
                    <m.div
                        animate={introPhase === "spinning" ? {} : { rotate: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={introPhase === "spinning" ? "animate-rotate-logo relative z-50 flex items-center justify-center" : "relative z-50 flex items-center justify-center"}
                    >
                        <Image
                            src="/logo.png"
                            alt="AM Logo"
                            width={120}
                            height={120}
                            className="w-20 h-20 lg:w-24 lg:h-24 object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] filter brightness-110"
                            priority
                            unoptimized
                        />
                    </m.div>
                </m.div>
            </m.div>
        </div >
    );
};

export default LogoHub;
