import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const categories = ["All", "Travel", "Hobbies", "Lessons", "Books", "Thoughts"];

const blogPosts = [
  {
    id: 1,
    title: "Finding Stillness in Tokyo's Chaos",
    excerpt: "How the world's busiest city taught me the art of being present",
    category: "Travel",
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Power of Small Habits",
    excerpt: "What I learned from tracking daily routines for a year",
    category: "Lessons",
    date: "March 8, 2024",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Sapiens: A Journey Through Human History",
    excerpt: "Reflections on Yuval Noah Harari's masterpiece about who we are",
    category: "Books",
    date: "February 28, 2024",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Learning Spanish Through Cooking",
    excerpt: "How following recipes became my favorite language learning tool",
    category: "Hobbies",
    date: "February 20, 2024",
    readTime: "3 min read",
  },
  {
    id: 5,
    title: "On Curiosity and Career Changes",
    excerpt: "Why following what makes you curious might be the best career advice",
    category: "Thoughts",
    date: "February 10, 2024",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Backpacking Through Southeast Asia",
    excerpt: "Three months, five countries, countless lessons about simplicity",
    category: "Travel",
    date: "January 25, 2024",
    readTime: "8 min read",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="container max-w-5xl py-12 md:py-20">
      {/* Header */}
      <section className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          I write about the things that make me curious — from places I've visited to ideas 
          that change how I see the world.
        </p>
      </section>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <Card 
            key={post.id} 
            className="group cursor-pointer transition-all hover:shadow-lg border-border overflow-hidden"
          >
            <CardHeader>
              <div className="mb-3">
                <Badge variant="secondary" className="font-normal">
                  {post.category}
                </Badge>
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
