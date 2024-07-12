import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AuAward1 from "../../assets/popeleo2223.jpg";
import AuAward2 from "../../assets/stdominic2122.png";
import AuAward3 from "../../assets/tradition1617.jpg";
import AuAward4 from "../../assets/awardsspecial1112.jpg";
import { useRef, useState, useEffect } from "react";

export default function AwardSection() {
  const images = [
    {
      src: AuAward1,
      alt: "Award 1",
      header: "ST. DOMINIC DE GUZMAN AWARD",
      subHeader: (
        <>
          For Outstanding Team Work <br />
          <br />
          May 31, 2022 | May 17, 2019 | May 18, 2018 | May 12, 2017 | May 13,
          2016 | May 8, 2015 | March 15, 2013
        </>
      ),
    },
    {
      src: AuAward2,
      alt: "Award 2",
      header: "POPE LEO XII COMMUNITY DEVELOPMENT AWARD",
      subHeader: (
        <>
          For Active Involvement in Community Development with Partner
          Communities or Sectoral Groups <br />
          <br />
          May 26, 2023 | May 31, 2022 | May 17, 2019 | May 18, 2018 | May 12,
          2017 | May 13, 2016 | May 8, 2015 | March 15, 2014 | March 15, 2013
        </>
      ),
    },
    {
      src: AuAward3,
      alt: "Award 3",
      header: "Tradition of Excellence",
      subHeader: (
        <>
          For exemplary performance of a student organization on a sustained
          level by having been granted the same award for five consecutive years{" "}
          <br />
          <br />
          May 17, 2019 (St. Dominic de Guzman Award) May 12, 2017 (Pope Leo XIII
          Community Development Award)
        </>
      ),
    },
    {
      src: AuAward4,
      alt: "Award 4",
      header:
        "Most Outstanding University-Wide Organization and Outstanding Service Award (Group Category)",
      subHeader: "April 30, 2012",
    },
  ];

  const carouselRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      });
    });

    observer.observe(carouselRef.current);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={carouselRef}>
      <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform rounded-lg bg-black bg-opacity-50 px-2 py-1 text-2xl text-white"
            >
              &#9664;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform rounded-lg bg-black bg-opacity-50 px-2 py-1 text-2xl text-white"
            >
              &#9654;
            </button>
          )
        }
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ delay: 0.5 }}
          >
            <img
              className="h-[500px] object-cover object-top 2xl:h-[700px]"
              src={image.src}
              alt={image.alt}
            />
            <div className="absolute left-0 top-0 h-full w-full text-pretty  bg-black opacity-60"></div>
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
              <h2 className="text-3xl font-bold 2xl:text-5xl">
                {image.header}
              </h2>
              <p className="mt-5  text-lg 2xl:text-2xl">{image.subHeader}</p>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
}
