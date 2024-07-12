import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Best1 from "../../assets/beST-gallery/BEST R101.jpg";
import Best2 from "../../assets/beST-gallery/ELEVATE.jpg";
import Best3 from "../../assets/beST-gallery/1ST SCHOLARS GA.jpg";
import Best4 from "../../assets/beST-gallery/2ND GA.jpg";
import Best5 from "../../assets/beST-gallery/SCHOLRS' FORUM.jpg";
import Best6 from "../../assets/beST-gallery/ALTO.jpg";
import Best7 from "../../assets/beST-gallery/StafferCampPoster.png";
import Best8 from "../../assets/beST-gallery/Pasimuno.jpg";
import Best9 from "../../assets/beST-gallery/Scholars Summit.png";
import Best10 from "../../assets/beST-gallery/BeST Tutor.jpg";
import Best11 from "../../assets/beST-gallery/Escolario.jpg";
import Best12 from "../../assets/beST-gallery/IskolarYOU.png";
import Best13 from "../../assets/beST-gallery/BeST Merch.jpg";
import Best14 from "../../assets/beST-gallery/schoren.jpg";
import Best15 from "../../assets/beST-gallery/sampung sulyap.jpg";
import Best16 from "../../assets/beST-gallery/lf.jpg";
import Best17 from "../../assets/beST-gallery/aryo game.jpg";
import Best18 from "../../assets/beST-gallery/homecoming.jpg";
import Best19 from "../../assets/beST-gallery/debriefing.jpg";

