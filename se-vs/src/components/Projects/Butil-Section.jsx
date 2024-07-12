import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Rectangle15 from "../../assets/Rectangle15.png";
import Butil1 from "../../assets/butil-gallery/Hasik Poster.png";
import Butil2 from "../../assets/butil-gallery/Kislap Poster.png";
import Butil3 from "../../assets/butil-gallery/Buklod Poster.png";
import Butil4 from "../../assets/butil-gallery/Punla Poster.png";
import Butil5 from "../../assets/butil-gallery/UCamp Poster.png";
import Butil6 from "../../assets/butil-gallery/butil-allowance.png";

const ButilSection = () => {
  const initialHistoryContent = [
    {
      image: Butil1,
      title: "HASIK",
      content:
        "Held at the start of every academic year, HASIK is the contract signing event that prompts the start of BUTIL projects. Here, the memorandum of agreement is signed by the scholars and benefactors of the BUTIL program, signifying their renewed dedication to the initiative.",
    },
    {
      image: Butil2,
      title: "KISLAP",
      content:
        "KISLAP is the BUTIL fundraising event in the form of a night race and concert, with proceeds going directly to BUTIL projects and scholar allowances. Here, sponsors are anticipated to participate in recruiting runners. ",
    },
    {
      image: Butil3,
      title: "BUKLOD ",
      content:
        "BUKLOD is the project that strives to strengthen the bonds between the Becarios de Santo Tomas, the parents of BUTIL scholars, and the scholars themselves.",
    },
    {
      image: Butil4,
      title: "PUNLA ",
      content:
        "PUNLA is a recruitment initiative with the goal of bringing in 100 BUTIL scholars per academic year.",
    },
    {
      image: Butil5,
      title: "UCamp ",
      content:
        "USTBongrunong Leadership Camp, or UCamp, is a leadership training program to support BUTIL scholars through empowerment, education, and holistic development. The main objectives of this event are to foster academic excellence, workplace competence, and servant leadership among scholars toward personal growth and societal transformation.",
    },
    {
      image: Butil6,
      title: "BUTIL Allowance",
      content:
        "The BUTIL Allowance is handed out twice a semester. Sponsors are expected to dispatch delegates who will accompany other delegates to the partner communities to disburse allowances to scholars. The recipients are expected to participate in brief activities at each distribution.",
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
        className=" pt-12 text-left text-2xl font-bold text-white md:text-3xl xl:text-5xl"
      >
        What is BUTIL?
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9 }}
        className=" items-center justify-center "
      >
        <div className="text-bold mb-12 text-pretty p-4 text-center text-white 2xl:mx-64 2xl:my-24 2xl:text-3xl">
          Bonded University Towards Imbued Learning or BUTIL is a joint
          scholarship program involving various recognized student councils and
          organizations that provide financial aid to underprivileged but
          deserving high school students from seven partner communities.
        </div>
        {historyContent.map((item, index) => (
          <div key={index} className={`mb-8 flex`}>
            {index % 2 === 1 ? (
              <>
                <div className="  flex-grow  px-1 text-right md:ml-20 lg:ml-28 xl:ml-52 2xl:mr-4">
                  <p className=" text-2xl font-bold text-brand-yellow lg:text-3xl xl:text-4xl 2xl:text-5xl ">
                    {item.title}
                  </p>
                  <p className="text-xs  text-white md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    {item.content}
                  </p>
                </div>
                <img
                  src={item.image}
                  alt={`History ${index + 1}`}
                  className="ml-2 w-32 md:mr-20 md:w-36 lg:mr-28 lg:w-44 xl:w-48 2xl:mr-48 2xl:w-72"
                />
              </>
            ) : (
              <>
                <img
                  src={item.image}
                  alt={`History ${index + 1}`}
                  className="mr-2 w-32 md:ml-20 md:w-36 lg:ml-28 lg:w-44 xl:ml-52 xl:w-48 2xl:w-72"
                />
                <div className=" flex-grow  px-1 md:mr-20 lg:mr-28 xl:mr-52 2xl:ml-4 ">
                  <p className=" text-2xl font-bold text-brand-yellow lg:text-3xl xl:text-4xl 2xl:text-5xl">
                    {item.title}
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

export default ButilSection;
