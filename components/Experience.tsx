"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Award, BookOpen } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Experience data
  const experiences = [
    {
      title: "Android Developer Intern",
      company: "JSW",
      period: "1 Month",
      description: "Developed a feedback management system integrated with SAP, enhancing operational efficiency.",
      icon: <Briefcase size={20} className="text-purple-400" />,
      bgColor: "bg-purple-900/30",
      iconColor: "text-purple-400",
      gradientFrom: "from-purple-900/20"
    },
    {
      title: "Android Developer Intern",
      company: "Internshala",
      period: "2 Months",
      description: "Gained hands-on experience in Android development by working on real-world projects.",
      icon: <Briefcase size={20} className="text-blue-400" />,
      bgColor: "bg-blue-900/30",
      iconColor: "text-blue-400",
      gradientFrom: "from-blue-900/20"
    },
    {
      title: "Web Development Intern",
      company: "Acmegrade",
      period: "2 Months",
      description: "Contributed to web development projects and completed technical training programs.",
      icon: <Briefcase size={20} className="text-teal-400" />,
      bgColor: "bg-teal-900/30",
      iconColor: "text-teal-400",
      gradientFrom: "from-teal-900/20"
    }
  ];
  
  // Education data
  const education = [
    {
      degree: "B.E. in Computer Engineering",
      institution: "M.E.S Pillai's HOC, Rasayani",
      period: "2024 - Present",
      description: "Currently pursuing a Bachelor's degree in Computer Engineering, focusing on advanced computing concepts and software development.",
      icon: <GraduationCap size={20} className="text-cyan-400" />,
      bgColor: "bg-cyan-900/30",
      iconColor: "text-cyan-400",
      gradientFrom: "from-cyan-900/20"
    },
    {
      degree: "Diploma in Computer Technology",
      institution: "Government Polytechnic, Pen",
      period: "2021 - 2024",
      description: "Completed a comprehensive diploma program in Computer Technology, building a strong foundation in programming and technical concepts.",
      icon: <BookOpen size={20} className="text-emerald-400" />,
      bgColor: "bg-emerald-900/30",
      iconColor: "text-emerald-400",
      gradientFrom: "from-emerald-900/20"
    },
    {
      degree: "10th Grade",
      institution: "Carmel High School, Pen",
      period: "Completed 2021",
      description: "Completed secondary education with a focus on science and mathematics, establishing a foundation for further technical studies.",
      icon: <BookOpen size={20} className="text-amber-400" />,
      bgColor: "bg-amber-900/30",
      iconColor: "text-amber-400",
      gradientFrom: "from-amber-900/20"
    }
  ];
  
  // Certifications
  const certifications = [
    {
      name: "Android Development",
      provider: "Internshala",
      bgColor: "bg-indigo-900/30",
      iconColor: "text-indigo-400",
      gradientFrom: "from-indigo-900/20",
      icon: <Award size={20} className="text-indigo-400" />
    },
    {
      name: "Web Development",
      provider: "Acmegrade",
      bgColor: "bg-pink-900/30",
      iconColor: "text-pink-400",
      gradientFrom: "from-pink-900/20",
      icon: <Award size={20} className="text-pink-400" />
    },
    {
      name: "Android Development Masterclass",
      provider: "Udemy",
      bgColor: "bg-orange-900/30",
      iconColor: "text-orange-400",
      gradientFrom: "from-orange-900/20",
      icon: <Award size={20} className="text-orange-400" />
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
  
  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden" id="experience">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full filter blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-900/10 rounded-full filter blur-3xl -z-0" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-900/10 rounded-full filter blur-3xl -z-0" />
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Professional Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">My experience, education, and certifications in technology and development</p>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 mx-auto rounded-full" />
        </motion.div>
        
        {/* Main content with consistent three-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-4 flex items-center"
            >
              <Briefcase className="mr-2 text-purple-400" />
              Work Experience
            </motion.h3>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group relative overflow-hidden hover:shadow-lg hover:shadow-purple-900/20 transition duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${exp.bgColor} flex items-center justify-center flex-shrink-0 border border-white/10`}>
                    {exp.icon}
                  </div>
                  <div className="relative z-10 flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-white">{exp.title}</h4>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-gray-300">{exp.period}</span>
                    </div>
                    <p className={`${exp.iconColor} font-medium text-sm mb-2`}>{exp.company}</p>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Timeline for work experience */}
            <motion.div 
              variants={itemVariants}
              className="mt-6 relative px-4"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-teal-500 ml-4"></div>
              
              <div className="space-y-8 relative">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                      <div className={`w-3 h-3 ${exp.iconColor.replace('text-', 'bg-')} rounded-full`}></div>
                    </div>
                    <p className={`${exp.iconColor} font-medium`}>{exp.period}</p>
                    <p className="text-white">{exp.title} at {exp.company}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Education Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-4 flex items-center"
            >
              <GraduationCap className="mr-2 text-cyan-400" />
              Education
            </motion.h3>
            
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group relative overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${edu.bgColor} flex items-center justify-center flex-shrink-0 border border-white/10`}>
                    {edu.icon}
                  </div>
                  <div className="relative z-10 flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-white">{edu.degree}</h4>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-gray-300">{edu.period}</span>
                    </div>
                    <p className={`${edu.iconColor} font-medium text-sm mb-2`}>{edu.institution}</p>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Timeline for education */}
            <motion.div 
              variants={itemVariants}
              className="mt-6 relative px-4"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-500 to-amber-500 ml-4"></div>
              
              <div className="space-y-8 relative">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                      <div className={`w-3 h-3 ${edu.iconColor.replace('text-', 'bg-')} rounded-full`}></div>
                    </div>
                    <p className={`${edu.iconColor} font-medium`}>{edu.period}</p>
                    <p className="text-white">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Certifications Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-4 flex items-center"
            >
              <Award className="mr-2 text-indigo-400" />
              Certifications
            </motion.h3>
            
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group relative overflow-hidden hover:shadow-lg hover:shadow-indigo-900/20 transition duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${cert.bgColor} flex items-center justify-center flex-shrink-0 border border-white/10`}>
                    {cert.icon}
                  </div>
                  <div className="relative z-10 flex-1">
                    <h4 className="text-lg font-medium text-white">{cert.name}</h4>
                    <p className={`${cert.iconColor} font-medium text-sm mb-2`}>{cert.provider}</p>
                    <div className="mt-3 flex">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-gray-300">
                        {cert.provider === "Internshala" ? "2 Months" : cert.provider === "Acmegrade" ? "2 Months" : "3 Months"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Skills section to fill the rest of the space */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group relative overflow-hidden hover:shadow-lg hover:shadow-rose-900/20 transition duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <h4 className="text-lg font-medium text-white mb-4">Key Skills</h4>
              
              <div className="flex flex-wrap gap-2">
                {["Android", "Java", "Kotlin", "React", "JavaScript", "HTML/CSS", "UI/UX", "Firebase", "SQL"].map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}