const BestSection = () => {
  const initialHistoryContent = [
    {
      image: Best1,
      title: "Recruitment 101",
      content:
        "Recruitment 101 is the university-wide organization recruitment period. Those who wish to apply as members to BeST should be a recipient of any of the scholarship schemes of the University: Santo Tomas (Academic Scholarship), San Martin de Porres (Equity Scholarship), San Lorenzo Ruiz (Student Assistance Scholarship), and Santo Domingo (Scholarship for the Gifted).",
    },
    {
      image: Best2,
      title: "ELEVATE",
      content:
        "The ELEVATE Staffers' Program is a great avenue for scholars to serve the Thomasian scholar community by joining the organization’s committees. ELEVATE allows staffers to meet new people, improve their skills, and shine brighter as they become part of the BeST family.",
    },
    {
      image: Best3,
      title: "1st General Assembly",
      content:
        "The BeST 1st Scholars' General Assembly gathers all Thomasian scholars every 1st term of the academic year to share valuable knowledge to help their growth as future Thomasian scholar leaders.",
    },
    {
      image: Best4,
      title: "2nd General Assembly",
      content:
        "The BeST 2nd Scholars' General Assembly focuses on developing camaraderie, enhancing social skills, and bringing out the best qualities of Thomasian scholars through engaging activities and talks of empowerment.",
    },
    {
      image: Best5,
      title: "Scholars’ Forum",
      content:
        "The Scholars' Forum aims to provide opportunities for scholars to encounter and consider valuable social issues that are timely and relevant to be addressed.",
    },
    {
      image: Best6,
      title: "ALTO",
      content:
        "The Alternative Lecture Series (ALTO) aims to provide the Thomasian community with the knowledge, skills, and information rarely taught in a traditional classroom. This project covers a wide range of topics crucial for developing competent individuals as future leaders and members of society.",
    },
    {
      image: Best7,
      title: "Staffers’ Camp",
      content:
        "The BeST Staffers’ Camp is a team-building event for staffers to improve camaraderie and teamwork in the organization. It aims to foster healthy and supportive relationships between staffers and officers.",
    },
    {
      image: Best8,
      title: "PASIMUNO Junior Apprenticeship Program",
      content:
        "PASIMUNO is an apprenticeship program dedicated to producing dedicated servant leaders and ensuring that the future of Becarios de Santo Tomas is in the right hands. ",
    },
    {
      image: Best9,
      title: "Philippine Scholars’ Summit ",
      content:
        "The Philippine Scholars’ Summit is an event headed by the University Scholars' Association of the Philippines, Inc. to unite all scholars nationwide and foster camaraderie among young leaders.",
    },
    {
      image: Best10,
      title: "BeSTutor",
      content:
        "BeSTutor is a tutorial program launched by scholars to share their insights and learnings with fellow Thomasians in need of guidance in their academics",
    },
    {
      image: Best11,
      title: "Escolario",
      content:
        "Escolario is BeST’s very own news publication, providing reliable information, thought-provoking opinions, and imaginative stories for all the scholars to see.",
    },
    {
      image: Best12,
      title: "#IskolarYOU Vlogs",
      content:
        "It is a revamp of the YouTube channel of Becarios de Santo Tomas featuring the events of the organization and relevant video references for Thomasian scholars.",
    },
    {
      image: Best13,
      title: "BeST Merch",
      content:
        "Becarios de Santo Tomas proudly presents its own merchandise! Live the scholar life with BeST’s dedicated hoodies and lanyards to conquer examinations and quizzes with ease. ",
    },
    {
      image: Best14,
      title: "Scholarship Renewal Help Desk",
      content:
        "This help desk aims to guide the Thomasian Scholars Community during the scholarship renewal period for relevant questions, clarifications, and initial verification of the required documents.",
    },
    {
      image: Best15,
      title: "Sampung Sulyap",
      content:
        "Becarios de Santo Tomas, with its partner organizations, hosts a film festival that showcases ten short films based on ten inspiring true-to-life stories of ten Thomasians.",
    },
    {
      image: Best16,
      title: "LF: Dabest of the BeST",
      content:
        "LF: DaBEST of the BeST! is a competition-based talent show which aims to serve as a creative outlet for scholars seeking to showcase their talents. There will be two subset categories for the competition, namely Singing and Dancing. Per category, participants can decide if they want to enter Solo or Group division.",
    },
    {
      image: Best17,
      title: "Aryo Game",
      content:
        "Aryo Game? is an annual competition open to Thomasian scholars and students that adapts the format of existing and defunct game shows. It promotes healthy competition, camaraderie, and learning among the participants. Thomasians can register in teams of three, with at least one scholar member, and compete against other teams.",
    },
    {
      image: Best18,
      title: "Alumni Homecoming",
      content:
        "The BeST Alumni Homecoming is a formal gathering of all Thomasian scholar alumni for the past years. There will be special talks, testimonials, and activities throughout the night, commemorating what it is to be a Thomasian scholar and how they can contribute to the community.",
    },
    {
      image: Best19,
      title: "Scholars’ Debriefing",
      content:
        "The BeST Scholars’ Debriefing is an event for Thomasian scholars to aid in their transition from being students to professionals. It has talks and activities related to life management and skills enhancement, which will help scholars go about their lives after college.",
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
      className=" flex flex-col items-center justify-center  p-7 sm:mt-[7rem]"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7 }}
        className="  text-left text-2xl font-bold md:text-3xl xl:text-5xl"
      >
        What is BeST?
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9 }}
        className=" items-center justify-center "
      >
        <div className="text-bold mb-12 text-pretty p-4 text-center  2xl:mx-64 2xl:my-24 2xl:text-3xl">
          The BeST projects are events and platforms that cater to Thomasian
          scholars and to the Thomasian community as a whole.
        </div>
        {historyContent.map((item, index) => (
          <div key={index} className={`mb-8 flex`}>
            {index % 2 === 1 ? (
              <>
                <div className="  flex-grow  px-1 text-right md:ml-20 lg:ml-28 xl:ml-52 2xl:mr-4">
                  <p className=" text-2xl font-bold text-blue-button lg:text-3xl xl:text-4xl 2xl:text-5xl ">
                    {item.title}
                  </p>
                  <p className="text-xs   md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
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
                  <p className=" text-2xl font-bold text-blue-button lg:text-3xl xl:text-4xl 2xl:text-5xl">
                    {item.title}
                  </p>
                  <p className="text-xs  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
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

export default BestSection;
