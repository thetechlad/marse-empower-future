import { Mail, Phone, Award, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Staff = () => {
  const staffMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Director & Educational Psychologist",
      credentials: "Ph.D. in Educational Psychology",
      experience: "15+ years",
      specialties: ["Autism Spectrum Disorders", "Learning Disabilities", "Behavioral Interventions"],
      bio: "Dr. Johnson founded Marse with a vision to create inclusive learning environments. Her research in adaptive learning has been published in leading educational journals.",
      email: "sarah.johnson@marse.edu",
      phone: "(555) 123-4567",
      color: "bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30"
    },
    {
      name: "Maria Rodriguez",
      role: "Speech-Language Pathologist",
      credentials: "M.S. in Speech-Language Pathology",
      experience: "12+ years",
      specialties: ["Communication Disorders", "Augmentative Communication", "Language Development"],
      bio: "Maria specializes in helping children find their voice through innovative communication strategies and technology-assisted approaches.",
      email: "maria.rodriguez@marse.edu",
      phone: "(555) 123-4568",
      color: "bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30"
    },
    {
      name: "James Chen",
      role: "Occupational Therapist",
      credentials: "M.S. in Occupational Therapy",
      experience: "10+ years",
      specialties: ["Sensory Processing", "Fine Motor Skills", "Daily Living Skills"],
      bio: "James creates engaging therapeutic activities that help children develop independence and confidence in their daily activities.",
      email: "james.chen@marse.edu",
      phone: "(555) 123-4569",
      color: "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30"
    },
    {
      name: "Dr. Emily Thompson",
      role: "Behavioral Specialist",
      credentials: "Ph.D. in Applied Behavior Analysis",
      experience: "8+ years",
      specialties: ["Positive Behavior Support", "Social Skills Training", "Crisis Intervention"],
      bio: "Dr. Thompson develops individualized behavior support plans that promote positive interactions and learning environments.",
      email: "emily.thompson@marse.edu",
      phone: "(555) 123-4570",
      color: "bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30"
    }
  ];

  return (
    <section id="staff" className="luxury-spacing bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20" aria-labelledby="staff-title">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 id="staff-title" className="section-title text-foreground mb-8 animate-fade-in">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our dedicated professionals bring years of experience and passion to support every child's unique journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className={`${member.color} rounded-2xl p-8 shadow-luxury hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1 animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display font-medium text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4" />
                    <span>{member.credentials}</span>
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-black/80 rounded-lg p-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {member.bio}
              </p>

              {/* Experience & Specialties */}
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-medium text-foreground text-sm mb-2">Experience: {member.experience}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="bg-white/60 dark:bg-black/60 text-foreground px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-2 pt-4 border-t border-white/20 dark:border-black/20">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="min-w-[200px]">
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Staff;