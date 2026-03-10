"use client";

import React from "react";
import CompanyInfo from "./Footer/CompanyInfo";
import FooterLinks from "./Footer/FooterLinks";
import FooterContact from "./Footer/FooterContact";
import BottomBar from "./Footer/BottomBar";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#020617] via-[#071029] to-[#0b1220] text-white pt-20 pb-10 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <CompanyInfo />
        <FooterLinks />
        <FooterContact />
      </div>

      <BottomBar />
    </footer>
  );
}