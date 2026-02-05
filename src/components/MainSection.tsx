"use client";

import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaRocket, FaLock, FaCode, FaDatabase, FaSearch, FaServer, FaJs, FaReact, FaHtml5, FaCss3, FaMobile, FaLaptop, FaCloud, FaBrain, FaGlobe, FaGamepad } from "react-icons/fa";

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
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6">

      {/* Interactive Background */}
      <BackgroundHighlight />

      <div className="max-w-screen-2xl w-full pt-4 pb-16 flex flex-col lg:flex-row items-center gap-20 lg:gap-32 px-4 lg:px-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              boxShadow: ["0 0 10px rgba(59,130,246,0.3)", "0 0 25px rgba(59,130,246,0.6)", "0 0 10px rgba(59,130,246,0.3)"],
            }}
            transition={{
              opacity: { duration: 0.8 },
              y: { duration: 0.8 },
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="
              inline-flex items-center gap-3
              px-5 py-2 mb-8
              text-sm font-medium text-blue-400
              rounded-full
              bg-blue-500/10
              border border-blue-400/30
            "
          >
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
            />
            Leading Web Development Company
          </motion.div>


          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mt-6 mb-6 leading-tight relative">
            {/* Mobile Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/20 blur-[80px] lg:hidden -z-10" />

            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Digital</span>
            <br />
            Experiences
            <br />
            That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Matter</span>
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
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]"
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
        <div className="hidden lg:flex relative flex-1 min-h-[600px] items-center justify-center">

          {/* Animated Background Rings */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute border border-blue-500/20 rounded-full border-dashed"
              style={{
                width: 300 + ring * 120,
                height: 300 + ring * 120,
              }}
              animate={{
                rotate: ring % 2 === 0 ? 360 : -360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: { duration: 25 + ring * 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 6 + ring, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          ))}

          {/* Central "AM" Pulsing Hub with Radar Pings */}
          <div className="relative z-10 flex items-center justify-center">
            {/* Radar Pings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 rounded-full border border-cyan-400/50"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{
                  scale: 2.5,
                  opacity: 0,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 1,
                  ease: "easeOut"
                }}
              />
            ))}

            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_50px_rgba(59,130,246,0.5)] border border-white/20 z-10"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 30px rgba(59,130,246,0.3)",
                  "0 0 60px rgba(59,130,246,0.6)",
                  "0 0 30px rgba(59,130,246,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              AM
            </motion.div>

            {/* Inner Glowing Ring */}
            <div className="absolute inset-0 -m-4 border-2 border-cyan-400/30 rounded-full animate-pulse blur-sm" />
          </div>

          {/* Floating Feature Cards */}
          {features.map((feat, i) => (
            <motion.div
              key={i}
              className="absolute z-20"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: desktopPositions[i].x * 1.25,
                y: desktopPositions[i].y * 1.25,
              }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.23, 1, 0.32, 1] // Custom smooth easeOut
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.15,
                  y: -15,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                className="
                  w-36 h-40
                  rounded-2xl
                  bg-white/5
                  backdrop-blur-3xl
                  border border-white/10
                  flex flex-col items-center justify-center
                  text-white shadow-2xl
                  cursor-pointer
                  group
                  transition-all duration-500
                  hover:bg-blue-500/10 hover:border-blue-400/50
                "
              >
                {/* Orbital Animation (Internal movement for extra smoothness) */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  {feat.type === "text" ? (
                    <>
                      <div className="relative">
                        <span className="text-4xl font-extrabold bg-gradient-to-b from-blue-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-sm">
                          {feat.title}
                        </span>
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      </div>
                      <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">
                        {feat.subtitle}
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform duration-500">
                        {feat.icon}
                      </div>
                      <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">
                        {feat.label}
                      </span>
                    </>
                  )}
                </motion.div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500 -z-10" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Extracted Background Component for cleaner code
const BackgroundHighlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Mask for the "Flashlight" effect - circles around the mouse
  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, rgba(0,0,0,0.15))`;
  const stylePromise = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="absolute inset-0 overflow-hidden -z-30 bg-[#020617]">

      {/* Base: Wide Dim Dots (Visible everywhere) */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />

      {/* HIDDEN REVEAL LAYER: The "Unique" content revealed by flashlight */}
      <motion.div
        className="absolute inset-0 opacity-100"
        style={stylePromise}
      >
        {/* 1. Crosshairs Grid (+) - Overlaying the dots - Made DARKER (opacity-100) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                        linear-gradient(to right, rgba(59, 130, 246, 0.2) 2px, transparent 2px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 2px, transparent 2px)
                    `,
            backgroundSize: "60px 60px"
          }}
        />

        {/* 2. Tech Icons / Stacks visible only under light */}
        <div className="absolute inset-0 overflow-hidden opacity-100 select-none pointer-events-none">
          {/* Floating Animated Icons */}
          {[
            { Icon: FaReact, color: "text-cyan-400", size: "text-7xl", top: "10%", left: "10%" },
            { Icon: FaDatabase, color: "text-emerald-400", size: "text-6xl", top: "20%", left: "80%" },
            { Icon: FaCode, color: "text-blue-500", size: "text-8xl", top: "50%", left: "50%" },
            { Icon: FaLock, color: "text-rose-400", size: "text-6xl", top: "80%", left: "20%" },
            { Icon: FaSearch, color: "text-purple-400", size: "text-7xl", top: "60%", left: "85%" },
            { Icon: FaRocket, color: "text-orange-400", size: "text-6xl", top: "15%", left: "40%" },
            { Icon: FaHtml5, color: "text-orange-600", size: "text-6xl", top: "75%", left: "60%" },
            { Icon: FaCss3, color: "text-blue-600", size: "text-6xl", top: "30%", left: "20%" },
            { Icon: FaJs, color: "text-yellow-400", size: "text-7xl", top: "40%", left: "70%" },
            { Icon: FaServer, color: "text-slate-400", size: "text-6xl", top: "70%", left: "10%" },
            { Icon: FaMobile, color: "text-indigo-400", size: "text-6xl", top: "25%", left: "60%" },
            { Icon: FaBrain, color: "text-pink-400", size: "text-7xl", top: "85%", left: "80%" },
            { Icon: FaCloud, color: "text-sky-300", size: "text-8xl", top: "5%", left: "90%" },
            { Icon: FaGlobe, color: "text-teal-400", size: "text-6xl", top: "90%", left: "40%" },
            { Icon: FaLaptop, color: "text-gray-300", size: "text-7xl", top: "35%", left: "10%" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`absolute ${item.size} ${item.color} opacity-100`}
              style={{ top: item.top, left: item.left }}
              animate={{
                y: [0, -20, 0, 20, 0],
                x: [0, 15, 0, -15, 0],
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 5 + i, // distinctive timing for each
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            >
              <item.Icon />
            </motion.div>
          ))}

          {/* Rotating Rings Accents (Center) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/20 rounded-full border-dashed"
          />
        </div>
      </motion.div>

      {/* Unique Accents: Floating Geometric Outlines for "Tech" feel */}
      <motion.div
        animate={{
          rotate: [0, 90, 180],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[10%] w-64 h-64 border border-blue-500/10 rounded-full border-dashed pointer-events-none"
      />
      <motion.div
        animate={{
          rotate: [360, 180, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] left-[5%] w-96 h-96 border border-cyan-500/10 rounded-full border-dotted pointer-events-none"
      />

      {/* Ambient Glows to keep it rich */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
    </div>
  );
};

export default MainSection;