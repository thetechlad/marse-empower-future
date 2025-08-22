const Mission = () => {
  const stats = [
    {
      number: "18",
      label: "Years of Excellence",
      description: "Since our founding in 2007, we have been committed to providing exceptional educational support."
    },
    {
      number: "500+",
      label: "Students Empowered",
      description: "We have successfully supported over 500 students in their educational journeys."
    },
    {
      number: "15+",
      label: "Expert Therapists",
      description: "Our team consists of over 15 dedicated therapists and educators."
    },
    {
      number: "200+",
      label: "Specialized Programs",
      description: "We offer a variety of programs tailored to meet the unique needs of our students."
    }
  ];

  return (
    <section id="mission" className="luxury-spacing bg-background" aria-labelledby="mission-title">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 id="mission-title" className="section-title text-foreground mb-8 animate-fade-in">
            Our Mission & Values
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            At Marse, we are dedicated to empowering children with special needs through personalized learning plans and therapeutic support. Our inclusive environment fosters growth and development for every child.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 premium-card rounded-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl lg:text-6xl font-display font-medium text-primary mb-4 tracking-tighter">
                {stat.number}
              </div>
              <div className="text-lg font-medium text-foreground mb-4 tracking-wide uppercase text-sm">
                {stat.label}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;