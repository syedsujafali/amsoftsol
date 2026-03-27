"use client";

import React from "react";
import { FaClock, FaRocket, FaUsers, FaAward } from "react-icons/fa";
import Counter from "./Counter";

const AboutStats = () => {
    const stats = [
        {
            icon: <FaClock className="text-blue-500 mx-auto mb-3 text-3xl sm:text-4xl" />,
            value: 8,
            label: "Years of Expertise",
        },
        {
            icon: <FaRocket className="text-blue-500 mx-auto mb-3 text-3xl sm:text-4xl" />,
            value: 200,
            label: "Web Projects Delivered",
        },
        {
            icon: <FaUsers className="text-blue-500 mx-auto mb-3 text-3xl sm:text-4xl" />,
            value: 120,
            label: "Satisfied Clients",
        },
        {
            icon: <FaAward className="text-blue-500 mx-auto mb-3 text-3xl sm:text-4xl" />,
            value: 15,
            label: "Industry Recognitions",
        },
    ];

    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20 lg:mt-24"
        >
            {stats.map((stat, i) => (
                <div
                    key={i}
                    className="group p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 text-center transition-all duration-500 hover:scale-105 hover:border-blue-500/40 hover:shadow-[0_0_45px_rgba(59,130,246,0.35)]"
                >
                    {stat.icon}
                    <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center gap-1">
                        <Counter value={stat.value} />
                        <span className="text-blue-500 inline-block transition-transform duration-500 group-hover:rotate-360">
                            +
                        </span>
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

export default AboutStats;
