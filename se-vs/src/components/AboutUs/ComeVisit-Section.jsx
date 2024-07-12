import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Rectangle44 from "../../assets/Rectangle44.png";

function ComeVisitSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("come-visit-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(sectionTop < windowHeight);
      }
    };

    // Add event listener to track scroll
    window.addEventListener("scroll", handleScroll);
    // Call handleScroll once to check initial visibility
    handleScroll();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div
      id="come-visit-section"
      className="lg:w-cover mt-4 flex bg-black text-white"
    >
      {/* Container for image and text */}
      <motion.div
        className="flex"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ delay: 0.9 }}
      >
        {/* Image on the edge of the left side */}
        <img
          src={Rectangle44}
          alt="Your image alt text"
          className="b-4 m my-5 mr-4 mt-4 h-48 w-[15rem] self-start md:mr-8 md:mt-2 lg:mt-3.5 lg:h-[20rem] lg:w-[35rem] 2xl:h-auto 2xl:w-[54rem]"
        />

        <div className="flex flex-col justify-between lg:ml-[5rem] lg:mt-9 2xl:ml-32">
          <div>
            <div className="mt-2 py-1 text-left text-lg font-bold md:py-2 md:text-3xl lg:mt-5 2xl:text-6xl ">
              <br />
              Come Visit Us!
            </div>
            <div className="mt-0.1 text-xs md:text-left lg:my-[-0.2rem] lg:mt-4 lg:text-lg 2xl:text-2xl">
              Room 3H, 3rd Floor,
            </div>
            <div className="mt-0.1 text-xs md:text-left lg:my-[-0.2rem] lg:text-lg 2xl:text-2xl">
              Tan Yan Kee Student Center
            </div>
            <div className="mt-0.1 text-xs md:text-left lg:my-[-0.2rem] lg:text-lg 2xl:text-2xl">
              University of Santo Tomas
            </div>
            <div className="mt-0.1 text-xs md:text-left lg:my-[-0.2rem] lg:text-lg 2xl:text-2xl">
              Manila, Philippines
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ComeVisitSection;
