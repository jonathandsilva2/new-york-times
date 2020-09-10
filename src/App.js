import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import { Context } from './utils/api';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'black', height: '1000px' }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
