import { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    projectPlan: null as File | null,
    servicesNeeded: [] as string[]
  });

  const availableServices = [
    'Architectural Design',
    'Structural Design',
    'Interior Design',
    'Residential Construction',
    'Commercial Construction',
    'Renovations & Remodeling',
    'Project Management',
    'Cost Estimation',
    'Permit Assistance'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Success!",
      description: "Your request has been submitted. We'll contact you soon!",
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
      projectPlan: null,
      servicesNeeded: []
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      projectPlan: file
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicesNeeded: prev.servicesNeeded.includes(service)
        ? prev.servicesNeeded.filter(s => s !== service)
        : [...prev.servicesNeeded, service]
    }));
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Contact Us / Request a Quote
          </h2>
          <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto mb-6 md:mb-8"></div>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="hidden md:block">
              Ready to start your project? Get in touch with us today for a free consultation
            </span>
            <span className="md:hidden">
              Ready to start? Get your free consultation today
            </span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Get in Touch</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Phone className="w-5 md:w-6 h-5 md:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">Phone Numbers</p>
                      <p className="text-gray-600 text-xs md:text-base">0711236128, 0708727543, 0733847943</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">Email</p>
                      <p className="text-gray-600 text-xs md:text-base">dmjslimitedcompany@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">WhatsApp</p>
                      <a 
                        href="https://wa.me/qr/W7Y5C2TH34Q2B1" 
                        className="text-blue-500 hover:text-blue-600 transition-colors text-xs md:text-base"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-xs md:text-sm font-medium text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-1 text-xs md:text-base h-8 md:h-10"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-xs md:text-sm font-medium text-gray-700">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 text-xs md:text-base h-8 md:h-10"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-xs md:text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 text-xs md:text-base h-8 md:h-10"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Services Needed */}
                <div>
                  <Label className="text-xs md:text-sm font-medium text-gray-700 mb-2 block">
                    Services Needed
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {availableServices.map((service) => (
                      <label key={service} className="flex items-center space-x-1 md:space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.servicesNeeded.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="rounded border-gray-300 text-blue-500 focus:ring-blue-500 w-3 h-3 md:w-4 md:h-4"
                        />
                        <span className="text-xs md:text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-xs md:text-sm font-medium text-gray-700">
                    Project Details *
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="mt-1 w-full px-2 md:px-3 py-1 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs md:text-base"
                    placeholder="Describe your project requirements..."
                  />
                </div>

                <div>
                  <Label htmlFor="projectPlan" className="text-xs md:text-sm font-medium text-gray-700">
                    Upload Project Plan (Optional)
                  </Label>
                  <Input
                    id="projectPlan"
                    name="projectPlan"
                    type="file"
                    onChange={handleFileChange}
                    className="mt-1 text-xs md:text-base h-8 md:h-10"
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Supported formats: PDF, JPG, PNG, DOC, DOCX
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 md:py-3 text-sm md:text-lg"
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
