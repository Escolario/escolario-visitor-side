import { motion } from "framer-motion";

function FAQsAccordionText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-[8rem] text-center font-['Archivo'] text-[1.1rem] font-extrabold sm:mt-[9rem] sm:text-[1.8rem] md:mt-[9.5rem] md:text-[2.2rem] lg:mt-[3rem] lg:text-[3.5rem]"
    >
      <h1 className=" mb-[-0.4rem] leading-tight sm:mb-[-0.5rem] md:mb-[-0.9rem] lg:mb-[-1.3rem]">
        {" "}
        Frequently Asked Questions{" "}
      </h1>
      <h2> (FAQs) </h2>
    </motion.div>
  );
}

export default FAQsAccordionText;
