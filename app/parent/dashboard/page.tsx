"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/lib/icons"
import Link from "next/link"

const parentNavItems = [
  { label: "Dashboard", href: "/parent/dashboard", icon: <Icons.BarChart3 /> },
  { label: "Child Progress", href: "/parent/progress", icon: <Icons.BarChart3 /> },
  { label: "Attendance", href: "/parent/attendance", icon: <Icons.Calendar /> },
  { label: "Fees", href: "/parent/fees", icon: <Icons.DollarSign /> },
  { label: "Communication", href: "/parent/communication", icon: <Icons.AlertCircle /> },
  { label: "Settings", href: "/parent/settings", icon: <Icons.Settings /> },
]

export default function ParentDashboard() {
  return (
    <ProtectedRoute requiredRoles={["parent"]}>
      <div className="flex">
        <Sidebar navItems={parentNavItems} title="Parent Portal" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Monitor your child's academic progress</p>
            </div>

            {/* Child Selection */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-muted-foreground mb-3">Viewing:</p>
              <div className="flex gap-2 flex-wrap">
                {["John Doe", "Jane Doe"].map((child) => (
                  <Button key={child} variant="outline" className="bg-transparent">
                    {child}
                  </Button>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Average Grade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">A-</div>
                  <p className="text-xs text-muted-foreground mt-1">Overall performance</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">94%</div>
                  <p className="text-xs text-muted-foreground mt-1">Current month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Pending Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-destructive">$500</div>
                  <p className="text-xs text-muted-foreground mt-1">Due this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Assignments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground mt-1">Pending submission</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Performance */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Performance</CardTitle>
                  <CardDescription>Latest marks and grades</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { subject: "Mathematics", marks: 88, grade: "A" },
                      { subject: "English", marks: 82, grade: "B+" },
                      { subject: "Science", marks: 90, grade: "A+" },
                      { subject: "History", marks: 85, grade: "A" },
                    ].map((item) => (
                      <div key={item.subject} className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-semibold">{item.subject}</p>
                          <p className="text-xs text-muted-foreground">Latest exam</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{item.marks}/100</p>
                          <p className="text-xs font-semibold text-accent">{item.grade}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/parent/progress">
                    <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                      <Icons.BarChart3 />
                      <span className="truncate">View Progress</span>
                    </Button>
                  </Link>
                  <Link href="/parent/attendance">
                    <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                      <Icons.Calendar />
                      <span className="truncate">Check Attendance</span>
                    </Button>
                  </Link>
                  <Link href="/parent/fees">
                    <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                      <Icons.DollarSign />
                      <span className="truncate">Pay Fees</span>
                    </Button>
                  </Link>
                  <Link href="/parent/communication">
                    <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                      <Icons.AlertCircle />
                      <span className="truncate">Messages</span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
