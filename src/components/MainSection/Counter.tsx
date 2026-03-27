"use client";

import React, { useEffect } from "react";
import { m, useSpring, useTransform } from "framer-motion";

interface CounterProps {
    value: string;
}

const Counter = ({ value }: CounterProps) => {
    const numericValue = parseInt(value);
    const suffix = value.replace(/[0-9]/g, "");

    const springValue = useSpring(0, {
        stiffness: 70,
        damping: 18,
        mass: 0.9,
    });

    const rounded = useTransform(springValue, (latest) => Math.round(latest));

    useEffect(() => {
        const t = setTimeout(() => {
            springValue.set(numericValue);
        }, 300);

        return () => clearTimeout(t);
    }, [numericValue, springValue]);

    return (
        <m.span className="inline-flex">
            <m.span>{rounded}</m.span>
            {suffix}
        </m.span>
    );
};

export default Counter;
