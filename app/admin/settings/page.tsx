"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Shield,
  Bell,
  CreditCard,
  Save,
  RefreshCw,
  Database,
  Lock,
  Mail,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Platform Settings
          </h2>
          <p className="text-muted-foreground">
            Configure and manage your platform settings
          </p>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="moderation">Moderation</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="api">API & Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Information</CardTitle>
              <CardDescription>
                Basic information about your platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="platform-name">Platform Name</Label>
                <Input id="platform-name" defaultValue="Anonymate" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="platform-description">
                  Platform Description
                </Label>
                <Textarea
                  id="platform-description"
                  defaultValue="Connect authentically through text-based conversations, powered by AI"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="support-email">Support Email</Label>
                <Input
                  id="support-email"
                  defaultValue="support@anonymate.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website-url">Website URL</Label>
                <Input
                  id="website-url"
                  defaultValue="https://anonymate.com"
                  type="url"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-1">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regional Settings</CardTitle>
              <CardDescription>
                Configure timezone and regional preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="timezone">Default Timezone</Label>
                <select
                  id="timezone"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="Europe/London">
                    Greenwich Mean Time (GMT)
                  </option>
                  <option value="Europe/Paris">
                    Central European Time (CET)
                  </option>
                  <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date-format">Date Format</Label>
                <select
                  id="date-format"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Default Language</Label>
                <select
                  id="language"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="ja">Japanese</option>
                  <option value="zh">Chinese</option>
                </select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-1">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="moderation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Moderation Settings</CardTitle>
              <CardDescription>
                Configure AI moderation and content filtering
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="ai-moderation">AI Content Moderation</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically filter potentially harmful or inappropriate
                    content
                  </p>
                </div>
                <Switch id="ai-moderation" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label>Moderation Sensitivity</Label>
                <div className="space-y-4">
                  <Slider defaultValue={[75]} max={100} min={0} step={1} />
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Low</span>
                    <span className="text-sm font-medium">Medium</span>
                    <span className="text-sm text-muted-foreground">High</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Higher sensitivity may flag more content but could increase
                  false positives
                </p>
              </div>

              <div className="space-y-2">
                <Label>Content Categories to Moderate</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="mod-harassment" defaultChecked />
                    <Label htmlFor="mod-harassment">
                      Harassment & Bullying
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="mod-hate" defaultChecked />
                    <Label htmlFor="mod-hate">Hate Speech</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="mod-sexual" defaultChecked />
                    <Label htmlFor="mod-sexual">Sexual Content</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="mod-violence" defaultChecked />
                    <Label htmlFor="mod-violence">Violence & Threats</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="mod-spam" defaultChecked />
                    <Label htmlFor="mod-spam">Spam & Scams</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="mod-personal" defaultChecked />
                    <Label htmlFor="mod-personal">Personal Information</Label>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-actions">Automated Actions</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically take action on flagged content
                  </p>
                </div>
                <Switch id="auto-actions" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="auto-action-level">
                  Automated Action Level
                </Label>
                <select
                  id="auto-action-level"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="flag">Flag for review only</option>
                  <option value="hide">Hide content until reviewed</option>
                  <option value="remove">Remove content automatically</option>
                  <option value="warn">Warn user automatically</option>
                </select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-1">
                <Shield className="h-4 w-4" />
                Save Moderation Settings
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Verification Settings</CardTitle>
              <CardDescription>
                Configure user verification and authentication requirements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-verification">Email Verification</Label>
                  <p className="text-sm text-muted-foreground">
                    Require users to verify their email address
                  </p>
                </div>
                <Switch id="email-verification" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow users to enable two-factor authentication
                  </p>
                </div>
                <Switch id="two-factor" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="captcha">CAPTCHA on Registration</Label>
                  <p className="text-sm text-muted-foreground">
                    Require CAPTCHA verification during registration
                  </p>
                </div>
                <Switch id="captcha" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password-policy">Password Policy</Label>
                <select
                  id="password-policy"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="basic">Basic (8+ characters)</option>
                  <option value="medium">Medium (8+ chars, mixed case)</option>
                  <option value="strong">
                    Strong (8+ chars, mixed case, numbers)
                  </option>
                  <option value="very-strong">
                    Very Strong (12+ chars, mixed case, numbers, symbols)
                  </option>
                </select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-1">
                <Lock className="h-4 w-4" />
                Save Security Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure system and user notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Admin Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notify-new-users">
                        New User Registrations
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications for new user sign-ups
                      </p>
                    </div>
                    <Switch id="notify-new-users" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notify-reports">User Reports</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications for new user reports
                      </p>
                    </div>
                    <Switch id="notify-reports" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notify-payments">Payment Events</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications for payment events
                      </p>
                    </div>
                    <Switch id="notify-payments" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notify-system">System Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications for system events and errors
                      </p>
                    </div>
                    <Switch id="notify-system" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">
                  User Notification Templates
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="welcome-email">Welcome Email</Label>
                    <Textarea
                      id="welcome-email"
                      defaultValue="Welcome to Anonymate! We're excited to have you join our community of authentic connections. Get started by completing your profile and exploring matches."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="match-notification">
                      Match Notification
                    </Label>
                    <Textarea
                      id="match-notification"
                      defaultValue="Good news! You have a new match on Anonymate. Start a conversation to discover if this is the connection you've been looking for."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Notification Channels</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">
                        Email Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Send notifications via email
                      </p>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-notifications">
                        Push Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Send notifications via push notifications
                      </p>
                    </div>
                    <Switch id="push-notifications" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="in-app-notifications">
                        In-App Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Send notifications within the application
                      </p>
                    </div>
                    <Switch id="in-app-notifications" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-1">
                <Bell className="h-4 w-4" />
                Save Notification Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing & Subscription Settings</CardTitle>
              <CardDescription>
                Configure payment and subscription options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Payment Providers</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="stripe-enabled">Stripe</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable Stripe payment processing
                      </p>
                    </div>
                    <Switch id="stripe-enabled" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="paypal-enabled">PayPal</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable PayPal payment processing
                      </p>
                    </div>
                    <Switch id="paypal-enabled" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Subscription Plans</h3>
                <div className="space-y-4">
                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Basic Plan</h4>
                        <p className="text-sm text-muted-foreground">
                          $4.99/month
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Premium Plan</h4>
                        <p className="text-sm text-muted-foreground">
                          $9.99/month
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Add New Plan
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Billing Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="trial-enabled">Free Trial</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable free trial period for new users
                      </p>
                    </div>
                    <Switch id="trial-enabled" defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trial-days">Trial Period (Days)</Label>
                    <Input id="trial-days" type="number" defaultValue="14" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-renew">Auto-Renewal</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically renew subscriptions
                      </p>
                    </div>
                    <Switch id="auto-renew" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-1">
                <CreditCard className="h-4 w-4" />
                Save Billing Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API & Integration Settings</CardTitle>
              <CardDescription>
                Configure API access and third-party integrations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Access</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="api-enabled">Enable API</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow API access to your platform
                      </p>
                    </div>
                    <Switch id="api-enabled" defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <div className="flex gap-2">
                      <Input
                        id="api-key"
                        defaultValue="sk_live_51NzQjTKG6H7P1vX5aBCD1234"
                        type="password"
                      />
                      <Button variant="outline" size="icon">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Keep this key secret. Regenerate if compromised.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="api-rate-limit">
                      Rate Limit (requests per minute)
                    </Label>
                    <Input
                      id="api-rate-limit"
                      type="number"
                      defaultValue="100"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">
                  Third-Party Integrations
                </h3>
                <div className="space-y-4">
                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">Database</h4>
                          <p className="text-sm text-muted-foreground">
                            Connected to Supabase
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">Email Service</h4>
                          <p className="text-sm text-muted-foreground">
                            Connected to SendGrid
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">Payment Gateway</h4>
                          <p className="text-sm text-muted-foreground">
                            Connected to Stripe
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Add New Integration
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-1">
                <Save className="h-4 w-4" />
                Save API Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
