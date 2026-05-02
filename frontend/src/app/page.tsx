"use client";

import { motion } from "framer-motion";
import { 
  Terminal, Code2, Cpu, Globe, Mail, ChevronRight, 
  ExternalLink, Database, Wrench, Layers, Award,
  Server, Smartphone, Shield, Zap, CheckCircle, Activity, Settings
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---
const Github = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Twitter = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const TypeWriter = ({ text, delay = 50 }: { text: string, delay?: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {currentText}
      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="text-primary">
        _
      </motion.span>
    </span>
  );
};

// --- Data ---
const SKILLS = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
  "Web Dev": ["React.js", "Next.js", "Node.js", "Tailwind CSS", "Django", "HTML/CSS"],
  Tools: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Linux"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
};

const PROJECTS = [
  {
    title: "Hospital Management System",
    problem: "Inefficient, paper-based patient tracking and appointment scheduling causing delays and errors.",
    solution: "A digitized workflow platform with secure authentication, real-time patient records, and automated billing.",
    tech: ["Django", "Python", "PostgreSQL", "Bootstrap"],
    features: ["Role-based access (Admin, Doctor, Patient)", "Real-time appointment booking", "Electronic Health Records (EHR)"],
    icon: <Activity size={32} />,
    link: "#",
    color: "from-primary/20 to-transparent"
  },
  {
    title: "MindHaven Website",
    problem: "Lack of accessible, centralized mental health resources and professional support.",
    solution: "An interactive platform offering curated resources, secure peer-support groups, and seamless professional connections.",
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    features: ["Real-time chat integration", "Resource library", "Secure appointment booking system"],
    icon: <Globe size={32} />,
    link: "#",
    color: "from-secondary/20 to-transparent"
  }
];

const SERVICES = [
  { title: "Web Development", desc: "Building responsive, high-performance web applications using modern frameworks.", icon: <Code2 /> },
  { title: "Backend Systems", desc: "Designing scalable APIs, microservices, and robust server architectures.", icon: <Server /> },
  { title: "Database Architecture", desc: "Optimizing relational and NoSQL databases for speed and data integrity.", icon: <Database /> },
  { title: "Bug Fixing & Tuning", desc: "Diagnosing complex issues and optimizing system performance and security.", icon: <Wrench /> },
];

