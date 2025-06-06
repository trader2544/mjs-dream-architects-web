
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

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
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'design', label: 'Design' },
    { key: 'interior', label: 'Interior' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Projects Portfolio
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our finest work in design and construction
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 ${
                activeFilter === filter.key 
                  ? "bg-blue-500 hover:bg-blue-600" 
                  : "border-blue-500 text-blue-500 hover:bg-blue-50"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Project Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {filteredProjects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-scale group">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
