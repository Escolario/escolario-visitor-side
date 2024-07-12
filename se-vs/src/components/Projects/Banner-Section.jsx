import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function BannerSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  return (
    <div className="bg-gradient-stop-50 w-full bg-gradient-to-r from-white to-blue-500">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        <div className="text-m py-1 text-center md:ml-[5.5rem] md:mt-[13rem] md:py-4 md:text-[1.2rem] lg:mb-5 lg:ml-[12.5rem]">
          <h1 className="justify-start md:relative md:mt-[-4rem] md:flex md:text-[1rem] lg:mt-[-8rem] lg:text-[1.2rem] 2xl:text-2xl">
            {" "}
            Got questions or other concerns?
          </h1>
          <h1 className="justify-start text-center text-2xl font-bold md:flex md:py-3 lg:text-[2rem] xl:text-[2.6rem] 2xl:text-5xl">
            Get in touch{" "}
            <span className="lg:text=3xl lg: bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent md:ml-2">
              with us!
            </span>
          </h1>
          <Link
            to="https://www.facebook.com/messages/t/725849434141985"
            target="_blank"
          >
            <button className="justify-start rounded-lg bg-gradient-to-r from-yellow-300 to-blue-700 px-[4rem] py-2 font-bold text-white shadow-md hover:from-blue-600 hover:to-yellow-500 md:flex lg:px-14">
              Contact Us
            </button>
          </Link>
        </div>
        <div>
          <div>
            <h1 className="flex-start mt-5 py-1 text-center text-sm md:absolute md:mt-[6rem] md:flex md:py-4 md:text-[1rem] lg:my-5 lg:mt-[3rem] lg:text-[1.3rem] ">
              You can also reach out to us via email:
            </h1>
            <div className="justify-start md:flex md:flex-col">
              <h1 className="flex-start py-0.1 text-center text-xs md:absolute md:mt-[7.5rem] md:flex md:py-4 md:text-[0.8rem] lg:mt-[5rem] lg:text-[0.9rem] ">
                For inquiries and Concerns
              </h1>
              <div className="flex justify-center md:block lg:block">
                <div className="my-0.5 h-1 w-20 bg-gradient-to-r from-blue-500 to-yellow-400 md:absolute  md:mt-[9.6rem] md:w-40 lg:mt-[7.2rem]"></div>
              </div>{" "}
              <h1 className="flex-start py-0.1 text-m text-center font-bold md:absolute md:mt-[8.9rem] md:flex md:py-4 md:text-[1.1rem] lg:mt-[6.5rem] lg:text-[0.9rem] ">
                becarios.uso@ust.edu.ph
              </h1>
              <div>
                <h1 className="flex-start py-0.1 text-center text-xs md:absolute  md:mt-[10.8rem] md:flex md:py-4 md:text-[0.8rem] lg:mt-[8.5rem] lg:text-[0.9rem] ">
                  For Partnerships
                </h1>
                <div className="flex justify-center md:block lg:block">
                  <div className="my-0.5 h-1 w-20 bg-gradient-to-r from-blue-500 to-yellow-400 md:absolute md:mt-[13rem] md:w-40 lg:mt-[10.6rem]"></div>
                </div>
                <h1 className="flex-start py-0.1 text-m text-center font-bold md:absolute md:mt-[12.2rem]  md:flex md:py-4 md:text-[0.9rem] lg:mt-[9.8rem] lg:text-[0.9rem] ">
                  ustbecarios.marketing@gmail.com
                </h1>
              </div>
              <div>
                <h1 className="flex-start py-0.1 items-center text-center text-xs md:absolute md:mt-[10rem] md:flex md:py-4 md:text-[0.9rem] lg:mt-[12rem] ">
                  Our Location
                </h1>
                <div className="flex justify-center md:block lg:block">
                  <div className="my-0.5 h-1 w-20 bg-gradient-to-r from-blue-500 to-yellow-400 md:absolute md:mt-[16rem] md:w-40 lg:mt-[14rem]  "></div>
                </div>{" "}
                <h1 className="flex-start py-0.1 text-m text-center md:absolute  md:mt-[15.5rem] md:flex md:py-4 md:text-[0.9rem] lg:mt-[13.3rem] lg:text-[0.9rem]  ">
                  Room 3H, 3rd Floor,
                </h1>
                <h1 className="flex-start py-0.1 text-m text-center md:absolute  md:mt-[16.5rem] md:flex md:py-4 md:text-[0.9rem] lg:mt-[14.3rem] lg:text-[0.9rem] ">
                  Tan Yan Kee Student Center
                </h1>
                <h1 className="flex-start py-0.1 text-m text-center font-bold md:absolute md:mt-[17.5rem] md:flex md:py-4 md:text-[0.9rem] lg:mt-[15.3rem] lg:text-[0.9rem] ">
                  University of Santo Tomas
                </h1>
                <h1 className="py-0.1 text-m text-center md:absolute  md:mt-[18rem] md:flex md:py-4 md:text-3xl md:text-[0.9rem] lg:mt-[16rem] lg:text-[0.9rem] ">
                  Manila, Philippines
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-[5rem]"> </div>
      </motion.div>
    </div>
  );
}

export default BannerSection;
