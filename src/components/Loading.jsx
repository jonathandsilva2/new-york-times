import React from 'react';
import logo from '../assets/images/ajax-loader.gif';

export default function Loading() {
  console.log('loading render');
  return (
    <div>
      <img src={logo} alt="loading..." />
    </div>
  );
}
