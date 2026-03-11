"use client";

import React, { useEffect, useRef, useState } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { stats, features, desktopPositions, arcConfig } from "./MainSection/constants";
import BackgroundHighlight from "./MainSection/BackgroundHighlight";
import HeroContent from "./MainSection/HeroContent";
import LogoHub from "./MainSection/LogoHub";
import FeatureCard from "./MainSection/FeatureCard";

const MainSection = () => {
  const [introPhase, setIntroPhase] = useState<"logoOnly" | "spinning" | "throwing" | "done">("logoOnly");
  const [offsets, setOffsets] = useState({ x: 0, y: 0 });
  const [throwVector, setThrowVector] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isIntroSkipped, setIsIntroSkipped] = useState(false);

  const hubRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const isMobileDevice = window.innerWidth < 768;
    if (isMobileDevice) {
      setIntroPhase("done");
      setIsIntroSkipped(true);
      return;
    }

    // Run synchronously — no rAF delay
    const measure = () => {
      const hub = hubRef.current;
      const left = leftContentRef.current;
      
      if (!hub || !left) {
        // Retry if layout isn't ready
        setTimeout(measure, 50);
        return;
      }
      
      const hubRect = hub.getBoundingClientRect();
      const leftRect = left.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      setOffsets({ x: centerX - (hubRect.left + hubRect.width / 2), y: centerY - (hubRect.top + hubRect.height / 2) });
      setThrowVector({ x: centerX - (leftRect.left + leftRect.width / 2), y: centerY - (leftRect.top + leftRect.height / 2) });

      setIntroPhase("logoOnly");
      setTimeout(() => setIntroPhase("spinning"), 1000);
      setTimeout(() => setIntroPhase("throwing"), 6000);
      setTimeout(() => {
        setIntroPhase("done");
        sessionStorage.setItem("amsoft_intro_played", "true");
      }, 7200);
    };
    // Use a small timeout to ensure refs are fully ready and layout is stable
    const timer = setTimeout(measure, 150);
    return () => clearTimeout(timer);
  }, []);

  const isMobile = isMounted && window.innerWidth < 768;
  // Background + content hidden during initial logo-only and spinning phases
  const isBackgroundVisible = isMounted && (introPhase === "throwing" || introPhase === "done" || isMobile);
  const isThrowing = isMounted && (introPhase === "throwing" || introPhase === "done" || isMobile);
  const isDone = isMounted && (introPhase === "done" || isMobile);

  return (
    <LazyMotion features={domAnimation}>
      <section id="home" className="relative w-full overflow-hidden flex items-start lg:items-center justify-center px-4 sm:px-6 pt-2 pb-10 sm:py-6 lg:py-6 md:min-h-screen">
        {/* Full-screen Intro Overlay */}
        {(introPhase === "logoOnly" || introPhase === "spinning") && (
          <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center pointer-events-auto">
            <div className="scale-125 lg:scale-150 transform-gpu">
              <LogoHub 
                hubRef={{ current: null }} 
                isDone={false} 
                isMobile={isMobile} 
                introPhase={introPhase} 
                offsets={{ x: 0, y: 0 }} 
                isIntroSkipped={isIntroSkipped} 
              />
            </div>
          </div>
        )}

        {isBackgroundVisible && (
          <div className={`!opacity-100 ${isIntroSkipped ? 'animate-throw-in-bg-skip' : 'max-md:!animation-none animate-throw-in-bg'}`}>
            <BackgroundHighlight />
          </div>
        )}

        <div className="max-w-screen-2xl w-full pt-1 sm:pt-4 md:pt-6 pb-2 sm:pb-6 md:pb-8 lg:pb-10 flex flex-col lg:flex-row items-center gap-10 sm:gap-14 md:gap-16 lg:gap-24 px-2 sm:px-4 lg:px-10 pointer-events-none">
          <HeroContent isThrowing={isThrowing} isMobile={isMobile} isIntroSkipped={isIntroSkipped} throwVector={throwVector} leftContentRef={leftContentRef} stats={stats} />

          <div className={`hidden md:flex relative flex-1 min-h-[520px] lg:min-h-[600px] items-center justify-center pointer-events-none ${introPhase === "throwing" ? "z-50" : "z-10"}`}>
            {isThrowing && [1, 2].map((ring) => (
              <m.div key={ring} className="absolute border border-blue-500/5 rounded-full border-dashed" animate={{ rotate: ring % 2 === 0 ? 360 : -360 }} style={{ width: 320 + ring * 140, height: 320 + ring * 140 }} transition={{ rotate: { duration: 60 + ring * 20, repeat: Infinity, ease: "linear" } }} />
            ))}

            <m.div
              animate={introPhase === "throwing" ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-50 flex items-center justify-center"
            >
              <LogoHub hubRef={hubRef} isDone={isDone} isMobile={isMobile} introPhase={introPhase} offsets={offsets} isIntroSkipped={isIntroSkipped} />
            </m.div>

            {features.map((feat, i) => (
              <FeatureCard key={i} i={i} feat={feat} isThrowing={isThrowing} isIntroSkipped={isIntroSkipped} pos={desktopPositions[i]} arc={arcConfig[i]} offsets={offsets} />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default MainSection;
