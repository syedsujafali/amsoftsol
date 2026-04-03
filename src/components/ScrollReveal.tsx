"use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

export default function ScrollReveal({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay }}
            >
                {children}
            </m.div>
        </LazyMotion>
    );
}
