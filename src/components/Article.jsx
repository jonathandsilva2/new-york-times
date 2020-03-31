import React from 'react';
import styled from 'styled-components';

const ArticlesWrapper = styled.article`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  height: 400px;
  width: 25%;
  display: flex;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0;
  float: left;
  background-color: red;
`;

const Caption = styled.p`
  font-size: 15px;
`;

export default function Article({ article }) {
  console.log('rendered', article);
  return (
    <ArticlesWrapper image={article.image.url}>
      <a style={{ overflow: 'hidden' }} href={article.url} target="_blank">
        <Caption>{article.caption}</Caption>
      </a>
    </ArticlesWrapper>
  );
}
