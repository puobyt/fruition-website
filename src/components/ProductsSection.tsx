import { ArrowRight, Beaker, Droplets, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import paprikaExtract from "@/assets/paprika-extract.jpg";
import garlicOil from "@/assets/garlic-oil.jpg";
import naturalColors from "@/assets/natural-colors.jpg";
import productsShowcase from "@/assets/products-showcase.jpg";

const ProductsSection = () => {
  const products = [
    {
      icon: Droplets,
      title: "Premium Oleoresins",
      description: "High-concentration extracts including Garlic, Paprika, Onion, and specialized spice blends",
      image: paprikaExtract,
      features: ["100% Natural", "High Potency", "Custom Blends", "Consistent Quality"],
      color: "from-secondary to-secondary-muted"
    },
    {
      icon: Beaker,
      title: "Essential Spice Oils",
      description: "Pure essential oils extracted using advanced distillation and CO2 extraction methods",
      image: garlicOil,
      features: ["Steam Distilled", "CO2 Extracted", "Therapeutic Grade", "Batch Tested"],
      color: "from-primary to-primary-muted"
    },
    {
      icon: Palette,
      title: "Natural Colors",
      description: "Vibrant, stable natural colors for food, cosmetic, and pharmaceutical applications",
      image: naturalColors,
      features: ["Food Grade", "Light Stable", "pH Resistant", "Clean Label"],
      color: "from-accent to-accent-muted"
    }
  ];

  const capabilities = [
    {
      icon: Sparkles,
      title: "Custom Job Works",
      description: "Tailored extraction services for private label brands and specialized requirements"
    },
    {
      icon: Droplets,
      title: "Spray Drying",
      description: "Advanced spray drying technology for powder formulations and encapsulation"
    },
    {
      icon: Beaker,
      title: "R&D Services",
      description: "Product development and formulation support for new applications"
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-white to-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-flex items-center space-x-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Beaker className="w-4 h-4" />
            <span>Our Product Range</span>
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium Natural Extracts
            <span className="block gradient-text">For Every Application</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From oleoresins to essential oils, our comprehensive product portfolio serves 
            the food, pharmaceutical, and cosmetic industries worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group card-premium hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20`} />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">{product.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={productsShowcase}
                  alt="Product showcase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-up">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Advanced Processing
                <span className="block gradient-text">Capabilities</span>
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our state-of-the-art facility offers comprehensive extraction and processing 
                services, from custom job works to specialized spray drying operations.
              </p>

              <div className="space-y-6">
                {capabilities.map((capability, index) => (
                  <div
                    key={capability.title}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{capability.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="btn-primary">
                  Explore Capabilities
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;