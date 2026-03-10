"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "./Portfolio/constants";
import ProjectCard from "./Portfolio/ProjectCard";
import PortfolioBackground from "./Portfolio/PortfolioBackground";
import PortfolioHeader from "./Portfolio/PortfolioHeader";

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.1
        },
    },
};

export default function Portfolio() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section
            id="portfolio"
            className="relative min-h-screen w-full overflow-hidden bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-24"
        >
            <PortfolioBackground />

            <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
                <PortfolioHeader isInView={isInView} />

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
                        className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white border border-blue-500/40 bg-transparent overflow-hidden transition-all duration-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] group"
                    >
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent skew-x-12" />
                        <span className="relative z-10">View All Projects</span>
                        <FiExternalLink className="relative z-10 text-blue-400 group-hover:translate-x-0.5 transition-transform duration-300" size={14} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
