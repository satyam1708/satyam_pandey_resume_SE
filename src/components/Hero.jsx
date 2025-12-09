import { useEffect, useRef } from "react";
import profilePic from "../assets/SatyamPandeyProfilePic.jpeg";
import { HERO_CONTENT } from "../constants";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Tilt } from "react-tilt";
import { FaReact, FaNodeJs, FaBrain } from "react-icons/fa";
import { SiOpenai, SiNextdotjs } from "react-icons/si";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50, damping: 20 } 
  },
};

const floatIconVariants = {
  initial: { y: 0 },
  animate: (custom) => ({
    y: [0, -15, 0],
    transition: {
      duration: 3 + custom, // random duration based on index
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }),
};

// 3D Tilt Options
const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.02,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

function Hero() {
  // Parallax Effect Logic
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={ref} className="relative pb-20 lg:mb-36 pt-28 lg:pt-40 overflow-visible">
      {/* Background Decorator - Subtle Gradient Orb */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-screen" />

      <div className="flex flex-wrap lg:flex-row-reverse items-center justify-between">
        
        {/* ================= RIGHT SIDE: 3D IMAGE COMPOSITION ================= */}
        <div className="w-full lg:w-1/2 relative z-10 perspective-1000">
          <div className="flex justify-center lg:justify-end lg:pr-10">
            {/* Floating Tech Icons Background */}
            <motion.div 
              variants={floatIconVariants} 
              custom={1} 
              animate="animate" 
              className="absolute top-0 right-[10%] text-cyan-400 text-4xl opacity-80 z-20 hidden lg:block"
            >
              <FaReact />
            </motion.div>
            <motion.div 
              variants={floatIconVariants} 
              custom={2} 
              animate="animate" 
              className="absolute bottom-[20%] left-[10%] text-green-500 text-3xl opacity-80 z-20 hidden lg:block"
            >
              <FaNodeJs />
            </motion.div>
            <motion.div 
              variants={floatIconVariants} 
              custom={1.5} 
              animate="animate" 
              className="absolute top-[10%] left-[15%] text-white text-3xl opacity-60 z-20 hidden lg:block"
            >
              <SiNextdotjs />
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Tilt options={defaultTiltOptions}>
                <div className="relative group cursor-pointer w-full max-w-[550px]">
                  
                  {/* Neon Glow Backlight */}
                  <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-80 transition duration-500" />
                  
                  {/* Main Image Container */}
                  <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-stone-900/80 backdrop-blur-sm shadow-2xl">
                    <img
                      src={profilePic}
                      alt="Satyam Pandey"
                      className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 grayscale-[10%] group-hover:grayscale-0 transform scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Glass Overlay Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Floating Glass Badge (Experience/Status) */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute -bottom-6 -left-6 bg-stone-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-30"
                  >
                    <div className="bg-green-500/20 p-2 rounded-full">
                      <FaBrain className="text-green-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">Focus</p>
                      <p className="text-sm text-white font-bold">Generative AI & SaaS</p>
                    </div>
                  </motion.div>

                  {/* Floating Glass Badge (Founding Engineer) */}
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="absolute -top-6 -right-4 bg-stone-900/90 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-3 z-30"
                  >
                     <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]"></div>
                     <span className="text-xs font-bold text-white tracking-wide">FOUNDING ENGINEER</span>
                  </motion.div>

                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>

        {/* ================= LEFT SIDE: TEXT CONTENT ================= */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 px-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Status Badge */}
            <motion.div variants={textVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-900/10 backdrop-blur-md">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
               <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-xs font-bold tracking-widest text-transparent uppercase">
                 Available for Innovation
               </span>
            </motion.div>

            <motion.h1
              variants={textVariants}
              className="pb-4 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight text-center lg:text-left"
            >
              Satyam <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-100 via-stone-400 to-stone-100 animate-gradient bg-300%">
                Pandey
              </span>
            </motion.h1>

            <motion.div variants={textVariants} className="mb-6 flex flex-col items-center lg:items-start">
                <span className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-stone-300">
                  Architecting <span className="font-semibold text-white">Scalable</span>
                </span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-stone-300">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-bold">AI Solutions</span> & Web Apps
                </span>
            </motion.div>

            <motion.p
              variants={textVariants}
              className="my-4 max-w-xl text-lg text-stone-400 leading-relaxed text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <motion.a
                href="/Satyam_Pandey_UI_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group bg-white text-black font-bold rounded-full px-8 py-4 text-center shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-stone-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-center hover:bg-white/5 transition-colors backdrop-blur-sm"
              >
                Let's Connect
              </motion.a>
            </motion.div>

            {/* Tech Stack Mini Bar */}
            <motion.div variants={textVariants} className="mt-12 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <FaReact className="text-2xl" title="React" />
                <SiNextdotjs className="text-2xl" title="Next.js" />
                <FaNodeJs className="text-2xl" title="Node.js" />
                <SiOpenai className="text-2xl" title="OpenAI" />
                <div className="h-px w-20 bg-stone-700/50"></div>
                <span className="text-xs font-mono text-stone-500">POWERED BY MODERN STACK</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;