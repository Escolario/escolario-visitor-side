import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { article } from "./article-data";

const HomeArticleFetch = () => {
  const [article, setArticle] = useState({});

  return (
    <div className="container mx-auto flex  h-fit  flex-col  ">
      {article.title}
    </div>
  );
};
export default HomeArticleFetch;
