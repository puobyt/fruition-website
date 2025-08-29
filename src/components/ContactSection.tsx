import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    productInterest: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Sample Request Submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      productInterest: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["Boby: +91 9847300189", "Dilip: +91 9895010487"],
      color: "from-primary to-primary-muted"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["boby@fruition.in.net", "dilip@fruition.in.net"],
      color: "from-secondary to-secondary-muted"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Plot 45, Industrial Area", "Bangalore, Karnataka 560058, India"],
      color: "from-accent to-accent-muted"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "from-primary to-accent"
    }
  ];

  const productOptions = [
    "Garlic Oleoresin",
    "Paprika Oleoresin",
    "Onion Oleoresin",
    "Essential Oils",
    "Natural Colors",
    "Custom Extracts",
    "Spray Drying Services",
    "Other"
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-flex items-center space-x-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Send className="w-4 h-4" />
            <span>Get In Touch</span>
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Request Custom Extract
            <span className="block gradient-text">Sample Today</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Partner with us for premium natural extracts. Our experts are ready to 
            discuss your specific requirements and provide tailored solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="animate-fade-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to elevate your products with our premium natural extracts? 
                Get in touch with our expert team.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-soft animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-premium animate-fade-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">Request Sample & Information</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@company.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Product Interest *
                  </label>
                  <Select value={formData.productInterest} onValueChange={(value) => handleInputChange("productInterest", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select product category" />
                    </SelectTrigger>
                    <SelectContent>
                      {productOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message & Requirements
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please describe your specific requirements, quantities, and application details..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="btn-primary flex-1">
                    Send Sample Request
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <Button type="button" variant="outline" className="flex-1">
                    Schedule Call
                    <Phone className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center animate-fade-up">
          <div className="card-premium max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join 500+ satisfied clients worldwide who trust Fruition Natural Extracts 
              for their premium extraction needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                Download Product Catalog
              </Button>
              <Button variant="outline">
                Schedule Facility Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;