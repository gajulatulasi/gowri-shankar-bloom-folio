
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "Java", "SQL"]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "NLP", "LLMs"]
    },
    {
      title: "Core Computer Science",
      icon: "🔧",
      skills: ["Data Structures & Algorithms", "OOP", "SDLC"]
    },
    {
      title: "Data Analysis & Visualization",
      icon: "📊",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly"]
    },
    {
      title: "Frameworks & Tools",
      icon: "⚡",
      skills: ["Flask", "FastAPI", "MLflow"]
    },
    {
      title: "Embedded Platforms",
      icon: "🔌",
      skills: ["Arduino", "Raspberry Pi", "ESP32"]
    },
    {
      title: "Dev Tools",
      icon: "🛠️",
      skills: ["Git", "GitHub", "GitLab", "VS Code", "PyCharm"]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 break-words">
              Skills & Expertise
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 break-words">
              The Tools and Technologies I Work With
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-3xl sm:text-4xl mb-3">{category.icon}</div>
                  <CardTitle className="text-base sm:text-lg text-gray-800 font-semibold break-words">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-100 to-teal-100 text-gray-700 hover:from-blue-200 hover:to-teal-200 transition-all duration-200 font-medium text-xs sm:text-sm break-words"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tech Stack Highlight */}
          <div className="mt-12 sm:mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-teal-600 text-white border-0 shadow-xl">
              <CardContent className="py-6 sm:py-8 px-4 sm:px-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words">Always Learning, Always Growing</h3>
                <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base break-words">
                  Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                  tools, and methodologies to stay at the forefront of innovation and deliver 
                  cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
