"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/lib/icons"
import Link from "next/link"

const teacherNavItems = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: <Icons.BarChart3 /> },
  { label: "My Profile", href: "/teacher/profile", icon: <Icons.Users /> },
  { label: "Student Info", href: "/teacher/student-info", icon: <Icons.Users /> },
  { label: "Attendance", href: "/teacher/attendance", icon: <Icons.Calendar /> },
  { label: "Academics", href: "/teacher/academics", icon: <Icons.BookOpen /> },
  { label: "Lesson Planner", href: "/teacher/lesson-planner", icon: <Icons.FileText /> },
  { label: "H.W. / C.W.", href: "/teacher/homework", icon: <Icons.FileText /> },
  { label: "Examinations", href: "/teacher/examinations", icon: <Icons.BarChart3 /> },
  { label: "Online Exam", href: "/teacher/online-exam", icon: <Icons.BarChart3 /> },
  { label: "Download Center", href: "/teacher/download-center", icon: <Icons.FileText /> },
  { label: "Communicate", href: "/teacher/communicate", icon: <Icons.BookOpen /> },
  { label: "Digital Notice Board", href: "/teacher/notice-board", icon: <Icons.BookOpen /> },
  { label: "Settings", href: "/teacher/settings", icon: <Icons.Settings /> },
]

export default function TeacherDashboard() {
  return (
    <ProtectedRoute requiredRoles={["teacher"]}>
      <div className="flex">
        <Sidebar navItems={teacherNavItems} title="Teacher Portal" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Welcome to your teaching portal</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">My Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground mt-1">Active classes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">142</div>
                  <p className="text-xs text-muted-foreground mt-1">Across all classes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Pending Assignments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground mt-1">To be graded</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Attendance Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">92%</div>
                  <p className="text-xs text-muted-foreground mt-1">Average across classes</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* My Classes */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>My Classes</CardTitle>
                  <CardDescription>Classes you are teaching</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "10-A", students: 35, subject: "Mathematics" },
                      { name: "10-B", students: 32, subject: "Mathematics" },
                      { name: "11-A", students: 38, subject: "Mathematics" },
                      { name: "11-B", students: 36, subject: "Mathematics" },
                    ].map((cls) => (
                      <Link key={cls.name} href={`/teacher/classes/${cls.name}`}>
                        <div className="flex justify-between items-center p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
                          <div>
                            <p className="font-semibold">{cls.name}</p>
                            <p className="text-xs text-muted-foreground">{cls.subject}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{cls.students}</p>
                            <p className="text-xs text-muted-foreground">Students</p>
                          </div>
                        </div>
                      </Link>
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
                  <Link href="/teacher/assignments">
                    <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                      <Icons.Plus />
                      <span className="truncate">Create Assignment</span>
                    </Button>
                  </Link>
                  <Link href="/teacher/attendance">
                    <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                      <Icons.Calendar />
                      <span className="truncate">Mark Attendance</span>
                    </Button>
                  </Link>
                  <Link href="/teacher/marks">
                    <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                      <Icons.BookOpen />
                      <span className="truncate">Enter Marks</span>
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
