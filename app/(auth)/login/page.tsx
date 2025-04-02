import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const metadata: Metadata = {
  title: "Login | Anonymate",
  description: "Login to your Anonymate account",
};

export default function LoginPage() {
  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 px-4 py-12 dark:from-neutral-900 dark:to-neutral-950">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="hello@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm font-normal">
              Remember me
            </Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link href="/match" className="w-full">
            <Button className="w-full">
              Login
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-slate-900 hover:underline dark:text-slate-100"
            >
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
