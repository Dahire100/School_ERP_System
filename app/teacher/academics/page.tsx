"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

const teacherNavItems = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: <BookOpen size={20} /> },
  { label: "Academics", href: "/teacher/academics", icon: <BookOpen size={20} /> },
]

export default function AcademicsPage() {
  return (
    <ProtectedRoute requiredRoles={["teacher"]}>
      <div className="flex">
        <Sidebar navItems={teacherNavItems} title="Teacher Portal" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Academics</h1>
            <p className="text-muted-foreground mb-8">Manage academic content and curriculum</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Curriculum</CardTitle>
                  <CardDescription>View and manage curriculum</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Curriculum</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Update Curriculum
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subjects</CardTitle>
                  <CardDescription>Manage your subjects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Subjects</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Add Subject
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Topics</CardTitle>
                  <CardDescription>Manage topics and chapters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Topics</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Add Topic
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Learning Outcomes</CardTitle>
                  <CardDescription>Track learning objectives</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Outcomes</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Add Outcome
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
