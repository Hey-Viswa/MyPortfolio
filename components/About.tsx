"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { User, Award, Briefcase, Sparkles, Globe, Code, Mail } from "lucide-react";
import Image from "next/image";
import { url } from "inspector";

export default function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    type TabKey = 'about' | 'vision' | 'journey';
    const [activeTab, setActiveTab] = useState<TabKey>("about");

    const tabContent = {
        about: {
            title: "My Story",
            content: [
                "Android and web developer with 2 years of experience crafting mobile apps and responsive websites. Currently pursuing B.E. and passionate about creating elegant solutions that solve real problems.",
                "My journey in development started during my first year of engineering when I built my first Android app. Since then, I've been continuously learning and creating digital experiences that are both functional and visually appealing.",
                "I specialize in building intuitive user interfaces and creating seamless experiences across different platforms. My goal is to develop applications that not only look great but also provide real value to users."
            ]
        },
        vision: {
            title: "Vision & Goals",
            content: [
                "Creating innovative digital solutions that help people solve everyday problems while continuously expanding my technical skills.",
                "I aim to combine creativity with technical excellence to build products that make a difference in people's lives.",
                "My goal is to keep learning and growing as a developer, staying current with the latest technologies and best practices."
            ]
        },
        journey: {
            title: "My Journey",
            content: [
                "Started programming in high school with basic web development.",
                "Built my first Android app during freshman year of engineering.",
                "Completed several freelance projects for local businesses.",
                "Currently developing a portfolio of projects that showcase my skills across multiple platforms."
            ]
        }
    };

    return (
        <section ref={ref} className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden" id="about">
            {/* Subtle background elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-600/5 filter blur-3xl" />
                <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-indigo-600/5 filter blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold text-white mb-2">About <span className="text-blue-500">Me</span></h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto" />
                </motion.div>

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Profile image - 5/12 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5"
                    >
                        <div className="relative mx-auto max-w-sm">
                            {/* Main image with border */}
                            <div className="rounded-lg overflow-hidden border border-white/10 shadow-lg shadow-blue-500/10">
                                <div className="aspect-[4/5] relative">
                                    <Image
                                        src="/profle.jpg"
                                        alt="Your Name"
                                        width={400}
                                        height={500}
                                        className="transition-all duration-300 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
                                </div>
                            </div>

                            {/* Experience card */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-lg"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                                        <Briefcase size={16} className="text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Experience</p>
                                        <p className="text-white font-bold">2+ Years</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Projects card */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className="absolute -top-6 -left-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-lg"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                                        <Code size={16} className="text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Projects</p>
                                        <p className="text-white font-bold">15+ Completed</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Name and social links */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className="text-center mt-12"
                        >
                            <h3 className="text-3xl font-bold text-white mb-1">Your Name</h3>
                            <p className="text-blue-400 mb-4">Android & Web Developer</p>

                            {/* Social icons */}
                            <div className="flex justify-center space-x-4">
                                {['github', 'linkedin', 'twitter', 'dribbble'].map((platform) => (
                                    <a
                                        key={platform}
                                        href={`#${platform}`}
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all"
                                    >
                                        <span className="text-sm">{platform[0].toUpperCase()}</span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content area - 7/12 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        {/* Tab navigation */}
                        <div className="flex mb-6 border-b border-white/10">
                            {Object.keys(tabContent).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab as TabKey)}
                                    className={`relative px-5 py-2 text-base font-medium transition-all ${activeTab === tab
                                        ? "text-blue-500"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Tab content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="min-h-[240px]"
                            >
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
                                        {activeTab === "about" ? (
                                            <User size={16} className="text-blue-400" />
                                        ) : activeTab === "vision" ? (
                                            <Sparkles size={16} className="text-blue-400" />
                                        ) : (
                                            <Award size={16} className="text-blue-400" />
                                        )}
                                    </span>
                                    {tabContent[activeTab].title}
                                </h3>

                                <div className="space-y-4 text-gray-300">
                                    {tabContent[activeTab].content.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Skill highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                            {[
                                {
                                    icon: <Globe size={20} className="text-blue-400" />,
                                    title: "Mobile & Web",
                                    desc: "Cross-platform development"
                                },
                                {
                                    icon: <Award size={20} className="text-blue-400" />,
                                    title: "Quality Focus",
                                    desc: "Elegant user experiences"
                                },
                                {
                                    icon: <Mail size={20} className="text-blue-400" />,
                                    title: "Let's Connect",
                                    desc: "Open to new projects"
                                }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-500/30 transition-all"
                                >
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-3">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-medium text-white mb-1">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Contact button */}
                        <div className="mt-8">
                            <a
                                href="#contact"
                                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-all"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}