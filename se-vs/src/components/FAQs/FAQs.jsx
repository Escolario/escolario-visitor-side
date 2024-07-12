import React, { useState, useEffect } from "react";
import Navbar from "../Header/Navbar";
import NavBarMobile from "../Header/NavBarMobile";
import FAQsAccordionText from "./FAQs-AccordionText";
import FAQsAccordionDropDown from "./FAQs-AccordionDropDown";
import Banner from "../Banner/Banner-Section";
import Footer from "../footer/footer";

function FAQs() {
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
      <div className="flex w-full flex-col">
        <FAQsAccordionText />
        <FAQsAccordionDropDown />
        <Banner />
        <Footer />
      </div>
    </div>
  );
}

export default FAQs;
