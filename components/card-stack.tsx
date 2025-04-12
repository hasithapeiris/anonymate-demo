"use client";

import { useState } from "react";
import { ProfileCard } from "./profile-card";
import { Button } from "@/components/ui/button";
import { RotateCcw, X, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

// Sample data for demonstration
const SAMPLE_PROFILES = [
  {
    id: "1",
    matchScore: 95,
    gender: "Female",
    age: 28,
    interests: ["Reading", "Hiking", "Photography", "Travel", "Cooking"],
    conversationStyle: ["Thoughtful", "Witty", "Curious"],
    bio: "I love exploring new places and capturing moments through my camera. Always up for a good book recommendation or a hiking adventure!",
    previewMessages: [
      "What's the last book that really made you think?",
      "I believe travel is the best education one can get.",
    ],
    isOnline: true,
  },
  {
    id: "2",
    matchScore: 87,
    gender: "Male",
    age: 31,
    interests: ["Music", "Gaming", "Technology", "Movies", "Coffee"],
    conversationStyle: ["Humorous", "Laid-back", "Intellectual"],
    bio: "Tech enthusiast by day, musician by night. I can talk for hours about film theory or the perfect coffee brewing method.",
    previewMessages: [
      "What kind of music helps you focus?",
      "I think the best conversations happen over coffee.",
    ],
  },
  {
    id: "3",
    matchScore: 82,
    gender: "Non-binary",
    age: 26,
    interests: ["Art", "Yoga", "Philosophy", "Writing", "Sustainability"],
    conversationStyle: ["Deep", "Empathetic", "Creative"],
    bio: "Artist and writer exploring the connections between creativity and mindfulness. Always seeking new perspectives and meaningful conversations.",
    previewMessages: [
      "How do you express your creativity?",
      "I believe in finding beauty in the everyday moments.",
    ],
    isOnline: true,
  },
  {
    id: "4",
    matchScore: 78,
    gender: "Male",
    age: 33,
    interests: [
      "Fitness",
      "Entrepreneurship",
      "Psychology",
      "Podcasts",
      "Cooking",
    ],
    conversationStyle: ["Direct", "Motivational", "Analytical"],
    bio: "Entrepreneur with a passion for personal development and fitness. I love deep conversations about psychology and what drives people.",
    previewMessages: [
      "What's one habit that changed your life?",
      "I believe we're capable of much more than we think.",
    ],
  },
  {
    id: "5",
    matchScore: 91,
    gender: "Female",
    age: 29,
    interests: ["Dancing", "Languages", "History", "Food", "Volunteering"],
    conversationStyle: ["Enthusiastic", "Warm", "Inquisitive"],
    bio: "Language teacher who loves to dance and explore different cultures through their cuisine. Always looking to learn something new!",
    previewMessages: [
      "What's a dish that reminds you of home?",
      "I think learning a language is like opening a door to a new world.",
    ],
    isOnline: false,
  },
];

export function CardStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastSwipedDirection, setLastSwipedDirection] = useState<
    "left" | "right" | null
  >(null);
  const [lastSwipedId, setLastSwipedId] = useState<string | null>(null);
  const [acceptedProfiles, setAcceptedProfiles] = useState<string[]>([]);
  const router = useRouter();

  const handleSwipe = (direction: "left" | "right", id: string) => {
    setLastSwipedDirection(direction);
    setLastSwipedId(id);

    if (direction === "right") {
      setAcceptedProfiles([...acceptedProfiles, id]);
    }

    setCurrentIndex(currentIndex + 1);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);

      if (lastSwipedDirection === "right" && lastSwipedId) {
        setAcceptedProfiles(
          acceptedProfiles.filter((id) => id !== lastSwipedId)
        );
      }

      setLastSwipedDirection(null);
      setLastSwipedId(null);
    }
  };

  const handleViewProfile = (id: string) => {
    // In a real app, this would navigate to the profile page
    console.log(`Viewing profile ${id}`);
    router.push(`/profile/${id}`);
  };

  const handleMessage = (id: string) => {
    // In a real app, this would navigate to the messaging page
    console.log(`Messaging profile ${id}`);
    router.push(`/messages/${id}`);
  };

  const resetCards = () => {
    setCurrentIndex(0);
    setAcceptedProfiles([]);
    setLastSwipedDirection(null);
    setLastSwipedId(null);
  };

  return (
    <div className="relative h-[600px] w-full max-w-md mx-auto">
      {/* Card Stack */}
      {SAMPLE_PROFILES.map((profile, index) => {
        // Only render current and next card for performance
        if (index < currentIndex || index > currentIndex + 1) return null;

        return (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSwipe={handleSwipe}
            onViewProfile={handleViewProfile}
            onMessage={handleMessage}
            active={index === currentIndex}
          />
        );
      })}

      {/* Empty State */}
      {currentIndex >= SAMPLE_PROFILES.length && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-card rounded-xl border shadow-xl">
          <h3 className="text-2xl font-bold mb-2">You've seen all profiles!</h3>
          <p className="text-muted-foreground mb-6">
            You've connected with {acceptedProfiles.length} people.
            {acceptedProfiles.length > 0 &&
              " Check your messages to start chatting!"}
          </p>
          <Button onClick={resetCards}>View More Profiles</Button>
        </div>
      )}

      {/* Action Buttons */}
      {currentIndex < SAMPLE_PROFILES.length && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 p-4">
          <Button
            variant="outline"
            size="icon"
            className="h-14 w-14 rounded-full bg-background border-red-500 text-red-500"
            onClick={() =>
              handleSwipe("left", SAMPLE_PROFILES[currentIndex].id)
            }
          >
            <X className="h-8 w-8" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={handleUndo}
            disabled={currentIndex === 0}
          >
            <RotateCcw className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="h-14 w-14 rounded-full bg-background border-green-500 text-green-500"
            onClick={() =>
              handleSwipe("right", SAMPLE_PROFILES[currentIndex].id)
            }
          >
            <Heart className="h-8 w-8" />
          </Button>
        </div>
      )}
    </div>
  );
}
