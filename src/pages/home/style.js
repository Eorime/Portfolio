import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  font-family: pixelFont, Arial;
  color: #191818;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`;

export const HomeHeader = styled.p`
  position: absolute;
  margin-top: -370px;
  font-size: 50px;
`;

export const HomeImage = styled.img`
  width: 200px;

  &:hover {
    cursor: pointer;
  }
`;

export const AltHomeImage = styled.img`
  width: 200px;
`;

export const HomeProjects = styled(Link)`
  position: absolute;
  margin-top: 0;
  font-size: 40px;
  right: 500px;
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease;

  &: hover {
    font-size: 45px;
    right: 480px;
  }
`;

export const HomeAbout = styled(Link)`
  position: absolute;
  margin-top: 350px;
  font-size: 40px;
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease;

  &: hover {
    font-size: 45px;
  }
`;

export const HomeContact = styled(Link)`
  position: absolute;
  margin-top: 0;
  font-size: 40px;
  left: 500px;
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease;

  &: hover {
    font-size: 45px;
    right: 480px;
  }
`;
