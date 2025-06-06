
import { useState, useEffect } from 'react';
import { Phone, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FloatingActions from '@/components/FloatingActions';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
