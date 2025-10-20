import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const projectsData = {
  langlio: {
    id: 1,
    name: "Langlio",
    tagline: "Turning curiosity for languages into an interactive challenge.",
    description: "A language guessing game that challenges your knowledge of languages and countries while teaching you what you don't know. Built to promote a fun way to get familiar with different languages.",
    impact: "Reached 1000 views in the first 2 weeks",
    skills: ["Website Building", "AI", "Data Analysis", "Product Management"],
    link: "https://langlio.io",
    whyBuilt: "I've always been fascinated by languages and how they sound. I wanted to create something that would make learning about different languages fun and engaging, turning what could be an educational experience into an exciting guessing game. The goal was to spark curiosity about linguistic diversity around the world.",
    howBuilt: "I built Langlio using modern web technologies, integrating AI to analyze language patterns and provide intelligent feedback. The platform uses a database of language samples and country information to create challenging rounds. I focused on creating an intuitive user interface that would make the game accessible to everyone, regardless of their technical background.",
    learned: "This project taught me the importance of user engagement and gamification in educational products. I learned how to balance entertainment with educational value, and gained experience in data analysis to track user behavior and improve the game mechanics. I also learned how to launch and market a product to reach 1000 users quickly.",
    outcome: "Langlio successfully reached 1000 views within the first two weeks of launch. Users reported enjoying the unique approach to learning about languages, and the game has helped people discover languages and countries they'd never heard of before. The project validated my hypothesis that gamification can make education more engaging."
  },
  "ai-listing-improver": {
    id: 2,
    name: "AI-Powered Listing Improver for Excel",
    tagline: "Streamlining e-commerce listing enhancement with AI and VBA automation.",
    description: "An Excel file that uses the OpenAI API to automate the generation of descriptions, attributes, and other listing characteristics.",
    impact: "Accelerated the product content improvement process by 70%",
    skills: ["VBA", "Excel", "AI", "API", "Automation", "E-commerce"],
    link: "#",
    whyBuilt: "I was working with e-commerce product listings and noticed that creating quality descriptions and attributes for hundreds of products was incredibly time-consuming and repetitive. I wanted to leverage AI to automate this process while maintaining quality, allowing teams to focus on more strategic tasks instead of manual data entry.",
    howBuilt: "I developed a VBA-powered Excel solution that integrates with the OpenAI API. The tool reads product data from Excel sheets, sends it to OpenAI with carefully crafted prompts, and automatically populates cells with AI-generated descriptions, attributes, and other listing details. I built custom functions and user forms to make it easy for non-technical users to operate.",
    learned: "This project deepened my understanding of VBA programming and API integration within Excel. I learned how to craft effective prompts for AI to generate consistent, high-quality e-commerce content. I also gained experience in creating user-friendly tools for non-technical users and understanding the importance of error handling and data validation in automation tools.",
    outcome: "The tool accelerated the product content improvement process by 70%, saving countless hours of manual work. It enabled the team to process hundreds of product listings efficiently while maintaining quality standards. The success of this project demonstrated the power of combining traditional tools like Excel with modern AI capabilities."
  },
  "document-creator": {
    id: 3,
    name: "Automated Document Creator",
    tagline: "Automating repetitive document generation with the power of VBA and Apps Script",
    description: "An automated template and document filler that requires the input once and fills out all the given documents.",
    impact: "Reduced repetitive document generation time by 80%",
    skills: ["VBA", "Excel", "Apps Script", "Google Sheets", "Automation"],
    link: "#",
    whyBuilt: "I observed that many business processes involved filling out the same information across multiple document templates repeatedly. This was not only time-consuming but also prone to human error. I wanted to create a solution that would allow users to input their data once and automatically populate all necessary documents, eliminating redundancy and improving accuracy.",
    howBuilt: "I created a dual-platform solution using VBA for Excel and Google Apps Script for Google Sheets. The system reads data from a single input form or spreadsheet, then automatically populates multiple document templates with the appropriate information. I built in validation checks to ensure data accuracy and created a simple interface that guides users through the process.",
    learned: "This project taught me how to work across different platforms (Microsoft and Google ecosystems) and create compatible solutions. I learned about template design, data mapping, and the importance of creating robust automation that handles edge cases. I also gained insights into change management and how to help teams adopt new automated workflows.",
    outcome: "The automated document creator reduced repetitive document generation time by 80%, dramatically improving efficiency. It eliminated data entry errors and freed up team members to focus on higher-value tasks. The tool has been successfully adopted across multiple workflows, proving the value of smart automation in everyday business processes."
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="container max-w-5xl py-12 md:py-20">
        <h1 className="font-serif text-4xl font-bold mb-4">Project not found</h1>
        <Link to="/projects">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container max-w-5xl py-12 md:py-20">
      {/* Header */}
      <div className="mb-8">
        <Link to="/projects">
          <Button variant="ghost" className="mb-6 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
        
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3 text-foreground">
              {project.name}
            </h1>
            <p className="text-xl text-muted-foreground italic mb-4">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-normal">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          {project.link !== "#" && (
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </a>
            </Button>
          )}
        </div>

        <div className="p-4 bg-accent/10 rounded-lg border border-accent/20 mb-8">
          <p className="text-sm font-medium text-foreground">
            <span className="text-accent">Impact:</span> {project.impact}
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-foreground">
              Why I Built It
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">
              {project.whyBuilt}
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-foreground">
              How I Built It
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">
              {project.howBuilt}
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-foreground">
              What I Learned
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">
              {project.learned}
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-foreground">
              Outcome
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">
              {project.outcome}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;
