
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
        <title>MJS Products Limited - Kenya's Premier Construction & Architecture Company | Nairobi, Mombasa, Kisumu</title>
        <meta name="description" content="Leading construction company in Kenya offering architectural design, residential homes, commercial buildings, and project management. Serving Nairobi, Mombasa, Kisumu and all major Kenyan cities. Get free quotes today!" />
        <meta name="keywords" content="construction company Kenya, architectural design Nairobi, building contractors Kenya, residential construction Nairobi, commercial construction Kenya, construction services Mombasa, building design Kisumu, Kenya architects, construction company Nairobi, home builders Kenya, office construction Kenya, construction contractors Nairobi, building permits Kenya, construction materials Kenya, project management Kenya, structural engineering Kenya, construction consultancy Kenya, building renovation Kenya, modern houses Kenya, apartment construction Nairobi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Telvix" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="en-KE" />
        <meta name="geo.region" content="KE" />
        <meta name="geo.country" content="Kenya" />
        <meta name="geo.placename" content="Nairobi, Kenya" />
        <meta name="ICBM" content="-1.2921,36.8219" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="MJS Products Limited - Kenya's Premier Construction & Architecture Company" />
        <meta property="og:description" content="Professional construction, architectural design, and project management services across Kenya. From residential homes to commercial buildings - we deliver excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mjsproducts.co.ke" />
        <meta property="og:image" content="/lovable-uploads/f8a3ef57-cdb8-4bde-826e-f6b0abc964cc.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:site_name" content="MJS Products Limited" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MJS Products Limited - Kenya's Premier Construction Company" />
        <meta name="twitter:description" content="Leading construction and architecture services in Kenya. Quality building solutions for residential and commercial projects." />
        <meta name="twitter:image" content="/lovable-uploads/f8a3ef57-cdb8-4bde-826e-f6b0abc964cc.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        
        <link rel="canonical" href="https://mjsproducts.co.ke/" />
        <link rel="alternate" hreflang="en-ke" href="https://mjsproducts.co.ke/" />
        <link rel="alternate" hreflang="sw-ke" href="https://mjsproducts.co.ke/sw/" />
        
        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://mjsproducts.co.ke/",
            "name": "MJS Products Limited",
            "alternateName": "MJS Construction Kenya",
            "description": "Premier construction company in Kenya offering architectural design, residential and commercial construction, and project management services",
            "url": "https://mjsproducts.co.ke",
            "logo": {
              "@type": "ImageObject",
              "url": "/lovable-uploads/f8a3ef57-cdb8-4bde-826e-f6b0abc964cc.png",
              "width": 400,
              "height": 400
            },
            "image": [
              "/lovable-uploads/f8a3ef57-cdb8-4bde-826e-f6b0abc964cc.png",
              "/lovable-uploads/bc74222d-4ccb-4617-b0c2-12376dae3787.png",
              "/lovable-uploads/894ef45b-3226-4057-8de0-1b9170b052fb.png"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "KE",
              "addressRegion": "Nairobi County",
              "addressLocality": "Nairobi",
              "streetAddress": "Nairobi, Kenya"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -1.2921,
              "longitude": 36.8219
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+254711236128",
              "contactType": "customer service",
              "availableLanguage": ["English", "Swahili"],
              "areaServed": ["KE", "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"]
            },
            "areaServed": [
              {
                "@type": "Country",
                "name": "Kenya"
              },
              {
                "@type": "City",
                "name": "Nairobi"
              },
              {
                "@type": "City", 
                "name": "Mombasa"
              },
              {
                "@type": "City",
                "name": "Kisumu"
              }
            ],
            "serviceType": [
              "Architectural Design",
              "Residential Construction",
              "Commercial Construction", 
              "Project Management",
              "Building Consultation",
              "Construction Planning",
              "Structural Engineering"
            ],
            "priceRange": "$$",
            "currenciesAccepted": "KES",
            "paymentAccepted": ["Cash", "Bank Transfer", "Mobile Money"],
            "sameAs": [
              "https://wa.me/qr/W7Y5C2TH34Q2B1"
            ],
            "foundingDate": "2020",
            "slogan": "Design. Build. Inspire.",
            "knowsAbout": [
              "Construction Kenya",
              "Architecture Kenya", 
              "Building Design",
              "Project Management",
              "Residential Construction",
              "Commercial Buildings"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Construction Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Construction",
                    "description": "Custom home building and residential construction services"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Construction",
                    "description": "Office buildings, retail spaces, and commercial construction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Architectural Design",
                    "description": "Professional architectural design and planning services"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MJS Products Limited",
            "url": "https://mjsproducts.co.ke",
            "logo": "/lovable-uploads/f8a3ef57-cdb8-4bde-826e-f6b0abc964cc.png",
            "description": "Leading construction and architectural design company in Kenya",
            "foundingDate": "2020",
            "founders": [
              {
                "@type": "Person",
                "name": "MJS Products Team"
              }
            ],
            "address": {
              "@type": "PostalAddress", 
              "addressCountry": "KE",
              "addressRegion": "Nairobi County",
              "addressLocality": "Nairobi"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+254711236128",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://wa.me/qr/W7Y5C2TH34Q2B1"
            ]
          })}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Construction and Architectural Services",
            "description": "Comprehensive construction, architectural design, and project management services in Kenya",
            "provider": {
              "@type": "LocalBusiness",
              "name": "MJS Products Limited"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Kenya"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Construction Services Kenya",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Construction Kenya",
                    "description": "Custom homes, apartments, and residential buildings"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Commercial Construction Kenya",
                    "description": "Office buildings, retail spaces, warehouses"
                  }
                }
              ]
            }
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
