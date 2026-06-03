import { motion } from "framer-motion";

export default function About() {
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 max-w-3xl"
        >
          <p className="text-lg text-white/80 leading-relaxed font-light">
            I'm Arsalan Zubairi, a passionate Front-End Developer skilled in HTML, CSS, JavaScript. I enjoy crafting visually appealing and functional websites that provide seamless user experiences. Currently, I'm pursuing a Diploma in ADSE (Aptech Pakistan) to further strengthen my software development skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
