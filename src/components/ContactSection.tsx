
import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, CheckCircle, AlertTriangle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const { error } = await supabase.from('contacts').insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) {
        throw error;
      }

      // Send email notification
      try {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        };

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Optional: You might want to inform the user that the contact was saved but the notification failed
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Revert from submitted state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);

    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      setError('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and help businesses grow with 
                innovative digital solutions. Whether you need a complete web application, 
                AI automation, or just want to discuss your ideas, I'm here to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="card-premium group hover:border-primary/50">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Phone</h4>
                    <a 
                      href="tel:+251995817222" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +251995817222
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-premium group hover:border-primary/50">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:ahmedexka@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      ahmedexka@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="card-premium group hover:border-primary/50">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-500">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.566" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/251995817222" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +251995817222
                    </a>
                  </div>
                </div>
              </div>

              {/* Telegram Card */}
              <div className="card-premium group hover:border-primary/50">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.58 7.44c-.12.537-.432.668-.864.42l-2.388-1.764-1.152 1.116c-.128.128-.236.236-.48.236l.168-2.4 4.332-3.912c.192-.168-.036-.264-.3-.096l-5.364 3.384-2.316-.732c-.504-.156-.516-.504.108-.744l9.024-3.492c.42-.156.792.096.66.744z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Telegram</h4>
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
              </div>

              <div className="card-premium group hover:border-primary/50">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Remote Worldwide<br />
                      <span className="text-sm">Available in all time zones</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h4 className="text-foreground font-semibold mb-2">Quick Response Guarantee</h4>
              <p className="text-muted-foreground text-sm">
                I typically respond to all inquiries within 2-4 hours during business hours. 
                For urgent projects, feel free to call or message me directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-premium">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-green-400 mb-4">Thank you for reaching out. I'll get back to you soon!</p>
                <p className="text-muted-foreground text-sm">
                  Expected response time: 2-4 hours
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-foreground font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                      placeholder="Enter your name"
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

                  <div>
                    <label className="block text-foreground font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground resize-none"
                      placeholder="Tell me about your project or ask any questions..."
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
                        Send Message
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
              </>
            )}
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16 pt-16 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's schedule a free consultation to discuss your requirements and how I can help achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('booking');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gold"
            >
              Book Free Consultation
            </button>
            <a
              href="https://wa.me/251995817222"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-500">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.566" fill="currentColor"/>
              </svg>
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
