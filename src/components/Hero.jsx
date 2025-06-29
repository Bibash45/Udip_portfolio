import React from "react";
import { motion } from "framer-motion";
import udip from "../assets/udip.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-gray-50 flex flex-col md:flex-row md:mt-[82px] mt-[66px] "
    >
      {/* Mobile View */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:hidden relative h-[calc(100vh-66px)] w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10" />

        <img
          src={udip}
          alt="Profile"
          className="w-full h-full object-contain"
        />

        <div className="absolute bottom-12 left-6 right-6 z-20 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white text-4xl font-bold leading-tight font-['Playfair_Display']"
          >
            Udip Kumar Jasraj
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-purple-300 text-xl font-medium"
          >
            Quality Control Professional
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-200 text-sm leading-relaxed"
          >
            Dedicated to excellence in pharmaceutical quality control with 7+
            years of expertise in analytical testing and process optimization.
          </motion.p>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-6 py-3 font-medium rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <span>View Portfolio</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Desktop View */}
      <div className="relative hidden md:flex h-[calc(100vh-82px)] w-full">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-1/2 h-full relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            className="h-full"
          >
            <img
              src={udip}
              alt="Profile"
              className=" absolute left-0 top-0 h-full w-full object-contain object-top transition-transform duration-500 group-hover:scale-105 "
            />
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-1/2 flex items-center justify-center relative"
        >
          <div className="absolute top-0 left-0 w-24 h-24 bg-purple-100 rounded-full filter blur-3xl opacity-30" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-100 rounded-full filter blur-3xl opacity-30" />

          <div className="max-w-xl px-8 space-y-8 relative z-10">
            <div className="space-y-4">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 font-['Playfair_Display'] leading-tight"
              >
                Udip Kumar Jasraj
              </motion.h1>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg lg:text-xl text-purple-600 font-semibold tracking-widest uppercase"
              >
                Quality Control Specialist
              </motion.h2>
            </div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-base leading-relaxed"
            >
              Experienced in analytical testing, regulatory compliance, and
              process optimization within pharmaceutical environments. I bring
              7+ years of results-driven quality assurance and leadership that
              ensure product excellence at every level.
            </motion.p>

            <div className="flex flex-wrap gap-4 pt-2">
              <motion.button
                className="px-8 py-4 bg-purple-600 text-white text-base font-medium rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg flex items-center gap-2 group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(147, 51, 234, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Portfolio</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full text-base font-medium hover:bg-purple-50 transition-all duration-300 flex items-center gap-2 group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(147, 51, 234, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform group-hover:scale-110 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Watch Demo</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
