import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Award1 from "../../assets/award-1.jpg";
import Award2 from "../../assets/award-2.jpg";
import { useRef, useState, useEffect } from "react";

export default function GallerySection() {
  const images = [
    {
      src: Award1,
      alt: "Award 1",
      header: "ST. DOMINIC DE GUZMAN AWARD",
      subHeader: "UST STUDENT AWARDS 2022",
    },
    {
      src: Award2,
      alt: "Award 2",
      header: "POPE LEO XII COMMUNITY DEVELOPMENT AWARD",
      subHeader: "UST STUDENT AWARDS 2023",
    },
    {
      src: Award1,
      alt: "Award 3",
      header: "ST. DOMINIC DE GUZMAN AWARD",
      subHeader: "UST STUDENT AWARDS 2023",
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
    <div ref={carouselRef} className="mt-[15rem] md:mt-[1.5rem]">
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
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform rounded-lg bg-black bg-opacity-50 px-2 py-2 text-2xl text-white"
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
              className="h-[500px] object-cover "
              src={image.src}
              alt={image.alt}
            />
            <div className="absolute left-0 top-0 h-full w-full bg-black opacity-60"></div>
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
              <h2 className="text-3xl font-bold">{image.header}</h2>
              <p className="mt-5 text-lg">{image.subHeader}</p>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
}
