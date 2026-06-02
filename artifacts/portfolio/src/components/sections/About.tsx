import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "20+", label: "Technologies" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 md:p-10"
          >
            <p className="text-lg text-white/80 leading-relaxed font-light">
              I'm Arsalan Zubairi, a passionate front-end developer with expertise in crafting beautiful, responsive web applications. I specialize in turning complex design ideas into pixel-perfect, performant code. My approach combines technical precision with creative sensibility to deliver exceptional digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-6 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-black text-primary mb-2 text-glow">{stat.value}</span>
                <span className="text-sm font-medium text-white/60 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
