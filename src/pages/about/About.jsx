import React from "react";
import {
  AboutContainer,
  AboutHeader,
  AboutParagraph,
  MeIcon,
  SkillsContainer,
  SkillsIcon,
} from "./style";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import JS from "../../assets/images/skills/JS.png";
import HTML from "../../assets/images/skills/HTML.png";
import CSS from "../../assets/images/skills/CSS.png";
import Github from "../../assets/images/skills/Github.png";
import Git from "../../assets/images/skills/Git.png";
import ReactLogo from "../../assets/images/skills/React.png";
import TS from "../../assets/images/skills/TS.png";
import VScode from "../../assets/images/skills/VScode.png";
import StyledComponents from "../../assets/images/skills/StyledComponents.png";
import Figma from "../../assets/images/skills/Figma.png";
import Photoshop from "../../assets/images/skills/Photoshop.png";
import RestAPI from "../../assets/images/skills/rest-api-icon.webp";
import Postman from "../../assets/images/skills/cib-postman.png";
import Mongo from "../../assets/images/skills/kisspng-mongodb-inc-computer-icons-nosql-database-mongodb-icons-5b45a6e229c7a3.7462248615312913621711.png";
import NodeLogo from "../../assets/images/skills/brand_nodejs_icon_157858.png";
import Illustrator from "../../assets/images/skills/Illustrator.png";
import Me from "../../assets/images/Me.png";

const About = () => {
  return (
    <AboutContainer>
      <Navbar />
      <AboutHeader>My name is Elene, and I...</AboutHeader>
      <AboutParagraph>
        ...am an aspiring developer! Let me tell you a bit about myself.
        <br></br> <br></br>From a young age, technology fascinated me, I grew up
        playing video-games. <br></br> Consequently, I always wondered how such
        marvelous craftsmanship came <br></br>to life in my local machine. Aside
        the curiosity I had towards the aforementioned <br></br> field, I was
        extremely creative and gained contentment in making art. For as long as
        <br></br>I can remember, I have been drawing, channeling my thoughts
        into different designs <br></br>and it was no surprise I chose graphic
        design as my career path. I graduated from <br></br>
        <a
          href="https://freeuni.edu.ge/ge/"
          target="_blank"
          style={{ color: "black", textDecoration: "none", fontWeight: "bold" }}
          rel="noreferrer"
        >
          Free University Of Tbilisi
        </a>{" "}
        {""}
        and got my Bachelor's Degree in Communication Design. <br></br>During my
        studies there, I had to participate in a mandatory class, which
        specifically <br></br>covered front-end development. This was where I
        had to write my first line of code.
        <br></br> Needless to say, I fell in love with the process of
        problem-solving, as well as creating <br></br> interactive sites and
        making my designs come to life using different technologies. <br></br>
        Shortly after getting a diploma, I decided to dedicate myself entirely
        to programming. <br></br> <br></br>{" "}
        <span style={{ fontSize: "25px" }}>
          Without further ado, here's the evergrowing set of technical skills I
          currently possess.{" "}
        </span>
      </AboutParagraph>
      <SkillsContainer>
        <SkillsIcon src={JS} />
        <SkillsIcon src={HTML} />
        <SkillsIcon src={CSS} />
        <SkillsIcon src={ReactLogo} />
        <SkillsIcon src={TS} />
        <SkillsIcon src={NodeLogo} />
        <SkillsIcon src={Mongo} />
        <SkillsIcon src={RestAPI} />
        <SkillsIcon src={Postman} />
        <SkillsIcon src={Git} />
        <SkillsIcon src={Github} />
        <SkillsIcon src={VScode} />
        <SkillsIcon src={StyledComponents} />
        <SkillsIcon src={Figma} />
        <SkillsIcon src={Photoshop} />
        <SkillsIcon src={Illustrator} />
      </SkillsContainer>
      <MeIcon src={Me} />
      <Footer />
    </AboutContainer>
  );
};

export default About;
