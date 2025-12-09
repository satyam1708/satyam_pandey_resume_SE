import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiMongodb } from "react-icons/si";
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
        className="my-20 text-center text-4xl font-bold bg-gradient-to-b from-white to-stone-500 bg-clip-text text-transparent"
      >
        Tech Stack
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="flex flex-col items-center p-4 border border-stone-800 rounded-2xl bg-stone-950/50 backdrop-blur-sm"
        >
          <SiJavascript className="text-7xl text-yellow-400" />
          <span className="mt-2 text-sm text-stone-400">JavaScript</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="flex flex-col items-center p-4 border border-stone-800 rounded-2xl bg-stone-950/50 backdrop-blur-sm"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <span className="mt-2 text-sm text-stone-400">React</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="flex flex-col items-center p-4 border border-stone-800 rounded-2xl bg-stone-950/50 backdrop-blur-sm"
        >
          <TbBrandNextjs className="text-7xl text-white" />
          <span className="mt-2 text-sm text-stone-400">Next.js</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="flex flex-col items-center p-4 border border-stone-800 rounded-2xl bg-stone-950/50 backdrop-blur-sm"
        >
          <SiMongodb className="text-7xl text-green-500" />
          <span className="mt-2 text-sm text-stone-400">MongoDB</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="flex flex-col items-center p-4 border border-stone-800 rounded-2xl bg-stone-950/50 backdrop-blur-sm"
        >
          <DiRedis className="text-7xl text-red-600" />
          <span className="mt-2 text-sm text-stone-400">Redis</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="flex flex-col items-center p-4 border border-stone-800 rounded-2xl bg-stone-950/50 backdrop-blur-sm"
        >
          <FaNodeJs className="text-7xl text-green-500" />
          <span className="mt-2 text-sm text-stone-400">Node.js</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="flex flex-col items-center p-4 border border-stone-800 rounded-2xl bg-stone-950/50 backdrop-blur-sm"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
          <span className="mt-2 text-sm text-stone-400">PostgreSQL</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;