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
  User,
  UserPlus,
  ChevronLeft,
  ChevronRight,
  Shield,
  Ban,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";

// Mock user data
const users = [
  {
    id: "u1",
    nickname: "ThoughtfulExplorer",
    email: "user1@example.com",
    status: "active",
    subscription: "premium",
    joinDate: "2023-11-15",
    lastActive: "2 hours ago",
    reports: 0,
    avatar: { style: "abstract", color: "bg-primary/20" },
  },
  {
    id: "u2",
    nickname: "MountainHiker",
    email: "user2@example.com",
    status: "active",
    subscription: "premium",
    joinDate: "2023-12-02",
    lastActive: "5 minutes ago",
    reports: 0,
    avatar: { style: "geometric", color: "bg-green-500/20" },
  },
  {
    id: "u3",
    nickname: "CinemaEnthusiast",
    email: "user3@example.com",
    status: "inactive",
    subscription: "basic",
    joinDate: "2024-01-10",
    lastActive: "3 days ago",
    reports: 1,
    avatar: { style: "minimal", color: "bg-amber-500/20" },
  },
  {
    id: "u4",
    nickname: "PhilosophicalMind",
    email: "user4@example.com",
    status: "active",
    subscription: "premium",
    joinDate: "2023-10-05",
    lastActive: "1 day ago",
    reports: 0,
    avatar: { style: "abstract", color: "bg-violet-500/20" },
  },
  {
    id: "u5",
    nickname: "JazzListener",
    email: "user5@example.com",
    status: "suspended",
    subscription: "basic",
    joinDate: "2023-09-20",
    lastActive: "2 weeks ago",
    reports: 3,
    avatar: { style: "geometric", color: "bg-rose-500/20" },
  },
  {
    id: "u6",
    nickname: "NaturePhotographer",
    email: "user6@example.com",
    status: "active",
    subscription: "premium",
    joinDate: "2024-02-01",
    lastActive: "30 minutes ago",
    reports: 0,
    avatar: { style: "minimal", color: "bg-blue-500/20" },
  },
  {
    id: "u7",
    nickname: "BookwormDreamer",
    email: "user7@example.com",
    status: "active",
    subscription: "basic",
    joinDate: "2024-01-15",
    lastActive: "1 hour ago",
    reports: 0,
    avatar: { style: "abstract", color: "bg-emerald-500/20" },
  },
  {
    id: "u8",
    nickname: "MeditationGuru",
    email: "user8@example.com",
    status: "active",
    subscription: "premium",
    joinDate: "2023-11-30",
    lastActive: "4 hours ago",
    reports: 0,
    avatar: { style: "geometric", color: "bg-indigo-500/20" },
  },
  {
    id: "u9",
    nickname: "CulinaryArtist",
    email: "user9@example.com",
    status: "warning",
    subscription: "basic",
    joinDate: "2023-12-20",
    lastActive: "2 days ago",
    reports: 2,
    avatar: { style: "minimal", color: "bg-orange-500/20" },
  },
  {
    id: "u10",
    nickname: "StarGazer",
    email: "user10@example.com",
    status: "active",
    subscription: "premium",
    joinDate: "2024-02-10",
    lastActive: "15 minutes ago",
    reports: 0,
    avatar: { style: "abstract", color: "bg-cyan-500/20" },
  },
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [subscriptionFilter, setSubscriptionFilter] = useState("all");

  // Filter users based on search query and filters
  const filteredUsers = users.filter((user) => {
    // Search filter
    const matchesSearch =
      user.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.toLowerCase().includes(searchQuery.toLowerCase());

    // Status filter
    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;

    // Subscription filter
    const matchesSubscription =
      subscriptionFilter === "all" || user.subscription === subscriptionFilter;

    return matchesSearch && matchesStatus && matchesSubscription;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">User Management</h2>
          <p className="text-muted-foreground">
            Manage users, profiles, and account settings
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-1">
            <UserPlus className="h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end">
            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium">Search Users</label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name, email, or ID..."
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
                    <SelectItem value="suspended">Suspended</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subscription</label>
                <Select
                  value={subscriptionFilter}
                  onValueChange={setSubscriptionFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by subscription" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Plans</SelectItem>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
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

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>
            Showing {filteredUsers.length} of {users.length} total users
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Subscription</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Reports</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <div
                          className={`h-full w-full rounded-full ${user.avatar.color} flex items-center justify-center`}
                        >
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <AvatarFallback>
                          {user.nickname.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.nickname}</div>
                        <div className="text-sm text-muted-foreground">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === "active"
                          ? "outline"
                          : user.status === "inactive"
                          ? "secondary"
                          : user.status === "suspended"
                          ? "destructive"
                          : "outline"
                      }
                      className={
                        user.status === "active"
                          ? "bg-green-500/10 text-green-500"
                          : user.status === "warning"
                          ? "bg-amber-500/10 text-amber-500"
                          : ""
                      }
                    >
                      {user.status.charAt(0).toUpperCase() +
                        user.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.subscription === "premium"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {user.subscription.charAt(0).toUpperCase() +
                        user.subscription.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell>
                    {user.reports > 0 ? (
                      <Badge variant="destructive">{user.reports}</Badge>
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
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit User
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Shield className="h-4 w-4 mr-2" />
                          Reset Password
                        </DropdownMenuItem>
                        {user.status !== "suspended" ? (
                          <DropdownMenuItem className="text-amber-500">
                            <Ban className="h-4 w-4 mr-2" />
                            Suspend User
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="text-green-500">
                            <User className="h-4 w-4 mr-2" />
                            Reactivate User
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete User
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
