import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { NYT_API } from './utils/api.js';

function App() {
  const [topic, setTopic] = useState('');
  const [articles, setArticles] = useState('');
  console.log(articles);

  useEffect(() => {
    if (topic) {
      NYT_API(topic).then(res => {
        setArticles(res);
      });
    }
  }, [topic]);

  return (
    <div className="App">
      <Header topic={topic} setTopic={setTopic} />
      <Main articles={articles} />
    </div>
  );
}

export default App;
