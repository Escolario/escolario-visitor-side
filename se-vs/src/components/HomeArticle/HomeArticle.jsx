import React from "react";
import { Card, CardHeader, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom"; // Import Link from React Router

const HomeArticle = ({ homeArticles }) => {
  return (
    <div className="container mx-auto flex h-fit flex-col">
      <div className="  px-2 lg:px-44">
        <h3 className="my-4  text-[20px] font-bold tracking-wider  md:text-3xl lg:ml-0 xl:text-4xl">
          News & Articles
        </h3>
        <div className="grid-cols-2 justify-center gap-x-3 gap-y-4   lg:grid lg:grid-cols-2 lg:gap-x-6">
          {homeArticles.map((article, index) => (
            <div
              key={index}
              className="flex h-full transform cursor-pointer flex-col overflow-hidden rounded-md bg-slate-50 shadow-md transition-transform delay-100 ease-linear hover:scale-105"
            >
              <Link
                to={`/articles/${article.id}`}
                className="h-full w-full p-2 lg:my-2 "
              >
                <Card
                  key={index}
                  className="custom-ellipsis mb-2 mr-1 h-[20rem]  w-auto rounded-[5px] shadow-md md:h-[24rem] lg:mx-10 lg:mb-4 lg:h-[28rem]  "
                >
                  <CardHeader className="relative my-2 flex h-[10rem] items-center md:h-[18rem] lg:h-[24rem] ">
                    <img
                      src={article.data.data.image}
                      className="h-full w-full rounded-lg object-cover shadow-md"
                      alt="Article Image"
                    />
                  </CardHeader>

                  <div className="mx-4 mt-2  text-[10px] md:text-[0.80rem] lg:mx-6 xl:text-lg">
                    {article.data.datePosted}
                  </div>

                  <div className=" mx-4 mt-2 text-base font-bold md:mt-2 md:text-[25px] lg:mx-6 xl:text-3xl">
                    {article.data.data.title}
                  </div>
                  <div className="mx-4 mt-6 text-[10px]  xl:text-lg">
                    <span className="mt-4 flex w-10  whitespace-nowrap text-[10px]  md:mt-12  md:w-[10rem] md:text-[12px] xl:text-lg">
                      <h1 className="mb-2 mr-1  md:mr-2">Created by: </h1>
                      {article.data.data.author}
                    </span>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeArticle;
