"use client";

import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const FooterContact = () => {
    return (
        <div>
            <h4 className="font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4 text-gray-400 text-sm">
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
                    <p>info@amsoftware.com</p>
                </div>
            </div>
        </div>
    );
};

export default FooterContact;
