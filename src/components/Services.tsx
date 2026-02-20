"use client";

import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import {
    FaGlobe,
    FaMobileAlt,
    FaPalette,
    FaCloud,
    FaShoppingCart,
    FaChartLine,
    FaArrowRight,
} from "react-icons/fa";

const Services = () => {
    const services = [
        {
            icon: <FaGlobe size={22} />,
            title: "Web Development",
            description:
                "Custom websites and web applications built with modern technologies for optimal performance and scalability.",
            features: ["React & Next.js", "Node.js & Python", "WordPress & CMS"],
            color: "text-blue-400",
            bg: "bg-blue-500/10",
        },
        {
            icon: <FaMobileAlt size={22} />,
            title: "Mobile Responsiveness",
            description:
                "Fully responsive websites optimized for all screen sizes, ensuring smooth performance and consistent user experience across devices.",
            features: [
                "Mobile-First Design",
                "Tablet Optimization",
                "Cross-Browser Compatibility",
            ],
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
        },
        {
            icon: <FaPalette size={22} />,
            title: "UI/UX Design",
            description:
                "User-centered design solutions that combine aesthetics with functionality for maximum engagement.",
            features: ["User Research", "Wireframing", "Prototyping"],
            color: "text-purple-400",
            bg: "bg-purple-500/10",
        },
        {
            icon: <FaCloud size={22} />,
            title: "Cloud & Database",
            description:
                "Secure, scalable cloud infrastructure with expert IT consulting for modern digital systems.",
            features: ["AWS & GCP", "Mongo DB", "SQL Databases"],
            color: "text-sky-400",
            bg: "bg-sky-500/10",
        },
        {
            icon: <FaShoppingCart size={22} />,
            title: "E-commerce Development",
            description:
                "Complete e-commerce solutions that drive sales and provide exceptional shopping experiences.",
            features: [
                "Shopify & WooCommerce",
                "Payment Integration",
                "Inventory Management",
            ],
            color: "text-indigo-400",
            bg: "bg-indigo-500/10",
        },
        {
            icon: <FaChartLine size={22} />,
            title: "SEO & Digital Marketing",
            description:
                "Data-driven marketing strategies that increase visibility, traffic, and conversions.",
            features: ["SEO Optimization", "PPC Campaigns", "Social Media Marketing"],
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
        },
    ];

    return (
        <LazyMotion features={domAnimation}>
            <section id="services" className="py-14 sm:py-16 lg:py-28 bg-[#020617] relative overflow-hidden cursor-default select-none">
                {/* Modern Background */}
                <div className="absolute inset-0 bg-[#020617]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
                    <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-14 lg:mb-20 flex flex-col items-center gap-4 sm:gap-5">
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{
                                scale: 1.08,
                                transition: { type: "spring", stiffness: 160, damping: 18, mass: 0.6 },
                            }}
                            className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium transition-all duration-500 ease-out hover:shadow-[0_0_28px_rgba(59,130,246,0.65)] hover:border-blue-500/60"
                        >
                            Our Services
                        </m.div>


                        <m.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{
                                scale: 1.06,
                                transition: { type: "spring", stiffness: 160, damping: 18, mass: 0.6 },
                            }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight inline-block transition-all duration-500 ease-out hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
                        >
                            What We <span className="text-blue-500">Offer</span>
                        </m.h2>



                        <m.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-1"
                        >
                            Comprehensive digital solutions tailored to your business needs.
                            From concept to deployment, we deliver excellence at every step.
                        </m.p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <m.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                    transition: { type: "spring", stiffness: 160, damping: 18, mass: 0.6 },
                                }}
                                className="group relative bg-slate-900/50 border border-white/5 rounded-2xl p-6 sm:p-7 lg:p-8 hover:border-blue-500/30 transition-all duration-500 ease-out overflow-hidden flex flex-col h-full"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon */}
                                <div
                                    className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${service.bg} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-500 ease-out`}
                                >
                                    <span className={service.color}>{service.icon}</span>
                                </div>

                                {/* Content */}
                                <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors duration-500">
                                    {service.title}
                                </h3>

                                <p className="relative z-10 text-gray-400 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul className="relative z-10 space-y-2.5 sm:space-y-3 mb-7 sm:mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start text-gray-300 text-sm sm:text-[15px]"
                                        >
                                            <span
                                                className={`mt-2 w-1.5 h-1.5 rounded-full ${service.color.replace("text-", "bg-")
                                                    } mr-3 flex-shrink-0`}
                                            />
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Learn More Link (Always Bottom Aligned) */}
                                <a
                                    href="#"
                                    className={`relative z-10 mt-auto inline-flex items-center text-sm font-semibold ${service.color} hover:brightness-110 transition-all duration-500 group-hover:translate-x-1`}
                                >
                                    Learn More <FaArrowRight className="ml-2 w-3 h-3" />
                                </a>
                            </m.div>
                        ))}
                    </div>


                    {/* CTA Section */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="mt-14 sm:mt-16 lg:mt-20 text-center"
                    >
                        <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg px-2">
                            Need a custom solution? Let's discuss your project requirements.
                        </p>

                        <m.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-base sm:text-lg shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-200 w-full sm:w-auto"
                        >
                            Start Your Project <FaArrowRight className="ml-2" />
                        </m.a>
                    </m.div>
                </div>
            </section>
        </LazyMotion>
    );
};

export default Services;
