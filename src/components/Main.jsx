import React, { useContext, useState, useEffect, useRef } from 'react';
import Article from './Article';
import Loading from './Loading';
import { articlesContext } from '../utils/api';
import styled from 'styled-components';

const MainWrapper = styled.main``;

export default function Main({ loading }) {
  const { articles } = useContext(articlesContext);
  const imageRef2 = document.querySelectorAll('figure');
  console.log(imageRef2);
  if (loading) return <Loading />;

  return (
    <MainWrapper>
      {articles.map((article, index) => {
        return <Article key={index} article={article} />;
      })}
    </MainWrapper>
  );
}
