import React from "react";
import { AboutContainer, AboutHeader, AboutParagraph } from "./style";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  return (
    <AboutContainer>
      <Navbar />
      <AboutHeader>My name is Elene, and I...</AboutHeader>
      <AboutParagraph>...am an aspiring developer!</AboutParagraph>
    </AboutContainer>
  );
};

export default About;
