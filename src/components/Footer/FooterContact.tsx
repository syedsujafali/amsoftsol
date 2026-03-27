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

                <div className="flex gap-3 items-center">
                    <FiPhone className="text-blue-400" />
                    <p>+91 40 4954 1452</p>
                </div>

                <div className="flex gap-3 items-center">
                    <FiMail className="text-blue-400" />

                    <p>info@amsoftwaresolution.com</p>
=======
57ffb9877be9499803c45070f1b08325ad463347
                </div>
            </div>
        </div>
    );
};

export default FooterContact;
