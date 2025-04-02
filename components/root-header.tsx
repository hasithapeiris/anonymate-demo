import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, MessageSquareText } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

const RootHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="wrapper-root flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <MessageSquareText className="h-6 w-6 text-primary" />
          <Link href="/" className="text-xl font-bold">
            Anonymate
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/match"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Matchmaker
          </Link>
          <Link
            href="/messages"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Messages
          </Link>
          <Link
            href="/kapuwa"
            className="text-sm font-medium transition-colors text-primary"
          >
            Kapuwa
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
              <MessageSquareText className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default RootHeader;
