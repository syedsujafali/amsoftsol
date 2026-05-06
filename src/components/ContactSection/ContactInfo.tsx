"use client";

import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

const ContactInfo = () => {
    const contactItems = [
        {
            icon: <FiPhone />,
            title: "Call Us",
            text: "+91 40 4954 1452",
            link: "tel:+914049541452",
        },
        {
            icon: <FiMail />,
            title: "Email Us",
            text: "info@amsoftwaresolution.com",
            link: "mailto:info@amsoftwaresolution.com",
        },
        {
            icon: <FiMapPin />,
            title: "Visit Us",
            text: "II-4-658 Mustafa Towers Unit 203/C 2nd Floor, Lakdi ka pool Hyderabad 500004.",
        },
        {
            icon: <FiClock />,
            title: "Working Hours",
            text: "Mon – Fri: 9:00 AM – 6:00 PM | Sat – Sun: Closed",
        },
    ];

    return (
        <div className="space-y-6">
            {contactItems.map((item, index) => {
                const innerContent = (
                    <>
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 text-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500/20">
                            {item.icon}
                        </div>

                        <div>
                            <h4 className="font-semibold mb-1">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.text}</p>
                        </div>
                    </>
                );

                const baseClasses = "group flex gap-4 p-6 rounded-2xl bg-[#0d1526] border border-white/10 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]";

                if (item.link) {
                    return (
                        <a key={index} href={item.link} className={`${baseClasses} cursor-pointer block`}>
                            {innerContent}
                        </a>
                    );
                }

                return (
                    <div key={index} className={baseClasses}>
                        {innerContent}
                    </div>
                );
            })}
        </div>
    );
};

export default ContactInfo;
