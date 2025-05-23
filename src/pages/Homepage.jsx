import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import Vision from "../components/Vision";
import Mission from "../components/Mission";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <AboutMe />
      <Vision />
      <Mission />
    </>
  );
};

export default Homepage;
