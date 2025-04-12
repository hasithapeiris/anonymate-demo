"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageSquareText,
  User,
  Settings,
  Heart,
  Sparkles,
  Clock,
  Shield,
  Edit,
  ChevronRight,
  MapPin,
  Briefcase,
  Calendar,
  Wine,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

// Mock user data - in a real app, this would come from your backend
const userData = {
  nickname: "ThoughtfulExplorer",
  gender: "Non-binary",
  age: 28,
  career: "UX Designer in Tech",
  relationshipType: "long-term",
  personalityTraits: [
    "Creative",
    "Analytical",
    "Empathetic",
    "Intellectual",
    "Reliable",
  ],
  height: "175 cm",
  interests: [
    "Literature",
    "Photography",
    "Hiking",
    "Philosophy",
    "Music",
    "Travel",
    "Psychology",
    "Cooking",
  ],
  appearance: "Brown hair, hazel eyes, athletic build",
  location: "Seattle, WA",
  lifestyle: {
    smoking: "no",
    drinking: "socially",
    other: "Vegan, Morning person, Yoga enthusiast",
  },
  bio: "I find beauty in the small details of everyday life. Passionate about exploring new ideas through books and meaningful conversations. Looking for someone who appreciates depth and authenticity.",
  aboutMeBio:
    "I'm a curious soul who loves to explore both the world around me and the world of ideas. I value deep connections and authentic conversations. My creative work as a UX designer allows me to blend art and technology, which perfectly reflects my personality. I'm equally comfortable discussing philosophy over coffee or hiking a mountain trail at sunrise. I believe in continuous growth and learning from every experience and person I meet.",

  // Looking For
  genderPreference: "any",
  ageRange: [25, 35],
  careerPreference: "Creative or Tech field",
  relationshipTypePreference: "long-term",
  personalityPreference: [
    "Creative",
    "Empathetic",
    "Intellectual",
    "Adventurous",
    "Humorous",
  ],
  heightPreference: "No specific preference",
  interestPreference: [
    "Literature",
    "Travel",
    "Music",
    "Philosophy",
    "Photography",
  ],
  appearancePreference: "No specific preference",
  locationPreference: "Within 30 miles of Seattle",
  lifestylePreference: {
    smoking: "dealbreaker",
    drinking: "",
    other: "Active lifestyle preferred",
  },
  dealbreakers: ["smoking", "distance"],
  lookingForBio:
    "I'm looking for someone who approaches life with curiosity and openness. Someone who values personal growth and isn't afraid of deep conversations, but who also knows how to laugh and enjoy the simple pleasures. I believe the best relationships are built on mutual respect, shared values, and the ability to be completely yourself with each other. While common interests are great, I'm more interested in finding someone with a compatible outlook on life and similar relationship goals.",

  stats: {
    matches: 12,
    conversations: 8,
    activeChats: 3,
    compatibility: 85,
  },
  memberSince: "2023-11-15",
};

// Helper function to format relationship type
const formatRelationshipType = (type: string) => {
  switch (type) {
    case "casual":
      return "Casual Dating";
    case "long-term":
      return "Long-term Relationship";
    case "friendship":
      return "Friendship First";
    case "open":
      return "Open to Anything";
    default:
      return type;
  }
};

