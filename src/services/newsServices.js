import axios from 'axios';

const API_KEY = '49139bd361594812a1dc0210ca5147a4';

const newsService = {
  getNews: async () => {
    try {
      const url = `https://newsapi.org/v2/everything?q=Corinthians&language=pt&apiKey=${API_KEY}&pageSize=100`;
      const response = await axios.get(url);
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  },
};

export default newsService;
