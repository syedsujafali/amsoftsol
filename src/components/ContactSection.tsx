"use client";

import { motion } from "framer-motion";
import ContactBackground from "./ContactSection/ContactBackground";
import ContactHeader from "./ContactSection/ContactHeader";
import ContactInfo from "./ContactSection/ContactInfo";
import ContactForm from "./ContactSection/ContactForm";

export default function ContactSection() {
    return (
        <section id="contact" className="relative w-full min-h-screen bg-[#020617] text-white px-6 py-24 overflow-hidden">
            <ContactBackground />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="relative z-10 max-w-7xl mx-auto"
            >
                <ContactHeader />
                <div className="grid lg:grid-cols-2 gap-10">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </motion.div>
        </section>
    );
}