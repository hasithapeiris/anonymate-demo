"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Sparkles,
  User,
  Check,
} from "lucide-react";

// Avatar options
const avatarStyles = [
  {
    id: "abstract",
    name: "Abstract",
    colors: [
      "bg-primary/20",
      "bg-blue-500/20",
      "bg-green-500/20",
      "bg-amber-500/20",
      "bg-rose-500/20",
    ],
  },
  {
    id: "geometric",
    name: "Geometric",
    colors: [
      "bg-violet-500/20",
      "bg-cyan-500/20",
      "bg-emerald-500/20",
      "bg-yellow-500/20",
      "bg-red-500/20",
    ],
  },
  {
    id: "minimal",
    name: "Minimal",
    colors: [
      "bg-indigo-500/20",
      "bg-teal-500/20",
      "bg-lime-500/20",
      "bg-orange-500/20",
      "bg-pink-500/20",
    ],
  },
];

// Interest categories
const interestCategories = [
  {
    name: "Arts & Culture",
    options: [
      "Literature",
      "Visual Arts",
      "Music",
      "Theater",
      "Film",
      "Photography",
      "Dance",
      "Architecture",
    ],
  },
  {
    name: "Activities",
    options: [
      "Hiking",
      "Cooking",
      "Travel",
      "Gaming",
      "Sports",
      "Yoga",
      "Meditation",
      "Gardening",
    ],
  },
  {
    name: "Learning",
    options: [
      "Science",
      "History",
      "Philosophy",
      "Psychology",
      "Technology",
      "Languages",
      "Politics",
      "Economics",
    ],
  },
  {
    name: "Lifestyle",
    options: [
      "Food",
      "Fashion",
      "Fitness",
      "Sustainability",
      "Minimalism",
      "DIY",
      "Pets",
      "Collecting",
    ],
  },
];

// Personality traits
const personalityTraits = [
  {
    id: "introvert-extrovert",
    name: "Social Energy",
    options: ["Introvert", "Ambivert", "Extrovert"],
  },
  {
    id: "thinking-feeling",
    name: "Decision Making",
    options: ["Analytical", "Balanced", "Empathetic"],
  },
  {
    id: "planning-spontaneous",
    name: "Planning Style",
    options: ["Structured", "Flexible", "Spontaneous"],
  },
  {
    id: "practical-creative",
    name: "Thinking Style",
    options: ["Practical", "Balanced", "Creative"],
  },
];

