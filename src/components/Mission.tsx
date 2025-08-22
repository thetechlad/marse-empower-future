const Mission = () => {
  const stats = [
    {
      number: "2025",
      label: "Years",
      description: "Since our founding in 2007, we have been committed to providing exceptional educational support."
    },
    {
      number: "500+",
      label: "Students",
      description: "We have successfully supported over 500 students in their educational journeys."
    },
    {
      number: "15+",
      label: "Therapists",
      description: "Our team consists of over 15 dedicated therapists and educators."
    },
    {
      number: "200+",
      label: "Programs",
      description: "We offer a variety of programs tailored to meet the unique needs of our students."
    }
  ];

  return (
    <section id="mission" className="py-16 lg:py-24 bg-background" aria-labelledby="mission-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="mission-title" className="section-title text-foreground mb-6">
            Our Mission & Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Marse, we are dedicated to empowering children with special needs through personalized learning plans and therapeutic support. Our inclusive environment fosters growth and development for every child.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
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