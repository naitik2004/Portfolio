import React, { useState, useEffect } from 'react';
import { Terminal, Code2, Monitor, Github, Linkedin, Mail, ExternalLink, Cpu, Smile } from 'lucide-react';

function App() {
  const [text, setText] = useState('');
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

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFAF3] text-black font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-4 bg-[#FFFAF3] z-50 border-b border-black/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="#about" className="hover:underline">ABOUT</a>
            <a href="#portfolio" className="hover:underline">PORTFOLIO</a>
            <a href="#contact" className="hover:underline">CONTACT</a>
          </div>
          <div className="text-sm opacity-50">EST. 1998</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[8rem] leading-none font-bold mb-6">HI<br/>THERE</h1>
            <div className="text-xl font-mono mb-8 typewriter">{text}</div>
            <p className="text-lg opacity-70 max-w-md">
              My friend. Welcome to my digital space. Let's create something extraordinary together.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -left-20">
              <Smile className="w-32 h-32 stroke-1" />
            </div>
            <div className="border-2 border-black p-1">
              <img 
                src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800" 
                alt="Developer" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl mb-8 font-bold">[WHO I AM]</h2>
              <p className="text-lg opacity-70 leading-relaxed">
                Master Procrastinator. Daddy Joke Connoisseur. Expert Creative Individual. 
                Vision Seeker. Dream Chaser. Code Poet. Aesthetic Enthusiast. 
                Good Friend. Best Designer.
              </p>
            </div>
            <div>
              <h2 className="text-4xl mb-8 font-bold">[WHAT I OFFER]</h2>
              <p className="text-lg opacity-70 leading-relaxed">
                Beautifully crafted and highly functional websites as well as modern web
                applications that make your heart jump a lil bit higher. An exceptional
                visual direction supported by well-thought-through concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 font-bold">DOPE ASS PROJECTS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-Commerce Experience',
                description: 'A retro-styled shopping platform with modern UX',
                image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800',
                tech: ['React', 'TypeScript', 'Shopify']
              },
              {
                title: 'Digital Art Gallery',
                description: 'Minimalist showcase platform for artists',
                image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800',
                tech: ['Next.js', 'Three.js', 'GSAP']
              }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="border-2 border-black p-1 mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="opacity-70 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-sm border border-black px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl mb-8 font-bold">LET'S CONNECT</h2>
          <div className="flex justify-center gap-8">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-sm opacity-50">
        <p>© 2024 | NAITIK PANDEY | STILL ALIVE</p>
      </footer>
    </div>
  );
}

export default App;