"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaFlag } from "react-icons/fa";

const AboutContent = () => {
    const points = [
        {
            title: "Our Mission",
            description: "To craft intuitive UI/UX designs and high-performance web solutions that enhance usability, engagement, and business growth.",
            icon: (
                <div className="relative flex items-center justify-center">
                    <span className="absolute h-6 w-6 rounded-full border-2 border-blue-500"></span>
                    <span className="absolute h-4 w-4 rounded-full border-2 border-blue-500"></span>
                    <span className="h-2 w-2 rounded-full border-2 border-blue-500 bg-transparent"></span>
                </div>
            ),
        },
        {
            title: "Our Vision",
            description: "To be a trusted digital partner known for clean design, scalable web development, and data-driven SEO strategies.",
            icon: <FaEye className="text-blue-500 text-lg sm:text-xl" />,
        },
        {
            title: "Our Goal",
            description: "To redesign and develop modern websites that load fast, rank higher, and deliver seamless user experiences.",
            icon: <FaFlag className="text-blue-500 text-lg sm:text-xl" />,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-105 transform inline-block">
                Designing & Developing <span className="text-blue-500">Impactful Web <br className="hidden sm:block" /> Experiences</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                At AM Software Solution, we specialize in UI/UX design, website redesign, and full-stack web development backed by database. Every interface we design is user-centric and conversion-focused.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
                From SEO-optimized landing pages to scalable web applications, we ensure fast load times, clean architecture, and seamless performance across all devices.
            </p>

            <div className="space-y-3 sm:space-y-4">
                {points.map((pt, i) => (
                    <div key={i} className="group flex gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-500 hover:bg-blue-500/5 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] hover:scale-105">
                        <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                            {pt.icon}
                        </div>
                        <div>
                            <h4 className="font-semibold text-base mb-1">{pt.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{pt.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default AboutContent;
