import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Finding Stillness in Tokyo's Chaos",
    excerpt: "How the world's busiest city taught me the art of being present",
    category: "Travel",
    date: "March 15, 2024",
    readTime: "5 min read",
    content: `
      <p>Tokyo moves at a pace that seems impossible to match. Millions of people flow through Shibuya Crossing every day, trains arrive and depart with clockwork precision, and the city never truly sleeps. Yet somehow, in the midst of all this chaos, I found a profound sense of stillness.</p>

      <h2>The Paradox of Presence</h2>
      <p>My first morning in Tokyo, I woke up at 5 AM to visit Senso-ji Temple. The sun was just beginning to rise, and the normally crowded streets were quiet. I watched as elderly locals performed their morning prayers, moving through rituals they'd likely done thousands of times before.</p>

      <p>What struck me wasn't the ceremony itself, but the complete absorption in the present moment. No checking phones, no rushing to the next thing—just pure presence.</p>

      <h2>Lessons from the Subway</h2>
      <p>The Tokyo subway system is legendary for its efficiency, but it's also a masterclass in mindfulness. Despite being packed shoulder-to-shoulder during rush hour, there's a collective calm. People aren't fighting the experience; they're simply being with it.</p>

      <p>This taught me something profound: stillness isn't about the absence of chaos. It's about your relationship to it.</p>

      <h2>Finding Your Own Tokyo</h2>
      <p>You don't need to travel to Japan to find this lesson. Whether you're in a crowded subway, a busy office, or a chaotic family gathering, the opportunity for stillness is always present. It's not about changing your circumstances—it's about changing your awareness within them.</p>

      <p>Tokyo showed me that peace isn't found by escaping the noise. It's found by learning to be still within it.</p>
    `
  },
  {
    id: 2,
    title: "The Power of Small Habits",
    excerpt: "What I learned from tracking daily routines for a year",
    category: "Lessons",
    date: "March 8, 2024",
    readTime: "4 min read",
    content: `
      <p>On January 1st last year, I started tracking my daily habits. Not with any grand expectations, but out of simple curiosity: what would happen if I paid attention to the small things?</p>

      <h2>The Compound Effect</h2>
      <p>The first month was humbling. I realized how inconsistent I was with even the simplest habits. Drinking enough water, reading for 20 minutes, or doing basic stretches—these tiny actions were far from automatic.</p>

      <p>But something shifted around week six. The habits started to stack. Reading in the morning led to better focus. Better focus led to more productive work. More productive work led to finishing earlier. Finishing earlier led to better sleep.</p>

      <h2>What the Data Showed</h2>
      <p>After a year, the patterns were undeniable. Days when I maintained my morning routine (exercise, meditation, reading) were 3x more likely to be rated as "great days" in my journal. The correlation was stunning.</p>

      <p>But here's what surprised me most: it wasn't about perfection. Missing a day didn't matter. Missing two days didn't matter. It was the overall trend—the consistency over time—that created change.</p>

      <h2>Start Smaller Than You Think</h2>
      <p>My advice? Whatever habit you're thinking of starting, make it smaller. Want to exercise daily? Start with putting on your workout clothes. Want to read more? Start with one page. The key is showing up, not the outcome.</p>

      <p>Small habits, consistently applied, become the architecture of your life.</p>
    `
  },
  {
    id: 3,
    title: "Sapiens: A Journey Through Human History",
    excerpt: "Reflections on Yuval Noah Harari's masterpiece about who we are",
    category: "Books",
    date: "February 28, 2024",
    readTime: "6 min read",
    content: `
      <p>"Sapiens" by Yuval Noah Harari isn't just a book about history—it's a mirror held up to humanity itself. Reading it felt less like learning facts and more like having my entire worldview gently dismantled and reassembled.</p>

      <h2>The Power of Shared Myths</h2>
      <p>One of Harari's most compelling arguments is that what separates humans from other animals isn't our intelligence or tool use—it's our ability to believe in shared myths. Money, corporations, nations, human rights—these are all fictions that exist only because we collectively agree they do.</p>

      <p>This realization was both unsettling and liberating. If our current systems are just stories we tell ourselves, then we can write new ones.</p>

      <h2>The Agricultural Revolution: A Trap?</h2>
      <p>Harari makes a controversial claim: the agricultural revolution was actually bad for most humans. We traded varied diets and flexible lifestyles for backbreaking farm work and grain-based meals. We became slaves to wheat instead of wheat serving us.</p>

      <p>This chapter made me think about modern life. How many "advancements" have actually made us less free? Social media, always-on work culture, consumer debt—are we repeating the same pattern?</p>

      <h2>What It Means to Be Human</h2>
      <p>The book's greatest gift is perspective. We think our way of life is natural and inevitable, but it's just one possibility among many. Humans have lived in countless different ways, believed in countless different things.</p>

      <p>Understanding this doesn't give us answers—it gives us questions. And sometimes, the questions are more valuable than the answers.</p>
    `
  },
  {
    id: 4,
    title: "Learning Spanish Through Cooking",
    excerpt: "How following recipes became my favorite language learning tool",
    category: "Hobbies",
    date: "February 20, 2024",
    readTime: "3 min read",
    content: `
      <p>After years of failed attempts to learn Spanish through apps and textbooks, I finally found what works: cooking.</p>

      <h2>Why Recipes Work</h2>
      <p>Recipes are perfect language learning tools. The vocabulary is concrete and immediately useful. You're not memorizing abstract words—you're learning terms you'll use right now. "Cortar" isn't just "to cut"; it's what you do with the onion in your hand.</p>

      <p>Plus, the context is rich. You're engaging multiple senses: reading, touching, smelling, tasting. The language sticks because it's connected to real experiences.</p>

      <h2>My Process</h2>
      <p>Every Sunday, I choose one recipe from a Spanish cookbook. I don't translate anything beforehand—I let context guide me. If I don't know "hervir," I look at the context clues. Water, pot, high heat—ah, it must mean "boil."</p>

      <p>Mistakes happen. I once confused "cucharada" (tablespoon) with "taza" (cup) and made obscenely salty soup. But that mistake? I'll never forget what "cucharada" means now.</p>

      <h2>Beyond the Kitchen</h2>
      <p>This approach works because it violates the cardinal rule of traditional language learning: it's not efficient. There's no optimized flashcard system or spaced repetition algorithm.</p>

      <p>Instead, it's joyful. And joy, I've learned, is a far better teacher than efficiency.</p>
    `
  },
  {
    id: 5,
    title: "On Curiosity and Career Changes",
    excerpt: "Why following what makes you curious might be the best career advice",
    category: "Thoughts",
    date: "February 10, 2024",
    readTime: "7 min read",
    content: `
      <p>I've changed careers three times. Each time, well-meaning people asked: "But what about your plan?" The truth is, I never had one. I just followed what made me curious.</p>

      <h2>The Curiosity Compass</h2>
      <p>Unlike passion—which feels heavy and serious—curiosity is light. It's a gentle pull toward something interesting. Not "I must do this!" but rather "Huh, I wonder what that's about?"</p>

      <p>What I've learned is that curiosity is a more reliable guide than planning. Plans assume a static world and a static self. But both are constantly changing. Curiosity adapts in real-time.</p>

      <h2>The Pattern I Noticed</h2>
      <p>Looking back, every major career shift started the same way: with a small curiosity I couldn't shake. A book that stuck with me. A conversation that lingered. A problem I kept thinking about.</p>

      <p>Each time, I followed these curiosities without knowing where they'd lead. Each time, they led somewhere better than I could have planned.</p>

      <h2>The Courage to Not Know</h2>
      <p>Following curiosity requires something that's culturally undervalued: the courage to not have it all figured out. To say "I don't know where this leads, but I want to find out."</p>

      <p>In a world obsessed with five-year plans and career trajectories, this feels reckless. But I've found it to be the opposite—it's the most honest response to a complex, changing world.</p>

      <h2>What Are You Curious About?</h2>
      <p>If you're stuck in your career, don't ask "What's my passion?" Ask instead: "What am I curious about right now?" Then follow that thread, even if you don't know where it leads.</p>

      <p>The path reveals itself by walking it.</p>
    `
  },
  {
    id: 6,
    title: "Backpacking Through Southeast Asia",
    excerpt: "Three months, five countries, countless lessons about simplicity",
    category: "Travel",
    date: "January 25, 2024",
    readTime: "8 min read",
    content: `
      <p>I left for Southeast Asia with a 40-liter backpack and a vague itinerary. I returned three months later with the same backpack, having learned that most of what I thought I needed, I didn't.</p>

      <h2>The Backpack Test</h2>
      <p>There's something clarifying about fitting your entire life into a backpack. You quickly learn the difference between what you need and what you think you need. After two weeks, I shipped home half of what I'd brought. After a month, I wished I'd shipped more.</p>

      <p>This wasn't about minimalism as an aesthetic—it was about freedom. Every item I didn't carry was one less thing to worry about.</p>

      <h2>What the Journey Taught Me</h2>
      <p>Thailand taught me that language barriers are mostly in our heads. Vietnam showed me that the best food comes from the smallest streets. Laos reminded me that not everywhere moves at the same pace, and that's okay. Cambodia humbled me with its history and resilient spirit. Malaysia surprised me with its diversity and warmth.</p>

      <p>But the deepest lesson came from the journey itself: growth happens at the edges of comfort.</p>

      <h2>The People You Meet</h2>
      <p>I shared hostel rooms with teachers on sabbatical, recent graduates figuring out life, and retirees finally taking that trip they'd always planned. Each person had their own reason for being there, but we all shared something: a willingness to step into uncertainty.</p>

      <p>Some of these strangers became friends. Many became teachers, though they didn't know it.</p>

      <h2>Coming Home</h2>
      <p>The hardest part of traveling isn't leaving—it's coming back. You return to familiar places but you're not the same person who left. Your apartment looks different. Your routines feel strange.</p>

      <p>But here's what I brought back that won't fit in a backpack: the knowledge that I can adapt, that I need less than I think, and that the world is far more welcoming than the news would have us believe.</p>

      <p>The trip ended. The journey continues.</p>
    `
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));
  const [comments, setComments] = useState<Array<{ name: string; comment: string; date: string }>>([]);
  const [newComment, setNewComment] = useState({ name: "", comment: "" });

  if (!post) {
    return (
      <div className="container max-w-4xl py-12 md:py-20">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="secondary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="container max-w-4xl py-12 md:py-20">
      {/* Back Button */}
      <Link to="/blog" className="inline-block mb-8">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      {/* Header */}
      <header className="mb-12">
        <Badge variant="secondary" className="mb-4 font-normal">
          {post.category}
        </Badge>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-2">
          Written by <span className="font-semibold text-foreground">Jose Rivas</span>
        </p>
        <p className="text-xl text-muted-foreground mb-6">
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
      </header>

      {/* Content */}
      <div 
        className="prose prose-lg max-w-none
          prose-headings:font-serif prose-headings:text-foreground
          prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-primary hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Comments Section */}
      <div className="mt-16 pt-8 border-t border-border">
        <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-2">
          <MessageSquare className="h-8 w-8" />
          Comments
        </h2>

        {/* Comment Form */}
        <Card className="p-6 mb-8">
          <h3 className="font-semibold text-lg mb-4">Leave a Comment</h3>
          <div className="space-y-4">
            <div>
              <Input
                placeholder="Your name"
                value={newComment.name}
                onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
              />
            </div>
            <div>
              <Textarea
                placeholder="Your comment..."
                value={newComment.comment}
                onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                rows={4}
              />
            </div>
            <Button
              onClick={() => {
                if (newComment.name.trim() && newComment.comment.trim()) {
                  setComments([
                    ...comments,
                    {
                      ...newComment,
                      date: new Date().toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
                    },
                  ]);
                  setNewComment({ name: "", comment: "" });
                }
              }}
            >
              Post Comment
            </Button>
          </div>
        </Card>

        {/* Comments List */}
        {comments.length > 0 && (
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{comment.name}</span>
                  <span className="text-sm text-muted-foreground">{comment.date}</span>
                </div>
                <p className="text-muted-foreground">{comment.comment}</p>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Back to Blog */}
      <div className="mt-16 pt-8 border-t border-border">
        <Link to="/blog">
          <Button variant="secondary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Posts
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;
