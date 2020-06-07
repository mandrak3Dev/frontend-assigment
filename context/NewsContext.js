import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const NewsContext = createContext();

const NewsProvider = (props) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const url = "/static/assets/article.json";
      const response = await axios(url);
      setNews(response.data);
    };
    getNews();
  }, []);

  return (
    <NewsContext.Provider
      value={{
        news
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
