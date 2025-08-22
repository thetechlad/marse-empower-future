import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-subtle luxury-spacing" aria-labelledby="hero-title">
      <div className="max-w-6xl mx-auto px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            id="hero-title" 
            className="hero-text text-foreground mb-12 text-balance animate-fade-in"
          >
            Empower Your Child's Future Today
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            At Marse, we are dedicated to nurturing the potential of every child. Our personalized learning plans and therapeutic support ensure that children with special needs thrive in an inclusive environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="luxury" size="xl" className="min-w-[240px] animate-scale-in">
              Discover Our Programs
            </Button>
            <Button variant="minimal" size="xl" className="min-w-[240px] animate-scale-in">
              Schedule Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;