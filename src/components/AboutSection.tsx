import React from 'react';
import { Download, Code, Database, Zap, Users } from 'lucide-react';
import StatCounter from './StatCounter';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert in React, Node.js, TypeScript, and modern web technologies'
    },
    {
      icon: Database,
      title: 'Database & Backend',
      description: 'Proficient in Supabase, MySQL, API development and integrations'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Specialized in Cursor, Lovable, n8n, and workflow automation'
    },
    {
      icon: Users,
      title: 'Client Solutions',
      description: 'Delivered 50+ projects including booking systems and e-commerce'
    }
  ];

  return (
    <section id="about" className="section bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in building scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Building Digital Solutions That Matter
            </h3>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm Ahmed Bashir Ahmed, a passionate full-stack developer with over 5 years 
                of experience creating innovative web applications. I specialize in building 
                robust hotel booking platforms, dynamic e-commerce websites, and intelligent 
                dashboard systems.
              </p>
              
              <p>
                My expertise spans across modern technologies including React, TypeScript, 
                Node.js, Supabase, and MySQL. I'm particularly skilled in AI automation 
                tools like Cursor, Lovable, and n8n, helping businesses streamline their 
                workflows and boost productivity.
              </p>
              
              <p>
                I've successfully delivered 50+ projects, ranging from complex inventory 
                management systems to seamless payment integrations. My approach focuses 
                on clean, scalable code and exceptional user experiences.
              </p>
            </div>

            <div className="mt-8">
              <button className="btn-gold flex items-center gap-2">
                <Download size={20} />
                Download My Resume
              </button>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-premium text-center group hover:bg-primary/5"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          {[
            { number: '50', suffix: '+', label: 'Projects Completed' },
            { number: '5', suffix: '+', label: 'Years Experience' },
            { number: '20', suffix: '+', label: 'Happy Clients' },
            { number: '15', suffix: '+', label: 'Technologies' }
          ].map((stat, index) => (
            <StatCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;