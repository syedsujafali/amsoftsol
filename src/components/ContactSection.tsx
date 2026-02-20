"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";

export default function ContactSection() {
    return (
        <section id="contact" className="relative w-full min-h-screen bg-[#020617] text-white px-6 py-24 overflow-hidden">

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0b1021] to-slate-950 opacity-90" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-5 py-1.5 text-sm rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                        Contact Us
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Let’s Start a{" "}
                        <span className="text-blue-500">Conversation</span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Have a project in mind? We'd love to hear from you. Send us a
                        message and we'll respond within 24 hours.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* LEFT INFO CARDS */}
                    <div className="space-y-6">

                        {[
                            {
                                icon: <FiPhone />,
                                title: "Call Us",
                                text: "+91 40 4954 1452",
                            },
                            {
                                icon: <FiMail />,
                                title: "Email Us",
                                text: "info@amsoftware.com",
                            },
                            {
                                icon: <FiMapPin />,
                                title: "Visit Us",
                                text: "II-4-658 Mustafa Towers Unit 203/C 2nd Floor, Lakdi ka pool Hyderabad 500004.",
                            },
                            {
                                icon: <FiClock />,
                                title: "Working Hours",
                                text: "Mon – Fri: 9:00 AM – 6:00 PM | Sat – Sun: Closed",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -6 }}
                                className="group flex gap-4 p-6 rounded-2xl bg-[#0d1526] border border-white/10 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 text-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500/20">
                                    {item.icon}
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-1">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
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

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white border border-blue-500/40 bg-blue-600/20 transition-all duration-500 hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                            >
                                Send Message
                                <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.button>

                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

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