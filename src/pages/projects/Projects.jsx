import React from "react";
import {
  HomeLink,
  ProjectsContainer,
  ProjectsHeader,
  ReactJS,
  VanillaJS,
} from "./style";
import { LogoImage } from "./style";
import ProjectsLogo from "./../../assets/images/Logo.png";
import { routes } from "../../constants/routes";

const Projects = () => {
  return (
    <ProjectsContainer>
      <HomeLink to={routes.home}>
        <LogoImage src={ProjectsLogo} />
      </HomeLink>
      <ProjectsHeader>PROJECTS</ProjectsHeader>
      <VanillaJS to={routes.vanillaPage}>Vanilla JS</VanillaJS>
      <ReactJS to={routes.reactPage}>React JS</ReactJS>
    </ProjectsContainer>
  );
};

export default Projects;
