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

const mockAttendance = [
  { subject: "Mathematics", present: 42, absent: 3, percentage: 93 },
  { subject: "English", present: 40, absent: 5, percentage: 89 },
  { subject: "Science", present: 44, absent: 1, percentage: 98 },
  { subject: "History", present: 41, absent: 4, percentage: 91 },
  { subject: "Computer Science", present: 43, absent: 2, percentage: 96 },
]

export default function AttendancePage() {
  return (
    <ProtectedRoute requiredRoles={["student"]}>
      <div className="flex">
        <Sidebar navItems={studentNavItems} title="Student Portal" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Attendance</h1>
              <p className="text-muted-foreground">View your attendance record</p>
            </div>

            {/* Attendance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Overall Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">94%</div>
                  <p className="text-xs text-muted-foreground mt-1">Current month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Classes Present</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">210</div>
                  <p className="text-xs text-muted-foreground mt-1">Total classes attended</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Classes Absent</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">15</div>
                  <p className="text-xs text-muted-foreground mt-1">Total absences</p>
                </CardContent>
              </Card>
            </div>

            {/* Attendance Table */}
            <Card>
              <CardHeader>
                <CardTitle>Subject-wise Attendance</CardTitle>
                <CardDescription>Your attendance in each subject</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Subject</th>
                        <th className="text-center py-3 px-4 font-semibold">Present</th>
                        <th className="text-center py-3 px-4 font-semibold">Absent</th>
                        <th className="text-center py-3 px-4 font-semibold">Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockAttendance.map((att) => (
                        <tr key={att.subject} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-semibold">{att.subject}</td>
                          <td className="text-center py-3 px-4">{att.present}</td>
                          <td className="text-center py-3 px-4">{att.absent}</td>
                          <td className="text-center py-3 px-4">
                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                              {att.percentage}%
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
