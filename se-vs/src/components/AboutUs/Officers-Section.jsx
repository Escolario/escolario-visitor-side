import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import presidentImg from "../../assets/executive-board/president.jpg";
import trainingDirectorImg from "../../assets/executive-board/training-director.png";
import vpiImg from "../../assets/executive-board/vpi.png";
import vpeImg from "../../assets/executive-board/vpe.png";
import vpaaImg from "../../assets/executive-board/vpaa.jpg";
import vpfImg from "../../assets/executive-board/vpf.jpg";
import avpfImg from "../../assets/executive-board/avpf.png";
import vpalImg from "../../assets/executive-board/vpal.png";
import proImg from "../../assets/executive-board/pro.png";
import tbImg from "../../assets/executive-board/tb.png";
import cosSuzukiImg from "../../assets/committee-board/cos_suzuki.png";
import cbAAAquinoImg from "../../assets/committee-board/cb_aa_aquino.jpg";
import cbCSBblImg from "../../assets/committee-board/cb_commserve_babylen.jpeg";
import cbCSValienteImg from "../../assets/committee-board/cb_commserve_valiente.png";
import cbCParabolesImg from "../../assets/committee-board/cb_creatives_paraboles.jpg";
import cbDPechardoImg from "../../assets/committee-board/cb_docu_pechardo.png";
import cbMemmLaguatanImg from "../../assets/committee-board/cb_memcomm_laguatan.png";
import cbMemmVillanuevaImg from "../../assets/committee-board/cb_memcomm_villanueva.png";
import cbOpeCalumpangImg from "../../assets/committee-board/cb_ope_calumpang.jpg";
import cbRecChuaImg from "../../assets/committee-board/cb_rec_chua.png";
import cbWammyArrayaImg from "../../assets/committee-board/cb_wammy_arraya.jpg";

