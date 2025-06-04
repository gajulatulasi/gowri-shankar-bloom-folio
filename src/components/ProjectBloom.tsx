
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, Award, Handshake, Brain, Globe, Target, CheckCircle } from "lucide-react";

const ProjectBloom = () => {
  const offerings = [
    {
      title: "Custom Workshops",
      description: "AI/ML, Full Stack Development, DevOps, Cybersecurity",
      icon: Brain,
      features: ["Hands-on projects", "Industry case studies", "Certificate of completion"]
    },
    {
      title: "Hackathon Hosting",
      description: "Complete execution support from planning to awards",
      icon: Target,
      features: ["End-to-end management", "Mentorship teams", "Prize coordination"]
    },
    {
      title: "Community Mentoring",
      description: "Building tech communities and peer learning networks",
      icon: Users,
      features: ["Mentorship programs", "Skill development", "Career guidance"]
    },
    {
      title: "Strategic Collaborations",
      description: "Partnerships with clubs, departments, and placement cells",
      icon: Handshake,
      features: ["Curriculum integration", "Industry connections", "Placement support"]
    }
  ];

  const benefits = [
    "Enhanced student engagement and participation",
    "Industry-relevant skill development",
    "Improved placement outcomes",
    "Strong alumni and industry networks",
    "Recognition as a tech-forward institution",
    "Sustainable learning communities"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-teal-800 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <Sparkles className="w-8 h-8 text-teal-400" />
              <Badge className="bg-teal-500/20 text-teal-200 border-teal-400">
                Project Bloom
              </Badge>
              <Sparkles className="w-8 h-8 text-teal-400" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Bring Project Bloom to Your Campus
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transform your institution with industry-driven learning ecosystems, 
              comprehensive workshops, and collaborative tech communities
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Offerings */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
                What We Offer
              </h3>
              <div className="space-y-6">
                {offerings.map((offering, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500">
                          <offering.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-white">
                            {offering.title}
                          </CardTitle>
                          <p className="text-blue-100 text-sm">
                            {offering.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {offering.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-teal-400" />
                            <span className="text-sm text-blue-100">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Value Proposition */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
                Value to Your Institution
              </h3>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white mb-8">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-blue-100">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Stats Callout */}
              <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
                <div className="flex justify-center space-x-8 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-teal-300">500+</div>
                    <div className="text-xs text-blue-200">Students Reached</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-300">10+</div>
                    <div className="text-xs text-blue-200">Successful Events</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-300">100%</div>
                    <div className="text-xs text-blue-200">Success Rate</div>
                  </div>
                </div>
                <p className="text-sm text-blue-100">
                  Proven track record of delivering impactful tech education
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <Globe className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Campus?</h3>
              <p className="text-blue-100 mb-6">
                Let's discuss how Project Bloom can elevate your institution's tech ecosystem
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3">
                  Request a Workshop
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
                  Schedule a Collaboration Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBloom;
