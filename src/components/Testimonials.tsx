import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Marse has truly transformed my son's life. Their personalized approach has helped him excel both academically and socially.",
      name: "Ayesha Khan",
      role: "Mother"
    },
    {
      quote: "The staff at Marse genuinely understand the needs of children with special needs. My daughter has made amazing progress!",
      name: "Mohammad Ali",
      role: "Father"
    },
    {
      quote: "I am so thankful for Marse's support. The therapy programs have been a game changer for my child.",
      name: "Fatima Zahra",
      role: "Mother"
    },
    {
      quote: "The inclusive environment at Marse has made my son feel accepted and valued. We are so grateful!",
      name: "Ahmed Raza",
      role: "Father"
    },
    {
      quote: "The individualized education plans at Marse are perfectly tailored to my child's needs. Marse is a blessing for our family.",
      name: "Sana Malik",
      role: "Mother"
    },
    {
      quote: "Watching my child flourish at Marse has been the most rewarding experience. I highly recommend it!",
      name: "Bilal Ahmed",
      role: "Father"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="testimonials-title" className="section-title text-foreground mb-6">
            What Parents Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our families share their inspiring journeys with Marse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 p-6 border border-border"
            >
              <div className="flex items-start mb-4">
                <Quote className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-1" aria-hidden="true" />
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              
              <div className="border-t border-border pt-4">
                <cite className="not-italic">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;