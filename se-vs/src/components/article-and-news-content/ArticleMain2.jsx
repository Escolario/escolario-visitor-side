import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import NavBarMobile from "../Header/NavBarMobile";
import SearchBar from "./searchbar";
import SortButton from "./sortbutton";
import { articles } from "./article-data";
import {
  fetchHomeArticles,
  fetchPostedArticles,
} from "../../firebase/ArticlesAPI";

function ArticleMain2({ onSelectArticle }) {
  const navigate = useNavigate();

  const [isSortButtonOpen, setIsSortButtonOpen] = useState(false);
  const [articleList, setArticleList] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedSort, setSelectedSort] = useState(null);
  const [allArticles, setAllArticles] = useState();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    console.log("Articles fetched");
    async function fetchArticles() {
      const response = await fetchHomeArticles();
      setAllArticles(response);
      setArticleList(response);
      setArticles(response);
      console.log(response);
      setIsLoading(false);
    }

    fetchArticles();
  }, []);

  const toggleDropdown = () => {
    setIsSortButtonOpen(!isSortButtonOpen);
  };

  useEffect(() => {
    if (!!allArticles) {
      const filteredArticles = allArticles.filter((article) =>
        article.data.data.title
          .replace(/\s+/g, "")
          .toLowerCase()
          .includes(search.replace(/\s+/g, "").toLowerCase()),
      );
      console.log(filteredArticles);
      setArticleList(filteredArticles);
    }
  }, [search, selectedSort]);

  const isMediumScreen = useMediaQuery({ minWidth: 968 });

  const openArticle = (id) => {
    navigate({
      pathname: `/articles/${id}`,
      //search: createSearchParams({ id: id }).toString(),
    });
  };

  const totalPage = Math.ceil(articles.length / 9);

  const paginate = (isForward) => {
    const nextEnd = endIndex + 9;
    const nextStart = startIndex + 9;
    if (
      isForward &&
      nextStart <= articles.length &&
      nextEnd <= articles.length &&
      endIndex !== articles.length
    ) {
      setStartIndex(startIndex + 9);
      setEndIndex(endIndex + 9);
      setCurrentPage(currentPage + 1);
    } else if (endIndex - startIndex < 9 && !isForward) {
      const diff = endIndex - startIndex;
      setStartIndex(startIndex - 9);
      setEndIndex(endIndex - diff);
      setCurrentPage(currentPage - 1);
    } else if (startIndex !== 0 && !isForward) {
      setStartIndex(startIndex - 9);
      setEndIndex(endIndex - 9);
      setCurrentPage(currentPage - 1);
    } else if (
      isForward &&
      nextEnd > articles.length &&
      endIndex !== articles.length
    ) {
      setStartIndex(startIndex + 9);
      setEndIndex(articles.length);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="flex w-full flex-col">
        <div>
          <h1 className="mt-[9rem] text-center text-[1.5rem] font-bold md:mb-[1rem] md:mt-[3rem] lg:text-5xl">
            News & Articles
          </h1>
          <div className="flex justify-center">
            <SearchBar setSearch={setSearch} />
          </div>
          <div className="2xl:mx-36 2xl:my-4">
            <div className="flex flex-row justify-between px-6 py-1 md:py-3 md:pl-20 lg:py-4">
              <div className="flex flex-row text-sm md:text-lg lg:px-36 lg:text-2xl">
                Showing Page
                <span className="mx-1 font-bold">
                  &nbsp;{currentPage}
                </span> of <span className="mx-1 font-bold">{totalPage}</span>
              </div>
              <div className="flex gap-2 text-2xl md:pr-14 md:text-3xl lg:pr-52">
                <button
                  className="flex h-9 w-10 items-center justify-center rounded-md bg-brand-gray transition-opacity hover:bg-black/30 md:h-10 md:w-16"
                  onClick={() => {
                    paginate(false);
                  }}
                >
                  <PiArrowLeft />
                </button>
                <button
                  className="flex h-9 w-10 items-center justify-center rounded-md bg-brand-gray transition-opacity hover:bg-black/30 md:h-10 md:w-16"
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
      </div>

      <div className="  mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 md:px-20 lg:px-52 xl:max-w-[1600px]">
        {isLoading && (
          <>
            <div className="skeleton col-span-1 h-[27rem]"></div>
            <div className="skeleton col-span-1 h-[27rem]"></div>
            <div className="skeleton col-span-1 h-[27rem]"></div>
          </>
        )}
        {articleList.slice(startIndex, endIndex).map((article, index) => (
          <div
            className={`flex h-full w-full transform cursor-pointer flex-col overflow-hidden rounded-md bg-[#ECECEC] shadow-md transition-transform delay-100 ease-linear hover:scale-105`}
            key={index}
            onClick={() => {
              openArticle(article.id);
            }}
          >
            <div className=" lg:flex lg:flex-col xl:p-1">
              <div className="mb-2 flex h-full w-full flex-col justify-center p-2">
                <img
                  src={article.data.data.image}
                  alt="article-img"
                  className="mt-1 h-[200px] w-full rounded-lg p-1"
                />
              </div>
            </div>
            <div className="justify-center px-3 pb-5 md:flex-row lg:flex lg:flex-col lg:gap-3 xl:px-5">
              <div className="pt-2 text-xs md:text-sm lg:text-base xl:text-lg">
                {article.data.datePosted}
              </div>
              <div className="text-lg font-semibold md:text-[1rem] lg:text-[1.25rem] xl:text-[1.35rem]">
                {article.data.data.title}
              </div>
              <div className="text-pretty text-xs md:text-sm lg:text-[1rem] xl:text-[1.05rem]">
                {article.data.parsedBody.length <= 60
                  ? article.data.parsedBody
                  : article.data.parsedBody.slice(0, 60) + "..."}
              </div>
              <div className="flex py-2">
                <div className="text-xs md:text-sm lg:text-base">
                  {article.data.author}
                </div>
                <span className="px-2 md:px-3 lg:px-4 xl:px-5"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ArticleMain2;
