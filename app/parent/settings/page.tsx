"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BarChart3, Settings, Calendar, DollarSign, AlertCircle } from "lucide-react"

const parentNavItems = [
  { label: "Dashboard", href: "/parent/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Child Progress", href: "/parent/progress", icon: <BarChart3 size={20} /> },
  { label: "Attendance", href: "/parent/attendance", icon: <Calendar size={20} /> },
  { label: "Fees", href: "/parent/fees", icon: <DollarSign size={20} /> },
  { label: "Communication", href: "/parent/communication", icon: <AlertCircle size={20} /> },
  { label: "Settings", href: "/parent/settings", icon: <Settings size={20} /> },
]

export default function SettingsPage() {
  return (
    <ProtectedRoute requiredRoles={["parent"]}>
      <div className="flex">
        <Sidebar navItems={parentNavItems} title="Parent Portal" />

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
                  <Input id="name" placeholder="Enter your name" defaultValue="Mr. John Smith" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" defaultValue="john@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone" defaultValue="+1-234-567-8900" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            {/* Child Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Child Information</CardTitle>
                <CardDescription>Manage your children's profiles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="child1">Child 1</Label>
                  <Input id="child1" placeholder="Child name" defaultValue="John Doe" disabled />
                </div>
                <div>
                  <Label htmlFor="child2">Child 2</Label>
                  <Input id="child2" placeholder="Child name" defaultValue="Jane Doe" disabled />
                </div>
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
                  <label className="font-semibold">Marks Notifications</label>
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="font-semibold">Attendance Alerts</label>
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="font-semibold">Fee Reminders</label>
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
