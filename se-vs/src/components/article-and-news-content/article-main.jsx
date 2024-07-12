import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import { useMediaQuery } from "react-responsive";
import NavBarMobile from "../Header/NavBarMobile";
import SearchBar from "./searchbar";
import SortButton from "./sortbutton";
import { articles } from "./article-data";

const ArticleMain = () => {
  const [isSortButtonOpen, setIsSortButtonOpen] = useState(false);
  const [articleList, setArticleList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedSort, setSelectedSort] = useState(null);
  const [allArticles, setAllArticles] = useState(articles);

  useEffect(() => {
    if (selectedSort === "ascending") {
      setAllArticles(articles.sort((a, b) => a.title.localeCompare(b.title)));
    } else if (selectedSort === "descending") {
      setAllArticles(articles.sort((a, b) => b.title.localeCompare(a.title)));
    } else if (selectedSort === "latest") {
      setAllArticles(articles.sort((a, b) => b.date - a.date));
    } else if (selectedSort === "oldest") {
      setAllArticles(articles.sort((a, b) => a.date - b.date));
    }
    setAllArticles(articles);
  }, [selectedSort, articles]);

  const toggleDropdown = () => {
    setIsSortButtonOpen(!isSortButtonOpen);
  };

  useEffect(() => {
    const filteredArticles = allArticles.filter((article) =>
      article.title
        .replace(/\s+/g, "")
        .toLowerCase()
        .includes(search.replace(/\s+/g, "").toLowerCase()),
    );
    setArticleList(filteredArticles);
  }, [search, selectedSort]);

  const isMediumScreen = useMediaQuery({ minWidth: 768 });

  const navigate = useNavigate();
  const openArticle = (id) => {
    navigate({
      pathname: "/articles",
      search: createSearchParams({ articleId: id }).toString(),
    });
  };

  const totalPage = Math.ceil(articles.length / 7);

  const paginate = (isForward) => {
    const nextEnd = endIndex + 7;
    const nextStart = startIndex + 7;
    if (
      isForward &&
      nextStart <= articles.length &&
      nextEnd <= articles.length &&
      endIndex !== articles.length
    ) {
      setStartIndex(startIndex + 7);
      setEndIndex(endIndex + 7);
      setCurrentPage(currentPage + 1);
    } else if (endIndex - startIndex < 7 && !isForward) {
      const diff = endIndex - startIndex;
      setStartIndex(startIndex - 7);
      setEndIndex(endIndex - diff);
      setCurrentPage(currentPage - 1);
    } else if (startIndex !== 0 && !isForward) {
      setStartIndex(startIndex - 7);
      setEndIndex(endIndex - 7);
      setCurrentPage(currentPage - 1);
    } else if (
      isForward &&
      nextEnd > articles.length &&
      endIndex !== articles.length
    ) {
      setStartIndex(startIndex + 7);
      setEndIndex(articles.length);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {!isMediumScreen && <NavBarMobile />}
      <div className="flex w-full flex-col">
        <div>
          <h1 className="mt-[5rem] pb-6 pt-16 text-center text-xl font-bold md:p-16 lg:mt-[2.5rem] lg:py-32 lg:text-5xl">
            News & Articles
          </h1>

          <div className="flex w-full justify-center">
            <SearchBar setSearch={setSearch} />
          </div>
          <div className="flex flex-row justify-between px-6 py-1 md:py-3 md:pl-20 lg:py-4">
            <div className="flex flex-row text-sm md:text-lg lg:px-36 lg:text-2xl">
              Showing Page
              <span className="mx-1 font-bold">
                &nbsp;{currentPage}
              </span> of <span className="mx-1 font-bold">{totalPage}</span>
            </div>
            <div className="flex gap-2 text-2xl md:pr-14 md:text-3xl lg:pr-52">
              <SortButton setSelectedSort={setSelectedSort} />
              <button
                className="flex h-7 w-10 items-center justify-center rounded-md bg-brand-gray transition-opacity hover:bg-black/30 md:h-10 md:w-16"
                onClick={() => {
                  paginate(false);
                }}
              >
                <PiArrowLeft />
              </button>
              <button
                className="flex h-7 w-10 items-center justify-center rounded-md bg-brand-gray transition-opacity hover:bg-black/30 md:h-10 md:w-16"
                onClick={() => {
                  paginate(true);
                }}
              >
                <PiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid*/}
      <div className="  grid grid-cols-2 gap-4   p-6 md:grid-cols-3 md:px-20 lg:px-52">
        {articleList.slice(startIndex, endIndex).map((article, index) => (
          <div
            className={`h-full w-full transform cursor-pointer overflow-hidden rounded-md bg-slate-600 shadow-md transition-transform delay-100 ease-linear hover:scale-105 ${
              index === 0
                ? "col-span-2 flex justify-evenly md:col-span-3"
                : "flex flex-col"
            }`}
            key={index}
            onClick={() => {
              openArticle(article.id);
            }}
          >
            <div className=" lg:flex lg:flex-col xl:p-8">
              <div className="flex-grow-1 flex h-40 w-40 p-2 md:h-48 md:w-48 lg:h-56 lg:w-60 xl:h-72 xl:w-96">
                <img
                  src={article.imageUrl}
                  alt="article-img"
                  className="w-full "
                />
              </div>
            </div>
            <div className="justify-center px-1 md:flex-row lg:flex lg:flex-col lg:gap-3 xl:p-8">
              <div className="pt-2 text-xs md:text-sm lg:text-base xl:text-lg">
                {article.date}
              </div>
              <div className="text-lg font-semibold md:text-xl lg:text-2xl xl:text-4xl">
                {article.title}
              </div>
              <div className="text-pretty text-xs md:text-sm lg:text-base xl:text-2xl">
                {article.articleBody.substring(0, 100)}...
              </div>
              <div className="flex py-2">
                <div className="text-xs md:text-sm lg:text-base">
                  {article.authorName}
                </div>
                <span className="px-2 md:px-3 lg:px-4 xl:px-5"></span>
                <div className="text-xs md:text-sm lg:text-base">
                  {article.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleMain;
