import axios from 'axios';

export const NYT_API = async topic => {
  const key = 'uKKnzk0uk0UArBEk8qp1PDWNW3kZfPFt';
  let newArticles;
  await axios
    .get(
      `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${key}`,
    )
    .then(res => {
      let articles = [];
      for (let i = 0; res.data.results.length - 1; i++) {
        // creates an array of up to 12 articles that contain an image

        if (res.data.results[i].multimedia) {
          articles.push(res.data.results[i]);
        }

        if (articles.length === 12) {
          break;
        }
      }

      newArticles = articles.reduce((acc, article) => {
        acc.push({
          title: article.title,
          caption: article.abstract,
          image: article.multimedia[0],
          url: article.short_url,
        });
        return acc;
      }, []);
    });
  return newArticles;
};
