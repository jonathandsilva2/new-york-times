import React from 'react';
import styled from 'styled-components';
import SelectBar from './SelectBar';
import { ReactComponent as Logo } from '../assets/images/nyt-logo.svg';

const HeaderWrapper = styled.header`
  background-color: black;
  transition
`;

export default function Header({ topic, setTopic }) {
  const img = new Image();
  console.log(img);
  return (
    <HeaderWrapper>
      <Logo style={{ height: topic ? '10rem' : '20rem' }} />
      <SelectBar topic={topic} setTopic={setTopic} />
    </HeaderWrapper>
  );
}
