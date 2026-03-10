"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
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
    );
};

export default Logo;
