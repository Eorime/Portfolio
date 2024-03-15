import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import { ReactContainer, ReactHeader, ReactProjectContainer } from "./style";

const ReactPage = () => {
  return (
    <ReactContainer>
      <Navbar />
      <ReactHeader>React JS</ReactHeader>
      <ReactProjectContainer></ReactProjectContainer>
    </ReactContainer>
  );
};

export default ReactPage;
