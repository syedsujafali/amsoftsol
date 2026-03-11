"use client";

import React from "react";
import { FiSend } from "react-icons/fi";

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
    return (
        <div>
            <label className="block mb-2 text-sm text-gray-300">Subject</label>
            <select className="w-full px-4 py-3 rounded-xl bg-[#0f1a2f] border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300">
                <option>Select a subject</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Consultation</option>
            </select>
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
