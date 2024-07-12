import React, { useState, useEffect } from "react";
import "../../App.css";
import Navbar from "../../components/Header/Navbar";
import NavBarMobile from "../Header/NavBarMobile";
import HomeArticle from "../../components/HomeArticle/HomeArticle";
import HomeArticleButton from "../../components/HomeArticle/HomeArticleButton";
import Greeting from "../../components/Header/Greeting";
import Footer from "../footer/footer";
import { fetchHomeArticles } from "../../firebase/ArticlesAPI";
import ArticleSoloView from "./article-solo-view"; // Corrected import path
import HomeArticleFetch from "../HomeArticle/HomeArticleFetch";
import GalleryProjects from "../Projects/GalleryProjects";
import BannerSection from "../Projects/Banner-Section";

const Home = () => {
  const [homeArticles, setHomeArticles] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  // useEffect(() => {
  // Function to check if the screen size is medium (md) or above
  //   const checkScreenSize = () => {
  //     setIsMediumScreen(window.innerWidth >= 768); // 768px is the width for medium screens (md)
  //   };

  //   // Add event listener to window resize
  //   window.addEventListener("resize", checkScreenSize);

  //   // Call the function to check initial screen size
  //   checkScreenSize();

  //   // Cleanup
  //   return () => {
  //     window.removeEventListener("resize", checkScreenSize);
  //   };
  // }, []);

  useEffect(() => {
    async function fetchLatestArticles() {
      const limit = 4;
      const response = await fetchHomeArticles(limit);
      setHomeArticles(response);
      console.log("Articles Fetched\n", response);
    }

    fetchLatestArticles();
  }, []);
  const handleArticleSelect = (articleId) => {
    setSelectedArticleId(articleId);
    // Navigate to ArticleSoloView with articleId
    navigate(`/articles/${articleId}`); // Using useNavigate hook
  };

  return (
    <div>
      <div className="flex w-full flex-col">
        <Greeting />
        <HomeArticle
          homeArticles={homeArticles}
          // articleIds={articleIds}
          onSelectArticle={handleArticleSelect}
        />
        <ArticleSoloView articleId={selectedArticleId} />
        <HomeArticleButton />
        <GalleryProjects />
        <BannerSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
