
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Final-year B.Tech student in AI & ML at Mohan Babu University with an outstanding CGPA of 9.36. 
                  I'm passionate about transforming complex problems into elegant solutions through artificial intelligence 
                  and machine learning.
                </p>
                
                <p>
                  As Co-founder of <span className="font-semibold text-blue-600">Project Bloom</span>, I'm dedicated to 
                  building tech communities and creating industry-driven learning ecosystems that bridge the gap between 
                  academic knowledge and real-world applications.
                </p>

                <p>
                  My journey involves mentoring hundreds of students, organizing impactful workshops, and leading 
                  tech events that inspire the next generation of technologists.
                </p>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-lg italic text-gray-700">
                  "Technology is best when it brings people together and creates opportunities for growth."
                </p>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="space-y-6">
              <Card className="p-8 bg-white shadow-lg border-0 bg-gradient-to-br from-blue-50 to-teal-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
                
                <div className="space-y-4">
                  <button 
                    onClick={handleEmailClick}
                    className="flex items-center space-x-3 w-full text-left hover:bg-white/50 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">allamgowrishankar28@gmail.com</span>
                  </button>
                  
                  <button 
                    onClick={handleLinkedInClick}
                    className="flex items-center space-x-3 w-full text-left hover:bg-white/50 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">linkedin.com/in/allamgowrishankar</span>
                  </button>
                  
                  <button 
                    onClick={handleGitHubClick}
                    className="flex items-center space-x-3 w-full text-left hover:bg-white/50 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">github.com/GowriShankarAllam</span>
                  </button>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">Palamaner, Chittoor Dist, Andhra Pradesh</span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button 
                    onClick={handleResumeDownload}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button 
                    onClick={handleLinkedInClick}
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
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
