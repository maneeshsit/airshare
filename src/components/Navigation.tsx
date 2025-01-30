import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-semibold">AirShare</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#flights" className="text-platinum-700 hover:text-platinum-900 transition-colors">
              Flights
            </a>
            <a href="#fleet" className="text-platinum-700 hover:text-platinum-900 transition-colors">
              Our Fleet
            </a>
            <a href="#safety" className="text-platinum-700 hover:text-platinum-900 transition-colors">
              Safety
            </a>
            <a href="#flights">
              <Button variant="outline" className="ml-4">
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#flights"
              className="block px-3 py-2 text-platinum-700 hover:text-platinum-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Flights
            </a>
            <a
              href="#fleet"
              className="block px-3 py-2 text-platinum-700 hover:text-platinum-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Fleet
            </a>
            <a
              href="#safety"
              className="block px-3 py-2 text-platinum-700 hover:text-platinum-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Safety
            </a>
            <div className="px-3 py-2">
              <a href="#flights">
                <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;