import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const bounceAnimation = keyframes`
    0% {
        transform: translateY(0);
    } 
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

export const ProjectsContainer = styled.div`
  font-family: pixelFont, Arial;
  text-align: center;
  color: #191818;
`;

export const ProjectsHeader = styled.p`
  font-size: 35px;
  margin-top: -50px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Projects = styled.div`
  display: inline-block;
`;

export const VanillaJS = styled(Link)`
  font-size: 50px;
  position: absolute;
  left: 20%;
  margin-top: 70px;
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease;
  animation: ${bounceAnimation} 2s infinite;

  &: hover {
    font-size: 60px;
    left: 19%;
  }
`;

export const ReactJS = styled(Link)`
  font-size: 50px;
  position: absolute;
  right: 20%;
  margin-top: 70px;
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease;
  animation: ${bounceAnimation} 2s infinite;

  &: hover {
    font-size: 60px;
    right: 19%px;
  }
`;

export const LogoImage = styled.img`
  margin-top: 100px;
  width: 200px;
`;