export default function NewProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Format date
  const memberSince = new Date(userData.memberSince);
  const memberSinceFormatted = memberSince.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquareText className="h-6 w-6 text-primary" />
            <Link href="/" className="text-xl font-bold">
              Anonymate
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/matchmaking"
              className="text-sm font-medium transition-colors hover:text-primary"
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
              className="text-sm font-medium transition-colors text-primary"
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
      <main className="flex-1 container py-8">
        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          {/* Profile Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">{userData.nickname}</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Member since {memberSinceFormatted}
                  </p>

                  <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary"
                    >
                      {userData.age} years
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary"
                    >
                      {userData.gender}
                    </Badge>
                  </div>

                  <Button asChild className="mt-6 w-full gap-1">
                    <Link href="/settings">
                      <Settings className="h-4 w-4 mr-1" /> Edit Profile
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Match Statistics</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-primary" />
                      <span className="text-sm">Total Matches</span>
                    </div>
                    <span className="font-medium">
                      {userData.stats.matches}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MessageSquareText className="h-4 w-4 text-primary" />
                      <span className="text-sm">Conversations</span>
                    </div>
                    <span className="font-medium">
                      {userData.stats.conversations}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">Active Chats</span>
                    </div>
                    <span className="font-medium">
                      {userData.stats.activeChats}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="text-sm">Avg. Compatibility</span>
                    </div>
                    <span className="font-medium">
                      {userData.stats.compatibility}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <Tabs
              defaultValue="overview"
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">About Me</TabsTrigger>
                <TabsTrigger value="looking-for">Looking For</TabsTrigger>
                <TabsTrigger value="interests">
                  Interests & Personality
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                    <CardDescription>
                      How others see your profile
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="text-sm font-medium mb-2">About Me</h3>
                      <p className="italic text-muted-foreground">
                        {userData.aboutMeBio || userData.bio}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-muted-foreground">
                          Basic Info
                        </h3>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Calendar className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-sm font-medium">Age</p>
                              <p className="text-sm text-muted-foreground">
                                {userData.age} years old
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <User className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-sm font-medium">Gender</p>
                              <p className="text-sm text-muted-foreground">
                                {userData.gender}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Briefcase className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-sm font-medium">Career</p>
                              <p className="text-sm text-muted-foreground">
                                {userData.career}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Heart className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-sm font-medium">Looking for</p>
                              <p className="text-sm text-muted-foreground">
                                {formatRelationshipType(
                                  userData.relationshipType
                                )}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-sm font-medium">Location</p>
                              <p className="text-sm text-muted-foreground">
                                {userData.location}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-muted-foreground">
                          Lifestyle
                        </h3>

                        <div className="space-y-3">
                          {userData.height && (
                            <div className="flex items-start gap-3">
                              <div className="text-xl">📏</div>
                              <div>
                                <p className="text-sm font-medium">Height</p>
                                <p className="text-sm text-muted-foreground">
                                  {userData.height}
                                </p>
                              </div>
                            </div>
                          )}

                          {userData.appearance && (
                            <div className="flex items-start gap-3">
                              <div className="text-xl">👤</div>
                              <div>
                                <p className="text-sm font-medium">
                                  Appearance
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {userData.appearance}
                                </p>
                              </div>
                            </div>
                          )}

                          <div className="flex items-start gap-3">
                            <div className="text-xl">🚬</div>
                            <div>
                              <p className="text-sm font-medium">Smoking</p>
                              <p className="text-sm text-muted-foreground">
                                {userData.lifestyle.smoking === "yes"
                                  ? "Yes"
                                  : userData.lifestyle.smoking === "no"
                                  ? "No"
                                  : userData.lifestyle.smoking ===
                                    "occasionally"
                                  ? "Occasionally"
                                  : "Not specified"}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Wine className="h-5 w-5 text-primary" />
                            <div>
                              <p className="text-sm font-medium">Drinking</p>
                              <p className="text-sm text-muted-foreground">
                                {userData.lifestyle.drinking === "yes"
                                  ? "Yes"
                                  : userData.lifestyle.drinking === "no"
                                  ? "No"
                                  : userData.lifestyle.drinking === "socially"
                                  ? "Socially"
                                  : "Not specified"}
                              </p>
                            </div>
                          </div>

                          {userData.lifestyle.other && (
                            <div className="flex items-start gap-3">
                              <div className="text-xl">🌱</div>
                              <div>
                                <p className="text-sm font-medium">
                                  Other Lifestyle
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {userData.lifestyle.other}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full gap-1">
                      <Link href="/create-profile/new">
                        <Edit className="h-4 w-4 mr-1" /> Edit Profile
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Privacy Level</CardTitle>
                    <CardDescription>
                      Your current privacy settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Enhanced Privacy Mode</p>
                          <p className="text-sm text-muted-foreground">
                            Your conversations are end-to-end encrypted and
                            automatically deleted after 30 days of inactivity.
                          </p>
                        </div>
                      </div>

                      <div className="rounded-lg border p-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">
                              Current Anonymity Level
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Standard
                            </p>
                          </div>
                          <Button variant="outline" asChild size="sm">
                            <Link href="/settings/privacy">
                              Manage <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Looking For Tab */}
              <TabsContent value="looking-for" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Who I'm Looking For</CardTitle>
                    <CardDescription>
                      My ideal match preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {userData.lookingForBio && (
                      <div className="rounded-lg border bg-card p-4 mb-4">
                        <h3 className="text-sm font-medium mb-2">
                          My Ideal Match
                        </h3>
                        <p className="italic text-muted-foreground">
                          {userData.lookingForBio}
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-muted-foreground">
                          Basic Preferences
                        </h3>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <User className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-sm font-medium">Gender</p>
                              <p className="text-sm text-muted-foreground">
                                {userData.genderPreference === "male"
                                  ? "Male"
                                  : userData.genderPreference === "female"
                                  ? "Female"
                                  : userData.genderPreference === "non-binary"
                                  ? "Non-binary"
                                  : "Any gender"}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Calendar className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-sm font-medium">Age Range</p>
                              <p className="text-sm text-muted-foreground">
                                {userData.ageRange[0]} - {userData.ageRange[1]}{" "}
                                years
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Briefcase className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-sm font-medium">Career</p>
                              <p className="text-sm text-muted-foreground">
                                {userData.careerPreference ||
                                  "No specific preference"}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Heart className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-sm font-medium">
                                Relationship Type
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {formatRelationshipType(
                                  userData.relationshipTypePreference
                                )}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-sm font-medium">Location</p>
                              <p className="text-sm text-muted-foreground">
                                {userData.locationPreference}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-muted-foreground">
                          Lifestyle Preferences
                        </h3>

                        <div className="space-y-3">
                          {userData.heightPreference && (
                            <div className="flex items-start gap-3">
                              <div className="text-xl">📏</div>
                              <div>
                                <p className="text-sm font-medium">Height</p>
                                <p className="text-sm text-muted-foreground">
                                  {userData.heightPreference}
                                </p>
                              </div>
                            </div>
                          )}

                          {userData.appearancePreference && (
                            <div className="flex items-start gap-3">
                              <div className="text-xl">👤</div>
                              <div>
                                <p className="text-sm font-medium">
                                  Appearance
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {userData.appearancePreference}
                                </p>
                              </div>
                            </div>
                          )}

                          <div className="flex items-start gap-3">
                            <div className="text-xl">🚬</div>
                            <div>
                              <p className="text-sm font-medium">Smoking</p>
                              <p className="text-sm text-muted-foreground">
                                {userData.lifestylePreference.smoking === "yes"
                                  ? "Smoker is fine"
                                  : userData.lifestylePreference.smoking ===
                                    "no"
                                  ? "Non-smoker preferred"
                                  : userData.lifestylePreference.smoking ===
                                    "dealbreaker"
                                  ? "Non-smoker only (dealbreaker)"
                                  : "No preference"}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Wine className="h-5 w-5 text-primary" />
                            <div>
                              <p className="text-sm font-medium">Drinking</p>
                              <p className="text-sm text-muted-foreground">
                                {userData.lifestylePreference.drinking === "yes"
                                  ? "Drinker is fine"
                                  : userData.lifestylePreference.drinking ===
                                    "no"
                                  ? "Non-drinker preferred"
                                  : userData.lifestylePreference.drinking ===
                                    "dealbreaker"
                                  ? "Non-drinker only (dealbreaker)"
                                  : "No preference"}
                              </p>
                            </div>
                          </div>

                          {userData.lifestylePreference.other && (
                            <div className="flex items-start gap-3">
                              <div className="text-xl">🌱</div>
                              <div>
                                <p className="text-sm font-medium">
                                  Other Preferences
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {userData.lifestylePreference.other}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Dealbreakers */}
                    {userData.dealbreakers.length > 0 && (
                      <div className="mt-4">
                        <h3 className="text-sm font-medium text-muted-foreground mb-3">
                          Dealbreakers
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {userData.dealbreakers.includes("smoking") && (
                            <Badge variant="destructive" className="py-1">
                              Smoking
                            </Badge>
                          )}
                          {userData.dealbreakers.includes("drinking") && (
                            <Badge variant="destructive" className="py-1">
                              Drinking
                            </Badge>
                          )}
                          {userData.dealbreakers.includes("distance") && (
                            <Badge variant="destructive" className="py-1">
                              Long Distance
                            </Badge>
                          )}
                          {userData.dealbreakers.includes("age") && (
                            <Badge variant="destructive" className="py-1">
                              Outside Age Range
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Personality Preferences */}
                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-muted-foreground mb-3">
                        Personality Traits I Value
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {userData.personalityPreference.map((trait) => (
                          <Badge
                            key={trait}
                            variant="secondary"
                            className="py-1"
                          >
                            {trait}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full gap-1">
                      <Link href="/create-profile/new">
                        <Edit className="h-4 w-4 mr-1" /> Edit Preferences
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Interests & Personality Tab */}
              <TabsContent value="interests" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>My Personality</CardTitle>
                    <CardDescription>How I describe myself</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-wrap gap-3">
                      {userData.personalityTraits.map((trait) => (
                        <div
                          key={trait}
                          className="flex flex-col items-center gap-1 p-3 border rounded-lg"
                        >
                          <div className="text-2xl">
                            {trait === "Creative"
                              ? "🎨"
                              : trait === "Analytical"
                              ? "🧩"
                              : trait === "Adventurous"
                              ? "🧗‍♀️"
                              : trait === "Empathetic"
                              ? "💗"
                              : trait === "Ambitious"
                              ? "🚀"
                              : trait === "Laid-back"
                              ? "🌴"
                              : trait === "Intellectual"
                              ? "📚"
                              : trait === "Humorous"
                              ? "😂"
                              : trait === "Reliable"
                              ? "🤝"
                              : trait === "Spontaneous"
                              ? "✨"
                              : trait === "Introverted"
                              ? "🧘‍♂️"
                              : trait === "Extroverted"
                              ? "🎉"
                              : "✨"}
                          </div>
                          <span className="text-sm font-medium">{trait}</span>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Personality Matching</p>
                          <p className="text-sm text-muted-foreground">
                            Our AI analyzes your personality traits to find
                            compatible matches. You tend to match best with
                            people who share your{" "}
                            {userData.personalityTraits.includes("Creative")
                              ? "creative"
                              : "analytical"}{" "}
                            approach and value{" "}
                            {userData.personalityTraits.includes("Empathetic")
                              ? "emotional connection"
                              : "intellectual stimulation"}
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>My Interests</CardTitle>
                    <CardDescription>What I'm passionate about</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {userData.interests.map((interest) => (
                        <Badge
                          key={interest}
                          variant="secondary"
                          className="px-3 py-1"
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">
                        Interest Categories
                      </h3>

                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Arts & Culture</span>
                            <span className="text-sm text-muted-foreground">
                              {
                                userData.interests.filter((i) =>
                                  [
                                    "Literature",
                                    "Visual Arts",
                                    "Music",
                                    "Theater",
                                    "Film",
                                    "Photography",
                                    "Dance",
                                    "Architecture",
                                  ].includes(i)
                                ).length
                              }{" "}
                              interests
                            </span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{
                                width: `${
                                  (userData.interests.filter((i) =>
                                    [
                                      "Literature",
                                      "Visual Arts",
                                      "Music",
                                      "Theater",
                                      "Film",
                                      "Photography",
                                      "Dance",
                                      "Architecture",
                                    ].includes(i)
                                  ).length /
                                    userData.interests.length) *
                                  100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Activities</span>
                            <span className="text-sm text-muted-foreground">
                              {
                                userData.interests.filter((i) =>
                                  [
                                    "Hiking",
                                    "Cooking",
                                    "Travel",
                                    "Gaming",
                                    "Sports",
                                    "Yoga",
                                    "Meditation",
                                    "Gardening",
                                  ].includes(i)
                                ).length
                              }{" "}
                              interests
                            </span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{
                                width: `${
                                  (userData.interests.filter((i) =>
                                    [
                                      "Hiking",
                                      "Cooking",
                                      "Travel",
                                      "Gaming",
                                      "Sports",
                                      "Yoga",
                                      "Meditation",
                                      "Gardening",
                                    ].includes(i)
                                  ).length /
                                    userData.interests.length) *
                                  100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Learning</span>
                            <span className="text-sm text-muted-foreground">
                              {
                                userData.interests.filter((i) =>
                                  [
                                    "Science",
                                    "History",
                                    "Philosophy",
                                    "Psychology",
                                    "Technology",
                                    "Languages",
                                    "Politics",
                                    "Economics",
                                  ].includes(i)
                                ).length
                              }{" "}
                              interests
                            </span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{
                                width: `${
                                  (userData.interests.filter((i) =>
                                    [
                                      "Science",
                                      "History",
                                      "Philosophy",
                                      "Psychology",
                                      "Technology",
                                      "Languages",
                                      "Politics",
                                      "Economics",
                                    ].includes(i)
                                  ).length /
                                    userData.interests.length) *
                                  100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Lifestyle</span>
                            <span className="text-sm text-muted-foreground">
                              {
                                userData.interests.filter((i) =>
                                  [
                                    "Food",
                                    "Fashion",
                                    "Fitness",
                                    "Sustainability",
                                    "Minimalism",
                                    "DIY",
                                    "Pets",
                                    "Collecting",
                                  ].includes(i)
                                ).length
                              }{" "}
                              interests
                            </span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{
                                width: `${
                                  (userData.interests.filter((i) =>
                                    [
                                      "Food",
                                      "Fashion",
                                      "Fitness",
                                      "Sustainability",
                                      "Minimalism",
                                      "DIY",
                                      "Pets",
                                      "Collecting",
                                    ].includes(i)
                                  ).length /
                                    userData.interests.length) *
                                  100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 rounded-lg border bg-card p-4">
                      <div className="flex items-start gap-3">
                        <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Interest-Based Matching</p>
                          <p className="text-sm text-muted-foreground">
                            You're most likely to connect with people who share
                            your passion for Literature and Philosophy. Our AI
                            also suggests exploring matches with Photography
                            enthusiasts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full gap-1">
                      <Link href="/create-profile/new">
                        <Edit className="h-4 w-4 mr-1" /> Update Interests
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
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
