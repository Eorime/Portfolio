import React from "react";
import {
  NavbarAbout,
  NavbarContact,
  NavbarContainer,
  NavbarElement,
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
        <NavbarElement>Projects</NavbarElement>
      </StyledLink>
      <StyledLink to={routes.about}>
        <NavbarElement>About</NavbarElement>
      </StyledLink>
      <StyledLink to={routes.contact}>
        <NavbarElement>Contact</NavbarElement>
      </StyledLink>
    </NavbarContainer>
  );
};

export default Navbar;
