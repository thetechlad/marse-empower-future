const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <h2 className="text-3xl font-display font-medium tracking-luxury text-primary">MARSE</h2>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              © 2025 Marse. All rights reserved. Empowering every child to reach their full potential.
            </p>
            <p className="text-muted-foreground text-xs mt-2 font-light tracking-wide">
              Managed by Plural Dynamics
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;