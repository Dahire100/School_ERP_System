"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3 } from "lucide-react"

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Reports", href: "/admin/reports", icon: <BarChart3 size={20} /> },
]

export default function ReportsPage() {
  return (
    <ProtectedRoute requiredRoles={["admin"]}>
      <div className="flex">
        <Sidebar navItems={adminNavItems} title="Admin Panel" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Reports</h1>
            <p className="text-muted-foreground mb-8">Generate and manage report cards for all students</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Report Cards</CardTitle>
                  <CardDescription>Generate student report cards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Generate Report Cards</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Generated Reports
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Academic Reports</CardTitle>
                  <CardDescription>View academic performance reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Class Performance</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Subject Analysis
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Attendance Reports</CardTitle>
                  <CardDescription>View attendance statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Student Attendance</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Staff Attendance
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Reports</CardTitle>
                  <CardDescription>View financial summaries</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Fee Collection</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Expense Report
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
