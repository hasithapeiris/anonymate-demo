"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MessageSquareText,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  X,
} from "lucide-react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

// Interest categories with icons
const interestCategories = [
  {
    name: "Arts & Culture",
    icon: "🎭",
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
    icon: "🏄‍♂️",
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
    icon: "🧠",
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
    icon: "🌱",
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

// Personality traits with descriptions
const personalityTraits = [
  {
    name: "Creative",
    description: "You enjoy artistic expression and thinking outside the box",
    icon: "🎨",
  },
  {
    name: "Analytical",
    description: "You approach problems logically and enjoy solving puzzles",
    icon: "🧩",
  },
  {
    name: "Adventurous",
    description:
      "You seek new experiences and enjoy stepping outside your comfort zone",
    icon: "🧗‍♀️",
  },
  {
    name: "Empathetic",
    description:
      "You understand others' feelings and connect on an emotional level",
    icon: "💗",
  },
  {
    name: "Ambitious",
    description: "You set high goals and work hard to achieve them",
    icon: "🚀",
  },
  {
    name: "Laid-back",
    description: "You're relaxed and go with the flow, rarely getting stressed",
    icon: "🌴",
  },
  {
    name: "Intellectual",
    description: "You enjoy deep conversations and learning new concepts",
    icon: "📚",
  },
  {
    name: "Humorous",
    description: "You value laughter and enjoy making others smile",
    icon: "😂",
  },
  {
    name: "Reliable",
    description: "People can count on you to follow through on commitments",
    icon: "🤝",
  },
  {
    name: "Spontaneous",
    description: "You make decisions quickly and enjoy surprises",
    icon: "✨",
  },
  {
    name: "Introverted",
    description:
      "You recharge by spending time alone and enjoy deeper connections",
    icon: "🧘‍♂️",
  },
  {
    name: "Extroverted",
    description:
      "You gain energy from social interactions and meeting new people",
    icon: "🎉",
  },
];

// Relationship types with descriptions
const relationshipTypes = [
  {
    value: "casual",
    label: "Casual Dating",
    description: "Keeping things light and fun without serious commitment",
    icon: "🍹",
  },
  {
    value: "long-term",
    label: "Long-term Relationship",
    description: "Looking for a serious, committed partnership",
    icon: "❤️",
  },
  {
    value: "friendship",
    label: "Friendship First",
    description: "Starting with friendship and seeing where things go",
    icon: "🤗",
  },
  {
    value: "open",
    label: "Open to Anything",
    description: "Flexible about where connections might lead",
    icon: "🌈",
  },
];

export default function NewProfileCreation() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("about-me");
  const [progress, setProgress] = useState(0);

  // Form state
  const [profile, setProfile] = useState({
    // About Me
    gender: "",
    customGender: "",
    age: "",
    career: "",
    relationshipType: "",
    personalityTraits: [] as string[],
    height: "",
    interests: [] as string[],
    appearance: "",
    location: "",
    lifestyle: {
      smoking: "",
      drinking: "",
      other: "",
    },
    bio: "",
    aboutMeBio: "", // Add this new field

    // Looking For
    genderPreference: "",
    ageRange: [25, 35],
    careerPreference: "",
    relationshipTypePreference: "",
    personalityPreference: [] as string[],
    heightPreference: "",
    interestPreference: [] as string[],
    appearancePreference: "",
    locationPreference: "",
    lifestylePreference: {
      smoking: "",
      drinking: "",
      other: "",
    },
    dealbreakers: [] as string[],
    lookingForBio: "", // Add this new field
  });

  // Calculate profile completion percentage
  const calculateProgress = () => {
    let completed = 0;
    let total = 0;

    // About Me section (10 fields)
    if (profile.gender) completed++;
    if (profile.age) completed++;
    if (profile.career) completed++;
    if (profile.relationshipType) completed++;
    if (profile.personalityTraits.length > 0) completed++;
    if (profile.height) completed++;
    if (profile.interests.length > 0) completed++;
    if (profile.appearance) completed++;
    if (profile.location) completed++;
    if (
      profile.lifestyle.smoking ||
      profile.lifestyle.drinking ||
      profile.lifestyle.other
    )
      completed++;

    // Looking For section (10 fields)
    if (profile.genderPreference) completed++;
    if (profile.ageRange.length === 2) completed++;
    if (profile.careerPreference) completed++;
    if (profile.relationshipTypePreference) completed++;
    if (profile.personalityPreference.length > 0) completed++;
    if (profile.heightPreference) completed++;
    if (profile.interestPreference.length > 0) completed++;
    if (profile.appearancePreference) completed++;
    if (profile.locationPreference) completed++;
    if (
      profile.lifestylePreference.smoking ||
      profile.lifestylePreference.drinking ||
      profile.lifestylePreference.other
    )
      completed++;

    total = 20; // Total number of fields
    return Math.round((completed / total) * 100);
  };

  // Toggle personality trait selection
  const togglePersonalityTrait = (trait: string) => {
    if (profile.personalityTraits.includes(trait)) {
      setProfile({
        ...profile,
        personalityTraits: profile.personalityTraits.filter((t) => t !== trait),
      });
    } else {
      if (profile.personalityTraits.length < 5) {
        setProfile({
          ...profile,
          personalityTraits: [...profile.personalityTraits, trait],
        });
      }
    }
  };

  // Toggle personality preference selection
  const togglePersonalityPreference = (trait: string) => {
    if (profile.personalityPreference.includes(trait)) {
      setProfile({
        ...profile,
        personalityPreference: profile.personalityPreference.filter(
          (t) => t !== trait
        ),
      });
    } else {
      if (profile.personalityPreference.length < 5) {
        setProfile({
          ...profile,
          personalityPreference: [...profile.personalityPreference, trait],
        });
      }
    }
  };

  // Toggle interest selection
  const toggleInterest = (interest: string) => {
    if (profile.interests.includes(interest)) {
      setProfile({
        ...profile,
        interests: profile.interests.filter((i) => i !== interest),
      });
    } else {
      if (profile.interests.length < 8) {
        setProfile({
          ...profile,
          interests: [...profile.interests, interest],
        });
      }
    }
  };

  // Toggle interest preference selection
  const toggleInterestPreference = (interest: string) => {
    if (profile.interestPreference.includes(interest)) {
      setProfile({
        ...profile,
        interestPreference: profile.interestPreference.filter(
          (i) => i !== interest
        ),
      });
    } else {
      if (profile.interestPreference.length < 8) {
        setProfile({
          ...profile,
          interestPreference: [...profile.interestPreference, interest],
        });
      }
    }
  };

  // Toggle dealbreaker
  const toggleDealbreaker = (dealbreaker: string) => {
    if (profile.dealbreakers.includes(dealbreaker)) {
      setProfile({
        ...profile,
        dealbreakers: profile.dealbreakers.filter((d) => d !== dealbreaker),
      });
    } else {
      setProfile({
        ...profile,
        dealbreakers: [...profile.dealbreakers, dealbreaker],
      });
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    // In a real app, you would save the profile data to your backend here
    console.log("Profile data:", profile);
    router.push("/profile");
  };

  // Update progress when profile changes
  useState(() => {
    setProgress(calculateProgress());
  });

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquareText className="h-6 w-6 text-primary" />
            <Link href="/" className="text-xl font-bold">
              Anonymate
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8 md:py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => router.push("/")}
              className="gap-1"
            >
              <ChevronLeft className="h-4 w-4" /> Back to Home
            </Button>

            <div className="mt-6 text-center">
              <h1 className="text-3xl font-bold tracking-tight">
                Create Your Profile
              </h1>
              <p className="mt-2 text-muted-foreground">
                Express yourself authentically to find meaningful connections
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Profile Completion</span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Main tabs */}
          <Tabs
            defaultValue="about-me"
            value={activeSection}
            onValueChange={setActiveSection}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="about-me">About Me</TabsTrigger>
              <TabsTrigger value="looking-for">Looking For</TabsTrigger>
            </TabsList>

            {/* About Me Section */}
            <TabsContent value="about-me" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Tell us about yourself</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Gender */}
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <RadioGroup
                      value={profile.gender}
                      onValueChange={(value) =>
                        setProfile({ ...profile, gender: value })
                      }
                      className="grid grid-cols-2 gap-2 sm:grid-cols-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="gender-male" />
                        <Label htmlFor="gender-male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="gender-female" />
                        <Label htmlFor="gender-female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="non-binary"
                          id="gender-non-binary"
                        />
                        <Label htmlFor="gender-non-binary">Non-binary</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="custom" id="gender-custom" />
                        <Label htmlFor="gender-custom">Custom</Label>
                      </div>
                    </RadioGroup>

                    {profile.gender === "custom" && (
                      <div className="mt-2">
                        <Input
                          id="custom-gender"
                          placeholder="Specify your gender"
                          value={profile.customGender}
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              customGender: e.target.value,
                            })
                          }
                        />
                      </div>
                    )}
                  </div>

                  {/* Age */}
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
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
                    />
                    <p className="text-xs text-muted-foreground">
                      You must be 18 or older to use Anonymate.
                    </p>
                  </div>

                  {/* Career */}
                  <div className="space-y-2">
                    <Label htmlFor="career">Career / Field</Label>
                    <Input
                      id="career"
                      placeholder="e.g., Graphic Designer in Advertising"
                      value={profile.career}
                      onChange={(e) =>
                        setProfile({ ...profile, career: e.target.value })
                      }
                    />
                  </div>

                  {/* Relationship Type */}
                  <div className="space-y-2">
                    <Label>Relationship Type</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {relationshipTypes.map((type) => (
                        <div
                          key={type.value}
                          className={cn(
                            "flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                            profile.relationshipType === type.value
                              ? "border-primary bg-primary/5"
                              : "hover:bg-muted/50"
                          )}
                          onClick={() =>
                            setProfile({
                              ...profile,
                              relationshipType: type.value,
                            })
                          }
                        >
                          <div className="text-2xl">{type.icon}</div>
                          <div>
                            <div className="font-medium">{type.label}</div>
                            <div className="text-sm text-muted-foreground">
                              {type.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Personality & Interests</CardTitle>
                  <CardDescription>What makes you unique?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Personality Traits */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Personality Traits (Select up to 5)</Label>
                      <span className="text-sm text-muted-foreground">
                        {profile.personalityTraits.length}/5 selected
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {personalityTraits.map((trait) => (
                        <div
                          key={trait.name}
                          className={cn(
                            "flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                            profile.personalityTraits.includes(trait.name)
                              ? "border-primary bg-primary/5"
                              : "hover:bg-muted/50",
                            profile.personalityTraits.length >= 5 &&
                              !profile.personalityTraits.includes(trait.name)
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          )}
                          onClick={() => togglePersonalityTrait(trait.name)}
                        >
                          <div className="text-2xl">{trait.icon}</div>
                          <div>
                            <div className="font-medium">{trait.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {trait.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Height */}
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (Optional)</Label>
                    <Input
                      id="height"
                      placeholder="e.g., 5'10&quot; or 178 cm"
                      value={profile.height}
                      onChange={(e) =>
                        setProfile({ ...profile, height: e.target.value })
                      }
                    />
                  </div>

                  {/* Interests */}
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Interests (Select up to 8)</Label>
                      <span className="text-sm text-muted-foreground">
                        {profile.interests.length}/8 selected
                      </span>
                    </div>

                    {/* Selected interests */}
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest) => (
                        <Badge
                          key={interest}
                          variant="secondary"
                          className="gap-1 py-1.5"
                        >
                          {interest}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleInterest(interest);
                            }}
                            className="ml-1 rounded-full hover:bg-secondary-foreground/10"
                          >
                            <X className="h-3 w-3" />
                            <span className="sr-only">Remove {interest}</span>
                          </button>
                        </Badge>
                      ))}
                      {profile.interests.length === 0 && (
                        <p className="text-sm text-muted-foreground">
                          No interests selected yet.
                        </p>
                      )}
                    </div>

                    {/* Interest categories */}
                    <div className="space-y-4">
                      {interestCategories.map((category) => (
                        <div key={category.name} className="space-y-2">
                          <h3 className="text-sm font-medium flex items-center gap-2">
                            <span>{category.icon}</span> {category.name}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {category.options.map((interest) => (
                              <Badge
                                key={interest}
                                variant={
                                  profile.interests.includes(interest)
                                    ? "default"
                                    : "outline"
                                }
                                className={cn(
                                  "cursor-pointer hover:bg-primary/10",
                                  profile.interests.length >= 8 &&
                                    !profile.interests.includes(interest)
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                                )}
                                onClick={() => {
                                  if (
                                    profile.interests.length < 8 ||
                                    profile.interests.includes(interest)
                                  ) {
                                    toggleInterest(interest);
                                  }
                                }}
                              >
                                {interest}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Additional Details</CardTitle>
                  <CardDescription>
                    More about you and your lifestyle
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Appearance */}
                  <div className="space-y-2">
                    <Label htmlFor="appearance">Appearance (Optional)</Label>
                    <Input
                      id="appearance"
                      placeholder="e.g., Black hair, brown eyes, slim build"
                      value={profile.appearance}
                      onChange={(e) =>
                        setProfile({ ...profile, appearance: e.target.value })
                      }
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g., New York, NY"
                      value={profile.location}
                      onChange={(e) =>
                        setProfile({ ...profile, location: e.target.value })
                      }
                    />
                  </div>

                  {/* Lifestyle */}
                  <div className="space-y-4">
                    <Label>Lifestyle</Label>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Smoking */}
                      <div className="space-y-2">
                        <Label htmlFor="smoking">Smoking</Label>
                        <select
                          id="smoking"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={profile.lifestyle.smoking}
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              lifestyle: {
                                ...profile.lifestyle,
                                smoking: e.target.value,
                              },
                            })
                          }
                        >
                          <option value="">Select option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                          <option value="occasionally">Occasionally</option>
                        </select>
                      </div>

                      {/* Drinking */}
                      <div className="space-y-2">
                        <Label htmlFor="drinking">Drinking</Label>
                        <select
                          id="drinking"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={profile.lifestyle.drinking}
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              lifestyle: {
                                ...profile.lifestyle,
                                drinking: e.target.value,
                              },
                            })
                          }
                        >
                          <option value="">Select option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                          <option value="socially">Socially</option>
                        </select>
                      </div>
                    </div>

                    {/* Other lifestyle habits */}
                    <div className="space-y-2">
                      <Label htmlFor="other-lifestyle">
                        Other Lifestyle Habits (Optional)
                      </Label>
                      <Input
                        id="other-lifestyle"
                        placeholder="e.g., Vegan, Night owl, Gym regular"
                        value={profile.lifestyle.other}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            lifestyle: {
                              ...profile.lifestyle,
                              other: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio (Optional)</Label>
                    <Textarea
                      id="bio"
                      placeholder="Share more about yourself..."
                      className="min-h-[100px]"
                      value={profile.bio}
                      onChange={(e) =>
                        setProfile({ ...profile, bio: e.target.value })
                      }
                    />
                  </div>
                  {/* Bio */}
                  <div className="space-y-2">
                    <Label htmlFor="about-me-bio">
                      Tell us about yourself (Optional)
                    </Label>
                    <Textarea
                      id="about-me-bio"
                      placeholder="Share more about your life, values, experiences, or anything else you'd like potential matches to know..."
                      className="min-h-[150px]"
                      value={profile.aboutMeBio}
                      onChange={(e) =>
                        setProfile({ ...profile, aboutMeBio: e.target.value })
                      }
                    />
                    <p className="text-xs text-muted-foreground">
                      This is your chance to express yourself beyond the
                      checkboxes and selections. What makes you unique?
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => router.push("/")}
                    className="gap-1"
                  >
                    <ChevronLeft className="h-4 w-4" /> Cancel
                  </Button>
                  <Button
                    onClick={() => setActiveSection("looking-for")}
                    className="gap-1"
                  >
                    Continue <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Looking For Section */}
            <TabsContent value="looking-for" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Who You're Looking For</CardTitle>
                  <CardDescription>
                    Tell us about your ideal match
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Gender Preference */}
                  <div className="space-y-2">
                    <Label htmlFor="gender-preference">Gender Preference</Label>
                    <RadioGroup
                      value={profile.genderPreference}
                      onValueChange={(value) =>
                        setProfile({ ...profile, genderPreference: value })
                      }
                      className="grid grid-cols-2 gap-2 sm:grid-cols-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="pref-male" />
                        <Label htmlFor="pref-male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="pref-female" />
                        <Label htmlFor="pref-female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="non-binary"
                          id="pref-non-binary"
                        />
                        <Label htmlFor="pref-non-binary">Non-binary</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="any" id="pref-any" />
                        <Label htmlFor="pref-any">Any</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Age Range */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="age-range">Age Range</Label>
                      <span className="text-sm">
                        {profile.ageRange[0]} - {profile.ageRange[1]} years
                      </span>
                    </div>
                    <div className="px-1">
                      <Slider
                        id="age-range"
                        defaultValue={profile.ageRange}
                        min={18}
                        max={80}
                        step={1}
                        onValueChange={(value) =>
                          setProfile({
                            ...profile,
                            ageRange: value as number[],
                          })
                        }
                        className="my-6"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>18</span>
                        <span>80+</span>
                      </div>
                    </div>
                  </div>

                  {/* Career Preference */}
                  <div className="space-y-2">
                    <Label htmlFor="career-preference">
                      Preferred Career / Field (Optional)
                    </Label>
                    <Input
                      id="career-preference"
                      placeholder="e.g., Any / Creative field / STEM / Healthcare"
                      value={profile.careerPreference}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          careerPreference: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Relationship Type Preference */}
                  <div className="space-y-2">
                    <Label>Preferred Relationship Type</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {relationshipTypes.map((type) => (
                        <div
                          key={type.value}
                          className={cn(
                            "flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                            profile.relationshipTypePreference === type.value
                              ? "border-primary bg-primary/5"
                              : "hover:bg-muted/50"
                          )}
                          onClick={() =>
                            setProfile({
                              ...profile,
                              relationshipTypePreference: type.value,
                            })
                          }
                        >
                          <div className="text-2xl">{type.icon}</div>
                          <div>
                            <div className="font-medium">{type.label}</div>
                            <div className="text-sm text-muted-foreground">
                              {type.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Personality & Interests</CardTitle>
                  <CardDescription>
                    What traits and interests do you value in others?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Personality Preferences */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>
                        Personality Traits You Value (Select up to 5)
                      </Label>
                      <span className="text-sm text-muted-foreground">
                        {profile.personalityPreference.length}/5 selected
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {personalityTraits.map((trait) => (
                        <div
                          key={trait.name}
                          className={cn(
                            "flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                            profile.personalityPreference.includes(trait.name)
                              ? "border-primary bg-primary/5"
                              : "hover:bg-muted/50",
                            profile.personalityPreference.length >= 5 &&
                              !profile.personalityPreference.includes(
                                trait.name
                              )
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          )}
                          onClick={() =>
                            togglePersonalityPreference(trait.name)
                          }
                        >
                          <div className="text-2xl">{trait.icon}</div>
                          <div>
                            <div className="font-medium">{trait.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {trait.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Height Preference */}
                  <div className="space-y-2">
                    <Label htmlFor="height-preference">
                      Height Preference (Optional)
                    </Label>
                    <Input
                      id="height-preference"
                      placeholder="e.g., Taller than 5'8&quot; or No preference"
                      value={profile.heightPreference}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          heightPreference: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Interest Preferences */}
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Shared Interests You Value (Select up to 8)</Label>
                      <span className="text-sm text-muted-foreground">
                        {profile.interestPreference.length}/8 selected
                      </span>
                    </div>

                    {/* Selected interest preferences */}
                    <div className="flex flex-wrap gap-2">
                      {profile.interestPreference.map((interest) => (
                        <Badge
                          key={interest}
                          variant="secondary"
                          className="gap-1 py-1.5"
                        >
                          {interest}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleInterestPreference(interest);
                            }}
                            className="ml-1 rounded-full hover:bg-secondary-foreground/10"
                          >
                            <X className="h-3 w-3" />
                            <span className="sr-only">Remove {interest}</span>
                          </button>
                        </Badge>
                      ))}
                      {profile.interestPreference.length === 0 && (
                        <p className="text-sm text-muted-foreground">
                          No interests selected yet.
                        </p>
                      )}
                    </div>

                    {/* Interest categories */}
                    <div className="space-y-4">
                      {interestCategories.map((category) => (
                        <div key={category.name} className="space-y-2">
                          <h3 className="text-sm font-medium flex items-center gap-2">
                            <span>{category.icon}</span> {category.name}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {category.options.map((interest) => (
                              <Badge
                                key={interest}
                                variant={
                                  profile.interestPreference.includes(interest)
                                    ? "default"
                                    : "outline"
                                }
                                className={cn(
                                  "cursor-pointer hover:bg-primary/10",
                                  profile.interestPreference.length >= 8 &&
                                    !profile.interestPreference.includes(
                                      interest
                                    )
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                                )}
                                onClick={() => {
                                  if (
                                    profile.interestPreference.length < 8 ||
                                    profile.interestPreference.includes(
                                      interest
                                    )
                                  ) {
                                    toggleInterestPreference(interest);
                                  }
                                }}
                              >
                                {interest}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Additional Preferences</CardTitle>
                  <CardDescription>
                    More about who you're looking to meet
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Appearance Preference */}
                  <div className="space-y-2">
                    <Label htmlFor="appearance-preference">
                      Appearance Preference (Optional)
                    </Label>
                    <Input
                      id="appearance-preference"
                      placeholder="e.g., No specific preference"
                      value={profile.appearancePreference}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          appearancePreference: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Location Preference */}
                  <div className="space-y-2">
                    <Label htmlFor="location-preference">
                      Location Preference
                    </Label>
                    <Input
                      id="location-preference"
                      placeholder="e.g., Within 50 miles / Same city / Open to long-distance"
                      value={profile.locationPreference}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          locationPreference: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Lifestyle Preferences */}
                  <div className="space-y-4">
                    <Label>Lifestyle Preferences</Label>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Smoking Preference */}
                      <div className="space-y-2">
                        <Label htmlFor="smoking-preference">Smoking</Label>
                        <select
                          id="smoking-preference"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={profile.lifestylePreference.smoking}
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              lifestylePreference: {
                                ...profile.lifestylePreference,
                                smoking: e.target.value,
                              },
                            })
                          }
                        >
                          <option value="">No preference</option>
                          <option value="yes">Smoker is fine</option>
                          <option value="no">Non-smoker preferred</option>
                          <option value="dealbreaker">Non-smoker only</option>
                        </select>
                      </div>

                      {/* Drinking Preference */}
                      <div className="space-y-2">
                        <Label htmlFor="drinking-preference">Drinking</Label>
                        <select
                          id="drinking-preference"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={profile.lifestylePreference.drinking}
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              lifestylePreference: {
                                ...profile.lifestylePreference,
                                drinking: e.target.value,
                              },
                            })
                          }
                        >
                          <option value="">No preference</option>
                          <option value="yes">Drinker is fine</option>
                          <option value="no">Non-drinker preferred</option>
                          <option value="dealbreaker">Non-drinker only</option>
                        </select>
                      </div>
                    </div>

                    {/* Other lifestyle preferences */}
                    <div className="space-y-2">
                      <Label htmlFor="other-lifestyle-preference">
                        Other Lifestyle Preferences (Optional)
                      </Label>
                      <Input
                        id="other-lifestyle-preference"
                        placeholder="e.g., Active lifestyle, Values wellness"
                        value={profile.lifestylePreference.other}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            lifestylePreference: {
                              ...profile.lifestylePreference,
                              other: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* Looking For Bio */}
                  <div className="space-y-2">
                    <Label htmlFor="looking-for-bio">
                      Describe your ideal match (Optional)
                    </Label>
                    <Textarea
                      id="looking-for-bio"
                      placeholder="What qualities do you value most in a potential match? What kind of connection are you hoping to build?"
                      className="min-h-[150px]"
                      value={profile.lookingForBio}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          lookingForBio: e.target.value,
                        })
                      }
                    />
                    <p className="text-xs text-muted-foreground">
                      Go beyond preferences and describe the kind of person and
                      relationship you're looking for.
                    </p>
                  </div>

                  {/* Dealbreakers */}
                  <div className="space-y-2">
                    <Label>Dealbreakers</Label>
                    <p className="text-sm text-muted-foreground mb-3">
                      Select any absolute dealbreakers that would make a match
                      impossible for you.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="dealbreaker-smoking"
                          checked={profile.dealbreakers.includes("smoking")}
                          onCheckedChange={() => toggleDealbreaker("smoking")}
                        />
                        <Label htmlFor="dealbreaker-smoking">
                          Smoking is a dealbreaker
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch
                          id="dealbreaker-drinking"
                          checked={profile.dealbreakers.includes("drinking")}
                          onCheckedChange={() => toggleDealbreaker("drinking")}
                        />
                        <Label htmlFor="dealbreaker-drinking">
                          Drinking is a dealbreaker
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch
                          id="dealbreaker-distance"
                          checked={profile.dealbreakers.includes("distance")}
                          onCheckedChange={() => toggleDealbreaker("distance")}
                        />
                        <Label htmlFor="dealbreaker-distance">
                          Long distance is a dealbreaker
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch
                          id="dealbreaker-age"
                          checked={profile.dealbreakers.includes("age")}
                          onCheckedChange={() => toggleDealbreaker("age")}
                        />
                        <Label htmlFor="dealbreaker-age">
                          Outside my age range is a dealbreaker
                        </Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setActiveSection("about-me")}
                    className="gap-1"
                  >
                    <ChevronLeft className="h-4 w-4" /> Back
                  </Button>
                  <Button onClick={handleSubmit} className="gap-1">
                    Complete Profile <Sparkles className="h-4 w-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col gap-2 sm:flex-row items-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Anonymate. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
