import React, { useState } from "react";
import {
  ContactContainer,
  Contacts,
  GithubImage,
  Header,
  MailAddress,
  MailImage,
  Margin,
  PhoneImage,
  PhoneNumber,
  StyledLink,
} from "./style";
import Navbar from "../../components/navbar/Navbar";
import GithubLogo from "../../assets/images/GithubLogo.png";
import Mail from "../../assets/images/Mail.png";
import Phone from "../../assets/images/Phone.png";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  const [showNumber, setShowNumber] = useState(false);
  const [showMail, setShowMail] = useState(false);

  const handleEmailClick = () => {
    setShowMail(!showMail);
    if (!showMail) {
      window.location.href = "mailto:elenedgebuadze83@gmail.com";
    }
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
      {showMail && <MailAddress>elenedgebuadze83@gmail.com</MailAddress>}
      <Margin />
      <Footer />
    </ContactContainer>
  );
};

export default Contact;
