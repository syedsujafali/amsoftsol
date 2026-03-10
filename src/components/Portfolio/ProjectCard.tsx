"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { tagColor } from "./constants";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 260, damping: 20 },
    },
};

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        description: string;
        image: string;
        tags: string[];
        link: string;
    };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{
                y: -12,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#0d1526] border border-white/10 transition-[border-color,box-shadow] duration-500 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]"
        >
            <div className="relative w-full h-44 overflow-hidden bg-slate-800/60">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='180' fill='%230d1526'%3E%3Crect width='400' height='180' fill='%230d1526'/%3E%3Ctext x='50%25' y='50%25' fill='%233b82f6' font-size='14' font-family='sans-serif' text-anchor='middle' dy='.35em'%3EScreenshot coming soon%3C/text%3E%3C/svg%3E";
                    }}
                />

                <div className="absolute inset-0 flex items-center justify-center bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-500">
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileHover={{ scale: 1.15 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white"
                    >
                        <FiExternalLink size={18} />
                    </motion.a>
                </div>
            </div>

            <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-1">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`px-3 py-0.5 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 hover:brightness-125 ${tagColor[tag] ?? "bg-white/10 text-gray-300 border-white/20"}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
