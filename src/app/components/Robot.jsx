"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const Robot = () => {
    const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
    const [isBlinking, setIsBlinking] = useState(false);
    const [isActive, setIsActive] = useState(false); // Click state
    const [isShaking, setIsShaking] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleClick = () => {
        setIsActive(!isActive);
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 300);
    };

    // Spring physics for smooth head movement
    const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

    // Transform mouse position to rotation values
    const rotateX = useTransform(mouseY, [-500, 500], [10, -10]); // Look up/down
    const rotateY = useTransform(mouseX, [-500, 500], [-10, 10]); // Look left/right

    // Eye Tracking Logic
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Update Spring values for Head Tilt (Global mouse position)
            mouseX.set(e.clientX - window.innerWidth / 2);
            mouseY.set(e.clientY - window.innerHeight / 2);

            // Eye Tracking (Local to robot face)
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            const angle = Math.atan2(deltaY, deltaX);
            const distance = Math.min(10, Math.hypot(deltaX, deltaY) / 10);

            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            setPupilPos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Blinking Logic
    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 200);
        }, 4000 + Math.random() * 2000);

        return () => clearInterval(blinkInterval);
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-full flex items-center justify-center relative min-h-[400px] cursor-pointer perspective-1000"
            onClick={handleClick}
        >

            {/* Background Orbitals */}
            <motion.div
                className={`absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border ${isActive ? "border-red-500/30" : "border-slate-700/30"} rounded-full border-dashed`}
                animate={{ rotate: 360, scale: isActive ? 1.1 : 1 }}
                transition={{ duration: isActive ? 20 : 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className={`absolute w-[250px] h-[250px] md:w-[380px] md:h-[380px] border ${isActive ? "border-red-500/20" : "border-cyan-500/10"} rounded-full`}
                animate={{ rotate: -360, scale: [1, 1.05, 1] }}
                transition={{
                    rotate: { duration: isActive ? 15 : 30, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
            />
            <motion.div
                className={`absolute w-[200px] h-[200px] md:w-[320px] md:h-[320px] border ${isActive ? "border-orange-500/20" : "border-purple-500/10"} rounded-full border-dashed`}
                animate={{ rotate: 180 }}
                transition={{ duration: isActive ? 10 : 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating Animation Wrapper with 3D Tilt */}
            <motion.div
                style={{ rotateX, rotateY, perspective: 1000 }}
                animate={{ 
                    y: isMobile ? 0 : [-15, 5, -15],
                    x: (isShaking && !isMobile) ? [-10, 10, -10, 10, -5, 5, 0] : 0 
                }}
                transition={{
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    x: (isShaking && !isMobile) ? { duration: 0.3 } : { duration: 0 }
                }}
                className="relative z-10 will-change-transform"
                whileTap={{ scale: 0.95 }}
            >
                {/* HEAD CONTAINER */}
                <div className="w-60 h-32 md:w-80 md:h-44 bg-slate-900 rounded-[2rem] md:rounded-[3rem] relative border border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden transition-colors duration-500 block transform-style-3d">

                    {/* Metallic Texture */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950" />

                    {/* Tech Detail Lines */}
                    <motion.div
                        className={`absolute inset-x-0 bottom-4 h-[1px] ${isActive ? "bg-red-500/50" : "bg-slate-700/50"}`}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="absolute inset-x-0 top-12 h-[1px] bg-slate-700/20" />

                    {/* Scanning Beam (Active Only) */}
                    {isActive && (
                        <div className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay">
                            <motion.div
                                className="absolute top-0 bottom-0 w-[2px] bg-red-400 shadow-[0_0_25px_rgba(248,113,113,1)]"
                                animate={{ left: ["0%", "100%", "0%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
                                animate={{ left: ["-10%", "90%", "-10%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    )}

                    {/* EYES CONTAINER */}
                    <div className="flex gap-6 md:gap-10 items-center z-10 relative">

                        {/* LEFT EYE */}
                        <motion.div
                            className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-black border-4 border-slate-800 shadow-inner relative flex items-center justify-center overflow-hidden group"
                            animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                            transition={{ duration: 0.1 }}
                        >
                            <motion.div
                                className={`w-6 h-6 md:w-10 md:h-10 rounded-full relative z-10 box-decoration-clone ${isActive ? "bg-red-500 shadow-[0_0_30px_#ef4444]" : "bg-orange-500 shadow-[0_0_20px_#f97316]"}`}
                                animate={{ x: pupilPos.x * 2.5, y: pupilPos.y * 2.5 }}
                                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                            >
                                <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full opacity-90 blur-[1px]" />
                            </motion.div>
                            <div className="absolute top-2 left-4 w-12 h-6 bg-white/5 rounded-full rotate-[-25deg] pointer-events-none" />
                        </motion.div>

                        {/* RIGHT EYE */}
                        <motion.div
                            className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-black border-4 border-slate-800 shadow-inner relative flex items-center justify-center overflow-hidden"
                            animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                            transition={{ duration: 0.1 }}
                        >
                            <motion.div
                                className={`w-6 h-6 md:w-10 md:h-10 rounded-full relative z-10 box-decoration-clone ${isActive ? "bg-red-500 shadow-[0_0_30px_#ef4444]" : "bg-orange-500 shadow-[0_0_20px_#f97316]"}`}
                                animate={{ x: pupilPos.x * 2.5, y: pupilPos.y * 2.5 }}
                                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                            >
                                <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full opacity-90 blur-[1px]" />
                            </motion.div>
                            <div className="absolute top-2 left-4 w-12 h-6 bg-white/5 rounded-full rotate-[-25deg] pointer-events-none" />
                        </motion.div>
                    </div>
                </div>

                {/* Neck Connection */}
                <div className="w-28 h-6 md:w-40 md:h-8 mx-auto -mt-2 md:-mt-3 bg-slate-800 rounded-b-xl border-x border-b border-slate-700 shimmer flex items-center justify-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isActive ? "bg-red-500 animate-pulse" : "bg-slate-600"}`} />
                    <div className={`w-2 h-2 rounded-full ${isActive ? "bg-red-500 animate-pulse delay-75" : "bg-slate-600"}`} />
                    <div className={`w-2 h-2 rounded-full ${isActive ? "bg-red-500 animate-pulse delay-150" : "bg-slate-600"}`} />
                </div>

            </motion.div>

            {/* Click Hint */}
            <motion.div
                className="absolute bottom-2 md:-bottom-10 text-xs text-slate-500 font-mono tracking-widest uppercase"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                {isActive ? "SYSTEM: ACTIVE" : "STATUS: STANDBY"}
            </motion.div>

        </div>
    );
};

export default Robot;
