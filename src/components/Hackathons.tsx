
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Calendar, Award, Target } from "lucide-react";

const Hackathons = () => {
  const organized = [
    {
      name: "24-Hour Hackathon",
      participants: "700+",
      year: "2024",
      description: "Intensive coding marathon focusing on innovative tech solutions",
      impact: "Largest student hackathon in the region",
      badge: "🏆 Mega Event",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      name: "InnovateX 2025",
      participants: "500+",
      year: "2025",
      description: "Innovation-focused hackathon with industry partnerships",
      impact: "Connected students with top tech companies",
      badge: "🚀 Innovation Hub",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "CodeVerse Hack Fest 2K24",
      participants: "200+",
      year: "2024",
      description: "Multi-domain coding competition and workshop series",
      impact: "Launched careers for 50+ participants",
      badge: "💻 Code Excellence",
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const participated = [
    {
      name: "SASTRA AI Hackathon",
      position: "2nd Place",
      year: "2024",
      description: "AI/ML focused competition with industry challenges",
      achievement: "Runner-up among 200+ teams",
      badge: "🥈 Runner-up",
      gradient: "from-silver-400 to-gray-600"
    },
    {
      name: "VR Siddhartha Hackathon",
      position: "Finalist",
      year: "2024",
      description: "Cross-platform development challenge",
      achievement: "Top 10 finalist in innovation category",
      badge: "🎯 Finalist",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "State Cybersecurity Challenge",
      position: "Participant",
      year: "2023",
      description: "State-level cybersecurity competition",
      achievement: "Gained expertise in ethical hacking",
      badge: "🔒 Security Expert",
      gradient: "from-red-500 to-pink-600"
    }
  ];

  return (
    <Tabs defaultValue="organized" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg">
        <TabsTrigger value="organized" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-600 data-[state=active]:text-white">
          Organized Events
        </TabsTrigger>
        <TabsTrigger value="participated" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-600 data-[state=active]:text-white">
          Participated
        </TabsTrigger>
      </TabsList>

      <TabsContent value="organized" className="space-y-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organized.map((event, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className={`w-full h-2 bg-gradient-to-r ${event.gradient} rounded-t-lg -mt-6 -mx-6 mb-4`} />
                <div className="flex items-center justify-between">
                  <Users className={`w-8 h-8 bg-gradient-to-r ${event.gradient} text-white p-1.5 rounded-lg`} />
                  <Badge variant="secondary" className="text-xs">{event.year}</Badge>
                </div>
                <CardTitle className="text-lg text-gray-800">{event.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-blue-600">{event.participants} Participants</span>
                </div>
                <p className="text-gray-600 text-sm">{event.description}</p>
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">{event.impact}</p>
                </div>
                <Badge className={`bg-gradient-to-r ${event.gradient} text-white border-0`}>
                  {event.badge}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="participated" className="space-y-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {participated.map((event, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className={`w-full h-2 bg-gradient-to-r ${event.gradient} rounded-t-lg -mt-6 -mx-6 mb-4`} />
                <div className="flex items-center justify-between">
                  <Award className={`w-8 h-8 bg-gradient-to-r ${event.gradient} text-white p-1.5 rounded-lg`} />
                  <Badge variant="secondary" className="text-xs">{event.year}</Badge>
                </div>
                <CardTitle className="text-lg text-gray-800">{event.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-yellow-600" />
                  <span className="font-semibold text-yellow-600">{event.position}</span>
                </div>
                <p className="text-gray-600 text-sm">{event.description}</p>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">{event.achievement}</p>
                </div>
                <Badge className={`bg-gradient-to-r ${event.gradient} text-white border-0`}>
                  {event.badge}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Hackathons;
