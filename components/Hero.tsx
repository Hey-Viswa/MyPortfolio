"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef(null);
    const textContainerRef = useRef(null);
    const isInView = useInView(heroRef, { once: false });
    const controls = useAnimation();

    // Handle parallax and text scaling effect on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animate elements when in view
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Calculate Apple-style scaling text based on scroll position
    const calculateTextScale = () => {
        const scrollProgress = Math.min(scrollY / 500, 1);
        return 1 - (scrollProgress * 0.3); // Scale down to 70% of original size
    };

    return (
        <motion.section
            ref={heroRef}
            className="relative min-h-screen flex items-center overflow-hidden bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Enhanced blue gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-blue-950/10 to-black" />

            {/* Large floating blue orbs with parallax */}
            <motion.div
                className="absolute -top-40 -left-40 w-120 h-120 rounded-full bg-blue-600/20 filter blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                style={{
                    transform: `translateY(${scrollY * 0.2}px)`,
                }}
            />

            <motion.div
                className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-blue-500/15 filter blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1,
                }}
                style={{
                    transform: `translateY(${scrollY * -0.1}px) translateX(${scrollY * 0.05}px)`,
                }}
            />

            <motion.div
                className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-indigo-600/20 filter blur-3xl"
                animate={{
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 2,
                }}
                style={{
                    transform: `translateY(${scrollY * 0.1}px)`,
                }}
            />

            {/* Blue particle effect */}
            <div className="absolute inset-0 opacity-40">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-blue-400"
                        initial={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.3 + 0.1,
                            scale: Math.random() * 1 + 0.5,
                        }}
                        animate={{
                            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                            opacity: [0.1, 0.5, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Horizontal light beams */}
            <motion.div
                className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
                style={{
                    transform: `translateY(${scrollY * 0.15}px)`,
                }}
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />

            <motion.div
                className="absolute top-2/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
                style={{
                    transform: `translateY(${scrollY * -0.1}px)`,
                }}
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 2,
                }}
            />

            {/* Updated conveyor belt for BISWARANJAN text */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 text-[25vw] font-bold text-blue-500/5 whitespace-nowrap tracking-tighter"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    }}
                >
                    BISWARANJANBISWARANJAN
                </motion.div>
            </div>

            {/* Main content container with Apple-style scaling on scroll - adjusted positioning */}
            <div
                ref={textContainerRef}
                className="container mx-auto px-6 pt-20 pb-20 md:pt-32 md:pb-32 relative z-10" /* Reduced pt-40 to pt-20 */
                style={{
                    transform: `scale(${calculateTextScale()})`,
                    transformOrigin: "center 40%",
                    opacity: 1 - (scrollY / 800),
                }}
            >
                <div className="max-w-3xl mx-auto">
                    {/* Enhanced hero content */}
                    <div className="text-center space-y-3">
                        {/* Greeting with glow - ADJUSTED POSITIONING */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial="hidden"
                            animate={controls}
                            className="font-mono text-blue-400 mb-1 relative inline-block mt-0" /* Change mt-24 to mt-8 */
                        >
                            <span className="relative z-5">Hello, I&apos;m</span>
                            <div className="absolute inset-0 bg-blue-500/20 blur-md -z-10 rounded-full scale-150" />
                        </motion.div>

                        {/* Name with enhanced styling */}
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial="hidden"
                            animate={controls}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-300 tracking-tight relative"
                        >
                            <span className="relative z-10">Optivus</span>
                            <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 rounded-full scale-150" />
                        </motion.h1>

                        {/* FIXED: Role description carousel - each role appears one at a time */}
                        <div className="relative h-12 overflow-hidden mt-2">
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{
                                    y: [0, -48, -96, -144, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    times: [0, 0.25, 0.5, 0.75, 1],
                                    ease: [0.4, 0.0, 0.2, 1],
                                }}
                                className="absolute inset-x-0"
                            >
                                <div className="h-12 flex items-center justify-center text-xl md:text-2xl text-blue-200 font-medium">Android Developer</div>
                                <div className="h-12 flex items-center justify-center text-xl md:text-2xl text-blue-200 font-medium">Web Developer</div>
                                <div className="h-12 flex items-center justify-center text-xl md:text-2xl text-blue-200 font-medium">UI Designer</div>
                                <div className="h-12 flex items-center justify-center text-xl md:text-2xl text-blue-200 font-medium">Problem Solver</div>
                            </motion.div>
                        </div>

                        {/* Enhanced line separator with glow */}
                        <motion.div
                            variants={{
                                hidden: { width: 0 },
                                visible: { width: "180px" }
                            }}
                            initial="hidden"
                            animate={controls}
                            transition={{ delay: 0.3 }}
                            className="h-0.5 bg-gradient-to-r from-blue-400/10 via-blue-400/80 to-blue-400/10 mx-auto rounded-full relative mt-6"
                        >
                            <div className="absolute inset-0 bg-blue-400/30 blur-sm" />
                        </motion.div>

                        {/* Enhanced tagline */}
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial="hidden"
                            animate={controls}
                            transition={{ delay: 0.3 }}
                            className="text-gray-300 max-w-xl mx-auto text-lg relative z-10 mt-6"
                        >
                            Creating <span className="text-blue-300">elegant digital experiences</span> that solve <span className="text-blue-300">real problems</span>.
                        </motion.p>

                        {/* Enhanced CTA buttons */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial="hidden"
                            animate={controls}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4 justify-center"
                        >
                            {/* Primary button with enhanced blue glow */}
                            <motion.a
                                href="/projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium inline-flex items-center shadow-lg shadow-blue-500/30"
                            >
                                <span className="relative z-10">View my work</span>
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 z-0"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="absolute -inset-1 bg-blue-400/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                            </motion.a>

                            {/* Secondary button with blue border */}
                            <motion.a
                                href="/about"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="group px-8 py-4 rounded-full border border-blue-400/40 text-white font-medium inline-flex items-center hover:bg-blue-500/10 transition-colors duration-300 relative"
                            >
                                <span>About me</span>
                                <div className="absolute -inset-0.5 bg-blue-400/10 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Enhanced scroll indicator with blue glow */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="text-blue-400/80 text-xs font-mono tracking-wider">SCROLL</div>
                <motion.div
                    className="w-6 h-10 rounded-full border border-blue-400/40 flex items-center justify-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-blue-500/5 blur-sm" />
                    <motion.div
                        className="w-1.5 h-1.5 bg-blue-400 rounded-full absolute top-2"
                        animate={{
                            y: [0, 15, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Decorative blue grid lines in background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000_100%)]" />
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    transform: `translateY(${scrollY * 0.1}px)`,
                }}
            />
        </motion.section>
    );
}