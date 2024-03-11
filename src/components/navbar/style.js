import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: pixelFont, Arial;
  color: #191818;
  margin-top: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const NavbarLogo = styled.img`
  width: 120px;
  margin-left: 100px;
  margin-right: -30px;
`;

export const NavbarProjects = styled.h1`
  font-size: 35px;
  margin-left: 20px;
`;

export const NavbarAbout = styled.h1`
  font-size: 35px;
`;

export const NavbarContact = styled.h1`
  font-size: 35px;
  margin-right: 100px;
`;
