import React, { useState, useEffect, useContext } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { Context } from './utils/api';

function App() {
  const { NYT_API } = useContext(Context);
  console.log(NYT_API);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
