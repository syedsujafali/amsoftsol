"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

export default function Stars({ count }: { count: number }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <span
                    key={i}
                >
                    <FaStar className="text-yellow-400 text-lg" />
                </span>
            ))}
        </div>
    );
}
