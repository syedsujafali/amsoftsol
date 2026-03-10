"use client";

import React from "react";
import { m } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ServicesCTA = () => {
    return (
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
    );
};

export default ServicesCTA;
