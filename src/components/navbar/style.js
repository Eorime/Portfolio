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

  @media screen and (max-width: 500px) {
    margin-left: -90px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  @media screen and (max-width: 500px) {
    margin-right: 25px;
    margin-left: 5px;
  }
`;

export const NavbarLogo = styled.img`
  width: 110px;
  margin-left: 100px;
  margin-right: -30px;

  @media screen and (max-width: 500px) {
    width: 80px;
    margin-top: 15px;
  }
`;

export const NavbarElement = styled.h1`
  font-size: 30px;
  margin-right: 120px;

  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin-left: 10px;
    margin-right: -10px;
    margin-top: 40px;
  }
`;
