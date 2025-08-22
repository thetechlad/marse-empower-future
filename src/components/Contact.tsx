import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "You can contact us at marse@gmail.com for any questions or support.",
      action: "marse@gmail.com",
      href: "mailto:marse@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Feel free to call us at 021 000111222 for immediate assistance.",
      action: "021 000111222",
      href: "tel:021000111222"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "We welcome you to visit us at MARSE Malir Cantt, Karachi, Pakistan to learn more about our academy.",
      action: "Get Directions",
      href: "https://maps.google.com/?q=Malir+Cantt+Karachi+Pakistan"
    }
  ];

  return (
    <section id="contact" className="luxury-spacing bg-secondary" aria-labelledby="contact-title">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 id="contact-title" className="section-title text-foreground mb-8 animate-fade-in">
            Get in Touch
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            We're here to help. For any inquiries regarding our programs or services, please reach out to us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                className="text-center premium-card rounded-sm p-10 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/5 rounded-sm mb-8 mx-auto group-hover:bg-primary/10 transition-all duration-500">
                  <IconComponent className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                
                <h3 className="text-xl font-display font-medium text-foreground mb-6 tracking-luxury">
                  {method.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed font-light">
                  {method.description}
                </p>
                
                <Button asChild variant="minimal" className="w-full">
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.action}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="premium-card p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-medium text-foreground mb-6 tracking-luxury">
              Ready to Start Your Child's Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-light max-w-2xl mx-auto">
              Schedule a consultation with our team to discuss how we can support your child's unique needs and help them thrive in our inclusive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="luxury" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="gold" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;