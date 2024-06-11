import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
  color: #191818;
  padding: 20px;
  text-align: center;
  font-family: pixelFont, Arial;
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;

export const FooterRights = styled.p``;

export const FooterCredits = styled.p``;

export const FooterLogo = styled.img`
  width: 20px;
  opacity: 80%;
  margin-left: 20px;
  margin-right: 20px;
`;
