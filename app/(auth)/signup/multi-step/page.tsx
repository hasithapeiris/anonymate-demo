"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, User, Mail, Shield } from "lucide-react";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function MultiStepSignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "personal",
    agreeToTerms: false,
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      accountType: value,
    });
  };

  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 px-4 py-12 dark:from-neutral-900 dark:to-neutral-950">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">
              Create an account
            </CardTitle>
            <div className="text-sm font-medium">
              Step {step} of {totalSteps}
            </div>
          </div>
          <CardDescription>
            {step === 1 && "Let's start with your basic information"}
            {step === 2 && "Set up your account credentials"}
            {step === 3 && "Choose your account type"}
            {step === 4 && "Review and complete your registration"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <User className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <Mail className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="hello@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  required
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <Shield className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              </div>
              <div className="space-y-3">
                <Label>Account type</Label>
                <RadioGroup
                  value={formData.accountType}
                  onValueChange={handleRadioChange}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2 rounded-md border p-3 shadow-sm">
                    <RadioGroupItem value="personal" id="personal" />
                    <Label
                      htmlFor="personal"
                      className="flex-1 cursor-pointer font-normal"
                    >
                      <div className="font-medium">Personal</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        For individuals looking to connect
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3 shadow-sm">
                    <RadioGroupItem value="premium" id="premium" />
                    <Label
                      htmlFor="premium"
                      className="flex-1 cursor-pointer font-normal"
                    >
                      <div className="font-medium">Premium</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Enhanced features and priority matching
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <Check className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              </div>
              <div className="rounded-md bg-slate-50 p-4 dark:bg-slate-800/50">
                <h3 className="mb-2 font-medium">Account Information</h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="text-slate-500 dark:text-slate-400">
                      Name:
                    </span>{" "}
                    {formData.firstName} {formData.lastName}
                  </p>
                  <p>
                    <span className="text-slate-500 dark:text-slate-400">
                      Email:
                    </span>{" "}
                    {formData.email}
                  </p>
                  <p>
                    <span className="text-slate-500 dark:text-slate-400">
                      Account Type:
                    </span>{" "}
                    {formData.accountType === "personal"
                      ? "Personal"
                      : "Premium"}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      agreeToTerms: checked as boolean,
                    })
                  }
                  required
                />
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
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="flex w-full space-x-2">
            {step > 1 && (
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            )}
            {step < totalSteps ? (
              <Button
                className={`${step > 1 ? "flex-1" : "w-full"}`}
                onClick={handleNext}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button className="flex-1" disabled={!formData.agreeToTerms}>
                Complete Sign Up
                <Check className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
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
