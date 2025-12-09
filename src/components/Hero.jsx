import { useEffect, useRef, useState } from "react";
import profilePic from "../assets/SatyamPandeyProfilePic.jpeg";
import { HERO_CONTENT } from "../constants";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { Tilt } from "react-tilt";
import { FaNodeJs, FaReact, FaDatabase, FaLayerGroup } from "react-icons/fa";
import { SiOpenai, SiNextdotjs, SiPostgresql, SiTypescript, SiDocker } from "react-icons/si";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 60, damping: 15 } 
  },
};

// --- Components ---

const TypewriterText = ({ texts, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (charIndex < currentFullText.length) {
          setDisplayedText(prev => prev + currentFullText[charIndex]);
          setCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2500); // Wait longer before deleting for better readability
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 80);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span 
        animate={{ opacity: [0, 1, 0] }} 
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[1em] bg-cyan-400 ml-1 align-middle"
      />
    </span>
  );
};

const TechOrbiter = ({ icon: Icon, radius, delay, color }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 z-20"
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: delay }}
      style={{ 
        width: radius * 2, 
        height: radius * 2, 
        x: -radius, 
        y: -radius,
        borderRadius: "50%",
      }}
    >
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: -360 }} // Counter-rotate to keep icon upright
        transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: delay }}
      >
        <div className={`p-3 rounded-full bg-stone-900/90 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:scale-110 transition-transform ${color}`}>
          <Icon className="text-xl" />
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Hero Component ---

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Mouse Spotlight Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      ref={ref} 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20 pt-28 lg:pt-0 group"
    >
      {/* Background Grid & Spotlight */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap lg:flex-row-reverse items-center justify-between gap-y-12">
          
          {/* ================= RIGHT SIDE: FULL STACK AI SYSTEM ================= */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ y: yParallax }}
              className="relative w-full max-w-[500px] aspect-square flex items-center justify-center"
            >
              {/* Animated Orbiting Icons - BALANCED FULL STACK & AI */}
              <div className="absolute inset-0 pointer-events-none hidden lg:block">
                {/* Outer Orbit - Infrastructure & Backend */}
                <TechOrbiter icon={SiPostgresql} radius={260} delay={0} color="text-blue-400" />
                <TechOrbiter icon={FaNodeJs} radius={260} delay={-10} color="text-green-500" />
                <TechOrbiter icon={SiDocker} radius={260} delay={-20} color="text-blue-300" />
                
                {/* Inner Orbit - AI & Frontend */}
                <TechOrbiter icon={SiOpenai} radius={180} delay={-5} color="text-teal-300" />
                <TechOrbiter icon={SiNextdotjs} radius={180} delay={-15} color="text-white" />
                <TechOrbiter icon={FaReact} radius={180} delay={-25} color="text-cyan-400" />
              </div>

              <Tilt options={{ max: 12, scale: 1.02, speed: 500 }} className="relative z-10 w-full">
                <div className="relative rounded-3xl bg-stone-900/40 backdrop-blur-xl border border-white/10 p-4 shadow-2xl group-hover:border-cyan-500/30 transition-colors duration-500">
                  
                  {/* Decorative HUD Corners - Tech Aesthetic */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-lg" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg" />

                  {/* Profile Image */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-stone-950">
                    <img
                      src={profilePic}
                      alt="Satyam Pandey"
                      className="w-full h-auto object-cover opacity-90 transition-all duration-500 hover:scale-105 hover:opacity-100 grayscale-[15%] group-hover:grayscale-0"
                    />
                    {/* Modern Scanline Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-4 w-full animate-scan pointer-events-none" />
                  </div>

                  {/* Floating System Config Badge */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute -bottom-10 -right-8 bg-black/90 border border-stone-800 p-5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] hidden sm:block backdrop-blur-md"
                  >
                    <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                       <FaLayerGroup className="text-cyan-400 text-xs" />
                       <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">System Architecture</span>
                    </div>
                    <pre className="text-[11px] font-mono leading-relaxed">
                      <code>
                        <span className="text-purple-400">const</span> <span className="text-yellow-400">Platform</span> = {"{"} <br/>
                        &nbsp;&nbsp;core: <span className="text-green-400">"Next.js Full Stack"</span>,<br/>
                        &nbsp;&nbsp;ai_engine: <span className="text-cyan-400">"Generative + Voice"</span>,<br/>
                        &nbsp;&nbsp;scale: <span className="text-orange-400">"Enterprise Ready"</span><br/>
                        {"}"}
                      </code>
                    </pre>
                  </motion.div>

                </div>
              </Tilt>
            </motion.div>
          </div>

          {/* ================= LEFT SIDE: TEXT CONTENT ================= */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center lg:items-start"
            >
              {/* Status Badge - Shows Complete Product Capability */}
              <motion.div 
                variants={textVariants} 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 mb-6 backdrop-blur-sm hover:border-cyan-500/40 transition-colors cursor-default"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-bold text-cyan-300 tracking-wide uppercase">Architecting AI-Driven Platforms</span>
              </motion.div>

              <motion.h1 
                variants={textVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight"
              >
                Satyam <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-100 via-stone-400 to-stone-100 animate-gradient bg-300%">
                  Pandey
                </span>
              </motion.h1>

              {/* Dynamic Role Text - Cycling through Key Personas */}
              <motion.div variants={textVariants} className="h-12 mb-6">
                <TypewriterText 
                  texts={[
                    "Founding Full Stack Engineer", 
                    "AI Product Architect", 
                    "Generative AI Specialist",
                    "Voice AI Systems Expert"
                  ]} 
                  className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
                />
              </motion.div>

              <motion.p 
                variants={textVariants}
                className="text-lg text-stone-400 max-w-xl leading-relaxed mb-8"
              >
                Building next-generation <span className="text-white font-medium">AI Products</span> and scalable SaaS platforms. 
                I bridge the gap between complex <span className="text-white font-medium">Full Stack Engineering</span> and cutting-edge <span className="text-white font-medium">Generative AI</span> to create intelligent, real-time systems that drive business impact.
              </motion.p>

              {/* Buttons */}
              <motion.div variants={textVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="/Satyam_Pandey_UI_Developer.pdf"
                  download
                  className="group relative px-8 py-3 rounded-full bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10">Download Resume</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-stone-100 to-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-full border border-stone-700 bg-stone-900/50 text-white font-medium hover:bg-stone-800 hover:border-stone-500 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
                >
                  Let's Collaborate
                </a>
              </motion.div>

              {/* Tech Stack Bar - Balanced representation */}
              <motion.div variants={textVariants} className="mt-12 flex items-center gap-6 pt-8 border-t border-stone-800/50 w-full lg:w-auto justify-center lg:justify-start">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Expertise</span>
                <div className="flex gap-5 text-stone-400 text-xl items-center">
                  <SiNextdotjs className="hover:text-white transition-colors cursor-pointer" title="Next.js" />
                  <FaNodeJs className="hover:text-green-500 transition-colors cursor-pointer" title="Node.js" />
                  <SiTypescript className="hover:text-blue-400 transition-colors cursor-pointer" title="TypeScript" />
                  <SiOpenai className="hover:text-teal-300 transition-colors cursor-pointer" title="Generative AI" />
                  <FaDatabase className="hover:text-yellow-400 transition-colors cursor-pointer" title="Scalable DBs" />
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
      
      {/* CSS for Scanline Animation */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;