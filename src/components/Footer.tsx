import React from 'react';
import { Github, Linkedin, MessageCircle, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-dark border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Bio */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Ahmed Bashir
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Full-Stack Developer & AI Automation Expert specializing in building 
                scalable web applications, hotel booking systems, and intelligent business solutions.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 glow-gold group"
              >
                <Github size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/ahmed-bashir-278289343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 glow-gold group"
              >
                <Linkedin size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              
              <a
                href="https://t.me/+251995817222"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 glow-gold group"
              >
                <MessageCircle size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Me', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Projects', id: 'projects' },
                { label: 'Skills', id: 'skills' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a 
                  href="tel:0995817222" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  0995817222
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a 
                  href="mailto:ahmedexka@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ahmedexka@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <MessageCircle size={16} className="text-primary" />
                <a 
                  href="https://t.me/+251995817222" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +251995817222
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <button 
                onClick={() => scrollToSection('booking')}
                className="btn-gold w-full text-sm py-2 px-4"
              >
                Start Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Ahmed Bashir Ahmed. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <span className="text-muted-foreground">
                Built with React, TypeScript & Tailwind CSS
              </span>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 glow-gold group"
              >
                <ArrowUp size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
};

export default Footer;