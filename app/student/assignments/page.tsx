"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, BarChart3, Settings, Calendar, Download, Upload } from "lucide-react"

const studentNavItems = [
  { label: "Dashboard", href: "/student/dashboard", icon: <BarChart3 size={20} /> },
  { label: "My Classes", href: "/student/classes", icon: <BookOpen size={20} /> },
  { label: "Assignments", href: "/student/assignments", icon: <FileText size={20} /> },
  { label: "Marks", href: "/student/marks", icon: <BarChart3 size={20} /> },
  { label: "Attendance", href: "/student/attendance", icon: <Calendar size={20} /> },
  { label: "Settings", href: "/student/settings", icon: <Settings size={20} /> },
]

const mockAssignments = [
  {
    id: 1,
    title: "Algebra Problems",
    subject: "Mathematics",
    dueDate: "2025-11-05",
    status: "Pending",
    description: "Solve problems 1-20 from chapter 5",
  },
  {
    id: 2,
    title: "Essay on History",
    subject: "History",
    dueDate: "2025-11-08",
    status: "Submitted",
    description: "Write a 500-word essay on the French Revolution",
  },
  {
    id: 3,
    title: "Science Project",
    subject: "Science",
    dueDate: "2025-11-12",
    status: "Pending",
    description: "Create a model of the solar system",
  },
]

export default function AssignmentsPage() {
  return (
    <ProtectedRoute requiredRoles={["student"]}>
      <div className="flex">
        <Sidebar navItems={studentNavItems} title="Student Portal" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Assignments</h1>
              <p className="text-muted-foreground">View and submit your assignments</p>
            </div>

            {/* Assignments List */}
            <div className="space-y-4">
              {mockAssignments.map((assignment) => (
                <Card key={assignment.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{assignment.title}</h3>
                        <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          assignment.status === "Submitted"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {assignment.status}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{assignment.description}</p>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-muted-foreground">Due Date</p>
                        <p className="font-semibold">{assignment.dueDate}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                          <Download size={16} />
                          Download
                        </Button>
                        {assignment.status === "Pending" && (
                          <Button size="sm" className="gap-2">
                            <Upload size={16} />
                            Submit
                          </Button>
                        )}
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
