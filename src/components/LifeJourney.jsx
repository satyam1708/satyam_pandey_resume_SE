import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles, Float, Sphere, Torus } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { FaFutbol, FaBook, FaLaptopCode, FaTableTennis, FaRunning, FaBrain, FaGamepad } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import * as THREE from "three";

// --- Journey Data ---
const LIFE_STAGES = [
  {
    id: "childhood",
    label: "Early Days",
    title: "The Energetic Explorer",
    subtitle: "Fueling curiosity with sports & stories",
    desc: "A foundation built on teamwork and endless energy. Days were filled with Cricket on dusty grounds, Football matches in the rain, and the first spark of curiosity found in books.",
    icons: [
      { Icon: MdSportsCricket, color: "text-blue-400", label: "Cricket" },
      { Icon: FaFutbol, color: "text-white", label: "Football" },
      { Icon: FaRunning, color: "text-yellow-400", label: "Badminton" },
    ],
    color: "#3b82f6", // Blue
    camPos: [0, 0, 6],
    geometry: "sphere"
  },
  {
    id: "adolescence",
    label: "Teenage Years",
    title: "The Curious Scholar",
    subtitle: "Deep diving into knowledge & logic",
    desc: "The transition from play to intellect. Books became best friends, and strategy games like Chess honed the analytical mind that would later write code.",
    icons: [
      { Icon: FaBook, color: "text-purple-400", label: "Reading" },
      { Icon: FaGamepad, color: "text-indigo-400", label: "Strategy Games" },
    ],
    color: "#a855f7", // Purple
    camPos: [3, 1, 5],
    geometry: "torus"
  },
  {
    id: "twenties",
    label: "Age 20",
    title: "The Focused Competitor",
    subtitle: "Speed, reflex, and precision",
    desc: "Founding a passion for Table Tennis. The fast-paced nature of the game mirrored the rapid evolution of technology I was beginning to master.",
    icons: [
      { Icon: FaTableTennis, color: "text-red-400", label: "Table Tennis" },
    ],
    color: "#f87171", // Red
    camPos: [-3, -1, 5],
    geometry: "sphere"
  },
  {
    id: "professional",
    label: "Present Day",
    title: "The Tech Architect",
    subtitle: "Building the future with AI",
    desc: "Synthesizing a lifetime of learning into Founding Engineering. Architecting scalable Voice AI systems and leading innovation at Cognitiev AI.",
    icons: [
      { Icon: FaLaptopCode, color: "text-cyan-400", label: "Full Stack" },
      { Icon: FaBrain, color: "text-green-400", label: "Generative AI" },
    ],
    color: "#2dd4bf", // Teal/Cyan
    camPos: [0, 0, 4],
    geometry: "torus"
  }
];

// --- 3D Scene Components ---

const CameraRig = ({ targetPosition }) => {
  useFrame((state) => {
    // Smoothly interpolate camera position to the target
    state.camera.position.lerp(new THREE.Vector3(...targetPosition), 0.02);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

const AbstractShape = ({ color, geometry }) => {
    const meshRef = useRef();
    
    useFrame((state) => {
        if(meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
                {geometry === 'sphere' ? (
                     <icosahedronGeometry args={[1, 1]} />
                ) : (
                    <torusKnotGeometry args={[0.8, 0.3, 100, 16]} />
                )}
                <meshStandardMaterial 
                    color={color} 
                    wireframe 
                    emissive={color}
                    emissiveIntensity={0.5}
                />
            </mesh>
        </Float>
    )
}

// --- Main HTML Overlay Component ---
const InfoOverlay = ({ stage, progress }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={stage.id}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-stone-950/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl max-w-4xl w-full text-center shadow-2xl relative overflow-hidden"
        >
            {/* Top Glowing Border (Progress Bar) */}
            <motion.div 
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ width: "0%", left: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }} // Syncs with auto-play timer
                style={{ backgroundColor: stage.color }}
            />
            
            {/* Era Label */}
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase"
                style={{ color: stage.color }}
            >
                {stage.label}
            </motion.div>

            {/* Title */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                {stage.title}
            </h2>
            <p className="text-xl md:text-2xl text-stone-400 font-light mb-8">
                {stage.subtitle}
            </p>

            {/* Description */}
            <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                {stage.desc}
            </p>

            {/* Icons Grid */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {stage.icons.map((item, index) => (
                    <motion.div 
                        key={item.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                        className="flex flex-col items-center gap-3"
                    >
                        <div className={`text-4xl md:text-5xl ${item.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                            <item.Icon />
                        </div>
                        <span className="text-xs font-medium text-stone-500 tracking-wide uppercase">{item.label}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- Main Component ---
const LifeJourney = () => {
  const [index, setIndex] = useState(0);

  // Auto-Play Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % LIFE_STAGES.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const currentStage = LIFE_STAGES[index];

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden border-t border-stone-900">
      
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
            <color attach="background" args={["#050505"]} />
            
            {/* Cinematic Lighting */}
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color={currentStage.color} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="white" />
            
            {/* Dynamic Background */}
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            <Sparkles 
                count={150} 
                scale={10} 
                size={4} 
                speed={0.4} 
                opacity={0.6} 
                color={currentStage.color} // Sparkles change color
            />

            {/* Central Abstract Object */}
            <AbstractShape color={currentStage.color} geometry={currentStage.geometry} />

            {/* Camera Mover */}
            <CameraRig targetPosition={currentStage.camPos} />
        </Canvas>
      </div>

      {/* HTML Interface */}
      <InfoOverlay stage={currentStage} />

      {/* Manual Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {LIFE_STAGES.map((_, idx) => (
            <button 
                key={idx}
                onClick={() => setIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${idx === index ? "bg-white scale-125 shadow-[0_0_10px_white]" : "bg-stone-700 hover:bg-stone-500"}`}
            />
        ))}
      </div>

    </section>
  );
};

export default LifeJourney;