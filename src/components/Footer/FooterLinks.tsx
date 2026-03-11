"use client";

import React from "react";
import Link from "next/link";

const FooterLinks = () => {
    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Blog", href: "/blog" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact", href: "/contact" }
    ];
    const services = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "E-commerce Development",
        "SEO & Digital Marketing",
        "Cloud & IT Solutions",
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-8">
            <div>
                <h4 className="font-bold mb-8 text-white text-base uppercase tracking-wider">Quick Links</h4>
                <ul className="space-y-4 text-gray-400 text-[15px]">
                    {quickLinks.map((item, i) => (
                        <li key={i}>
                            <Link 
                                href={item.href}
                                className="hover:text-blue-400 transition-all duration-300 flex items-center gap-3 group"
                            >
                                <span className="w-1.5 h-[1.5px] bg-blue-500/30 group-hover:w-4 group-hover:bg-blue-400 transition-all duration-300" />
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="font-bold mb-8 text-white text-base uppercase tracking-wider">Our Services</h4>
                <ul className="space-y-4 text-gray-400 text-[15px]">
                    {services.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 group cursor-pointer hover:text-blue-400 transition-colors duration-300">
                            <span className="w-1.5 h-[1.5px] bg-blue-500/30 group-hover:bg-blue-400 transition-colors" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FooterLinks;
