import axios from 'axios';
import React, { useState } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [articles, setArticles] = useState([]);

  const NYT_API = async topic => {
    const key = 'uKKnzk0uk0UArBEk8qp1PDWNW3kZfPFt';
    let articles1 = [];
    await axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${key}`,
      )
      .then(res => {
        console.log(topic, res);
        for (let i = 0; i < res.data.results.length; i++) {
          if (res.data.results[i].multimedia) {
            articles1.push(res.data.results[i]);
          }
          if (articles1.length === 12) {
            break;
          }
        }

        const newArticles = articles1.reduce((acc, article) => {
          acc.push({
            title: article.title,
            caption: article.abstract,
            image: article.multimedia[0],
            url: article.short_url,
          });
          return acc;
        }, []);

        setArticles(newArticles);
      });
  };
  return (
    <Context.Provider
      value={{
        articles,
        NYT_API,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
