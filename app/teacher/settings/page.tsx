"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, Users, FileText, BarChart3, Settings } from "lucide-react"

const teacherNavItems = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: <BarChart3 size={20} /> },
  { label: "My Classes", href: "/teacher/classes", icon: <Users size={20} /> },
  { label: "Assignments", href: "/teacher/assignments", icon: <FileText size={20} /> },
  { label: "Attendance", href: "/teacher/attendance", icon: <Users size={20} /> },
  { label: "Marks", href: "/teacher/marks", icon: <BookOpen size={20} /> },
  { label: "Settings", href: "/teacher/settings", icon: <Settings size={20} /> },
]

export default function SettingsPage() {
  return (
    <ProtectedRoute requiredRoles={["teacher"]}>
      <div className="flex">
        <Sidebar navItems={teacherNavItems} title="Teacher Portal" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
              <p className="text-muted-foreground">Manage your profile and preferences</p>
            </div>

            {/* Profile Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" defaultValue="Dr. Robert Brown" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" defaultValue="robert@school.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone" defaultValue="+1-234-567-8900" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            {/* Notification Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="font-semibold">Email Notifications</label>
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="font-semibold">Assignment Reminders</label>
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                </div>
                <Button>Save Preferences</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
