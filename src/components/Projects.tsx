import { motion } from 'framer-motion';

import { Project } from '../types';

const projects: Project[] = [
  {
    title: "SkinSage – AI-Based Skin Analysis",
    description: "An Android application that scans the face to provide insights on skin health, estimated age, facial symmetry, and personalized skincare recommendations.",
    technologies: ["Flutter", "Python", "OpenCV", "Machine Learning"],
    link: "https://github.com/yourusername/skinsage"
  },
  {
    title: "Fitness Blog App",
    description: "A comprehensive fitness blog application with authentication and CRUD operations. Built with MERN stack.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    link: "https://github.com/yourusername/fitness-blog"
  },
  {
    title: "Autonomous Threat Detection in Luggage",
    description: "Classified luggage images as safe or containing threats (e.g., guns, knives) and segmented detected threat items using image processing techniques.",
    technologies: ["Python", "OpenCV", "Machine Learning"],
    link: "https://github.com/yourusername/giki-mess"
  },
  {
    title: "ECG Signal Filtering and Noise Suppression Using IIR Filters",
    description: "Designed IIR filters to reduce baseline wander and power line interference while preserving ECG signal integrity.",
    technologies: ["MATLAB", "Signal Processing"],
    link: "https://github.com/yourusername/ecg-signal-filtering" 
  },
  {
    title: "Pipelined Multicycle MIPS Processor",
    description: "Developed and implemented a 16-bit pipelined multicycle MIPS processor on an FPGA development board.",
    technologies: ["Verilog", "Xilinx", "FPGA"],
    link: "https://github.com/yourusername/mips-processor" 
  },
  {
    title: "Finding the Shortest Path",
    description: "Built a GUI-based model that constructs graphs between nodes and computes the shortest path between selected points.",
    technologies: ["C++", "Graph Theory", "GUI Framework"],
    link: "https://github.com/yourusername/shortest-path" 
  },
  {
    title: "Hybrid Filesharing Model in Linux",
    description: "Created a multi-client file-sharing system running on Ubuntu, handling concurrent client requests efficiently.",
    technologies: ["C/C++", "Linux Sockets", "Multi-threading"],
    link: "https://github.com/yourusername/linux-filesharing"
  },
  {
    title: "Plant-Growth Simulation System",
    description: "Developed a desktop application simulating plant growth over time, with an interactive interface for input and visualization.",
    technologies: ["Java", "GUI Framework"],
    link: "https://github.com/yourusername/plant-growth-simulation"
  },
  {
    title: "Serial/Parallel Matrix Multiplier (n x n)",
    description: "Developed and implemented a matrix multiplier on FPGA, inputs entered by user at run time, and results displayed on FPGA.",
    technologies: ["Verilog", "Xilinx", "FPGA"],
    link: "https://github.com/yourusername/matrix-multiplier"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg p-6 bg-background/50 hover:bg-background/70 backdrop-blur-sm shadow-lg  border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-4 text-secondary">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-full  text-white text-sm font-semibold bg-primary  hover:bg-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
