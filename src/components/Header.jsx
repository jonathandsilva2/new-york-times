import React from 'react';
import styled from 'styled-components';

import SelectBar from './SelectBar';

import { ReactComponent as Logo } from '../assets/images/nyt-logo.svg';

const HeaderWrapper = styled.div`
  display: flex;
  transition: height 1s;
  align-items: center;
  padding: 20px 0;
  flex-direction: ${(props) => (props.articles ? 'row' : 'column')};
  height: ${(props) => (props.articles ? '200px' : '80vh')};
  justify-content: space-around;
  @media (min-width: 650px) {
    flex-direction: row;
    justify-content: flex-start;
  }
  @media (min-width: 1240px) {
    flex-direction: space-evenly;
    justify-content: center;
  }
`;
const LogoWrapper = styled.div`
  height: 100%;
  max-height: 400px;
  width: 100%;
  max-width: 350px;
`;

const SelectBarWrapper = styled.div`
  align-contents: center;
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => (props.articles ? '20px' : '0')};
`;

const SelectText = styled.h3`
  color: white;
`;

export default function Header({ handleTopicChange, articles, setArticles }) {
  return (
    <HeaderWrapper articles={articles}>
      <LogoWrapper articles={articles}>
        <Logo />
      </LogoWrapper>

      <SelectBarWrapper articles={articles}>
        <SelectText>Choose a section:</SelectText>
        <SelectBar
          handleTopicChange={handleTopicChange}
          setArticles={setArticles}
        />
      </SelectBarWrapper>
    </HeaderWrapper>
  );
}
