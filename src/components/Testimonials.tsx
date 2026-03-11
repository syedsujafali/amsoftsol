"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { testimonials } from "./Testimonials/constants";
import TestimonialsBackground from "./Testimonials/TestimonialsBackground";
import TestimonialsHeader from "./Testimonials/TestimonialsHeader";
import TestimonialSlide from "./Testimonials/TestimonialSlide";
import TestimonialsNavigation from "./Testimonials/TestimonialsNavigation";

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(1);
    const [paused, setPaused] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const go = useCallback((next: number, direction: number) => {
        setDir(direction);
        setIndex((next + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        if (paused) return;
        const t = setInterval(() => go(index + 1, 1), 5000);
        return () => clearInterval(t);
    }, [index, paused, go]);

    const current = testimonials[index];

    return (
        <section
            id="testimonials"
            className="relative w-full overflow-hidden bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <TestimonialsBackground />

            <div
                className="relative z-10 max-w-4xl mx-auto"
                ref={ref}
            >
                <TestimonialsHeader />
                <TestimonialSlide current={current} dir={dir} />
                <TestimonialsNavigation index={index} total={testimonials.length} go={go} />
            </div>
        </section>
    );
}
