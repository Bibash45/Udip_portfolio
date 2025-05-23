import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import Contact from "../components/Contact";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <AboutMe />
      <Vision />
      <Mission />
      <Contact />
    </>
  );
};

export default Homepage;
