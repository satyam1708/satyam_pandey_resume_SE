import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaAws } from "react-icons/fa"; // Added AWS/Docker
import { RiReactjsLine, RiOpenaiFill } from "react-icons/ri"; // Added OpenAI
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
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

function Technologies() {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent"
      >
        Tech Stack
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8" // Increased gap
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4 border-4 border-neutral-800 rounded-2xl bg-neutral-950/50"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4 border-4 border-neutral-800 rounded-2xl bg-neutral-950/50"
        >
          <TbBrandNextjs className="text-7xl text-white" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4 border-4 border-neutral-800 rounded-2xl bg-neutral-950/50"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4 border-4 border-neutral-800 rounded-2xl bg-neutral-950/50"
        >
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4 border-4 border-neutral-800 rounded-2xl bg-neutral-950/50"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4 border-4 border-neutral-800 rounded-2xl bg-neutral-950/50"
        >
          <RiOpenaiFill className="text-7xl text-white" />
        </motion.div>
        
         <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4 border-4 border-neutral-800 rounded-2xl bg-neutral-950/50"
        >
          <FaAws className="text-7xl text-orange-500" />
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Technologies;