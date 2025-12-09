import { useEffect, useRef, useState } from "react";
import profilePic from "../assets/SatyamPandeyProfilePic.jpeg";
import { HERO_CONTENT } from "../constants";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { Tilt } from "react-tilt";
import { FaNodeJs, FaBrain, FaMicrophoneAlt } from "react-icons/fa";
import { SiOpenai, SiNextdotjs, SiPostgresql, SiWhatsapp, SiN8N } from "react-icons/si";

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
          setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
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
      transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: delay }}
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
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: delay }}
      >
        <div className={`p-3 rounded-full bg-black/80 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,255,0.3)] ${color}`}>
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
              rgba(6, 182, 212, 0.10),
              transparent 80%
            )
          `,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap lg:flex-row-reverse items-center justify-between gap-y-12">
          
          {/* ================= RIGHT SIDE: ADVANCED 3D PROFILE ================= */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ y: yParallax }}
              className="relative w-full max-w-[500px] aspect-square flex items-center justify-center"
            >
              {/* Animated Orbiting Icons - AI FOCUSED */}
              <div className="absolute inset-0 pointer-events-none hidden lg:block">
                <TechOrbiter icon={SiOpenai} radius={260} delay={0} color="text-teal-300" />
                <TechOrbiter icon={FaMicrophoneAlt} radius={260} delay={-8} color="text-purple-400" />
                <TechOrbiter icon={SiWhatsapp} radius={260} delay={-16} color="text-green-400" />
                <TechOrbiter icon={FaNodeJs} radius={190} delay={-4} color="text-green-500" />
                <TechOrbiter icon={SiPostgresql} radius={190} delay={-14} color="text-blue-400" />
              </div>

              <Tilt options={{ max: 15, scale: 1.02, speed: 500 }} className="relative z-10 w-full">
                <div className="relative rounded-3xl bg-stone-900/40 backdrop-blur-xl border border-white/10 p-4 shadow-2xl group-hover:border-cyan-500/30 transition-colors duration-500">
                  
                  {/* Decorative HUD Corners */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 rounded-br-lg" />

                  {/* Profile Image */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-stone-950">
                    <img
                      src={profilePic}
                      alt="Satyam Pandey"
                      className="w-full h-auto object-cover opacity-90 transition-all duration-500 hover:scale-105 hover:opacity-100 grayscale-[10%] group-hover:grayscale-0"
                    />
                    {/* Voice Wave Scanline Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-4 w-full animate-scan pointer-events-none" />
                  </div>

                  {/* Floating AI Code Badge */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute -bottom-8 -right-8 bg-black/90 border border-stone-800 p-4 rounded-xl shadow-2xl hidden sm:block"
                  >
                    <div className="flex gap-2 mb-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    <pre className="text-[10px] font-mono text-gray-400">
                      <code>
                        <span className="text-purple-400">const</span> <span className="text-blue-400">voiceAgent</span> = {"{"} <br/>
                        &nbsp;&nbsp;model: <span className="text-green-400">"GPT-4o"</span>,<br/>
                        &nbsp;&nbsp;latency: <span className="text-yellow-400">"Real-time"</span>,<br/>
                        &nbsp;&nbsp;status: <span className="text-cyan-400">"Active"</span><br/>
                        {"}"}
                      </code>
                    </pre>
                  </motion.div>

                </div>
              </Tilt>
            </motion.div>
          </div>

          {/* ================= LEFT SIDE: TEXT CONTENT ================= */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center lg:items-start"
            >
              {/* Status Badge */}
              <motion.div 
                variants={textVariants} 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 mb-6 backdrop-blur-sm hover:bg-cyan-900/40 transition-colors"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-semibold text-cyan-300 tracking-wide uppercase">Deploying Voice Agents</span>
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

              {/* Dynamic Role Text */}
              <motion.div variants={textVariants} className="h-12 mb-6">
                <TypewriterText 
                  texts={["Founding Engineer @ Cognitiev", "Voice AI Architect", "Generative AI Specialist"]} 
                  className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
                />
              </motion.div>

              <motion.p 
                variants={textVariants}
                className="text-lg text-stone-400 max-w-xl leading-relaxed mb-8"
              >
                Leading the development of <span className="text-white font-medium">real-time Voice AI Agents</span>. 
                Architecting scalable, low-latency conversational systems using <span className="text-white font-medium">OpenAI, Webhooks, and Node.js</span>.
              </motion.p>

              {/* Buttons */}
              <motion.div variants={textVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="/Satyam_Pandey_UI_Developer.pdf"
                  download
                  className="group relative px-8 py-3 rounded-full bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10">Download Resume</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-full border border-stone-700 bg-stone-900/50 text-white font-medium hover:bg-stone-800 hover:border-cyan-500/50 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
                >
                  Let's Connect
                </a>
              </motion.div>

              {/* Tech Stack Bar */}
              <motion.div variants={textVariants} className="mt-12 flex items-center gap-6 pt-8 border-t border-stone-800/50 w-full lg:w-auto justify-center lg:justify-start">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Powered By</span>
                <div className="flex gap-5 text-stone-400 text-xl items-center">
                  <SiOpenai className="hover:text-teal-300 transition-colors cursor-pointer" title="OpenAI" />
                  <FaMicrophoneAlt className="hover:text-purple-400 transition-colors cursor-pointer" title="Voice AI" />
                  <SiWhatsapp className="hover:text-green-400 transition-colors cursor-pointer" title="WhatsApp API" />
                  <SiN8N className="hover:text-red-400 transition-colors cursor-pointer" title="Automation" />
                  <SiNextdotjs className="hover:text-white transition-colors cursor-pointer" title="Next.js" />
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Custom Styles for Scanline Animation */}
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