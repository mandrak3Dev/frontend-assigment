import React, { useContext } from 'react';
import { NewsContext } from "../../context/NewsContext";

const News = () => {
    const { news } = useContext(NewsContext);
    console.log(news);
    return (
        <h1>{news.title}</h1>
    );
}
 
export default News;