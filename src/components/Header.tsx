"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#0A142F]/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
          : "py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
              <Image
                src="/logo.png"
                alt="Logo"
                width={48}
                height={40}
                className="w-10 h-10 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="font-bold text-xl text-white tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                Software
              </p>
              <p className="text-xs text-gray-400 font-medium tracking-widest uppercase group-hover:text-gray-300 transition-colors duration-300">
                Solution
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 py-1 group ${pathname === link.href ? "text-blue-400" : "text-gray-300 hover:text-white"
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:to-blue-400 border border-white/10 overflow-hidden relative group"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-[#0A142F] border-l border-white/10 shadow-2xl z-[100] md:hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 flex items-center justify-between border-b border-white/10">
                <span className="text-xl font-bold text-white">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between p-4 rounded-xl transition-all group ${pathname === link.href ? "text-blue-400 bg-white/5" : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      <span className="font-medium text-lg">{link.name}</span>
                      <span className="text-blue-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-white/10 bg-white/5">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20 active:scale-95 transition-transform"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

