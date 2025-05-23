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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white text-4xl md:text-7xl font-bold mb-4"
          >
            My
            <br />
            Portfolio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-sm md:text-base mb-6 md:mb-8"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-3 md:gap-6"
          >
            <button className="bg-white text-black px-6 py-2 font-medium hover:bg-purple-400 transition-colors">
              Explore Now
            </button>
            <button className="flex items-center justify-center gap-2 text-white">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                ▶
              </div>
              <span>Play Video</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
