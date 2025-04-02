import { MessageSquareText } from "lucide-react";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import Link from "next/link";

const HomeNavbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="wrapper flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquareText className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Anonymate</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/login"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Log in
          </Link>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;
