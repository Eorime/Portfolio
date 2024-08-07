import { keyframes } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const bounceAnimation = keyframes`
    0% {
        transform: translateY(0);
    } 
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

export const ContactContainer = styled.div``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Header = styled.h1`
  font-family: pixelFont, Arial;
  font-size: 40px;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 80px;
  animation: ${bounceAnimation} 2s infinite;
`;

export const Contacts = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const GithubImage = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 200px;
  margin-top: 55px;

  @media screen and (max-width: 500px) {
    margin-left: 20px;
    width: 70px;
    height: 70px;
  }
`;

export const MailImage = styled.img`
  width: 130px;
  margin-left: 180px;
  margin-right: 130px;
  margin-top: 50px;

  @media screen and (max-width: 500px) {
    margin-left: 80px;
    width: 80px;
    height: 80px;
  }
`;

export const Margin = styled.p`
  margin-bottom: 200px;
`;

export const PhoneImage = styled.img`
  margin-top: 20px;
  width: 190px;
  margin-right: 160px;

  @media screen and (max-width: 500px) {
    margin-top: 30px;
    margin-left: -90px;
    width: 110px;
    height: 110px;
  }
`;

export const PhoneNumber = styled.h2`
  font-family: pixelFont, Arial;
  position: absolute;
  right: 165px;
  margin-top: -5px;
`;

export const MailAddress = styled.h2`
  font-family: pixelFont, Arial;
  position: absolute;
  right: 815px;
  margin-top: -5px;

  @media screen and (max-width: 1500px) {
    position: absolute;
    right: 520px;
  }
`;
