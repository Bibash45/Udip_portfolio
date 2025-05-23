import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
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
    <div id="aboutme" className="bg-gray-50 py-16 px-4 md:px-16 overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
            "https://images.unsplash.com/photo-1581093588401-fbb62a02f120",
            "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5"
          ].map((src, index) => (
            <motion.div 
              key={index}
              variants={imageVariants} 
              whileHover="hover"
              className="overflow-hidden rounded-xl shadow-lg group relative"
            >
              <motion.div
                className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <img 
                src={`${src}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80`}
                alt={["Laboratory Equipment", "Quality Control Testing", "Chemical Analysis"][index]}
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-gray-900 text-4xl md:text-5xl font-bold mb-4 relative inline-block"
          >
            About Me
            <motion.span 
              className="block w-full h-1 bg-purple-600 mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-gray-900 text-2xl font-bold mb-6 relative inline-block"
            >
              Professional Experience
              <motion.span 
                className="block w-3/4 h-0.5 bg-purple-600/60 mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: '75%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.h3>
            <motion.div variants={itemVariants} className="space-y-4 text-gray-600">
              <p>
                <strong className="text-purple-600">Quality Control Assistant</strong> at Berger Jenson and Nicholson (Nepal) Pvt. Ltd.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provided training and mentorship to over 75 workers and co-workers, enhancing team competency, standard compliance, and operational efficiency.</li>
                <li>Collaborated with production and procurement teams to identify and resolve quality issues, leading to enhanced product consistency and reduced production errors.</li>
                <li>Executed quality control testing on raw materials and finished products, strictly adhering to approved standard operating procedures (SOPs).</li>
                <li>Performed physical and wet chemistry tests such as pH, titration, and non-volatile matter (NVM)/loss on drying (LOD) to verify material quality.</li>
                <li>Ensured compliance with GLP and cGMP standards, promoting a culture of safety, quality, and consistency in laboratory operations.</li>
              </ul>
              <p className="mt-4">
                <strong className="text-purple-600">Science Teacher</strong> at Hardik Academy (Jan 2013 – 2017)
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
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-gray-900 text-2xl font-bold mb-6 relative inline-block"
            >
              Achievements & Skills
              <motion.span 
                className="block w-3/4 h-0.5 bg-purple-600/60 mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: '75%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.h3>
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h4 className="text-purple-600 text-xl mb-4">Key Achievements</h4>
                <ul className="list-disc pl-5 space-y-3 text-gray-600">
                  <li>Streamlined laboratory process, reducing testing time by 15%</li>
                  <li>Successfully trained 75+ workers on product quality guidelines and safety standards</li>
                  <li>Achieved 100% compliance during internal audit of laboratory practices</li>
                  <li>Contributed to a 20% reduction in out of spec results by enhancing QC protocols</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-purple-600 text-xl mb-4">Technical Skills</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Viscosity Testing",
                    "Gloss Measurement",
                    "Adhesion Testing",
                    "Salt Spray Tests",
                    "pH Analysis",
                    "Titration"
                  ].map((skill, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                      whileHover={{ 
                        y: -5, 
                        scale: 1.02,
                        transition: { duration: 0.2 } 
                      }}
                    >
                      <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-300">{skill}</span>
                    </motion.div>
                  ))}
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