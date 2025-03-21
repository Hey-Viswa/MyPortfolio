"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Code, Smartphone, Layout, FilePenLine, ShoppingCart, Dumbbell } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Project data with placeholder images
  const projects = [
    {
      title: "Hostelgic",
      description: "A comprehensive hostel management application built with Flutter. Features real-time data management using Firebase Firestore and RESTful API integration for backend communication.",
      // Using placeholder API for images
      imagePlaceholder: "/api/placeholder/800/600",
      imageAlt: "Hostelgic app interface showing a hostel management dashboard",
      tags: ["Flutter", "Firebase", "Firestore", "REST API", "Dart"],
      githubLink: "https://github.com/yourusername/hostelgic",
      liveLink: "https://play.google.com/store/apps/details?id=com.yourusername.hostelgic",
      featured: true,
      category: "mobile",
      icon: <Smartphone size={20} className="text-blue-400" />,
      bgColor: "blue-900/30",
      gradientFrom: "blue-900/20"
    },
    {
      title: "Digital E-Commerce",
      description: "A feature-rich digital product marketplace built with MERN stack. Includes product listings, shopping cart functionality, Stripe payment integration, and user authentication.",
      imagePlaceholder: "/api/placeholder/800/600",
      imageAlt: "E-commerce website showcasing digital products for sale",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Stripe API"],
      githubLink: "https://github.com/yourusername/digital-ecommerce",
      liveLink: "https://your-digital-ecommerce.netlify.app",
      featured: true,
      category: "web",
      icon: <ShoppingCart size={20} className="text-emerald-400" />,
      bgColor: "emerald-900/30",
      gradientFrom: "emerald-900/20"
    },
    {
      title: "Fitness App",
      description: "Health and fitness application built with Jetpack Compose. Features workout tracking, nutrition planning, and progress visualization with a seamless user experience.",
      imagePlaceholder: "/api/placeholder/800/600",
      imageAlt: "Fitness app interface showing workout routines and statistics",
      tags: ["Kotlin", "Jetpack Compose", "Navigation", "Android"],
      githubLink: "https://github.com/yourusername/fitness-app",
      liveLink: null, // No live link as it's in development
      featured: false,
      category: "mobile",
      icon: <Dumbbell size={20} className="text-purple-400" />,
      bgColor: "purple-900/30",
      gradientFrom: "purple-900/20"
    },
    {
      title: "Nottx",
      description: "An elegant note-taking application designed for efficient organization. Built with Jetpack Compose and Room database for seamless offline functionality.",
      imagePlaceholder: "/api/placeholder/800/600",
      imageAlt: "Nottx app showing notes organization and editing interface",
      tags: ["Kotlin", "Jetpack Compose", "Room DB", "MVVM"],
      githubLink: "https://github.com/yourusername/nottx",
      liveLink: "https://play.google.com/store/apps/details?id=com.yourusername.nottx",
      featured: false,
      category: "mobile",
      icon: <FilePenLine size={20} className="text-yellow-400" />,
      bgColor: "yellow-900/30",
      gradientFrom: "yellow-900/20"
    },
    {
      title: "Notepad",
      description: "A versatile text editor built with Java Swing. Supports multiple file formats, syntax highlighting, and customizable interface themes.",
      imagePlaceholder: "/api/placeholder/800/600",
      imageAlt: "Notepad application showing text editing with syntax highlighting",
      tags: ["Java", "Swing", "File I/O", "Desktop App"],
      githubLink: "https://github.com/yourusername/notepad",
      liveLink: "https://github.com/yourusername/notepad/releases",
      featured: false,
      category: "desktop",
      icon: <Code size={20} className="text-orange-400" />,
      bgColor: "orange-900/30",
      gradientFrom: "orange-900/20"
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
  
  // Filter featured projects
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden" id="projects">
      {/* Enhanced background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full filter blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-900/10 rounded-full filter blur-3xl -z-0" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-900/10 rounded-full filter blur-3xl -z-0 transform -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">My Work</span>
          <h2 className="text-4xl font-bold text-white mt-2 leading-tight">Featured Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            A showcase of my development journey across mobile, web, and desktop applications.
          </p>
        </motion.div>
        
        {/* Featured projects with enhanced styling */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20"
        >
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group relative overflow-hidden flex flex-col h-full shadow-xl shadow-black/20 hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${project.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />
              
              {/* Project image with placeholder */}
              <div className="relative w-full h-56 overflow-hidden">
                <img 
                  src={project.imagePlaceholder} 
                  alt={project.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Featured badge with improved styling */}
                <div className="absolute top-4 right-4 bg-blue-500/90 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center shadow-lg">
                  <Star size={12} className="mr-1" />
                  Featured
                </div>
              </div>
              
              {/* Project content with enhanced spacing and typography */}
              <div className="p-7 flex-grow relative z-10">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full bg-${project.bgColor} flex items-center justify-center mr-3 shadow-inner`}>
                    {project.icon}
                  </div>
                  <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                    {project.category === "mobile" ? "Mobile Application" : 
                     project.category === "web" ? "Web Development" : 
                     "Desktop Software"}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-5 leading-relaxed">{project.description}</p>
                
                {/* Tags with improved styling */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-gray-300 hover:bg-white/15 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project links with enhanced styling */}
              <div className="p-7 pt-0 flex justify-between items-center border-t border-white/10 relative z-10">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  <Github size={16} className="mr-2" />
                  <span>View Code</span>
                </a>
                
                {project.liveLink ? (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm italic">In Development</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Section divider with improved styling */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent w-full" />
          <span className="px-6 text-gray-300 whitespace-nowrap font-semibold">More Projects</span>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent w-full" />
        </div>
        
        {/* Other projects with enhanced styling */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.filter(project => !project.featured).map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group relative overflow-hidden flex flex-col h-full shadow-lg shadow-black/20 hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${project.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />
              
              {/* Project image with placeholder */}
              <div className="relative w-full h-44 overflow-hidden">
                <img 
                  src={project.imagePlaceholder} 
                  alt={project.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:opacity-80 transition-opacity duration-300" />
              </div>
              
              {/* Project content */}
              <div className="p-6 flex-grow relative z-10">
                <div className="flex items-center mb-3">
                  <div className={`w-8 h-8 rounded-full bg-${project.bgColor} flex items-center justify-center mr-2 shadow-inner`}>
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300 hover:bg-white/15 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 hover:bg-white/10 transition-colors duration-300">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Project links */}
              <div className="px-6 py-4 flex justify-between items-center border-t border-white/10 relative z-10">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  <Github size={14} className="mr-1.5" />
                  <span>Code</span>
                </a>
                
                {project.liveLink ? (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-600/80 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg transition-colors duration-300 text-sm"
                  >
                    <ExternalLink size={14} className="mr-1.5" />
                    <span>Demo</span>
                  </a>
                ) : (
                  <span className="text-gray-500 text-xs italic">In Development</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced call-to-action button */}
        <div className="mt-16 text-center">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full transition-all duration-300 shadow-lg shadow-blue-700/20 hover:shadow-blue-600/30 font-medium"
          >
            <Github size={20} className="mr-3" />
            View All Projects on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
}

// You need to add this missing component from your original code
function Star({ size, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}