import React from "react";
import { FaBolt, FaShieldAlt } from "react-icons/fa";

export const stats = [
    { number: "250+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
];

export const features = [
    { type: "text", title: "AI", subtitle: "Powered" },
    { type: "icon", label: "Fast", icon: React.createElement(FaBolt, { size: 50 }) },
    { type: "icon", label: "Secure", icon: React.createElement(FaShieldAlt, { size: 50 }) },
    { type: "text", title: "99%", subtitle: "Uptime" },
];

export const desktopPositions = [
    { x: -140, y: -160 },
    { x: 180, y: -70 },
    { x: 130, y: 170 },
    { x: -180, y: 120 },
];

export const arcConfig = [
    { arcY: -120, rot: -35 },
    { arcY: -90, rot: 40 },
    { arcY: 90, rot: 30 },
    { arcY: 120, rot: -40 },
];
