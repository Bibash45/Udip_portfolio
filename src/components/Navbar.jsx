import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="w-screen flex justify-between items-center py-4 md:py-8 px-6 md:px-18 fixed top-0 z-50 bg-[#2d2d2d] border-t-2 border-purple-500"
    >
      <Link to="/" className="text-white text-xl font-['Playfair_Display'] font-medium">
        Udip Jasraj
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-white hover:text-purple-400 transition-colors font-['Poppins']">
          Home
        </Link>
        <Link to="/photo" className="text-white hover:text-purple-400 transition-colors font-['Poppins']">
          Photo
        </Link>
        <Link to="/about" className="text-white hover:text-purple-400 transition-colors font-['Poppins']">
          About Me
        </Link>
        <Link to="/contact" className="text-white hover:text-purple-400 transition-colors font-['Poppins']">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-60"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 right-0 h-screen w-screen bg-[#2d2d2d] z-50 shadow-2xl md:hidden"
      >
        <div className="flex flex-col items-center justify-center gap-6 pt-24 pl-8">
          <Link 
            to="/" 
            onClick={toggleMenu}
            className="text-white text-lg hover:text-purple-400 transition-colors font-['Poppins'] w-full py-2"
          >
            Home
          </Link>
          <Link 
            to="/photo" 
            onClick={toggleMenu}
            className="text-white text-lg hover:text-purple-400 transition-colors font-['Poppins'] w-full py-2"
          >
            Photo
          </Link>
          <Link 
            to="/about" 
            onClick={toggleMenu}
            className="text-white text-lg hover:text-purple-400 transition-colors font-['Poppins'] w-full py-2"
          >
            About Me
          </Link>
          <Link 
            to="/contact" 
            onClick={toggleMenu}
            className="text-white text-lg hover:text-purple-400 transition-colors font-['Poppins'] w-full py-2"
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;