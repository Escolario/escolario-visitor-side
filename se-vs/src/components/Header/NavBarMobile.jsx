import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { VscOrganization } from "react-icons/vsc";
import { GoChecklist } from "react-icons/go";
import { BsQuestionSquare, BsPersonWorkspace } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import OrgLogo from "../../assets/org_logo.png";

const NavBarMobile = () => {
  const [isOpen, setOpen] = useState(false);

  const closeMenuOnClick = () => {
    setOpen(false);
  };

  return (
    <div className="fixed z-50 w-[100%] rounded-b-xl bg-black lg:hidden">
      <div className="rounded-b-8 flex flex-row items-center justify-between p-6 ">
        <img src={OrgLogo} alt="" className="z-100 w-[150px]" />
        {/* <span className="-ml-[5rem] text-white text-xl font-semibold">
          Chara Rat
        </span> */}
        <Hamburger
          toggled={isOpen}
          size={32}
          toggle={setOpen}
          color="linear-gradient(10deg, #208ff9, #f2b23d)"
          label="Show menu"
          rounded
        />
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="rounded-10 left-0 right-0 top-[6\.15rem] flex flex-col items-center gap-5 py-[10rem] pt-9 text-[1rem] font-bold text-white md:text-[1.25rem] "
        >
          <NavLink to="/Home" onClick={closeMenuOnClick}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 + 1 / 10,
              }}
              className="becarios-gradient-outline grid grid-cols-2 items-center gap-5 border-4 px-[8.5rem] py-2"
            >
              <IoHomeOutline className="-ml-8 h-auto w-[40px]" />
              <p className="-ml-2 text-[14px]">HOME</p>
            </motion.button>
          </NavLink>
          <NavLink to="/articles-main" onClick={closeMenuOnClick}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3 + 1 / 10,
              }}
              className="dashboard border-gray rounded-10 becarios-gradient-outline grid grid-cols-2 items-center gap-5 border-4 px-[6.9rem] py-2"
            >
              <PiNewspaperClippingLight className="h-auto w-[40px]" />
              <p className="ml-[-0.6rem] text-[14px]">ARTICLES</p>
            </motion.button>
          </NavLink>
          <NavLink to="/about-us" onClick={closeMenuOnClick}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5 + 1 / 10,
              }}
              className="border-gray becarios-gradient-outline grid grid-cols-2 items-center gap-5 border-4 px-[6.6rem] py-2"
            >
              <VscOrganization className=" h-auto w-[40px]" />
              <p className="-ml-2 text-[14px]">ABOUT US</p>
            </motion.button>
          </NavLink>
          <NavLink to="/projects" onClick={closeMenuOnClick}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.7 + 1 / 10,
              }}
              className="dashboard border-gray rounded-10 becarios-gradient-outline grid grid-cols-2 items-center gap-5 border-4 px-[6.4rem] py-2"
            >
              <GoChecklist className=" h-auto w-[40px]" />
              <p className="-ml-2 text-[14px] font-semibold">PROJECTS</p>
            </motion.button>
          </NavLink>
          <NavLink to="/faqs" onClick={closeMenuOnClick}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.9 + 1 / 10,
              }}
              className="dashboard border-gray rounded-10 becarios-gradient-outline grid grid-cols-2 items-center gap-5 border-4 px-[8.7rem] py-2"
            >
              <BsQuestionSquare className="-ml-9 h-auto w-[40px]" />
              <p className="-ml-2 text-[14px] font-semibold">FAQS</p>
            </motion.button>
          </NavLink>
                    <NavLink to="/developers" onClick={closeMenuOnClick}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1 + 1 / 10,
              }}
              className="w-[3rem] dashboard border-gray rounded-10 becarios-gradient-outline grid grid-cols-2 items-center gap-5 border-4 px-[11.3rem] py-2"
            >
              <BsPersonWorkspace className="-ml-9 h-auto w-[40px]" />
              <p className="-ml-2 text-[14px] font-semibold">DEVELOPERS</p>
            </motion.button>
          </NavLink>
        </motion.div>
      )}
    </div>
  );
};

export default NavBarMobile;
