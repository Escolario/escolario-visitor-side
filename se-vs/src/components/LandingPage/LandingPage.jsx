import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import OrgLogo from "../../assets/org_logo.png";

import { motion } from "framer-motion";
import "./LandingPage.css";
import { useLocation } from "react-router-dom"; // Import useLocation hook

const LandingPage = () => {
  const location = useLocation();

  return (
    <div className="landing-body scrollable-fixed bg-black">
      <div className="landing-main-div flex flex-row justify-around gap-10 ">
        {/* First half (hidden on small screens, shown on medium screens and up) */}
        <div className="overlay-black absolute left-0 top-0 z-10 h-full  w-[50%] md:rounded-r-[15rem] xl:block"></div>
        <motion.div
          className="landing-page-bg left-0 top-0 z-50 hidden h-full w-[50%] justify-center   object-cover  py-[5rem] text-center leading-[60px] md:block xl:flex xl:flex-col"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
            className="text-[40px] font-bold text-white "
          >
            WELCOME TO
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
            className="mb-[40px] bg-gradient-text bg-clip-text text-[46px] font-bold text-transparent xl:text-[56px]"
          >
            ESCOLARIO
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
            className="text-[28px] leading-[36px] text-white xl:text-[36px] xl:leading-[44px]"
          >
            The Scholars' Official
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
            className="  text-[28px] leading-[36px] text-white xl:text-[36px] xl:leading-[44px] "
          >
            News Article Platform
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
            className="   whitespace-nowrap text-white  md:mt-[12rem]  md:text-[15px] lg:mt-[2rem] xl:mt-[13rem]"
          >
            Founded by
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
            className="mb-[-2rem] mt-[-2rem] bg-gradient-text  bg-clip-text text-[18px] font-semibold text-transparent xl:text-[21px]"
          >
            UST-Becarios de Santo Tomas
          </motion.h1>
        </motion.div>

        <div className="right-0 top-0 z-10 flex  w-[100%] items-center justify-center bg-black  md:w-[50%]"></div>
        <div className="absolute right-0 top-8 z-50  flex h-full w-[100%] flex-col items-center bg-black    px-[7rem]  md:w-[50%] xl:mt-10">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            src={OrgLogo}
            className="my-2  w-32 md:w-36  "
          />
          <motion.h1
            initial={{ opacity: 0, x: 130 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            className=" items-center whitespace-nowrap  text-center text-[24px] font-bold tracking-wider text-white md:hidden"
          >
            WELCOME TO
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            className="text-gradient  mb-2 whitespace-normal bg-clip-text text-center text-[22px] font-bold text-transparent md:hidden xl:text-[56px]"
          >
            ESCOLARIO
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            className="  mt-4 hidden  text-center  text-white  md:mx-[-2rem] md:block md:text-[12px] lg:text-[15px]  xl:mx-[-0.75rem]  xl:text-[16px]"
          >
            Founded in 1994,{" "}
            <span className="text-gradient bg-clip-text font-bold text-transparent md:text-[12px] lg:text-[15px]  xl:text-[22px]">
              UST-Becarios de Santo Tomas{" "}
            </span>{" "}
            is the premier scholars association of the University of Santo
            Tomas, duly recognized by the university, under the guidance of the
            Office for Student Affairs.{" "}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            className=" whitespace-nowrap text-[14px] font-bold text-white md:hidden"
          >
            The Premier News Article Platform
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            className=" mt-4 whitespace-nowrap text-[14px] font-bold text-white md:hidden"
          >
            Founded by
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            className=" text-gradient mb-[-2rem] whitespace-nowrap bg-clip-text text-center text-[15px] font-bold text-transparent md:hidden xl:text-[24px]"
          >
            UST - Becarios de Santo Tomas
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            className="  mt-16 hidden whitespace-nowrap text-[20px] text-white md:mt-[3rem] md:block lg:mt-12 xl:mt-[2rem] xl:text-[22px]"
          >
            Navigate Through Our Platform
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            className=" landing-grid mt-10 grid-cols-2 grid-rows-3 items-center justify-center gap-x-[4rem] gap-y-4 md:mt-[1rem] md:gap-x-[1.2rem] lg:mt-2 lg:gap-x-[2rem] lg:gap-y-4 xl:gap-x-[1.2rem] xl:gap-y-[1.5rem]"
          >
            <Link to="/home">
              <button className="glow-button w-[6rem] lg:w-[7rem] xl:h-[2.5rem] xl:w-[12rem] xl:text-[16px]">
                HOME
              </button>
            </Link>
            <Link to="/articles-main">
              <button className="glow-button w-[6rem] lg:w-[7rem] xl:h-[2.5rem] xl:w-[12rem] xl:text-[16px]">
                ARTICLES
              </button>
            </Link>
            <Link to="/about-us">
              <button className="glow-button w-[6rem] whitespace-nowrap lg:w-[7rem] xl:h-[2.5rem] xl:w-[12rem]  xl:text-[16px] ">
                ABOUT US
              </button>
            </Link>
            <Link to="/projects">
              <button className="glow-button w-[6rem]  lg:w-[7rem] xl:h-[2.5rem] xl:w-[12rem] xl:text-[16px] ">
                PROJECTS
              </button>
            </Link>
            <Link to="/developers">
              <button className="glow-button  w-[6rem] lg:w-[7rem] xl:h-[2.5rem] xl:w-[12rem] xl:text-[16px]  ">
                DEVELOPERS
              </button>
            </Link>
            <Link to="/faqs">
              <button className="glow-button  w-[6rem] lg:w-[7rem] xl:h-[2.5rem] xl:w-[12rem] xl:text-[16px]  ">
                FAQs
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            className="landing-footer  landing-grid-cols-2 gap-x-15 md:gap-x-15 md:gap-x- mr-[5rem] mt-32 flex text-white md:mr-[2rem] lg:ml-[5rem] "
          >
            <div className="landing-grid-item flex flex-col items-center">
              <h1 className=" mb-4 mt-[-5rem]  whitespace-nowrap md:mt-[-5rem] lg:ml-6 lg:mt-[-6rem] xl:text-[20px]">
                Our Socials
              </h1>
              <div className="social-icons text-linear-gradient flex w-3/4   items-start gap-x-4 bg-clip-text text-xl text-brand-yellow  md:text-3xl lg:text-3xl xl:h-4  ">
                <Link
                  to="https://www.facebook.com/ustbecarios"
                  target="_blank "
                >
                  <FaFacebook />
                </Link>
                <Link
                  to="https://www.instagram.com/ustbecarios/"
                  target="_blank"
                >
                  {" "}
                  <FaInstagram />
                </Link>
                <Link to="https://twitter.com/ustbecarios" target="_blank">
                  <FaXTwitter />
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
              className="landing-grid-item flex flex-col items-center md:mr-[3rem] lg:mr-[5rem]"
            >
              <h1 className="mb-4 mt-[-5rem] whitespace-nowrap md:mt-[-5rem] lg:mb-2 lg:mt-[-6rem] xl:text-[20px]">
                Contact Us
              </h1>
              <h3 className=" text-[12px] lg:text-[12px] xl:text-[15px]">
                becarios.uso@ust.edu.ph
              </h3>
              <h1 className="whitespace-nowrap text-[9px]  xl:text-[15px]">
                Room 3H, 3rd Floor,
              </h1>
              <h1 className="whitespace-nowrap text-[9px]  xl:text-[15px]">
                Tan Yan Kee Student Center
              </h1>
              <h1 className="whitespace-nowrap text-[9px]  xl:text-[15px]">
                University of Santo Tomas{" "}
              </h1>
              <h1 className="whitespace-nowrap text-[9px] xl:text-[15px]">
                Manila, Philippines{" "}
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
