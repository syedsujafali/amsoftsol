"use client";

import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
    value: number;
    duration?: number;
}

export default function Counter({ value, duration = 1200 }: CounterProps) {
    const [count, setCount] = useState(0);
    const startedRef = useRef(false);
    const ref = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || startedRef.current) return;
                startedRef.current = true;

                const start = 0;
                const end = value;
                const startTime = performance.now();

                const animate = (now: number) => {
                    const progress = Math.min((now - startTime) / duration, 1);
                    setCount(Math.floor(start + (end - start) * progress));
                    if (progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
            },
            { threshold: 0.4 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [value, duration]);

    return <span ref={ref}>{count}</span>;
}
