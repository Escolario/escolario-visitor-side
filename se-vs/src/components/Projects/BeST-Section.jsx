import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Rectangle15 from "../../assets/Rectangle15.png";

const BestSection = () => {
  const initialHistoryContent = [
    {
      image: Rectangle15,
      content:
        "Lorem ipsum dolor sit amet cons ectetur. Semper ipsum nisi aliquam enim magna mattis. Habitant eget mattis sed at cursus porttitor. Fermentum faucibus ac.",
    },
    {
      image: Rectangle15,
      content:
        "Lorem ipsum dolor sit amet cons ectetur. Semper ipsum nisi aliquam enim magna mattis. Habitant eget mattis sed at cursus porttitor. Fermentum faucibus ac.",
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
      className="flex flex-col items-center justify-center py-[5rem] "
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7 }}
        className="pb-6 pt-12 text-left text-2xl font-bold  md:text-3xl xl:text-5xl"
      >
        What is BeST?
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9 }}
        className="mt-6"
      >
        {historyContent.map((item, index) => (
          <div key={index} className={`mb-8 ${index === 1 ? "flex" : "flex"}`}>
            {index === 1 ? (
              <>
                <div className="px-1 md:ml-20 lg:ml-28 xl:ml-52">
                  <p className="text-xs  md:text-base lg:text-lg xl:text-xl 2xl:pt-16 2xl:text-2xl">
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
                <div className="px-1 md:mr-20 lg:mr-28 xl:mr-52">
                  <p className="text-xs  md:text-base lg:text-lg xl:text-xl 2xl:pt-16 2xl:text-2xl">
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
