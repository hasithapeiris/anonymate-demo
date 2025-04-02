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
  title: "Sign Up | Anonymate",
  description: "Create your Anonymate account",
};

export default function SignUpPage() {
  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 px-4 py-12 dark:from-neutral-900 dark:to-neutral-950">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            Create an account
          </CardTitle>
          <CardDescription>
            Enter your information to get started
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
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input id="confirmPassword" type="password" required />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-sm font-normal">
              I agree to the{" "}
              <Link
                href="/terms"
                className="font-medium text-slate-900 hover:underline dark:text-slate-100"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-medium text-slate-900 hover:underline dark:text-slate-100"
              >
                Privacy Policy
              </Link>
            </Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link href="/create-profile" className="w-full">
            <Button className="w-full">
              Create account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-slate-900 hover:underline dark:text-slate-100"
            >
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
