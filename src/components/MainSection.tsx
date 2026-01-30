"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLock } from "react-icons/fa";

const stats = [
  { number: "250+", label: "Projects Completed" },
  { number: "100+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
];

const features = [
  { type: "text", title: "AI", subtitle: "Powered" },
  { type: "icon", label: "Fast Delivery", icon: <FaRocket size={22} /> },
  { type: "icon", label: "Secure", icon: <FaLock size={22} /> },
  { type: "text", title: "99%", subtitle: "Uptime" },
];

const desktopPositions = [
  { x: -140, y: -160 },
  { x: 180, y: -70 },
  { x: 130, y: 170 },
  { x: -180, y: 120 },
];

const MainSection = () => {
  return (
    <section className="relative w-full min-h-3.5 overflow-hidden flex items-center justify-center px-4 sm:px-6">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-30"
        style={{ backgroundImage: "url('/bg.png')" }}
      />
      <div className="absolute inset-0 backdrop-blur-[30px] -z-20" />

      <div className="max-w-7xl w-full py-24 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="
            inline-flex items-center
            px-5 py-1
            text-sm font-medium text-blue-400
            rounded-full
            bg-blue-500/10
            border border-blue-400/30
            shadow-[0_0_15px_rgba(59,130,246,0.5)]
          ">
            Leading Web Development Company
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mt-6 mb-6 leading-tight">
            We Build <span className="text-blue-500">Digital</span>
            <br />
            Experiences
            <br />
            That <span className="text-blue-500">Matter</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8">
            Transform your business with cutting-edge web solutions. We craft
            scalable, innovative, and user-centric digital products.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#get-quote"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
            >
              Get Free Quote
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#work"
              className="px-6 py-3 border border-blue-500 text-blue-400 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition"
            >
              View Our Work
            </motion.a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="text-2xl md:text-3xl text-blue-500 font-bold">
                  {stat.number}
                </span>
                <span className="text-sm text-gray-300">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT ANIMATION (Desktop only) */}
        <div className="hidden lg:flex relative flex-1 h-105 items-center justify-center">

          {/* Center Circle */}
          <motion.div
            className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-xl z-10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            AM
          </motion.div>

          {/* Floating Cards */}
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: desktopPositions[i].x,
                y: desktopPositions[i].y,
              }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="
                absolute w-32 h-36
                rounded-2xl
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                flex items-center justify-center
                text-white shadow-lg
              "
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center gap-1 text-center"
              >
                {feat.type === "text" ? (
                  <>
                    <span className="text-3xl font-extrabold text-blue-400">
                      {feat.title}
                    </span>
                    <span className="text-xs text-white/80">
                      {feat.subtitle}
                    </span>
                  </>
                ) : (
                  <>
                    <div className="text-2xl">{feat.icon}</div>
                    <span className="text-xs text-white/80">
                      {feat.label}
                    </span>
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
