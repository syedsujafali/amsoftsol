"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import Logo from "./Header/Logo";
import DesktopNav from "./Header/DesktopNav";
import MobileMenu from "./Header/MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full z-40 transition-all duration-300 bg-[#020617] ${scrolled
          ? "bg-[#0A142F]/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
          : "py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Logo />
          <DesktopNav pathname={pathname} />

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu open={open} setOpen={setOpen} pathname={pathname} />
    </>
  );
}
