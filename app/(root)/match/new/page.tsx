import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Sparkles, Bot } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CardStack } from "@/components/card-stack";

export default function NewMatchmakingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <Link href="/" className="text-xl font-bold">
              Anonymate
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/matchmaking/new"
              className="text-sm font-medium transition-colors text-primary"
            >
              Matchmaking
            </Link>
            <Link
              href="/messages"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Messages
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Profile
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <span className="sr-only">Notifications</span>
              <div className="relative">
                <MessageSquare className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  3
                </span>
              </div>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="space-y-8">
          <section className="text-center max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Bot className="h-5 w-5 text-primary" />
              <h2 className="text-sm font-medium text-primary">
                AI-POWERED RECOMMENDATIONS
              </h2>
            </div>
            <h1 className="text-3xl font-bold mb-2">Discover Your Matches</h1>
            <p className="text-muted-foreground mb-8">
              Our AI has analyzed your profile and found these compatible
              matches. Swipe right to connect, left to pass.
            </p>

            <CardStack />

            <div className="mt-8 flex justify-center gap-4">
              <Button variant="outline" className="gap-2">
                <Users className="h-4 w-4" />
                Browse All
              </Button>
              <Button className="gap-2">
                <Sparkles className="h-4 w-4" />
                Refresh Recommendations
              </Button>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col gap-2 sm:flex-row items-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Anonymate. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
