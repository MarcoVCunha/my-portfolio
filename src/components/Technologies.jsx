import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiMysql,
  DiNodejsSmall,
} from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconsVariants = (duration) => ({
  initial: { y: 10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tecnologias
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2.5)}
        >
          <RiReactjsLine className="text-8xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(3.5)}
          className="p-4"
        >
          <DiJavascript1 className="text-8xl text-yellow-300" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(5)}
          className="p-4"
        >
          <DiNodejsSmall className="text-8xl text-green-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2)}
          className="p-4"
        >
          <DiJava className="text-8xl text-red-900" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(6)}
          className="p-4"
        >
          <SiMongodb className="text-8xl text-green-700" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(4)}
          className="p-4"
        >
          <DiMysql className="text-8xl text-blue-900" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(3)}
          className="p-4"
        >
          <DiGit className="text-8xl text-orange-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
