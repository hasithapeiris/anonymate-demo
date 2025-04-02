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
} from "lucide-react";

// Mock user data - in a real app, this would come from your backend
const userData = {
  nickname: "ThoughtfulExplorer",
  avatar: {
    style: "abstract",
    color: "bg-primary/20",
  },
  gender: "Non-binary",
  age: 28,
  height: "175",
  weight: "68",
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
  personality: {
    "introvert-extrovert": "Ambivert",
    "thinking-feeling": "Analytical",
    "planning-spontaneous": "Flexible",
    "practical-creative": "Creative",
  },
  bio: "I find beauty in the small details of everyday life. Passionate about exploring new ideas through books and meaningful conversations. Looking for someone who appreciates depth and authenticity.",
  stats: {
    matches: 12,
    conversations: 8,
    activeChats: 3,
    compatibility: 85,
  },
  memberSince: "2023-11-15",
};

export default function ProfilePage() {
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
      <main className="flex-1 container py-8">
        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          {/* Profile Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`h-24 w-24 rounded-full ${userData.avatar.color} flex items-center justify-center mb-4`}
                  >
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
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="personality">Personality</TabsTrigger>
                <TabsTrigger value="interests">Interests</TabsTrigger>
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
                  <CardContent>
                    <p>{userData.bio}</p>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">
                          Basic Info
                        </h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Age:</span>
                            <span className="text-sm font-medium">
                              {userData.age}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Gender:</span>
                            <span className="text-sm font-medium">
                              {userData.gender}
                            </span>
                          </div>
                          {userData.height && (
                            <div className="flex justify-between">
                              <span className="text-sm">Height:</span>
                              <span className="text-sm font-medium">
                                {userData.height} cm
                              </span>
                            </div>
                          )}
                          {userData.weight && (
                            <div className="flex justify-between">
                              <span className="text-sm">Weight:</span>
                              <span className="text-sm font-medium">
                                {userData.weight} kg
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">
                          Personality Type
                        </h3>
                        <div className="space-y-2">
                          {Object.entries(userData.personality).map(
                            ([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-sm">
                                  {key
                                    .split("-")
                                    .map(
                                      (word) =>
                                        word.charAt(0).toUpperCase() +
                                        word.slice(1)
                                    )
                                    .join("/")}
                                </span>
                                <span className="text-sm font-medium">
                                  {value}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full gap-1">
                      <Link href="/settings">
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

              {/* Personality Tab */}
              <TabsContent value="personality" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Personality Profile</CardTitle>
                    <CardDescription>
                      How your personality traits influence your matches
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <h3 className="text-sm font-medium">Social Energy</h3>
                          <span className="text-sm font-medium">
                            {userData.personality["introvert-extrovert"]}
                          </span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{
                              width:
                                userData.personality["introvert-extrovert"] ===
                                "Introvert"
                                  ? "25%"
                                  : userData.personality[
                                      "introvert-extrovert"
                                    ] === "Ambivert"
                                  ? "50%"
                                  : "75%",
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                          <span>Introvert</span>
                          <span>Extrovert</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <h3 className="text-sm font-medium">
                            Decision Making
                          </h3>
                          <span className="text-sm font-medium">
                            {userData.personality["thinking-feeling"]}
                          </span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{
                              width:
                                userData.personality["thinking-feeling"] ===
                                "Analytical"
                                  ? "25%"
                                  : userData.personality["thinking-feeling"] ===
                                    "Balanced"
                                  ? "50%"
                                  : "75%",
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                          <span>Analytical</span>
                          <span>Empathetic</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <h3 className="text-sm font-medium">
                            Planning Style
                          </h3>
                          <span className="text-sm font-medium">
                            {userData.personality["planning-spontaneous"]}
                          </span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{
                              width:
                                userData.personality["planning-spontaneous"] ===
                                "Structured"
                                  ? "25%"
                                  : userData.personality[
                                      "planning-spontaneous"
                                    ] === "Flexible"
                                  ? "50%"
                                  : "75%",
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                          <span>Structured</span>
                          <span>Spontaneous</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <h3 className="text-sm font-medium">
                            Thinking Style
                          </h3>
                          <span className="text-sm font-medium">
                            {userData.personality["practical-creative"]}
                          </span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{
                              width:
                                userData.personality["practical-creative"] ===
                                "Practical"
                                  ? "25%"
                                  : userData.personality[
                                      "practical-creative"
                                    ] === "Balanced"
                                  ? "50%"
                                  : "75%",
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                          <span>Practical</span>
                          <span>Creative</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Personality Matching</p>
                          <p className="text-sm text-muted-foreground">
                            Our AI analyzes your personality traits to find
                            compatible matches. You tend to match best with
                            people who are{" "}
                            {userData.personality["introvert-extrovert"] ===
                            "Introvert"
                              ? "also introverted or ambiverts"
                              : userData.personality["introvert-extrovert"] ===
                                "Extrovert"
                              ? "also extroverted or ambiverts"
                              : "across the spectrum"}{" "}
                            and share your{" "}
                            {userData.personality[
                              "thinking-feeling"
                            ].toLowerCase()}{" "}
                            approach to decisions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full gap-1">
                      <Link href="/settings/profile">
                        <Edit className="h-4 w-4 mr-1" /> Update Personality
                        Profile
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Interests Tab */}
              <TabsContent value="interests" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>My Interests</CardTitle>
                    <CardDescription>
                      What you're passionate about
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
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

                    <div className="mt-8 space-y-4">
                      <h3 className="text-sm font-medium">
                        Interest Categories
                      </h3>

                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Arts & Culture</span>
                            <span className="text-sm text-muted-foreground">
                              3 interests
                            </span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{ width: "37.5%" }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Activities</span>
                            <span className="text-sm text-muted-foreground">
                              2 interests
                            </span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{ width: "25%" }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Learning</span>
                            <span className="text-sm text-muted-foreground">
                              2 interests
                            </span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{ width: "25%" }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Lifestyle</span>
                            <span className="text-sm text-muted-foreground">
                              1 interest
                            </span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{ width: "12.5%" }}
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
                      <Link href="/settings/profile">
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
    </div>
  );
}
