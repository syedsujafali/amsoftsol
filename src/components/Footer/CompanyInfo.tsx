"use client";

import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";

const CompanyInfo = () => {
    const socials = [FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaGithub];

    return (
        <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
                AM <span className="text-white">Software</span>
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                We are a leading web development company dedicated to transforming
                businesses through innovative digital solutions. Our expertise spans
                web, mobile, and cloud technologies.
            </p>

            <div className="flex gap-3">
                {socials.map((Icon, i) => (
                    <div
                        key={i}
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0d1526] border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer"
                    >
                        <Icon size={16} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyInfo;
