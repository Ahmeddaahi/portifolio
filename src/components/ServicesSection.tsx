import React from 'react';
import { 
  Globe, 
  Hotel, 
  ShoppingCart, 
  Zap, 
  CreditCard, 
  Database,
  Smartphone,
  Settings
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with React, TypeScript, and modern frameworks. Responsive, scalable, and optimized for performance.',
      features: ['React & TypeScript', 'Responsive Design', 'Performance Optimization', 'SEO Friendly']
    },
    {
      icon: Hotel,
      title: 'Hotel Booking Systems',
      description: 'Complete booking platforms with room management, availability calendars, payment processing, and customer management.',
      features: ['Room Management', 'Booking Calendar', 'Payment Integration', 'Customer Portal']
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Websites',
      description: 'Full-featured online stores with inventory management, payment gateways, order tracking, and admin dashboards.',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management']
    },
    {
      icon: Zap,
      title: 'AI Automation Tools',
      description: 'Workflow automation using Cursor, Lovable, n8n, and custom AI solutions to streamline business processes.',
      features: ['Workflow Automation', 'AI Integration', 'Process Optimization', 'Custom Solutions']
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Secure payment processing integration with popular gateways like Stripe, PayPal, and local payment methods.',
      features: ['Multiple Gateways', 'Security Compliance', 'Mobile Payments', 'Subscription Billing']
    },
    {
      icon: Database,
      title: 'API Development',
      description: 'RESTful APIs and database solutions using Node.js, Supabase, MySQL, and other modern backend technologies.',
      features: ['RESTful APIs', 'Database Design', 'Authentication', 'Real-time Updates']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive web applications that work perfectly on all devices with mobile-first approach and PWA capabilities.',
      features: ['Mobile Responsive', 'PWA Ready', 'Touch Optimized', 'Cross-Platform']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Connect different systems and third-party services to create unified business solutions and streamlined workflows.',
      features: ['Third-party APIs', 'Data Migration', 'System Sync', 'Custom Integrations']
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-premium group hover:border-primary/50 hover:shadow-glow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon size={28} className="text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how I can help bring your ideas to life with cutting-edge technology and expert development.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gold"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;