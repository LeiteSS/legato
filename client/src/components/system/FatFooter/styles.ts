import styled from "styled-components";

// Styled components
export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 16px;
  padding: 10px;
`;

export const FooterLogos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FooterLogo = styled.img`
  width: 100px;
  height: 100px;
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const FooterIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const FooterMainLogo = styled.img`
  width: 100px;
  height: 100px;
`;

export const FooterCityStateCountry = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterCity = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const FooterState = styled.span`
  font-size: 16px;
  margin: 0 10px;
`;

export const FooterCountry = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const FooterMCMXCVIII = styled.span`
  font-size: 16px;
  font-weight: bold;
`;