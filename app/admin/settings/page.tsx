"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Users, BookOpen, DollarSign, BarChart3, Settings } from "lucide-react"

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Students", href: "/admin/students", icon: <Users size={20} /> },
  { label: "Teachers", href: "/admin/teachers", icon: <BookOpen size={20} /> },
  { label: "Classes", href: "/admin/classes", icon: <Users size={20} /> },
  { label: "Finance", href: "/admin/finance", icon: <DollarSign size={20} /> },
  { label: "Settings", href: "/admin/settings", icon: <Settings size={20} /> },
]

export default function SettingsPage() {
  return (
    <ProtectedRoute requiredRoles={["admin"]}>
      <div className="flex">
        <Sidebar navItems={adminNavItems} title="Admin Panel" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
              <p className="text-muted-foreground">Manage school settings and configuration</p>
            </div>

            {/* School Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>School Information</CardTitle>
                <CardDescription>Update your school details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="school-name">School Name</Label>
                  <Input id="school-name" placeholder="Enter school name" defaultValue="ABC School" />
                </div>
                <div>
                  <Label htmlFor="school-code">School Code</Label>
                  <Input id="school-code" placeholder="Enter school code" defaultValue="ABC-001" />
                </div>
                <div>
                  <Label htmlFor="school-email">School Email</Label>
                  <Input
                    id="school-email"
                    type="email"
                    placeholder="Enter school email"
                    defaultValue="info@abcschool.com"
                  />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            {/* Academic Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Academic Settings</CardTitle>
                <CardDescription>Configure academic year and terms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="academic-year">Academic Year</Label>
                  <Input id="academic-year" placeholder="2024-2025" defaultValue="2024-2025" />
                </div>
                <div>
                  <Label htmlFor="terms">Number of Terms</Label>
                  <Input id="terms" type="number" placeholder="3" defaultValue="3" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
