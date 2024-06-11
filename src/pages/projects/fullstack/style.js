import styled from "styled-components";
import { Link } from "react-router-dom";

export const FullStackContainer = styled.div`
  font-family: pixelFont, Arial;
  color: #191818;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const FullStackProjectContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 150px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  max-width: 80vw;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 5px;
  }

  &::-webkit-scrollbar {
    height: 10px;
  }
`;

export const FullStackHeader = styled.p`
  font-size: 28px;
  margin-top: 70px;
  position: absolute;
  left: 200px;

  @media screen and (max-width: 500px) {
    left: 55px;
  }
`;

export const FullStackProject = styled.img`
  width: 400px;
  height: 200px;
  margin: 20px;
  border-radius: 5px;
  filter: grayscale(100%);
  transition: filter 0.3s, width 0.3s, height 0.3s;

  &: hover {
    filter: none;
    width: 500px;
    height: 250px;
    cursor: pointer;
  }
`;
