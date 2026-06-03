import { motion } from "framer-motion";
import portraitImg from "@/assets/portrait.png";

export default function Hero() {
  return (
    <section id="hero" className="h-screen relative flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col text-center md:text-left order-2 md:order-1"
        >
          <span className="text-primary font-medium tracking-widest text-sm mb-4 uppercase">Hello, I'm.</span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
            Arsalan
            <br />
            Zubairi
          </h1>
        </motion.div>

        {/* Center Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center order-1 md:order-2"
        >
          <div className="absolute inset-0 bg-primary/40 rounded-full blur-[80px] -z-10 mix-blend-screen w-[80%] h-[80%] m-auto neon-glow"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border border-white/10 glass-card p-2">
            <img
              src={portraitImg}
              alt="Arsalan Zubairi"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col text-center md:text-right order-3 items-center md:items-end justify-center h-full"
        >
          <span className="text-primary font-medium tracking-widest text-sm mb-4 uppercase">Role</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Front-End<br />
            <span className="text-primary text-glow">Developer</span>
          </h2>
        </motion.div>
      </div>

      {/* Resume Button - Lower Right */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        href="#"
        className="absolute bottom-12 right-8 md:right-16 text-white/70 hover:text-white text-sm font-semibold tracking-widest border-b border-primary pb-1 flex items-center gap-2 group transition-all hover:text-glow"
        data-testid="link-resume"
      >
        RESUME
        <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">↗</span>
      </motion.a>
    </section>
  );
}
