import styled from "styled-components";

export const AboutContainer = styled.div`
  font-family: pixelFont, Arial;
`;

export const AboutHeader = styled.p`
  font-size: 28px;
  margin-top: 70px;
  position: absolute;
  left: 200px;

  @media screen and (max-width: 500px) {
    left: 30px;
    margin-top: 30px;
  }
`;

export const AboutParagraph = styled.p`
  font-size: 20px;
  position: absolute;
  left: 15%;
  margin-top: 170px;
  line-height: 1.5;

  @media screen and (max-width: 500px) {
    left: 20px;
    margin-top: 120px;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-wrap: wrap;
  margin-top: 670px;
  width: 700px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 500px) {
    margin-top: 1120px;
    width: 350px;
  }
`;

export const SkillsIcon = styled.img`
  width: 70px;
  text-align: center;
  opacity: 85%;
  margin: 15px;
`;

export const MeIcon = styled.img`
  width: 480px;
  position: absolute;
  right: 3%;
  opacity: 80px;
  top: 270px;

  @media screen and (max-width: 500px) {
    left: -50px;
    margin-top: 120px;
    z-index: -1;
    opacity: 0.2;
    top: 250px;
    width: 600px;
  }
`;
