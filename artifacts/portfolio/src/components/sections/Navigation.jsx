const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { useState, useEffect } from "react";
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
    _jsxDEV('nav', {
      className: cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      ),
 children: 
      _jsxDEV('div', { className: "max-w-7xl mx-auto flex items-center justify-between"    , children: [
        _jsxDEV('a', { href: "#hero", className: "text-xl font-bold tracking-tight text-white hover:text-primary transition-colors"     , 'data-testid': "link-home", children: "Arsalan Zubairi."

        }, void 0, false, {fileName: _jsxFileName, lineNumber: 30}, this)

        , _jsxDEV('div', { className: "hidden md:flex items-center gap-8"   , children: [
          navLinks.map((link) => (
            _jsxDEV('a', {

              href: link.href,
              className: "text-sm font-medium text-white/70 hover:text-white relative group transition-colors"      ,
              'data-testid': `link-${link.name.toLowerCase()}`,
 children: [
              link.name
              , _jsxDEV('span', { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 43}, this)
            ]}, link.name, true, {fileName: _jsxFileName, lineNumber: 36}, this)
          ))

          , _jsxDEV('a', {
            href: "https://github.com/arsalancoder1",
            target: "_blank",
            rel: "noopener noreferrer" ,
            'data-testid': "link-github",
            className: "flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-primary/60 text-white text-sm font-medium px-4 py-2 rounded-full transition-all hover:shadow-[0_0_12px_rgba(124,58,237,0.4)]"               ,
 children: [
            _jsxDEV(Github, { size: 16,}, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this ), "View GitHub"

          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 47}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 34}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 29}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 23}, this)
  );
}
