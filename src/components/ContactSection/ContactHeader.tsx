"use client";

import React from "react";

const ContactHeader = () => {
    return (
        <div className="text-center mb-10">
            <span className="inline-block px-5 py-1.5 text-sm rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                Contact Us
            </span>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                Have a project in mind? We'd love to hear from you. Send us a
                message and we'll respond within 24 hours.
            </p>
        </div>
    );
};

export default ContactHeader;
