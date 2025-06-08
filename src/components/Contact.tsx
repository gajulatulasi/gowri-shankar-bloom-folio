
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Let's Collaborate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              I'd love to work with your institution or team!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 mb-4">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Email</div>
                      <div className="text-gray-600 text-sm">allamgowrishankar28@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Location</div>
                      <div className="text-gray-600 text-sm">Palamaner, Chittoor Dist, Andhra Pradesh</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">LinkedIn</div>
                      <a 
                        href="https://www.linkedin.com/in/allamgowrishankar" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                      >
                        linkedin.com/in/allamgowrishankar
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">GitHub</div>
                      <a 
                        href="https://github.com/GowriShankarAllam" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
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
                  <CardTitle className="text-xl text-gray-800 mb-4">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    onClick={handleResumeDownload}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  
                  <Button 
                    onClick={scrollToRequest}
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Request Workshop
                  </Button>

                  <Button 
                    onClick={scrollToRequest}
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Schedule a Session
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Request Form */}
            <div id="request" className="lg:col-span-2">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 mb-2">Request a Workshop or Session</CardTitle>
                  <p className="text-gray-600">Fill out the form below and I'll get back to you within 24 hours.</p>
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
