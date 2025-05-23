import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
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

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="bg-[#1a1a1a] py-16 px-4 md:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Content */}
          <motion.div 
            className="w-full md:w-1/2 pr-0 md:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-12 relative">
                My Mission
                <span className="block w-24 h-1 bg-white mt-4"></span>
              </h2>
            </motion.div>
            
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-white text-4xl md:text-5xl font-bold">01.</span>
                </div>
                <div>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-white text-4xl md:text-5xl font-bold">02.</span>
                </div>
                <div>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-white text-4xl md:text-5xl font-bold">03.</span>
                </div>
                <div>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-white text-4xl md:text-5xl font-bold">04.</span>
                </div>
                <div className="relative">
                  <p className="text-gray-300 border-l-4 border-purple-500 pl-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Side - Images */}
          <motion.div 
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={imageVariants} 
              whileHover="hover"
              className="h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="People embracing" 
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>
            <motion.div 
              variants={imageVariants} 
              whileHover="hover"
              className="h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" 
                alt="Person exercising" 
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>
            <motion.div 
              variants={imageVariants} 
              whileHover="hover"
              className="h-full"
            >
              <img 
                src="https://cdn.shopify.com/s/files/1/2776/7900/files/image1_4715dd19-23a6-4cbb-be9e-cf09ceb5226d_1024x1024.jpg?v=1620291285" 
                alt="Person with hat" 
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>
            <motion.div 
              variants={imageVariants} 
              whileHover="hover"
              className="h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Person with glasses" 
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mission;