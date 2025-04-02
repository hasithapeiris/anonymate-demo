"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  CreditCard,
  Shield,
  BarChart3,
  Flag,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "User Management",
    href: "/admin/users",
    icon: <Users className="h-5 w-5" />,
    badge: "2,458",
  },
  {
    title: "Conversations",
    href: "/admin/conversations",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "Payments",
    href: "/admin/payments",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: "Content Moderation",
    href: "/admin/moderation",
    icon: <Shield className="h-5 w-5" />,
    badge: "12",
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: <Flag className="h-5 w-5" />,
    badge: "8",
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: <Settings className="h-5 w-5" />,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile sidebar on path change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Close mobile sidebar on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar - Desktop */}
      <aside
        className={`fixed inset-y-0 z-50 flex-col bg-background border-r transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-[78px]"
        } hidden md:flex`}
      >
        <div className="flex h-16 items-center border-b px-4">
          <Link href="/admin" className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            {isSidebarOpen && (
              <span className="text-xl font-bold">Anonymate</span>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1 py-2">
          <nav className="grid gap-1 px-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-muted ${
                  pathname === item.href
                    ? "bg-muted font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {item.icon}
                {isSidebarOpen && (
                  <div className="flex-1 flex justify-between items-center">
                    <span>{item.title}</span>
                    {item.badge && (
                      <Badge variant="outline" className="ml-auto">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                )}
                {!isSidebarOpen && item.badge && (
                  <Badge variant="outline" className="ml-auto">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <div className="border-t p-4">
          <div
            className={`flex items-center gap-3 ${
              isSidebarOpen ? "" : "justify-center"
            }`}
          >
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="/placeholder.svg?height=36&width=36"
                alt="Admin"
              />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            {isSidebarOpen && (
              <div className="flex-1">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">
                  admin@anonymate.com
                </p>
              </div>
            )}
            {isSidebarOpen && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </aside>

      {/* Sidebar - Mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-full max-w-xs flex-col bg-background border-r transition-transform duration-300 md:hidden ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center border-b px-4">
          <Link href="/admin" className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Anonymate</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto"
            onClick={() => setIsMobileOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1 py-2">
          <nav className="grid gap-1 px-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-muted ${
                  pathname === item.href
                    ? "bg-muted font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {item.icon}
                <div className="flex-1 flex justify-between items-center">
                  <span>{item.title}</span>
                  {item.badge && (
                    <Badge variant="outline" className="ml-auto">
                      {item.badge}
                    </Badge>
                  )}
                </div>
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="/placeholder.svg?height=36&width=36"
                alt="Admin"
              />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">
                admin@anonymate.com
              </p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 ${
          isSidebarOpen ? "md:ml-64" : "md:ml-[78px]"
        } transition-all duration-300 ease-in-out`}
      >
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="w-full flex-1 md:max-w-sm">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                5
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="Admin"
                    />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
