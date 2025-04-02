"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Send,
  Sparkles,
  Heart,
  PlusCircle,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  Filter,
  Search,
  Menu,
  MoreHorizontal,
  Trash2,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock conversation history with AI
const initialConversation = [
  {
    id: "1",
    role: "ai",
    content:
      "Hello! I'm your AI matchmaker. I can help you find compatible matches based on your interests, values, and conversation style. What kind of person are you looking to connect with?",
    timestamp: "2 days ago",
  },
  {
    id: "2",
    role: "user",
    content:
      "I'm looking for someone who enjoys philosophical discussions and loves nature.",
    timestamp: "2 days ago",
  },
  {
    id: "3",
    role: "ai",
    content:
      "Great! Philosophy and nature are wonderful interests. Could you tell me a bit more about what kind of philosophical topics interest you? And do you prefer someone who's more introverted or extroverted?",
    timestamp: "2 days ago",
  },
  {
    id: "4",
    role: "user",
    content:
      "I'm interested in existentialism and ethics. I think I'd prefer someone who's a bit introverted but still enjoys meaningful conversations.",
    timestamp: "2 days ago",
  },
  {
    id: "5",
    role: "ai",
    content:
      "I understand! Based on your preferences, I've found a few potential matches who enjoy philosophical discussions, particularly existentialism and ethics, have an appreciation for nature, and tend to be more introverted but value deep conversations.",
    timestamp: "2 days ago",
    suggestions: [
      {
        id: "p1",
        nickname: "ThoughtfulHiker",
        avatar: { style: "abstract", color: "bg-emerald-500/20" },
        matchPercentage: 89,
        interests: ["Philosophy", "Hiking", "Literature", "Photography"],
        conversationStyle: ["Thoughtful", "Introspective", "Curious"],
      },
      {
        id: "p2",
        nickname: "QuietThinker",
        avatar: { style: "geometric", color: "bg-blue-500/20" },
        matchPercentage: 85,
        interests: ["Ethics", "Nature Walks", "Poetry", "Meditation"],
        conversationStyle: ["Deep", "Reflective", "Calm"],
      },
    ],
  },
];

// Mock saved conversations
const savedConversations = [
  {
    id: "conv1",
    title: "Nature & Philosophy Matches",
    preview: "Looking for someone who enjoys philosophical discussions...",
    timestamp: "2 days ago",
    matchCount: 2,
  },
  {
    id: "conv2",
    title: "Art & Music Enthusiasts",
    preview: "Searching for creative people who appreciate visual arts...",
    timestamp: "1 week ago",
    matchCount: 3,
  },
  {
    id: "conv3",
    title: "Travel & Adventure",
    preview: "Finding someone who loves exploring new places...",
    timestamp: "2 weeks ago",
    matchCount: 4,
  },
  {
    id: "conv4",
    title: "Intellectual Conversations",
    preview: "Looking for deep thinkers who enjoy discussing ideas...",
    timestamp: "3 weeks ago",
    matchCount: 2,
  },
  {
    id: "conv5",
    title: "Outdoor Activities",
    preview: "Seeking active people who enjoy hiking and sports...",
    timestamp: "1 month ago",
    matchCount: 5,
  },
];

// Mock suggested conversation starters
const suggestedQueries = [
  "I'm looking for someone who enjoys deep conversations about life and meaning",
  "Find me matches who love art, music, and creative expression",
  "I want to meet someone who enjoys outdoor activities and adventure",
  "Looking for intellectually curious people who love learning new things",
  "Help me find matches with a good sense of humor and playful personality",
];

