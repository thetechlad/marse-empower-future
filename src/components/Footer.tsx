const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-primary mr-4">MARSE</h2>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2025 Marse. All rights reserved. Empowering every child to reach their full potential.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Managed by Plural Dynamics
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;