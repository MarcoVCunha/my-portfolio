import profilePic from "../assets/profileM.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import "./Hero.css";

const hidden = {
  opacity: 0,
  x: -100,
};

const containerVariants = {
  hidden,
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden,
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse lg:px-35 "> 
        <div className="w-full lg:w-1/2">
          <div className="relative w-[420px] h-[420px] flex items-center justify-center group lg:ml-20">
            <div className="w-[370px] h-[370px] rounded-3xl relative overflow-hidden ">
              <img
                src={profilePic}
                alt="Marco Vinicius Cunha"
                className="absolute inset-0 z-0 animate-wave-border border-2 border-stone-400 bg-transparent"
                height={400}
                width={400}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Marco Cunha
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 "
            >
              Download Currículo
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
