
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>MJS Products Limited - Professional Construction & Design Services | Architecture, Building, Project Management</title>
        <meta name="description" content="MJS Products Limited offers expert construction, architecture, and design services. Transforming dreams into timeless structures with innovative design and quality craftsmanship." />
        <meta name="keywords" content="construction, architecture, design, building services, project management, residential construction, commercial construction, MJS Products" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Telvix" />
        <meta property="og:title" content="MJS Products Limited - Professional Construction & Design Services" />
        <meta property="og:description" content="Transforming your dreams into timeless structures with expert craftsmanship and innovative design." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/f8a3ef57-cdb8-4bde-826e-f6b0abc964cc.png" />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MJS Products Limited",
            "description": "Professional construction, architecture, and design services",
            "url": "/",
            "logo": "/lovable-uploads/f8a3ef57-cdb8-4bde-826e-f6b0abc964cc.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "0711236128",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://wa.me/qr/W7Y5C2TH34Q2B1"
            ]
          })}
        </script>
      </Helmet>
      
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
    </>
  );
};

export default Index;
