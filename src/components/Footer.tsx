import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Award } from "lucide-react";

const Footer = () => {
  const productLinks = [
    "Garlic Oleoresin",
    "Paprika Oleoresin", 
    "Onion Oleoresin",
    "Essential Oils",
    "Natural Colors",
    "Custom Extracts"
  ];

  const companyLinks = [
    "About Us",
    "Our Facility",
    "Quality Standards",
    "Careers",
    "News & Updates",
    "Contact"
  ];

  const certifications = [
    "ISO 22000",
    "HACCP",
    "FDA Approved",
    "FSSAI Licensed",
    "GMP Certified",
    "Organic Certified"
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-earth-deep text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                <span className="text-primary font-bold text-xl">F</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Fruition Natural Extracts</h3>
                <p className="text-xs text-white/70">Pvt. Ltd.</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Leading manufacturer of premium spice extracts, oleoresins, and natural colors. 
              Trusted globally for quality, innovation, and sustainability.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">Boby: +91 9847300189</span>
                <span className="text-sm">Dilip: +91 9895010487</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">boby@fruition.in.net</span>
                <span className="text-sm">dilip@fruition.in.net</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-sm">Plot 45, Industrial Area<br />Bangalore, Karnataka 560058, India</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-accent" />
              Certifications
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="bg-white/10 rounded-lg px-3 py-2 text-center"
                >
                  <span className="text-xs font-medium">{cert}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/70">
              © 2024 Fruition Natural Extracts Pvt. Ltd. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors duration-200">
                Quality Policy
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors duration-200">
                Sustainability
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;