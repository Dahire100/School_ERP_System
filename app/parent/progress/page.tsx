"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Settings, Calendar, DollarSign, AlertCircle } from "lucide-react"

const parentNavItems = [
  { label: "Dashboard", href: "/parent/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Child Progress", href: "/parent/progress", icon: <BarChart3 size={20} /> },
  { label: "Attendance", href: "/parent/attendance", icon: <Calendar size={20} /> },
  { label: "Fees", href: "/parent/fees", icon: <DollarSign size={20} /> },
  { label: "Communication", href: "/parent/communication", icon: <AlertCircle size={20} /> },
  { label: "Settings", href: "/parent/settings", icon: <Settings size={20} /> },
]

const mockProgress = [
  { subject: "Mathematics", q1: 85, q2: 88, q3: 90, average: 87.7, trend: "up" },
  { subject: "English", q1: 78, q2: 80, q3: 82, average: 80, trend: "up" },
  { subject: "Science", q1: 88, q2: 90, q3: 92, average: 90, trend: "up" },
  { subject: "History", q1: 82, q2: 84, q3: 85, average: 83.7, trend: "up" },
  { subject: "Computer Science", q1: 92, q2: 94, q3: 95, average: 93.7, trend: "up" },
]

export default function ProgressPage() {
  return (
    <ProtectedRoute requiredRoles={["parent"]}>
      <div className="flex">
        <Sidebar navItems={parentNavItems} title="Parent Portal" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Child Progress</h1>
              <p className="text-muted-foreground">Track your child's academic performance over time</p>
            </div>

            {/* Progress Table */}
            <Card>
              <CardHeader>
                <CardTitle>Subject-wise Performance</CardTitle>
                <CardDescription>Quarterly marks and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Subject</th>
                        <th className="text-center py-3 px-4 font-semibold">Q1</th>
                        <th className="text-center py-3 px-4 font-semibold">Q2</th>
                        <th className="text-center py-3 px-4 font-semibold">Q3</th>
                        <th className="text-center py-3 px-4 font-semibold">Average</th>
                        <th className="text-center py-3 px-4 font-semibold">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockProgress.map((prog) => (
                        <tr key={prog.subject} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-semibold">{prog.subject}</td>
                          <td className="text-center py-3 px-4">{prog.q1}</td>
                          <td className="text-center py-3 px-4">{prog.q2}</td>
                          <td className="text-center py-3 px-4">{prog.q3}</td>
                          <td className="text-center py-3 px-4 font-semibold">{prog.average.toFixed(1)}</td>
                          <td className="text-center py-3 px-4">
                            <span className="text-green-600 font-semibold">↑ Improving</span>
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