function OfficersSection() {
  const officersRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (officersRef.current) {
      observer.observe(officersRef.current);
    }

    // Cleanup
    return () => {
      if (officersRef.current) {
        observer.unobserve(officersRef.current);
      }
    };
  }, [officersRef]);

  const boardImages = [
    presidentImg,
    trainingDirectorImg,
    vpiImg,
    vpeImg,
    vpaaImg,
    vpfImg,
    avpfImg,
    vpalImg,
    proImg,
  ];

  const executiveBoardNames = [
    "Ainee Chris T. Verdillo",
    "Annika Fatima G. Masahud",
    "Mica Kyla Mari B. Locre",
    "Cheyanne Anita H. Almirante",
    "Ian Nichol A. Rojo",
    "Jhuliane Nicole N. Pascua",
    "Arcy Lea C. Ferrer",
    "Vic Francel C. Alegre",
    "Mariela Anya A. Soriño",
  ];

  const executiveBoardPositions = [
    "President",
    "Training Director",
    "Executive Vice President for Internal Affairs",
    "Executive Vice President for External Affairs",
    "Vice President for Administrative Affairs",
    "Vice President for Finance",
    "Assistant Vice President for Finance",
    "Vice President for Audit and Logistics",
    "Public Relations Officer",
  ];

  const committeeBoardNames = [
    "Yuuka G. Suzuki",
    "Keanu Francois Aquino",
    "Babylen N. Belen",
    "Jericho Rodel A. Valiente",
    "Lyle Joseph P. Paraboles",
    "Allyson Fay S. Pechardo",
    "Nicole Andrea G. Laguatan",
    "Beatrice Lorrine R. Villanueva",
    "Lance Cedric F. Calumpang",
    "Chelsea O. Chua",
    "Francis Kenneth B. Araya",
  ];

  const committeeBoardPositions = [
    "Chief-of-Staff",
    "Alumni Affairs Committee Head",
    "Community Service Committee Head",
    "Community Service Committee Head",
    "Creatives Committee Head",
    "Documentations Committee Head",
    "Membership and Communications Committee Head",
    "Membership and Communications Committee Head",
    "Operations Committee Head",
    "Research and Evaluation Committee Head",
    "Ways and Means Committee Head",
  ];

  const committeeBoardImgs = [
    cosSuzukiImg,
    cbAAAquinoImg,
    cbCSBblImg,
    cbCSValienteImg,
    cbCParabolesImg,
    cbDPechardoImg,
    cbMemmLaguatanImg,
    cbMemmVillanuevaImg,
    cbOpeCalumpangImg,
    cbRecChuaImg,
    cbWammyArrayaImg,
  ];

  const trainingBoardNames = [
    "Annika Fatima G. Masahud",
    "Cheyanne Anita H. Almirante",
    "Keanu Francois Aquino",
    "Arcy Lea C. Ferrer",
    "Nicole Dominique M. Foja",
    "Mica Kyla Mari B. Locre",
    "Jhuliane Nicole N. Pascua",
    "Jericho Rodel A. Valiente",
    "Ainee Chris T. Verdillo",
  ];

  const trainingBoardImgs = [
    trainingDirectorImg,
    vpeImg,
    cbAAAquinoImg,
    avpfImg,
    tbImg,
    vpiImg,
    vpfImg,
    cbCSValienteImg,
    presidentImg,
  ];

  return (
    <motion.div
      ref={officersRef}
      className="mt-10 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ delay: 0.9 }}
    >
      <h1 className="text-gradient mt-5  bg-clip-text text-4xl text-[1rem] font-bold text-transparent lg:text-[3rem]">
        BEST BOARD OF OFFICERS 2023{" "}
      </h1>
      <h1 className="mt-5 text-3xl text-[1.2rem] font-extrabold md:text-[2.2rem] 2xl:mt-16">
        {" "}
        EXECUTIVE BOARD{" "}
      </h1>
      <div className="mt-7 grid grid-cols-1 md:grid-cols-3">
        {executiveBoardNames.map((name, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-4 md:mx-9 ${
              index === 0 ? "md:col-span-3" : ""
            } ${index === 7 ? "md:col-start-1" : ""} ${
              index === 8 ? "md:col-start-3" : ""
            }`}
          >
            <img
              src={boardImages[index]}
              alt={`Officer ${index + 1}`}
              className="h-[15rem] w-[10rem] rounded-lg"
              loading="lazy"
            />
            <p className="font-extrabold">{name}</p>
            <p className="text-[0.7rem]">{executiveBoardPositions[index]}</p>
          </div>
        ))}
      </div>
      <h1 className="mt-5 text-3xl text-[1.2rem] font-extrabold md:text-[2.2rem] 2xl:mt-16">
        {" "}
        COMMITTEE BOARD{" "}
      </h1>
      <div className="mt-7 grid grid-cols-1 md:grid-cols-3">
        {committeeBoardNames.map((name, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center px-5 py-3 md:mx-3 ${
              index === 10 ? "md:col-start-3" : ""
            }`}
          >
            <img
              src={committeeBoardImgs[index]}
              alt={`Officer ${index + 1}`}
              className="h-[15rem] w-[10rem] rounded-lg"
              loading="lazy"
            />
            <p className="font-extrabold">{name}</p>
            <p className="text-[0.7rem]">{committeeBoardPositions[index]}</p>
          </div>
        ))}
      </div>
      <h1 className="mt-5 text-3xl text-[1.2rem] font-extrabold md:text-[2.2rem] 2xl:mt-16">
        {" "}
        TRAINING BOARD{" "}
      </h1>
      <div className="mt-7 grid grid-cols-1 md:grid-cols-3">
        {trainingBoardNames.map((name, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center px-5 py-4 md:mx-8 ${
              index === 10 ? "md:col-start-3" : ""
            }`}
          >
            <img
              src={trainingBoardImgs[index]}
              alt={`Officer ${index + 1}`}
              className="h-[15rem] w-[10rem] rounded-lg"
              loading="lazy"
            />
            <p className="font-extrabold">{name}</p>
            <p className="text-[0.7rem]">Training Board Member</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default OfficersSection;
