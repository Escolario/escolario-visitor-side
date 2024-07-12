import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import OrgLogo from '../../assets/org_logo.png'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.2, ease: "easeIn" },
      });
    }
  }, [isVisible, controls]);

  return (
    <motion.footer
      ref={ref}
      className="b-0 flex justify-between bg-black p-6 py-10 text-white"
      initial={{ y: 20, opacity: 0 }}
      animate={controls}
    >
      {/* left */}
      <div className="flex flex-col gap-6 md:px-14 lg:px-44">
        <div className="flex-start flex">
          <Link to="/">
            <img
              src={OrgLogo}
              className="-m-1 w-32 md:w-36 lg:w-48"
              alt="Organization Logo"
            ></img>
          </Link>
        </div>
        <div className="text-xs md:text-base lg:text-xl">
          <div>Room 3H, 3rd Floor, </div>
          <div>Tan Yan Kee Student Center</div>
          <div className="font-semibold">University of Santo Tomas</div>
          <div>Manila, Philippines</div>
        </div>
        <div className="flex w-3/4 gap-3 text-xl text-brand-yellow md:text-3xl lg:gap-4 lg:text-4xl">
          <Link to="https://www.facebook.com/ustbecarios" target="_blank">
            <FaFacebook />
          </Link>
          <Link to="https://www.instagram.com/ustbecarios/" target="_blank">
            <FaInstagram />
          </Link>
          <Link to="/twitter-profile" target="_blank">
            <FaXTwitter />
          </Link>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col gap-4 text-right text-xs font-semibold md:px-14 md:text-base lg:gap-5 lg:px-44 lg:text-xl">
        <Link to="/home">
          <div>HOME</div>
        </Link>
        <Link to="/articles-main">
          <div>ARTICLES</div>
        </Link>
        <Link to="/about-us">
          <div>ABOUT US</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
        <Link to="/faqs">
          <div>FAQS</div>
        </Link>
      </div>
    </motion.footer>
  );
};

export default Footer;
