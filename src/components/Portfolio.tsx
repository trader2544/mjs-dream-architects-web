import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import MobileCollapsibleCard from './MobileCollapsibleCard';
import AnimatedCard from './AnimatedCard';
import { Building2, Home, Hammer, Factory } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      image: "/lovable-uploads/1bd8404f-5892-4f1c-a399-07c07c8c15e3.png",
      title: "Modern Residential Home",
      category: "residential",
      description: "Contemporary home design with modern amenities"
    },
    {
      id: 2,
      image: "/lovable-uploads/d1afaf6e-b181-45b9-8892-d62e6d912ce2.png",
      title: "Commercial Complex",
      category: "commercial",
      description: "Multi-story commercial building with modern architecture"
    },
    {
      id: 3,
      image: "/lovable-uploads/831c095c-f1b4-4951-83b4-6ec4f99114a8.png",
      title: "Apartment Building",
      category: "residential",
      description: "Multi-unit residential building design"
    },
    {
      id: 4,
      image: "/lovable-uploads/7f64e07c-4f7c-41c5-bd7f-7a171665e8a2.png",
      title: "Luxury Apartments",
      category: "residential",
      description: "High-end apartment complex with premium finishes"
    },
    {
      id: 5,
      image: "/lovable-uploads/8055b761-b499-402d-bac5-e4bf54af2a4b.png",
      title: "Petrol Station Complex",
      category: "commercial",
      description: "Modern petrol station with commercial facilities"
    },
    {
      id: 6,
      image: "/lovable-uploads/601cb291-df4a-4913-815f-e0bbb298af3b.png",
      title: "Mixed-Use Development",
      category: "commercial",
      description: "Commercial and residential mixed-use building"
    },
    {
      id: 7,
      image: "/lovable-uploads/fcebccef-525e-4ce2-bbdb-49720f902800.png",
      title: "Architectural Masterpiece",
      category: "design",
      description: "Modern mixed-use development with innovative design"
    },
    {
      id: 8,
      image: "/lovable-uploads/81dd85bb-7936-4957-9e55-d20fcb4f5b00.png",
      title: "Construction Progress",
      category: "construction",
      description: "High-rise building under construction showing our expertise"
    },
    {
      id: 9,
      image: "/lovable-uploads/605637a4-ad12-446d-af84-46dea7a5aa8d.png",
      title: "Site Development",
      category: "construction",
      description: "Professional site preparation and development services"
    },
    {
      id: 10,
      image: "/lovable-uploads/5b8a02e3-5430-44a8-9298-ec2f00d4bafc.png",
      title: "Structural Framework",
      category: "construction",
      description: "Quality structural work and framework construction"
    },
    {
      id: 11,
      image: "/lovable-uploads/c94479b7-9f84-4a04-949a-8ee71447ac77.png",
      title: "Residential Design",
      category: "residential",
      description: "Beautiful residential home with modern amenities"
    },
    {
      id: 12,
      image: "/lovable-uploads/8c4db243-a866-4b77-bfc3-c662a266ec22.png",
      title: "Mixed-Use Complex",
      category: "commercial",
      description: "Multi-level commercial and residential building with parking"
    },
    {
      id: 13,
      image: "/lovable-uploads/a8e3283e-9353-4f15-b901-abf3940097be.png",
      title: "Modern Petrol Station",
      category: "commercial",
      description: "Contemporary fuel station with commercial facilities"
    },
    {
      id: 14,
      image: "/lovable-uploads/e7ff85cb-1db2-4325-b934-086ca9e6901d.png",
      title: "Site Planning",
      category: "design",
      description: "Strategic site layout and development planning"
    },
    {
      id: 15,
      image: "/lovable-uploads/9e02b8c3-9236-4930-8c0d-0fd109c19f24.png",
      title: "Modern Apartments",
      category: "residential",
      description: "Contemporary multi-story residential complex"
    },
    {
      id: 16,
      image: "/lovable-uploads/94c2f93e-86a9-4a00-a4f7-5926497937d1.png",
      title: "Luxury Villa",
      category: "residential",
      description: "Elegant single-family home with contemporary design"
    },
    {
      id: 17,
      image: "/lovable-uploads/ba64e3c1-a653-45ac-8922-efd3a2f99177.png",
      title: "Stone Mansion",
      category: "residential",
      description: "Traditional stone construction with modern amenities"
    },
    {
      id: 18,
      image: "/lovable-uploads/eee12261-a15a-4a00-8437-1219e3f86b04.png",
      title: "Classic Home",
      category: "residential",
      description: "Traditional design with contemporary features"
    },
    {
      id: 19,
      image: "/lovable-uploads/1917d49d-cc64-43ce-8604-554dfecd427f.png",
      title: "Innovative Roofing",
      category: "design",
      description: "Unique architectural roofing solutions"
    },
    {
      id: 20,
      image: "/lovable-uploads/e029aea3-0c06-492a-91aa-f29a119520f5.png",
      title: "Circular Design",
      category: "design",
      description: "Modern circular architectural concept"
    },
    {
      id: 21,
      image: "/lovable-uploads/75e4c7a6-d29f-426a-9b9e-2790ae4ec3a0.png",
      title: "Interior Layout",
      category: "design",
      description: "Comprehensive interior space planning and design"
    },
    {
      id: 22,
      image: "/lovable-uploads/d6efa990-87bb-49e1-8151-b3389728d822.png",
      title: "Foundation Work",
      category: "construction",
      description: "Professional foundation laying and concrete reinforcement"
    },
    {
      id: 23,
      image: "/lovable-uploads/28bc1599-f2e1-45cd-9c46-98b7bb47cf27.png",
      title: "Concrete Pouring",
      category: "construction",
      description: "Expert concrete pouring and finishing work"
    },
    {
      id: 24,
      image: "/lovable-uploads/854d1743-e55f-4787-8242-48381aa45e7c.png",
      title: "Multi-Story Construction",
      category: "construction",
      description: "Multi-level residential building construction"
    },
    {
      id: 25,
      image: "/lovable-uploads/4f08a53b-f170-430f-bf09-df46a34d86e3.png",
      title: "Steel Framework",
      category: "construction",
      description: "Professional steel framework and structural work"
    },
    {
      id: 26,
      image: "/lovable-uploads/9ce42974-0ef8-4100-a2fe-ee30efe81197.png",
      title: "Two-Story Home",
      category: "residential",
      description: "Modern two-story residential construction"
    },
    {
      id: 27,
      image: "/lovable-uploads/3966d56a-930c-472d-bd44-df8e810f0610.png",
      title: "Contemporary House",
      category: "residential",
      description: "Contemporary residential home with modern features"
    },
    {
      id: 28,
      image: "/lovable-uploads/bc74222d-4ccb-4617-b0c2-12376dae3787.png",
      title: "Luxury Modern Villa",
      category: "residential",
      description: "Sophisticated two-story modern home with glass balconies and premium finishes"
    },
    {
      id: 29,
      image: "/lovable-uploads/894ef45b-3226-4057-8de0-1b9170b052fb.png",
      title: "Contemporary Family Home",
      category: "residential",
      description: "Modern family residence with spacious outdoor areas and contemporary design"
    },
    {
      id: 30,
      image: "/lovable-uploads/25cddd06-9f33-42bf-8fb8-f565617b93c3.png",
      title: "Luxury Resort Villa",
      category: "residential",
      description: "Premium residential complex with swimming pool and landscaped gardens"
    },
    {
      id: 31,
      image: "/lovable-uploads/86b87f98-ceb1-4992-a881-892f3d6d029a.png",
      title: "Traditional Kenyan Home",
      category: "residential",
      description: "Beautiful stone and tile roof home showcasing local architectural traditions"
    },
    {
      id: 32,
      image: "/lovable-uploads/031ffd53-1274-4b16-8781-1e6b5c28e068.png",
      title: "Tropical Paradise Villa",
      category: "residential",
      description: "Stunning multi-level home with red tile roofs and tropical landscaping"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: <Building2 className="w-3 md:w-4 h-3 md:h-4" /> },
    { key: 'residential', label: 'Residential', icon: <Home className="w-3 md:w-4 h-3 md:h-4" /> },
    { key: 'commercial', label: 'Commercial', icon: <Factory className="w-3 md:w-4 h-3 md:h-4" /> },
    { key: 'construction', label: 'Construction', icon: <Hammer className="w-3 md:w-4 h-3 md:h-4" /> },
    { key: 'design', label: 'Design', icon: <Building2 className="w-3 md:w-4 h-3 md:h-4" /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-8 md:py-12 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedCard animation="fade-up" className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6">
            Our Projects Portfolio
          </h2>
          <div className="w-12 md:w-16 lg:w-24 h-1 bg-blue-500 mx-auto mb-4 md:mb-6 lg:mb-8 animate-pulse"></div>
          <p className="text-xs md:text-sm lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="hidden md:block">
              Showcasing Kenya's finest architectural designs and construction excellence
            </span>
            <span className="md:hidden">
              Kenya's finest design & construction work
            </span>
          </p>
        </AnimatedCard>

        {/* Mobile Collapsible Filters */}
        <div className="md:hidden mb-4">
          {filters.map((filter, index) => (
            <AnimatedCard 
              key={filter.key} 
              animation="slide-left" 
              delay={index * 100}
            >
              <MobileCollapsibleCard
                title={filter.label}
                icon={filter.icon}
                defaultOpen={filter.key === activeFilter}
              >
                <Button
                  onClick={() => setActiveFilter(filter.key)}
                  size="sm"
                  className={`w-full text-xs hover-scale ${
                    activeFilter === filter.key 
                      ? "bg-blue-500 hover:bg-blue-600 text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  View {filter.label}
                </Button>
              </MobileCollapsibleCard>
            </AnimatedCard>
          ))}
        </div>

        {/* Desktop Project Filters */}
        <AnimatedCard animation="fade-up" delay={200} className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 flex items-center space-x-2 hover-scale transition-all duration-300 ${
                activeFilter === filter.key 
                  ? "bg-blue-500 hover:bg-blue-600 scale-105" 
                  : "border-blue-500 text-blue-500 hover:bg-blue-50"
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </Button>
          ))}
        </AnimatedCard>

        {/* Project Carousel */}
        <AnimatedCard animation="scale-in" delay={400} className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {filteredProjects.map((project, index) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg overflow-hidden hover-scale group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-2 md:p-3 lg:p-6">
                      <h3 className="text-xs md:text-sm lg:text-xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-2 md:mb-4 text-xs md:text-xs lg:text-base">
                        {project.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-xs md:text-sm h-6 md:h-8 hover-scale transition-all duration-300"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover-scale transition-transform duration-200" />
            <CarouselNext className="hover-scale transition-transform duration-200" />
          </Carousel>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default Portfolio;
