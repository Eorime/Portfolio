import React, { useState } from "react";
import {
  ContactContainer,
  Contacts,
  GithubImage,
  Header,
  MailImage,
  PhoneImage,
  PhoneNumber,
  StyledLink,
} from "./style";
import Navbar from "../../components/navbar/Navbar";
import GithubLogo from "../../assets/images/GithubLogo.png";
import Mail from "../../assets/images/Mail.png";
import Phone from "../../assets/images/Phone.png";

const Contact = () => {
  const [showNumber, setShowNumber] = useState(false);
  const handleEmailClick = () => {
    window.location.href = "mailto:elenedgebuadze83@gmail.com";
  };

  const handlePhoneClick = () => {
    setShowNumber(!showNumber);
  };
  return (
    <ContactContainer>
      <Navbar />
      <Header>Check out my code and contact me!</Header>
      <Contacts>
        <StyledLink to={"https://github.com/Eorime"} target="_blank">
          <GithubImage src={GithubLogo} />
        </StyledLink>
        <StyledLink onClick={handleEmailClick}>
          <MailImage src={Mail} />
        </StyledLink>
        <StyledLink onClick={handlePhoneClick}>
          <PhoneImage src={Phone} />
        </StyledLink>
      </Contacts>
      {showNumber && <PhoneNumber>+995 599 78 35 32</PhoneNumber>}
    </ContactContainer>
  );
};

export default Contact;
