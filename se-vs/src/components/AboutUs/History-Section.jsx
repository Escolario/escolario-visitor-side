import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Rectangle15 from "../../assets/Rectangle15.png";

const HistorySection = () => {
  const initialHistoryContent = [
    {
      image: Rectangle15,
      year: "1617",
      content: "Beca para sa limpieza de sangre or purity of blood",
    },
    {
      image: Rectangle15,
      year: "1994",
      content: "Ugnayan ng mga Tomasinong may Angking Kakayahan (UTAK)",
    },
    {
      image: Rectangle15,
      year: "1997",
      content: "UST Scholars Association",
    },
    {
      image: Rectangle15,
      year: "2003",
      content: "UST Escolares",
    },
    {
      image: Rectangle15,
      year: "2004",
      content:
        "Rev. Fr. Pompeyo De Mesa, O.P. gave the name Becarios de Santo Tomas",
    },
    {
      image: Rectangle15,
      year: "2019",
      content: "Silver Year of Becarios de Santo Tomas",
    },
  ];

  const [historyContent] = useState(initialHistoryContent);
  const historyRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (historyRef.current) {
      observer.observe(historyRef.current);
    }

    // Cleanup
    return () => {
      if (historyRef.current) {
        observer.unobserve(historyRef.current);
      }
    };
  }, [historyRef]);

  return (
    <div
      ref={historyRef}
      className="mt-[12rem] flex flex-col items-center justify-center bg-black p-7 sm:mt-[7rem]"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7 }}
        className="pb-6 pt-12 text-left text-2xl font-bold text-white md:text-3xl xl:text-5xl"
      >
        Our History
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9 }}
        className="mt-12 items-center justify-center 2xl:pr-32"
      >
        {historyContent.map((item, index) => (
          <div key={index} className={`mb-8 flex`}>
            {index % 2 === 1 ? (
              <>
                <div className="  flex-grow  px-1 text-right md:ml-20 lg:ml-28 xl:ml-52 2xl:pr-4">
                  <p className=" text-2xl font-bold text-brand-yellow lg:text-3xl xl:text-4xl 2xl:text-5xl ">
                    {item.year}
                  </p>
                  <p className="text-xs text-white md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    {item.content}
                  </p>
                </div>
                <img
                  src={item.image}
                  alt={`History ${index + 1}`}
                  className="ml-2 w-28 md:mr-20 md:w-32 lg:mr-28 lg:w-36 xl:w-44"
                />
              </>
            ) : (
              <>
                <img
                  src={item.image}
                  alt={`History ${index + 1}`}
                  className="mr-2 w-28 md:ml-20 md:w-32 lg:ml-28 lg:w-36 xl:ml-52 xl:w-44"
                />
                <div className=" flex-grow  px-1 md:mr-20 lg:mr-28 xl:mr-52 2xl:pl-4">
                  <p className=" text-2xl font-bold text-brand-yellow lg:text-3xl xl:text-4xl 2xl:text-5xl">
                    {item.year}
                  </p>
                  <p className="text-xs text-white md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    {item.content}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HistorySection;
