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
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  User,
  ChevronLeft,
  Shield,
  CreditCard,
  Bell,
  LogOut,
  Trash2,
  Save,
} from "lucide-react";

// Mock user data - in a real app, this would come from your backend
const userData = {
  nickname: "ThoughtfulExplorer",
  avatar: {
    style: "abstract",
    color: "bg-primary/20",
  },
  gender: "Non-binary",
  age: 28,
  height: "175",
  weight: "68",
  interests: [
    "Literature",
    "Photography",
    "Hiking",
    "Philosophy",
    "Music",
    "Travel",
    "Psychology",
    "Cooking",
  ],
  personality: {
    "introvert-extrovert": "Ambivert",
    "thinking-feeling": "Analytical",
    "planning-spontaneous": "Flexible",
    "practical-creative": "Creative",
  },
  bio: "I find beauty in the small details of everyday life. Passionate about exploring new ideas through books and meaningful conversations. Looking for someone who appreciates depth and authenticity.",
  email: "user@example.com",
  privacy: {
    chatExpiry: 30,
    anonymityLevel: "standard",
    profileVisibility: "matches-only",
    locationSharing: false,
    activityStatus: true,
  },
  notifications: {
    newMatches: true,
    messages: true,
    matchSuggestions: true,
    appUpdates: false,
    email: true,
    push: true,
  },
  subscription: {
    plan: "Premium",
    renewalDate: "2024-06-15",
    price: "$9.99/month",
  },
};

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

