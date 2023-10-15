import Span from '../basic/Span';
import Div from '../basic/Div';

import {
  FooterContainer,
  FooterLogo,
  FooterLocation,
  FooterIcon,
} from './styles';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterContainer>
      <FooterLogo src="/logo.png" />
      <FooterLocation>
        <Span>San Francisco, CA, USA</Span>
      </FooterLocation>
      <Div>
        <FooterIcon src="/facebook-icon.png" />
        <FooterIcon src="/youtube-icon.png" />
        <FooterIcon src="/twitter-icon.png" />
        <FooterIcon src="/instagram-icon.png" />
      </Div>
    </FooterContainer>
  );
};

export default Footer;