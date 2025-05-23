import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
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
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={imageVariants} 
            whileHover="hover"
            className="overflow-hidden rounded-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Laboratory Equipment" 
              className="w-full h-64 object-cover grayscale"
            />
          </motion.div>
          <motion.div 
            variants={imageVariants} 
            whileHover="hover"
            className="overflow-hidden rounded-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Quality Control Testing" 
              className="w-full h-64 object-cover grayscale"
            />
          </motion.div>
          <motion.div 
            variants={imageVariants} 
            whileHover="hover"
            className="overflow-hidden rounded-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Chemical Analysis" 
              className="w-full h-64 object-cover grayscale"
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-white text-4xl md:text-5xl font-bold mb-4 relative inline-block"
          >
            About Me
            <span className="block w-full h-1 bg-white mt-4"></span>
          </motion.h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-white text-2xl font-bold mb-6"
            >
              Professional Experience
            </motion.h3>
            <motion.div variants={itemVariants} className="space-y-4 text-gray-300">
              <p>
                <strong className="text-purple-400">Quality Control Assistant</strong> at Berger Jenson and Nicholson (Nepal) Pvt. Ltd.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provided training and mentorship to over 75 workers and co-workers, enhancing team competency, standard compliance, and operational efficiency.</li>
                <li>Collaborated with production and procurement teams to identify and resolve quality issues, leading to enhanced product consistency and reduced production errors.</li>
                <li>Executed quality control testing on raw materials and finished products, strictly adhering to approved standard operating procedures (SOPs).</li>
                <li>Performed physical and wet chemistry tests such as pH, titration, and non-volatile matter (NVM)/loss on drying (LOD) to verify material quality.</li>
                <li>Ensured compliance with GLP and cGMP standards, promoting a culture of safety, quality, and consistency in laboratory operations.</li>
              </ul>
              <p className="mt-4">
                <strong className="text-purple-400">Science Teacher</strong> at Hardik Academy (Jan 2013 – 2017)
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Taught Science to grades 6-10, adhering to the CDC curriculum.</li>
                <li>Assessed student performance and provided constructive feedback.</li>
                <li>Promoted a positive learning environment and fostered student engagement.</li>
                <li>Participated in school committee meetings to address and solve school issues.</li>
              </ul>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-white text-2xl font-bold mb-6"
            >
              Achievements & Skills
            </motion.h3>
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h4 className="text-purple-400 text-xl mb-3">Key Achievements</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Streamlined laboratory process, reducing testing time by 15%</li>
                  <li>Successfully trained 75+ workers on product quality guidelines and safety standards</li>
                  <li>Achieved 100% compliance during internal audit of laboratory practices</li>
                  <li>Contributed to a 20% reduction in out of spec results by enhancing QC protocols</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-purple-400 text-xl mb-3">Technical Skills</h4>
                <div className="grid grid-cols-2 gap-2 text-gray-300">
                  <div className="bg-[#252525] p-3 rounded">
                    <span>Viscosity Testing</span>
                  </div>
                  <div className="bg-[#252525] p-3 rounded">
                    <span>Gloss Measurement</span>
                  </div>
                  <div className="bg-[#252525] p-3 rounded">
                    <span>Adhesion Testing</span>
                  </div>
                  <div className="bg-[#252525] p-3 rounded">
                    <span>Salt Spray Tests</span>
                  </div>
                  <div className="bg-[#252525] p-3 rounded">
                    <span>pH Analysis</span>
                  </div>
                  <div className="bg-[#252525] p-3 rounded">
                    <span>Titration</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;