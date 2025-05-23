import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div id="contact" className="bg-gray-50 py-20 px-4 md:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side - Image */}
          <motion.div 
            className="w-full md:w-1/2 border-4 border-purple-600 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              variants={itemVariants} 
              className="h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Modern Architecture Building" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </motion.div>
          
          {/* Right Side - Content */}
          <motion.div 
            className="w-full md:w-1/2 pl-0 md:pl-12 flex flex-col justify-between"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <motion.div variants={itemVariants}>
                <h2 className="text-gray-900 text-4xl md:text-5xl font-bold mb-12 relative">
                  My Contact
                  <span className="block w-24 h-1 bg-purple-600 mt-4"></span>
                </h2>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-10">
                <p className="text-gray-700 leading-relaxed">
                  I'm always open to discussing new opportunities, collaborative projects, or sharing insights about quality control in the pharmaceutical industry. Feel free to reach out through any of the contact methods below.
                </p>
              </motion.div>
              
              <div className="space-y-8">
                <motion.div 
                  variants={itemVariants} 
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">+9779860435585</span>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants} 
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5" />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">linkedin.com/in/udipjasraj</span>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants} 
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">udipjasraj25@gmail.com</span>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants} 
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Udip Kumar Jasraj</span>
                </motion.div>
              </div>
            </div>
            
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;