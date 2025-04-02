"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Search,
  Filter,
  MoreHorizontal,
  Download,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Eye,
  Flag,
  Archive,
  Trash2,
} from "lucide-react";

// Mock conversation data
const conversations = [
  {
    id: "c1",
    user1: {
      id: "u1",
      nickname: "ThoughtfulExplorer",
      avatar: { color: "bg-primary/20" },
    },
    user2: {
      id: "u2",
      nickname: "MountainHiker",
      avatar: { color: "bg-green-500/20" },
    },
    lastMessage:
      "I completely agree with your perspective on that book. The author's use of symbolism was quite profound.",
    lastActivity: "10 minutes ago",
    status: "active",
    messageCount: 42,
    matchPercentage: 92,
    flags: 0,
  },
  {
    id: "c2",
    user1: {
      id: "u3",
      nickname: "CinemaEnthusiast",
      avatar: { color: "bg-amber-500/20" },
    },
    user2: {
      id: "u4",
      nickname: "PhilosophicalMind",
      avatar: { color: "bg-violet-500/20" },
    },
    lastMessage:
      "That's an interesting take on determinism. I've been thinking about free will lately.",
    lastActivity: "2 hours ago",
    status: "active",
    messageCount: 28,
    matchPercentage: 85,
    flags: 0,
  },
  {
    id: "c3",
    user1: {
      id: "u5",
      nickname: "JazzListener",
      avatar: { color: "bg-rose-500/20" },
    },
    user2: {
      id: "u6",
      nickname: "NaturePhotographer",
      avatar: { color: "bg-blue-500/20" },
    },
    lastMessage:
      "I'll send you that playlist we talked about. It has some great saxophone solos.",
    lastActivity: "1 day ago",
    status: "inactive",
    messageCount: 15,
    matchPercentage: 78,
    flags: 1,
  },
  {
    id: "c4",
    user1: {
      id: "u7",
      nickname: "BookwormDreamer",
      avatar: { color: "bg-emerald-500/20" },
    },
    user2: {
      id: "u8",
      nickname: "MeditationGuru",
      avatar: { color: "bg-indigo-500/20" },
    },
    lastMessage:
      "I found that meditation technique really helpful. My mind feels much clearer now.",
    lastActivity: "3 days ago",
    status: "active",
    messageCount: 37,
    matchPercentage: 91,
    flags: 0,
  },
  {
    id: "c5",
    user1: {
      id: "u9",
      nickname: "CulinaryArtist",
      avatar: { color: "bg-orange-500/20" },
    },
    user2: {
      id: "u10",
      nickname: "StarGazer",
      avatar: { color: "bg-cyan-500/20" },
    },
    lastMessage:
      "The recipe turned out great! I added a bit more garlic as you suggested.",
    lastActivity: "5 days ago",
    status: "inactive",
    messageCount: 22,
    matchPercentage: 82,
    flags: 0,
  },
  {
    id: "c6",
    user1: {
      id: "u2",
      nickname: "MountainHiker",
      avatar: { color: "bg-green-500/20" },
    },
    user2: {
      id: "u4",
      nickname: "PhilosophicalMind",
      avatar: { color: "bg-violet-500/20" },
    },
    lastMessage:
      "That trail sounds amazing! I've been looking for new hiking spots with good views.",
    lastActivity: "1 week ago",
    status: "archived",
    messageCount: 18,
    matchPercentage: 75,
    flags: 0,
  },
  {
    id: "c7",
    user1: {
      id: "u1",
      nickname: "ThoughtfulExplorer",
      avatar: { color: "bg-primary/20" },
    },
    user2: {
      id: "u9",
      nickname: "CulinaryArtist",
      avatar: { color: "bg-orange-500/20" },
    },
    lastMessage:
      "I've been trying to expand my culinary horizons. Any book recommendations?",
    lastActivity: "2 weeks ago",
    status: "flagged",
    messageCount: 12,
    matchPercentage: 68,
    flags: 2,
  },
];

