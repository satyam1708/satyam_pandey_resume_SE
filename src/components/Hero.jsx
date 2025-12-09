import profilePic from "../assets/SatyamPandeyProfilePic.jpeg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

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

const defaultTiltOptions = {
  reverse: false, // reverse the tilt direction
  max: 25, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function Hero() {
  return (
    <div className="pb-4 lg:mb-36 pt-24 lg:pt-32">
      <div className="flex flex-wrap lg:flex-row-reverse items-center">
        {/* Image Section with 3D Tilt & Float Effect */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="relative"
            >
              {/* Floating Animation Wrapper */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Tilt options={defaultTiltOptions}>
                  <div className="relative group cursor-pointer">
                    {/* 3D Neon Glow Effect behind image */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    
                    <img
                      src={profilePic}
                      alt="Satyam Pandey"
                      className="relative z-10 border-2 border-white/20 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] w-[550px] h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    />
                    
                    {/* Glass Overlay Effect for shine */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>
                  </div>
                </Tilt>
              </motion.div>
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
            <motion.div
              variants={childVariants}
              className="mb-4 px-4 py-1.5 rounded-full border border-stone-700 bg-stone-900/50 backdrop-blur-sm"
            >
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
                className="bg-white hover:bg-stone-200 text-stone-900 font-semibold rounded-full px-8 py-3 text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="border border-white/20 hover:bg-white/10 text-white rounded-full px-8 py-3 text-sm transition-all hover:scale-105"
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