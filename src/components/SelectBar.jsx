import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';

export default function SelectBar({ topic, setTopic }) {
  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  return (
    <select value={topic} onChange={handleTopicChange} style={{ minHeight: 0 }}>
      <option value="arts">Arts</option>
      <option value="automobiles">Automobiles</option>
      <option value="books">Books</option>
      <option value="business">Business</option>
      <option value="fashion">Fashion</option>
      <option value="food">Food</option>
      <option value="health">Health</option>
      <option value="home">Home</option>
      <option value="insider">Insider</option>
      <option value="magazine">Magazine</option>
      <option value="movies">Movies</option>
      <option value="national">National</option>
      <option value="nyregion">NY Region</option>
      <option value="obituaries">Obituaries</option>
      <option value="opinion">Opinion</option>
      <option value="politics">Politics</option>
      <option value="realestate">Real Estate</option>
      <option value="science">Science</option>
      <option value="sports">Sports</option>
      <option value="sundayreview">Sunday Review</option>
      <option value="technology">Technology</option>
      <option value="theater">Theater</option>
      <option value="tmagazine">T Magazine</option>
      <option value="travel">Travel</option>
      <option value="upshot">Upshot</option>
      <option value="world">World</option>
    </select>
  );
}
