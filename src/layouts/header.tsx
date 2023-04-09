import React from 'react';
import styled from 'styled-components';

import { LogoHeader } from 'src/config/images';
import { CustomConnectButton } from 'src/components/button';

export const Header = () => {
  return (
    <HeaderContent>
      <DesktopLogo src={LogoHeader} alt="logo-header" onClick={() => window.open('https://cradleofsins.com/')} />
      <CustomConnectButton />
    </HeaderContent>
  );
};

const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  gap: 3rem;
  max-width: 1160px;
  padding: 20px 0 0 20px;
`;

const DesktopLogo = styled.img`
  width: 75px;
  height: auto;
  cursor: pointer;
`;
