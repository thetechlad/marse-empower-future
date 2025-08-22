import { Button } from "@/components/ui/button";
import { GraduationCap, MessageCircle, Users } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Individualized Education Programs",
      description: "Our IEPs are crafted to meet each child's unique needs, ensuring they receive the necessary support to thrive academically. We work closely with parents to maintain consistency between home and school.",
      features: ["Personalized learning plans", "Regular progress assessments", "Parent collaboration", "Academic support"]
    },
    {
      icon: MessageCircle,
      title: "Speech and Occupational Therapy",
      description: "Our therapy services focus on developing essential communication and life skills, promoting independence and confidence. We use engaging activities to improve fine motor skills and support sensory processing.",
      features: ["Communication development", "Fine motor skills", "Sensory processing", "Life skills training"]
    },
    {
      icon: Users,
      title: "After-School Support",
      description: "Our after-school program offers additional academic assistance and social skills development in a nurturing environment. Children benefit from structured activities that encourage creativity and teamwork.",
      features: ["Academic assistance", "Social skills development", "Creative activities", "Team building"]
    }
  ];

  return (
    <section id="programs" className="py-16 lg:py-24 bg-secondary" aria-labelledby="programs-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="programs-title" className="section-title text-foreground mb-6">
            Explore Our Specialized Programs for Every Child
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Marse, we offer a range of programs designed to support the unique needs of each child. Our individualized education plans, speech and occupational therapy, and after-school support ensure that every student receives the attention and care they deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 p-8 border border-border group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                
                <h3 className="card-title text-foreground mb-4">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;