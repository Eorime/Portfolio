import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ReactContainer = styled.div`
  font-family: pixelFont, Arial;
  color: #191818;
`;

export const ReactHeader = styled.p`
  font-size: 28px;
  margin-top: 70px;
  position: absolute;
  left: 200px;
`;

export const ReactProjectContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 170px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  max-width: 80vw;
  height: 300px;
  margin-left: auto;
  margin-right: auto;

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 5px;
  }

  &::-webkit-scrollbar {
    height: 10px;
  }
`;

export const ReactProject = styled.img`
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
