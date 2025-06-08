
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUp, Home, User, Zap, GraduationCap, Code, Trophy, BookOpen, Users, Heart, Mail } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Skills & Expertise", href: "#skills", icon: Zap },
    { label: "Education", href: "#education", icon: GraduationCap },
    { label: "Projects", href: "#projects", icon: Code },
    { label: "Hackathons & Events", href: "#hackathons", icon: Trophy },
    { label: "Publications", href: "#publications", icon: BookOpen },
    { label: "Workshops", href: "#workshops", icon: Users },
    { label: "Leadership & Community", href: "#leadership", icon: Heart },
    { label: "Collaborate / For Colleges", href: "#collaborate", icon: Users },
    { label: "Contact", href: "#contact", icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="font-bold text-xl text-gray-800">
              Gowri Shankar
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`group flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 font-medium text-sm ${
                    activeSection === item.href.substring(1)
                      ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-md"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  } ${
                    item.label === "Collaborate / For Colleges" 
                      ? "border-2 border-blue-600 hover:bg-blue-600 hover:text-white" 
                      : ""
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden xl:block">{item.label}</span>
                  <span className="xl:hidden">{item.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center space-x-3 w-full text-left px-3 py-3 rounded-md transition-all duration-200 ${
                      activeSection === item.href.substring(1)
                        ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    } ${
                      item.label === "Collaborate / For Colleges" 
                        ? "border border-blue-600" 
                        : ""
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Back to Top Button */}
      {isScrolled && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </>
  );
};

export default Navigation;
