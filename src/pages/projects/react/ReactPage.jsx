import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import {
  ReactContainer,
  ReactHeader,
  ReactProject,
  ReactProjectContainer,
  StyledLink,
} from "./style";
import Footer from "../../../components/footer/Footer";
import ImageSearch from "../../../assets/images/project-screenshots/image-search.png";

const ReactPage = () => {
  return (
    <ReactContainer>
      <Navbar />
      <ReactHeader>React JS</ReactHeader>
      <ReactProjectContainer>
        <StyledLink to={"https://smallimagesearch.netlify.app"} target="_blank">
          <ReactProject src={ImageSearch} />
        </StyledLink>
      </ReactProjectContainer>
      <Footer />
    </ReactContainer>
  );
};

export default ReactPage;
