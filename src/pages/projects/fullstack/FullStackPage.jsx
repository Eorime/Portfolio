import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import {
  FullStackContainer,
  FullStackHeader,
  FullStackProject,
  FullStackProjectContainer,
  StyledLink,
} from "./style";
import Wingmen from "../../../assets/images/project-screenshots/wingmen.png";
import Footer from "../../../components/footer/Footer";

const FullStackPage = () => {
  return (
    <FullStackContainer>
      <Navbar />
      <FullStackHeader>Full-Stack</FullStackHeader>
      <FullStackProjectContainer>
        <StyledLink to={"https://wingmen.ge"} target="_blank">
          <FullStackProject src={Wingmen} />
        </StyledLink>
      </FullStackProjectContainer>
      <Footer />
    </FullStackContainer>
  );
};

export default FullStackPage;
