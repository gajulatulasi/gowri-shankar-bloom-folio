
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Publications from "@/components/Publications";
import Workshops from "@/components/Workshops";
import Leadership from "@/components/Leadership";
import ProjectBloom from "@/components/ProjectBloom";
import Contact from "@/components/Contact";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
      
      <section id="education">
        <Education />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="hackathons">
        <Hackathons />
      </section>
      
      <section id="publications">
        <Publications />
      </section>
      
      <section id="workshops">
        <Workshops />
      </section>
      
      <section id="leadership">
        <Leadership />
      </section>
      
      <section id="collaborate">
        <ProjectBloom />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Gowri Shankar Allam</h3>
            <p className="text-gray-300 mb-6">
              AI & Machine Learning Engineer | Building the future, one algorithm at a time
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors">
                <span className="sr-only">GitHub</span>
                🐙
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <span className="sr-only">Email</span>
                ✉️
              </a>
            </div>
            
            {/* Back to Top Link in Footer */}
            <div className="mb-6">
              <Button
                onClick={scrollToTop}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">
                © 2025 Gowri Shankar Allam. Crafted with passion for technology and innovation.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
