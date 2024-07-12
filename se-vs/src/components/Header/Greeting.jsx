import React from "react";
import { motion } from "framer-motion";

const Greeting = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      className="mt-[9rem] justify-center sm:mt-[8rem] md:mt-[1rem] lg:my-[4rem] lg:mt-[2rem]"
    >
      <div className="greetings flex justify-center md:ml-[20rem] md:text-[2.50rem]">
        <span className="ml-2 mt-[0.5rem] justify-center whitespace-nowrap font-['Archivo'] font-bold uppercase tracking-[0.2rem] sm:text-[2rem] md:ml-[-18.5rem] md:flex md:text-[2.5rem] lg:ml-[-15rem] xl:text-[5rem] 2xl:text-[5rem]">
          welcome to{" "}
          <span className="text-gradient bg-clip-text font-bold text-transparent md:ml-2 xl:text-[5rem]">
            escolario
          </span>
        </span>
      </div>
      <div className="subhead mt-[1rem] flex flex-col items-center whitespace-nowrap md:my-[1.5rem] md:mr-[8rem] md:mt-[0.2rem] md:pl-[20rem] lg:mt-[6rem]">
        <h4 className="mb-2 ml-2 mt-[-1.7rem] flex justify-center py-6 font-['Archivo'] text-[0.9rem] text-xs font-bold sm:text-[1rem] md:ml-[-10rem] md:mt-[-0.1rem] md:text-[1.5rem] lg:my-8 lg:ml-[15rem] lg:mr-80 lg:mt-[-7.5rem] lg:flex lg:text-3xl xl:text-4xl">
          The Scholars' Official News Article Platform
        </h4>
        <span className="text-gradient my-1 ml-3 mt-[-2rem] bg-clip-text font-['Archivo'] text-[0.9rem] text-xs font-bold text-transparent sm:mt-[-1.7rem] sm:text-[0.8rem] md:ml-[-10rem] md:mt-[-1.9rem] md:flex md:text-2xl lg:ml-[-5rem] lg:mt-[-3.5rem] lg:pl-[-10rem] xl:text-3xl">
          UST-Becarios de Santo Tomas
        </span>
      </div>
    </motion.div>
  );
};

export default Greeting;
