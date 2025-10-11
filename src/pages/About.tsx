import { MapPin, Book, Globe2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const places = [
    { city: "San Francisco", country: "USA", period: "2018-Present" },
    { city: "Madrid", country: "Spain", period: "2015-2018" },
    { city: "Mexico City", country: "Mexico", period: "Born & Raised" },
  ];

  const travels = [
    "Japan", "Thailand", "Vietnam", "Indonesia",
    "Portugal", "Italy", "France", "Germany",
    "Peru", "Colombia", "Argentina", "Brazil",
    "Morocco", "Egypt", "South Africa"
  ];

  const books = [
    { title: "Sapiens", author: "Yuval Noah Harari", year: "2024" },
    { title: "Atomic Habits", author: "James Clear", year: "2023" },
    { title: "The Alchemist", author: "Paulo Coelho", year: "2023" },
    { title: "Meditations", author: "Marcus Aurelius", year: "2022" },
  ];

  return (
    <div className="container max-w-4xl py-12 md:py-20">
      {/* Introduction */}
      <section className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
          About Jose
        </h1>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p className="text-lg leading-relaxed">
            I'm an engineer who fell in love with stories hidden in data. Born in Mexico City, 
            I've called Madrid and San Francisco home while exploring over 30 countries along the way.
          </p>
          <p className="text-lg leading-relaxed">
            My journey has taken me from building technical systems to uncovering insights that 
            connect people to ideas. I believe the best work happens at the intersection of 
            curiosity, creativity, and careful analysis.
          </p>
          <p className="text-lg leading-relaxed">
            When I'm not diving into data or building products, you'll find me reading philosophy, 
            learning languages, or planning my next adventure.
          </p>
        </div>
      </section>

      {/* Places Lived */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="h-6 w-6 text-primary" />
          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Places I've Called Home
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {places.map((place) => (
            <Card key={place.city} className="border-border">
              <CardContent className="pt-6">
                <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">
                  {place.city}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{place.country}</p>
                <p className="text-xs text-muted-foreground">{place.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Travel */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Globe2 className="h-6 w-6 text-primary" />
          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Countries Explored
          </h2>
        </div>
        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              {travels.map((country) => (
                <span
                  key={country}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {country}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Books */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Book className="h-6 w-6 text-primary" />
          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Recent Reads
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {books.map((book) => (
            <Card key={book.title} className="border-border">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground">
                  {book.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  by {book.author} · Read in {book.year}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
