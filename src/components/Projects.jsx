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
        className="my-20 text-center text-4xl font-bold"
      >
        Projects
      </motion.h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {techOptions.map((tech, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              selectedTech === tech
                ? "bg-stone-800 text-white border-stone-700"
                : "bg-white text-stone-700 border-stone-300"
            } transition-all duration-300`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="space-y-12">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-wrap justify-center lg:justify-start items-start gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded shadow-lg w-[250px] h-[250px] object-cover"
              />
            </motion.div>

            {/* Details */}
            <div className="w-full lg:w-3/4 max-w-xl">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-stone-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mb-2 rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-gray-800 text-white rounded hover:bg-gray-900 transition"
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
