import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-display font-medium tracking-luxury text-primary">MARSE</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-all duration-500 accessibility-focus rounded-sm px-3 py-2 font-medium tracking-wide uppercase text-sm signature-link"
            >
              About
            </a>
            <a 
              href="#programs" 
              className="text-foreground hover:text-primary transition-all duration-500 accessibility-focus rounded-sm px-3 py-2 font-medium tracking-wide uppercase text-sm signature-link"
            >
              Programs
            </a>
            <a 
              href="#gallery" 
              className="text-foreground hover:text-primary transition-all duration-500 accessibility-focus rounded-sm px-3 py-2 font-medium tracking-wide uppercase text-sm signature-link"
            >
              Gallery
            </a>
            <a 
              href="#events" 
              className="text-foreground hover:text-primary transition-all duration-500 accessibility-focus rounded-sm px-3 py-2 font-medium tracking-wide uppercase text-sm signature-link"
            >
              Events
            </a>
            <a 
              href="#staff" 
              className="text-foreground hover:text-primary transition-all duration-500 accessibility-focus rounded-sm px-3 py-2 font-medium tracking-wide uppercase text-sm signature-link"
            >
              Staff
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-all duration-500 accessibility-focus rounded-sm px-3 py-2 font-medium tracking-wide uppercase text-sm signature-link"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="gold" size="sm">
              Donate Now
            </Button>
            <Button variant="minimal" size="sm">
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in" id="mobile-menu">
            <nav className="px-2 pt-6 pb-6 space-y-4" role="navigation" aria-label="Mobile navigation">
              <a
                href="#about"
                className="block px-4 py-3 text-foreground hover:text-primary transition-all duration-500 accessibility-focus rounded-sm font-medium tracking-wide uppercase text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#programs"
                className="block px-4 py-3 text-foreground hover:text-primary transition-all duration-500 accessibility-focus rounded-sm font-medium tracking-wide uppercase text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </a>
              <a
                href="#gallery"
                className="block px-4 py-3 text-foreground hover:text-primary transition-all duration-500 accessibility-focus rounded-sm font-medium tracking-wide uppercase text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#events"
                className="block px-4 py-3 text-foreground hover:text-primary transition-all duration-500 accessibility-focus rounded-sm font-medium tracking-wide uppercase text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </a>
              <a
                href="#staff"
                className="block px-4 py-3 text-foreground hover:text-primary transition-all duration-500 accessibility-focus rounded-sm font-medium tracking-wide uppercase text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Staff
              </a>
              <a
                href="#contact"
                className="block px-4 py-3 text-foreground hover:text-primary transition-all duration-500 accessibility-focus rounded-sm font-medium tracking-wide uppercase text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 space-y-3">
                <Button variant="gold" size="sm" className="w-full">
                  Donate Now
                </Button>
                <Button variant="minimal" size="sm" className="w-full">
                  Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;