"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { links } from "./constants";

interface MobileMenuProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    pathname: string;
}

const MobileMenu = ({ open, setOpen, pathname }: MobileMenuProps) => {
    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
                    />

                    <motion.div
                        key="drawer"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-[#0A142F] border-l border-white/10 shadow-2xl z-[100] md:hidden flex flex-col"
                    >
                        <div className="p-6 flex items-center justify-between border-b border-white/10">
                            <span className="text-xl font-bold text-white">Menu</span>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                            >
                                <FiX size={24} />
                            </button>
                        </div>

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
    );
};

export default MobileMenu;
