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
  text-align: center;
`;

export const HomeContainer = styled.div`
  font-family: pixelFont, Arial;
  color: #191818;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HomeHeader = styled.p`
  font-size: 50px;
  font-family: pixelFont, Arial;

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

export const HomeImage = styled.img`
  width: 200px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const AltHomeImage = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const HomeProjects = styled(Link)`
  position: absolute;
  margin-top: 0;
  font-size: 40px;
  left: 20%;
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease;
  animation: ${bounceAnimation} 2s infinite;

  &: hover {
    font-size: 45px;
    left: 19%;
  }

  @media screen and (max-width: 500px) {
    animation: none;
    font-size: 30px;
    margin-top: 10px;
    position: static;
  }
`;

export const HomeAbout = styled(Link)`
  position: absolute;
  margin-top: 350px;
  font-size: 40px;
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease;
  animation: ${bounceAnimation} 2s infinite;

  &: hover {
    font-size: 45px;
  }

  @media screen and (max-width: 500px) {
    animation: none;
    font-size: 30px;
    margin-top: 40px;
    position: static;
  }
`;

export const HomeContact = styled(Link)`
  position: absolute;
  margin-top: 0;
  font-size: 40px;
  right: 20%;
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease;
  animation: ${bounceAnimation} 2s infinite;

  &: hover {
    font-size: 45px;
    right: 19%;
  }

  @media screen and (max-width: 500px) {
    animation: none;
    font-size: 30px;
    position: static;
    margin-top: 40px;
  }
`;
