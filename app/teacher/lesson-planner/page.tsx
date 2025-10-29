"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

const teacherNavItems = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: <Calendar size={20} /> },
  { label: "Lesson Planner", href: "/teacher/lesson-planner", icon: <Calendar size={20} /> },
]

export default function LessonPlannerPage() {
  return (
    <ProtectedRoute requiredRoles={["teacher"]}>
      <div className="flex">
        <Sidebar navItems={teacherNavItems} title="Teacher Portal" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Lesson Planner</h1>
            <p className="text-muted-foreground mb-8">Plan and organize your lessons</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Create Lesson Plan</CardTitle>
                  <CardDescription>Plan new lessons</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Create New Lesson</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Use Template
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>My Lesson Plans</CardTitle>
                  <CardDescription>View all lesson plans</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View All Plans</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Calendar View
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lesson Templates</CardTitle>
                  <CardDescription>Browse available templates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Templates</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Create Template
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lesson Resources</CardTitle>
                  <CardDescription>Manage teaching resources</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Resources</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Upload Resource
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
