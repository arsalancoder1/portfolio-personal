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
          <span
            className="font-light tracking-[0.3em] text-xs mb-5 uppercase self-start pl-1"
            style={{ color: "rgba(168,85,247,0.8)", fontFamily: "Varela, sans-serif", letterSpacing: "0.35em" }}
          >
            Hello, I'm.
          </span>
          <h1
            className="leading-[1.05] tracking-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              background: "linear-gradient(135deg, #ffffff 30%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
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
          <span
            className="font-light tracking-[0.3em] text-xs mb-5 uppercase"
            style={{ color: "rgba(168,85,247,0.8)", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.35em" }}
          >
            Role
          </span>
          <h2
            className="leading-[1.1]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
            }}
          >
            <span className="font-300 text-white/90" style={{ fontWeight: 300, display: "block" }}>Front-End</span>
            <span
              style={{
                fontWeight: 700,
                background: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px rgba(168,85,247,0.5))",
                display: "block",
              }}
            >
              Developer
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Resume Button - Lower Right */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        href="#"
        className="absolute bottom-12 right-8 md:right-16 text-white/60 hover:text-white text-xs font-medium tracking-[0.2em] uppercase border-b border-primary/60 pb-1 flex items-center gap-2 group transition-all"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        data-testid="link-resume"
      >
        Resume
        <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform text-primary">↗</span>
      </motion.a>
    </section>
  );
}
