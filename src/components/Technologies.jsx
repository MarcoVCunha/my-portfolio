import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiMysql,
  DiNodejsSmall,
} from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

// Animação vertical (para cima e para baixo)
const iconsVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0], // sobe 10px e volta
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

const icons = [
  { Icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5 },
  { Icon: DiJavascript1, color: "text-yellow-300", duration: 3.5 },
  { Icon: DiNodejsSmall, color: "text-green-500", duration: 5 },
  { Icon: DiJava, color: "text-red-900", duration: 2 },
  { Icon: SiMongodb, color: "text-green-700", duration: 6 },
  { Icon: DiMysql, color: "text-blue-900", duration: 4 },
  { Icon: DiGit, color: "text-orange-700", duration: 3 },
];

const Technologies = () => {
  return (
    <div className="pb-24">
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
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-10 max-w-5xl mx-auto"
      >
        {icons.map(({ Icon, color, duration }, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={iconsVariants(duration)}
            className="text-8xl"
          >
            <Icon className={color} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
