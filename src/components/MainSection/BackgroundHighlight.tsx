"use client";

import React, { useEffect, useRef } from "react";
import { m, useSpring, useMotionTemplate, useMotionValue } from "framer-motion";
import {
    FaRocket,
    FaLock,
    FaCode,
    FaDatabase,
    FaSearch,
    FaReact,
    FaHtml5,
} from "react-icons/fa";

const BackgroundHighlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rafRef = useRef<number | null>(null);
    const lastMouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Set initial position to screen center after mount (client-only)
        mouseX.set(window.innerWidth / 2);
        mouseY.set(window.innerHeight / 2);

        const isDesktop = window.matchMedia("(min-width: 768px)").matches;
        if (!isDesktop) return;

        const handleMouseMove = (e: MouseEvent) => {
            lastMouse.current = { x: e.clientX, y: e.clientY };
            if (rafRef.current) return;

            rafRef.current = requestAnimationFrame(() => {
                mouseX.set(lastMouse.current.x);
                mouseY.set(lastMouse.current.y);
                rafRef.current = null;
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [mouseX, mouseY]);

    const flashlightRadius = useSpring(300, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const handleResize = () => {
            flashlightRadius.set(window.innerWidth < 768 ? 150 : 300);
        };
        handleResize();
        window.addEventListener("resize", handleResize, { passive: true });
        return () => window.removeEventListener("resize", handleResize);
    }, [flashlightRadius]);

    const maskImage = useMotionTemplate`radial-gradient(${flashlightRadius}px circle at ${mouseX}px ${mouseY}px, black, rgba(0,0,0,0.15))`;

    const items = [
        { Icon: FaReact, color: "text-cyan-400", top: "10%", left: "10%" },
        { Icon: FaDatabase, color: "text-emerald-400", top: "20%", left: "80%" },
        { Icon: FaCode, color: "text-blue-500", top: "50%", left: "50%" },
        { Icon: FaLock, color: "text-rose-400", top: "80%", left: "20%" },
        { Icon: FaSearch, color: "text-purple-400", top: "60%", left: "85%" },
        { Icon: FaRocket, color: "text-orange-400", top: "15%", left: "40%" },
        { Icon: FaHtml5, color: "text-orange-600", top: "75%", left: "60%" },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden -z-30 bg-[#020617]">
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />

            <m.div
                className="absolute inset-0 opacity-100"
                style={{ maskImage, WebkitMaskImage: maskImage }}
            >
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.2) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 2px, transparent 2px)
            `,
                        backgroundSize: "60px 60px",
                    }}
                />

                <div className="absolute inset-0 overflow-hidden opacity-100 select-none pointer-events-none">
                    {items.map((item, i) => (
                        <m.div
                            key={i}
                            className={`absolute ${item.color} opacity-70 text-3xl sm:text-4xl md:text-5xl`}
                            style={{
                                top: item.top,
                                left: item.left,
                                willChange: "transform",
                            }}
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 8 + i * 0.4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                                rotate: {
                                    duration: 10 + i * 0.4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        >
                            <item.Icon className="drop-shadow-[0_0_8px_rgba(34,211,238,0.25)]" />
                        </m.div>
                    ))}

                    <m.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full border-dashed"
                        style={{ willChange: "transform" }}
                    />
                </div>
            </m.div>

            <m.div
                animate={{ rotate: [0, 90, 180], x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] right-[10%] w-64 h-64 border border-blue-500/10 rounded-full border-dashed pointer-events-none"
                style={{ willChange: "transform" }}
            />

            <m.div
                animate={{ rotate: [360, 180, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[10%] left-[5%] w-96 h-96 border border-cyan-500/10 rounded-full border-dotted pointer-events-none"
                style={{ willChange: "transform" }}
            />

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        </div>
    );
};

export default BackgroundHighlight;
