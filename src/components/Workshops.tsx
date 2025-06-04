
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, CheckCircle, Calendar, Clock } from "lucide-react";

const Workshops = () => {
  const workshops = [
    {
      title: "AI & Machine Learning Workshop Series",
      participants: "200+",
      duration: "3 Days",
      description: "Comprehensive workshop series covering fundamentals to advanced AI/ML concepts with hands-on projects.",
      topics: ["Neural Networks", "Deep Learning", "Computer Vision", "NLP", "Model Deployment"],
      rating: 4.8,
      testimonials: "Excellent practical approach to learning AI concepts",
      gradient: "from-purple-500 to-indigo-600",
      year: "2024"
    },
    {
      title: "Python Programming Workshop",
      participants: "150+",
      duration: "2 Days", 
      description: "Interactive Python programming workshop for beginners to intermediate level with real-world applications.",
      topics: ["Python Basics", "Data Structures", "OOP", "Libraries", "Project Development"],
      rating: 4.7,
      testimonials: "Great foundation for programming newcomers",
      gradient: "from-green-500 to-teal-600",
      year: "2024"
    },
    {
      title: "Data Science Bootcamp",
      participants: "100+",
      duration: "5 Days",
      description: "Intensive bootcamp covering complete data science pipeline from data collection to visualization.",
      topics: ["Data Analysis", "Pandas & NumPy", "Visualization", "Statistics", "Machine Learning"],
      rating: 4.9,
      testimonials: "Transformed my understanding of data science",
      gradient: "from-blue-500 to-cyan-600",
      year: "2023"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating) 
            ? "text-yellow-400 fill-current" 
            : index < rating 
            ? "text-yellow-400 fill-current opacity-50" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600">
          Empowering students through hands-on learning experiences
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {workshops.map((workshop, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-0">
            <div className={`w-full h-2 bg-gradient-to-r ${workshop.gradient}`} />
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${workshop.gradient} text-white`}>
                  <Users className="w-6 h-6" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {workshop.year}
                </Badge>
              </div>
              
              <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                {workshop.title}
              </CardTitle>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{workshop.participants} Students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{workshop.duration}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {workshop.description}
              </p>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Topics Covered:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {workshop.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">Student Rating:</span>
                  <div className="flex items-center space-x-1">
                    {renderStars(workshop.rating)}
                    <span className="ml-2 text-sm text-gray-600">({workshop.rating}/5)</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "{workshop.testimonials}"
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Workshop Impact</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold">450+</div>
              <div className="text-blue-100">Total Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.8/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-blue-100">Workshop Sessions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
