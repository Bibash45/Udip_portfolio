import React from "react";
import { motion } from "framer-motion";
import lapImage1 from "../assets/lapImage1.jpg";

const Introduction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
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
        mass: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
      },
    },
  };

  return (
    <div
      id="introduction"
      className=" bg-gray-50 py-16 px-4 md:px-16 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Left Side - Content */}
          <motion.div
            className="w-full md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-gray-900 text-3xl md:text-4xl font-bold mb-6 relative"
              variants={itemVariants}
            >
              Professional Background
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-purple-600"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              With over seven years of experience in quality control and
              analytical testing, I've developed expertise in pharmaceutical
              settings, focusing on maintaining stringent quality standards
              through both wet chemistry and instrumental methods.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
              >
                <h3 className="text-gray-900 text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  About Me
                </h3>
                <p className="text-gray-600">
                  Currently working as a Quality Control Assistant at Berger
                  Jenson and Nicholson (Nepal) Pvt. Ltd., where I've trained
                  over 75 workers, collaborated with production teams, and
                  maintained strict compliance with GLP and cGMP standards.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
              >
                <h3 className="text-gray-900 text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Education
                </h3>
                <p className="text-gray-600">
                  Bachelor of Science in Chemistry from Tribhuvan University
                  (2013-2017), with focus on Thermodynamics, Spectroscopy,
                  Refining & purification, Qualitative and quantitative
                  analysis. Intermediate (+2) from HSEB Board (2010-2012).
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="w-full md:w-1/2 flex items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="w-full overflow-hidden rounded-xl shadow-xl relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <img
                src={lapImage1}
                alt="Laboratory Equipment"
                className="w-full h-auto object-cover rounded-xl hover:grayscale-0 grayscale transition-all duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
