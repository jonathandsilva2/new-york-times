import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { articlesContext } from './utils/api';

const AppWrapper = styled.div``;

function App() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);

  const { NYT_API } = useContext(articlesContext);
  useEffect(() => {
    async function getArticles() {
      if (topic) {
        setLoading(true);
        await NYT_API(topic);
        setLoading(false);
      }
    }
    getArticles();
  }, [topic, NYT_API]);

  return (
    <AppWrapper>
      <Header topic={topic} setTopic={setTopic} />
      <Main loading={loading} />
      <Footer />
    </AppWrapper>
  );
}

export default App;
