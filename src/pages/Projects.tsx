import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    name: "Langlio",
    tagline: "Turning curiosity for languages into an interactive challenge.",
    description: "A platform that connects language learners through real conversations and cultural exchange. Built to solve the problem of finding practice partners who match your level and interests.",
    impact: "Reached 1000 views in the first 2 weeks",
    skills: ["Website Building", "AI", "Data Analysis", "Product Managment", ],
    link: "#",
    icon: Users,
  },
  {
    id: 2,
    name: "AI-Powered Listing Improver for Excel",
    tagline: "Streamlining e-commerce listing enhancement with AI and VBA automation.",
    description: "An interactive visualization of my travels - mapping routes, analyzing spending patterns, and discovering correlations between destinations and experiences. A love letter to both travel and data.",
    impact: "Accelerated the product content improvement process by 70%",
    skills: ["VBA", "Excel", "AI", "API", "Automation", "E-commerce"],
    link: "#",
    icon: TrendingUp,
  },
  {
    id: 3,
    name: "Automated Document Creator",
    tagline: "Automating repetitive document generation with the power of VBA and Apps Script",
    description: "Regular contributions to data science and developer tools that make analysis more accessible. Focus on documentation, beginner-friendly features, and community building.",
    impact: "Reduced repetitive document generation time by 80%",
    skills: ["VBA", "Excel", "Apps Script", "Google Sheets", "Automation"],
    link: "#",
    icon: Code2,
  },
];

const Projects = () => {
  return (
    <div className="container max-w-5xl py-12 md:py-20">
      {/* Header */}
      <section className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Here are a few projects I have done to scratch my own curiosity, make a process easier, or explore using something new.
        </p>
      </section>

      {/* Projects */}
      <div className="space-y-8">
        {projects.map((project) => {
          const IconComponent = project.icon;
          return (
            <Card key={project.id} className="border-border overflow-hidden group">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-serif text-2xl text-foreground">
                        {project.name}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground italic mb-4">
                      {project.tagline}
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm font-medium text-foreground">
                    <span className="text-accent">Impact:</span> {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
