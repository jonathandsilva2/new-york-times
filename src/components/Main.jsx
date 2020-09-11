import React, { useContext } from 'react';
import Article from './Article';
import { articlesContext } from '../utils/api';
import styled from 'styled-components';

const MainWrapper = styled.main``;

export default function Main({ loading, articles }) {
  if (articles === null) return null;
  return (
    <MainWrapper>
      {articles.map((article, index) => {
        return <Article key={index} article={article} />;
      })}
    </MainWrapper>
  );
}
