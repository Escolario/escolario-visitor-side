import React, { useState, useEffect } from "react";
import Navbar from "../Header/Navbar";
import ArticleMain2 from "../article-and-news-content/ArticleMain2";
import Footer from "../footer/footer";
import ArticleSoloView from "./article-solo-view"; // Corrected import path
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { fetchArticleID } from "../../firebase/ArticlesAPI"; // Import fetchArticleID function

const ArticleMainView = () => {
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [articleIds, setArticleIds] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch article IDs when the component mounts
    async function fetchIds() {
      try {
        const ids = await fetchArticleID();
        setArticleIds(ids);
      } catch (error) {
        console.error("Error fetching article IDs:", error);
      }
    }
    fetchIds();
  }, []);

  const handleArticleSelect = (articleId) => {
    setSelectedArticleId(articleId);
    // Navigate to ArticleSoloView with articleId
    navigate(`/articles/${articleId}`); // Using useNavigate hook
  };

  return (
    <div>
      <ArticleSoloView articleId={selectedArticleId} />
      <ArticleMain2
        articleIds={articleIds}
        onSelectArticle={handleArticleSelect}
      />
      <Footer />
    </div>
  );
};

export default ArticleMainView;
