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

export const Container = styled.div`
  font-family: pixelFont, Arial;
  text-align: center;
`;

export const ProjectsContainer = styled.div`
  font-family: pixelFont, Arial;
  font-size: 50px;
  margin-top: 100px;
  margin-left: 25px;
  color: #191818;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-left: 0px;
    margin-top: -30px;
    justify-content: space-between;
  }
`;

export const ProjectsHeader = styled.p`
  font-size: 35px;
  margin-top: -50px;

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const VanillaJS = styled(Link)`
  font-size: 50px;
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease;
  animation: ${bounceAnimation} 2s infinite;

  &: hover {
    font-size: 60px;
  }

  @media screen and (max-width: 500px) {
    animation: none;
    margin-top: 50px;
    font-size: 26px;
  }
`;

export const ReactJS = styled(Link)`
  font-size: 50px;
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease;
  animation: ${bounceAnimation} 2s infinite;

  &: hover {
    font-size: 60px;
  }

  @media screen and (max-width: 500px) {
    animation: none;
    margin-top: 50px;
    font-size: 26px;
  }
`;

export const FullStack = styled(Link)`
  font-size: 50px;
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease;
  animation: ${bounceAnimation} 2s infinite;

  &: hover {
    font-size: 60px;
  }

  @media screen and (max-width: 500px) {
    animation: none;
    margin-top: 50px;
    font-size: 26px;
  }
`;

export const LogoImage = styled.img`
  margin-top: 50px;
  width: 180px;

  @media screen and (max-width: 500px) {
    margin-top: 80px;
    margin-bottom: 5px;
    width: 150px;
  }
`;
