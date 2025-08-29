import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/fruition-logo-main.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navItems = [{
    name: "Home",
    href: "#home"
  }, {
    name: "Products",
    href: "#products",
    dropdown: [{
      name: "Oleoresins",
      href: "#oleoresins"
    }, {
      name: "Essential Oils",
      href: "#essential-oils"
    }, {
      name: "Natural Colors",
      href: "#natural-colors"
    }, {
      name: "Custom Extracts",
      href: "#custom-extracts"
    }]
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Capabilities",
    href: "#capabilities"
  }, {
    name: "Quality",
    href: "#quality"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/2cf61317-25ed-4bb9-8f3c-c8d770abbf70.png" 
              alt="Fruition Natural Extracts" 
              className="h-16 w-auto object-contain bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => <div key={item.name} className="relative group" onMouseEnter={() => setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                <a href={item.href} className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {item.dropdown && activeDropdown === item.name && <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-border py-2 animate-fade-up">
                    {item.dropdown.map(subItem => <a key={subItem.name} href={subItem.href} className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors duration-200">
                        {subItem.name}
                      </a>)}
                  </div>}
              </div>)}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="btn-primary">
              Request Sample
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && <div className="lg:hidden py-4 border-t border-border">
            {navItems.map(item => <div key={item.name} className="py-2">
                <a href={item.href} className="block text-foreground hover:text-primary transition-colors duration-200 font-medium" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>
                {item.dropdown && <div className="pl-4 mt-2">
                    {item.dropdown.map(subItem => <a key={subItem.name} href={subItem.href} className="block py-1 text-muted-foreground hover:text-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>
                        {subItem.name}
                      </a>)}
                  </div>}
              </div>)}
            <div className="pt-4">
              <Button className="btn-primary w-full">
                Request Sample
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;