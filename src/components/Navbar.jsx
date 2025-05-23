import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) setIsOpen(false);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (isOpen) setIsOpen(false);
    }
  };

  const handleDownload = () => {
    window.open('/resume.docx', '_blank');
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About Me", id: "aboutme" },
    { name: "Vision", id: "vision" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`w-screen flex justify-between items-center py-5 md:py-6 px-6 md:px-24 fixed top-0 z-50 
        ${isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-white/50 backdrop-blur-md"} 
        transition-all duration-300 border-t-2 border-purple-600`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <button
          onClick={() => scrollToSection('hero')}
          className="text-gray-900 text-2xl font-['Playfair_Display'] font-semibold hover:text-purple-600 transition-all duration-300"
        >
          Udip Jasraj
          <motion.span
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300"
            whileHover={{ width: "100%" }}
          />
        </button>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-['Poppins'] text-sm uppercase tracking-wider font-medium"
            >
              {item.name}
              <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full" />
            </button>
          </motion.div>
        ))}

        {/* Resume Download Button - Desktop */}
        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-all duration-300 font-['Poppins'] text-sm uppercase tracking-wider font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Resume
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={toggleMenu}
        className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-60 bg-gray-50 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        aria-label="Toggle menu"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
      >
        <span
          className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 right-0 h-screen w-3/4 bg-white z-50 shadow-2xl md:hidden rounded-l-3xl"
      >
        <div className="flex flex-col items-start justify-center gap-8 pt-24 px-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full group"
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-gray-800 text-lg font-medium hover:text-purple-600 transition-all duration-300 font-['Poppins'] w-full py-2 flex items-center gap-2 group-hover:translate-x-2"
              >
                <span className="w-2 h-2 rounded-full bg-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                {item.name}
              </button>
            </motion.div>
          ))}

          {/* Resume Download Button - Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
            className="w-full"
          >
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-all duration-300 font-['Poppins'] text-sm uppercase tracking-wider font-medium w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;