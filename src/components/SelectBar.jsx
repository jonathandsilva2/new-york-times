import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SelectBar({ topic, setTopic }) {
  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        style={{ backgroundColor: 'red', width: 150 }}
        defaultValue="topic"
        value={topic}
        onChange={handleTopicChange}
        variant="outlined"
      >
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
    </FormControl>
  );
}
