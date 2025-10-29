"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/lib/icons"
import Link from "next/link"

const superAdminNavItems = [
  { label: "Dashboard", href: "/super-admin/dashboard", icon: <Icons.BarChart3 /> },
  { label: "Schools", href: "/super-admin/schools", icon: <Icons.Building2 /> },
  { label: "Subscriptions", href: "/super-admin/subscriptions", icon: <Icons.CreditCard /> },
  { label: "Analytics", href: "/super-admin/analytics", icon: <Icons.TrendingUp /> },
  { label: "Users", href: "/super-admin/users", icon: <Icons.Users /> },
  { label: "Settings", href: "/super-admin/settings", icon: <Icons.Settings /> },
]

export default function SuperAdminDashboard() {
  return (
    <ProtectedRoute requiredRoles={["super-admin"]}>
      <div className="flex">
        <Sidebar navItems={superAdminNavItems} title="Platform Admin" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Platform Dashboard</h1>
              <p className="text-muted-foreground">Manage the School ERP SaaS platform</p>
            </div>

            {/* Platform Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Schools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground mt-1">+3 this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Subscriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">22</div>
                  <p className="text-xs text-muted-foreground mt-1">91% retention</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$44K</div>
                  <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">5.2K</div>
                  <p className="text-xs text-muted-foreground mt-1">Across all schools</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Management Modules */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Platform Management</CardTitle>
                  <CardDescription>Manage schools and subscriptions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/super-admin/schools">
                      <Button variant="outline" className="w-full justify-start gap-2 h-auto py-4 bg-transparent">
                        <Icons.Building2 />
                        <div className="text-left">
                          <div className="font-semibold">School Management</div>
                          <div className="text-xs text-muted-foreground">Add, edit schools</div>
                        </div>
                      </Button>
                    </Link>

                    <Link href="/super-admin/subscriptions">
                      <Button variant="outline" className="w-full justify-start gap-2 h-auto py-4 bg-transparent">
                        <Icons.CreditCard />
                        <div className="text-left">
                          <div className="font-semibold">Subscriptions</div>
                          <div className="text-xs text-muted-foreground">Manage plans</div>
                        </div>
                      </Button>
                    </Link>

                    <Link href="/super-admin/users">
                      <Button variant="outline" className="w-full justify-start gap-2 h-auto py-4 bg-transparent">
                        <Icons.Users />
                        <div className="text-left">
                          <div className="font-semibold">User Management</div>
                          <div className="text-xs text-muted-foreground">Manage platform users</div>
                        </div>
                      </Button>
                    </Link>

                    <Link href="/super-admin/analytics">
                      <Button variant="outline" className="w-full justify-start gap-2 h-auto py-4 bg-transparent">
                        <Icons.TrendingUp />
                        <div className="text-left">
                          <div className="font-semibold">Analytics</div>
                          <div className="text-xs text-muted-foreground">View reports</div>
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
                  <CardDescription>Latest platform updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-3 pb-3 border-b">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium">New school registered</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex gap-3 pb-3 border-b">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium">Subscription renewed</p>
                        <p className="text-xs text-muted-foreground">5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium">Payment received</p>
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
