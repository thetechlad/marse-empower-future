import { Heart, Star, Users, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every child deserves love, understanding, and support as they grow and learn.",
      color: "text-red-500"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for the highest standards in education and therapeutic services.",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Building a welcoming environment where every child feels valued and included.",
      color: "text-blue-500"
    },
    {
      icon: Target,
      title: "Focused Growth",
      description: "Personalized approaches that target each child's unique strengths and needs.",
      color: "text-green-500"
    }
  ];

  return (
    <section id="about" className="luxury-spacing bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 id="about-title" className="section-title text-foreground mb-8">
              About Our Journey
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                For over a decade, Marse has been a beacon of hope for families with special needs children. 
                Our journey began with a simple yet powerful vision: to create an environment where every 
                child can discover their potential and thrive.
              </p>
              <p className="text-lg">
                Founded by educators and therapists who understood the unique challenges faced by these 
                remarkable children, we've grown into a comprehensive support system that serves hundreds 
                of families in our community.
              </p>
              <p className="text-lg font-medium text-primary">
                Today, we continue to innovate and expand our services, always keeping the child at the 
                center of everything we do.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-luxury hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 ${value.color} mb-4 flex items-center justify-center bg-background rounded-lg`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-medium text-foreground mb-2 text-sm">
                    {value.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;