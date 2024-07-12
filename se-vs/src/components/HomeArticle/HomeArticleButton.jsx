import { Link, useLocation } from "react-router-dom";

const HomeArticleButton = () => {
  const location = useLocation();

  return (
    <div className="my-4 flex h-auto justify-center md:my-2 lg:my-6">
      <Link
        to="/articles-main"
        className="h-auto w-[15rem] rounded-lg bg-brand-yellow p-2 text-center font-bold text-white shadow md:w-[10rem] lg:w-[15rem] lg:text-2xl xl:w-[24rem]"
      >
        See More
      </Link>
    </div>
  );
};

export default HomeArticleButton;
