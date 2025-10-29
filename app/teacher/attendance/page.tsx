"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, FileText, BarChart3, Settings, Save } from "lucide-react"
import { useState } from "react"

const teacherNavItems = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: <BarChart3 size={20} /> },
  { label: "My Classes", href: "/teacher/classes", icon: <Users size={20} /> },
  { label: "Assignments", href: "/teacher/assignments", icon: <FileText size={20} /> },
  { label: "Attendance", href: "/teacher/attendance", icon: <Users size={20} /> },
  { label: "Marks", href: "/teacher/marks", icon: <BookOpen size={20} /> },
  { label: "Settings", href: "/teacher/settings", icon: <Settings size={20} /> },
]

const mockStudents = [
  { id: 1, name: "John Doe", rollNo: "001" },
  { id: 2, name: "Jane Smith", rollNo: "002" },
  { id: 3, name: "Mike Johnson", rollNo: "003" },
  { id: 4, name: "Sarah Williams", rollNo: "004" },
  { id: 5, name: "Tom Brown", rollNo: "005" },
]

export default function AttendancePage() {
  const [attendance, setAttendance] = useState<Record<number, boolean>>({})

  const toggleAttendance = (studentId: number) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: !prev[studentId],
    }))
  }

  return (
    <ProtectedRoute requiredRoles={["teacher"]}>
      <div className="flex">
        <Sidebar navItems={teacherNavItems} title="Teacher Portal" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Mark Attendance</h1>
              <p className="text-muted-foreground">Class 10-A - {new Date().toLocaleDateString()}</p>
            </div>

            {/* Attendance Card */}
            <Card>
              <CardHeader>
                <CardTitle>Student Attendance</CardTitle>
                <CardDescription>Check the students present today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {mockStudents.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50"
                    >
                      <div>
                        <p className="font-semibold">{student.name}</p>
                        <p className="text-xs text-muted-foreground">Roll No: {student.rollNo}</p>
                      </div>
                      <button
                        onClick={() => toggleAttendance(student.id)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                          attendance[student.id] ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {attendance[student.id] ? "Present" : "Absent"}
                      </button>
                    </div>
                  ))}
                </div>
                <Button className="w-full gap-2">
                  <Save size={16} />
                  Save Attendance
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
