import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" bg-[#1a1a1a] flex md:mt-[82px] mt-[66px]">
      {/* Mobile First Design */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:hidden relative h-full w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761_1280.jpg"
          alt="Profile"
          className="w-full h-full object-cover object-top"
        />

        <div className="absolute bottom-8 left-4 right-4 z-20 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white text-4xl font-bold leading-tight"
          >
            Crafting Visual Stories
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            <button className="bg-white text-black px-6 py-3 font-medium rounded-full hover:bg-purple-400 transition-colors">
              Explore
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white">
              ▶
            </button>
          </motion.div>
        </div>
      </motion.div>






      <div className="min-h-[calc(100vh-82px)] hidden md:flex w-full">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-64 md:h-[calc(100vh-82px)]"
        >
          <img
            src="https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761_1280.jpg"
            alt="Profile"
            className="w-full h-full object-cover object-top        "
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-16 py-8 md:py-0"
        >
             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Udip Kumar Jasraj
            </h1>
            <h2 className="text-xl md:text-2xl text-purple-400 mb-6">
              Quality Control Professional
            </h2>
            <p className="text-gray-300 mb-8">
              Ambitious Quality Control professional with over seven years of hands-on experience in quality control and analytical testing in pharmaceutical settings. Skilled in executing both wet chemistry and instrumental methods to uphold stringent quality standards. Eager to contribute to a collaborative laboratory environment while optimizing testing processes and mentoring new personnel.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Now
              </motion.button>
              <motion.button 
                className="px-6 py-3 border border-purple-600 text-white rounded-full hover:bg-purple-600/20 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Play Video
              </motion.button>
            </div>
        
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
