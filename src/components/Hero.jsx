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
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* 3D Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="relative group"
            >
              {/* Glowing Background Blob */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              <motion.img
                src={profilePic}
                alt="Satyam Pandey"
                className="relative border-2 border-white/10 rounded-3xl object-cover shadow-2xl z-10"
                width={550}
                height={550}
                whileHover={{ 
                    scale: 1.02, 
                    rotateY: 5, 
                    rotateX: -5,
                    boxShadow: "0px 20px 50px rgba(0,0,0,0.5)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ perspective: 1000 }}
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
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl font-bold text-white"
            >
              Satyam Pandey
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent font-semibold"
            >
              Founding Full Stack Engineer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-stone-300"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/Satyam_Pandey_UI_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 font-bold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;