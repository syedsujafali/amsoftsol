"use client";

import React, { useEffect, useRef } from "react";
import {
  m,
  useSpring,
  useTransform,
  LazyMotion,
  domAnimation,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
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
    }, 300);

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
  const [introPhase, setIntroPhase] = React.useState<
    "logoOnly" | "spinning" | "throwing" | "done"
  >("logoOnly");

  const [offsets, setOffsets] = React.useState({ x: 0, y: 0 });
  const [throwVector, setThrowVector] = React.useState({ x: 0, y: 0 });

  const hubRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    // Start with a small delay for desktop measurements to ensure refs are ready
    const t = setTimeout(() => {
      setIsMounted(true);
      const isMobileDevice = window.innerWidth < 768;

      if (isMobileDevice) {
        setIntroPhase("done");
        return;
      }

      const measure = () => {
        if (!hubRef.current || !leftContentRef.current) return;

        const hubRect = hubRef.current.getBoundingClientRect();
        const leftRect = leftContentRef.current.getBoundingClientRect();

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        setOffsets({
          x: centerX - (hubRect.left + hubRect.width / 2),
          y: centerY - (hubRect.top + hubRect.height / 2),
        });

        setThrowVector({
          x: centerX - (leftRect.left + leftRect.width / 2),
          y: centerY - (leftRect.top + leftRect.height / 2),
        });

        setIntroPhase("spinning");
        setTimeout(() => setIntroPhase("throwing"), 600);
        setTimeout(() => setIntroPhase("done"), 2800);
      };

      measure();
    }, 120);

    return () => clearTimeout(t);
  }, []);

  const isMobile = isMounted && window.innerWidth < 768;

  const isThrowing = isMounted && ((introPhase === "throwing" || introPhase === "done") || window.innerWidth < 768);
  const isDone = isMounted && (introPhase === "done" || window.innerWidth < 768);

  const arcConfig = [
    { arcY: -120, rot: -35 },
    { arcY: -90, rot: 40 },
    { arcY: 90, rot: 30 },
    { arcY: 120, rot: -40 },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section id="home" className="relative w-full overflow-hidden flex items-start lg:items-center justify-center px-4 sm:px-6 pt-14 pb-10 sm:py-6 lg:py-6 md:min-h-screen">
        {/* Background appears ONLY during throwing or when done */}
        <div
          style={{
            opacity: isThrowing ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          <BackgroundHighlight />
        </div>

        <div className="max-w-screen-2xl w-full pt-1 sm:pt-4 md:pt-6 pb-2 sm:pb-6 md:pb-8 lg:pb-10 flex flex-col lg:flex-row items-center gap-10 sm:gap-14 md:gap-16 lg:gap-24 px-2 sm:px-4 lg:px-10 pointer-events-none">
          {/* LEFT CONTENT */}
          <m.div
            ref={leftContentRef}
            initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            animate={isMobile ? {
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              rotate: 0,
              filter: "blur(0px)",
            } : {
              opacity: isThrowing ? 1 : 0,
              scale: isThrowing ? [0.2, 1.08, 0.98, 1] : 0,
              x: isThrowing ? [throwVector.x, 20, -6, 0] : throwVector.x,
              y: isThrowing ? [throwVector.y, -14, 6, 0] : throwVector.y,
              rotate: isThrowing ? [-8, 2, -1, 0] : -8,
              filter: isThrowing ? ["blur(10px)", "blur(0px)"] : "blur(10px)",
            }}
            transition={{
              duration: 1.25,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.25 },
            }}
            className="flex-1 text-center lg:text-left pointer-events-auto w-full max-md:!opacity-100 max-md:!transform-none max-md:!filter-none max-md:!transition-none"
          >
            <m.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              animate={isMobile ? {
                opacity: 1,
                y: 0,
                boxShadow: [
                  "0 0 10px rgba(59,130,246,0.3)",
                  "0 0 25px rgba(59,130,246,0.6)",
                  "0 0 10px rgba(59,130,246,0.3)",
                ],
              } : {
                opacity: isThrowing ? 1 : 0,
                y: isThrowing ? 0 : -20,
                boxShadow: [
                  "0 0 10px rgba(59,130,246,0.3)",
                  "0 0 25px rgba(59,130,246,0.6)",
                  "0 0 10px rgba(59,130,246,0.3)",
                ],
              }}
              transition={{
                opacity: { duration: 0.8 },
                y: { duration: 0.8 },
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                inline-flex items-center gap-3
                px-4 sm:px-5 py-2 mb-7 sm:mb-8
                text-xs sm:text-sm font-medium text-blue-400
                rounded-full
                bg-blue-500/10
                border border-blue-400/30
                max-md:!opacity-100 max-md:!translate-y-0 max-md:!shadow-none max-md:!transition-none
              "
            >

              <m.div
                animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
              />
              Leading Web Development Company
            </m.div>

            {/* HEADING */}
            <m.h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mt-4 sm:mt-6 lg:mt-8 mb-5 sm:mb-6 lg:mb-8 leading-[1.12] tracking-tight relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-blue-500/20 blur-[80px] lg:hidden -z-10" />

              We Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                Digital Experiences
              </span>
              <br />
              That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                Matter
              </span>
            </m.h1>

            <m.p className="text-sm sm:text-lg md:text-xl text-gray-300/80 max-w-xl sm:max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed font-medium">
              Transform your business with cutting-edge web solutions. We craft
              scalable, innovative, and{" "}
              <span className="text-cyan-300 font-semibold">user-centric</span>{" "}
              digital products that drive growth.
            </m.p>

            {/* Buttons */}
            <m.div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-9 sm:mb-10 lg:mb-12">
              <m.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 35px rgba(59,130,246,0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="/contact"
                className="
                  relative overflow-hidden group
                  w-full sm:w-auto
                  px-6 sm:px-8 py-3 sm:py-4 
                  bg-gradient-to-r from-blue-600 to-cyan-500 
                  text-white rounded-xl font-bold text-base sm:text-lg
                  transition-all duration-300
                  shadow-[0_0_20px_rgba(59,130,246,0.5)]
                "
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
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
                href="/portfolio"
                className="
                  w-full sm:w-auto
                  px-6 sm:px-8 py-3 sm:py-4 
                  border-2 border-blue-500/50 
                  text-blue-300 rounded-xl font-bold text-base sm:text-lg
                  transition-all duration-300
                  backdrop-blur-sm
                  text-center
                "
              >
                View Our Work
              </m.a>
            </m.div>

            {/* Stats */}
            <m.div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-10">
              {stats.map((stat, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: isThrowing ? i * 0.2 : 0 }}
                  className="flex flex-col items-center lg:items-start max-md:!opacity-100 max-md:!translate-y-0 max-md:!transition-none"
                >
                  <span className="text-2xl sm:text-3xl md:text-4xl text-blue-400 font-black tracking-tighter drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">
                    <Counter value={stat.number} />
                  </span>
                  <span className="text-xs sm:text-sm text-gray-300">
                    {stat.label}
                  </span>
                </m.div>
              ))}
            </m.div>
          </m.div>

          {/* ✅ RIGHT SIDE COMPLETELY HIDDEN ON MOBILE (NO EMPTY SPACE) */}
          <div className="hidden md:flex relative flex-1 min-h-[520px] lg:min-h-[600px] items-center justify-center pointer-events-none">
            {/* Animated Rings */}
            {isThrowing &&
              [1, 2].map((ring) => (
                <m.div
                  key={ring.toString()}
                  className="absolute border border-blue-500/5 rounded-full border-dashed pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    rotate: ring % 2 === 0 ? 360 : -360,
                  }}
                  style={{
                    width: 320 + ring * 140,
                    height: 320 + ring * 140,
                    willChange: "transform",
                  }}
                  transition={{
                    rotate: {
                      duration: 60 + ring * 20,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    opacity: { duration: 0.8 },
                  }}
                />
              ))}

            {/* AM HUB */}
            <div className="relative z-10 flex items-center justify-center pointer-events-auto">
              {/* Conic ring */}
              <m.div
                className="absolute w-[360px] h-[360px] lg:w-[400px] lg:h-[400px] rounded-full pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, rgba(59, 130, 246, 0.35) 50%, transparent 50.1%)",
                  maskImage:
                    "radial-gradient(circle, transparent 30%, black 70%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, transparent 30%, black 70%)",
                  willChange: "transform",
                }}
                animate={{
                  opacity: isThrowing ? 1 : 0,
                  rotate: 360,
                }}
                transition={{
                  rotate: { duration: 4.5, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.5 },
                }}
              />

              {/* Atmospheres */}
              {isThrowing &&
                [0, 1].map((i) => (
                  <m.div
                    key={`atmos-${i}`}
                    className="absolute w-28 h-28 lg:w-32 lg:h-32 rounded-full border border-pink-500/30"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{
                      scale: 3.5,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      willChange: "transform",
                    }}
                  />
                ))}

              {/* Main Circle */}
              <m.div
                className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center border border-white/30 z-10 overflow-hidden"
                animate={{
                  scale: isDone ? [1, 1.08, 1] : 1,
                  boxShadow: isDone
                    ? [
                      "0 0 45px rgba(255,255,255,0.12), 0 0 80px rgba(34,211,238,0.20)",
                      "0 0 70px rgba(255,255,255,0.18), 0 0 140px rgba(59,130,246,0.35)",
                      "0 0 45px rgba(255,255,255,0.12), 0 0 80px rgba(34,211,238,0.20)",
                    ]
                    : "0 0 30px rgba(255,255,255,0.12)",
                }}
                transition={{
                  scale: isDone
                    ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.2 },
                  boxShadow: isDone
                    ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.2 },
                }}
                style={{ willChange: "transform" }}
              >
                {/* Gradient Ring */}
                <m.div
                  className="absolute inset-0 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isThrowing ? 1 : 0,
                  }}
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(34,211,238,0.9), rgba(59,130,246,0.9), rgba(99,102,241,0.9), rgba(34,211,238,0.9))",
                    maskImage:
                      "radial-gradient(circle, transparent 55%, black 70%)",
                    WebkitMaskImage:
                      "radial-gradient(circle, transparent 55%, black 70%)",
                  }}
                  transition={{ duration: 0.8 }}
                />

                {/* LOGO */}
                <m.div
                  ref={hubRef}
                  className="relative z-10 flex items-center justify-center max-sm:opacity-100 max-sm:transform-none"
                  initial={{ opacity: 0 }}
                  animate={isMobile ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                  } : {
                    opacity: 1,
                    x: introPhase === "logoOnly" ? offsets.x : 0,
                    y: introPhase === "logoOnly" ? offsets.y : 0,
                    rotate: introPhase === "spinning" ? 3600 : 0,
                    scale: 1,
                  }}
                  transition={{
                    x: { duration: 1.15, ease: [0.16, 1, 0.3, 1] },
                    y: { duration: 1.15, ease: [0.16, 1, 0.3, 1] },
                    rotate: { duration: 1.2, ease: "circOut" },
                    opacity: { duration: 0.3 },
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="AM Logo"
                    width={64}
                    height={64}
                    className="relative z-10 w-14 h-14 lg:w-16 lg:h-16 object-contain drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]"
                    priority
                  />
                </m.div>
              </m.div>
            </div>

            {/* Floating Feature Cards */}
            {features.map((feat, i) => {
              const pos = desktopPositions[i];
              const arc = arcConfig[i];

              const startX = offsets.x;
              const startY = offsets.y;

              const xFrames = isThrowing
                ? [startX, pos.x * 1.25, pos.x * 0.92, pos.x * 1.02, pos.x]
                : [startX, startX, startX, startX, startX];

              const yFrames = isThrowing
                ? [startY, pos.y + arc.arcY, pos.y * 1.08, pos.y * 0.98, pos.y]
                : [startY, startY, startY, startY, startY];

              const rFrames = isThrowing
                ? [0, arc.rot, arc.rot * 0.35, arc.rot * 0.1, 0]
                : [0, 0, 0, 0, 0];

              return (
                <m.div
                  key={i}
                  className="absolute z-20 will-change-transform pointer-events-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isThrowing ? 1 : 0,
                    scale: isThrowing ? [0.15, 1.1, 0.98, 1] : 0.15,
                    x: xFrames,
                    y: yFrames,
                    rotate: rFrames,
                    filter: isThrowing ? ["blur(10px)", "blur(0px)"] : "blur(10px)",
                  }}
                  transition={{
                    duration: 1.25,
                    delay: isThrowing ? 0.22 + i * 0.16 : 0,
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
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

/* ---------------- BACKGROUND ---------------- */

const BackgroundHighlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rafRef = useRef<number | null>(null);
  const lastMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      lastMouse.current = { x: e.clientX, y: e.clientY };
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

  return (
    <div className="absolute inset-0 overflow-hidden -z-30 bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />

      <m.div
        className="absolute inset-0 opacity-100"
        style={{ maskImage, WebkitMaskImage: maskImage }}
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

        <div className="absolute inset-0 overflow-hidden opacity-100 select-none pointer-events-none">
          {[
            { Icon: FaReact, color: "text-cyan-400", top: "10%", left: "10%" },
            {
              Icon: FaDatabase,
              color: "text-emerald-400",
              top: "20%",
              left: "80%",
            },
            { Icon: FaCode, color: "text-blue-500", top: "50%", left: "50%" },
            { Icon: FaLock, color: "text-rose-400", top: "80%", left: "20%" },
            {
              Icon: FaSearch,
              color: "text-purple-400",
              top: "60%",
              left: "85%",
            },
            {
              Icon: FaRocket,
              color: "text-orange-400",
              top: "15%",
              left: "40%",
            },
            {
              Icon: FaHtml5,
              color: "text-orange-600",
              top: "75%",
              left: "60%",
            },
            { Icon: FaCss3, color: "text-blue-600", top: "30%", left: "20%" },
            { Icon: FaJs, color: "text-yellow-400", top: "40%", left: "70%" },
            {
              Icon: FaServer,
              color: "text-slate-400",
              top: "70%",
              left: "10%",
            },
            {
              Icon: FaMobile,
              color: "text-indigo-400",
              top: "25%",
              left: "60%",
            },
            { Icon: FaBrain, color: "text-pink-400", top: "85%", left: "80%" },
            { Icon: FaCloud, color: "text-sky-300", top: "5%", left: "90%" },
            { Icon: FaGlobe, color: "text-teal-400", top: "90%", left: "40%" },
            { Icon: FaLaptop, color: "text-gray-300", top: "35%", left: "10%" },
          ].map((item, i) => (
            <m.div
              key={i}
              className={`
                absolute ${item.color} opacity-90
                text-3xl sm:text-4xl md:text-6xl lg:text-7xl
              `}
              style={{
                top: item.top,
                left: item.left,
                willChange: "transform",
              }}
              animate={{
                y: [0, -12, 0, 12, 0],
                x: [0, 10, 0, -10, 0],
                rotate: [0, 6, 0, -6, 0],
              }}
              transition={{
                y: {
                  duration: 6 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                },
                x: {
                  duration: 5 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                },
                rotate: {
                  duration: 7 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                },
              }}
            >
              <item.Icon className="drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]" />
            </m.div>
          ))}

          {/* ✅ Rotating dashed circle already hidden on mobile */}
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
