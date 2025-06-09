
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
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 scroll-mt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 animate-float">
          <Brain className="w-8 h-8 sm:w-12 sm:h-12 text-blue-200 opacity-30" />
        </div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Code className="w-10 h-10 sm:w-16 sm:h-16 text-teal-200 opacity-30" />
        </div>
        <div className="absolute bottom-20 sm:bottom-40 left-1/4 animate-pulse-slow">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-300 rounded-full opacity-40"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse-slow" style={{ animationDelay: '2s' }}>
          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-teal-300 rounded-full opacity-40"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-20 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-8rem)] gap-8 lg:gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 text-white space-y-6 sm:space-y-8 animate-slide-up text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block">Gowri Shankar</span>
                <span className="block bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
                  Allam
                </span>
              </h1>
              
              <div className="text-lg sm:text-xl lg:text-2xl font-medium text-blue-100">
                AI & Machine Learning Engineer
              </div>
              
              <div className="text-base sm:text-lg text-blue-200 font-medium">
                Founder of Project Bloom
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20 max-w-md mx-auto lg:mx-0">
              <p className="text-base sm:text-lg italic text-blue-100 mb-4 break-words">
                "I bring order to complexity and vision to execution"
              </p>
              
              <div className="text-sm text-blue-200 space-y-1">
                <div>✨ Mentored 1000+ students</div>
                <div>🎯 Organized 30+ workshops</div>
                <div>🚀 Led 50+ tech events</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg min-h-[44px] w-full sm:w-auto"
              >
                Get in Touch
              </Button>
              <Button 
                onClick={scrollToProjects}
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg min-h-[44px] w-full sm:w-auto"
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Right content - Profile Photo */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 p-2 animate-float">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/30">
                  <img 
                    src="/lovable-uploads/5ab4b363-a1d2-4160-af34-4382d300d921.png"
                    alt="Gowri Shankar Allam - AI & Machine Learning Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating tech icons around photo */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
