import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import { ReactContainer, ReactHeader, ReactProjectContainer } from "./style";
import Footer from "../../../components/footer/Footer";

const ReactPage = () => {
  return (
    <ReactContainer>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Coming Soon!</h1>
      <ReactHeader>React JS</ReactHeader>
      <ReactProjectContainer></ReactProjectContainer>
      <Footer />
    </ReactContainer>
  );
};

export default ReactPage;
