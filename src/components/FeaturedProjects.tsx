
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Music, ShoppingCart, Mail, Globe } from "lucide-react";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "AI Music Recommendation System",
      description: "MFCC feature extraction combined with collaborative filtering for personalized music suggestions",
      problem: "Create personalized music experiences based on audio features and user preferences",
      outcome: "85% user satisfaction with recommendation accuracy",
      techStack: ["Python", "TensorFlow", "MFCC", "Collaborative Filtering"],
      tags: ["AI/ML", "Audio Processing"],
      icon: Music,
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/GowriShankarAllam/AI-Music-Recommendation-and-Generation-System",
      demo: "https://github.com/GowriShankarAllam/AI-Music-Recommendation-and-Generation-System"
    },
    {
      title: "E-Commerce Churn Prediction",
      description: "XGBoost-based machine learning model for customer retention analysis",
      problem: "Predict customer churn to improve retention strategies",
      outcome: "92% accuracy in predicting customer churn patterns",
      techStack: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
      tags: ["AI/ML", "Business Analytics"],
      icon: ShoppingCart,
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/GowriShankarAllam/E-commerce-customer-churn-prediction",
      demo: "https://github.com/GowriShankarAllam/E-commerce-customer-churn-prediction"
    },
    {
      title: "Email Spam Detection",
      description: "Advanced spam classification using Naïve Bayes and SVM algorithms",
      problem: "Accurately classify emails as spam or legitimate messages",
      outcome: "98% accuracy in spam detection with minimal false positives",
      techStack: ["Python", "Naïve Bayes", "SVM", "NLP"],
      tags: ["AI/ML", "NLP"],
      icon: Mail,
      gradient: "from-green-500 to-teal-500",
      github: "https://github.com/GowriShankarAllam/email_spam_detection",
      demo: "https://github.com/GowriShankarAllam/email_spam_detection"
    },
    {
      title: "ISTE Website Platform",
      description: "Interactive event platform built with modern web technologies",
      problem: "Create an engaging platform for student events and participation",
      outcome: "30% improvement in student participation rates",
      techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      tags: ["Web", "Frontend"],
      icon: Globe,
      gradient: "from-orange-500 to-red-500",
      github: "#",
      demo: "https://istembu.in"
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Card 
          key={index} 
          className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 overflow-hidden"
        >
          <CardHeader className="relative">
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.gradient}`} />
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                  <project.icon className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Problem Statement:</h4>
                <p className="text-sm text-gray-600">{project.problem}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Key Outcome:</h4>
                <p className="text-sm text-green-600 font-medium">{project.outcome}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              {project.github !== "#" && (
                <Button 
                  size="sm" 
                  className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black"
                  onClick={() => handleLinkClick(project.github)}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              )}
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => handleLinkClick(project.demo)}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {project.demo.includes("github.com") ? "Repository" : "Demo"}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeaturedProjects;
