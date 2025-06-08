
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, FileText, GraduationCap, Code, Trophy, UserCheck, Calendar } from "lucide-react";

const Leadership = () => {
  const roles = [
    {
      title: "Chairperson, The Coding Club",
      period: "2023 - Present",
      description: "Leading mentorship programs, organizing hackathons, and building peer learning networks",
      icon: Code,
      gradient: "from-teal-600 to-blue-700",
      achievements: ["Led 5+ hackathons", "Mentored 1000+ students", "Built coding community"]
    },
    {
      title: "Documentation Lead, ISTE MBU",
      period: "2023 - Present", 
      description: "Managing event documentation, technical reports, and knowledge base development",
      icon: FileText,
      gradient: "from-blue-600 to-indigo-700",
      achievements: ["Created knowledge base", "Documented 30+ events", "Improved processes"]
    },
    {
      title: "NEP SAARTHI Student Head",
      period: "2024 - Present",
      description: "Leading student policy implementation programs and educational reform initiatives",
      icon: GraduationCap,
      gradient: "from-indigo-600 to-purple-700",
      achievements: ["Policy implementation", "Student programs", "Educational reform"]
    },
    {
      title: "Collaboration Lead, CodeChef Chapter",
      period: "2023 - Present",
      description: "Organizing guest lectures, competitive programming contests, and industry collaborations",
      icon: Users,
      gradient: "from-purple-600 to-pink-700",
      achievements: ["15+ guest lectures", "Monthly contests", "Industry partnerships"]
    }
  ];

  const impactStats = [
    { number: "1000+", label: "Students Mentored", icon: UserCheck },
    { number: "30+", label: "Events Organized", icon: Calendar },
    { number: "2", label: "Hackathon Wins", icon: Trophy }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Leadership & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Driving innovation and fostering growth through collaborative leadership and mentorship
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Enhanced Impact Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white group-hover:scale-110 transition-transform">
                      <stat.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                  {stat.label === "Students Mentored" && (
                    <p className="text-sm text-gray-500 mt-2">
                      in programming, AI/ML, and software development
                    </p>
                  )}
                  {stat.label === "Events Organized" && (
                    <p className="text-sm text-gray-500 mt-2">
                      workshops, hackathons, and bootcamps
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Leadership Roles */}
          <div className="grid md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0">
                <div className={`w-full h-1 bg-gradient-to-r ${role.gradient}`} />
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${role.gradient} text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <role.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-xl text-gray-800 group-hover:text-teal-600 transition-colors mb-2">
                        {role.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs mb-3">
                        {role.period}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {role.description}
                  </p>
                  <div className="space-y-2">
                    {role.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Impact Highlight */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Making a Difference</h3>
              <p className="text-lg text-blue-100 mb-6">
                Building the next generation of tech leaders through hands-on mentorship and innovative programs
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">✨ 1000+</div>
                  <div className="text-blue-100">Students mentored in programming, AI/ML, and software development</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">🏆 30+</div>
                  <div className="text-blue-100">Events organized at university and national levels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
