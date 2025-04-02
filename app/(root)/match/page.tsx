import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Users,
  Sparkles,
  ArrowRight,
  Calendar,
  Clock,
} from "lucide-react";

export default function MatchmakingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-6">
        <div className="space-y-8">
          {/* Daily Match Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">
                Today's Match
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Refreshes in</span>
                <Clock className="h-4 w-4" />
                <span>12:34:56</span>
              </div>
            </div>
            <Card className="overflow-hidden">
              <div className="md:grid md:grid-cols-2">
                <CardContent className="p-6 pb-8">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="bg-primary/10 text-primary"
                        >
                          94% Match
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-green-500/10 text-green-500"
                        >
                          Online Now
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold">
                        Anonymous Match #4281
                      </h3>
                      <p className="text-muted-foreground">
                        Based on your preferences and conversation style, our AI
                        thinks you'll hit it off with this person.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Shared Interests</p>
                          <p className="text-sm text-muted-foreground">
                            Hiking, Photography, Classic Literature, Jazz Music
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Conversation Style</p>
                          <p className="text-sm text-muted-foreground">
                            Thoughtful, Witty, Deep, Curious
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button className="w-full">Start Conversation</Button>
                    </div>
                  </div>
                </CardContent>
                <div className="border-t md:border-t-0 md:border-l">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">
                        Preview of their writing style:
                      </h4>
                      <div className="space-y-3">
                        <div className="rounded-lg bg-muted p-3">
                          <p className="text-sm">
                            I believe travel is one of life's greatest teachers.
                            Each new place offers a fresh perspective,
                            challenging our assumptions and broadening our
                            horizons in ways we never expected.
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted p-3">
                          <p className="text-sm">
                            The best conversations are like jazz improvisations
                            - there's a rhythm and structure, but also room for
                            spontaneity and unexpected turns that lead to
                            something beautiful.
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted p-3">
                          <p className="text-sm">
                            I find myself drawn to stories that explore the
                            complexity of human connections - how we find each
                            other, understand each other, and grow together
                            despite our differences.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </section>

          {/* Tabs Section */}
          <Tabs defaultValue="recommended" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="recommended">AI Recommended</TabsTrigger>
              <TabsTrigger value="random">Random Matching</TabsTrigger>
              <TabsTrigger value="chatrooms">Chatrooms</TabsTrigger>
            </TabsList>

            {/* AI Recommended Tab */}
            <TabsContent value="recommended" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[85, 78, 72].map((score, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-center">
                        <Badge
                          variant="outline"
                          className="bg-primary/10 text-primary"
                        >
                          {score}% Match
                        </Badge>
                        {i === 0 && (
                          <Badge
                            variant="outline"
                            className="bg-green-500/10 text-green-500"
                          >
                            Online
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="mt-2">
                        Anonymous #{4290 + i}
                      </CardTitle>
                      <CardDescription>
                        {i === 0
                          ? "Active 2 minutes ago"
                          : i === 1
                          ? "Active today"
                          : "Active yesterday"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <p className="text-sm">
                            {i === 0
                              ? "Photography, Travel, Coffee"
                              : i === 1
                              ? "Books, Hiking, Cooking"
                              : "Gaming, Movies, Technology"}
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <p className="text-sm">
                            {i === 0
                              ? "Enthusiastic, Creative"
                              : i === 1
                              ? "Thoughtful, Analytical"
                              : "Humorous, Relaxed"}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Profile
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline" className="gap-1">
                  View More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            {/* Random Matching Tab */}
            <TabsContent value="random" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Random Matching</CardTitle>
                  <CardDescription>
                    Connect with someone completely random for a fresh
                    conversation experience.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border bg-card p-4 text-card-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Currently Online</h4>
                        <p className="text-sm text-muted-foreground">
                          142 people available for random matching
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button>Find Random Match</Button>
                    <Button variant="outline">Set Matching Preferences</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Chatrooms Tab */}
            <TabsContent value="chatrooms" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "Book Lovers",
                  "Travel Enthusiasts",
                  "Film Critics",
                  "Foodies",
                ].map((room, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <Badge
                          variant="outline"
                          className="bg-primary/10 text-primary"
                        >
                          {Math.floor(Math.random() * 20) + 5} Online
                        </Badge>
                      </div>
                      <CardTitle className="mt-2">{room}</CardTitle>
                      <CardDescription>
                        {i === 0
                          ? "Discuss your favorite books and authors"
                          : i === 1
                          ? "Share travel stories and recommendations"
                          : i === 2
                          ? "Debate the latest films and classics"
                          : "Exchange recipes and restaurant tips"}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex gap-2">
                      <Button variant="outline" className="w-full">
                        Preview
                      </Button>
                      <Button className="w-full">Join</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline" className="gap-1">
                  View All Chatrooms <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
