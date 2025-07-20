import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import BookingSection from '../components/BookingSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Add padding-top to account for fixed header */}
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
