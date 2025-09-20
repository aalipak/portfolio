import { FC } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"]
  },
  {
    category: "Web & App Development",
    items: ["HTML", "CSS", "React", "Flutter", "Node.js", "Express.js"]
  },
  {
    category: "Database",
    items: ["SQL", "MongoDB", "Firebase Firestore"]
  },
  {
    category: "APIs & Cloud",
    items: ["RESTful APIs", "GraphQL", "Firebase", "Docker"]
  },
  {
    category: "Technologies & Tools",
    items: ["MATLAB", "OpenCV", "Verilog", "Xilinx"]
  },
  {
    category: "Libraries/Frameworks",
    items: ["STL", "NumPy"]
  },
  {
    category: "Assembly & Low-Level",
    items: ["MIPS Assembly"]
  },
  {
    category: "Other",
    items: ["Git", "Linux", "Agile Development"]
  }
];

export const About: FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 text-gray-300">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          About Me
        </motion.h2>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-4 text-secondary">
            Education
          </h3>
          <div className="p-6 rounded-lg bg-background/50 backdrop-blur-sm">
            <h4 className="text-xl font-semibold">Bachelor's in Computer Engineering</h4>
            <p className="text-lg">NUST, Rawalpindi</p>
            <p className="mt-2">
              <span className="font-medium">Graduated:</span> 2025
            </p>
            <p className="mt-1">
              <span className="font-medium">CGPA:</span> 3.6
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-secondary">
            Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-gray-700"
              >
                <h4 className="text-lg font-semibold mb-3 text-white">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-primary/20  text-yellow-300  border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};