"use client";

import React from "react";
import Link from "next/link";
import { links } from "./constants";

interface DesktopNavProps {
    pathname: string;
}

const DesktopNav = ({ pathname }: DesktopNavProps) => {
    return (
        <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`relative text-[13px] font-normal transition-colors duration-300 py-1 group ${pathname === link.href ? "text-blue-400" : "text-gray-300 hover:text-white"
                            }`}
                    >
                        {link.name}
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                            }`} />
                    </Link>
                ))}
            </nav>

            <div
            >
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 text-[13px] font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:to-blue-400 border border-white/10 overflow-hidden relative group"
                >
                    <span className="relative z-10">Get Quote</span>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </Link>
            </div>
        </div>
    );
};

export default DesktopNav;
