import React from "react";
import { useState , useEffect } from "react";
import Header from "./components/Header";
import newsService from "./services/newsServices";
import News from "./components/News";

function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const articles = await newsService.getNews();
        setNews(articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
  
    fetchNews();
  }, []);
  
  console.log(news)

  return (
    <div className="App">
          <Header />
          <News News={news}/>
    </div>
  );
};

export default App;
