import { Award, Users, Factory, Microscope } from "lucide-react";
import facilityModern from "@/assets/facility-modern.jpg";

const AboutSection = () => {
  const achievements = [
    {
      icon: Factory,
      title: "State-of-the-Art Facility",
      description: "Modern extraction plant with spray dryer technology and advanced processing units"
    },
    {
      icon: Award,
      title: "ISO Certified Quality",
      description: "ISO 22000, HACCP, FDA approved facilities ensuring highest quality standards"
    },
    {
      icon: Microscope,
      title: "Advanced R&D",
      description: "Agile research & development for cross-industry applications in food, pharma & cosmetics"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "25+ years of expertise in natural extraction and sustainable processing methods"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-muted to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <div className="mb-6">
              <span className="inline-flex items-center space-x-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>About Fruition Natural Extracts</span>
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pioneering Natural
              <span className="block gradient-text">Extraction Excellence</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over 25 years, Fruition Natural Extracts has been at the forefront of spice 
              extraction technology. We specialize in producing premium oleoresins, essential oils, 
              and natural colors that meet the evolving needs of global food, pharmaceutical, 
              and cosmetic industries.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to sustainable extraction methods and cutting-edge technology ensures 
              that every product delivers exceptional purity, potency, and consistency. From our 
              modern facility, we serve clients across 50+ countries with customized solutions 
              that drive their success.
            </p>

            {/* Key Values */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-semibold text-primary">End-to-end extraction solutions from farm to final product</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="font-semibold text-primary">Agile R&D for cross-industry applications</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="font-semibold text-primary">Sustainable & environmentally conscious processing</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={facilityModern}
                alt="Modern extraction facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl animate-float">
              <div className="text-3xl font-bold text-primary">ISO</div>
              <div className="text-sm text-muted-foreground">Certified</div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="card-premium hover-lift text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{achievement.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;