import React, { useContext } from 'react';
import Article from './Article';
import { Context } from '../utils/api';
import styled from 'styled-components';

const MainWrapper = styled.main`
  display: flex;
`;

export default function Main() {
  const { articles } = useContext(Context);

  if (!articles) return <div></div>;
  return (
    <main style={{ position: 'relative' }} className="article-grid">
      {articles.map(article => {
        return <Article article={article} />;
      })}
    </main>
  );
}
