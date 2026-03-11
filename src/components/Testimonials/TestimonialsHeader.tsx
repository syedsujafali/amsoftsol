"use client";

import React from "react";

const TestimonialsHeader = () => {
    return (
        <div className="text-center mb-8">
            <span className="inline-block px-5 py-1.5 text-sm rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105 cursor-default">
                Testimonials
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                What Our <span className="text-blue-500">Clients Say</span>
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
                Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say about working with us.
            </p>
        </div>
    );
};

export default TestimonialsHeader;
