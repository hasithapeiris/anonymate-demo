"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Lock, Trash2, X } from "lucide-react";

interface SafetyPanelProps {
  className?: string;
}

export function SafetyPanel({ className }: SafetyPanelProps) {
  const [safetySettings, setSafetySettings] = useState({
    contentFiltering: true,
    messageExpiration: 30,
    readReceipts: true,
    locationSharing: false,
    activityStatus: true,
    anonymityLevel: "standard",
  });

  // Update safety setting
  const updateSafetySetting = (
    key: keyof typeof safetySettings,
    value: any
  ) => {
    setSafetySettings({
      ...safetySettings,
      [key]: value,
    });
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Safety & Moderation
        </CardTitle>
        <CardDescription>
          Control your privacy and safety settings
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="content-filtering">AI Content Filtering</Label>
              <p className="text-sm text-muted-foreground">
                Automatically filter potentially harmful or inappropriate
                messages
              </p>
            </div>
            <Switch
              id="content-filtering"
              checked={safetySettings.contentFiltering}
              onCheckedChange={(checked) =>
                updateSafetySetting("contentFiltering", checked)
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message-expiration">Message Expiration</Label>
            <p className="text-sm text-muted-foreground mb-2">
              Automatically delete messages after a period of inactivity
            </p>
            <div className="space-y-4">
              <Slider
                id="message-expiration"
                defaultValue={[safetySettings.messageExpiration]}
                max={90}
                min={1}
                step={1}
                onValueChange={(value) =>
                  updateSafetySetting("messageExpiration", value[0])
                }
              />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">1 day</span>
                <span className="text-sm font-medium">
                  {safetySettings.messageExpiration} days
                </span>
                <span className="text-sm text-muted-foreground">90 days</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="read-receipts">Read Receipts</Label>
              <p className="text-sm text-muted-foreground">
                Allow others to see when you've read their messages
              </p>
            </div>
            <Switch
              id="read-receipts"
              checked={safetySettings.readReceipts}
              onCheckedChange={(checked) =>
                updateSafetySetting("readReceipts", checked)
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
              checked={safetySettings.activityStatus}
              onCheckedChange={(checked) =>
                updateSafetySetting("activityStatus", checked)
              }
            />
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
              checked={safetySettings.locationSharing}
              onCheckedChange={(checked) =>
                updateSafetySetting("locationSharing", checked)
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="anonymity-level">Anonymity Level</Label>
            <p className="text-sm text-muted-foreground mb-2">
              Control how much information is shared with others
            </p>
            <select
              id="anonymity-level"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={safetySettings.anonymityLevel}
              onChange={(e) =>
                updateSafetySetting("anonymityLevel", e.target.value)
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
          </div>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-start gap-3">
            <Lock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">End-to-End Encryption</p>
              <p className="text-sm text-muted-foreground">
                All your messages are encrypted and can only be read by you and
                the recipient. Not even Anonymate can access your conversations.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full" variant="outline">
          <Shield className="h-4 w-4 mr-2" /> Save Safety Settings
        </Button>
        <div className="grid grid-cols-2 gap-2 w-full">
          <Button variant="outline" className="w-full">
            <Trash2 className="h-4 w-4 mr-2" /> Clear All Chats
          </Button>
          <Button variant="outline" className="w-full text-destructive">
            <X className="h-4 w-4 mr-2" /> Block All Users
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
