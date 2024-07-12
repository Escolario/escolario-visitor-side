import { useEffect, useState } from "react";
import { fetchPostedArticles } from "../../firebase/ArticlesAPI";

function Sample() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log("hello jade");
    async function fetchArticles() {
      const response = await fetchPostedArticles();
      setArticles(response);
      console.log(response);
    }

    fetchArticles();
  }, []);
  return (
    <div>
      {articles.map((article, index) => (
        <h1 key={index}>{article.data.title}</h1>
      ))}
    </div>
  );
}

export default Sample;
