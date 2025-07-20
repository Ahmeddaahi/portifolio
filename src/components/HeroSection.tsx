import React from 'react';
import { ArrowRight, Download, Github, Linkedin, MessageCircle } from 'lucide-react';
import heroPortrait from '../assets/hero-portrait.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Adjust min-height to account for header and improve mobile spacing */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-4rem)] py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="mb-6">
                <h2 className="text-lg md:text-xl text-primary font-semibold mb-2">
                  Hello, I'm
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                  <span className="text-gradient">Ahmed Bashir</span>
                  <br />
                  <span className="text-foreground">Ahmed</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Full-Stack Developer & AI Automation Expert
                </p>
              </div>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                I specialize in building scalable web applications, hotel booking platforms, 
                e-commerce solutions, and cutting-edge AI automation tools using modern 
                technologies like React, Node.js, and Supabase.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn-gold flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  View My Projects
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="btn-gold-outline flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Download size={20} />
                  Download Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 glow-gold"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 glow-gold"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://t.me/ahmedexka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 glow-gold"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-slide-in-right mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-gold rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30">
                  <img
                    src={heroPortrait}
                    alt="Ahmed Bashir Ahmed"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-primary-foreground font-bold">💻</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-primary/80 rounded-full flex items-center justify-center animate-bounce delay-500">
                  <span className="text-primary-foreground font-bold">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;