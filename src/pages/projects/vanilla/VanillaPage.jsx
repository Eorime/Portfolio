import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import {
  StyledLink,
  VanillaContainer,
  VanillaHeader,
  VanillaProject,
  VanillaProjectContainer,
} from "./style";
import PixelRestaurant from "../../../assets/images/project-screenshots/pixel-restaurant.png";
import Library from "../../../assets/images/project-screenshots/library.png";
import TicTacToe from "../../../assets/images/project-screenshots/tic-tac-toe.png";
import Calculator from "../../../assets/images/project-screenshots/calculator.png";

const VanillaPage = () => {
  return (
    <VanillaContainer>
      <Navbar />
      <VanillaHeader>Vanilla JS</VanillaHeader>
      <VanillaProjectContainer>
        <StyledLink
          to={"https://eorime.github.io/Pixel-Restaurant/index.html"}
          target="_blank"
        >
          <VanillaProject src={PixelRestaurant} />
        </StyledLink>
        <StyledLink
          to={"https://eorime.github.io/Tiny-Library/"}
          target="_blank"
        >
          <VanillaProject src={Library} />
        </StyledLink>
        <StyledLink
          to={"https://eorime.github.io/Tic-Tac-Toe/"}
          target="_blank"
        >
          <VanillaProject src={TicTacToe} />
        </StyledLink>
        <StyledLink to={"https://eorime.github.io/Calculator/"} target="_blank">
          <VanillaProject src={Calculator} />
        </StyledLink>
      </VanillaProjectContainer>
    </VanillaContainer>
  );
};

export default VanillaPage;
