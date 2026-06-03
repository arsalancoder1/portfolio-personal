import { ArrowUp, Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/5 relative z-10 bg-black/40">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Arsalan Zubairi
          </h3>
          <p className="text-primary text-sm font-medium tracking-wide mb-4">Front-End Developer</p>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Building clean, responsive, and modern web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-5">Quick Links</p>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "#hero" },
              { label: "Projects", href: "#projects" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-white/60 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-4 h-px bg-primary/40 group-hover:w-6 group-hover:bg-primary transition-all duration-300"></span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-5">Connect</p>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.linkedin.com/in/arsalanzubairi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm group"
              >
                <Linkedin size={16} className="text-primary/60 group-hover:text-primary transition-colors" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/arsalancoder1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm group"
              >
                <Github size={16} className="text-primary/60 group-hover:text-primary transition-colors" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:arsalanzubairi201@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm group"
              >
                <Mail size={16} className="text-primary/60 group-hover:text-primary transition-colors" />
                arsalanzubairi201@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © 2026 Arsalan Zubairi. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/40 transition-all group"
            aria-label="Back to top"
            data-testid="button-back-to-top"
          >
            <ArrowUp size={15} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
