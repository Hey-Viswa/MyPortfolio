"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Folder, User, Mail, Instagram, Twitter, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TheOptivusLogo from "@/components/Logo";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}

const NavItem = ({ href, icon, label, external = false }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const LinkWrapper = ({ children }: { children: React.ReactNode }) => 
    external ? (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative group flex items-center"
      >
        {children}
      </a>
    ) : (
      <Link href={href} className="relative group flex items-center">
        {children}
      </Link>
    );

  return (
    <LinkWrapper>
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon with glow effect on hover */}
        <motion.div
          className="relative z-10 flex items-center justify-center w-10 h-10"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="text-white group-hover:text-blue-400 transition-colors duration-300">
            {icon}
          </div>
          
          {/* Subtle glow effect behind icon */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1.2 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 bg-blue-500 rounded-full filter blur-md z-0"
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Label that appears on hover WITHOUT shifting layout */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-white font-medium text-sm tracking-wide whitespace-nowrap"
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LinkWrapper>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Track scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items for both desktop and mobile
  const navigationItems = [
    { href: "/", label: "Home", icon: <Home size={20} strokeWidth={1.5} /> },
    { href: "/#about", label: "About", icon: <User size={20} strokeWidth={1.5} /> },
    { href: "/#projects", label: "Projects", icon: <Folder size={20} strokeWidth={1.5} /> },
    { href: "/#contact", label: "Contact", icon: <Mail size={20} strokeWidth={1.5} /> },
  ];

  // Social media links
  const socialLinks = [
    { href: "https://twitter.com/@Hey_viswa_", label: "Twitter", icon: <Twitter size={20} strokeWidth={1.5} /> },
    { href: "https://instagram.com/theoptivus", label: "Instagram", icon: <Instagram size={20} strokeWidth={1.5} /> },
  ];

  return (
    <header className="z-50">
      {/* ============================
          DESKTOP NAVBAR (≥ md)
      ============================ */}
      <motion.nav
        className={`
          hidden
          md:flex
          items-center
          justify-between
          fixed
          top-6
          left-1/2
          -translate-x-1/2
          w-[85%]
          max-w-5xl
          backdrop-blur-md
          rounded-full
          py-3
          px-8
          z-50
          transition-all
          duration-500
          ${scrolled ? 'bg-black/70 shadow-lg shadow-blue-900/20' : 'bg-black/40'}
        `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          delay: 0.2
        }}
      >
        {/* Left: Nav Items (Icon with tooltip-style label) */}
        <div className="flex items-center space-x-6">
          {navigationItems.slice(0, 2).map((item, index) => (
            <NavItem
              key={`nav-left-${index}`}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>

        {/* Center: Logo with subtle animation */}
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" className="flex items-center justify-center">
            <div className="relative">
              <TheOptivusLogo />
              
              {/* Optional subtle glow behind logo */}
              <div className="absolute -inset-2 bg-blue-500/20 rounded-full filter blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </Link>
        </motion.div>

        {/* Right: More Nav Items and Social Icons */}
        <div className="flex items-center space-x-6">
          {navigationItems.slice(2).map((item, index) => (
            <NavItem
              key={`nav-right-${index}`}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
          {socialLinks.map((item, index) => (
            <NavItem
              key={`social-${index}`}
              href={item.href}
              icon={item.icon}
              label={item.label}
              external={true}
            />
          ))}
        </div>
      </motion.nav>

      {/* ============================
          MOBILE NAVBAR (< md)
      ============================ */}
      <motion.nav
        className={`
          md:hidden
          fixed
          top-4
          left-1/2
          -translate-x-1/2
          w-[90%]
          flex
          items-center
          justify-between
          px-5
          py-3
          rounded-full
          ${scrolled ? 'bg-black/80 shadow-lg shadow-blue-900/20' : 'bg-black/50'}
          backdrop-blur-md
          z-50
          transition-all
          duration-500
        `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30 
        }}
      >
        {/* Left: Logo */}
        <Link href="/" className="relative z-10">
          <TheOptivusLogo />
        </Link>

        {/* Right: Menu Toggle - Animated Hamburger */}
        <motion.button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-10 h-10 flex items-center justify-center focus:outline-none z-10"
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-6 flex flex-col items-center justify-center">
            <motion.span 
              className="w-full h-[2px] bg-white rounded-full block mb-1.5"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
            <motion.span 
              className="w-full h-[2px] bg-white rounded-full block mb-1.5"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="w-full h-[2px] bg-white rounded-full block"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
          </div>
        </motion.button>
      </motion.nav>

      {/* ============================
          MOBILE MENU OVERLAY
      ============================ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col items-center space-y-8"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {/* Mobile Nav Links - Updated with all navigation items */}
              {navigationItems.map((item, index) => (
                <motion.div
                  key={`mobile-nav-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center space-x-3 text-xl font-medium tracking-wider text-white/90 hover:text-blue-400 transition-colors duration-300"
                  >
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="relative">
                      {item.label}
                      <motion.span 
                        className="absolute -bottom-1 left-0 right-0 h-px bg-blue-400 origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Social Links in Mobile Menu */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                className="flex items-center space-x-6 mt-8 pt-8 border-t border-white/10"
              >
                {socialLinks.map((item, index) => (
                  <a 
                    key={`mobile-social-${index}`}
                    href={item.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}