import axios from "axios";
import React, { useState, useEffect } from "react";
import Search from "./Search";
import Newscard from "./Newscard";

function Fetching() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const storedNews = localStorage.getItem("news");
    if (storedNews) {
      setNews(JSON.parse(storedNews));
    } else {
      fetchTopHeadlines();
    }
  }, []);

  const fetchTopHeadlines = () => {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d11ce5fbb5754049834b33b0fe08dbb9")
      .then((res) => {
        console.log(res.data);
        setNews(res.data.articles);
        localStorage.setItem("news", JSON.stringify(res.data.articles));
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

  return (
    <div className="container my-5">
      <Search setNews={setNews} news={news} />
      {news.map((val) => (
        <Newscard val={val} key={val.title} />
      ))}
    </div>
  );
}

export default Fetching;
