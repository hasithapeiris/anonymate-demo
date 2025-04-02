import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Mail } from "lucide-react";

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

export const metadata: Metadata = {
  title: "Forgot Password | Anonymate",
  description: "Reset your Anonymate password",
};

export default function ForgotPasswordPage() {
  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 px-4 py-12 dark:from-neutral-900 dark:to-neutral-950">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Forgot password</CardTitle>
          <CardDescription>
            Enter your email address and we'll send you a link to reset your
            password
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
            <Mail className="h-6 w-6 text-slate-600 dark:text-slate-400" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="hello@example.com"
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">
            Send reset link
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="text-center text-sm">
            Remember your password?{" "}
            <Link
              href="/login"
              className="font-medium text-slate-900 hover:underline dark:text-slate-100"
            >
              Back to login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
