import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">MARSE</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            <a 
              href="#mission" 
              className="text-foreground hover:text-primary transition-colors accessibility-focus rounded-md px-3 py-2"
            >
              Our Mission
            </a>
            <a 
              href="#programs" 
              className="text-foreground hover:text-primary transition-colors accessibility-focus rounded-md px-3 py-2"
            >
              Specialized Program
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors accessibility-focus rounded-md px-3 py-2"
            >
              Contact us
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="warm" size="sm">
              Donate Now
            </Button>
            <Button variant="outline" size="sm">
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
          <div className="md:hidden bg-background border-t border-border" id="mobile-menu">
            <nav className="px-2 pt-2 pb-3 space-y-1" role="navigation" aria-label="Mobile navigation">
              <a
                href="#mission"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors accessibility-focus rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Mission
              </a>
              <a
                href="#programs"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors accessibility-focus rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Specialized Program
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors accessibility-focus rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </a>
              <div className="pt-4 pb-2 space-y-2">
                <Button variant="warm" size="sm" className="w-full">
                  Donate Now
                </Button>
                <Button variant="outline" size="sm" className="w-full">
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