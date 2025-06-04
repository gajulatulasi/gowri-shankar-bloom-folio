
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeaturedProjects from "./FeaturedProjects";
import Hackathons from "./Hackathons";
import Publications from "./Publications";
import Workshops from "./Workshops";

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Projects & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Showcasing innovative solutions, research contributions, and community impact through technology
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          {/* Tabs Navigation */}
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-2">
              <TabsTrigger 
                value="projects" 
                className="text-sm font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-600 data-[state=active]:text-white"
              >
                Featured Projects
              </TabsTrigger>
              <TabsTrigger 
                value="hackathons"
                className="text-sm font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-600 data-[state=active]:text-white"
              >
                Hackathons
              </TabsTrigger>
              <TabsTrigger 
                value="publications"
                className="text-sm font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-600 data-[state=active]:text-white"
              >
                Publications
              </TabsTrigger>
              <TabsTrigger 
                value="workshops"
                className="text-sm font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-600 data-[state=active]:text-white"
              >
                Workshops
              </TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="animate-fade-in">
              <FeaturedProjects />
            </TabsContent>

            <TabsContent value="hackathons" className="animate-fade-in">
              <Hackathons />
            </TabsContent>

            <TabsContent value="publications" className="animate-fade-in">
              <Publications />
            </TabsContent>

            <TabsContent value="workshops" className="animate-fade-in">
              <Workshops />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Projects;
