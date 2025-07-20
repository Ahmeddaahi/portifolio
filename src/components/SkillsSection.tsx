import React from 'react';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  Palette,
  Server,
  GitBranch,
  Cloud,
  Shield
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-500/20 to-purple-500/20',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5/CSS3', level: 98 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 85 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500/20 to-emerald-500/20',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'FastAPI', level: 78 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'from-orange-500/20 to-red-500/20',
      skills: [
        { name: 'Supabase', level: 92 },
        { name: 'MySQL', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Firebase', level: 82 }
      ]
    },
    {
      title: 'AI & Automation',
      icon: Zap,
      color: 'from-primary/20 to-gold-light/20',
      skills: [
        { name: 'Cursor AI', level: 95 },
        { name: 'Lovable', level: 98 },
        { name: 'n8n Workflows', level: 90 },
        { name: 'OpenAI API', level: 85 },
        { name: 'Zapier', level: 88 },
        { name: 'Automation Scripts', level: 92 }
      ]
    },
    {
      title: 'Mobile & Design',
      icon: Smartphone,
      color: 'from-pink-500/20 to-rose-500/20',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'PWA', level: 90 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'UI/UX Design', level: 82 },
        { name: 'Adobe XD', level: 75 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      color: 'from-cyan-500/20 to-blue-500/20',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'Vercel', level: 92 },
        { name: 'Netlify', level: 88 },
        { name: 'CI/CD', level: 78 },
        { name: 'AWS Basics', level: 72 }
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', category: 'Editor' },
    { name: 'Cursor', category: 'AI Editor' },
    { name: 'Lovable', category: 'AI Platform' },
    { name: 'Postman', category: 'API Testing' },
    { name: 'Figma', category: 'Design' },
    { name: 'n8n', category: 'Automation' },
    { name: 'Stripe', category: 'Payments' },
    { name: 'PayPal', category: 'Payments' },
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technical skills across the full development stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-premium group hover:border-primary/50"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon size={24} className="text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-primary text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-gold h-2 rounded-full transition-all duration-1000 ease-out glow-gold"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Tools & <span className="text-gradient">Technologies</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="px-6 py-3 bg-card border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 glow-gold">
                  <span className="text-foreground font-medium">
                    {tool.name}
                  </span>
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-1 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {tool.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-gold-light/5 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's leverage these skills to create innovative solutions for your business. 
            From concept to deployment, I'll handle every aspect of your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('booking');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gold"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gold-outline"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;