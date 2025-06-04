
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Final-year B.Tech student in AI & ML at Mohan Babu University with an outstanding CGPA of 9.36. 
                  I'm passionate about transforming complex problems into elegant solutions through artificial intelligence 
                  and machine learning.
                </p>
                
                <p>
                  As Co-founder of <span className="font-semibold text-blue-600">Project Bloom</span>, I'm dedicated to 
                  building tech communities and creating industry-driven learning ecosystems that bridge the gap between 
                  academic knowledge and real-world applications.
                </p>

                <p>
                  My journey involves mentoring hundreds of students, organizing impactful workshops, and leading 
                  tech events that inspire the next generation of technologists.
                </p>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-lg italic text-gray-700">
                  "Technology is best when it brings people together and creates opportunities for growth."
                </p>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="space-y-6">
              <Card className="p-8 bg-white shadow-lg border-0 bg-gradient-to-br from-blue-50 to-teal-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">📍</span>
                    </div>
                    <span className="text-gray-700">Tirupati, India</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✉️</span>
                    </div>
                    <span className="text-gray-700">gowrishankar@example.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">💼</span>
                    </div>
                    <span className="text-gray-700">LinkedIn Profile</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">🐙</span>
                    </div>
                    <span className="text-gray-700">GitHub Profile</span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold">
                    Download Resume
                  </Button>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    View LinkedIn
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
