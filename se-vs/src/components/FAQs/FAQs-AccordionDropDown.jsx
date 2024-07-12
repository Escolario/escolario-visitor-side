import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";

function FAQsAccordionDropDown() {
  const accordionItems = [
    {
      question: "Where can I find information related to scholarships in UST?",
      answer: (
        <span>
          You may find information related to UST scholarships in the{" "}
          <a
            href="https://www.ust.edu.ph/wp-content/uploads/2020/11/UST-Student-Handbook-2018-final-copy.pdf?fbclid=IwAR38oESTJ4jK4UXa2ZufooTAXMeymZkRqpaxq6K-d8SrS6N7O3B4QAJN4FI"
            target="blank"
            className=" text-blue-500 underline "
          >
            UST Student Handbook
          </a>{" "}
          and the{" "}
          <a
            href="https://www.ust.edu.ph/wp-content/uploads/2021/05/AY-2020-21_Scholarship-Manual_Final-Version-3-9-21.pdf?fbclid=IwAR1r1keRQdhxhVFn_ubzdyG4yLl8fA_EAFj5sygp2I9rhjN_vqbDSPvYluo"
            target="blank"
            className=" text-blue-500 underline"
          >
            <br /> UST Scholarship Manual
          </a>
          .
        </span>
      ),
    },
    {
      question: "How do I join UST-Becarios de Santo Tomas?",
      answer:
        "You can become a member of Becarios de Santo Tomas during Recruitment 101 of student organizations in the 1st term of every academic year. You may also join our committees through our ELEVATE Staffers’ Program during this time. If you are interested in becoming a future officer of BeST, you can apply to our PASIMUNO Junior Apprenticeship Program around the end of the 1st term.",
    },
    {
      question: "What is the scholarship application process in UST?",
      answer:
        "You can apply for a scholarship in UST through the Office for Student Affairs (OSA) Scholarship Portal, where you will be required to submit application documents within a certain period to be announced by OSA. Please note that your documents are still subject to approval by OSA upon submission.",
    },
    {
      question: "What is the scholarship renewal process in UST?",
      answer:
        "Once your scholarship has been approved, you should renew your scholarship in UST every succeeding term for as long as you retain it. You must submit scholarship renewal documents in the OSA Scholarship Portal within a certain time period to be announced by OSA. Please note that your documents are still subject to approval by OSA upon submission.",
    },
    {
      question:
        " Who can I contact if I have concerns related to my scholarship?",
      answer: (
        <ul className=" ml-6 list-disc ">
          <p className=" -ml-6 font-bold">Office for Student Affairs</p>
          <li>2/F Tan Yan Kee Student Center, University of Santo Tomas</li>
          <li>
            Email:{" "}
            <a
              href="mailto:office@studentaffairs.ust.edu.ph"
              className=" text-blue-500 underline"
            >
              office@studentaffairs.ust.edu.ph
            </a>
          </li>
          <li>
            <a>Facebook Page</a>
          </li>
          <p className=" -ml-6 font-bold">Becarios de Santo Tomas</p>
          <li>
            Room 3H, Tan Yan Kee Student Center, University of Santo Tomas
          </li>
          <li>
            Email:{" "}
            <a
              href="mailto:becarios.uso@ust.edu.ph "
              className=" text-blue-500 underline"
            >
              becarios.uso@ust.edu.ph
            </a>
          </li>
          <li>
            <a
              className=" text-blue-500 underline"
              href="https://www.facebook.com/ustbecarios"
              target="blank"
            >
              https://www.facebook.com/ustbecarios
            </a>
          </li>
          <p className=" -ml-6 font-bold">
            For external scholarships, contact your respective benefactors.
          </p>
        </ul>
      ),
    },
    {
      question:
        "Is Becarios de Santo Tomas open to partnerships and sponsorships?",
      answer:
        "Yes, please contact us through ustbecarios.marketing@gmail.com for any partnership or sponsorship inquiries.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);
  const [arrowRotation, setArrowRotation] = useState(
    Array(accordionItems.length).fill(false),
  );

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
    const newArrowRotation = Array(accordionItems.length).fill(false);
    newArrowRotation[index] = !arrowRotation[index];
    setArrowRotation(newArrowRotation);
  };

  return (
    <div className="my-[1rem]  flex flex-col items-center justify-center md:my-[8rem] lg:my-[7rem]">
      {accordionItems.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          key={index}
          className="mt-2"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="mt-7 flex w-[15rem] items-center justify-between rounded bg-gray-100 px-3 py-[0.6rem] text-left text-[0.6rem] font-bold shadow sm:w-[24rem] sm:py-[0.7rem] sm:text-[0.8rem] md:w-[29.5rem] md:py-[0.8rem] md:text-[0.9rem] lg:w-[58rem] lg:py-[1.2rem] lg:text-[1.5rem]"
          >
            <div className="flex items-center">
              <h4 className="ml-1">{item.question}</h4>
            </div>
            <motion.div
              initial={false}
              animate={{
                rotate: arrowRotation[index] ? 180 : 0,
                transition: { duration: 0.3 },
              }}
            >
              <IoMdArrowDropdown />
            </motion.div>
          </button>

          {openIndex === index && (
            <div className="mt-1 w-[15rem] rounded bg-gray-100 px-3 py-[0.6rem] text-[0.5rem] shadow sm:w-[24rem] sm:py-[0.7rem] sm:text-[0.7rem] md:w-[29.5rem] md:py-[0.8rem] md:text-[0.75rem] lg:w-[58rem] lg:py-[1.9rem] lg:text-[1.2rem]">
              <p> {item.answer} </p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default FAQsAccordionDropDown;
