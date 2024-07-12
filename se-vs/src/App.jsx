import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ArticleSoloView from "./components/pages/article-solo-view";
import ArticleMainView from "./components/pages/article-main-view";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/pages/Home";
import FAQs from "./components/FAQs/FAQs";
import AboutUs from "./components/AboutUs/AboutUs-Main";
import Projects from "../src/components/Projects/Projects";
import NavBar from "./components/Header/Navbar";
import NavBarMobile from "./components/Header/NavBarMobile";
import Developers from "./components/pages/AboutDevelopers";

function App() {
  const location = useLocation();
  const currentUrl = location.pathname;

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const updateView = () => {
    setIsMobileView(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateView);
    return () => {
      window.removeEventListener("resize", updateView);
    };
  }, []);

  return (
    <div>
      {/* Show Navbar for md and above */}
      {!isMobileView && currentUrl !== "/" && <NavBar />}

      {/* Show NavbarMobile for below md */}
      {isMobileView && currentUrl !== "/" && <NavBarMobile />}

      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articles-main" element={<ArticleMainView />} />
        <Route path="/articles/:id" element={<ArticleSoloView />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/developers" element={<Developers /> } />
      </Routes>
    </div>
  );
}

export default App;
