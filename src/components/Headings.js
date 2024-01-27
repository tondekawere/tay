import React from "react";
import { motion } from "framer-motion";
import styles from "../fonts/animatedText.module.css";
import { useInView } from "react-intersection-observer";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Heading = ({ text, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px", // Adjust the rootMargin as per your requirement
  });

  return (
    <div
      ref={ref}
      className="py-2  sm:py-0 w-full mx-auto flex items-center justify-center  text-center overflow-hidden"
    >
      <motion.h2
        className={`inline-block w-full !text-navy dark:text-light font-bold capitalize text-8xl ${styles.animatedText} ${className}`}
        variants={quote}
        initial="initial"
        animate={inView ? "animate" : "initial"}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

export default Heading;