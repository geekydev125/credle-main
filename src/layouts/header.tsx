import React from 'react';
import styled from 'styled-components';

import { LogoHeader } from 'src/config/images';
import { CustomConnectButton } from 'src/components/button';
import { Container } from 'src/components/container/container';

export const Header = () => {
  return (
    <Container>
      <HeaderContent>
        <DesktopLogo src={LogoHeader} alt="logo-header" onClick={() => window.open('https://cradleofsins.com/')} />
        <CustomConnectButton />
      </HeaderContent>
    </Container>
  );
};

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  gap: 3rem;
  max-width: 1160px;
  padding: 20px 0 0 20px;
  @media screen and (max-width: 420px) {
    padding: 0;
  }
`;

const DesktopLogo = styled.img`
  width: 75px;
  height: auto;
  cursor: pointer;
`;
