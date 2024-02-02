import axios from 'axios';

const API_KEY = '49139bd361594812a1dc0210ca5147a4';
const BASE_URL = 'https://newsapi.org/v2';

const newsService = {
  getNews: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/everything`, {
        params: {
          q: 'Corinthians',
          language: 'pt',
          apiKey: API_KEY,
          pageSize: 100,
        },
      });

      return response.data.articles;
    } catch (error) {
      console.error('Error fetching news:', error.message);
      throw error;
    }
  },
};

export default newsService;
