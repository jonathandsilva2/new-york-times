import React from 'react';
import styled from 'styled-components';
import SelectBar from './SelectBar';
import { ReactComponent as Logo } from '../assets/images/nyt-logo.svg';

const HeaderWrapper = styled.header`
  height: 15rem;
  background-color: black;
`;

export default function Header() {
  const img = new Image();
  console.log(img);
  return (
    <HeaderWrapper>
      <Logo />
      <SelectBar />
    </HeaderWrapper>
  );
}
