import React, { useState } from 'react';
import axios from 'axios';

function Search(props) {
  console.log("props", props);
  const { news, setNews } = props;
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("handle", searchQuery);
    if (searchQuery) {
      axios
        .get(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=d11ce5fbb5754049834b33b0fe08dbb9`)
        .then((res) => {
          console.log(res.data);
          setNews(res.data.articles);
          setSearchQuery("");
        })
        .catch((error) => {
          console.error("Error fetching news:", error);
        });
    }
    console.log("searchQuery:", searchQuery);
  };

  console.log("news", news);
  
  return (
    <div className='header'>
      <h2>WorldNews</h2>
    <form className="mb-3" onSubmit={handleSearch}>
      <input
        className="search_bar"
        type="text"
        placeholder="Search news..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn">Search</button>
    </form>
    </div>
  );
}

export default Search;
