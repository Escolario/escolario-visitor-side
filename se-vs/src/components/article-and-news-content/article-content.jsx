import { useSearchParams } from "react-router-dom";
import profile from "../../assets/profile.png";
import { articles } from "./article-data";
import { Link } from "react-router-dom";
import NavBarMobile from "../Header/NavBarMobile";

const ArticleContent = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("articleId");
  const article = articles.filter((a) => a.id == id)[0];
  console.log(article);

  return (
    <div>
      <NavBarMobile />
      <h1 className="   py-6 text-center text-xl font-bold md:p-16 md:text-3xl lg:py-32 lg:text-5xl">
        News & Articles
      </h1>
      {/* Article Title */}
      <div>
        <div className=" pb-1 pl-6 pr-6 pt-6 text-2xl font-bold md:px-20 md:text-3xl lg:px-52 lg:pb-4 lg:text-5xl">
          {article.title}
        </div>
        {/* Date and time */}
        <div className="flex">
          <div className="flex pl-6 text-xs  md:pl-20 md:text-sm lg:pl-52 lg:text-lg">
            January 24, 2024
          </div>
          <div className=" flex flex-col pl-2 text-xs md:text-sm lg:text-lg">
            9:12 PM
          </div>
        </div>
        {/* Image */}
        <div className="  p-6  md:px-20 lg:px-52">
          <img
            src={article.imageUrl}
            className="w-7/12"
            alt="article-image "
          ></img>
        </div>

        {/* caption */}
        <div>
          <div className=" p-6 pt-1 text-xs italic md:px-20 lg:h-72 lg:justify-center lg:px-52 lg:pt-2 lg:text-lg">
            Photo by Karen Smith. Lorem ipsum dolor sit amet consectetur ac id
            massa sit amet.
          </div>
        </div>
        {/* Body */}
        <div className="p-6 text-sm md:px-20 md:text-base  lg:px-52 lg:text-2xl">
          <div>{article.articleBody}</div>
        </div>

        {/* Author */}
        <div className=" p-6 text-white md:px-20 lg:px-52">
          <div className="flex rounded-md bg-black p-6 pb-3 pl-4 pt-3 ">
            <div>
              <img
                src={profile}
                className="h-12 w-12 pt-1 md:h-16 md:w-16 lg:h-20 lg:w-20"
              ></img>
            </div>
            <div className="flex flex-col pl-3">
              <div className="text-xs md:text-sm lg:text-lg">
                Written and Publish by
              </div>
              <div className="text-sm font-semibold md:text-base lg:text-xl">
                Hannah Yu
              </div>
              <div className="text-xs md:text-sm lg:text-lg">
                Organization Position
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className=" p-6 pt-20 text-center text-white lg:p-20 lg:pt-28">
          <Link to="/article-main">
            <button
              className="
           rounded-md bg-blue-button p-3 pb-2 pt-2 text-center text-base md:text-xl lg:px-24 lg:py-4 lg:text-3xl"
            >
              Back to News & Articles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
