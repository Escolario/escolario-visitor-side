import { useState } from "react";
import { Typography, Card } from "@material-tailwind/react";
import { Images } from "./GalleryImage";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useMediaQuery } from "react-responsive";

const GalleryProjects = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1279 });

  const [startIndex, setStartIndex] = useState(0);
  const numCards = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  const handlePrevClick = () => {
    setStartIndex(Math.max(startIndex - 1, 0));
  };

  const handleNextClick = () => {
    setStartIndex(Math.min(startIndex + 1, Images.length - numCards));
  };

  return (
    <div className="bg-black text-white">
      <Typography className="font-['Archivo] ml-6 mt-6 flex items-start text-xl font-bold md:mb-4 md:ml-16 md:mt-8 md:text-3xl lg:mx-[13rem] lg:my-4 lg:pt-10 xl:text-5xl">
        Our Gallery
      </Typography>
      <div className="carousel-container relative md:mx-[4rem] lg:mx-[8rem]">
        <div className="card-container custom-ellipsis flex h-auto flex-row flex-wrap justify-center transition-all lg:my-2 lg:h-[39rem]">
          {Images.slice(startIndex, startIndex + numCards).map(
            (image, index) => (
              <Card
                key={index}
                className="m-2 flex h-[27rem] w-[90%] flex-col bg-zinc-800  transition-all md:w-[45%] lg:mt-4 lg:h-[35rem] lg:w-[30%] xl:w-[30%]"
                style={{
                  transitionDuration: "0.3s",
                  transitionTimingFunction: "ease-out",
                  transitionProperty: "transform opacity",
                }}
              >
                <img
                  src={image.imageUrl}
                  className="h-[22rem] w-full object-cover transition-all xl:h-[28rem]"
                  alt={image.caption}
                  style={{
                    transitionDuration: "0.3s",
                    transitionTimingFunction: "ease-out",
                    transitionProperty: "transform opacity",
                  }}
                />
                <Typography className="custom-ellipsis overflow-hidden whitespace-normal p-1  transition-all md:p-2 lg:text-xl">
                  {image.caption}
                </Typography>
              </Card>
            ),
          )}
          {startIndex > 0 && (
            <button
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2 text-slate-600 hover:bg-slate-300"
              onClick={handlePrevClick}
            >
              <ChevronLeft />
            </button>
          )}
          {startIndex < Images.length - numCards && (
            <button
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2 text-slate-600 hover:bg-slate-300"
              onClick={handleNextClick}
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryProjects;
