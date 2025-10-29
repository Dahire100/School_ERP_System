"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, BarChart3, Settings, Calendar, Eye } from "lucide-react"

const studentNavItems = [
  { label: "Dashboard", href: "/student/dashboard", icon: <BarChart3 size={20} /> },
  { label: "My Classes", href: "/student/classes", icon: <BookOpen size={20} /> },
  { label: "Assignments", href: "/student/assignments", icon: <FileText size={20} /> },
  { label: "Marks", href: "/student/marks", icon: <BarChart3 size={20} /> },
  { label: "Attendance", href: "/student/attendance", icon: <Calendar size={20} /> },
  { label: "Settings", href: "/student/settings", icon: <Settings size={20} /> },
]

const mockClasses = [
  { id: 1, name: "Mathematics", teacher: "Dr. Robert Brown", room: "A-101", schedule: "Mon, Wed, Fri" },
  { id: 2, name: "English", teacher: "Ms. Emily Davis", room: "A-102", schedule: "Tue, Thu" },
  { id: 3, name: "Science", teacher: "Mr. James Wilson", room: "B-101", schedule: "Mon, Wed, Fri" },
  { id: 4, name: "History", teacher: "Ms. Sarah Johnson", room: "B-102", schedule: "Tue, Thu" },
  { id: 5, name: "Computer Science", teacher: "Mr. Alex Kumar", room: "C-101", schedule: "Mon, Wed" },
  { id: 6, name: "Physical Education", teacher: "Mr. Tom Davis", room: "Gym", schedule: "Fri" },
]

export default function ClassesPage() {
  return (
    <ProtectedRoute requiredRoles={["student"]}>
      <div className="flex">
        <Sidebar navItems={studentNavItems} title="Student Portal" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">My Classes</h1>
              <p className="text-muted-foreground">View your enrolled courses</p>
            </div>

            {/* Classes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockClasses.map((cls) => (
                <Card key={cls.id}>
                  <CardHeader>
                    <CardTitle>{cls.name}</CardTitle>
                    <CardDescription>{cls.teacher}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Room</p>
                        <p className="font-semibold">{cls.room}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Schedule</p>
                        <p className="font-semibold">{cls.schedule}</p>
                      </div>
                    </div>
                    <Button className="w-full gap-2">
                      <Eye size={16} />
                      View Details
                    </Button>
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
