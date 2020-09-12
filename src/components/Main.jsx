import React from 'react';

import Article from './Article';

export default function Main({ articles }) {
  if (articles === null) return null;

  return (
    <main>
      {articles.map((article, index) => {
        return <Article key={index} article={article} />;
      })}
    </main>
  );
}