export default function AiMatchmakerPage() {
  const router = useRouter();
  const [messages, setMessages] = useState(initialConversation);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeConversation, setActiveConversation] = useState("conv1");
  const [conversations, setConversations] = useState(savedConversations);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [suggestedQuery, setSuggestedQuery] = useState<string | null>(null);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (suggestedQuery) {
      setInputMessage(suggestedQuery);
      setSuggestedQuery(null);
    }
  }, [suggestedQuery]);

  // Send message to AI
  const sendMessage = () => {
    if (inputMessage.trim() === "") return;

    // Add user message
    const userMessage = {
      id: `${messages.length + 1}`,
      role: "user",
      content: inputMessage,
      timestamp: "Just now",
    };

    setMessages([...messages, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = {
        id: `${messages.length + 2}`,
        role: "ai",
        content:
          "I've analyzed your preferences and found some potential matches that might interest you. These profiles have similar interests and communication styles to what you're looking for.",
        timestamp: "Just now",
        suggestions: [
          {
            id: "p3",
            nickname: "MindfulExplorer",
            avatar: { style: "abstract", color: "bg-violet-500/20" },
            matchPercentage: 92,
            interests: ["Philosophy", "Psychology", "Nature", "Writing"],
            conversationStyle: ["Analytical", "Thoughtful", "Articulate"],
          },
          {
            id: "p4",
            nickname: "ContemplativeSpirit",
            avatar: { style: "geometric", color: "bg-amber-500/20" },
            matchPercentage: 87,
            interests: ["Ethics", "Environmentalism", "Reading", "Mindfulness"],
            conversationStyle: ["Deep", "Considerate", "Authentic"],
          },
          {
            id: "p5",
            nickname: "PhilosophicalWanderer",
            avatar: { style: "minimal", color: "bg-rose-500/20" },
            matchPercentage: 84,
            interests: ["Existentialism", "Hiking", "Art", "Cultural Studies"],
            conversationStyle: ["Inquisitive", "Reflective", "Nuanced"],
          },
        ],
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };

  // Start a new conversation
  const startNewConversation = () => {
    const newConvId = `conv${conversations.length + 1}`;
    const newConversation = {
      id: newConvId,
      title: "New Conversation",
      preview: "Start a new conversation with the AI matchmaker...",
      timestamp: "Just now",
      matchCount: 0,
    };

    setConversations([newConversation, ...conversations]);
    setActiveConversation(newConvId);
    setMessages([
      {
        id: "new1",
        role: "ai",
        content:
          "Hello! I'm your AI matchmaker. I can help you find compatible matches based on your interests, values, and conversation style. What kind of person are you looking to connect with?",
        timestamp: "Just now",
      },
    ]);
  };

  // Delete a conversation
  const deleteConversation = (convId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setConversations(conversations.filter((conv) => conv.id !== convId));

    if (activeConversation === convId) {
      if (conversations.length > 1) {
        // Set the first conversation as active
        const firstRemainingConv = conversations.find(
          (conv) => conv.id !== convId
        );
        if (firstRemainingConv) {
          setActiveConversation(firstRemainingConv.id);
        }
      } else {
        // Create a new conversation if this was the last one
        startNewConversation();
      }
    }
  };

  // View a saved conversation
  const viewConversation = (convId: string) => {
    setActiveConversation(convId);
    setIsMobileSidebarOpen(false);

    // In a real app, you would fetch the conversation from your backend
    // For now, we'll just use the initial conversation
    setMessages(initialConversation);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex md:w-80 lg:w-96 border-r flex-col h-[calc(100vh-4rem)]">
          <div className="p-4 border-b">
            <Button
              onClick={startNewConversation}
              className="w-full justify-start gap-2"
            >
              <PlusCircle className="h-4 w-4" />
              New Conversation
            </Button>
          </div>

          <div className="p-2">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-9" />
            </div>

            <ScrollArea className="h-[calc(100vh-12rem)]">
              <div className="space-y-2 pr-2">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      activeConversation === conv.id
                        ? "bg-muted"
                        : "hover:bg-muted/50"
                    }`}
                    onClick={() => viewConversation(conv.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-1 overflow-hidden">
                        <p className="font-medium truncate">{conv.title}</p>
                        <p className="text-sm text-muted-foreground truncate">
                          {conv.preview}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{conv.timestamp}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{conv.matchCount} matches</span>
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Rename</DropdownMenuItem>
                          <DropdownMenuItem>Share</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-destructive"
                            onClick={(e) => deleteConversation(conv.id, e)}
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="mt-auto p-4 border-t">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="w-full gap-1">
                  <Filter className="h-4 w-4" />
                  Matching Preferences
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Matching Preferences</SheetTitle>
                  <SheetDescription>
                    Adjust your preferences to find better matches
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Age Range</h3>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        className="w-20"
                        defaultValue="18"
                      />
                      <span>to</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        className="w-20"
                        defaultValue="40"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Conversation Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Philosophy",
                        "Art",
                        "Science",
                        "Travel",
                        "Books",
                        "Music",
                        "Food",
                        "Sports",
                        "Technology",
                        "Nature",
                      ].map((topic) => (
                        <Badge
                          key={topic}
                          variant="outline"
                          className="cursor-pointer hover:bg-primary/10"
                        >
                          {topic}
                        </Badge>
                      ))}
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary"
                      >
                        + Add
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Personality Traits</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Thoughtful",
                        "Creative",
                        "Analytical",
                        "Adventurous",
                        "Empathetic",
                      ].map((trait) => (
                        <Badge
                          key={trait}
                          variant="outline"
                          className="cursor-pointer hover:bg-primary/10"
                        >
                          {trait}
                        </Badge>
                      ))}
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary"
                      >
                        + Add
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Match Criteria</h3>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label className="text-sm">
                          Minimum Match Percentage
                        </label>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                      <Input
                        type="range"
                        min="50"
                        max="100"
                        defaultValue="75"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <Button className="w-full">Apply Preferences</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </aside>

        {/* Sidebar - Mobile */}
        <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
          <SheetContent side="left" className="w-[85%] sm:w-[350px] p-0">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <Button
                  onClick={() => {
                    startNewConversation();
                    setIsMobileSidebarOpen(false);
                  }}
                  className="w-full justify-start gap-2"
                >
                  <PlusCircle className="h-4 w-4" />
                  New Conversation
                </Button>
              </div>

              <div className="p-2">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search conversations..."
                    className="pl-9"
                  />
                </div>

                <div className="space-y-2 pr-2 max-h-[calc(100vh-12rem)] overflow-y-auto">
                  {conversations.map((conv) => (
                    <div
                      key={conv.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        activeConversation === conv.id
                          ? "bg-muted"
                          : "hover:bg-muted/50"
                      }`}
                      onClick={() => viewConversation(conv.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="space-y-1 overflow-hidden">
                          <p className="font-medium truncate">{conv.title}</p>
                          <p className="text-sm text-muted-foreground truncate">
                            {conv.preview}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{conv.timestamp}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              <span>{conv.matchCount} matches</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={(e) => deleteConversation(conv.id, e)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto p-4 border-t">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-1"
                    >
                      <Filter className="h-4 w-4" />
                      Matching Preferences
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Matching Preferences</SheetTitle>
                      <SheetDescription>
                        Adjust your preferences to find better matches
                      </SheetDescription>
                    </SheetHeader>
                    <div className="py-6 space-y-6">
                      {/* Same preferences content as desktop */}
                      <Button className="w-full">Apply Preferences</Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col h-[calc(100vh-4rem)]">
          {/* Chat Header */}
          <div className="border-b p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsMobileSidebarOpen(true)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
                <h1 className="text-xl font-semibold">AI Matchmaker</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={startNewConversation}
                  className="gap-1"
                >
                  <PlusCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">New Chat</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="max-w-3xl mx-auto space-y-6">
              {messages.map((message) => (
                <div key={message.id} className="space-y-2">
                  <div
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex gap-3 max-w-[85%] ${
                        message.role === "user"
                          ? "flex-row-reverse"
                          : "flex-row"
                      }`}
                    >
                      {message.role === "ai" ? (
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                          <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center shrink-0 mt-1">
                          <User className="h-4 w-4" />
                        </div>
                      )}
                      <div>
                        <div
                          className={`${
                            message.role === "user"
                              ? "bg-primary/10 rounded-lg rounded-tr-none"
                              : "bg-muted rounded-lg rounded-tl-none"
                          } p-3`}
                        >
                          <p className="text-sm">{message.content}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Profile Suggestions */}
                  {message.suggestions && (
                    <div
                      className={`pl-11 space-y-3 ${
                        message.role === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      <p className="text-sm font-medium">Suggested Matches:</p>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {message.suggestions.map((profile) => (
                          <Card key={profile.id} className="overflow-hidden">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <div
                                  className={`h-12 w-12 rounded-full ${profile.avatar.color} flex items-center justify-center shrink-0`}
                                >
                                  <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="space-y-1 overflow-hidden">
                                  <div className="flex items-center justify-between">
                                    <p className="font-medium truncate">
                                      {profile.nickname}
                                    </p>
                                    <Badge
                                      variant="outline"
                                      className="bg-primary/10 text-primary text-xs"
                                    >
                                      {profile.matchPercentage}%
                                    </Badge>
                                  </div>
                                  <div className="flex flex-wrap gap-1">
                                    {profile.interests
                                      .slice(0, 2)
                                      .map((interest) => (
                                        <Badge
                                          key={interest}
                                          variant="secondary"
                                          className="text-xs"
                                        >
                                          {interest}
                                        </Badge>
                                      ))}
                                    {profile.interests.length > 2 && (
                                      <Badge
                                        variant="secondary"
                                        className="text-xs"
                                      >
                                        +{profile.interests.length - 2}
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Heart className="h-3 w-3" />
                                    <span>
                                      {profile.conversationStyle.join(", ")}
                                    </span>
                                  </div>
                                  <Button
                                    size="sm"
                                    className="w-full mt-2"
                                    onClick={() =>
                                      router.push(`/matchmaking/${profile.id}`)
                                    }
                                  >
                                    View Profile
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <p className="text-sm">Was this helpful?</p>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="ml-auto gap-1"
                        >
                          <RefreshCw className="h-4 w-4" />
                          <span>Refine Results</span>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[80%]">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="bg-muted rounded-lg rounded-tl-none p-3">
                        <div className="flex space-x-2">
                          <div className="h-2 w-2 rounded-full bg-muted-foreground/30 animate-bounce"></div>
                          <div
                            className="h-2 w-2 rounded-full bg-muted-foreground/30 animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="h-2 w-2 rounded-full bg-muted-foreground/30 animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Thinking...
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Suggested Queries - Only show for new conversations */}
              {messages.length <= 2 && (
                <div className="py-3 mb-3">
                  <p className="text-sm font-medium mb-2">Try asking about:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQueries.map((query, index) => (
                      <button
                        key={index}
                        className="px-3 py-1.5 text-sm bg-muted rounded-full whitespace-nowrap hover:bg-muted/80 transition-colors"
                        onClick={() => setSuggestedQuery(query)}
                      >
                        {query}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="border-t p-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Ask the AI matchmaker..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  className="flex-1"
                />
                <Button
                  size="icon"
                  onClick={sendMessage}
                  disabled={inputMessage.trim() === "" || isLoading}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                AI uses your profile and preferences to find matches. Your
                conversations are saved for future reference.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
