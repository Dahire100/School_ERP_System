"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, FileText, BarChart3, Settings, Plus, Edit, Trash2 } from "lucide-react"

const teacherNavItems = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: <BarChart3 size={20} /> },
  { label: "My Classes", href: "/teacher/classes", icon: <Users size={20} /> },
  { label: "Assignments", href: "/teacher/assignments", icon: <FileText size={20} /> },
  { label: "Attendance", href: "/teacher/attendance", icon: <Users size={20} /> },
  { label: "Marks", href: "/teacher/marks", icon: <BookOpen size={20} /> },
  { label: "Settings", href: "/teacher/settings", icon: <Settings size={20} /> },
]

const mockAssignments = [
  { id: 1, title: "Algebra Problems", class: "10-A", dueDate: "2025-11-05", submissions: 28, total: 35 },
  { id: 2, title: "Geometry Project", class: "10-B", dueDate: "2025-11-08", submissions: 25, total: 32 },
  { id: 3, title: "Calculus Worksheet", class: "11-A", dueDate: "2025-11-10", submissions: 35, total: 38 },
]

export default function AssignmentsPage() {
  return (
    <ProtectedRoute requiredRoles={["teacher"]}>
      <div className="flex">
        <Sidebar navItems={teacherNavItems} title="Teacher Portal" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Assignments</h1>
                <p className="text-muted-foreground">Create and manage assignments</p>
              </div>
              <Button className="gap-2">
                <Plus size={20} />
                Create Assignment
              </Button>
            </div>

            {/* Assignments List */}
            <div className="space-y-4">
              {mockAssignments.map((assignment) => (
                <Card key={assignment.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{assignment.title}</h3>
                        <p className="text-sm text-muted-foreground">Class {assignment.class}</p>
                        <div className="mt-3 flex gap-6">
                          <div>
                            <p className="text-xs text-muted-foreground">Due Date</p>
                            <p className="font-semibold">{assignment.dueDate}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Submissions</p>
                            <p className="font-semibold">
                              {assignment.submissions}/{assignment.total}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
