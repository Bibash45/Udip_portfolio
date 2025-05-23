import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="bg-[#1a1a1a] py-16 px-4 md:px-16">
      <div className="container mx-auto">
        {/* Images Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Modern Architecture 1" 
              className="w-full h-64 object-cover grayscale hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1540317700647-ec69694d70d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              alt="Person Jumping" 
              className="w-full h-64 object-cover grayscale hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Modern Building" 
              className="w-full h-64 object-cover grayscale hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>

        {/* About Me Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 relative">
              About Me
              <span className="block w-24 h-1 bg-white mt-4"></span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <motion.div variants={itemVariants}>
              <h3 className="text-white text-xl font-semibold mb-4">My Vision</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-white text-xl font-semibold mb-4">My Mission</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;