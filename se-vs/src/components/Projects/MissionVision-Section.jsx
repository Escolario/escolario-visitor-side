import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

function MissionVisionSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.9) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      initial={isVisible ? { opacity: 0, y: -20 } : { opacity: 0 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.5 }}
      className="z-1 container relative mx-auto my-14 mt-[-70rem] sm:mt-[-55rem] grid grid-cols-1 gap-4 px-12 sm:px-6 md:mt-[-7rem] md:grid-cols-3 md:px-[6rem] lg:mt-[-5rem] lg:grid-cols-3 xl:px-[16rem]"
    >
      {/* For mobile and tablet view, grid will have 1 column */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7 }}
        className="p-4 text-center text-white sm:text-[1.3rem] md:text-black lg:text-[1.3rem] "
      >
        <h1 className="p-6 text-2xl font-bold lg:text-[1.9rem]"> MISSION </h1>
        <p className="md:mx-[-2.4rem] md:text-[0.9rem] lg:mx-[-5rem] lg:px-[2rem] lg:text-[1.4rem] tracking-widest">
          {" "}
          UST-Becarios de Santo Tomas, the Scholars’ Association of the
          University of Santo Tomas, a socio-civic organization, recognizes its
          role to instill academic competence, to enhance camaraderie, to
          promote social awareness and to mold Thomasian Scholars to be
          cognizant of their role in the University, in the country and in the
          whole world under the guidance of our Almighty God.
        </p>
      </motion.div>
      <div className="hidden p-4 text-center md:flex md:flex-col md:items-center md:justify-center">
        <div className="becarios-gradient flex items-center justify-center rounded text-white sm:hidden md:block md:h-[10rem] md:w-[0.2rem] lg:block lg:h-[20rem] lg:w-[0.3rem]">
          {/* Content */}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7 }}
        className="text-center text-white sm:text-[1.3rem] mt-[-2rem] md:mt-2 md:text-black"
      >
        <h1 className="p-8 text-2xl font-bold lg:text-[1.9rem]"> VISION </h1>
        <p className="md:text-[0.8rem] lg:mx-[-4rem]  lg:px-[2rem] lg:text-[1.4rem] tracking-widest">
          UST-Becarios de Santo Tomas, the Scholars’ Association of the
          University of Santo Tomas, envisions itself to be a formative
          organization that will produce scholars who are competitive and
          equipped with Thomasian virtues.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default MissionVisionSection;
