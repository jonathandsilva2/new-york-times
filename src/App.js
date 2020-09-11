import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { articlesContext } from './utils/api';

const AppWrapper = styled.div``;

function App() {
  const [articles, setArticles] = useState(null);

  const { NYT_API } = useContext(articlesContext);

  // useEffect(() => {
  //   async function getArticles() {
  //     {
  //       const newArticles = await NYT_API(topic);
  //       console.log(newArticles);
  //       setArticles(newArticles);
  //     }
  //   }
  //   if (topic) {
  //     getArticles();
  //   }
  // }, [topic, articles]);

  return (
    <AppWrapper>
      <Header articles={articles} setArticles={setArticles} />
      <Main articles={articles} />
      <Footer />
    </AppWrapper>
  );
}

export default App;
