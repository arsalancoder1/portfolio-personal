import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-white/5 relative z-10 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm font-light">
          © 2024 Arsalan Zubairi. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-primary hover:bg-primary/10 transition-all group"
          aria-label="Back to top"
          data-testid="button-back-to-top"
        >
          <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
