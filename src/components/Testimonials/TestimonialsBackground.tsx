"use client";

import React from "react";
const TestimonialsBackground = () => {
    const particles = [
        { w: 2, h: 2, top: "10%", left: "8%", dur: 8, del: 0 },
        { w: 3, h: 3, top: "25%", left: "80%", dur: 10, del: 1.5 },
        { w: 2, h: 2, top: "60%", left: "4%", dur: 9, del: 2.5 },
        { w: 3, h: 3, top: "75%", left: "90%", dur: 11, del: 0.5 },
        { w: 2, h: 2, top: "40%", left: "50%", dur: 7, del: 3 },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a1628] to-[#020617]" />
            <div
                className="absolute inset-0 flex items-center justify-center"
            >
                <div
                    className="w-[140%] h-[140%] rounded-full opacity-[0.04]"
                    style={{
                        background:
                            "conic-gradient(from 0deg, transparent 0deg, #3b82f6 60deg, transparent 120deg, #8b5cf6 200deg, transparent 260deg, #06b6d4 320deg, transparent 360deg)",
                    }}
                />
            </div>

            <div
                className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-blue-600/10 rounded-full blur-[100px]"
            />
            <div
                className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]"
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[110px]"
            />

            <div
                className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
            />

            {particles.map((p, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-blue-300"
                    style={{ width: p.w, height: p.h, top: p.top, left: p.left }}
                />
            ))}

            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,#020617_100%)]" />
        </div>
    );
};

export default TestimonialsBackground;
