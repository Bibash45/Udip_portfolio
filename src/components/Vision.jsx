import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        stiffness: 80,
        damping: 12,
        mass: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id='vision' className="bg-gray-50 py-16 px-4 md:px-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Images */}
          <motion.div 
            className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              variants={imageVariants} 
              className="h-full overflow-hidden rounded-xl shadow-lg group relative"
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Power Lines" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
            <motion.div 
              variants={imageVariants} 
              className="h-full md:mt-[80px] overflow-hidden rounded-xl shadow-lg group relative"
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <img 
                src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Viewfinder" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </motion.div>
          
          {/* Right Side - Content */}
          <motion.div 
            className="w-full md:w-1/2 pl-0 md:pl-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-gray-900 text-4xl md:text-5xl font-bold mb-12 relative">
                My Vision
                <motion.span 
                  className="block w-24 h-1 bg-purple-600 mt-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: '6rem' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </h2>
            </motion.div>
            
            <div className="space-y-12">
              <motion.div 
                variants={itemVariants} 
                className="flex gap-6 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex-shrink-0">
                  <span className="text-purple-600 text-4xl md:text-5xl font-bold group-hover:opacity-80 transition-opacity duration-300">01.</span>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    Paints Product Development: Passionate about developing innovative, high-quality paint products that meet market and regulatory standards. Committed to creating solutions that combine performance, sustainability, and aesthetic appeal.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants} 
                className="flex gap-6 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex-shrink-0">
                  <span className="text-purple-600 text-4xl md:text-5xl font-bold group-hover:opacity-80 transition-opacity duration-300">02.</span>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    Quality Assurance Technology: Exploring advancements in technology to improve quality assurance processes and enhance product safety and efficacy. Dedicated to implementing innovative testing methods and digital solutions for more efficient quality control.
                  </p>
                </div>
              </motion.div>
            </div>
            
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Vision;