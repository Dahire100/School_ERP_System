"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3 } from "lucide-react"

const teacherNavItems = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Examinations", href: "/teacher/examinations", icon: <BarChart3 size={20} /> },
]

export default function ExaminationsPage() {
  return (
    <ProtectedRoute requiredRoles={["teacher"]}>
      <div className="flex">
        <Sidebar navItems={teacherNavItems} title="Teacher Portal" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Examinations</h1>
            <p className="text-muted-foreground mb-8">Enter student marks and manage exams</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Exams</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">6</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Marks Entered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">4</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">2</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Enter Marks</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Enter Exam Marks</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Bulk Upload
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>View Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Marks</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Generate Report
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
