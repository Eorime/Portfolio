import React from "react";
import {
  HomeLink,
  ProjectsContainer,
  ProjectsHeader,
  ReactJS,
  VanillaJS,
  Container,
  FullStack,
} from "./style";
import { LogoImage } from "./style";
import ProjectsLogo from "./../../assets/images/Logo.png";
import { routes } from "../../constants/routes";

const Projects = () => {
  return (
    <Container>
      <HomeLink to={routes.home}>
        <LogoImage src={ProjectsLogo} />
        <ProjectsHeader>PROJECTS</ProjectsHeader>
      </HomeLink>
      <ProjectsContainer>
        <ReactJS to={routes.reactPage}>React JS</ReactJS>
        <FullStack to={routes.fullStackPage}>Full-Stack</FullStack>
        <VanillaJS to={routes.vanillaPage}>Vanilla JS</VanillaJS>
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
