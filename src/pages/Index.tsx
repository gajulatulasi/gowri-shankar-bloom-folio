
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import ProjectBloom from "@/components/ProjectBloom";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      <section id="hero">
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
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 sm:py-12 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words">Gowri Shankar Allam</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base break-words">
              AI & Machine Learning Engineer | Building the future, one algorithm at a time
            </p>
            
            <div className="flex justify-center space-x-6 mb-6 sm:mb-8">
              <a href="https://www.linkedin.com/in/allamgowrishankar" className="text-gray-300 hover:text-blue-400 transition-colors text-2xl min-h-[44px] min-w-[44px] flex items-center justify-center">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="https://github.com/GowriShankarAllam" className="text-gray-300 hover:text-gray-100 transition-colors text-2xl min-h-[44px] min-w-[44px] flex items-center justify-center">
                <span className="sr-only">GitHub</span>
                🐙
              </a>
              <a href="mailto:allamgowrishankar28@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors text-2xl min-h-[44px] min-w-[44px] flex items-center justify-center">
                <span className="sr-only">Email</span>
                ✉️
              </a>
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-xs sm:text-sm break-words">
                © 2025 Gowri Shankar Allam. Crafted with passion for technology and innovation.
              </p>
              <a 
                href="#hero" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base min-h-[44px] flex items-center justify-center break-words"
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