export default function ConversationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter conversations based on search query and filters
  const filteredConversations = conversations.filter((convo) => {
    // Search filter
    const matchesSearch =
      convo.user1.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      convo.user2.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      convo.lastMessage.toLowerCase().includes(searchQuery.toLowerCase());

    // Status filter
    const matchesStatus =
      statusFilter === "all" || convo.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Conversation Management
          </h2>
          <p className="text-muted-foreground">
            Monitor and manage user conversations
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Conversations
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,287</div>
            <p className="text-xs text-muted-foreground mt-1">
              +18% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Messages Today
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,652</div>
            <p className="text-xs text-muted-foreground mt-1">
              +12% from yesterday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Response Time
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2m</div>
            <p className="text-xs text-muted-foreground mt-1">
              -0.5m from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Flagged Conversations
            </CardTitle>
            <Flag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-1">
              -3 from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end">
            <div className="flex-1 space-y-2">
              <label
                className="
text-sm font-medium"
              >
                Search Conversations
              </label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by user, message content..."
                  className="w-full pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:w-[400px]">
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="flagged">Flagged</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Sort By</label>
                <Select defaultValue="recent">
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="messages">Most Messages</SelectItem>
                    <SelectItem value="match">Highest Match %</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button variant="outline" size="icon" className="shrink-0">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Conversations Table */}
      <Card>
        <CardHeader>
          <CardTitle>Conversations</CardTitle>
          <CardDescription>
            Showing {filteredConversations.length} of {conversations.length}{" "}
            total conversations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Users</TableHead>
                <TableHead>Last Message</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Messages</TableHead>
                <TableHead>Match %</TableHead>
                <TableHead>Flags</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredConversations.map((convo) => (
                <TableRow key={convo.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <Avatar className="h-8 w-8 border-2 border-background">
                          <div
                            className={`h-full w-full rounded-full ${convo.user1.avatar.color} flex items-center justify-center`}
                          >
                            <span className="text-xs font-medium">
                              {convo.user1.nickname.charAt(0)}
                            </span>
                          </div>
                          <AvatarFallback>
                            {convo.user1.nickname.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8 border-2 border-background">
                          <div
                            className={`h-full w-full rounded-full ${convo.user2.avatar.color} flex items-center justify-center`}
                          >
                            <span className="text-xs font-medium">
                              {convo.user2.nickname.charAt(0)}
                            </span>
                          </div>
                          <AvatarFallback>
                            {convo.user2.nickname.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="ml-1">
                        <p className="text-sm font-medium truncate max-w-[150px]">
                          {convo.user1.nickname}
                        </p>
                        <p className="text-xs text-muted-foreground truncate max-w-[150px]">
                          {convo.user2.nickname}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm truncate max-w-[200px]">
                      {convo.lastMessage}
                    </p>
                  </TableCell>
                  <TableCell>{convo.lastActivity}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        convo.status === "active"
                          ? "outline"
                          : convo.status === "inactive"
                          ? "secondary"
                          : convo.status === "flagged"
                          ? "destructive"
                          : "outline"
                      }
                      className={
                        convo.status === "active"
                          ? "bg-green-500/10 text-green-500"
                          : convo.status === "archived"
                          ? "bg-muted text-muted-foreground"
                          : ""
                      }
                    >
                      {convo.status.charAt(0).toUpperCase() +
                        convo.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{convo.messageCount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        convo.matchPercentage >= 90 ? "default" : "secondary"
                      }
                    >
                      {convo.matchPercentage}%
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {convo.flags > 0 ? (
                      <Badge variant="destructive">{convo.flags}</Badge>
                    ) : (
                      <span className="text-muted-foreground">None</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Conversation
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {convo.status !== "archived" ? (
                          <DropdownMenuItem>
                            <Archive className="h-4 w-4 mr-2" />
                            Archive Conversation
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem>
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Restore Conversation
                          </DropdownMenuItem>
                        )}
                        {convo.status !== "flagged" ? (
                          <DropdownMenuItem>
                            <Flag className="h-4 w-4 mr-2" />
                            Flag Conversation
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem>
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Clear Flag
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Conversation
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
