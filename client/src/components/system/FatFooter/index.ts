import React from 'react';
import {
  FooterContainer,
  FooterLink,
  FooterLogos,
  FooterLogo,
  FooterIcons,
  FooterIcon,
  FooterMainLogo,
  FooterCityStateCountry,
  FooterCity,
  FooterState,
  FooterCountry,
  FooterMCMXCVIII,
} from './styles'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#">Contact</FooterLink>
        <FooterLink href="#">Documentation</FooterLink>
        <FooterLink href="#">API</FooterLink>
      </FooterLinks>
      <FooterLogos>
        <FooterLogo src={"/logo-1.png"} />
        <FooterLogo src={"/logo-2.png"} />
        <FooterLogo src={"/logo-3.png"} />
        <FooterLogo src={"/logo-4.png"} />
        <FooterLogo src={"/logo-5.png"} />
        <FooterLogo src={"/logo-6.png" }/>
      </FooterLogos>
      <FooterIcons>
        <FooterIcon src="/facebook-icon.png" />
        <FooterIcon src="/youtube-icon.png" />
        <FooterIcon src="/twitter-icon.png" />
        <FooterIcon src="/instagram-icon.png" />
      </FooterIcons>
      <FooterMainLogo src="/main-logo.png" />
      <FooterCityStateCountry>
        <FooterCity>San Francisco</FooterCity>
        <FooterState>CA</FooterState>
        <FooterCountry>USA</FooterCountry>
      </FooterCityStateCountry>
      <FooterMCMXCVIII>MCMXCVIII</FooterMCMXCVIII>
    </FooterContainer>
  );
};

export default Footer;