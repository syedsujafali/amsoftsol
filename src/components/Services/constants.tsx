import React from "react";
import {
    FaGlobe,
    FaMobileAlt,
    FaPalette,
    FaCloud,
    FaShoppingCart,
    FaChartLine,
} from "react-icons/fa";

export const services = [
    {
        icon: React.createElement(FaGlobe, { size: 22 }),
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies for optimal performance and scalability.",
        features: ["React & Next.js", "Node.js & Python", "WordPress & CMS"],
        color: "text-blue-400",
        bg: "bg-blue-500/10",
    },
    {
        icon: React.createElement(FaMobileAlt, { size: 22 }),
        title: "Mobile Responsiveness",
        description: "Fully responsive websites optimized for all screen sizes, ensuring smooth performance and consistent user experience across devices.",
        features: ["Mobile-First Design", "Tablet Optimization", "Cross-Browser Compatibility"],
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
    },
    {
        icon: React.createElement(FaPalette, { size: 22 }),
        title: "UI/UX Design",
        description: "User-centered design solutions that combine aesthetics with functionality for maximum engagement.",
        features: ["User Research", "Wireframing", "Prototyping"],
        color: "text-purple-400",
        bg: "bg-purple-500/10",
    },
    {
        icon: React.createElement(FaCloud, { size: 22 }),
        title: "Cloud & Database",
        description: "Secure, scalable cloud infrastructure with expert IT consulting for modern digital systems.",
        features: ["AWS & GCP", "Mongo DB", "SQL Databases"],
        color: "text-sky-400",
        bg: "bg-sky-500/10",
    },
    {
        icon: React.createElement(FaShoppingCart, { size: 22 }),
        title: "E-commerce Development",
        description: "Complete e-commerce solutions that drive sales and provide exceptional shopping experiences.",
        features: ["Shopify & WooCommerce", "Payment Integration", "Inventory Management"],
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
    },
    {
        icon: React.createElement(FaChartLine, { size: 22 }),
        title: "SEO & Digital Marketing",
        description: "Data-driven marketing strategies that increase visibility, traffic, and conversions.",
        features: ["SEO Optimization", "PPC Campaigns", "Social Media Marketing"],
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
    },
];
