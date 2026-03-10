"use client";

import { motion } from "framer-motion";
import AboutBackground from "./Aboutus/AboutBackground";
import AboutHeader from "./Aboutus/AboutHeader";
import AboutHeroCard from "./Aboutus/AboutHeroCard";
import AboutContent from "./Aboutus/AboutContent";
import AboutStats from "./Aboutus/AboutStats";

export default function AboutUs() {
  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <AboutBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <AboutHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AboutHeroCard />
          <AboutContent />
        </div>

        <AboutStats />
      </motion.div>
    </section>
  );
}
