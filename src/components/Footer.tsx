"use client";

import React from "react";
import CompanyInfo from "./Footer/CompanyInfo";
import FooterLinks from "./Footer/FooterLinks";
import FooterContact from "./Footer/FooterContact";
import BottomBar from "./Footer/BottomBar";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-br from-[#020617] via-[#071029] to-[#0b1220] text-white pt-24 pb-12 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-125 h-125] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-indigo-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-4">
          <CompanyInfo />
        </div>
        <div className="lg:col-span-5">
          <FooterLinks />
        </div>
        <div className="lg:col-span-3">
          <FooterContact />
        </div>
      </div>

      <BottomBar />
    </footer>
  );
}