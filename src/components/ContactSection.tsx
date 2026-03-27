"use client";
import ContactBackground from "./ContactSection/ContactBackground";
import ContactHeader from "./ContactSection/ContactHeader";
import ContactInfo from "./ContactSection/ContactInfo";
import ContactForm from "./ContactSection/ContactForm";

export default function ContactSection() {
    return (
        <section id="contact" className="relative w-full min-h-screen bg-[#020617] text-white px-6 py-16 overflow-hidden">
            <ContactBackground />

            <div
                className="relative z-10 max-w-7xl mx-auto"
            >
                <ContactHeader />
                <div className="grid lg:grid-cols-2 gap-10">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}