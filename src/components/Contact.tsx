
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Download, MapPin, Github, Linkedin } from "lucide-react";
import RequestForm from "./ScheduleMeetingModal";

const Contact = () => {
  const handleResumeDownload = () => {
    window.open("https://drive.google.com/file/d/16ChmYTlJLlqbCGG36_diO92NQNuxMkMd/view?usp=drive_link", "_blank");
  };

  const scrollToRequest = () => {
    const element = document.querySelector('#request');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 break-words">
              Let's Collaborate
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 break-words">
              I'd love to work with your institution or team!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-6 sm:mb-8">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-gray-800 mb-4 break-words">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-800 text-sm sm:text-base">Email</div>
                      <div className="text-gray-600 text-xs sm:text-sm break-all">allamgowrishankar28@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-teal-600 to-blue-600 text-white flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-800 text-sm sm:text-base">Location</div>
                      <div className="text-gray-600 text-xs sm:text-sm break-words">Palamaner, Chittoor Dist, Andhra Pradesh</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white flex-shrink-0">
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-800 text-sm sm:text-base">LinkedIn</div>
                      <a 
                        href="https://www.linkedin.com/in/allamgowrishankar" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm transition-colors break-all"
                      >
                        linkedin.com/in/allamgowrishankar
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-teal-600 to-blue-600 text-white flex-shrink-0">
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-800 text-sm sm:text-base">GitHub</div>
                      <a 
                        href="https://github.com/GowriShankarAllam" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm transition-colors break-all"
                      >
                        github.com/GowriShankarAllam
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-gray-800 mb-4 break-words">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    onClick={handleResumeDownload}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white min-h-[44px] text-sm sm:text-base"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  
                  <Button 
                    onClick={scrollToRequest}
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 min-h-[44px] text-sm sm:text-base"
                  >
                    Request Workshop
                  </Button>

                  <Button 
                    onClick={scrollToRequest}
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 min-h-[44px] text-sm sm:text-base"
                  >
                    Schedule a Session
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Request Form */}
            <div id="request" className="lg:col-span-2 order-1 lg:order-2 scroll-mt-20">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-gray-800 mb-2 break-words">Request a Workshop or Session</CardTitle>
                  <p className="text-gray-600 text-sm sm:text-base break-words">Fill out the form below and I'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <RequestForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
