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
    <section id="contact" className="py-16 lg:py-24 bg-secondary" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="contact-title" className="section-title text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're Here to Help
          </p>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            For any inquiries regarding our programs or services, please reach out to us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                className="text-center bg-card rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 p-8 border border-border group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                
                <h3 className="card-title text-foreground mb-4">
                  {method.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {method.description}
                </p>
                
                <Button asChild variant="outline" className="w-full">
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.action}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card rounded-lg shadow-card p-8 border border-border max-w-4xl mx-auto">
            <h3 className="card-title text-foreground mb-4">
              Ready to Start Your Child's Journey?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Schedule a consultation with our team to discuss how we can support your child's unique needs and help them thrive in our inclusive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="warm" size="lg">
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