import Rectangle37 from "../../assets/Rectangle37.png";
import BecariosLogo from "../../assets/becarios-logo.png";
import bestPicture1 from "../../assets/best-picture-1.png";
import { motion } from "framer-motion";

function UpperSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative my-[3rem] h-full p-4"
    >
      <h1 className="mx-auto h-[2rem] w-[10rem] rounded-lg bg-gradient-to-br from-yellow-400 to-blue-500 py-1 text-center text-xl font-bold text-white sm:h-[3rem] sm:w-[14rem] sm:text-3xl md:h-[4rem] md:w-[15rem] md:py-3 md:text-4xl lg:h-[5rem] lg:w-[26rem] lg:py-5 lg:text-[3.5rem]">
        PROJECTS
      </h1>

      <br />
      <h1 className="py-1 text-center text-xl font-bold sm:text-4xl md:py-6 md:text-5xl lg:mt-[3rem] lg:text-[4.5rem]">
        BeST
      </h1>

      <div>
        <h1 className="mx-auto py-4 text-center sm:w-[36rem] md:w-[36rem] md:text-xl lg:w-[49rem] lg:text-[2rem] xl:text-3xl">
        Get ready to be inspired, motivated,  and empowered as we showcase our projects here in the organization. 
        Together, let's shape a brighter tomorrow!
        </h1>
      </div>
      <img
        src={bestPicture1}
        alt="Your image alt text"
        className=" inset-x-0 mx-auto hidden max-h-96 md:block lg:mt-[4rem] lg:block lg:w-[70rem] xl:w-[70rem]"
      />

      {/* Render Becarios Logo */}
      <div className="z-0 mt-8 flex items-center justify-center">
        <img
          src={BecariosLogo}
          alt="Becarios Logo"
          className="relative z-10 h-auto max-h-full max-w-full md:hidden top-[-3rem]"
          style={{ width: "7.5rem" }} // Adjust the width here
        />
      </div>
      {/* Render Rectangle37 */}
      <div className="relative top-[-6.5rem] flex items-center justify-center md:hidden">
        <img src={Rectangle37} alt="" className="h-[50rem] w-[45rem]" />
      </div>
    </motion.div>
  );
}

export default UpperSection;
