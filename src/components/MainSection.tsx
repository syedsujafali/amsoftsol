"use client";

import React, { useEffect, useRef, useState } from "react";
import { m, useSpring, useTransform, useInView } from "framer-motion";
import {
  LazyMotion,
  domAnimation,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  FaRocket,
  FaLock,
  FaCode,
  FaDatabase,
  FaSearch,
  FaServer,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaMobile,
  FaLaptop,
  FaCloud,
  FaBrain,
  FaGlobe,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

/* ---------------- COUNTER ---------------- */

const Counter = ({ value }: { value: string }) => {
  const numericValue = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");

  const springValue = useSpring(0, {
    stiffness: 70,
    damping: 18,
    mass: 0.9,
  });

  const rounded = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    const t = setTimeout(() => {
      springValue.set(numericValue);
    }, 300); // small delay for smooth entry

    return () => clearTimeout(t);
  }, [numericValue, springValue]);

  return (
    <m.span className="inline-flex">
      <m.span>{rounded}</m.span>
      {suffix}
    </m.span>
  );
};

const stats = [
  { number: "250+", label: "Projects Completed" },
  { number: "100+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
];

const features = [
  { type: "text", title: "AI", subtitle: "Powered" },
  { type: "icon", label: "Fast", icon: <FaBolt size={50} /> },
  { type: "icon", label: "Secure", icon: <FaShieldAlt size={50} /> },
  { type: "text", title: "99%", subtitle: "Uptime" },
];

const desktopPositions = [
  { x: -140, y: -160 },
  { x: 180, y: -70 },
  { x: 130, y: 170 },
  { x: -180, y: 120 },
];

/* ---------------- MAIN SECTION ---------------- */

const MainSection = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 py-20 lg:py-0">
        {/* Interactive Background */}
        <BackgroundHighlight />

        <div className="max-w-screen-2xl w-full pt-10 pb-16 lg:pt-0 lg:-mt-20 flex flex-col lg:flex-row items-center gap-16 md:gap-24 lg:gap-32 px-4 lg:px-12 pointer-events-none">
          {/* LEFT CONTENT */}
          <m.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left pointer-events-auto"
          >
            <m.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                boxShadow: [
                  "0 0 10px rgba(59,130,246,0.3)",
                  "0 0 25px rgba(59,130,246,0.6)",
                  "0 0 10px rgba(59,130,246,0.3)",
                ],
              }}
              transition={{
                opacity: { duration: 0.8 },
                y: { duration: 0.8 },
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
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
              <m.div
                animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
              />
              Leading Web Development Company
            </m.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mt-6 lg:mt-8 mb-6 lg:mb-8 leading-[1.1] tracking-tight relative">
              {/* Mobile Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/20 blur-[80px] lg:hidden -z-10" />
              We Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                Digital
              </span>
              <br className="hidden sm:block" />
              Experiences
              <br className="hidden sm:block" />
              That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                Matter
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300/80 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              Transform your business with cutting-edge web solutions. We craft
              scalable, innovative, and{" "}
              <span className="text-cyan-300 font-semibold">user-centric</span>{" "}
              digital products that drive growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-10 lg:mb-12">
              <m.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 35px rgba(59,130,246,0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="#get-quote"
                className="
                relative overflow-hidden group
                px-6 sm:px-8 py-3 sm:py-4 
                bg-gradient-to-r from-blue-600 to-cyan-500 
                text-white rounded-xl font-bold text-base sm:text-lg
                transition-all duration-300
                shadow-[0_0_20px_rgba(59,130,246,0.5)]
              "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Quote{" "}
                  <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <m.div
                  className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                  style={{ skewX: -20 }}
                />
              </m.a>

              <m.a
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(34,211,238,0.8)",
                  backgroundColor: "rgba(34,211,238,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="#work"
                className="
                px-6 sm:px-8 py-3 sm:py-4 
                border-2 border-blue-500/50 
                text-blue-300 rounded-xl font-bold text-base sm:text-lg
                transition-all duration-300
                backdrop-blur-sm
              "
              >
                View Our Work
              </m.a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-10">
              {stats.map((stat, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center lg:items-start"
                >
                  <span className="text-2xl md:text-4xl text-blue-400 font-black tracking-tighter drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">
                    <Counter value={stat.number} />
                  </span>
                  <span className="text-sm text-gray-300">{stat.label}</span>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* RIGHT ANIMATION (SHOW ONLY ON TABLET+ / DESKTOP) */}
          <div className="hidden md:flex relative flex-1 min-h-[520px] lg:min-h-[600px] items-center justify-center pointer-events-none">
            {/* Rings */}
            {[1, 2].map((ring) => (
              <m.div
                key={ring}
                className="absolute border border-blue-500/5 rounded-full border-dashed pointer-events-none"
                style={{
                  width: 320 + ring * 140,
                  height: 320 + ring * 140,
                  willChange: "transform",
                }}
                animate={{
                  rotate: ring % 2 === 0 ? 360 : -360,
                }}
                transition={{
                  duration: 60 + ring * 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* AM HUB */}
            <div className="relative z-10 flex items-center justify-center pointer-events-auto">
              {/* Radar Sweep */}
              <m.div
                className="absolute w-[360px] h-[360px] lg:w-[400px] lg:h-[400px] rounded-full pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, rgba(6, 182, 212, 0.4) 50%, transparent 50.1%)",
                  maskImage:
                    "radial-gradient(circle, transparent 30%, black 70%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, transparent 30%, black 70%)",
                  willChange: "transform",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
              />

              {/* Pulse */}
              {[0, 1].map((i) => (
                <m.div
                  key={`atmos-${i}`}
                  className="absolute w-28 h-28 lg:w-32 lg:h-32 rounded-full border border-cyan-500/30"
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ scale: 3.5, opacity: 0 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ willChange: "transform" }}
                />
              ))}

              {/* AM Circle */}
              <m.div
                className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center text-white font-bold text-2xl border border-white/30 z-10 overflow-hidden"
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, 360],
                  boxShadow: [
                    "0 0 40px rgba(59,130,246,0.4), 0 0 80px rgba(6,182,212,0.2)",
                    "0 0 60px rgba(59,130,246,0.6), 0 0 120px rgba(6,182,212,0.4)",
                    "0 0 40px rgba(59,130,246,0.4), 0 0 80px rgba(6,182,212,0.2)",
                  ],
                }}
                transition={{
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                style={{ willChange: "transform" }}
              >
                <m.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #2563eb 0%, #06b6d4 50%, #1e40af 100%)",
                    willChange: "transform",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                <m.span
                  className="relative z-10"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(255,255,255,0.5)",
                      "0 0 20px rgba(255,255,255,0.8)",
                      "0 0 10px rgba(255,255,255,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  AM
                </m.span>
              </m.div>
            </div>

            {/* Floating Feature Cards */}
            {features.map((feat, i) => (
              <m.div
                key={i}
                className="absolute z-20 will-change-transform pointer-events-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: desktopPositions[i].x * 1.2,
                  y: desktopPositions[i].y * 1.2,
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ willChange: "transform" }}
              >
                <m.div
                  whileHover={{
                    scale: 1.08,
                    y: -12,
                    boxShadow:
                      "0 20px 60px rgba(59,130,246,0.3), 0 0 40px rgba(6,182,212,0.2)",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      mass: 0.8,
                    },
                  }}
                  className="
                  w-32 h-36 lg:w-36 lg:h-40
                  rounded-2xl
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  flex flex-col items-center justify-center
                  text-white shadow-2xl
                  cursor-pointer
                  group
                  transition-all duration-500 ease-out
                  hover:bg-blue-500/10 hover:border-blue-400/40
                "
                >
                  <m.div
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, 4, 0, -4, 0],
                    }}
                    transition={{
                      duration: 6 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex flex-col items-center gap-3 text-center"
                    style={{ willChange: "transform" }}
                  >
                    {feat.type === "text" ? (
                      <>
                        <span className="text-5xl font-extrabold bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                          {feat.title}
                        </span>
                        <span className="text-xs font-bold text-cyan-200/70 uppercase tracking-[0.2em]">
                          {feat.subtitle}
                        </span>
                      </>
                    ) : (
                      <>
                        <m.div
                          className="text-6xl lg:text-7xl transition-all duration-500 group-hover:scale-125"
                          style={{
                            color: "#06b6d4",
                            filter:
                              "drop-shadow(0 0 20px rgba(6,182,212,0.8)) drop-shadow(0 0 40px rgba(59,130,246,0.6))",
                            willChange: "transform",
                          }}
                          whileHover={{
                            filter:
                              "drop-shadow(0 0 30px rgba(6,182,212,1)) drop-shadow(0 0 60px rgba(59,130,246,0.8))",
                            color: "#22d3ee",
                          }}
                        >
                          {feat.icon}
                        </m.div>
                        <span className="text-xs font-bold text-cyan-200/70 uppercase tracking-[0.2em]">
                          {feat.label}
                        </span>
                      </>
                    )}
                  </m.div>
                </m.div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

/* ---------------- BACKGROUND (OPTIMIZED) ---------------- */

const BackgroundHighlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rafRef = useRef<number | null>(null);
  const lastMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // IMPORTANT: don't run heavy mouse tracking on small screens
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      lastMouse.current = { x: e.clientX, y: e.clientY };

      // Throttle updates to animation frame
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(lastMouse.current.x);
        mouseY.set(lastMouse.current.y);
        rafRef.current = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mouseX, mouseY]);

  const flashlightRadius = useSpring(300, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleResize = () => {
      flashlightRadius.set(window.innerWidth < 768 ? 150 : 300);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [flashlightRadius]);

  const maskImage = useMotionTemplate`radial-gradient(${flashlightRadius}px circle at ${mouseX}px ${mouseY}px, black, rgba(0,0,0,0.15))`;

  const stylePromise = {
    maskImage,
    WebkitMaskImage: maskImage,
  };

  return (
    <div className="absolute inset-0 overflow-hidden -z-30 bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />

      <m.div
        className="absolute inset-0 opacity-100"
        style={stylePromise}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.2) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 2px, transparent 2px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Icons (KEEP SAME LOOK but remove DRAG to reduce lag) */}
        <div className="absolute inset-0 overflow-hidden opacity-100 select-none pointer-events-auto">
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
            <m.div
              key={i}
              whileHover={{ scale: 1.15 }}
              className={`absolute ${item.size} ${item.color} opacity-100 p-4 transition-colors duration-300 hover:text-white`}
              style={{
                top: item.top,
                left: item.left,
                willChange: "transform",
              }}
              animate={{
                y: [0, -16, 0, 16, 0],
                x: [0, 12, 0, -12, 0],
                rotate: [0, 8, 0, -8, 0],
              }}
              transition={{
                y: { duration: 6 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                x: { duration: 5 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                rotate: { duration: 7 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
              }}
            >
              <item.Icon className="drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]" />
            </m.div>
          ))}

          <m.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/20 rounded-full border-dashed"
            style={{ willChange: "transform" }}
          />
        </div>
      </m.div>

      <m.div
        animate={{ rotate: [0, 90, 180], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[10%] w-64 h-64 border border-blue-500/10 rounded-full border-dashed pointer-events-none"
        style={{ willChange: "transform" }}
      />

      <m.div
        animate={{ rotate: [360, 180, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] left-[5%] w-96 h-96 border border-cyan-500/10 rounded-full border-dotted pointer-events-none"
        style={{ willChange: "transform" }}
      />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
    </div>
  );
};

export default MainSection;
