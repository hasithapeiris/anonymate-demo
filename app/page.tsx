import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MessageSquareText,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import Footer from "@/components/footer";
import HomeNavbar from "@/components/home-navbar";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeNavbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-950">
          <div className="wrapper px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect Authentically.
                    <span className="block text-primary">Stay Anonymous.</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Anonymate is the first AI-powered dating app that lets you
                    connect based on conversation, not appearance. Find your
                    perfect match through meaningful text-based interactions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/match">
                    <Button size="lg" className="gap-1.5">
                      Start Matching <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[350px] rounded-xl bg-gradient-to-b from-primary/20 to-primary/5 p-1">
                  <div className="absolute inset-0 rounded-xl border border-primary/10"></div>
                  <div className="h-full w-full rounded-lg bg-background p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <Sparkles className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium">AI Match</span>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="ml-auto max-w-[75%] rounded-lg rounded-tr-none bg-primary/10 p-3">
                          <p className="text-sm">
                            What's your idea of a perfect weekend?
                          </p>
                        </div>
                        <div className="max-w-[75%] rounded-lg rounded-tl-none bg-muted p-3">
                          <p className="text-sm">
                            I love hiking in the morning, followed by a good
                            book at a quiet café. Then maybe catching a live
                            music show in the evening. How about you?
                          </p>
                        </div>
                        <div className="ml-auto max-w-[75%] rounded-lg rounded-tr-none bg-primary/10 p-3">
                          <p className="text-sm">
                            That sounds amazing! I'm big on outdoor activities
                            too. I'd probably start with a farmers market, then
                            a bike ride, and end with cooking dinner with
                            friends.
                          </p>
                        </div>
                        {/* <div className="max-w-[75%] rounded-lg rounded-tl-none bg-muted p-3">
                          <p className="text-sm">
                            We seem to have a lot in common! Would you like to
                            continue this conversation?
                          </p>
                        </div> */}
                      </div>
                      {/* <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="w-fit">
                          Skip
                        </Button>
                        <Button size="sm" className="w-fit">
                          Connect
                        </Button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="wrapper px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Choose Anonymate?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform prioritizes genuine connections through
                  conversation, not superficial judgments.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Complete Anonymity</h3>
                <p className="text-muted-foreground">
                  No photos, no names, no judgment. Connect based on who you
                  are, not how you look.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI-Powered Matching</h3>
                <p className="text-muted-foreground">
                  Our advanced AI analyzes conversations to find your most
                  compatible matches.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Meaningful Connections</h3>
                <p className="text-muted-foreground">
                  Build relationships based on shared interests, values, and
                  conversation chemistry.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="wrapper px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How Anonymate Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Three simple steps to find your perfect match through
                  meaningful conversation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="absolute -top-3 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                  Step 1
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Create Your Profile</h3>
                <p className="text-center text-muted-foreground">
                  Answer questions about your interests, values, and what you're
                  looking for in a partner.
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="absolute -top-3 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                  Step 2
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquareText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Start Conversations</h3>
                <p className="text-center text-muted-foreground">
                  Engage in text-based chats with potential matches selected by
                  our AI algorithm.
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="absolute -top-3 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                  Step 3
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Connect Deeper</h3>
                <p className="text-center text-muted-foreground">
                  Choose to reveal more about yourself as you build trust and
                  connection.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="wrapper grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to find your authentic match?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of users who are making meaningful connections
                every day.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button size="lg" className="w-full">
                Get Started Now
              </Button>
              <p className="text-xs text-muted-foreground">
                No credit card required. Free to try.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
