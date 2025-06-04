
import { Card } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      institution: "Mohan Babu University",
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      period: "2022 - 2026",
      grade: "CGPA: 9.36",
      icon: "🎓",
      color: "from-blue-600 to-teal-600",
      description: "Specializing in AI/ML with focus on deep learning, computer vision, and natural language processing."
    },
    {
      institution: "Sai Sri Chaitanya Junior College",
      degree: "Intermediate (MPC)",
      period: "2021 - 2022",
      grade: "79.8%",
      icon: "📚",
      color: "from-teal-600 to-cyan-600",
      description: "Mathematics, Physics, and Chemistry with strong foundation in analytical thinking."
    },
    {
      institution: "Narayana School",
      degree: "Secondary School Certificate (SSC)",
      period: "2019 - 2020",
      grade: "100%",
      icon: "🏆",
      color: "from-cyan-600 to-blue-600",
      description: "Perfect score demonstrating exceptional academic excellence and dedication."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Educational Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A consistent track record of academic excellence, from perfect scores 
              to specialized AI & ML expertise
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-teal-600 to-cyan-600 rounded-full"></div>

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <span className="text-2xl">{edu.icon}</span>
                  </div>

                  {/* Content card */}
                  <Card className="flex-1 p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:scale-[1.02]">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {edu.institution}
                        </h3>
                        <p className="text-lg text-gray-600 font-medium">
                          {edu.degree}
                        </p>
                      </div>
                      
                      <div className="mt-2 lg:mt-0 lg:text-right">
                        <div className="text-sm text-gray-500 mb-1">
                          {edu.period}
                        </div>
                        <div className={`inline-block px-3 py-1 bg-gradient-to-r ${edu.color} text-white text-sm font-semibold rounded-full`}>
                          {edu.grade}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievement highlights for current education */}
                    {index === 0 && (
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <div className="text-lg font-bold text-blue-600">Top 5%</div>
                          <div className="text-sm text-gray-600">Class Rank</div>
                        </div>
                        <div className="bg-teal-50 p-3 rounded-lg text-center">
                          <div className="text-lg font-bold text-teal-600">AI/ML</div>
                          <div className="text-sm text-gray-600">Specialization</div>
                        </div>
                        <div className="bg-cyan-50 p-3 rounded-lg text-center">
                          <div className="text-lg font-bold text-cyan-600">2026</div>
                          <div className="text-sm text-gray-600">Graduation</div>
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
              Academic Highlights
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Consistent Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Maintaining high academic standards across all educational levels
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">AI/ML Focus</h4>
                <p className="text-gray-600 text-sm">
                  Specialized knowledge in cutting-edge artificial intelligence technologies
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏅</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Perfect Score</h4>
                <p className="text-gray-600 text-sm">
                  Achieved 100% in SSC, demonstrating exceptional dedication
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
