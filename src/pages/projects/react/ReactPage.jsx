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
import MovieSite from "../../../assets/images/project-screenshots/movie-site.png";
import Kotoba from "../../../assets/images/project-screenshots/kotoba.png";
import Wingmen from "../../../assets/images/project-screenshots/wingmen.png";

const ReactPage = () => {
  return (
    <ReactContainer>
      <Navbar />
      <ReactHeader>React JS</ReactHeader>
      <ReactProjectContainer>
        <StyledLink to={"https://www.wingmen.ge"} target="_blank">
          <ReactProject src={Wingmen} />
        </StyledLink>
        <StyledLink>
          <ReactProject src={Kotoba} />
        </StyledLink>
        <StyledLink to={"https://smallimagesearch.netlify.app"} target="_blank">
          <ReactProject src={ImageSearch} />
        </StyledLink>
        <StyledLink
          to={"https://topmoviesandseries.netlify.app"}
          target="_blank"
        >
          <ReactProject src={MovieSite} />
        </StyledLink>
      </ReactProjectContainer>

      <Footer />
    </ReactContainer>
  );
};

export default ReactPage;
