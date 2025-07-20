import React, { useState } from 'react';
import { Calendar, Clock, DollarSign, User, Mail, Phone, MessageCircle, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import emailjs from '@emailjs/browser';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    deadline: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.from('bookings').insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          budget: formData.budget,
          deadline: formData.deadline || null,
          description: formData.description,
        },
      ]);

      if (error) {
        throw error;
      }

      // Send email notification
      try {
        const templateParams = {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          budget: formData.budget,
          deadline: formData.deadline,
          description: formData.description,
        };

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID_BOOKING,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Optional: You might want to inform the user that the booking was saved but the notification failed
      }

      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        deadline: '',
        description: ''
      });

      // Revert from submitted state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);

    } catch (error: any) {
      console.error('Error submitting booking:', error);
      setError('Sorry, there was an error submitting your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const projectTypes = [
    'Web Development',
    'Hotel Booking System',
    'E-Commerce Website',
    'AI Automation',
    'Mobile App',
    'API Integration',
    'Custom Solution'
  ];

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Let\'s Discuss'
  ];

  if (isSubmitted) {
    return (
      <section id="booking" className="section bg-gradient-dark">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card-premium bg-green-500/10 border-green-500/30">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Request Received!
              </h2>
              <p className="text-green-400 text-lg mb-6">
                Thank you for your interest! I'll review your project details and get back to you within 24 hours.
              </p>
              <p className="text-muted-foreground">
                In the meantime, feel free to reach out directly at{' '}
                <a href="mailto:ahmedexka@gmail.com" className="text-primary hover:underline">
                  ahmedexka@gmail.com
                </a>{' '}
                or{' '}
                <a href="tel:0995817222" className="text-primary hover:underline">
                  0995817222
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="section bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book a <span className="text-gradient">Consultation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your project? Fill out the form below and I'll get back to you within 24 hours with a detailed proposal.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="card-premium">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Phone</p>
                      <a href="tel:0995817222" className="text-muted-foreground hover:text-primary transition-colors">
                        0995817222
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Email</p>
                      <a href="mailto:ahmedexka@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        ahmedexka@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageCircle size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Telegram</p>
                      <a href="https://t.me/+251995817222" className="text-muted-foreground hover:text-primary transition-colors">
                        Telegram
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Response Time</p>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> All consultations are free. 
                    I'll provide a detailed project proposal with timeline and pricing after our discussion.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="card-premium">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-foreground font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-foreground font-medium mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-foreground font-medium mb-2">
                        Preferred Deadline
                      </label>
                      <input
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="description"
                      required
                      rows={6}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground resize-none"
                      placeholder="Tell me about your project goals, requirements, and any specific features you need..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-gold flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Consultation Request
                      </>
                    )}
                  </button>

                  {error && (
                    <div className="mt-4 flex items-center gap-2 text-red-400 bg-red-500/10 p-3 rounded-lg">
                      <AlertTriangle size={20} />
                      <p>{error}</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;