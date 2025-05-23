import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
          {/* Left Side - Content */}
          <motion.div 
            className="w-full md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-white text-3xl md:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Professional Background
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 mb-8"
              variants={itemVariants}
            >
              With over seven years of experience in quality control and analytical testing, I've developed expertise in pharmaceutical settings, focusing on maintaining stringent quality standards through both wet chemistry and instrumental methods.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-[#252525] p-6 rounded-lg"
                variants={itemVariants}
              >
                <h3 className="text-white text-xl font-bold mb-3">About Me</h3>
                <p className="text-gray-300">
                  Currently working as a Quality Control Assistant at Berger Jenson and Nicholson (Nepal) Pvt. Ltd., where I've trained over 75 workers, collaborated with production teams, and maintained strict compliance with GLP and cGMP standards.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-[#252525] p-6 rounded-lg"
                variants={itemVariants}
              >
                <h3 className="text-white text-xl font-bold mb-3">Education</h3>
                <p className="text-gray-300">
                  Bachelor of Science in Chemistry from Tribhuvan University (2013-2017), with focus on Thermodynamics, Spectroscopy, Refining & purification, Qualitative and quantitative analysis. Intermediate (+2) from HSEB Board (2010-2012).
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Side - Image */}
          <motion.div 
            className="w-full md:w-1/2 flex items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://t4.ftcdn.net/jpg/14/34/10/91/360_F_1434109167_YZU0LngAg7zKtaEgE0BBTnRzSShV52Qm.jpg" 
              alt="Laboratory Equipment" 
              className="w-full h-auto object-cover rounded-lg grayscale"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;