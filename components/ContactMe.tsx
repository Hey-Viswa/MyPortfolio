"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, CheckCircle, Calendar, ArrowRight } from "lucide-react";

export default function ContactMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [formStatus, setFormStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [step, setStep] = useState(1);
    const [availability] = useState([
        { id: 1, day: "Monday", slots: ["10:00 AM", "2:00 PM", "4:00 PM"] },
        { id: 2, day: "Wednesday", slots: ["11:00 AM", "3:00 PM"] },
        { id: 3, day: "Friday", slots: ["9:00 AM", "1:00 PM", "5:00 PM"] },
    ]);
    const [selectedSlot, setSelectedSlot] = useState({ day: "", time: "" });
    const [isScheduling, setIsScheduling] = useState(false);

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

    // Particle effect
    interface Particle {
        id: number;
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        opacity: number;
    }

    const [particles, setParticles] = useState<Particle[]>([]);
    
    useEffect(() => {
        if (isInView) {
            const newParticles = Array.from({ length: 20 }).map((_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: 1 + Math.random() * 2,
                speedX: (Math.random() - 0.5) * 0.2,
                speedY: (Math.random() - 0.5) * 0.2,
                opacity: 0.1 + Math.random() * 0.3
            }));
            setParticles(newParticles);
        }
    }, [isInView]);

    // Form input handler
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        if (step === 1) {
            // Validate form data if needed
            setStep(2);
            return;
        }
        
        if (step === 2 && isScheduling && !selectedSlot.day) {
            // If scheduling is enabled but no slot selected
            setFormStatus({
                type: "error",
                message: "Please select a time slot or continue without scheduling."
            });
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setFormStatus({
                type: "success",
                message: isScheduling 
                    ? `Message sent successfully! I'll meet with you on ${selectedSlot.day} at ${selectedSlot.time}.` 
                    : "Message sent successfully! I'll get back to you soon."
            });
            setIsSubmitting(false);
            setStep(3); // Success state
            
            // Reset form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
            setSelectedSlot({ day: "", time: "" });
            setIsScheduling(false);
        }, 1500);
    };

    const resetForm = () => {
        setStep(1);
        setFormStatus({ type: "", message: "" });
    };

    // Render functions
    const renderContactCards = () => (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1 space-y-6"
        >
            {/* Contact cards */}
            <motion.div
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail size={24} className="text-blue-400" />
                    </div>
                    <div className="relative z-10">
                        <h4 className="text-lg font-medium text-white">Email</h4>
                        <a 
                            href="mailto:hello@yourdomain.com" 
                            className="text-blue-300 hover:text-blue-200 transition-colors flex items-center group"
                        >
                            hello@yourdomain.com
                            <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                        </a>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-indigo-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone size={24} className="text-indigo-400" />
                    </div>
                    <div className="relative z-10">
                        <h4 className="text-lg font-medium text-white">Phone</h4>
                        <a 
                            href="tel:+91XXXXXXXXXX" 
                            className="text-indigo-300 hover:text-indigo-200 transition-colors flex items-center group"
                        >
                            +91 XX XXXX XXXX
                            <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                        </a>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin size={24} className="text-cyan-400" />
                    </div>
                    <div className="relative z-10">
                        <h4 className="text-lg font-medium text-white">Location</h4>
                        <div className="text-cyan-300 flex flex-col">
                            <span>Mumbai, India</span>
                            <span className="text-xs text-cyan-400 mt-1">Available for remote work worldwide</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <h4 className="text-lg font-medium text-white mb-4 relative z-10">Connect With Me</h4>
                <div className="flex items-center gap-4 relative z-10">
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center hover:bg-blue-800/50 transition-colors group"
                    >
                        <Linkedin size={20} className="text-blue-400 group-hover:text-blue-200 transition-colors" />
                    </a>
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-800/70 flex items-center justify-center hover:bg-gray-700 transition-colors group"
                    >
                        <Github size={20} className="text-gray-400 group-hover:text-gray-200 transition-colors" />
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center hover:bg-blue-500/50 transition-colors group"
                    >
                        <Twitter size={20} className="text-blue-300 group-hover:text-blue-100 transition-colors" />
                    </a>
                </div>
            </motion.div>
            
            {/* Testimonial */}
            <motion.div
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="flex flex-col relative z-10">
                    <div className="text-yellow-300 mb-3">★★★★★</div>
                    <p className="text-white/80 text-sm italic mb-3">
                        &quot;One of the most responsive and creative developers I&apos;ve worked with. Delivered the project ahead of schedule with exceptional quality.&quot;
                    </p>
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-yellow-900/30 flex items-center justify-center mr-3">
                            <span className="text-yellow-300 text-xs">JD</span>
                        </div>
                        <div>
                            <p className="text-white text-sm">John Doe</p>
                            <p className="text-yellow-300/70 text-xs">CEO, TechStartup</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );

    const renderFormStep1 = () => (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white transition-all duration-300 hover:bg-white/15"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white transition-all duration-300 hover:bg-white/15"
                        placeholder="your@email.com"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white transition-all duration-300 hover:bg-white/15"
                    placeholder="What is this regarding?"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white resize-none transition-all duration-300 hover:bg-white/15"
                    placeholder="Tell me about your project..."
                ></textarea>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="schedule"
                        checked={isScheduling}
                        onChange={() => setIsScheduling(!isScheduling)}
                        className="w-4 h-4 bg-white/10 border-white/20 rounded focus:ring-blue-500/50 text-blue-500"
                    />
                    <label htmlFor="schedule" className="ml-2 text-gray-300 text-sm">
                        Schedule a meeting with me
                    </label>
                </div>
                
                <button
                    type="submit"
                    className="group relative overflow-hidden px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium inline-flex items-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow"
                >
                    <span className="relative z-10">
                        Continue
                    </span>
                    <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 z-0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="absolute -inset-1 bg-blue-400/20 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
            </div>
        </form>
    );

    const renderFormStep2 = () => (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {isScheduling ? (
                <>
                    <div className="mb-4">
                        <h4 className="text-lg font-medium text-white mb-3">Select a time to meet</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {availability.map((day) => (
                                <div 
                                    key={day.id} 
                                    className={`p-4 rounded-lg border transition-all ${
                                        selectedSlot.day === day.day 
                                            ? 'border-blue-500 bg-blue-900/30' 
                                            : 'border-white/20 bg-white/5 hover:bg-white/10'
                                    }`}
                                >
                                    <h5 className="text-white font-medium mb-2">{day.day}</h5>
                                    <div className="space-y-2">
                                        {day.slots.map((time, i) => (
                                            <button
                                                key={i}
                                                type="button"
                                                onClick={() => setSelectedSlot({ day: day.day, time })}
                                                className={`w-full py-2 px-3 rounded text-sm ${
                                                    selectedSlot.day === day.day && selectedSlot.time === time
                                                        ? 'bg-blue-500 text-white'
                                                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                                }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="text-sm text-gray-400">
                        <p>All times are in your local timezone.</p>
                        <p>Meeting will be held via Google Meet or Zoom.</p>
                    </div>
                </>
            ) : (
                <div className="py-8 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center mb-4">
                        <Mail size={32} className="text-blue-400" />
                    </div>
                    <h4 className="text-lg font-medium text-white mb-1">Ready to send your message</h4>
                    <p className="text-gray-400 text-center max-w-md">
                        I&apos;ll respond to your inquiry within 24-48 hours. If you change your mind, you can still schedule a meeting.
                    </p>
                </div>
            )}
            
            <div className="flex justify-between items-center pt-4">
                <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                    Back
                </button>
                
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative overflow-hidden px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium inline-flex items-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow"
                >
                    <span className="relative z-10">
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 z-0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="absolute -inset-1 bg-blue-400/20 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Send className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
            </div>
        </form>
    );

    const renderSuccessStep = () => (
        <div className="flex flex-col items-center justify-center py-8 px-4 relative z-10">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15 
                }}
                className="w-20 h-20 rounded-full bg-green-500/30 flex items-center justify-center mb-6"
            >
                <CheckCircle size={40} className="text-green-400" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-2 text-center">Message Sent Successfully!</h3>
            <p className="text-gray-300 text-center max-w-md mb-6">
                {formStatus.message}
            </p>
            
            <button
                onClick={resetForm}
                className="px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
                Send Another Message
            </button>
        </div>
    );

    return (
        <section ref={ref} className="py-20 bg-black relative overflow-hidden" id="contact">
            {/* Subtle background accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full filter blur-3xl -z-0" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-900/10 rounded-full filter blur-3xl -z-0" />
            
            {/* Animated particles */}
            {particles.map(particle => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-blue-400"
                    animate={{
                        x: [`${particle.x}%`, `${particle.x + particle.speedX * 100}%`],
                        y: [`${particle.y}%`, `${particle.y + particle.speedY * 100}%`]
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 15 + Math.random() * 10
                    }}
                    style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: particle.opacity
                    }}
                />
            ))}

            {/* Blue grid lines */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
                    <div className="h-1 w-20 bg-blue-500 mt-2 mx-auto relative">
                        <div className="absolute -top-1 left-0 w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: "1s" }} />
                    </div>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you!
                        Fill out the form below or reach out directly through one of my contact channels.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    {renderContactCards()}

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="lg:col-span-2"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />

                            {/* Form steps progress */}
                            {step < 3 && (
                                <div className="flex items-center mb-6 relative z-10">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-500' : 'bg-white/20'}`}>
                                        <span className="text-white font-medium">1</span>
                                    </div>
                                    <div className={`h-1 flex-grow mx-2 ${step >= 2 ? 'bg-blue-500' : 'bg-white/20'}`}></div>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-500' : 'bg-white/20'}`}>
                                        <span className="text-white font-medium">2</span>
                                    </div>
                                    <div className={`h-1 flex-grow mx-2 ${step >= 3 ? 'bg-blue-500' : 'bg-white/20'}`}></div>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-500' : 'bg-white/20'}`}>
                                        <span className="text-white font-medium">3</span>
                                    </div>
                                </div>
                            )}

                            <h3 className="text-xl font-semibold text-white mb-6 relative z-10">
                                {step === 1 && "Send Me a Message"}
                                {step === 2 && (isScheduling ? "Schedule a Meeting" : "Review Your Message")}
                                {step === 3 && "Thank You!"}
                            </h3>

                            {formStatus.type === "error" && (
                                <div className="mb-6 p-4 rounded-lg relative z-10 bg-red-900/30 border border-red-500/30 text-red-300">
                                    {formStatus.message}
                                </div>
                            )}

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {step === 1 && renderFormStep1()}
                                    {step === 2 && renderFormStep2()}
                                    {step === 3 && renderSuccessStep()}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}