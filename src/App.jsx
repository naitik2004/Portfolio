import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Monitor, Github, Linkedin, Mail, ExternalLink, Cpu, Smile, Sparkles, Command, Zap } from 'lucide-react';
import { link } from 'framer-motion/client';

function App() {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const fullText = '> NAITIK_PANDEY';
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          currentIndex = 0;
        }, 2000);
      }
    }, 150);

    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);

    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-[#00ff00] text-2xl font-mono flex items-center gap-4"
        >
          <Command className="w-8 h-8 animate-spin" />
          INITIALIZING...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono crt-effect">
      <div className="scanline"></div>
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full p-4 bg-[#0a0a0a]/90 backdrop-blur-sm z-50 border-b border-[#00ff00]/20"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="#about" className="hover:text-[#00ff00] transition-colors flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              ABOUT
            </a>
            <a href="#portfolio" className="hover:text-[#00ff00] transition-colors flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              PORTFOLIO
            </a>
            <a href="#contact" className="hover:text-[#00ff00] transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              CONTACT
            </a>
          </div>
          <div className="text-sm text-[#00ff00] flex items-center gap-2">
            <span className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse"></span>
            ONLINE
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQgPSJNMzAgMzBtLTIgMGEyIDIgMCAxIDAgNCAwYTIgMiAwIDEgMCAtNCAwIiBmaWxsPSJyZ2JhKDAsIDI1NSwgMCwgMC4xKSIvPgo8L3N2Zz4=')] opacity-10"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[8rem] leading-none font-bold mb-6 text-[#00ff00] relative">
              HI<br/>THERE
              <motion.span
                className="absolute -top-4 -right-4 text-2xl text-white/30"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                _
              </motion.span>
            </h1>
            <div className="text-xl font-mono mb-8 typewriter">{text}</div>
            <p className="text-lg text-white/70 max-w-md">
              My friend. Welcome to my digital space. Let's create something extraordinary together.
            </p>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-20 -left-20 animate-pulse">
              <Sparkles className="w-32 h-32 stroke-[#00ff00]" />
            </div>
            <div className="border-2 border-[#00ff00] p-1 glitch-container relative">
              <img 
                src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800" 
                alt="Developer" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="glitch-effect"></div>
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 text-sm border border-[#00ff00]/30">
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  SYSTEM.READY
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#111111] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQgPSJNMzAgMzBtLTIgMGEyIDIgMCAxIDAgNCAwYTIgMiAwIDEgMCAtNCAwIiBmaWxsPSJyZ2JhKDAsIDI1NSwgMCwgMC4xKSIvPgo8L3N2Zz4=')] opacity-5"></div>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-button"></span>
                <span className="terminal-button"></span>
                <span className="terminal-button"></span>
              </div>
              <div className="terminal-content">
                <h2 className="text-4xl mb-8 font-bold text-[#00ff00] section-header">[WHO I AM]</h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  Master Procrastinator. Daddy Joke Connoisseur. Expert Creative Individual. 
                  Vision Seeker. Dream Chaser. Code Poet. Aesthetic Enthusiast. 
                  Good Friend. Best Designer.
                </p>
              </div>
            </div>
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-button"></span>
                <span className="terminal-button"></span>
                <span className="terminal-button"></span>
              </div>
              <div className="terminal-content">
                <h2 className="text-4xl mb-8 font-bold text-[#00ff00] section-header">[MY FAVORITE TOOLS]</h2>
                <div className="grid grid-cols-3 gap-4">
                
                  <div className="tool-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" 
                         alt="Figma" 
                         className="w-12 h-12 mb-2" />
                    <span className="text-sm text-white/70">Figma</span>
                  </div>
                  
                  <div className="tool-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png" 
                         alt="Blender" 
                         className="w-12 h-12 mb-2" />
                    <span className="text-sm text-white/70">Blender</span>
                  </div>
                  <div className="tool-item">
                    <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" 
                         alt="HTML" 
                         className="w-12 h-12 mb-2" />
                    <span className="text-sm text-white/70">HTML5</span>
                  </div>
                  <div className="tool-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" 
                         alt="CSS" 
                         className="w-12 h-12 mb-2" />
                    <span className="text-sm text-white/70">CSS3</span>
                  </div>
                  <div className="tool-item">
                    <img src="https://seeklogo.com/images/N/notion-app-logo-009B1538E8-seeklogo.com.png" 
                         alt="Notion" 
                         className="w-12 h-12 mb-2" />
                    <span className="text-sm text-white/70">Notion</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl mb-12 font-bold text-[#00ff00] section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            DOPE PROJECTS
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Catch-Me! If You Can',
                description: 'A retro-styled shopping platform with modern UX',
                image: 'https://media-hosting.imagekit.io/d99446945f4b480b/Screenshot 2025-04-08 at 11.46.16 PM.png?Expires=1838745831&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sRX8vO3woDVFarSaRZ~Es~dNNR8jQZbHVogxqHSzVZ3r1CEb4UAF1PLTTaB1q04xK0itwVutGtC7QxTWYF5bbArAlqjTxpz5CSw0OKOQ4R14ORfaf7ZKe1PNBSNODUOEkQbgZCKXoV7wmlLI65gZgN29qbBFoyVz0Ic7SaVRNuna07EQ7X8IFUdsUxbyQgk-gFnf0hhNkY5o-bc4y3z3w0YQ0nboeyy8Tqb~fzQu9sS~1Rrd1jtZcLz3NUhgtH~QYtDAiWz8tPIuzgjFgbMW-rpEcXenr4DMf~BVLO~LjVGof4wDo54JHxpCjGxX-mU8J6uXYsd54yVe2bFeqH1JIA__',
                tech: ['React', 'JavaScript']
              },
              {
                title: 'Number Guessing',
                description: 'Minimalist showcase platform for artists',
                image: 'https://media-hosting.imagekit.io/b2315a0cddc9479e/Screenshot%202025-04-08%20at%2011.46.59%E2%80%AFPM.png?Expires=1838746030&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RxGFqiiw7XqDihf0jNqVrWWwiIEcTF0tnKr-APDWTebC-3czWZAr6b20fKSi1~q~C2TOvYX-IdIu~g5FAAFFjC6-A3M-g6pBwETJGld3CcMzdAUzDUMGLHj0uNxSHB8gYRa1ELyFl9fxX4JLs8HSKlmkjoj5jPca8Ush-pz04cJ~l7mtFVDG2wnE3pxubJc7tD3pYgJ5GW3TjxjxJJZLzZBfKzBIoZQxvrsvWr-ZSzXqnnpejeWATH9NHxGyHTjcNDMGMFmQudN1VXtdreENLs39XNn3mu2z4yKMK4BxXxXrGpbfyQa~Zo0AfDfp-VVhgCOZErWtk3suQrLz1UucEg__',
                tech: ['Javascript','React ']
              }
            ].map((project, index) => (
              <motion.div 
                key={index} 
                className="group cursor-pointer project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="border-2 border-[#00ff00] p-1 mb-4 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[#00ff00]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <motion.div 
                    className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 text-sm border border-[#00ff00]/30"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    VIEW PROJECT
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#111111] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQgPSJNMzAgMzBtLTIgMGEyIDIgMCAxIDAgNCAwYTIgMiAwIDEgMCAtNCAwIiBmaWxsPSJyZ2JhKDAsIDI1NSwgMCwgMC4xKSIvPgo8L3N2Zz4=')] opacity-5"></div>
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-4xl mb-8 font-bold text-[#00ff00] section-header inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            LET'S CONNECT
          </motion.h2>
          <motion.div 
            className="flex justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="https://github.com/naitik2004" className="hover:text-[#00ff00] transition-colors p-3 border border-[#00ff00]/20 rounded-lg hover:border-[#00ff00] group">
              <Github className="w-8 h-8 group-hover:scale-110 transition-transform"  />
            </a>
            <a href="https://linkedin.com/in/naitik-pandey-541a6331a" className="hover:text-[#00ff00] transition-colors p-3 border border-[#00ff00]/20 rounded-lg hover:border-[#00ff00] group">
              <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtWvMnHdnRcSLVjcdwSQFgJWVbCJGzSkzLFtcqMTtNsjXLZmQzRBpJtmrbMhqhjWzFfFFC" className="hover:text-[#00ff00] transition-colors p-3 border border-[#00ff00]/20 rounded-lg hover:border-[#00ff00] group">
              <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-sm text-white/50">
        <p>© 2024 | NAITIK PANDEY | <span className="text-[#00ff00]">STILL ALIVE</span></p>
        <motion.div 
          className="mt-2 flex justify-center gap-2 items-center text-[#00ff00]/30"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Zap className="w-4 h-4" />
          SYSTEM.RUNNING
        </motion.div>
      </footer>
    </div>
  );
}

export default App;