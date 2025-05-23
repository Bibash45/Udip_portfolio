import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <div className=" bg-[#1a1a1a] py-16 px-4 md:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 relative">
              Introduction
              <span className="block w-24 h-1 bg-white mt-4"></span>
            </h2>
            
            <p className="text-gray-300 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white text-xl font-semibold mb-4">About Me</h3>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
              </div>
              
              <div>
                <h3 className="text-white text-xl font-semibold mb-4">About Portfolio</h3>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-1/2 h-[400px] md:h-auto"
          >
            <img 
              src="https://www.shutterstock.com/image-photo/laboratory-glassware-over-black-background-600nw-66044017.jpg" 
              alt="Corridor" 
              className="w-full h-full object-cover "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;