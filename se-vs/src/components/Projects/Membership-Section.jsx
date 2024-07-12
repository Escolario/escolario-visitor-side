import escolariologo from "../../assets/org_logo.png";
import Rectangle52 from "../../assets/Rectangle52.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-feather";

const MembershipSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeIn" },
      });
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="relative h-[16rem] md:h-[24rem] lg:h-[32rem]">
      <img
        src={Rectangle52}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={escolariologo}
        className="absolute right-4 top-6 mr-4 w-[8.5rem] md:w-[10rem] lg:mx-[12rem] lg:w-[13rem]"
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
      />
      <div
        className="absolute inset-0 flex flex-col items-start justify-center pl-9 md:pl-[5rem] lg:pl-[12rem]"
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
      >
        <p className="mb-2 mt-14 text-xl font-bold text-white lg:text-3xl">
          <span initial={{ opacity: 0, y: 20 }} animate={controls}>
            Join us on our Initiative!
          </span>
        </p>
        <p className="md:text-md text-sm text-white lg:text-xl">
          <span initial={{ opacity: 0, y: 20 }} animate={controls}>
            Apply now and be part of our well-rounded community for project{" "}
            <span className="font-bold">BeST</span>
          </span>
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSenvKriBpBN9fj6mIqDjZS54pfX4wmqyCpaqfX_TGJjjL_riQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="mt-4 rounded-lg bg-black px-8 py-2 text-xs text-white shadow-md lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            APPLY NOW
          </button>
        </a>
      </div>
    </div>
  );
};

export default MembershipSection;
