"use client";

import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "./Portfolio/constants";
import ProjectCard from "./Portfolio/ProjectCard";
import PortfolioBackground from "./Portfolio/PortfolioBackground";
import PortfolioHeader from "./Portfolio/PortfolioHeader";

export default function Portfolio() {
    return (
        <section
            id="portfolio"
            className="relative min-h-screen w-full overflow-hidden bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        >
            <PortfolioBackground />

            <div className="relative z-10 max-w-7xl mx-auto">
                <PortfolioHeader />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="flex justify-center mt-14">
                    <a
                        href="#"
                        className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white border border-blue-500/40 bg-transparent overflow-hidden transition-all duration-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] group"
                    >
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent skew-x-12" />
                        <span className="relative z-10">View All Projects</span>
                        <FiExternalLink className="relative z-10 text-blue-400 group-hover:translate-x-0.5 transition-transform duration-300" size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
}
