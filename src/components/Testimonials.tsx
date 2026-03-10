"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
    const isInView = useInView(ref, { once: true, amount: 0.2 });

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
            className="relative w-full overflow-hidden bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <TestimonialsBackground />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="relative z-10 max-w-4xl mx-auto"
                ref={ref}
            >
                <TestimonialsHeader isInView={isInView} />
                <TestimonialSlide current={current} dir={dir} />
                <TestimonialsNavigation isInView={isInView} index={index} total={testimonials.length} go={go} />
            </motion.div>
        </section>
    );
}