export default function SettingsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");

  // State for form values
  const [profile, setProfile] = useState({
    nickname: userData.nickname,
    gender: userData.gender,
    age: userData.age.toString(),
    height: userData.height,
    weight: userData.weight,
    bio: userData.bio,
    avatar: userData.avatar,
    personality: userData.personality,
    email: userData.email,
  });

  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    userData.interests
  );

  const [privacy, setPrivacy] = useState({
    chatExpiry: userData.privacy.chatExpiry,
    anonymityLevel: userData.privacy.anonymityLevel,
    profileVisibility: userData.privacy.profileVisibility,
    locationSharing: userData.privacy.locationSharing,
    activityStatus: userData.privacy.activityStatus,
  });

  const [notifications, setNotifications] = useState({
    newMatches: userData.notifications.newMatches,
    messages: userData.notifications.messages,
    matchSuggestions: userData.notifications.matchSuggestions,
    appUpdates: userData.notifications.appUpdates,
    email: userData.notifications.email,
    push: userData.notifications.push,
  });

  // Handle interest toggle
  const handleInterestToggle = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      if (selectedInterests.length < 8) {
        setSelectedInterests([...selectedInterests, interest]);
      }
    }
  };

  // Update personality
  const updatePersonality = (trait: string, value: string) => {
    setProfile({
      ...profile,
      personality: {
        ...profile.personality,
        [trait]: value,
      },
    });
  };

  // Handle save
  const handleSave = () => {
    // In a real app, you would save to backend here
    alert("Settings saved successfully!");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => router.push("/profile")}
            className="gap-1"
          >
            <ChevronLeft className="h-4 w-4" /> Back to Profile
          </Button>
          <h1 className="text-3xl font-bold tracking-tight mt-4">Settings</h1>
          <p className="text-muted-foreground">
            Manage your profile, privacy, and account settings
          </p>
        </div>

        <Tabs
          defaultValue="profile"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
          </TabsList>

          {/* Profile Settings Tab */}
          <TabsContent value="profile" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Update your profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nickname">Nickname</Label>
                    <Input
                      id="nickname"
                      value={profile.nickname}
                      onChange={(e) =>
                        setProfile({ ...profile, nickname: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <select
                        id="gender"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={profile.gender}
                        onChange={(e) =>
                          setProfile({ ...profile, gender: e.target.value })
                        }
                      >
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
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        min="18"
                        max="120"
                        value={profile.age}
                        onChange={(e) =>
                          setProfile({ ...profile, age: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
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
                      <Label htmlFor="weight">Weight (kg)</Label>
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

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell others about yourself..."
                      className="min-h-[100px]"
                      value={profile.bio}
                      onChange={(e) =>
                        setProfile({ ...profile, bio: e.target.value })
                      }
                    />
                    <p className="text-xs text-muted-foreground">
                      This will be visible to your matches. Keep it anonymous
                      but authentic.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avatar</CardTitle>
                <CardDescription>
                  Choose how you appear to others
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs
                  defaultValue={profile.avatar.style}
                  onValueChange={(value) =>
                    setProfile({
                      ...profile,
                      avatar: { ...profile.avatar, style: value },
                    })
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
                          className={`h-32 w-32 rounded-full ${profile.avatar.color} flex items-center justify-center`}
                        >
                          <User className="h-16 w-16 text-primary" />
                        </div>
                      </div>

                      <div className="flex justify-center gap-3">
                        {style.colors.map((color) => (
                          <button
                            key={color}
                            className={`h-8 w-8 rounded-full ${color} flex items-center justify-center ${
                              profile.avatar.color === color
                                ? "ring-2 ring-primary"
                                : ""
                            }`}
                            onClick={() =>
                              setProfile({
                                ...profile,
                                avatar: { ...profile.avatar, color },
                              })
                            }
                          >
                            {profile.avatar.color === color && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interests</CardTitle>
                <CardDescription>
                  Select up to 8 interests that define you
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
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personality Profile</CardTitle>
                <CardDescription>
                  Update your personality traits
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
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave} className="w-full gap-1">
                  <Save className="h-4 w-4 mr-1" /> Save Profile Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Privacy Settings Tab */}
          <TabsContent value="privacy" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>
                  Control your privacy and anonymity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="anonymity-level">Anonymity Level</Label>
                    <select
                      id="anonymity-level"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={privacy.anonymityLevel}
                      onChange={(e) =>
                        setPrivacy({
                          ...privacy,
                          anonymityLevel: e.target.value,
                        })
                      }
                    >
                      <option value="standard">
                        Standard - Basic anonymity protection
                      </option>
                      <option value="enhanced">
                        Enhanced - Additional privacy features
                      </option>
                      <option value="maximum">
                        Maximum - Highest level of anonymity
                      </option>
                    </select>
                    <p className="text-xs text-muted-foreground">
                      Higher anonymity levels may limit some features but
                      provide greater privacy.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="profile-visibility">
                      Profile Visibility
                    </Label>
                    <select
                      id="profile-visibility"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={privacy.profileVisibility}
                      onChange={(e) =>
                        setPrivacy({
                          ...privacy,
                          profileVisibility: e.target.value,
                        })
                      }
                    >
                      <option value="public">
                        Public - Visible to all users
                      </option>
                      <option value="matches-only">
                        Matches Only - Only visible to your matches
                      </option>
                      <option value="hidden">
                        Hidden - Only visible when you initiate contact
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="chat-expiry">Chat Expiry</Label>
                    <div className="space-y-4">
                      <Slider
                        id="chat-expiry"
                        defaultValue={[privacy.chatExpiry]}
                        max={90}
                        min={1}
                        step={1}
                        onValueChange={(value) =>
                          setPrivacy({ ...privacy, chatExpiry: value[0] })
                        }
                      />
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          1 day
                        </span>
                        <span className="text-sm font-medium">
                          {privacy.chatExpiry} days
                        </span>
                        <span className="text-sm text-muted-foreground">
                          90 days
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Chats will be automatically deleted after this period of
                      inactivity.
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="location-sharing">Location Sharing</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow approximate location for better matches
                      </p>
                    </div>
                    <Switch
                      id="location-sharing"
                      checked={privacy.locationSharing}
                      onCheckedChange={(checked) =>
                        setPrivacy({ ...privacy, locationSharing: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="activity-status">Activity Status</Label>
                      <p className="text-sm text-muted-foreground">
                        Show when you're online or recently active
                      </p>
                    </div>
                    <Switch
                      id="activity-status"
                      checked={privacy.activityStatus}
                      onCheckedChange={(checked) =>
                        setPrivacy({ ...privacy, activityStatus: checked })
                      }
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave} className="w-full gap-1">
                  <Shield className="h-4 w-4 mr-1" /> Save Privacy Settings
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data & Security</CardTitle>
                <CardDescription>
                  Manage your data and account security
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium mb-2">Download Your Data</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Request a copy of all your personal data stored in
                    Anonymate.
                  </p>
                  <Button variant="outline">Request Data Export</Button>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium mb-2">Change Email</h3>
                  <div className="space-y-2 mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) =>
                        setProfile({ ...profile, email: e.target.value })
                      }
                    />
                  </div>
                  <Button variant="outline">Update Email</Button>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium mb-2">Change Password</h3>
                  <div className="space-y-2 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">
                        Confirm New Password
                      </Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <Button variant="outline">Update Password</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="text-destructive">Danger Zone</CardTitle>
                <CardDescription>Actions here cannot be undone</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border border-destructive/50 p-4">
                  <div className="flex items-start gap-4">
                    <LogOut className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <h3 className="font-medium">Log Out of All Devices</h3>
                      <p className="text-sm text-muted-foreground">
                        This will log you out of all devices except the current
                        one.
                      </p>
                      <Button variant="outline" className="text-destructive">
                        Log Out Everywhere
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-destructive/50 p-4">
                  <div className="flex items-start gap-4">
                    <Trash2 className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <h3 className="font-medium">Delete Account</h3>
                      <p className="text-sm text-muted-foreground">
                        This will permanently delete your account and all your
                        data. This action cannot be undone.
                      </p>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Settings Tab */}
          <TabsContent value="notifications" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Control what notifications you receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="new-matches">New Matches</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when you match with someone
                      </p>
                    </div>
                    <Switch
                      id="new-matches"
                      checked={notifications.newMatches}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          newMatches: checked,
                        })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="messages">Messages</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when you receive new messages
                      </p>
                    </div>
                    <Switch
                      id="messages"
                      checked={notifications.messages}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          messages: checked,
                        })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="match-suggestions">
                        Match Suggestions
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified about new potential matches
                      </p>
                    </div>
                    <Switch
                      id="match-suggestions"
                      checked={notifications.matchSuggestions}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          matchSuggestions: checked,
                        })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="app-updates">App Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified about new features and updates
                      </p>
                    </div>
                    <Switch
                      id="app-updates"
                      checked={notifications.appUpdates}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          appUpdates: checked,
                        })
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Channels</CardTitle>
                <CardDescription>
                  Choose how you want to be notified
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">
                        Email Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={notifications.email}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, email: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-notifications">
                        Push Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications on your device
                      </p>
                    </div>
                    <Switch
                      id="push-notifications"
                      checked={notifications.push}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, push: checked })
                      }
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave} className="w-full gap-1">
                  <Bell className="h-4 w-4 mr-1" /> Save Notification Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Subscription Settings Tab */}
          <TabsContent value="subscription" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>Manage your subscription</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-medium">
                        {userData.subscription.plan}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {userData.subscription.price}
                      </p>
                    </div>
                    <Badge>Active</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Next billing date</span>
                      <span>
                        {new Date(
                          userData.subscription.renewalDate
                        ).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Payment method</span>
                      <span>•••• 4242</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" className="flex-1">
                      Update Payment
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 text-destructive"
                    >
                      Cancel Plan
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Available Plans</CardTitle>
                <CardDescription>
                  Upgrade or change your subscription
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Basic</h3>
                    <div className="mt-2 mb-4">
                      <span className="text-2xl font-bold">Free</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        5 matches per day
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Basic matching algorithm
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Standard anonymity
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full" disabled>
                      Current Plan
                    </Button>
                  </div>

                  <div className="rounded-lg border p-4 bg-primary/5 border-primary/20">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Premium</h3>
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary"
                      >
                        Popular
                      </Badge>
                    </div>
                    <div className="mt-2 mb-4">
                      <span className="text-2xl font-bold">$9.99</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Unlimited matches
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Advanced AI matching
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Enhanced privacy options
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Priority customer support
                      </li>
                    </ul>
                    <Button className="w-full">Current Plan</Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Elite</h3>
                    <div className="mt-2 mb-4">
                      <span className="text-2xl font-bold">$19.99</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        All Premium features
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Exclusive AI-powered insights
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Maximum anonymity level
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Dedicated relationship coach
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">
                      Upgrade
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>View your past payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between border-b p-4">
                      <div>
                        <p className="font-medium">Premium Plan</p>
                        <p className="text-sm text-muted-foreground">
                          May 15, 2024
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$9.99</p>
                        <p className="text-sm text-muted-foreground">
                          Visa •••• 4242
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b p-4">
                      <div>
                        <p className="font-medium">Premium Plan</p>
                        <p className="text-sm text-muted-foreground">
                          April 15, 2024
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$9.99</p>
                        <p className="text-sm text-muted-foreground">
                          Visa •••• 4242
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-medium">Premium Plan</p>
                        <p className="text-sm text-muted-foreground">
                          March 15, 2024
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$9.99</p>
                        <p className="text-sm text-muted-foreground">
                          Visa •••• 4242
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full gap-1">
                  <CreditCard className="h-4 w-4 mr-1" /> Download Invoices
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
