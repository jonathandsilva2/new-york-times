import React from 'react';

import logo from '../assets/images/ajax-loader.gif';

export default function Loading() {
  return (
    <div>
      <img src={logo} alt="loading..." height="200px" />
    </div>
  );
}
