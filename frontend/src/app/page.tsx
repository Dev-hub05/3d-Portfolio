"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, Globe, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("Message transmitted successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error transmitting message.");
      }
    } catch (err) {
      setStatus("Connection to backend failed.");
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen selection:bg-primary selection:text-black">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#050505] to-black">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <nav className="fixed w-full z-50 glass-panel border-b-0 border-white/5 px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-primary font-mono font-bold text-xl flex items-center gap-2"
        >
          <Terminal size={24} />
          <span>DEV_SYS.exe</span>
        </motion.div>
        <div className="flex gap-6 text-sm font-mono tracking-widest hidden md:flex">
          {["ABOUT", "PROJECTS", "SKILLS", "CONTACT"].map((item, i) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-primary transition-colors duration-300"
            >
              //{item}
            </motion.a>
          ))}
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-7xl mx-auto space-y-40 pb-40">
        
        {/* HERO SECTION */}
        <section className="min-h-[70vh] flex flex-col justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl"
          >
            <p className="text-primary font-mono text-lg flex items-center gap-2">
              <span className="w-12 h-[1px] bg-primary block"></span> 
              System Initialized
            </p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
              BUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glow-text">
                DIGITAL FUTURES
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              I am a Full-Stack Engineer specializing in high-performance web applications, 
              scalable architectures, and immersive digital experiences.
            </p>
            
            <div className="flex gap-4 pt-8">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 bg-primary text-black font-bold font-mono text-sm hover:glow-box transition-all"
              >
                DEPLOY_PROJECTS
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com" 
                target="_blank"
                className="px-8 py-4 glass-panel border border-white/10 hover:border-primary/50 transition-all flex items-center gap-2"
              >
                <Github size={18} /> GITHUB
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-16">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-bold tracking-tight">FEATURED_WORK</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Quantum File System", icon: <Code2 />, tech: ["Rust", "React", "WASM"] },
              { title: "Neural Trading Bot", icon: <Cpu />, tech: ["Python", "FastAPI", "AI"] },
              { title: "Neon Analytics", icon: <Globe />, tech: ["Next.js", "Tailwind", "Postgres"] }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-panel p-8 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-primary mb-6">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 text-sm">
                    Advanced system architecture with real-time data processing capabilities and high availability.
                  </p>
                  <div className="flex gap-2 pt-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">INITIATE_CONTACT</h2>
            <p className="text-gray-400">Establish a secure connection with my mainframe.</p>
          </div>

          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 text-left space-y-6"
          >
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400">IDENTIFIER [NAME]</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black/50 border border-white/10 p-3 outline-none focus:border-primary transition-colors font-mono text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400">NETWORK [EMAIL]</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-black/50 border border-white/10 p-3 outline-none focus:border-primary transition-colors font-mono text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400">PAYLOAD [MESSAGE]</label>
              <textarea 
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-black/50 border border-white/10 p-3 outline-none focus:border-primary transition-colors font-mono text-sm resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-white text-black font-bold font-mono py-4 hover:bg-primary transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              TRANSMIT_DATA
            </button>
            {status && (
              <p className="text-center font-mono text-sm text-primary animate-pulse">
                {status}
              </p>
            )}
          </motion.form>
        </section>

      </main>

      <footer className="border-t border-white/5 py-8 text-center text-gray-600 font-mono text-sm">
        <p>SYSTEM_OFFLINE // © {new Date().getFullYear()} ALL_RIGHTS_RESERVED.</p>
      </footer>
    </div>
  );
}
