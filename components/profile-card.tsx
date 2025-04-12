"use client";

import { useState } from "react";
import {
  motion,
  type PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Sparkles,
  Bot,
  User,
  MessageSquare,
  Calendar,
  ArrowRight,
} from "lucide-react";

interface ProfileCardProps {
  profile: {
    id: string;
    matchScore: number;
    gender: string;
    age: number;
    interests: string[];
    conversationStyle: string[];
    bio: string;
    previewMessages: string[];
    isOnline?: boolean;
  };
  onSwipe: (direction: "left" | "right", id: string) => void;
  onViewProfile: (id: string) => void;
  onMessage: (id: string) => void;
  active: boolean;
}

export function ProfileCard({
  profile,
  onSwipe,
  onViewProfile,
  onMessage,
  active,
}: ProfileCardProps) {
  const [expanded, setExpanded] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const likeOpacity = useTransform(x, [0, 150], [0, 1]);
  const nopeOpacity = useTransform(x, [-150, 0], [1, 0]);

  function handleDragEnd(info: PanInfo) {
    if (info.offset.x > 100) {
      onSwipe("right", profile.id);
    } else if (info.offset.x < -100) {
      onSwipe("left", profile.id);
    }
  }

  return (
    <motion.div
      className={`absolute top-0 left-0 right-0 h-[550px] w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl bg-card border ${
        active ? "z-10" : "z-0"
      }`}
      drag={active ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, rotate, opacity }}
      onDragEnd={(_, info) => handleDragEnd(info)}
      whileTap={{ cursor: "grabbing" }}
    >
      {/* Like/Nope Stamps */}
      <motion.div
        className="absolute top-10 right-10 rotate-12 border-4 border-green-500 rounded-lg px-4 py-1 z-20 pointer-events-none"
        style={{ opacity: likeOpacity }}
      >
        <span className="text-green-500 font-bold text-2xl">CONNECT</span>
      </motion.div>

      <motion.div
        className="absolute top-10 left-10 -rotate-12 border-4 border-red-500 rounded-lg px-4 py-1 z-20 pointer-events-none"
        style={{ opacity: nopeOpacity }}
      >
        <span className="text-red-500 font-bold text-2xl">PASS</span>
      </motion.div>

      <div className="relative h-full flex flex-col p-6">
        {/* AI Recommendation Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary/90 hover:bg-primary/90 text-white">
            <Bot className="h-3 w-3 mr-1" /> AI Recommended
          </Badge>
        </div>

        {/* Compatibility Score */}
        <div className="flex justify-center mb-6 mt-4">
          <div className="relative">
            <svg className="w-32 h-32" viewBox="0 0 100 100">
              <circle
                className="text-muted stroke-current"
                strokeWidth="10"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <circle
                className="text-primary stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
                strokeDasharray={`${(profile.matchScore / 100) * 251.2} 251.2`}
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-4xl font-bold">{profile.matchScore}%</span>
              <span className="text-xs text-muted-foreground">Compatible</span>
            </div>
          </div>
        </div>

        {/* Profile Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Anonymous #{profile.id}</h2>
          <div className="flex items-center justify-center gap-4 mt-2">
            <div className="flex items-center gap-1 text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{profile.gender}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{profile.age} years</span>
            </div>
            {profile.isOnline && (
              <Badge
                variant="outline"
                className="bg-green-500/20 text-green-500 font-semibold"
              >
                Online Now
              </Badge>
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="flex-1 overflow-y-auto">
          {expanded ? (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-300">
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-foreground/80">Bio</h3>
                <p className="text-sm">{profile.bio}</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-medium text-foreground/80 flex items-center gap-1">
                  <Heart className="h-3 w-3" /> Interests
                </h3>
                <div className="flex flex-wrap gap-1">
                  {profile.interests.map((interest, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-secondary/50"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-medium text-foreground/80 flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Conversation Style
                </h3>
                <div className="flex flex-wrap gap-1">
                  {profile.conversationStyle.map((style, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-secondary/50"
                    >
                      {style}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-medium text-foreground/80">
                  Preview Messages
                </h3>
                <div className="space-y-2">
                  {profile.previewMessages.map((message, i) => (
                    <div key={i} className="bg-muted rounded p-2 text-xs">
                      {message}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-foreground/80">Bio</h3>
                <p className="text-sm line-clamp-3">{profile.bio}</p>
              </div>

              <div className="flex items-start gap-2">
                <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p>
                  {profile.interests.slice(0, 3).join(", ")}
                  {profile.interests.length > 3 && "..."}
                </p>
              </div>

              <div className="flex items-start gap-2">
                <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p>{profile.conversationStyle.join(", ")}</p>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="w-full text-primary"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show Less" : "Show More"}{" "}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onViewProfile(profile.id)}
          >
            <User className="h-4 w-4 mr-2" /> View Profile
          </Button>
          <Button className="w-full" onClick={() => onMessage(profile.id)}>
            <MessageSquare className="h-4 w-4 mr-2" /> Message
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
