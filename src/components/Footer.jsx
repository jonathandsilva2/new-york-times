import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
  text-align: center;
  padding-top: 40px;
`;

const FooterText = styled.p`
  color: white;
`;

export default function Footer() {
  return (
    <FooterBar>
      <FooterText>Copyright&#169; Instanews</FooterText>
    </FooterBar>
  );
}
