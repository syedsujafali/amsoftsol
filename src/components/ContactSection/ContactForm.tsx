"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiSend, FiChevronDown, FiCheck } from "react-icons/fi";

const ContactForm = () => {
    return (
        <div
            className="p-8 rounded-2xl bg-[#0d1526] border border-white/10"
        >
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <Input label="Full Name *" placeholder="Your name" />
                    <Input label="Email Address *" placeholder="your@example.com" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Input label="Phone Number" placeholder="+91 12 3456 7890" />
                    <Select />
                </div>

                <Textarea />

                <button
                    type="button"
                    className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white border border-blue-500/40 bg-blue-600/20 transition-all duration-500 hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                >
                    Send Message
                    <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            </form>
        </div>
    );
};

/* Reusable Input */
function Input({ label, placeholder }: any) {
    return (
        <div>
            <label className="block mb-2 text-sm text-gray-300">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl bg-[#0f1a2f] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
            />
        </div>
    );
}

function Select() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Select a subject");
    const options = ["Web Development", "UI/UX Design", "Consultation", "Other"];
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <label className="block mb-2 text-sm text-gray-300">Subject</label>
            <div 
                className={`w-full px-4 py-3 rounded-xl bg-[#0f1a2f] border ${isOpen ? 'border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] bg-[#15233c]' : 'border-white/10 hover:border-blue-500/50 hover:bg-[#15233c]'} text-sm text-white cursor-pointer transition-all duration-300 flex items-center justify-between group`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={selected === "Select a subject" ? "text-gray-500" : "text-white font-medium"}>
                    {selected}
                </span>
                <div className={`w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-cyan-500/20 shadow-[0_0_10px_rgba(34,211,238,0.4)]' : ''}`}>
                    <FiChevronDown className={`transition-colors duration-300 ${isOpen ? 'text-cyan-400' : 'text-blue-400 group-hover:text-blue-300'}`} size={16} />
                </div>
            </div>

            <div className={`absolute left-0 right-0 top-[calc(100%+8px)] z-50 bg-[#0f1a2f]/95 backdrop-blur-xl border border-blue-500/30 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'}`}>
                <div className="p-2 space-y-1">
                    {options.map((option) => (
                        <div 
                            key={option}
                            onClick={() => {
                                setSelected(option);
                                setIsOpen(false);
                            }}
                            className={`px-4 py-2.5 rounded-lg text-sm cursor-pointer transition-all duration-200 flex items-center justify-between group ${selected === option ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-gray-300 hover:bg-blue-500/10 hover:text-white hover:pl-5'}`}
                        >
                            {option}
                            {selected === option && <FiCheck className="text-cyan-400" size={14} />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Textarea() {
    return (
        <div>
            <label className="block mb-2 text-sm text-gray-300">
                Your Message *
            </label>
            <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl bg-[#0f1a2f] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
            />
        </div>
    );
}

export default ContactForm;
