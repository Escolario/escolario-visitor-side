import React, { useState, useEffect } from "react";
import Navbar from "../Header/Navbar";
import NavBarMobile from "../Header/NavBarMobile";
import UpperSection from "./Upper-Section";
import MissionVisionSection from "./MissionVision-Section";
import HistorySection from "./History-Section";
import AwardSection from "./Award-Section";
import OfficersSection from "./Officers-Section";
import ComeVisitSection from "./ComeVisit-Section";
import BannerSection from "../Projects/Banner-Section";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import HistoryTimeline from "./HistoryTimeline";

const AboutUsContent = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    // Function to check if the screen size is medium (md) or above
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 768); // 768px is the width for medium screens (md)
    };

    // Add event listener to window resize
    window.addEventListener("resize", checkScreenSize);

    // Call the function to check initial screen size
    checkScreenSize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div>
      {/* {isMediumScreen ? <Navbar /> : <NavBarMobile />} */}
      <div className="flex w-full flex-col">
        <div className='flex flex-col sm:gap-[6rem] mt-20'>
          <UpperSection />
          <div className='flex flex-col gap-[20rem] sm:gap-[10rem] lg:gap-[1rem]'>
            <MissionVisionSection />
            <HistoryTimeline />
          </div>
        </div>
        <AwardSection />
        <OfficersSection />
        <ComeVisitSection />
        <BannerSection />
        <Footer />
      </div>
    </div>
  );
};

export default AboutUsContent;
