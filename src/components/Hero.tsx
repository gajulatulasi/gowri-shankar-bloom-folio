
import { Button } from "@/components/ui/button";
import { Brain, Code, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Brain className="w-12 h-12 text-blue-200 opacity-30" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Code className="w-16 h-16 text-teal-200 opacity-30" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-pulse-slow">
          <div className="w-4 h-4 bg-blue-300 rounded-full opacity-40"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse-slow" style={{ animationDelay: '2s' }}>
          <div className="w-6 h-6 bg-teal-300 rounded-full opacity-40"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left content */}
          <div className="lg:w-1/2 text-white space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">Gowri Shankar</span>
                <span className="block bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
                  Allam
                </span>
              </h1>
              
              <div className="text-xl lg:text-2xl font-medium text-blue-100">
                AI & Machine Learning Engineer
              </div>
              
              <div className="text-lg text-blue-200 font-medium">
                Founder of Project Bloom
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-lg italic text-blue-100 mb-4">
                "I bring order to complexity and vision to execution"
              </p>
              
              <div className="text-sm text-blue-200 space-y-1">
                <div>✨ Mentored 500+ students</div>
                <div>🎯 Organized 10+ workshops</div>
                <div>🚀 Led 50+ tech events</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg"
              >
                Get in Touch
              </Button>
              <Button 
                onClick={scrollToProjects}
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 text-lg"
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Right content - Profile Photo */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 p-2 animate-float">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/30">
                  <img 
                    src="/lovable-uploads/5ab4b363-a1d2-4160-af34-4382d300d921.png"
                    alt="Gowri Shankar Allam - AI & Machine Learning Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating tech icons around photo */}
              <div className="absolute -top-4 -left-4 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <Brain className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
