import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Typography, Card } from "@material-tailwind/react";
import { Images } from "./GalleryImage";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useMediaQuery } from "react-responsive";
import Navbar from "../Header/Navbar";
import NavBarMobile from "../Header/NavBarMobile";
import UpperSection from "./UpperSection";
import MissionVisionSection from "./MissionVision-Section";
import MembershipSection from "./Membership-Section";
import BannerSection from "./Banner-Section";
import Footer from "../footer/footer";
import GalleryProjects from "./GalleryProjects";
import ButilSection from "./Butil-Section";
import BestSection from "./BestSection";

const Projects = () => {
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
    <div>
      {/* {isSmallScreen && <NavBarMobile />}
      {!isSmallScreen && <Navbar />} */}
      <div
        className="flex w-full flex-col"
      >
        <div className='flex flex-col sm:gap-[2rem] gap-[12rem] mt-20'>
          <UpperSection />
          <MissionVisionSection />
          <GalleryProjects />
        </div>
        <BestSection />
        <ButilSection />
        <MembershipSection />
        <BannerSection />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
