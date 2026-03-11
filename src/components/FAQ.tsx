"use client";

import React, { useState } from "react";
import { faqs } from "./FAQ/constants";
import FAQItem from "./FAQ/FAQItem";
import FAQBackground from "./FAQ/FAQBackground";
import FAQHeader from "./FAQ/FAQHeader";

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggle = (id: number) =>
        setOpenId((prev) => (prev === id ? null : id));

    return (
        <section
            id="faq"
            className="relative w-full overflow-hidden bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        >
            <FAQBackground />

            <div className="relative z-10 max-w-3xl mx-auto">
                <FAQHeader />

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

                <div className="text-center mt-12">
                    <p className="text-gray-400 text-sm mb-4">
                        Still have questions? We&apos;re here to help!
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-shadow duration-200 relative overflow-hidden group"
                    >
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                        <span className="relative z-10">Contact Us</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
