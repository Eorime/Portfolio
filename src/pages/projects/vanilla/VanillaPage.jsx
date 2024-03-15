import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import {
  VanillaContainer,
  VanillaHeader,
  VanillaProjectContainer,
} from "./style";

const VanillaPage = () => {
  return (
    <VanillaContainer>
      <Navbar />
      <VanillaHeader>Vanilla JS</VanillaHeader>
      <VanillaProjectContainer></VanillaProjectContainer>
    </VanillaContainer>
  );
};

export default VanillaPage;
