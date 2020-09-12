import React, { useState, useContext } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { articlesContext } from '../utils/api';

export default function SelectBar({ setArticles }) {
  const [topic, setTopic] = useState('');

  const { NYT_API } = useContext(articlesContext);

  const handleTopicChange = async (event) => {
    setTopic(event.target.value);
    const articles = await NYT_API(event.target.value);
    setArticles(articles);
  };
  return (
    <Select
      labelId="demo-simple-select-label"
      onChange={handleTopicChange}
      variant="outlined"
      value={topic}
      style={{ backgroundColor: 'white' }}
    >
      <InputLabel>Topics</InputLabel>
      <MenuItem value="arts">Arts</MenuItem>
      <MenuItem value="automobiles">Automobiles</MenuItem>
      <MenuItem value="books">Books</MenuItem>
      <MenuItem value="business">Business</MenuItem>
      <MenuItem value="fashion">Fashion</MenuItem>
      <MenuItem value="food">Food</MenuItem>
      <MenuItem value="health">Health</MenuItem>
      <MenuItem value="home">Home</MenuItem>
      <MenuItem value="insider">Insider</MenuItem>
      <MenuItem value="magazine">Magazine</MenuItem>
      <MenuItem value="movies">Movies</MenuItem>
      <MenuItem value="national">National</MenuItem>
      <MenuItem value="nyregion">NY Region</MenuItem>
      <MenuItem value="obituaries">Obituaries</MenuItem>
      <MenuItem value="opinion">Opinion</MenuItem>
      <MenuItem value="politics">Politics</MenuItem>
      <MenuItem value="realestate">Real Estate</MenuItem>
      <MenuItem value="science">Science</MenuItem>
      <MenuItem value="sports">Sports</MenuItem>
      <MenuItem value="sundayreview">Sunday Review</MenuItem>
      <MenuItem value="technology">Technology</MenuItem>
      <MenuItem value="theater">Theater</MenuItem>
      <MenuItem value="tmagazine">T Magazine</MenuItem>
      <MenuItem value="travel">Travel</MenuItem>
      <MenuItem value="upshot">Upshot</MenuItem>
      <MenuItem value="world">World</MenuItem>
    </Select>
  );
}
