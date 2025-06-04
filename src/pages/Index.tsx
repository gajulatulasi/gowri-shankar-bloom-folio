
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Education />
      
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
            
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">
                © 2024 Gowri Shankar Allam. Crafted with passion for technology and innovation.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
