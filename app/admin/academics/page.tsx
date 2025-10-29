"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <BookOpen size={20} /> },
  { label: "Academics", href: "/admin/academics", icon: <BookOpen size={20} /> },
]

export default function AcademicsPage() {
  return (
    <ProtectedRoute requiredRoles={["admin"]}>
      <div className="flex">
        <Sidebar navItems={adminNavItems} title="Admin Panel" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Academics Management</h1>
            <p className="text-muted-foreground mb-8">Manage classes, subjects, and assignments</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Classes</CardTitle>
                  <CardDescription>Manage all classes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-3xl font-bold">42</div>
                  <Button className="w-full">View Classes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subjects</CardTitle>
                  <CardDescription>Manage subjects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-3xl font-bold">156</div>
                  <Button className="w-full">View Subjects</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Assignments</CardTitle>
                  <CardDescription>Track assignments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-3xl font-bold">324</div>
                  <Button className="w-full">View Assignments</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
