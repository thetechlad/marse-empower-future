import { Button } from "@/components/ui/button";
import { GraduationCap, MessageCircle, Users } from "lucide-react";
import creativeActivities from "@/assets/creative-activities.jpg";
import physicalTherapy from "@/assets/physical-therapy.jpg";
import medicalCare from "@/assets/medical-care.jpg";

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
    <section id="programs" className="luxury-spacing bg-secondary" aria-labelledby="programs-title">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 id="programs-title" className="section-title text-foreground mb-8 animate-fade-in">
            Specialized Programs for Every Child
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            At Marse, we offer a range of programs designed to support the unique needs of each child. Our individualized education plans, speech and occupational therapy, and after-school support ensure that every student receives the attention and care they deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            const programImage = index === 0 ? creativeActivities : index === 1 ? physicalTherapy : medicalCare;
            return (
              <div
                key={index}
                className="premium-card rounded-sm overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={programImage}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/5 rounded-sm mb-8 group-hover:bg-primary/10 transition-all duration-500">
                    <IconComponent className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  
                  <h3 className="text-xl font-display font-medium text-foreground mb-6 tracking-luxury leading-tight">
                    {program.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed font-light">
                    {program.description}
                  </p>
                  
                  <ul className="space-y-3 mb-10">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground font-light">
                        <div className="w-2 h-2 bg-accent rounded-full mr-4 flex-shrink-0" aria-hidden="true"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="minimal" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;