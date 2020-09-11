import React from 'react';
import styled from 'styled-components';
import SelectBar from './SelectBar';
import { ReactComponent as Logo } from '../assets/images/nyt-logo.svg';

const HeaderWrapper = styled.header`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 650px) {
    flex-direction: row;
    padding: 0;
  }

  @media (min-width: 650px) {
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 650px) {
    margin-left: 150px;
  }
`;

const SelectBarWrapper = styled.div`
  align-self: center;
  @media (min-width: 650px) {
    margin-right: 150px;
  }
`;

const SelectText = styled.p`
  color: white;
`;

export default function Header({ topic, setTopic }) {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo
          style={{
            height: topic ? '10rem' : '20rem',
            alignSelf: 'center',
          }}
        />
      </LogoWrapper>

      <SelectBarWrapper>
        <SelectText>Choose a section:</SelectText>
        <SelectBar topic={topic} setTopic={setTopic} />
      </SelectBarWrapper>
    </HeaderWrapper>
  );
}
