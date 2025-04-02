"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageSquareText,
  User,
  Search,
  Clock,
  Users,
  Plus,
  X,
} from "lucide-react";

// Mock conversation data
const conversations = [
  {
    id: "1",
    nickname: "ThoughtfulReader",
    avatar: { style: "abstract", color: "bg-blue-500/20" },
    lastMessage:
      "I completely agree with your perspective on that book. The author's use of symbolism was quite profound.",
    timestamp: "10:42 AM",
    unread: 2,
    online: true,
    expiresIn: "29 days",
    matchPercentage: 92,
  },
  {
    id: "2",
    nickname: "MountainHiker",
    avatar: { style: "geometric", color: "bg-green-500/20" },
    lastMessage:
      "That trail sounds amazing! I've been looking for new hiking spots with good views.",
    timestamp: "Yesterday",
    unread: 0,
    online: false,
    expiresIn: "14 days",
    matchPercentage: 85,
  },
  {
    id: "3",
    nickname: "CinemaEnthusiast",
    avatar: { style: "minimal", color: "bg-amber-500/20" },
    lastMessage:
      "Have you seen that new film yet? The cinematography was breathtaking.",
    timestamp: "2 days ago",
    unread: 0,
    online: false,
    expiresIn: "21 days",
    matchPercentage: 78,
  },
  {
    id: "4",
    nickname: "PhilosophicalMind",
    avatar: { style: "abstract", color: "bg-violet-500/20" },
    lastMessage:
      "That's an interesting take on determinism. I've been thinking about free will lately.",
    timestamp: "3 days ago",
    unread: 0,
    online: true,
    expiresIn: "25 days",
    matchPercentage: 94,
  },
  {
    id: "5",
    nickname: "JazzListener",
    avatar: { style: "geometric", color: "bg-rose-500/20" },
    lastMessage:
      "I'll send you that playlist we talked about. It has some great saxophone solos.",
    timestamp: "1 week ago",
    unread: 0,
    online: false,
    expiresIn: "7 days",
    matchPercentage: 81,
  },
];

// Mystery chat rooms
const mysteryRooms = [
  {
    id: "m1",
    name: "Philosophy & Ethics",
    participants: 12,
    active: true,
    description: "Discussing the trolley problem and other ethical dilemmas",
  },
  {
    id: "m2",
    name: "Book Lovers",
    participants: 8,
    active: true,
    description: "Current topic: dystopian fiction and its relevance today",
  },
  {
    id: "m3",
    name: "Travel Stories",
    participants: 15,
    active: true,
    description: "Share your most memorable travel experiences",
  },
  {
    id: "m4",
    name: "Music Appreciation",
    participants: 6,
    active: false,
    description: "Exploring different genres and their cultural impact",
  },
];

export default function MessagesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter conversations based on search query
  const filteredConversations = conversations.filter((convo) =>
    convo.nickname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-8">
        <div className="grid gap-8 md:grid-cols-[320px_1fr]">
          {/* Conversations Sidebar */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Messages</h2>
              <Button size="sm" variant="outline" className="gap-1">
                <Plus className="h-4 w-4" />
                <span className="sr-only md:not-sr-only">New Chat</span>
              </Button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <Tabs defaultValue="direct" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="direct">Direct Messages</TabsTrigger>
                <TabsTrigger value="mystery">Mystery Chats</TabsTrigger>
              </TabsList>

              {/* Direct Messages Tab */}
              <TabsContent value="direct" className="space-y-2 pt-2">
                {filteredConversations.length > 0 ? (
                  filteredConversations.map((convo) => (
                    <button
                      key={convo.id}
                      className="w-full text-left"
                      onClick={() => router.push(`/messages/${convo.id}`)}
                    >
                      <div
                        className={`rounded-lg p-3 transition-colors hover:bg-muted ${
                          convo.unread > 0 ? "bg-muted/50" : ""
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <div
                              className={`h-10 w-10 rounded-full ${convo.avatar.color} flex items-center justify-center`}
                            >
                              <User className="h-5 w-5 text-primary" />
                            </div>
                            {convo.online && (
                              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-background"></span>
                            )}
                          </div>
                          <div className="flex-1 space-y-1 overflow-hidden">
                            <div className="flex items-center justify-between">
                              <p className="font-medium truncate">
                                {convo.nickname}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {convo.timestamp}
                              </p>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">
                              {convo.lastMessage}
                            </p>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="text-xs px-1 py-0 h-5"
                              >
                                {convo.matchPercentage}% Match
                              </Badge>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>Expires in {convo.expiresIn}</span>
                              </div>
                            </div>
                          </div>
                          {convo.unread > 0 && (
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                              <span className="text-[10px] font-medium text-primary-foreground">
                                {convo.unread}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="py-12 text-center">
                    <MessageSquareText className="mx-auto h-12 w-12 text-muted-foreground opacity-20" />
                    <h3 className="mt-4 text-lg font-medium">
                      No conversations found
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {searchQuery
                        ? "Try a different search term"
                        : "Start matching to begin conversations"}
                    </p>
                    {searchQuery ? (
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => setSearchQuery("")}
                      >
                        Clear Search
                      </Button>
                    ) : (
                      <Button className="mt-4" asChild>
                        <Link href="/matchmaking">Find Matches</Link>
                      </Button>
                    )}
                  </div>
                )}
              </TabsContent>

              {/* Mystery Chats Tab */}
              <TabsContent value="mystery" className="space-y-4 pt-2">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Mystery Chat Rooms</p>
                      <p className="text-sm text-muted-foreground">
                        Join anonymous group discussions on various topics. All
                        chats are temporary and disappear after 24 hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {mysteryRooms.map((room) => (
                    <div key={room.id} className="rounded-lg border p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{room.name}</h3>
                            {room.active ? (
                              <Badge
                                variant="outline"
                                className="bg-green-500/10 text-green-500 text-xs"
                              >
                                Active
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="text-xs">
                                Scheduled
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {room.description}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <Users className="h-3 w-3" />
                          <span>{room.participants}</span>
                        </Badge>
                      </div>
                      <div className="mt-3">
                        <Button
                          size="sm"
                          className="w-full"
                          disabled={!room.active}
                          onClick={() =>
                            router.push(`/messages/mystery/${room.id}`)
                          }
                        >
                          {room.active ? "Join Chat" : "Starts in 2 hours"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button variant="outline" className="w-full">
                    View All Mystery Chats
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Empty State / Select a conversation */}
          <div className="hidden md:flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
              <MessageSquareText className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold">Select a Conversation</h3>
              <p className="text-muted-foreground mt-2">
                Choose a conversation from the sidebar or start a new chat to
                begin messaging.
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Button asChild>
                  <Link href="/matchmaking">Find New Matches</Link>
                </Button>
                <Button variant="outline">Join Mystery Chat</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
