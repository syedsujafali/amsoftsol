"use client";

import React from "react";

interface ServiceCardProps {
    index: number;
    service: {
        icon: React.ReactNode;
        title: string;
        description: string;
        features: string[];
        color: string;
        bg: string;
    };
}

const ServiceCard = ({ index, service }: ServiceCardProps) => {
    return (
        <div
            className="group relative bg-slate-900/50 border border-white/5 rounded-2xl p-6 sm:p-7 lg:p-8 hover:border-blue-500/30 transition-all duration-500 ease-out overflow-hidden flex flex-col h-full"
        >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div
                className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${service.bg} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-500 ease-out`}
            >
                <span className={service.color}>{service.icon}</span>
            </div>

            <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors duration-500">
                {service.title}
            </h3>

            <p className="relative z-10 text-gray-400 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
            </p>

            <ul className="relative z-10 space-y-2.5 sm:space-y-3 mb-7 sm:mb-8">
                {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-sm sm:text-[15px]">
                        <span
                            className={`mt-2 w-1.5 h-1.5 rounded-full ${service.color.replace(
                                "text-",
                                "bg-"
                            )} mr-3 flex-shrink-0`}
                        />
                        <span className="leading-relaxed">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceCard;