const CERTIFICATIONS = [
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "2024" },
  { title: "Meta Front-End Developer", issuer: "Coursera / Meta", date: "2023" },
  { title: "Full-Stack Web Development", issuer: "Udemy Bootcamp", date: "2023" },
];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => setMounted(true), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("TRANSMITTING...");
    setTimeout(() => {
      setStatus("DATA RECEIVED SUCCESSFULLY. AWAITING RESPONSE.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 4000);
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen selection:bg-primary selection:text-black font-sans bg-background relative">
      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1] cyber-grid opacity-20"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel border-b-0 border-white/5 px-6 py-4 flex justify-between items-center top-0">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-primary font-mono font-bold text-xl flex items-center gap-2 glow-text"
        >
          <Terminal size={24} />
          <span>SATDEV.sys</span>
        </motion.div>
        <div className="hidden md:flex gap-8 text-sm font-mono tracking-widest text-gray-400">
          {["ABOUT", "SKILLS", "PROJECTS", "CONTACT"].map((item, i) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-primary transition-colors duration-300 flex items-center gap-1"
            >
              <span className="text-primary/50">0{i+1}.</span>{item}
            </motion.a>
          ))}
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-6xl mx-auto space-y-40 pb-40">
        
        {/* HERO SECTION */}
        <section className="min-h-[75vh] flex flex-col justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl relative z-10"
          >
            <p className="text-primary font-mono text-lg flex items-center gap-2">
              <span className="w-12 h-[1px] bg-primary block"></span> 
              Hello World, my name is
            </p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
              Satdev.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              <TypeWriter text="I build high-tech digital experiences." delay={60} />
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed pt-4">
              I am a Computer Science student and <span className="text-primary">Full-Stack Developer</span> specializing in scalable architecture, intuitive interfaces, and optimized backend systems.
            </p>
            
            <div className="flex gap-4 pt-8">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 bg-primary/10 text-primary border border-primary font-bold font-mono text-sm hover:glow-box transition-all clip-edge flex items-center gap-2"
              >
                VIEW_WORK <ChevronRight size={16} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-8 py-4 glass-panel border border-white/10 hover:border-white/30 text-white transition-all flex items-center gap-2"
              >
                <Mail size={16} /> CONTACT_ME
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-mono font-bold text-white flex items-center gap-2">
              <span className="text-primary">01.</span> SYSTEM_SPECS // ABOUT
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed space-y-4 text-lg"
            >
              <p>
                As a passionate Computer Science student, I operate at the intersection of design and logic. My objective is to engineer software that not only functions flawlessly but provides an exceptional user experience.
              </p>
              <p>
                With a strong academic foundation reflected in my <span className="text-primary font-bold">8.5 CGPA</span>, I continuously explore emerging technologies and apply theoretical concepts to practical, real-world problems.
              </p>
              <p>
                Whether I'm designing complex database schemas, implementing responsive UI components, or hunting down elusive bugs, I approach every challenge with an analytical mindset and a commitment to excellence.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "CGPA", value: "8.5", icon: <Award className="text-secondary" /> },
                { label: "Projects", value: "15+", icon: <Code2 className="text-primary" /> },
                { label: "Experience", value: "3 Yrs", icon: <Settings className="text-accent" /> },
                { label: "Commits", value: "1.2k+", icon: <Github className="text-gray-300" /> }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-6 flex flex-col items-center justify-center text-center space-y-3 group hover:border-primary/50 transition-colors"
                >
                  <div className="p-3 bg-white/5 rounded-full group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-mono font-bold text-white flex items-center gap-2">
              <span className="text-primary">02.</span> CORE_MODULES // SKILLS
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SKILLS).map(([category, skills], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-50"></div>
                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                  {category === "Languages" && <Code2 size={20} className="text-primary" />}
                  {category === "Web Dev" && <Globe size={20} className="text-secondary" />}
                  {category === "Tools" && <Wrench size={20} className="text-accent" />}
                  {category === "Databases" && <Database size={20} className="text-primary" />}
                  {category}
                </h3>
                <ul className="space-y-3">
                  {skills.map((skill, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <ChevronRight size={14} className="text-primary/50" />
                      <span className="font-mono text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-mono font-bold text-white flex items-center gap-2">
              <span className="text-primary">03.</span> DEPLOYMENTS // PROJECTS
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
          
          <div className="space-y-16">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
              >
                {/* Project Visual */}
                <div className="w-full lg:w-1/2">
                  <div className={`relative w-full aspect-video glass-panel rounded-lg overflow-hidden group border border-white/10 hover:border-primary/50 transition-all duration-500`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 cyber-grid opacity-30"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 group-hover:text-white transition-colors duration-500 z-10">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-4">
                        {project.icon}
                      </motion.div>
                      <h4 className="text-2xl font-bold tracking-wider opacity-50">{project.title.toUpperCase()}</h4>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`w-full lg:w-1/2 space-y-6 ${i % 2 !== 0 ? 'lg:text-right' : ''}`}>
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  
                  <div className="glass-panel p-6 relative">
                    <div className="absolute -left-[1px] top-4 bottom-4 w-[2px] bg-primary"></div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-mono text-primary mb-1">THE_PROBLEM:</h4>
                        <p className="text-gray-400 text-sm">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-mono text-secondary mb-1">THE_SOLUTION:</h4>
                        <p className="text-gray-300 text-sm">{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono text-gray-500">KEY_FEATURES:</h4>
                    <ul className={`text-sm text-gray-400 space-y-1 ${i % 2 !== 0 ? 'flex flex-col items-end' : ''}`}>
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          {i % 2 === 0 && <CheckCircle size={14} className="text-primary/70" />}
                          {feature}
                          {i % 2 !== 0 && <CheckCircle size={14} className="text-primary/70" />}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`flex flex-wrap gap-2 ${i % 2 !== 0 ? 'justify-end' : ''}`}>
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-mono text-black bg-primary/90 px-3 py-1 rounded-full font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={`flex gap-4 pt-2 ${i % 2 !== 0 ? 'justify-end' : ''}`}>
                    <a href={project.link} className="flex items-center gap-2 text-sm font-mono text-white hover:text-primary transition-colors">
                      <Github size={18} /> SOURCE
                    </a>
                    <a href={project.link} className="flex items-center gap-2 text-sm font-mono text-white hover:text-secondary transition-colors">
                      <ExternalLink size={18} /> LIVE_DEMO
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SERVICES & CERTIFICATIONS */}
        <section className="grid lg:grid-cols-2 gap-12">
          
          {/* Services */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-mono font-bold text-white flex items-center gap-2">
                <span className="text-primary">04.</span> SERVICES
              </h2>
            </div>
            <div className="space-y-4">
              {SERVICES.map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-5 flex gap-4 items-start group hover:border-primary/30 transition-colors"
                >
                  <div className="text-primary mt-1 group-hover:text-secondary transition-colors">{service.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-mono font-bold text-white flex items-center gap-2">
                <span className="text-primary">05.</span> CERTIFICATIONS
              </h2>
            </div>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-6 flex flex-col justify-between group hover:border-secondary/30 transition-colors relative overflow-hidden"
                >
                  <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Award size={100} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                    <div className="flex justify-between items-center text-sm font-mono text-gray-400">
                      <span>{cert.issuer}</span>
                      <span className="text-primary/70">{cert.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <p className="font-mono text-primary text-sm">06. WHAT'S NEXT?</p>
            <h2 className="text-5xl font-bold tracking-tight text-white">Get In Touch</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
            </p>
          </div>

          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 text-left space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400">IDENTIFIER [NAME]</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 p-3 outline-none focus:border-primary transition-colors font-mono text-sm text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400">NETWORK [EMAIL]</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 p-3 outline-none focus:border-primary transition-colors font-mono text-sm text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400">PAYLOAD [MESSAGE]</label>
              <textarea 
                required
                rows={5}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-black/50 border border-white/10 p-3 outline-none focus:border-primary transition-colors font-mono text-sm resize-none text-white"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-primary/10 text-primary border border-primary font-bold font-mono py-4 hover:bg-primary hover:text-black transition-all flex items-center justify-center gap-2 clip-edge"
            >
              <Mail size={18} />
              TRANSMIT_DATA
            </button>
            
            {status && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }}
                className="text-center font-mono text-sm text-primary pt-2"
              >
                {status}
              </motion.div>
            )}
          </motion.form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            {[
              { icon: <Github />, link: "#" },
              { icon: <Linkedin />, link: "#" },
              { icon: <Twitter />, link: "#" },
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -5, color: "var(--primary)" }}
                href={social.link}
                className="text-gray-400 transition-colors p-3 glass-panel rounded-full hover:border-primary/50"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-gray-500 font-mono text-sm bg-black/20">
        <p>BUILT_BY {'<'} SATDEV {'/>'} // © {new Date().getFullYear()} ALL_RIGHTS_RESERVED.</p>
        <p className="text-xs mt-2 opacity-50">SYSTEM_STATUS: ONLINE</p>
      </footer>
    </div>
  );
}
