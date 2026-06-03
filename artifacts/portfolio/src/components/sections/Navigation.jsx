import { useState, useEffect } from "react";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold tracking-tight text-white hover:text-primary transition-colors" data-testid="link-home">
          Arsalan Zubairi.
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white relative group transition-colors"
              data-testid={`link-${link.name.toLowerCase()}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="https://github.com/arsalancoder1"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-github"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-primary/60 text-white text-sm font-medium px-4 py-2 rounded-full transition-all hover:shadow-[0_0_12px_rgba(124,58,237,0.4)]"
          >
            <Github size={16} />
            View GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
