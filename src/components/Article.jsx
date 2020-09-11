import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';

const Caption = styled.figcaption`
  font-size: 15px;
  position: absolute;
  top: auto;
  bottom: -30%;
  z-index: -0;
  opacity: 0;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  @media (max-width: 650px) {
    bottom: 0%;
    opacity: 1;
  }
`;

const ArticleWrapper = styled.figure`
  height: 450px;
  display: flex;
  margin-bottom: 0;
  margin: 0;
  float: left;
  position: relative;
  overflow: hidden;
  width: 100%;
  &:hover {
    opacity: 1;
  }
  &:hover ${Caption} {
    opacity: 1;
    bottom: 0;
  }
  @media (min-width: 650px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 25%;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.4s;
  object-position: 50% 50%;
`;

export default function Article({ article }) {
  return (
    <ArticleWrapper as="a" href={article.url}>
      <LazyLoad>
        <Image src={article.image.url} />
      </LazyLoad>
      <Caption>{article.caption}</Caption>
    </ArticleWrapper>
  );
}
