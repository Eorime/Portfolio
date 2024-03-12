import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContactContainer = styled.div``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Header = styled.h1`
  font-family: pixelFont, Arial;
  font-size: 40px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 70px;
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
`;

export const MailImage = styled.img`
  width: 130px;
  margin-left: 100px;
  margin-right: 130px;
`;

export const PhoneImage = styled.img`
  width: 130px;
  margin-right: 200px;
`;

export const PhoneNumber = styled.h2`
  font-family: pixelFont, Arial;
  position: absolute;
  right: 170px;
`;
