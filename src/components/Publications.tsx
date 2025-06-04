
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Download, ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "AI in Finance: Transforming Financial Services",
      type: "Book Chapter",
      venue: "Academic Press",
      year: "2024",
      description: "Comprehensive analysis of AI applications in modern financial systems, covering algorithmic trading, risk assessment, and fraud detection.",
      status: "Published",
      icon: BookOpen,
      gradient: "from-blue-600 to-indigo-700",
      doi: "10.1016/example.doi",
      downloadable: true
    },
    {
      title: "AI Music Recommendation: A Hybrid Approach",
      type: "Conference Paper",
      venue: "NCKITS 2024",
      year: "2024",
      description: "Novel approach combining MFCC feature extraction with collaborative filtering for enhanced music recommendation accuracy.",
      status: "Published",
      icon: FileText,
      gradient: "from-green-600 to-teal-700",
      doi: "10.1109/example.doi",
      downloadable: true
    },
    {
      title: "Smart Healthcare Systems: IoT and ML Integration",
      type: "Conference Paper",
      venue: "NCKITS 2025",
      year: "2025",
      description: "Exploration of IoT-enabled healthcare monitoring systems enhanced with machine learning for predictive diagnostics.",
      status: "Accepted",
      icon: FileText,
      gradient: "from-purple-600 to-pink-700",
      doi: "Pending",
      downloadable: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600">
          Research contributions to the advancement of AI and technology
        </p>
      </div>

      <div className="grid gap-6">
        {publications.map((pub, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0">
            <div className={`w-full h-1 bg-gradient-to-r ${pub.gradient}`} />
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${pub.gradient} text-white flex-shrink-0`}>
                    <pub.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                      {pub.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {pub.type}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {pub.venue}
                      </Badge>
                      <Badge 
                        className={`text-xs ${
                          pub.status === 'Published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {pub.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {pub.year}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {pub.description}
              </p>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Venue:</span>
                    <p className="text-gray-600">{pub.venue}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">DOI:</span>
                    <p className="text-gray-600">{pub.doi}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 pt-2">
                {pub.downloadable && (
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                )}
                {pub.doi !== "Pending" && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View DOI
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Publications;
