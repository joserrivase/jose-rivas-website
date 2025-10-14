import { Link } from "react-router-dom";
import { ArrowRight, User, BookOpen, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import joseHero from "@/assets/jose-hero.jpg";

const Home = () => {
  return (
    <div className="container max-w-6xl py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-20">
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

      {/* Quick Links Section */}
      <section className="grid gap-6 md:grid-cols-3">
        <Link 
          to="/about" 
          className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-xl border border-border"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transition-all group-hover:bg-primary/10" />
          <User className="h-10 w-10 mb-4 text-primary" />
          <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">About Me</h3>
          <p className="text-muted-foreground mb-4">
            Learn about my background, places I've lived, and the journey that shaped who I am
          </p>
          <span className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all">
            Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>

        <Link 
          to="/blog" 
          className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-xl border border-border"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl transition-all group-hover:bg-accent/10" />
          <BookOpen className="h-10 w-10 mb-4 text-accent" />
          <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Blog</h3>
          <p className="text-muted-foreground mb-4">
            Travel stories, reflections on books, and thoughts on the things that shape how I see the world
          </p>
          <span className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all">
            Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>

        <Link 
          to="/projects" 
          className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-xl border border-border"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transition-all group-hover:bg-primary/10" />
          <Code className="h-10 w-10 mb-4 text-primary" />
          <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Projects</h3>
          <p className="text-muted-foreground mb-4">
            Data-driven work combining storytelling, analysis, and meaningful impact
          </p>
          <span className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all">
            View Work <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </section>
    </div>
  );
};

export default Home;
