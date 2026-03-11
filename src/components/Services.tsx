"use client";
import { services } from "./Services/constants";
import ServicesBackground from "./Services/ServicesBackground";
import ServicesHeader from "./Services/ServicesHeader";
import ServiceCard from "./Services/ServiceCard";
import ServicesCTA from "./Services/ServicesCTA";

const Services = () => {
    return (
        <>
            <section id="services" className="py-10 sm:py-12 lg:py-16 bg-[#020617] relative overflow-hidden cursor-default select-none">
                <ServicesBackground />

                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                >
                    <ServicesHeader />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} index={index} service={service} />
                        ))}
                    </div>

                    <ServicesCTA />
                </div>
            </section>
        </>
    );
};

export default Services;
