import React from "react";
import {
  NavbarAbout,
  NavbarContact,
  NavbarContainer,
  NavbarLogo,
  NavbarProjects,
  StyledLink,
} from "./style";
import { routes } from "../../constants/routes";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledLink to={routes.home}>
        <NavbarLogo src={Logo} />
      </StyledLink>
      <StyledLink to={routes.projects}>
        <NavbarProjects>Projects</NavbarProjects>
      </StyledLink>
      <StyledLink to={routes.about}>
        <NavbarAbout>About Me</NavbarAbout>
      </StyledLink>
      <StyledLink to={routes.contact}>
        <NavbarContact>Contact</NavbarContact>
      </StyledLink>
    </NavbarContainer>
  );
};

export default Navbar;
