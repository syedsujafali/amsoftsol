"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const CompanyInfo = () => {
    const socials = [
        { Icon: FaFacebookF, href: "https://www.facebook.com/" },
        { Icon: FaXTwitter, href: "https://www.x.com/" },
        { Icon: FaLinkedinIn, href: "https://www.linkedin.com/" },
        { Icon: FaInstagram, href: "https://www.instagram.com/" }
    ];

    return (
        <div>
            <div className="flex items-center gap-3 mb-5">
                <Image 
                    src="/logo.png" 
                    alt="AM Software Solution Logo" 
                    width={100} 
                    height={100} 
                    className="w-20 h-20 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] filter brightness-110"
                />
                <h3 className="text-2xl font-bold text-white">
                    <span className="text-white">Software<br></br>Solution</span>
                </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                We are a leading web development company dedicated to transforming
                businesses through innovative digital solutions. Our expertise spans
                web, mobile, and cloud technologies.
            </p>

            <div className="flex gap-3">
                {socials.map(({Icon, href}, i) => (
                    <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0d1526] border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer"
                    >
                        <Icon size={16} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CompanyInfo;
