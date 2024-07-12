import React from "react";
import { Link } from "react-router-dom";
import imageBanner from "../../assets/banner.png";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();

  return (
    <div className="relative h-[12rem] bg-blue-500 md:h-[20rem] lg:h-[27rem]">
      <img
        src={imageBanner}
        className="absolute inset-0 h-[12rem] w-full object-cover md:h-[20rem] lg:h-[27rem]"
        alt="banner"
      />
      {/* Add alt attribute for the image */}
      <div className="absolute inset-0  flex flex-col items-start  justify-center  md:left-[5rem]  xl:left-[12rem] ">
        <h2 className="mb-2 ml-5 text-lg font-light  md:text-3xl lg:text-4xl ">
          Got Questions?
        </h2>
        <span className="mb-6 ml-5 text-xl font-bold  md:text-3xl lg:text-4xl">
          Feel free to{" "}
          <span className="text-gradient bg-clip-text text-transparent">
            reach out!
          </span>
        </span>
        <div className="flex ">
          <Link to="/contact">
            {/* Use Link component to navigate to the contact page */}
            <button className="text-gradient ml-5 mr-2 rounded-md px-2   py-2 text-white md:mr-4  md:w-[10rem] lg:w-[14rem] lg:text-lg">
              Contact Us
            </button>
          </Link>
          <Link to="/faqs">
            {/* Use Link component to navigate to the faqs page */}
            <button className="rounded-md bg-black px-4 py-2 text-white  md:w-[8rem] lg:text-lg">
              Visit FAQs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;