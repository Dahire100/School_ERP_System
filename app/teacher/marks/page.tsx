"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
]

export default function MarksPage() {
  const [marks, setMarks] = useState<Record<number, string>>({})

  const handleMarkChange = (studentId: number, value: string) => {
    setMarks((prev) => ({
      ...prev,
      [studentId]: value,
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
              <h1 className="text-3xl font-bold text-foreground mb-2">Enter Marks</h1>
              <p className="text-muted-foreground">Class 10-A - Mathematics - Mid Term Exam</p>
            </div>

            {/* Marks Card */}
            <Card>
              <CardHeader>
                <CardTitle>Student Marks</CardTitle>
                <CardDescription>Enter marks out of 100</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {mockStudents.map((student) => (
                    <div key={student.id} className="flex items-center gap-4 p-3 border rounded-lg">
                      <div className="flex-1">
                        <p className="font-semibold">{student.name}</p>
                        <p className="text-xs text-muted-foreground">Roll No: {student.rollNo}</p>
                      </div>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        placeholder="Marks"
                        value={marks[student.id] || ""}
                        onChange={(e) => handleMarkChange(student.id, e.target.value)}
                        className="w-24"
                      />
                    </div>
                  ))}
                </div>
                <Button className="w-full gap-2">
                  <Save size={16} />
                  Save Marks
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
