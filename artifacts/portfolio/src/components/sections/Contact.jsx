const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, Send, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    reset();
  };

  return (
    _jsxDEV('section', { id: "contact", className: "py-24 relative" , children: 
      _jsxDEV('div', { className: "max-w-7xl mx-auto px-6"  , children: [
        _jsxDEV(motion.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mb-16",
 children: 
          _jsxDEV('h2', { className: "text-3xl md:text-4xl font-bold text-white inline-block relative"     , children: ["Get In Touch"

            , _jsxDEV('span', { className: "absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"      ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 41}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 39}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 33}, this)

        , _jsxDEV('div', { className: "grid grid-cols-1 lg:grid-cols-2 gap-12"   , children: [
          /* Contact Info */
          _jsxDEV(motion.div, {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            className: "glass-card p-8 md:p-10 flex flex-col justify-between"     ,
 children: [
            _jsxDEV('div', { children: [
              _jsxDEV('h3', { className: "text-2xl font-bold text-white mb-8"   , children: "Let's talk about everything!"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 54}, this)

              , _jsxDEV('div', { className: "space-y-6", children: [
                _jsxDEV('div', { className: "flex items-center gap-4"  , children: [
                  _jsxDEV('div', { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"       , children: 
                    _jsxDEV(Mail, { size: 20,}, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this )
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this)
                  , _jsxDEV('div', { children: [
                    _jsxDEV('p', { className: "text-sm text-white/50 mb-1 uppercase tracking-wider"    , children: "Email"}, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this)
                    , _jsxDEV('p', { className: "text-white font-medium" , children: "arsalanzubairi201@gmail.com"}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 61}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 57}, this)

                , _jsxDEV('div', { className: "flex items-center gap-4"  , children: [
                  _jsxDEV('div', { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"       , children: 
                    _jsxDEV(Phone, { size: 20,}, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this )
                  }, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this)
                  , _jsxDEV('div', { children: [
                    _jsxDEV('p', { className: "text-sm text-white/50 mb-1 uppercase tracking-wider"    , children: "Phone"}, void 0, false, {fileName: _jsxFileName, lineNumber: 72}, this)
                    , _jsxDEV('p', { className: "text-white font-medium" , children: "+1 (555) 123-4567"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this)
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 71}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 67}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 56}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 53}, this)

            , _jsxDEV('div', { className: "mt-12 pt-8 border-t border-white/10 flex flex-col items-center text-center"       , children: [
              _jsxDEV('p', { className: "text-sm text-white/50 mb-6 uppercase tracking-[0.2em]"    , children: "Follow Me" }, void 0, false, {fileName: _jsxFileName, lineNumber: 80}, this)
              , _jsxDEV('div', { className: "flex gap-5" , children: [
                _jsxDEV('a', {
                  href: "https://www.linkedin.com/in/arsalanzubairi",
                  target: "_blank",
                  rel: "noopener noreferrer" ,
                  className: "flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-primary/15 hover:border-primary/50 transition-all duration-300 group"               ,
                  style: { boxShadow: "0 0 0 0 rgba(168,85,247,0)" },
                  onMouseEnter: e => e.currentTarget.style.boxShadow = "0 0 20px rgba(168,85,247,0.3)",
                  onMouseLeave: e => e.currentTarget.style.boxShadow = "0 0 0 0 rgba(168,85,247,0)",
 children: [
                  _jsxDEV(Linkedin, { size: 26, className: "group-hover:text-primary transition-colors" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 91}, this )
                  , _jsxDEV('span', { className: "text-sm font-medium tracking-wide"  , children: "LinkedIn"}, void 0, false, {fileName: _jsxFileName, lineNumber: 92}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 82}, this)
                , _jsxDEV('a', {
                  href: "https://github.com/arsalancoder1",
                  target: "_blank",
                  rel: "noopener noreferrer" ,
                  className: "flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-primary/15 hover:border-primary/50 transition-all duration-300 group"               ,
                  onMouseEnter: e => e.currentTarget.style.boxShadow = "0 0 20px rgba(168,85,247,0.3)",
                  onMouseLeave: e => e.currentTarget.style.boxShadow = "0 0 0 0 rgba(168,85,247,0)",
 children: [
                  _jsxDEV(Github, { size: 26, className: "group-hover:text-primary transition-colors" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 102}, this )
                  , _jsxDEV('span', { className: "text-sm font-medium tracking-wide"  , children: "GitHub"}, void 0, false, {fileName: _jsxFileName, lineNumber: 103}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 94}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 81}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 79}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 47}, this)

          /* Contact Form */
          , _jsxDEV(motion.div, {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            className: "glass-card p-8 md:p-10"  ,
 children: 
            _jsxDEV('form', { onSubmit: handleSubmit(onSubmit), className: "space-y-6", children: [
              _jsxDEV('div', { children: [
                _jsxDEV('label', { htmlFor: "name", className: "block text-sm font-medium text-white/70 mb-2"    , children: "Name"}, void 0, false, {fileName: _jsxFileName, lineNumber: 118}, this)
                , _jsxDEV('input', {
                  ...register("name"),
                  id: "name",
                  className: "w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"             ,
                  placeholder: "John Doe" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 119}, this
                )
                , errors.name && _jsxDEV('p', { className: "text-red-400 text-sm mt-1"  , children: errors.name.message}, void 0, false, {fileName: _jsxFileName, lineNumber: 125}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 117}, this)

              , _jsxDEV('div', { children: [
                _jsxDEV('label', { htmlFor: "email", className: "block text-sm font-medium text-white/70 mb-2"    , children: "Email"}, void 0, false, {fileName: _jsxFileName, lineNumber: 129}, this)
                , _jsxDEV('input', {
                  ...register("email"),
                  id: "email",
                  type: "email",
                  className: "w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"             ,
                  placeholder: "john@example.com",}, void 0, false, {fileName: _jsxFileName, lineNumber: 130}, this
                )
                , errors.email && _jsxDEV('p', { className: "text-red-400 text-sm mt-1"  , children: errors.email.message}, void 0, false, {fileName: _jsxFileName, lineNumber: 137}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 128}, this)

              , _jsxDEV('div', { children: [
                _jsxDEV('label', { htmlFor: "subject", className: "block text-sm font-medium text-white/70 mb-2"    , children: "Subject"}, void 0, false, {fileName: _jsxFileName, lineNumber: 141}, this)
                , _jsxDEV('input', {
                  ...register("subject"),
                  id: "subject",
                  className: "w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"             ,
                  placeholder: "Project Inquiry" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 142}, this
                )
                , errors.subject && _jsxDEV('p', { className: "text-red-400 text-sm mt-1"  , children: errors.subject.message}, void 0, false, {fileName: _jsxFileName, lineNumber: 148}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 140}, this)

              , _jsxDEV('div', { children: [
                _jsxDEV('label', { htmlFor: "message", className: "block text-sm font-medium text-white/70 mb-2"    , children: "Message"}, void 0, false, {fileName: _jsxFileName, lineNumber: 152}, this)
                , _jsxDEV('textarea', {
                  ...register("message"),
                  id: "message",
                  rows: 4,
                  className: "w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"              ,
                  placeholder: "Hello, I'd like to talk about..."     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 153}, this
                )
                , errors.message && _jsxDEV('p', { className: "text-red-400 text-sm mt-1"  , children: errors.message.message}, void 0, false, {fileName: _jsxFileName, lineNumber: 160}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 151}, this)

              , _jsxDEV('button', {
                type: "submit",
                disabled: isSubmitting,
                className: "w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:neon-glow disabled:opacity-50 disabled:cursor-not-allowed mt-4"               ,
                'data-testid': "button-submit-contact",
 children: [
                isSubmitting ? "Sending..." : "Send Message"
                , _jsxDEV(Send, { size: 18,}, void 0, false, {fileName: _jsxFileName, lineNumber: 170}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 163}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 116}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 110}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 45}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 32}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 31}, this)
  );
}
