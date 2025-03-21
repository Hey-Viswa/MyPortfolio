"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, SmartphoneNfc, Layers, Database, Globe, Server, FileCode, TerminalSquare } from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Updated skills data based on your actual technical skills
  const skillCategories = [
    { 
      name: "Mobile Development",
      icon: <SmartphoneNfc size={24} className="text-blue-400" />,
      color: "blue",
      skills: [
        { name: "Android (Java/Kotlin)", level: 95 },
        { name: "Jetpack Compose", level: 85 },
        { name: "Jetpack Libraries", level: 90 },
        { name: "Flutter", level: 75 },
        { name: "Mobile UI/UX", level: 85 },
      ]
    },
    { 
      name: "Programming Languages",
      icon: <FileCode size={24} className="text-indigo-400" />,
      color: "indigo",
      skills: [
        { name: "Java", level: 90 },
        { name: "Kotlin", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Dart", level: 75 },
        { name: "Python", level: 70 },
      ]
    },
    { 
      name: "Backend & APIs",
      icon: <Server size={24} className="text-emerald-400" />,
      color: "emerald",
      skills: [
        { name: "Firebase", level: 85 },
        { name: "REST APIs", level: 85 },
        { name: "Retrofit/OkHttp", level: 80 },
        { name: "Koin/Ktor", level: 75 },
        { name: "Docker/Kubernetes", level: 65 },
      ]
    },
    { 
      name: "Web & Databases",
      icon: <Database size={24} className="text-purple-400" />,
      color: "purple",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "React/Next.js", level: 80 },
        { name: "Firestore", level: 80 },
        { name: "SQLite/Room", level: 85 },
        { name: "MySQL/MongoDB", level: 70 },
      ]
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: any) => ({
      width: `${level}%`,
      transition: { duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden" id="skills">
      {/* Enhanced background elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-900/10 rounded-full filter blur-3xl -z-0" />
      <div className="absolute bottom-20 left-40 w-80 h-80 bg-blue-900/10 rounded-full filter blur-3xl -z-0" />
      <div className="absolute top-60 left-20 w-64 h-64 bg-purple-900/10 rounded-full filter blur-3xl -z-0" />
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Technical Skills</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mt-2 mx-auto" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across mobile, web, and backend development.
          </p>
        </motion.div>
        
        {/* Main skills section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              variants={itemVariants}
              className="relative"
            >
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 rounded-full bg-black border ${
                  category.color === "blue" ? "border-blue-500/30" : 
                  category.color === "indigo" ? "border-indigo-500/30" : 
                  category.color === "emerald" ? "border-emerald-500/30" : 
                  "border-purple-500/30"
                } flex items-center justify-center mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className={
                        category.color === "blue" ? "text-blue-400" : 
                        category.color === "indigo" ? "text-indigo-400" : 
                        category.color === "emerald" ? "text-emerald-400" : 
                        "text-purple-400"
                      }>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        className={`h-full rounded-full ${
                          category.color === "blue" 
                            ? "bg-gradient-to-r from-blue-500/80 to-blue-400" 
                            : category.color === "indigo" 
                            ? "bg-gradient-to-r from-indigo-500/80 to-indigo-400" 
                            : category.color === "emerald" 
                            ? "bg-gradient-to-r from-emerald-500/80 to-emerald-400" 
                            : "bg-gradient-to-r from-purple-500/80 to-purple-400"
                        }`}
                        custom={skill.level}
                        variants={progressVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Skills tags cloud - updated with more comprehensive skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gradient-to-br from-blue-900/10 via-indigo-900/5 to-transparent pt-10 pb-10 px-8 rounded-lg border border-white/5"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-black border border-blue-500/30 flex items-center justify-center mr-4">
              <TerminalSquare size={24} className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Technologies I Work With</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {[
              "Android Studio", "Java", "Kotlin", "Jetpack Compose", "Flutter", "Dart", 
              "Room", "LiveData", "ViewModel", "Navigation", "Paging", "Firebase",
              "REST APIs", "Retrofit", "OkHttp", "Koin", "Ktor", "Docker", "Kubernetes",
              "React", "Next.js", "JavaScript", "HTML", "CSS", "Material Design",
              "Git", "Figma", "Firestore", "MySQL", "SQLite", "MongoDB", "VS Code",
              "IntelliJ IDEA", "Postman", "DSA", "OOP", "Python", "C++"
            ].map((tech, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: 0.1 + (i * 0.03) }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:text-white"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}