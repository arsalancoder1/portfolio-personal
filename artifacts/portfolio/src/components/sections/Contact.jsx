import { motion } from "framer-motion";
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
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative">
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Let's talk about everything!</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1 uppercase tracking-wider">Email</p>
                    <p className="text-white font-medium">arsalanzubairi201@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1 uppercase tracking-wider">Phone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center text-center">
              <p className="text-sm text-white/50 mb-6 uppercase tracking-[0.2em]">Follow Me</p>
              <div className="flex gap-5">
                <a
                  href="https://www.linkedin.com/in/arsalanzubairi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-primary/15 hover:border-primary/50 transition-all duration-300 group"
                  style={{ boxShadow: "0 0 0 0 rgba(168,85,247,0)" }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(168,85,247,0.3)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 0 0 rgba(168,85,247,0)"}
                >
                  <Linkedin size={26} className="group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium tracking-wide">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/arsalancoder1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-primary/15 hover:border-primary/50 transition-all duration-300 group"
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(168,85,247,0.3)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 0 0 rgba(168,85,247,0)"}
                >
                  <Github size={26} className="group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium tracking-wide">GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Name</label>
                <input
                  {...register("name")}
                  id="name"
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email</label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">Subject</label>
                <input
                  {...register("subject")}
                  id="subject"
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:neon-glow disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                data-testid="button-submit-contact"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
