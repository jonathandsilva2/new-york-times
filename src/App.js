import React, { useState } from 'react';
import styled from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [articles, setArticles] = useState(null);

  return (
    <AppWrapper>
      <Header articles={articles} setArticles={setArticles} />
      <Main articles={articles} />
      <Footer />
    </AppWrapper>
  );
}

export default App;
