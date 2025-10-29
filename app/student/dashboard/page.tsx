"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/lib/icons"
import Link from "next/link"

const studentNavItems = [
  { label: "Dashboard", href: "/student/dashboard", icon: <Icons.BarChart3 /> },
  { label: "My Profile", href: "/student/profile", icon: <Icons.BookOpen /> },
  { label: "Academics", href: "/student/academics", icon: <Icons.BookOpen /> },
  { label: "H.W. / C.W.", href: "/student/homework", icon: <Icons.FileText /> },
  { label: "Download Center", href: "/student/download-center", icon: <Icons.FileText /> },
  { label: "Online Exam", href: "/student/online-exam", icon: <Icons.BarChart3 /> },
  { label: "Online Class", href: "/student/online-class", icon: <Icons.BookOpen /> },
  { label: "Examinations", href: "/student/examinations", icon: <Icons.BarChart3 /> },
  { label: "Report", href: "/student/report", icon: <Icons.BarChart3 /> },
  { label: "Library", href: "/student/library", icon: <Icons.BookOpen /> },
  { label: "Transport", href: "/student/transport", icon: <Icons.BookOpen /> },
  { label: "Hostel", href: "/student/hostel", icon: <Icons.BookOpen /> },
  { label: "Student Wallet", href: "/student/wallet", icon: <Icons.BookOpen /> },
  { label: "Communicate", href: "/student/communicate", icon: <Icons.BookOpen /> },
  { label: "Settings", href: "/student/settings", icon: <Icons.Settings /> },
]

export default function StudentDashboard() {
  return (
    <ProtectedRoute requiredRoles={["student"]}>
      <div className="flex">
        <Sidebar navItems={studentNavItems} title="Student Portal" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Welcome to your learning portal</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">My Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">6</div>
                  <p className="text-xs text-muted-foreground mt-1">Active courses</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Pending Assignments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground mt-1">Due this week</p>
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
                  <CardTitle className="text-sm font-medium text-muted-foreground">Average Grade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">A-</div>
                  <p className="text-xs text-muted-foreground mt-1">Overall performance</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Pending Assignments */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Pending Assignments</CardTitle>
                  <CardDescription>Assignments due soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { title: "Algebra Problems", subject: "Mathematics", dueDate: "2025-11-05", daysLeft: 2 },
                      { title: "Essay on History", subject: "History", dueDate: "2025-11-08", daysLeft: 5 },
                      { title: "Science Project", subject: "Science", dueDate: "2025-11-12", daysLeft: 9 },
                    ].map((assignment, i) => (
                      <Link key={i} href="/student/homework">
                        <div className="flex justify-between items-start p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
                          <div>
                            <p className="font-semibold">{assignment.title}</p>
                            <p className="text-xs text-muted-foreground">{assignment.subject}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-semibold text-accent">{assignment.daysLeft} days left</p>
                            <p className="text-xs text-muted-foreground">{assignment.dueDate}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                  <CardDescription>Common actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/student/academics">
                    <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                      <Icons.BookOpen />
                      <span className="truncate">View Classes</span>
                    </Button>
                  </Link>
                  <Link href="/student/report">
                    <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                      <Icons.BarChart3 />
                      <span className="truncate">View Marks</span>
                    </Button>
                  </Link>
                  <Link href="/student/attendance">
                    <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                      <Icons.Calendar />
                      <span className="truncate">Attendance</span>
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
