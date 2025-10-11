import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Globe2, BookOpen, Code, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import joseHero from "@/assets/jose-hero.jpg";

const Home = () => {
  return (
    <div className="container max-w-6xl py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Engineer turned data storyteller exploring the world
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I connect people through ideas, data, and adventures. This is where I share what makes me curious.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/blog">Read Blog</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={joseHero}
                alt="Jose Rivas"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="mb-32">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-secondary">About Me</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              A life shaped by places and ideas
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm an engineer, data analyst, and curious traveler. I've lived in Madrid, moved across continents, and explored over 20 countries. 
              My journey is fueled by a love for learning—whether through books, hobbies, or the people I meet along the way.
            </p>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/about">
                Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card className="p-8 bg-card border-border">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Plane className="h-6 w-6 text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Cities I've Called Home</h3>
                  <p className="text-sm text-muted-foreground">From Madrid to Mexico City, each place has shaped who I am</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe2 className="h-6 w-6 text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">20+ Countries Explored</h3>
                  <p className="text-sm text-muted-foreground">Every destination teaches me something new about the world</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BookOpen className="h-6 w-6 text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Always Reading</h3>
                  <p className="text-sm text-muted-foreground">Books that challenge how I think and expand my perspective</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Summary */}
      <section className="mb-32">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">Recent Writing</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Thoughts from the road and beyond
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I write about the things that make me curious—from places I've visited to ideas that change how I see the world
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary-foreground rounded-full">Travel</span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Adventures & Lessons</h3>
            <p className="text-muted-foreground text-sm mb-4">Stories from around the world and what they taught me</p>
          </Card>
          <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary-foreground rounded-full">Books</span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">What I'm Reading</h3>
            <p className="text-muted-foreground text-sm mb-4">Reflections on books that change perspectives</p>
          </Card>
          <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary-foreground rounded-full">Thoughts</span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Ideas & Reflections</h3>
            <p className="text-muted-foreground text-sm mb-4">Lessons learned and questions worth exploring</p>
          </Card>
        </div>
        <div className="text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/blog">
              Read All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Projects Summary */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Code className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">Featured Work</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Building tools that matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Data-driven projects that combine storytelling, analysis, and meaningful impact
          </p>
        </div>
        <Card className="p-8 md:p-12 bg-card border-border">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">What I Build</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I create data tools and platforms that help people learn, connect, and grow. From language learning apps to 
                analytics dashboards, my projects blend technical rigor with human-centered design.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="text-sm text-foreground">Data analysis & visualization</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="text-sm text-foreground">Product development & design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="text-sm text-foreground">Strategic storytelling with data</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-background border border-border">
                <h4 className="font-semibold text-foreground mb-2">Langlio</h4>
                <p className="text-sm text-muted-foreground">A language learning platform helping thousands of users master new languages through data-driven insights</p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <h4 className="font-semibold text-foreground mb-2">Analytics & Strategy</h4>
                <p className="text-sm text-muted-foreground">Building dashboards and insights that turn complex data into clear, actionable stories</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild className="rounded-full">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;
