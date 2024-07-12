import React from "react";
import { Link, useLocation } from "react-router-dom";
import OrgLogo from "../../assets/org_logo.png";

const Navbar = () => {
  const NavbarItems = [
    {
      name: "HOME",
      link: "/home",
    },
    {
      name: "ARTICLES",
      link: "/articles-main",
    },
    {
      name: "ABOUT US",
      link: "/about-us",
    },
    {
      name: "PROJECTS",
      link: "/projects",
    },
    {
      name: "DEVELOPERS",
      link: "/developers",
    },
    {
      name: "FAQs",
      link: "/faqs",
    },
  ];

  const location = useLocation();

  return (
    <div className="mx-auto flex flex-row items-center justify-center md:px-2 md:py-[5rem] xl:max-w-[1400px] ">
      <div className="flex flex-row">
        <Link to="/">
          <img
            src={OrgLogo}
            alt="org-logo"
            className="w-24 md:w-36 md:pr-10 lg:w-48 xl:w-56 2xl:w-72 2xl:pr-28"
          />
        </Link>
        <div className="flex items-center md:gap-6 lg:gap-10 lg:text-[1rem] xl:gap-12 xl:text-[1.25rem] 2xl:gap-16">
          {NavbarItems.map((navItem, index) => (
            <div
              key={index}
              className={`font-bold ${
                location.pathname === navItem.link
                  ? "becarios-border-gradient border-b-2 text-blue-500"
                  : "hover:text-blue-500"
              }`}
            >
              <Link to={navItem.link}>{navItem.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
