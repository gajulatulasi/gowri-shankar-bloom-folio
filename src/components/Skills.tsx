
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const hardSkills = [
    { name: "Python", level: 95, icon: "🐍" },
    { name: "Machine Learning", level: 90, icon: "🤖" },
    { name: "TensorFlow", level: 85, icon: "🧠" },
    { name: "PyTorch", level: 85, icon: "🔥" },
    { name: "SQL", level: 88, icon: "🗄️" },
    { name: "Java", level: 80, icon: "☕" },
    { name: "Flask/FastAPI", level: 85, icon: "⚡" },
    { name: "Git", level: 90, icon: "📚" },
    { name: "Arduino", level: 75, icon: "🔧" },
    { name: "NumPy/Pandas", level: 92, icon: "📊" },
  ];

  const softSkills = [
    { name: "Leadership", level: 95, icon: "👥" },
    { name: "Mentoring", level: 98, icon: "🎯" },
    { name: "Public Speaking", level: 90, icon: "🎤" },
    { name: "Event Planning", level: 92, icon: "📅" },
    { name: "Technical Writing", level: 88, icon: "✍️" },
    { name: "Team Collaboration", level: 94, icon: "🤝" },
  ];

  const SkillBar = ({ skill, index }: { skill: any; index: number }) => (
    <div 
      className="group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-medium text-gray-700">{skill.name}</span>
        </div>
        <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r from-blue-600 to-teal-600 rounded-full transition-all duration-1000 ease-out ${
            isVisible ? 'animate-skill-fill' : 'w-0'
          }`}
          style={{ 
            '--skill-width': `${skill.level}%`,
            width: isVisible ? `${skill.level}%` : '0%'
          } as any}
        />
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive blend of technical proficiency and leadership capabilities 
              developed through hands-on projects and community building
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Hard Skills */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Technical Skills</h3>
              </div>
              
              <div className="space-y-6">
                {hardSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </Card>

            {/* Soft Skills */}
            <Card className="p-8 bg-gradient-to-br from-teal-50 to-white border-0 shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🌟</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Soft Skills</h3>
              </div>
              
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </Card>
          </div>

          {/* Technologies Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Technologies & Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Scikit-learn", icon: "🔬" },
                { name: "MLflow", icon: "📈" },
                { name: "Plotly", icon: "📊" },
                { name: "Jupyter", icon: "📓" },
                { name: "Docker", icon: "🐳" },
                { name: "VS Code", icon: "💻" },
              ].map((tech, index) => (
                <div 
                  key={tech.name}
                  className="group p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div className="text-sm font-medium text-gray-700">{tech.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
