import { ArrowRight, Award, Globe, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSpices from "@/assets/hero-spices.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroSpices}
          alt="Premium spice extracts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">ISO Certified | FDA Approved</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Pure Spice Extracts,
            <span className="block gradient-text">Globally Trusted</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading manufacturer of premium oleoresins, essential oils, and natural colors. 
            End-to-end extraction solutions from farm to final product.
          </p>

          {/* USP Points */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2">
              <Leaf className="w-5 h-5 text-accent" />
              <span className="text-lg">100% Natural</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-accent" />
              <span className="text-lg">Global Supply</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-lg">Premium Quality</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="btn-primary text-lg px-10 py-4">
              Request Custom Sample
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button className="btn-secondary text-lg px-10 py-4 bg-white/20 border-white text-white hover:bg-white hover:text-primary">
              View Products
            </Button>
          </div>

          {/* Statistics Cards */}
          <div className="hidden lg:flex justify-center space-x-8">
            <div className="text-center animate-float bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
              <div className="text-3xl font-bold text-accent">25+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div className="text-center animate-float bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20" style={{ animationDelay: '1s' }}>
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-white/80">Countries Served</div>
            </div>
            <div className="text-center animate-float bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20" style={{ animationDelay: '2s' }}>
              <div className="text-3xl font-bold text-accent">100+</div>
              <div className="text-sm text-white/80">Products Range</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;