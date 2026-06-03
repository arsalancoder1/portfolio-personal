const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { ArrowUp, Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    _jsxDEV('footer', { className: "border-t border-white/5 relative z-10 bg-black/40"    , children: [
      /* Main Footer Grid */
      _jsxDEV('div', { className: "max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10"       , children: [

        /* Brand */
        _jsxDEV('div', { children: [
          _jsxDEV('h3', { className: "text-white font-bold text-xl mb-1"   , style: { fontFamily: "'Space Grotesk', sans-serif" }, children: "Arsalan Zubairi"

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 13}, this)
          , _jsxDEV('p', { className: "text-primary text-sm font-medium tracking-wide mb-4"    , children: "Front-End Developer" }, void 0, false, {fileName: _jsxFileName, lineNumber: 16}, this)
          , _jsxDEV('p', { className: "text-white/40 text-sm leading-relaxed max-w-xs"   , children: "Building clean, responsive, and modern web experiences."

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 17}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 12}, this)

        /* Quick Links */
        , _jsxDEV('div', { children: [
          _jsxDEV('p', { className: "text-white/50 text-xs uppercase tracking-[0.2em] mb-5"    , children: "Quick Links" }, void 0, false, {fileName: _jsxFileName, lineNumber: 24}, this)
          , _jsxDEV('ul', { className: "space-y-3", children: 
            [
              { label: "Home", href: "#hero" },
              { label: "Projects", href: "#projects" },
            ].map(({ label, href }) => (
              _jsxDEV('li', { children: 
                _jsxDEV('a', {
                  href: href,
                  className: "text-white/60 hover:text-primary transition-colors text-sm flex items-center gap-2 group"       ,
 children: [
                  _jsxDEV('span', { className: "w-4 h-px bg-primary/40 group-hover:w-6 group-hover:bg-primary transition-all duration-300"      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this)
                  , label
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)
              }, label, false, {fileName: _jsxFileName, lineNumber: 30}, this)
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 23}, this)

        /* Connect */
        , _jsxDEV('div', { children: [
          _jsxDEV('p', { className: "text-white/50 text-xs uppercase tracking-[0.2em] mb-5"    , children: "Connect"}, void 0, false, {fileName: _jsxFileName, lineNumber: 45}, this)
          , _jsxDEV('ul', { className: "space-y-3", children: [
            _jsxDEV('li', { children: 
              _jsxDEV('a', {
                href: "https://www.linkedin.com/in/arsalanzubairi",
                target: "_blank",
                rel: "noopener noreferrer" ,
                className: "flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm group"       ,
 children: [
                _jsxDEV(Linkedin, { size: 16, className: "text-primary/60 group-hover:text-primary transition-colors"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this ), "LinkedIn"

              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 48}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
            , _jsxDEV('li', { children: 
              _jsxDEV('a', {
                href: "https://github.com/arsalancoder1",
                target: "_blank",
                rel: "noopener noreferrer" ,
                className: "flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm group"       ,
 children: [
                _jsxDEV(Github, { size: 16, className: "text-primary/60 group-hover:text-primary transition-colors"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this ), "GitHub"

              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 59}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this)
            , _jsxDEV('li', { children: 
              _jsxDEV('a', {
                href: "mailto:arsalanzubairi201@gmail.com",
                className: "flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm group"       ,
 children: [
                _jsxDEV(Mail, { size: 16, className: "text-primary/60 group-hover:text-primary transition-colors"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 74}, this ), "arsalanzubairi201@gmail.com"

              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 70}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 46}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 44}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 9}, this)

      /* Bottom Bar */
      , _jsxDEV('div', { className: "border-t border-white/5" , children: 
        _jsxDEV('div', { className: "max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3"         , children: [
          _jsxDEV('p', { className: "text-white/30 text-xs" , children: "© 2026 Arsalan Zubairi. All rights reserved."

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 85}, this)
          , _jsxDEV('button', {
            onClick: scrollToTop,
            className: "w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/40 transition-all group"             ,
            'aria-label': "Back to top"  ,
            'data-testid': "button-back-to-top",
 children: 
            _jsxDEV(ArrowUp, { size: 15, className: "group-hover:-translate-y-0.5 transition-transform" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 94}, this )
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 84}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 83}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 7}, this)
  );
}
