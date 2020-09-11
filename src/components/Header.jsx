import React from 'react';
import styled, { css } from 'styled-components';
import SelectBar from './SelectBar';
import { ReactComponent as Logo } from '../assets/images/nyt-logo.svg';

const HeaderWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0;

  background-color: ${(props) => (props.articles ? 'pink' : 'red')};
  height: ${(props) => (props.articles ? 500 : '85vh')};
  transtion: height 1s;
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
  position: relative;
  width: 200px;
  @media (min-width: 650px) {
    margin-right: 150px;
  }
`;

const SelectText = styled.p`
  color: white;
`;

export default function Header({ topic, articles, setTopic, setArticles }) {
  console.log('rendered header');
  return (
    <HeaderWrapper articles={articles}>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <SelectBarWrapper>
        <SelectText>Choose a section:</SelectText>
        <SelectBar
          setArticles={setArticles}
          topic={topic}
          setTopic={setTopic}
        />
      </SelectBarWrapper>
    </HeaderWrapper>
  );
}
