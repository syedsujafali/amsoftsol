"use client";

import React from "react";
import Link from "next/link";

const BottomBar = () => {
    return (
        <div className="border-t border-white/10 mt-20 pt-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-6">
                <p>© 2026 AM Software Solution. All rights reserved.</p>

                <div className="flex gap-6">
                    <Link 
                        href="/privacy-policy"
                        className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                    >
                        Privacy Policy
                    </Link>
                    <Link 
                        href="/terms-of-service"
                        className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                    >
                        Terms of Service
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BottomBar;
