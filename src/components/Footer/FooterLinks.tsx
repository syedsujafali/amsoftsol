"use client";

import React from "react";

const FooterLinks = () => {
    const quickLinks = ["Home", "About Us", "Services", "Portfolio", "Blog", "Contact"];
    const services = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "E-commerce Development",
        "SEO & Digital Marketing",
        "Cloud & IT Solutions",
    ];

    return (
        <>
            <div>
                <h4 className="font-semibold mb-6 text-white">Quick Links</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                    {quickLinks.map((item, i) => (
                        <li key={i} className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="font-semibold mb-6 text-white">Our Services</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                    {services.map((item, i) => (
                        <li key={i} className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default FooterLinks;
