import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FulLStackDeveloper from "../../assets/developer_1.jpg";
import ProjectManager from "../../assets/developer_2.jpg";
import LeadFrontEnd from "../../assets/developer_3.jpg";
import LeadBackEnd from "../../assets/developer_4.jpg";
import FrontEndDev1 from "../../assets/developer_5.jpg";
import BackEndDev1 from "../../assets/developer_6.jpg";
import BackEndDev2 from "../../assets/developer_7.jpg";
import FrontEndDev2 from "../../assets/developer_8.jpg";
import BannerSection from "../Projects/Banner-Section";
import Footer from "../footer/footer";

export default function AboutDevelopers() {
  const people = [
    {
      name: "Judge G. Mongcal",
      title: "Full Stack Developer/Systems Analyst",
      imgSrc: FulLStackDeveloper,
    },
    {
      name: "George Constante V. Sebastian",
      title: "Project Manager/Scrum Master",
      imgSrc: ProjectManager,
    },
    {
      name: "John Vincent I. Viray",
      title: "Lead Front-End Developer",
      imgSrc: LeadFrontEnd,
    },
    {
      name: "Joshua F. Ricafranca",
      title: "Lead Back-End Developer",
      imgSrc: LeadBackEnd,
    },
    {
      name: "Ericka Hannah T. Dela Cruz",
      title: "Front-End Developer/Business Analyst",
      imgSrc: FrontEndDev1,
    },
    {
      name: "Jade Allison O. Teng",
      title: "Back-End Developer/QA Officer",
      imgSrc: BackEndDev1,
    },
  ];

  const peoplelower = [
    {
      name: "Nicolo A. Carreon",
      title: "Back-End Developer/Business Analyst",
      imgSrc: BackEndDev2,
    },
    {
      name: "Angelo Miguelle A. Gacilan",
      title: "Front-End Developer",
      imgSrc: FrontEndDev2,
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="mx-auto mt-[8rem] h-[2rem] w-[10rem] rounded-lg bg-gradient-to-br from-yellow-400 to-blue-500 py-1 text-center text-xl font-bold text-white sm:h-[3rem] sm:w-[14rem] sm:text-3xl md:h-[4rem] md:w-[15rem] md:py-3 md:text-4xl md:text-[2rem] lg:h-[5rem] lg:w-[26rem] lg:py-5 lg:text-[3.5rem]">
          DEVELOPERS
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-[-5rem] grid justify-items-center gap-y-[-1rem] md:mt-9 lg:mt-12"
      >
        <h1 className="mt-[10rem] text-2xl lg:text-[4.5rem] font-bold md:mt-5 lg:mt-[3rem] mb-8">
          {" "}
          MEET THE TEAM{" "}
        </h1>
        <p className="text-md mt-5 max-w-[49rem] text-center  lg:text-2xl">
          The Thomasian IS students from the Department of Information Systems
          at the University of Santo Tomas, working behind the scenes to elevate
          the platform to new heights.
        </p>
        <div className="mt-[6rem] flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[2rem]">
          {people.map((person, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                ref={ref}
                key={index}
                className="flex flex-col items-center gap-y-2 rounded-lg border-2 p-5 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={person.imgSrc}
                  alt={person.name}
                  className="h-32 w-32 rounded-full object-cover"
                />
                <h1 className="text-center font-bold">{person.name}</h1>
                <p className="mt-[-0.5rem] text-gray-500">{person.title}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-[2rem] flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-2">
          {peoplelower.map((person, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                ref={ref}
                key={index}
                className="mb-5 flex flex-col items-center gap-y-2 rounded-lg border-2 p-5 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: (index + people.length) * 0.1,
                }}
              >
                <img
                  src={person.imgSrc}
                  alt={person.name}
                  className="h-32 w-32 rounded-full object-cover"
                />
                <h1 className="text-center font-bold">{person.name}</h1>
                <p className="mt-[-0.5rem] text-gray-500">{person.title}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <BannerSection />
      <Footer />
    </>
  );
}
