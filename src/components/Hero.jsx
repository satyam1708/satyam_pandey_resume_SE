import profilePic from "../assets/SatyamPandeyProfilePic.jpeg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function Hero() {
  return (
    <div className="pb-4 lg:mb-36 pt-24 lg:pt-32">
      <div className="flex flex-wrap lg:flex-row-reverse items-center">
        {/* Image Section with 3D Float Effect */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              style={{ perspective: 1000 }} // Adds depth perspective
            >
              <motion.img
                src={profilePic}
                alt="Satyam Pandey"
                className="border-2 border-white/20 rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                width={550}
                height={550}
                // Floating Animation
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            {/* Badge */}
            <motion.div variants={childVariants} className="mb-4 px-4 py-1.5 rounded-full border border-stone-700 bg-stone-900/50 backdrop-blur-sm">
               <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-sm font-medium text-transparent">
                 Founding Engineer @ Cognitiev AI
               </span>
            </motion.div>

            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl font-bold text-white"
            >
              Satyam Pandey
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 via-stone-100 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent font-light"
            >
              Full Stack & AI Developer
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight text-stone-300"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div variants={childVariants} className="flex gap-4">
              <a
                href="/Satyam_Pandey_UI_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-white hover:bg-stone-200 text-stone-900 font-semibold rounded-full px-8 py-3 text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="border border-white/20 hover:bg-white/10 text-white rounded-fullPX-8 py-3 text-sm transition-all"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;