import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const techOptions = ["All", ...new Set(PROJECTS.flatMap(p => p.technologies))];

function Projects() {
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects =
    selectedTech === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.technologies.includes(selectedTech));

  return (
    <div className="pb-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      {/* Filter Tabs - Glass Effect */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {techOptions.map((tech, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
              selectedTech === tech
                ? "bg-purple-600 text-white border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)]"
                : "bg-neutral-900 text-stone-400 border-neutral-800 hover:border-purple-500 hover:text-white"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-12 lg:gap-16">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row gap-8 items-start p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/60 transition-colors shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(120, 50, 200, 0.3)" }}
          >
            {/* Image Container with 3D feel */}
            <motion.div
              className="w-full lg:w-1/3 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-700/50"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            {/* Details */}
            <div className="w-full lg:w-2/3 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-stone-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold rounded-md bg-purple-900/30 text-purple-200 border border-purple-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-auto">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 text-sm font-medium bg-neutral-800 text-white rounded-lg border border-neutral-700 hover:bg-neutral-700 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;