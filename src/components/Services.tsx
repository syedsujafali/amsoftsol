"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";
import { services } from "./Services/constants";
import ServicesBackground from "./Services/ServicesBackground";
import ServicesHeader from "./Services/ServicesHeader";
import ServiceCard from "./Services/ServiceCard";
import ServicesCTA from "./Services/ServicesCTA";

const Services = () => {
    return (
        <LazyMotion features={domAnimation}>
            <section id="services" className="py-14 sm:py-16 lg:py-28 bg-[#020617] relative overflow-hidden cursor-default select-none">
                <ServicesBackground />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                >
                    <ServicesHeader />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} index={index} service={service} />
                        ))}
                    </div>

                    <ServicesCTA />
                </motion.div>
            </section>
        </LazyMotion>
    );
};

export default Services;
