import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      title: "Core",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)"]
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Tools",
      skills: ["Git", "Figma", "VS Code", "Webpack"]
    },
    {
      title: "Other",
      skills: ["REST APIs", "Responsive Design", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative">
            Skills & Technologies
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2 inline-block border-primary/50">{category.title}</h3>
              <div className="flex flex-col gap-4">
                {category.skills.map(skill => (
                  <div key={skill} className="group cursor-default">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white/80 font-medium group-hover:text-primary transition-colors">{skill}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary rounded-full opacity-70 group-hover:opacity-100 group-hover:neon-glow transition-all"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (i*0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
