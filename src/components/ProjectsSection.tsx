import React from 'react';
import { ExternalLink, Github, Calendar, ShoppingBag, Package, Bus, Brain, BarChart3 } from 'lucide-react';
import projectHotel from '../assets/project-hotel.jpg';
import projectEcommerce from '../assets/project-ecommerce.jpg';
import projectInventory from '../assets/project-inventory.jpg';
import projectBus from '../assets/project-bus.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Yusra Hotel Website',
      description: 'Comprehensive hotel booking platform with room management, real-time availability, payment integration, and customer portal. Built with React and Supabase.',
      image: projectHotel,
      icon: Calendar,
      tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Stripe'],
      features: ['Room Booking', 'Payment Gateway', 'Admin Dashboard', 'Customer Portal'],
      liveUrl: 'https://yusrahotel.com',
      githubUrl: 'https://github.com/ahmed/yusra-hotel',
      status: 'Live'
    },
    {
      id: 2,
      title: 'Carwo Smart Shop',
      description: 'Full-featured e-commerce platform with inventory management, order processing, analytics dashboard, and multi-payment gateway integration.',
      image: projectEcommerce,
      icon: ShoppingBag,
      tech: ['React', 'Node.js', 'MySQL', 'Express', 'PayPal'],
      features: ['Product Catalog', 'Order Management', 'Analytics', 'Multi-Payment'],
      liveUrl: 'https://carwoshop.com',
      githubUrl: 'https://github.com/ahmed/carwo-shop',
      status: 'Live'
    },
    {
      id: 3,
      title: 'Smart Inventory System',
      description: 'Advanced inventory management system with real-time tracking, automated reordering, analytics, and multi-location support for businesses.',
      image: projectInventory,
      icon: Package,
      tech: ['React', 'TypeScript', 'Supabase', 'Chart.js', 'PWA'],
      features: ['Real-time Tracking', 'Auto Reordering', 'Analytics', 'Multi-location'],
      liveUrl: 'https://smartinventory.app',
      githubUrl: 'https://github.com/ahmed/inventory-system',
      status: 'Live'
    },
    {
      id: 4,
      title: 'Bus Booking App',
      description: 'Mobile-first bus booking application with route management, seat selection, payment processing, and real-time bus tracking.',
      image: projectBus,
      icon: Bus,
      tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
      features: ['Route Management', 'Seat Selection', 'Real-time Tracking', 'Mobile App'],
      liveUrl: 'https://busbook.app',
      githubUrl: 'https://github.com/ahmed/bus-booking',
      status: 'Live'
    },
    {
      id: 5,
      title: 'AI Dashboard Analytics',
      description: 'Intelligent business dashboard with AI-powered insights, automated reporting, data visualization, and predictive analytics.',
      image: projectInventory,
      icon: Brain,
      tech: ['React', 'Python', 'FastAPI', 'TensorFlow', 'D3.js'],
      features: ['AI Insights', 'Predictive Analytics', 'Auto Reports', 'Data Visualization'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ahmed/ai-dashboard',
      status: 'In Development'
    },
    {
      id: 6,
      title: 'Financial Analytics Platform',
      description: 'Comprehensive financial analytics platform with portfolio tracking, risk assessment, automated reporting, and investment insights.',
      image: projectEcommerce,
      icon: BarChart3,
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TradingView'],
      features: ['Portfolio Tracking', 'Risk Assessment', 'Real-time Data', 'Custom Reports'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ahmed/finance-platform',
      status: 'Planning'
    }
  ];

  return (
    <section id="projects" className="section bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work in web development, automation, and digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-project animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Live' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : project.status === 'In Development'
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'bg-muted/20 text-muted-foreground border border-muted/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <project.icon size={24} className="text-primary" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-gold flex items-center justify-center gap-2 text-sm py-2 px-4"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-gold-outline flex items-center justify-center gap-2 text-sm py-2 px-4"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Want to See More?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I have many more projects and case studies. Let's discuss how my experience can help with your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline flex items-center justify-center gap-2"
            >
              <Github size={20} />
              View All on GitHub
            </a>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gold"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;