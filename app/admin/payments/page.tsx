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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Filter,
  MoreHorizontal,
  Download,
  CreditCard,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  FileText,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  XCircle,
  BarChart3,
} from "lucide-react";

// Mock payment data
const payments = [
  {
    id: "p1",
    userId: "u1",
    userNickname: "ThoughtfulExplorer",
    amount: 9.99,
    status: "completed",
    date: "2024-03-15",
    type: "subscription",
    plan: "premium",
    method: "visa",
    last4: "4242",
  },
  {
    id: "p2",
    userId: "u2",
    userNickname: "MountainHiker",
    amount: 9.99,
    status: "completed",
    date: "2024-03-14",
    type: "subscription",
    plan: "premium",
    method: "mastercard",
    last4: "5555",
  },
  {
    id: "p3",
    userId: "u4",
    userNickname: "PhilosophicalMind",
    amount: 9.99,
    status: "completed",
    date: "2024-03-10",
    type: "subscription",
    plan: "premium",
    method: "visa",
    last4: "9876",
  },
  {
    id: "p4",
    userId: "u6",
    userNickname: "NaturePhotographer",
    amount: 9.99,
    status: "completed",
    date: "2024-03-05",
    type: "subscription",
    plan: "premium",
    method: "amex",
    last4: "3456",
  },
  {
    id: "p5",
    userId: "u8",
    userNickname: "MeditationGuru",
    amount: 9.99,
    status: "completed",
    date: "2024-03-01",
    type: "subscription",
    plan: "premium",
    method: "visa",
    last4: "1234",
  },
  {
    id: "p6",
    userId: "u10",
    userNickname: "StarGazer",
    amount: 9.99,
    status: "completed",
    date: "2024-02-28",
    type: "subscription",
    plan: "premium",
    method: "mastercard",
    last4: "7890",
  },
  {
    id: "p7",
    userId: "u3",
    userNickname: "CinemaEnthusiast",
    amount: 4.99,
    status: "failed",
    date: "2024-02-25",
    type: "subscription",
    plan: "basic",
    method: "visa",
    last4: "6543",
  },
  {
    id: "p8",
    userId: "u7",
    userNickname: "BookwormDreamer",
    amount: 4.99,
    status: "completed",
    date: "2024-02-20",
    type: "subscription",
    plan: "basic",
    method: "visa",
    last4: "8765",
  },
  {
    id: "p9",
    userId: "u9",
    userNickname: "CulinaryArtist",
    amount: 4.99,
    status: "pending",
    date: "2024-02-15",
    type: "subscription",
    plan: "basic",
    method: "mastercard",
    last4: "2345",
  },
  {
    id: "p10",
    userId: "u5",
    userNickname: "JazzListener",
    amount: 4.99,
    status: "refunded",
    date: "2024-02-10",
    type: "subscription",
    plan: "basic",
    method: "visa",
    last4: "5432",
  },
];

export default function PaymentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [planFilter, setPlanFilter] = useState("all");

  // Filter payments based on search query and filters
  const filteredPayments = payments.filter((payment) => {
    // Search filter
    const matchesSearch =
      payment.userNickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.userId.toLowerCase().includes(searchQuery.toLowerCase());

    // Status filter
    const matchesStatus =
      statusFilter === "all" || payment.status === statusFilter;

    // Plan filter
    const matchesPlan = planFilter === "all" || payment.plan === planFilter;

    return matchesSearch && matchesStatus && matchesPlan;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Payment Management
          </h2>
          <p className="text-muted-foreground">
            Manage subscriptions, payments, and billing
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-1">
            <RefreshCw className="h-4 w-4" />
            Sync Payments
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,389.00</div>
            <p className="text-xs text-muted-foreground mt-1">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Subscriptions
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,482</div>
            <p className="text-xs text-muted-foreground mt-1">
              +8% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Premium Conversion
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.8%</div>
            <p className="text-xs text-muted-foreground mt-1">
              +2.3% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Failed Payments
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2%</div>
            <p className="text-xs text-muted-foreground mt-1">
              -0.5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="analytics">Revenue Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          {/* Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-end">
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium">
                    Search Transactions
                  </label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search by user, transaction ID..."
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
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                        <SelectItem value="refunded">Refunded</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Plan</label>
                    <Select value={planFilter} onValueChange={setPlanFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by plan" />
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

          {/* Payments Table */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Transactions</CardTitle>
              <CardDescription>
                Showing {filteredPayments.length} of {payments.length} total
                transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">
                        {payment.id}
                      </TableCell>
                      <TableCell>
                        <div>
                          <div>{payment.userNickname}</div>
                          <div className="text-sm text-muted-foreground">
                            {payment.userId}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>${payment.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            payment.status === "completed"
                              ? "outline"
                              : payment.status === "pending"
                              ? "secondary"
                              : payment.status === "failed"
                              ? "destructive"
                              : "outline"
                          }
                          className={
                            payment.status === "completed"
                              ? "bg-green-500/10 text-green-500"
                              : payment.status === "refunded"
                              ? "bg-amber-500/10 text-amber-500"
                              : ""
                          }
                        >
                          {payment.status.charAt(0).toUpperCase() +
                            payment.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            payment.plan === "premium" ? "default" : "secondary"
                          }
                        >
                          {payment.plan.charAt(0).toUpperCase() +
                            payment.plan.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          <span>
                            {payment.method.charAt(0).toUpperCase() +
                              payment.method.slice(1)}{" "}
                            •••• {payment.last4}
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
                              <FileText className="h-4 w-4 mr-2" />
                              View Receipt
                            </DropdownMenuItem>
                            {payment.status === "pending" && (
                              <DropdownMenuItem>
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Mark as Completed
                              </DropdownMenuItem>
                            )}
                            {payment.status === "completed" && (
                              <DropdownMenuItem>
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Process Refund
                              </DropdownMenuItem>
                            )}
                            {payment.status === "failed" && (
                              <DropdownMenuItem>
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Retry Payment
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <XCircle className="h-4 w-4 mr-2" />
                              Cancel Transaction
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
        </TabsContent>

        <TabsContent value="subscriptions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Management</CardTitle>
              <CardDescription>
                Manage user subscription plans and settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">
                  Subscription management interface will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Analytics</CardTitle>
              <CardDescription>
                Detailed revenue metrics and trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">
                  Revenue analytics charts and graphs will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
