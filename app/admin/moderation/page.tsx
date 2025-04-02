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
  CardFooter,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Search,
  Filter,
  MoreHorizontal,
  Shield,
  Flag,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Eye,
  User,
  Ban,
} from "lucide-react";

// Mock flagged content data
const flaggedContent = [
  {
    id: "f1",
    type: "message",
    content:
      "Hey, I'm actually selling some products on the side. Would you be interested in checking out my website?",
    reportedBy: "u2",
    reporterNickname: "MountainHiker",
    reportedUser: "u5",
    reportedUserNickname: "JazzListener",
    reason: "spam",
    status: "pending",
    date: "2024-03-15",
    severity: "medium",
  },
  {
    id: "f2",
    type: "message",
    content:
      "You're so stupid, nobody will ever match with you on this platform.",
    reportedBy: "u3",
    reporterNickname: "CinemaEnthusiast",
    reportedUser: "u9",
    reportedUserNickname: "CulinaryArtist",
    reason: "harassment",
    status: "pending",
    date: "2024-03-14",
    severity: "high",
  },
  {
    id: "f3",
    type: "profile",
    content:
      "Bio contains inappropriate language and references to illegal activities.",
    reportedBy: "u1",
    reporterNickname: "ThoughtfulExplorer",
    reportedUser: "u7",
    reportedUserNickname: "BookwormDreamer",
    reason: "inappropriate",
    status: "pending",
    date: "2024-03-13",
    severity: "high",
  },
  {
    id: "f4",
    type: "message",
    content:
      "Can you send me your phone number? I'd rather chat off this platform.",
    reportedBy: "u4",
    reporterNickname: "PhilosophicalMind",
    reportedUser: "u10",
    reportedUserNickname: "StarGazer",
    reason: "personal_info",
    status: "resolved",
    date: "2024-03-10",
    severity: "low",
  },
  {
    id: "f5",
    type: "message",
    content:
      "I don't think this conversation is going anywhere. Let's just end it here.",
    reportedBy: "u6",
    reporterNickname: "NaturePhotographer",
    reportedUser: "u8",
    reportedUserNickname: "MeditationGuru",
    reason: "other",
    status: "dismissed",
    date: "2024-03-08",
    severity: "low",
  },
  {
    id: "f6",
    type: "profile",
    content:
      "Profile picture appears to be a celebrity photo, not the actual user.",
    reportedBy: "u8",
    reporterNickname: "MeditationGuru",
    reportedUser: "u2",
    reportedUserNickname: "MountainHiker",
    reason: "fake_profile",
    status: "pending",
    date: "2024-03-07",
    severity: "medium",
  },
  {
    id: "f7",
    type: "message",
    content:
      "I can help you make a lot of money with this investment opportunity. Just need your bank details.",
    reportedBy: "u10",
    reporterNickname: "StarGazer",
    reportedUser: "u3",
    reportedUserNickname: "CinemaEnthusiast",
    reason: "scam",
    status: "pending",
    date: "2024-03-05",
    severity: "high",
  },
];

// Mock AI flagged content
const aiFlags = [
  {
    id: "ai1",
    type: "message",
    content: "I know where you live. I saw you at the grocery store yesterday.",
    user: "u5",
    userNickname: "JazzListener",
    reason: "threatening",
    status: "pending",
    date: "2024-03-15",
    severity: "high",
    confidence: 0.92,
  },
  {
    id: "ai2",
    type: "message",
    content: "Let me give you my Instagram, it's @real_person123",
    user: "u9",
    userNickname: "CulinaryArtist",
    reason: "external_contact",
    status: "pending",
    date: "2024-03-14",
    severity: "medium",
    confidence: 0.85,
  },
  {
    id: "ai3",
    type: "profile",
    content:
      "Bio contains potentially inappropriate language that may violate community guidelines.",
    user: "u3",
    userNickname: "CinemaEnthusiast",
    reason: "inappropriate",
    status: "pending",
    date: "2024-03-12",
    severity: "medium",
    confidence: 0.78,
  },
];

