import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 2, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className="title"
        >
          Moaz Karem , Computer sciense graduate , software engineer , front-end
          developer
        </motion.h1>

        <p className="sub-title">
          I am skilled Front End developer with experience in React Js ,
          Javascript , typescript and Next js , Proficient in front end design
          Framworks like Material Ui and Tailwind js , I enjoy taking complex
          challenge and continously learning new language And framworks .
          Dedicated and detail - oriented , I strive to deliver high quality
          solutions that meet client’s
        </p>

        <div className="all-icons flex">
          <a href="https://x.com/MoazKarem42">
            <div className="icon icon-twitter"></div>
          </a>

          <a href="https://www.instagram.com/eng_moaz_karem/?hl=en">
            <div className="icon icon-instagram"></div>
          </a>

          <a href="https://github.com/moazkarem">
            <div className="icon icon-github"></div>
          </a>

          <a href="https://www.linkedin.com/in/moaz-karem-98a537234/">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
