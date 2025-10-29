"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/lib/icons"
import Link from "next/link"

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <Icons.BarChart3 /> },
  { label: "System Settings", href: "/admin/system-settings", icon: <Icons.Settings /> },
  { label: "Human Resources", href: "/admin/hr", icon: <Icons.Users /> },
  { label: "Academics", href: "/admin/academics", icon: <Icons.BookOpen /> },
  { label: "Student Info", href: "/admin/students", icon: <Icons.Users /> },
  { label: "Examinations", href: "/admin/examinations", icon: <Icons.BarChart3 /> },
  { label: "Reports", href: "/admin/reports", icon: <Icons.BarChart3 /> },
  { label: "Front Office", href: "/admin/front-office", icon: <Icons.DollarSign /> },
  { label: "Inventory", href: "/admin/inventory", icon: <Icons.BookOpen /> },
  { label: "Library", href: "/admin/library", icon: <Icons.BookOpen /> },
  { label: "Transport", href: "/admin/transport", icon: <Icons.Users /> },
  { label: "Hostel", href: "/admin/hostel", icon: <Icons.Users /> },
  { label: "Certificates", href: "/admin/certificates", icon: <Icons.BookOpen /> },
  { label: "Consent Letters", href: "/admin/consent-letters", icon: <Icons.BookOpen /> },
  { label: "Digital Notice Board", href: "/admin/notice-board", icon: <Icons.BookOpen /> },
  { label: "Communication", href: "/admin/communication", icon: <Icons.BookOpen /> },
  { label: "Front CMS", href: "/admin/cms", icon: <Icons.BookOpen /> },
  { label: "Subscription", href: "/admin/subscription", icon: <Icons.DollarSign /> },
]

export default function AdminDashboard() {
  return (
    <ProtectedRoute requiredRoles={["admin"]}>
      <div className="flex">
        <Sidebar navItems={adminNavItems} title="Admin Panel" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Welcome to the School ERP Admin Panel</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1,234</div>
                  <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Teachers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">87</div>
                  <p className="text-xs text-muted-foreground mt-1">+5% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground mt-1">All running smoothly</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$45.2K</div>
                  <p className="text-xs text-muted-foreground mt-1">+8% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Management Modules */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Management Modules</CardTitle>
                  <CardDescription>Quick access to key administrative functions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/admin/students">
                      <Button variant="outline" className="w-full justify-start gap-2 h-auto py-4 bg-transparent">
                        <Icons.Users />
                        <div className="text-left">
                          <div className="font-semibold">Student Management</div>
                          <div className="text-xs text-muted-foreground">Add, edit, manage students</div>
                        </div>
                      </Button>
                    </Link>

                    <Link href="/admin/teachers">
                      <Button variant="outline" className="w-full justify-start gap-2 h-auto py-4 bg-transparent">
                        <Icons.BookOpen />
                        <div className="text-left">
                          <div className="font-semibold">Teacher Management</div>
                          <div className="text-xs text-muted-foreground">Manage faculty</div>
                        </div>
                      </Button>
                    </Link>

                    <Link href="/admin/classes">
                      <Button variant="outline" className="w-full justify-start gap-2 h-auto py-4 bg-transparent">
                        <Icons.Users />
                        <div className="text-left">
                          <div className="font-semibold">Class Management</div>
                          <div className="text-xs text-muted-foreground">Create and manage classes</div>
                        </div>
                      </Button>
                    </Link>

                    <Link href="/admin/finance">
                      <Button variant="outline" className="w-full justify-start gap-2 h-auto py-4 bg-transparent">
                        <Icons.DollarSign />
                        <div className="text-left">
                          <div className="font-semibold">Finance</div>
                          <div className="text-xs text-muted-foreground">Fee management & billing</div>
                        </div>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest system updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-3 pb-3 border-b">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium">New student enrolled</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex gap-3 pb-3 border-b">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium">Fee payment received</p>
                        <p className="text-xs text-muted-foreground">5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium">Class schedule updated</p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
