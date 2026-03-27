"use client";

import React from "react";

interface FAQItemProps {
    faq: {
        id: number;
        question: string;
        answer: string;
    };
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}

const FAQItem = ({ faq, index, isOpen, onToggle }: FAQItemProps) => {
    return (
        <div
        >
            <div
                style={{ willChange: "transform" }}
                className="relative rounded-2xl bg-white/[0.04] backdrop-blur-sm overflow-hidden group cursor-pointer"
                onClick={onToggle}
            >
                <div
                    className="absolute inset-0 rounded-2xl border pointer-events-none transition-colors duration-150"
                    style={{
                        borderColor: isOpen ? "rgba(59,130,246,0.40)" : "rgba(255,255,255,0.08)",
                    }}
                />

                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(59,130,246,0.18), 0 0 28px rgba(59,130,246,0.07)" }}
                />

                <div
                    className="absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full transition-all duration-200 origin-top"
                    style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "scaleY(1)" : "scaleY(0)",
                    }}
                />

                <div className="flex items-center justify-between px-6 py-5 select-none">
                    <span
                        className="text-sm sm:text-base font-semibold pr-4 transition-colors duration-150"
                        style={{ color: isOpen ? "#60a5fa" : "white" }}
                    >
                        {faq.question}
                    </span>

                    <span
                        style={{ willChange: "transform" }}
                        className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-lg leading-none font-light transition-colors duration-150 ${isOpen
                            ? "border-blue-500/60 text-blue-400 bg-blue-500/10"
                            : "border-white/20 text-gray-400 group-hover:border-blue-500/40 group-hover:text-blue-400"
                            }`}
                    >
                        +
                    </span>
                </div>

                <>
                    {isOpen && (
                        <div
                            className="overflow-hidden"
                        >
                            <p className="px-6 pb-5 text-gray-400 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                                {faq.answer}
                            </p>
                        </div>
                    )}
                </>
            </div>
        </div>
    );
};

export default FAQItem;
