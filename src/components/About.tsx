
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Github, Download } from "lucide-react";

const About = () => {
  const handleResumeDownload = () => {
    window.open("https://drive.google.com/file/d/16ChmYTlJLlqbCGG36_diO92NQNuxMkMd/view?usp=drive_link", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/allamgowrishankar", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/GowriShankarAllam", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:allamgowrishankar28@gmail.com";
  };

  return (
    <section id="about" className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 break-words">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Bio Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-base sm:text-lg break-words">
                  Final-year B.Tech student in AI & ML at Mohan Babu University with an outstanding CGPA of 9.36. 
                  I'm passionate about transforming complex problems into elegant solutions through artificial intelligence 
                  and machine learning.
                </p>
                
                <p className="break-words">
                  As Co-founder of <span className="font-semibold text-blue-600">Project Bloom</span>, I'm dedicated to 
                  building tech communities and creating industry-driven learning ecosystems that bridge the gap between 
                  academic knowledge and real-world applications.
                </p>

                <p className="break-words">
                  My journey involves mentoring hundreds of students, organizing impactful workshops, and leading 
                  tech events that inspire the next generation of technologists.
                </p>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded-r-lg">
                <p className="text-base sm:text-lg italic text-gray-700 break-words">
                  "Technology is best when it brings people together and creates opportunities for growth."
                </p>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="space-y-6 order-1 lg:order-2">
              <Card className="p-6 sm:p-8 bg-white shadow-lg border-0 bg-gradient-to-br from-blue-50 to-teal-50">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 break-words">Let's Connect</h3>
                
                <div className="space-y-4">
                  <button 
                    onClick={handleEmailClick}
                    className="flex items-center space-x-3 w-full text-left hover:bg-white/50 p-2 rounded-lg transition-colors min-h-[44px]"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base break-all">allamgowrishankar28@gmail.com</span>
                  </button>
                  
                  <button 
                    onClick={handleLinkedInClick}
                    className="flex items-center space-x-3 w-full text-left hover:bg-white/50 p-2 rounded-lg transition-colors min-h-[44px]"
                  >
                    <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base break-all">linkedin.com/in/allamgowrishankar</span>
                  </button>
                  
                  <button 
                    onClick={handleGitHubClick}
                    className="flex items-center space-x-3 w-full text-left hover:bg-white/50 p-2 rounded-lg transition-colors min-h-[44px]"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base break-all">github.com/GowriShankarAllam</span>
                  </button>

                  <div className="flex items-center space-x-3 min-h-[44px]">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base break-words">Palamaner, Chittoor Dist, Andhra Pradesh</span>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 space-y-3">
                  <Button 
                    onClick={handleResumeDownload}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold min-h-[44px]"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button 
                    onClick={handleLinkedInClick}
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 min-h-[44px]"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    View LinkedIn
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
