"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { faqs } from "./FAQ/constants";
import FAQItem from "./FAQ/FAQItem";
import FAQBackground from "./FAQ/FAQBackground";
import FAQHeader from "./FAQ/FAQHeader";

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const toggle = (id: number) =>
        setOpenId((prev) => (prev === id ? null : id));

    return (
        <section
            id="faq"
            className="relative w-full overflow-hidden bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
        >
            <FAQBackground />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="relative z-10 max-w-3xl mx-auto"
                ref={ref}
            >
                <FAQHeader isInView={isInView} />

                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            index={i}
                            isOpen={openId === faq.id}
                            onToggle={() => toggle(faq.id)}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-400 text-sm mb-4">
                        Still have questions? We&apos;re here to help!
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 420, damping: 22 }}
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-shadow duration-200 relative overflow-hidden group"
                    >
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                        <span className="relative z-10">Contact Us</span>
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}
