import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-subtle py-16 lg:py-24" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 
            id="hero-title" 
            className="hero-text text-foreground mb-6 max-w-4xl mx-auto"
          >
            Empower Your Child's Future Today
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            At Marse, we are dedicated to nurturing the potential of every child. Our personalized learning plans and therapeutic support ensure that children with special needs thrive in an inclusive environment. Join us in creating a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="min-w-[200px]">
              Learn More About Our Programs
            </Button>
            <Button variant="outline" size="xl" className="min-w-[200px]">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;