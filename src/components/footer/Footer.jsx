import React from "react";
import {
  FooterContainer,
  FooterCredits,
  FooterLogo,
  FooterRights,
  StyledLink,
} from "./style";
import FacebookLogo from "../../assets/images/socials-icons/Facebook.png";
import InstagramLogo from "../../assets/images/socials-icons/Instagram.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterRights>© 2024 Eorime Portfolio. All rights reserved.</FooterRights>
      <FooterCredits>
        Mail and phone icons made by Ilaria Bemareggi and Yafet Bouchagra from
        The Noun Project.
      </FooterCredits>
      <StyledLink
        to={"https://www.facebook.com/elene.dgebuadze.7/"}
        target={"_blank"}
      >
        <FooterLogo src={FacebookLogo} />
      </StyledLink>
      <StyledLink to={"https://www.instagram.com/_ene_8/"} target="_blank">
        <FooterLogo src={InstagramLogo} />
      </StyledLink>
    </FooterContainer>
  );
};

export default Footer;
