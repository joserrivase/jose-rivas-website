import { MapPin, Book, Globe2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const places = [
    { city: "Provo, Utah", country: "USA", period: "1999 - 2000" },
    { city: "Huntingtun Beach, California", country: "USA", period: "2000-2001" },
    { city: "Orlando, Florida", country: "USA", period: "2001 - 2005" },
    { city: "Margarita", country: "Venezuela", period: "2005 - 2012" },
    { city: "Orlando, Florida", country: "USA", period: "2012 - 2018" },
    { city: "Gainesville, Florida", country: "USA", period: "2018 - 2022" },
    { city: "Seattle, Washington", country: "USA", period: "2022 - 2024" },
    { city: "Abroad", country: "World", period: "2024" },
    { city: "Orlando, Florida", country: "USA", period: "2024 - Present" },
  ];

  const travels = [
    "United States", "Venezuela", "Costa Rica", "Panama",
    "Belgium", "Italy", "Vatican City", "Austria",
    "Canada", "Spain", "Portugal", "Morocco",
    "France", "Monaco", "United Kingdom,", "Thailand", 
    "Laos", "Cambodia", "Phillipines", "Vietnam", "Indonesia", 
    "Malaysia", "Sri Lanka", "Turkey", "Mexico", "Guatemala", 
    "Nicaragua", "Puerto Rico"
  ];

  const books = [
    { title: "The 4 Hour Work Week", author: "Tim Ferriss", year: "2024" },
    { title: "The Pathless Path", author: "Paul Millerd", year: "2023" },
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
            Hi, I’m Jose Rivas, a data-driven problem solver who enjoys turning numbers into stories that help teams make smarter decisions. I use data to create insights that guide company decisions in revenue and product strategy.
          </p>
          <p className="text-lg leading-relaxed">
            I started my career as a mechanical engineer at Boeing, but over time, I became fascinated with how data and automation can make work faster, smarter, and more creative. That curiosity led me into analytics, where I now focus on using SQL, Excel, VBA, and AI tools to simplify workflows, uncover trends, and build systems that actually help people.
          </p>
          <p className="text-lg leading-relaxed">
            What drives me most is learning and building — whether it’s experimenting with AI, automating a spreadsheet, or brainstorming product ideas with a great team. My long-term goal is to build a product of my own while continuing to use data to improve how products perform and grow.
          </p>
          <p className="text-lg leading-relaxed">
            Outside of work, you’ll probably find me traveling, playing the ukulele, reading, or dancing salsa (sometimes all in the same week). I like exploring new places and ideas, and that curiosity shows up in both my work and hobbies.
          </p>
          <p className="text-lg leading-relaxed">
            If you’re into data, AI, or just like sharing ideas about how to make cool things, feel free to reach out!
          </p>
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
      <section className="mb-16">
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
                  by {book.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Places Lived - Timeline */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <MapPin className="h-6 w-6 text-primary" />
          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Places I've Called Home
          </h2>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
          
          {/* Timeline items */}
          <div className="space-y-12">
            {places.map((place, index) => (
              <div key={`${place.city}-${place.period}`} className="relative">
                {/* Center dot */}
                <div className="absolute left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2" />
                
                {/* Content - alternating left and right */}
                <div className={`grid grid-cols-2 gap-8 ${index % 2 === 0 ? '' : ''}`}>
                  {index % 2 === 0 ? (
                    <>
                      <div className="text-right pr-12">
                        <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">
                          {place.city}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{place.country}</p>
                        <p className="text-xs text-muted-foreground">{place.period}</p>
                      </div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div className="pl-12">
                        <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">
                          {place.city}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{place.country}</p>
                        <p className="text-xs text-muted-foreground">{place.period}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