export default function ModerationPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("pending");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  // Filter flagged content based on search query and filters
  const filteredContent = flaggedContent.filter((content) => {
    // Search filter
    const matchesSearch =
      content.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.reportedUserNickname
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      content.reporterNickname
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    // Status filter
    const matchesStatus =
      statusFilter === "all" || content.status === statusFilter;

    // Severity filter
    const matchesSeverity =
      severityFilter === "all" || content.severity === severityFilter;

    return matchesSearch && matchesStatus && matchesSeverity;
  });

  // Filter AI flagged content
  const filteredAiContent = aiFlags.filter((content) => {
    // Status filter
    const matchesStatus =
      statusFilter === "all" || content.status === statusFilter;

    // Severity filter
    const matchesSeverity =
      severityFilter === "all" || content.severity === severityFilter;

    return matchesStatus && matchesSeverity;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Content Moderation
          </h2>
          <p className="text-muted-foreground">
            Review and moderate flagged content and user reports
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-1">
            <Shield className="h-4 w-4" />
            Moderation Settings
          </Button>
          <Button className="gap-1">
            <Flag className="h-4 w-4" />
            View All Reports
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Reports
            </CardTitle>
            <Flag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-1">
              5 high priority
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              AI Flagged Content
            </CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">
              1 high priority
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Resolved Today
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">
              +3 from yesterday
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
            <div className="text-2xl font-bold">1.8h</div>
            <p className="text-xs text-muted-foreground mt-1">
              -0.5h from last week
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="user-reports" className="space-y-4">
        <TabsList>
          <TabsTrigger value="user-reports">User Reports</TabsTrigger>
          <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
        </TabsList>

        <TabsContent value="user-reports" className="space-y-4">
          {/* Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-end">
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium">Search Reports</label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search by content, user..."
                      className="w-full pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:w-[400px]">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Status</label>
                    <Select
                      value={statusFilter}
                      onValueChange={setStatusFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                        <SelectItem value="dismissed">Dismissed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Severity</label>
                    <Select
                      value={severityFilter}
                      onValueChange={setSeverityFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Severities</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
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

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Reports List */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>User Reports</CardTitle>
                <CardDescription>
                  Showing {filteredContent.length} of {flaggedContent.length}{" "}
                  total reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Reported User</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContent.map((report) => (
                      <TableRow
                        key={report.id}
                        className={
                          selectedReport === report.id ? "bg-muted" : ""
                        }
                        onClick={() => setSelectedReport(report.id)}
                      >
                        <TableCell>
                          <Badge variant="outline">
                            {report.type === "message" ? (
                              <MessageSquare className="h-3 w-3 mr-1" />
                            ) : (
                              <User className="h-3 w-3 mr-1" />
                            )}
                            {report.type.charAt(0).toUpperCase() +
                              report.type.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>
                                {report.reportedUserNickname.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span>{report.reportedUserNickname}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              report.reason === "harassment" ||
                              report.reason === "scam" ||
                              report.reason === "threatening"
                                ? "destructive"
                                : report.reason === "spam" ||
                                  report.reason === "fake_profile"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {report.reason.replace("_", " ")}
                          </Badge>
                        </TableCell>
                        <TableCell>{report.date}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              report.severity === "high"
                                ? "bg-red-500/10 text-red-500"
                                : report.severity === "medium"
                                ? "bg-amber-500/10 text-amber-500"
                                : "bg-green-500/10 text-green-500"
                            }
                          >
                            {report.severity.charAt(0).toUpperCase() +
                              report.severity.slice(1)}
                          </Badge>
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
                              <DropdownMenuItem
                                onClick={() => setSelectedReport(report.id)}
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <User className="h-4 w-4 mr-2" />
                                View User Profile
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Mark as Resolved
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <XCircle className="h-4 w-4 mr-2" />
                                Dismiss Report
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-amber-500">
                                <AlertTriangle className="h-4 w-4 mr-2" />
                                Issue Warning
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Ban className="h-4 w-4 mr-2" />
                                Suspend User
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

            {/* Report Details */}
            <Card className="lg:row-span-2">
              <CardHeader>
                <CardTitle>Report Details</CardTitle>
                <CardDescription>
                  {selectedReport
                    ? "Review and take action on this report"
                    : "Select a report to view details"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedReport ? (
                  (() => {
                    const report = flaggedContent.find(
                      (r) => r.id === selectedReport
                    );
                    if (!report) return null;

                    return (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h3 className="text-sm font-medium">
                            Reported Content
                          </h3>
                          <div className="rounded-md border p-4 text-sm">
                            {report.content}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h3 className="text-sm font-medium">
                              Reported User
                            </h3>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback>
                                  {report.reportedUserNickname.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">
                                  {report.reportedUserNickname}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  ID: {report.reportedUser}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-sm font-medium">Reported By</h3>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback>
                                  {report.reporterNickname.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">
                                  {report.reporterNickname}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  ID: {report.reportedBy}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-sm font-medium">
                            Report Information
                          </h3>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-muted-foreground">
                                Report Type:
                              </p>
                              <p className="font-medium">
                                {report.type.charAt(0).toUpperCase() +
                                  report.type.slice(1)}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Reason:</p>
                              <p className="font-medium">
                                {report.reason.replace("_", " ")}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">
                                Date Reported:
                              </p>
                              <p className="font-medium">{report.date}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Severity:</p>
                              <p className="font-medium">
                                {report.severity.charAt(0).toUpperCase() +
                                  report.severity.slice(1)}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Status:</p>
                              <p className="font-medium">
                                {report.status.charAt(0).toUpperCase() +
                                  report.status.slice(1)}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-sm font-medium">AI Analysis</h3>
                          <div className="rounded-md border p-4 text-sm">
                            <p className="text-muted-foreground">
                              Content violates community guidelines with 87%
                              confidence.
                            </p>
                            <p className="text-muted-foreground mt-2">
                              Detected categories:
                            </p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              <Badge
                                variant="outline"
                                className="bg-red-500/10 text-red-500"
                              >
                                Harassment
                              </Badge>
                              <Badge variant="outline">Spam</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  <div className="flex flex-col items-center justify-center h-[400px] text-center">
                    <Shield className="h-12 w-12 text-muted-foreground opacity-20" />
                    <h3 className="mt-4 text-lg font-medium">
                      No report selected
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Select a report from the list to view its details
                    </p>
                  </div>
                )}
              </CardContent>
              {selectedReport && (
                <CardFooter className="flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <Button variant="outline" className="w-full">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Resolve
                    </Button>
                    <Button variant="outline" className="w-full">
                      <XCircle className="h-4 w-4 mr-2" />
                      Dismiss
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <Button variant="outline" className="w-full text-amber-500">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Warn User
                    </Button>
                    <Button variant="destructive" className="w-full">
                      <Ban className="h-4 w-4 mr-2" />
                      Suspend User
                    </Button>
                  </div>
                </CardFooter>
              )}
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ai-flagged" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Flagged Content</CardTitle>
              <CardDescription>
                Content automatically flagged by our AI moderation system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Confidence</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAiContent.map((flag) => (
                    <TableRow key={flag.id}>
                      <TableCell>
                        <Badge variant="outline">
                          {flag.type === "message" ? (
                            <MessageSquare className="h-3 w-3 mr-1" />
                          ) : (
                            <User className="h-3 w-3 mr-1" />
                          )}
                          {flag.type.charAt(0).toUpperCase() +
                            flag.type.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback>
                              {flag.userNickname.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span>{flag.userNickname}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            flag.reason === "threatening"
                              ? "destructive"
                              : flag.reason === "external_contact"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {flag.reason.replace("_", " ")}
                        </Badge>
                      </TableCell>
                      <TableCell>{flag.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            flag.severity === "high"
                              ? "bg-red-500/10 text-red-500"
                              : flag.severity === "medium"
                              ? "bg-amber-500/10 text-amber-500"
                              : "bg-green-500/10 text-green-500"
                          }
                        >
                          {flag.severity.charAt(0).toUpperCase() +
                            flag.severity.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-16 rounded-full bg-muted overflow-hidden">
                            <div
                              className={`h-full ${
                                flag.confidence > 0.9
                                  ? "bg-red-500"
                                  : flag.confidence > 0.8
                                  ? "bg-amber-500"
                                  : "bg-green-500"
                              }`}
                              style={{ width: `${flag.confidence * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs">
                            {Math.round(flag.confidence * 100)}%
                          </span>
                        </div>
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
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <User className="h-4 w-4 mr-2" />
                              View User Profile
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Approve Content
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <XCircle className="h-4 w-4 mr-2" />
                              Remove Content
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-amber-500">
                              <AlertTriangle className="h-4 w-4 mr-2" />
                              Issue Warning
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Ban className="h-4 w-4 mr-2" />
                              Suspend User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resolved" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resolved Reports</CardTitle>
              <CardDescription>
                Previously resolved content reports and moderation actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">
                  Resolved reports history will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