export default function CreateProfilePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedAvatar, setSelectedAvatar] = useState({
    style: "abstract",
    color: "bg-primary/20",
  });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [profile, setProfile] = useState({
    nickname: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    bio: "",
    personality: {
      "introvert-extrovert": "",
      "thinking-feeling": "",
      "planning-spontaneous": "",
      "practical-creative": "",
    },
  });

  const handleInterestToggle = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      if (selectedInterests.length < 8) {
        setSelectedInterests([...selectedInterests, interest]);
      }
    }
  };

  const updatePersonality = (trait: string, value: string) => {
    setProfile({
      ...profile,
      personality: {
        ...profile.personality,
        [trait]: value,
      },
    });
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Submit profile and redirect
      router.push("/match");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return (
          profile.nickname.length >= 3 &&
          profile.gender !== "" &&
          profile.age !== ""
        );
      case 2:
        return selectedAvatar.style && selectedAvatar.color;
      case 3:
        return selectedInterests.length >= 3;
      case 4:
        return Object.values(profile.personality).every(
          (value) => value !== ""
        );
      default:
        return false;
    }
  };

  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-950">
      <main className="flex-1 wrapper py-8 md:py-12">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Create Your Anonymous Profile
            </h1>
            <p className="mt-2 text-muted-foreground">
              Express yourself authentically without revealing your identity
            </p>
          </div>

          <div className="relative mb-8">
            <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-border">
              <div
                className="absolute left-0 top-0 h-full bg-primary transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
            <div className="relative flex justify-between">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-medium
                    ${
                      s <= step
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground"
                    }`}
                >
                  {s < step ? <Check className="h-4 w-4" /> : s}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Welcome & Basic Info */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Welcome to Anonymate</CardTitle>
                <CardDescription>
                  We believe in connections based on personality, not
                  appearance. Let's start with the basics.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">
                          Your Privacy is Our Priority
                        </p>
                        <p className="text-sm text-muted-foreground">
                          We never ask for your real name, photos, or any
                          identifying information. Your conversations are
                          encrypted and your identity remains anonymous.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nickname">Choose a Nickname</Label>
                    <Input
                      id="nickname"
                      placeholder="YourNickname"
                      value={profile.nickname}
                      onChange={(e) =>
                        setProfile({ ...profile, nickname: e.target.value })
                      }
                    />
                    <p className="text-xs text-muted-foreground">
                      This will be visible to your matches. No real names
                      please.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="gender">
                        Gender <span className="text-destructive">*</span>
                      </Label>
                      <select
                        id="gender"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={profile.gender}
                        onChange={(e) =>
                          setProfile({ ...profile, gender: e.target.value })
                        }
                        required
                      >
                        <option value="" disabled>
                          Select gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">
                          Prefer not to say
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">
                        Age <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="age"
                        type="number"
                        min="18"
                        max="120"
                        placeholder="Your age"
                        value={profile.age}
                        onChange={(e) =>
                          setProfile({ ...profile, age: e.target.value })
                        }
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        You must be 18 or older to use Anonymate.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (Optional)</Label>
                      <Input
                        id="height"
                        placeholder="Height in cm"
                        value={profile.height}
                        onChange={(e) =>
                          setProfile({ ...profile, height: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (Optional)</Label>
                      <Input
                        id="weight"
                        placeholder="Weight in kg"
                        value={profile.weight}
                        onChange={(e) =>
                          setProfile({ ...profile, weight: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => router.push("/")}
                  className="gap-1"
                >
                  <ChevronLeft className="h-4 w-4" /> Back to Home
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!isStepComplete()}
                  className="gap-1"
                >
                  Continue <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Step 2: Avatar Selection */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Choose Your Avatar</CardTitle>
                <CardDescription>
                  Select a style and color that represents you. This will be
                  your visual identity.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs
                  defaultValue={selectedAvatar.style}
                  onValueChange={(value) =>
                    setSelectedAvatar({ ...selectedAvatar, style: value })
                  }
                >
                  <TabsList className="grid w-full grid-cols-3">
                    {avatarStyles.map((style) => (
                      <TabsTrigger key={style.id} value={style.id}>
                        {style.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {avatarStyles.map((style) => (
                    <TabsContent
                      key={style.id}
                      value={style.id}
                      className="space-y-4"
                    >
                      <div className="flex justify-center py-6">
                        <div
                          className={`h-32 w-32 rounded-full ${selectedAvatar.color} flex items-center justify-center`}
                        >
                          <User className="h-16 w-16 text-primary" />
                        </div>
                      </div>

                      <div className="flex justify-center gap-3">
                        {style.colors.map((color) => (
                          <button
                            key={color}
                            className={`h-8 w-8 rounded-full ${color} flex items-center justify-center ${
                              selectedAvatar.color === color
                                ? "ring-2 ring-primary"
                                : ""
                            }`}
                            onClick={() =>
                              setSelectedAvatar({ ...selectedAvatar, color })
                            }
                          >
                            {selectedAvatar.color === color && (
                              <Check className="h-4 w-4 text-primary" />
                            )}
                          </button>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="gap-1"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!isStepComplete()}
                  className="gap-1"
                >
                  Continue <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Step 3: Interests */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Select Your Interests</CardTitle>
                <CardDescription>
                  Choose up to 8 interests that define you. These will help us
                  find your best matches.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {selectedInterests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="gap-1">
                      {interest}
                      <button
                        onClick={() => handleInterestToggle(interest)}
                        className="ml-1 rounded-full hover:bg-secondary-foreground/10"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-x"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        <span className="sr-only">Remove {interest}</span>
                      </button>
                    </Badge>
                  ))}
                  {selectedInterests.length === 0 && (
                    <p className="text-sm text-muted-foreground">
                      No interests selected yet. Choose at least 3.
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  {interestCategories.map((category) => (
                    <div key={category.name} className="space-y-2">
                      <h3 className="text-sm font-medium">{category.name}</h3>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {category.options.map((interest) => (
                          <div
                            key={interest}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={interest}
                              checked={selectedInterests.includes(interest)}
                              onCheckedChange={() =>
                                handleInterestToggle(interest)
                              }
                              disabled={
                                selectedInterests.length >= 8 &&
                                !selectedInterests.includes(interest)
                              }
                            />
                            <label
                              htmlFor={interest}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {interest}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground">
                  Selected {selectedInterests.length}/8 interests
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="gap-1"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!isStepComplete()}
                  className="gap-1"
                >
                  Continue <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Step 4: Personality */}
          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Your Personality Profile</CardTitle>
                <CardDescription>
                  Help us understand your personality to find compatible
                  matches.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {personalityTraits.map((trait) => (
                    <div key={trait.id} className="space-y-2">
                      <Label>{trait.name}</Label>
                      <RadioGroup
                        value={
                          profile.personality[
                            trait.id as keyof typeof profile.personality
                          ]
                        }
                        onValueChange={(value) =>
                          updatePersonality(trait.id, value)
                        }
                      >
                        <div className="grid grid-cols-3 gap-2">
                          {trait.options.map((option, index) => (
                            <div
                              key={option}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                value={option}
                                id={`${trait.id}-${index}`}
                              />
                              <Label
                                htmlFor={`${trait.id}-${index}`}
                                className="text-sm"
                              >
                                {option}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  ))}

                  <div className="space-y-2">
                    <Label htmlFor="bio">Express Yourself (Optional)</Label>
                    <Textarea
                      id="bio"
                      placeholder="Share something about yourself, your interests, or what you're looking for..."
                      value={profile.bio}
                      onChange={(e) =>
                        setProfile({ ...profile, bio: e.target.value })
                      }
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground">
                      This will be visible to your matches. Keep it anonymous
                      but authentic.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="gap-1"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!isStepComplete()}
                  className="gap-1"
                >
                  Complete Profile <Sparkles className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
