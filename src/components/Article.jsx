import React, { useState } from 'react';
import styled from 'styled-components';

export default function Article({ article }) {
  const ArticleWrapper = styled.article`
    height: 500px;
    width: 25%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.6);
    margin-bottom: 0;
    float: left;
    background-color: red;
    position: relative;
    transition: ;
  `;

  const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    transition: transform 0.4s;
  `;

  const Caption = styled.p`
    font-size: 15px;
    position: absolute;
    top: auto;
    bottom: 0;
    opacity: 0;
    transition: opacity 1s;
    &:hover {
      opacity: 1;
    }
  `;

  const [hovered, setHovered] = useState(false);
  console.log(hovered);

  console.log('rendered', article);
  return (
    <ArticleWrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image src={article.image.url} />

      <Caption as="a" href={article.url}>
        {article.caption}
      </Caption>
    </ArticleWrapper>
  );
}
