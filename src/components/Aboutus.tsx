"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEye,
  FaFlag,
  FaClock,
  FaRocket,
  FaUsers,
  FaAward,
} from "react-icons/fa";

function Counter({
  value,
  duration = 1200,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (startedRef.current) return;

        startedRef.current = true;

        const start = 0;
        const end = value;
        const startTime = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const current = Math.floor(start + (end - start) * progress);
          setCount(current);

          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutUs() {
  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0b1021] to-slate-950 opacity-80" />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -120, 120, 0],
            y: [0, 80, -80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]"
        />

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 px-2"
        >

          <div className="flex flex-col items-center gap-4">
            <span className="inline-block px-5 py-1.5 text-sm rounded-full bg-blue-500/10 text-blue-400 transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105">
              About Us
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-500 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-110 transform inline-block text-center">
              We Are <span className="text-blue-500">AM Software Solution</span>
            </h1>
          </div>



          <p className="mt-3 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            A focused team of UI/UX designers, web developers, and SEO specialists
            building visually appealing, performance-driven digital products.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ scale: 1.06 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:shadow-[0_0_80px_rgba(59,130,246,0.25)] hover:border-blue-500/40 w-full max-w-xl mx-auto min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex flex-col justify-between"
          >
            <div className="flex flex-col items-center mt-4">

              <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 overflow-hidden border border-blue-500/30">
                <img
                  src="/logo.png"
                  alt="About"
                  className="w-full h-full object-contain p-4 sm:p-5"
                />
              </div>



              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-3">
                Design-Driven Development
              </h3>

              <p className="text-center text-gray-200 text-base">
                Modern UI, Clean Code, Scalable Database
              </p>
            </div>

            <div className="flex items-center gap-4 px-5 sm:px-6 py-4 rounded-xl bg-black/30 border border-white/10 w-fit ml-auto mb-4 animate-float-button transition-all duration-500 hover:shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6] hover:border-blue-400">
              <span className="h-10 w-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg">
                ✓
              </span>
              <div>
                <p className="text-base font-medium">SEO Optimized</p>
                <p className="text-sm text-gray-400">Performance Focused</p>
              </div>
            </div>

            <style jsx>{`
              @keyframes floatButton {
                0%,
                100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
              }
              .animate-float-button {
                animation: floatButton 2s ease-in-out infinite;
              }
            `}</style>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-105 transform inline-block">
              Designing & Developing{" "}
              <span className="text-blue-500">
                Impactful Web <br className="hidden sm:block" /> Experiences
              </span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              At AM Software Solution, we specialize in UI/UX design, website
              redesign, and full-stack web development backed by database. Every
              interface we design is user-centric and conversion-focused.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              From SEO-optimized landing pages to scalable web applications, we
              ensure fast load times, clean architecture, and seamless
              performance across all devices.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {/* Our Mission */}
              <div className="group flex gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-500 hover:bg-blue-500/5 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] hover:scale-105">
                <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute h-6 w-6 rounded-full border-2 border-blue-500"></span>
                    <span className="absolute h-4 w-4 rounded-full border-2 border-blue-500"></span>
                    <span className="h-2 w-2 rounded-full border-2 border-blue-500 bg-transparent"></span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-base mb-1">Our Mission</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    To craft intuitive UI/UX designs and high-performance web
                    solutions that enhance usability, engagement, and business
                    growth.
                  </p>
                </div>
              </div>

              {/* Our Vision */}
              <div className="group flex gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-500 hover:bg-blue-500/5 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] hover:scale-105">
                <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                  <FaEye className="text-blue-500 text-lg sm:text-xl" />
                </div>

                <div>
                  <h4 className="font-semibold text-base mb-1">Our Vision</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    To be a trusted digital partner known for clean design,
                    scalable web development, and data-driven SEO strategies.
                  </p>
                </div>
              </div>

              {/* Our Goal */}
              <div className="group flex gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-500 hover:bg-blue-500/5 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] hover:scale-105">
                <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                  <FaFlag className="text-blue-500 text-lg sm:text-xl" />
                </div>

                <div>
                  <h4 className="font-semibold text-base mb-1">Our Goal</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    To redesign and develop modern websites that load fast, rank
                    higher, and deliver seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20 lg:mt-24"
        >
          {[
            {
              icon: <FaClock className="text-blue-500 mx-auto mb-3 text-3xl sm:text-4xl" />,
              value: 8,
              label: "Years of Expertise",
            },
            {
              icon: <FaRocket className="text-blue-500 mx-auto mb-3 text-3xl sm:text-4xl" />,
              value: 200,
              label: "Web Projects Delivered",
            },
            {
              icon: <FaUsers className="text-blue-500 mx-auto mb-3 text-3xl sm:text-4xl" />,
              value: 120,
              label: "Satisfied Clients",
            },
            {
              icon: <FaAward className="text-blue-500 mx-auto mb-3 text-3xl sm:text-4xl" />,
              value: 15,
              label: "Industry Recognitions",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="group p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 text-center transition-all duration-500 hover:scale-105 hover:border-blue-500/40 hover:shadow-[0_0_45px_rgba(59,130,246,0.35)]"
            >
              {stat.icon}

              <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center gap-1">
                <Counter value={stat.value} />
                <span className="text-blue-500 inline-block transition-transform duration-500 group-hover:rotate-360">
                  +
                </span>
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
