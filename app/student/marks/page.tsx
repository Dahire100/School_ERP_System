"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, BarChart3, Settings, Calendar } from "lucide-react"

const studentNavItems = [
  { label: "Dashboard", href: "/student/dashboard", icon: <BarChart3 size={20} /> },
  { label: "My Classes", href: "/student/classes", icon: <BookOpen size={20} /> },
  { label: "Assignments", href: "/student/assignments", icon: <FileText size={20} /> },
  { label: "Marks", href: "/student/marks", icon: <BarChart3 size={20} /> },
  { label: "Attendance", href: "/student/attendance", icon: <Calendar size={20} /> },
  { label: "Settings", href: "/student/settings", icon: <Settings size={20} /> },
]

const mockMarks = [
  { subject: "Mathematics", midTerm: 85, finalTerm: 88, average: 86.5, grade: "A" },
  { subject: "English", midTerm: 78, finalTerm: 82, average: 80, grade: "B+" },
  { subject: "Science", midTerm: 92, finalTerm: 90, average: 91, grade: "A+" },
  { subject: "History", midTerm: 88, finalTerm: 85, average: 86.5, grade: "A" },
  { subject: "Computer Science", midTerm: 95, finalTerm: 93, average: 94, grade: "A+" },
]

export default function MarksPage() {
  return (
    <ProtectedRoute requiredRoles={["student"]}>
      <div className="flex">
        <Sidebar navItems={studentNavItems} title="Student Portal" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">My Marks</h1>
              <p className="text-muted-foreground">View your academic performance</p>
            </div>

            {/* Marks Table */}
            <Card>
              <CardHeader>
                <CardTitle>Academic Performance</CardTitle>
                <CardDescription>Your marks across all subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Subject</th>
                        <th className="text-center py-3 px-4 font-semibold">Mid Term</th>
                        <th className="text-center py-3 px-4 font-semibold">Final Term</th>
                        <th className="text-center py-3 px-4 font-semibold">Average</th>
                        <th className="text-center py-3 px-4 font-semibold">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockMarks.map((mark) => (
                        <tr key={mark.subject} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-semibold">{mark.subject}</td>
                          <td className="text-center py-3 px-4">{mark.midTerm}</td>
                          <td className="text-center py-3 px-4">{mark.finalTerm}</td>
                          <td className="text-center py-3 px-4 font-semibold">{mark.average}</td>
                          <td className="text-center py-3 px-4">
                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                              {mark.grade}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
