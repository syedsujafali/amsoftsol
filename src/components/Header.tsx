"use client";

import { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className="
          sticky top-0 z-40
          bg-[#0A142F]/80 backdrop-blur-lg
          border-b border-white/10
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={48} height={40} className="w-12 h-10" priority />
            <div className="leading-tight">
              <p className="font-bold text-2xl text-white hover:text-blue-400 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
                Software
              </p>
              <p className="text-sm text-gray-400">Solution</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-gray-300 font-medium">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  relative transition-all duration-300
                  hover:text-white hover:-translate-y-1
                  after:absolute after:left-0 after:-bottom-1
                  after:h-0.5 after:w-0 after:bg-blue-500
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#get-quote"
            className="
              hidden md:block
              bg-blue-500 hover:bg-blue-600
              text-white px-5 py-2 rounded-lg font-medium
              transition-all duration-200
              hover:scale-105 active:scale-95
              hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]
            "
          >
            Get Quote
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed inset-0 z-40
          transition-all duration-700 ease-in-out
          ${open ? "visible opacity-100" : "invisible opacity-0"}
        `}
      >
        {/* Blur Area */}
        <div
          onClick={() => setOpen(false)}
          className="absolute right-0 top-0 h-full w-[20%] backdrop-blur-lg bg-black/40"
        />

        {/* Slide Menu */}
        <div
          className={`
            absolute left-0 top-0 h-full w-[80%]
            bg-[#0A142F]
            px-6 py-8 z-50
            transform transition-transform duration-700 ease-in-out
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl mb-6"
          >
            ✕
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 text-lg text-gray-300">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="hover:text-white transition hover:translate-x-2"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-8 h-px bg-white/10" />

          {/* Contact Info */}
          <div className="flex flex-col gap-4 text-gray-300 text-sm">
            <a
              href="mailto:info@amsoftware.com"
              className="flex items-center gap-3 hover:text-blue-400 transition"
            >
              <FiMail />
              info@amsoftware.com
            </a>

            <a
              href="tel:+914048532637"
              className="flex items-center gap-3 hover:text-blue-400 transition"
            >
              <FiPhone />
              +91 40 4853 2637
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a className="p-2 rounded-full text-white bg-linear-to-br from-[#0D47A1] to-[#1976D2] hover:scale-110 transition">
              <FaFacebookF size={14} />
            </a>
            <a className="p-2 rounded-full text-white bg-linear-to-br from-gray-700/40 to-black/70 hover:scale-110 transition">
              <FaXTwitter size={14} />
            </a>
            <a className="p-2 rounded-full text-white bg-linear-to-br from-[#004182] to-[#0A66C2] hover:scale-110 transition">
              <FaLinkedinIn size={14} />
            </a>
            <a className="p-2 rounded-full text-white bg-linear-to-br from-[#C13584] via-[#833AB4] to-[#FCAF45] hover:scale-110 transition">
              <FaInstagram size={14} />
            </a>
          </div>

          {/* Mobile CTA */}
          <a
            href="#get-quote"
            onClick={() => setOpen(false)}
            className="
              inline-block mt-10
              bg-blue-500 hover:bg-blue-600
              text-white px-6 py-3 rounded-lg font-medium
              transition hover:scale-105
            "
          >
            Get Quote
          </a>
        </div>
      </div>
    </>
  );
}
