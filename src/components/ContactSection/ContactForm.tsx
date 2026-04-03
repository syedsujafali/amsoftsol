"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiSend, FiChevronDown, FiCheck } from "react-icons/fi";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        
        setIsSubmitting(true);
        setError(false);

        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSubmitting(false);
                setIsSent(true);
                form.reset();
                setTimeout(() => setIsSent(false), 5000);
            } else {
                throw new Error("Failed to send");
            }
        } catch (err) {
            setIsSubmitting(false);
            setError(true);
        }
    };

    return (
        <div className="p-8 rounded-2xl bg-[#0d1526] border border-white/10">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                    <Input name="name" label="Full Name *" placeholder="Your name" required />
                    <Input name="email" label="Email Address *" placeholder="your@example.com" type="email" required />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Input name="phone" label="Phone Number" placeholder="+91 12 3456 7890" />
                    <Select name="subject" reset={isSent} />
                </div>

                <Textarea name="message" required />

                <div className="flex items-center gap-4">
                    <button
                        type="submit"
                        disabled={isSubmitting || isSent}
                        className={`group relative inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white border transition-all duration-500 ${isSent ? 'border-green-500/40 bg-green-600/20 text-green-400' : 'border-blue-500/40 bg-blue-600/20 hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]'} disabled:opacity-70 disabled:cursor-not-allowed`}
                    >
                        {isSubmitting ? "Sending..." : isSent ? "Message Sent!" : "Send Message"}
                        {!isSubmitting && !isSent && <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />}
                        {isSent && <FiCheck />}
                    </button>
                    {isSent && <span className="text-green-400 text-sm animate-fade-in">We'll get back to you shortly!</span>}
                    {error && <span className="text-red-400 text-sm animate-fade-in">Failed to send. Please try again.</span>}
                </div>
            </form>
        </div>
    );
};

/* Reusable Input */
function Input({ label, placeholder, type = "text", required, name }: any) {
    return (
        <div>
            <label className="block mb-2 text-sm text-gray-300">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                className="w-full px-4 py-3 rounded-xl bg-[#0f1a2f] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
            />
        </div>
    );
}

function Select({ reset, name }: { reset?: boolean, name?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Select a subject");
    const options = ["Web Development", "UI/UX Design", "Consultation", "Other"];
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (reset) {
            setSelected("Select a subject");
        }
    }, [reset]);

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
            <input type="hidden" name={name} value={selected === "Select a subject" ? "" : selected} />
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

function Textarea({ required, name }: any) {
    return (
        <div>
            <label className="block mb-2 text-sm text-gray-300">
                Your Message *
            </label>
            <textarea
                rows={5}
                required={required}
                name={name}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl bg-[#0f1a2f] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
            />
        </div>
    );
}

export default ContactForm;
