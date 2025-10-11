import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Linkedin, Mail, Twitter, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
      color: "hover:text-[#0077b5]",
    },
    {
      name: "Email",
      url: "mailto:jose@example.com",
      icon: Mail,
      color: "hover:text-primary",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: Twitter,
      color: "hover:text-[#1DA1F2]",
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github,
      color: "hover:text-foreground",
    },
  ];

  return (
    <div className="container max-w-4xl py-12 md:py-20">
      {/* Header */}
      <section className="mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Let's Connect
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm always happy to chat about data, travel, ideas, or potential collaborations. 
          Drop me a message or connect on social media.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-foreground">
              Send a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="What would you like to talk about?"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button type="submit" className="w-full rounded-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Social Links */}
        <div className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-foreground">
                Connect Online
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-all ${link.color}`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                );
              })}
            </CardContent>
          </Card>

          <Card className="border-border bg-accent/10 border-accent/20">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Quick note:</span> I try to 
                respond to all messages within 48 hours. If you're reaching out about a 
                project collaboration, please include some details about what you have in mind.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
