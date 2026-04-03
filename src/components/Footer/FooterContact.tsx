"use client";

import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const FooterContact = () => {
    return (
        <div className="lg:pl-8">
            <h4 className="font-bold mb-8 text-white text-base uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-5 text-gray-400 text-[15px]">
                <div className="flex gap-3 items-start">
                    <FiMapPin className="text-blue-400 mt-1" />
                    <p>
                        II–4–658 Mustafa Towers <br />
                        Unit 203/C 2nd Floor, Lakdi ka pool <br />
                        Hyderabad 500004
                    </p>
                </div>

                <a href="tel:+914049541452" className="flex gap-3 items-center hover:text-blue-400 transition-colors duration-300 group cursor-pointer">
                    <FiPhone className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    <p>+91 40 4954 1452</p>
                </a>

                <a href="mailto:info@amsoftwaresolution.com" className="flex gap-3 items-center hover:text-blue-400 transition-colors duration-300 group cursor-pointer">
                    <FiMail className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    <p>info@amsoftwaresolution.com</p>
                </a>
            </div>
        </div>
    );
};

export default FooterContact;
