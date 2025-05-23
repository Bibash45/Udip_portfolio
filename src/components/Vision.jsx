import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
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
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Images */}
          <motion.div 
            className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Power Lines" 
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="h-full md:mt-[80px]">
              <img 
                src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Viewfinder" 
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>
          </motion.div>
          
          {/* Right Side - Content */}
          <motion.div 
            className="w-full md:w-1/2 pl-0 md:pl-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-12 relative">
                My Vision
                <span className="block w-24 h-1 bg-white mt-4"></span>
              </h2>
            </motion.div>
            
            <div className="space-y-12">
              <motion.div variants={itemVariants} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-white text-4xl md:text-5xl font-bold">01.</span>
                </div>
                <div>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-white text-4xl md:text-5xl font-bold">02.</span>
                </div>
                <div>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="text-right mt-12">
              <span className="text-gray-400 text-sm">Page | 04</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Vision;