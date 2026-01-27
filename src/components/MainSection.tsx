// components/MainSection.tsx
"use client"; // Important: Framer Motion requires client component

import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaRocket, FaLock, FaServer } from "react-icons/fa";

const stats = [
  { number: "250+", label: "Projects Completed" },
  { number: "100+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
];

const features = [
  { label: "AI Powered", icon: <FaRobot size={24} /> },
  { label: "Fast Delivery", icon: <FaRocket size={24} /> },
  { label: "Secure", icon: <FaLock size={24} /> },
  { label: "99% Uptime", icon: <FaServer size={24} /> },
];

// Positions around the central circle
const positions = [
  { x: 0, y: -150 }, // top
  { x: 150, y: 0 },  // right
  { x: 0, y: 150 },  // bottom
  { x: -150, y: 0 }, // left
];

const MainSection = () => {
  return (
    <section className="w-full min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Glass */}
      <div className="absolute inset-0 bg-blue-600/20 backdrop-blur-[500px] -z-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Texts */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <div className="mb-4 text-sm text-blue-400 font-medium">
            Leading Web Development Company
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            We Build <span className="text-blue-500">Digital</span> <br />
            Experiences That <span className="text-blue-500">Matter</span>
          </h1>
          <p className="text-gray-300 mb-8 max-w-xl">
            Transform your business with cutting-edge web solutions. We craft innovative, scalable, 
            and user-centric digital products that drive growth and success.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-10">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition"
              href="#get-quote"
            >
              Get Free Quote
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-500 hover:text-white transition"
              href="#work"
            >
              View Our Work
            </motion.a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 text-white font-semibold">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i }}
                className="flex flex-col"
              >
                <span className="text-2xl md:text-3xl text-blue-500">{stat.number}</span>
                <span className="text-gray-300 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Central Circle + Feature Boxes */}
        <div className="relative flex-1 w-full h-[400px] lg:h-[500px] flex items-center justify-center">
          
          {/* Central Circle */}
          <motion.div
            className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            AM
          </motion.div>

          {/* Orbiting Feature Boxes - Glass Transparent */}
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, x: positions[i].x, y: positions[i].y }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute w-30 h-34 flex flex-col items-center justify-center gap-2 rounded-xl shadow-lg cursor-pointer text-white 
                         bg-blue/15 backdrop-blur-md border border-white/20"
            >
              <motion.div
                animate={{ float: [0, 15, -20, 0] }}
                transition={{ duration: 2 + i, repeat: Infinity, ease: "easeInOut" }}
                className="text-3xl"
              >
                {feat.icon}
              </motion.div>
              <span className="text-sm font-medium text-center">{feat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default MainSection;
