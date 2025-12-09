import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt' // Optional: remove if you didn't install it

const techOptions = ["All", ...new Set(PROJECTS.flatMap(p => p.technologies))];

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            15,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.02,   // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,   // If the tilt effect has to be reset on exit.
	easing:         "ybier-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function Projects() {
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects =
    selectedTech === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.technologies.includes(selectedTech));

  return (
    <div className="pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl font-bold bg-gradient-to-b from-white to-stone-500 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {techOptions.map((tech, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedTech(tech)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedTech === tech
                ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                : "bg-stone-900/50 text-stone-400 border border-stone-800 hover:border-white/30"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredProjects.map((project, index) => (
          <Tilt options={defaultOptions} key={index} className="h-full"> 
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full bg-stone-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                     <span className="text-white font-bold text-lg">{project.title}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-stone-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium rounded bg-white/5 text-stone-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium rounded bg-white/5 text-stone-300 border border-white/5">
                        +{project.technologies.length - 4}
                      </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-lg text-sm font-semibold transition-colors border border-white/10"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Projects;