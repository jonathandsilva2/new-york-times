import axios from 'axios';
import React from 'react';

const articlesContext = React.createContext();

function ContextProvider({ children }) {
  const NYT_API = async (topic) => {
    const key = 'uKKnzk0uk0UArBEk8qp1PDWNW3kZfPFt';
    const url = `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${key}`;

    let articles = [];
    let res = await axios.get(url);

    for (let i = 0; i < res.data.results.length; i++) {
      if (res.data.results[i].multimedia) {
        articles.push(res.data.results[i]);
      }

      if (articles.length === 12) {
        break;
      }
    }

    const newArticles = articles.reduce((acc, article) => {
      acc.push({
        title: article.title,
        caption: article.abstract,
        image: article.multimedia[0],
        url: article.short_url,
      });
      return acc;
    }, []);
    return newArticles;
  };
  return (
    <articlesContext.Provider
      value={{
        NYT_API,
      }}
    >
      {children}
    </articlesContext.Provider>
  );
}

export { ContextProvider, articlesContext };
