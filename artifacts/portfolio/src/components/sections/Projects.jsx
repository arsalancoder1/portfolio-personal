const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "IEC-WEB CLONE",
      description: "A clone of the IEC.org website built during my internship. Focused on replicating the layout, design, and core UI components using HTML and CSS.",
      tags: ["HTML", "CSS", "Bootstrap"],
      link: "https://iec-website.netlify.app/",
      github: "https://github.com/arsalancoder1/IEC-WEBSITE"
    },
    {
      title: "Wasayal Website Clone",
      description: "Redesigned and developed a responsive front-end clone of the Wasayal website using HTML, CSS, and Bootstrap, focusing on modern UI, layout accuracy, and cross-device compatibility.",
      tags: ["HTML", "CSS", "Bootstrap"],
      link: "https://wasayal-project.netlify.app/",
      github: "https://github.com/arsalancoder1/wsayal-project"
    },
    {
      title: "Dashboard Application",
      description: "Analytics dashboard with real-time data visualization, interactive charts, and customizable widgets.",
      tags: ["React", "Chart.js", "REST API"],
      link: "#",
      github: "#"
    },
    {
      title: "Weather Application",
      description: "Live weather app with geolocation, 5-day forecast, and dynamic backgrounds based on weather conditions.",
      tags: ["React", "OpenWeatherMap API"],
      link: "#",
      github: "#"
    }
  ];

  return (
    _jsxDEV('section', { id: "projects", className: "py-24 relative" , children: 
      _jsxDEV('div', { className: "max-w-7xl mx-auto px-6"  , children: [
        _jsxDEV(motion.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mb-16 flex justify-center"  ,
 children: 
          _jsxDEV('h2', { className: "text-3xl md:text-4xl font-bold text-white inline-block relative"     , children: ["Projects"

            , _jsxDEV('span', { className: "absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 45}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 39}, this)

        , _jsxDEV('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-8"   , children: 
          projects.map((project, i) => (
            _jsxDEV(motion.div, {

              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: "glass-card p-8 flex flex-col h-full group"     ,
 children: [
              _jsxDEV('div', { className: "flex justify-between items-start mb-4"   , children: [
                _jsxDEV('h3', { className: "text-2xl font-bold text-white group-hover:text-primary transition-colors"    , children: project.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)
                , _jsxDEV('div', { className: "flex gap-3 text-white/50"  , children: [
                  _jsxDEV('a', { href: project.github, target: "_blank", rel: "noopener noreferrer" , className: "hover:text-primary transition-colors" , children: _jsxDEV(Github, { size: 20,}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this)
                  , _jsxDEV('a', { href: project.link, target: "_blank", rel: "noopener noreferrer" , className: "hover:text-primary transition-colors" , children: _jsxDEV(ExternalLink, { size: 20,}, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this )}, void 0, false, {fileName: _jsxFileName, lineNumber: 65}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 63}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 61}, this)

              , _jsxDEV('p', { className: "text-white/70 font-light leading-relaxed mb-8 flex-grow"    , children: 
                project.description
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this)

              , _jsxDEV('div', { className: "flex flex-wrap gap-2 mt-auto"   , children: 
                project.tags.map(tag => (
                  _jsxDEV('span', { className: "px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"        , children: 
                    tag
                  }, tag, false, {fileName: _jsxFileName, lineNumber: 75}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this)
            ]}, i, true, {fileName: _jsxFileName, lineNumber: 53}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 38}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)
  );
}
