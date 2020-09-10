import React, { useContext, useState, useEffect } from 'react';
import Article from './Article';
import { Context } from '../utils/api';
import styled from 'styled-components';

const MainWrapper = styled.main`
  display: flex;
`;

export default function Main() {
  const { articles } = useContext(Context);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (articles) {
      setLoading(true);
    }
  }, [articles]);

  if (!articles) return null;

  return (
    <main
      style={{ display: loading ? 'block' : 'none' }}
      className="article-grid"
    >
      {articles.map((article, index) => {
        return <Article key={index} article={article} />;
      })}
    </main>
  );
}
