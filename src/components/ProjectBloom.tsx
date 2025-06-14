
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Lightbulb, Target, ArrowRight } from "lucide-react";

const ProjectBloom = () => {
  const scrollToRequest = () => {
    const element = document.querySelector('#request');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: Users,
      title: "Student Engagement",
      description: "Interactive workshops and hands-on sessions that boost participation and practical learning",
      gradient: "from-blue-600 to-teal-600"
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Comprehensive training in AI/ML, programming, and emerging technologies",
      gradient: "from-teal-600 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation Culture",
      description: "Foster creativity and problem-solving mindset among students and faculty",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: Target,
      title: "Career Readiness",
      description: "Industry-aligned training that prepares students for tech careers and competitions",
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <section id="collaborate" className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 break-words">
              Transform Your Campus
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 break-words">
              Let's collaborate to bring cutting-edge technology education and innovation to your institution
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-0">
                <CardHeader className="text-center">
                  <div className={`p-3 sm:p-4 rounded-full bg-gradient-to-r ${benefit.gradient} text-white mx-auto mb-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center`}>
                    <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-gray-800 group-hover:text-blue-600 transition-colors break-words">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base break-words">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Stats */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 sm:p-12 rounded-2xl mb-12 sm:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 break-words">Proven Impact</h3>
              <p className="text-blue-100 text-base sm:text-lg break-words">
                Results from previous collaborations with educational institutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-100 text-sm sm:text-base">Students Trained</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold mb-2">30+</div>
                <div className="text-blue-100 text-sm sm:text-base">Events Organized</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100 text-sm sm:text-base">Workshop Series</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold mb-2">4.8/5</div>
                <div className="text-blue-100 text-sm sm:text-base">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button 
              onClick={scrollToRequest}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 group min-h-[44px] break-words"
            >
              <span className="break-words">Request to Transform Your Campus</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-3 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
            <p className="text-gray-600 mt-4 text-base sm:text-lg break-words">
              Ready to elevate your institution's tech education? Let's discuss how we can collaborate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBloom;
