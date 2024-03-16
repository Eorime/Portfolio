import React, { useState } from "react";
import HomeLogo from "./../../assets/images/Logo.png";
import AltHomeLogo from "./../../assets/images/AltLogo.png";
import {
  HomeAbout,
  HomeContact,
  HomeContainer,
  HomeHeader,
  HomeImage,
  HomeProjects,
} from "./style";
import { routes } from "../../constants/routes";

const Home = () => {
  const [pat, setPat] = useState(false);

  const handleClick = () => {
    setPat(!pat);

    setTimeout(() => {
      setPat(false);
    }, 350);
  };

  return (
    <HomeContainer>
      <HomeHeader>Welcome, stranger!</HomeHeader>
      <HomeImage src={pat ? AltHomeLogo : HomeLogo} onClick={handleClick} />
      <HomeProjects to={routes.projects}>PROJECTS</HomeProjects>
      <HomeAbout to={routes.about}>ABOUT ME</HomeAbout>
      <HomeContact to={routes.contact}>CONTACT</HomeContact>
    </HomeContainer>
  );
};

export default Home;
