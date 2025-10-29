"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, BarChart3, Settings, CreditCard, TrendingUp } from "lucide-react"

const superAdminNavItems = [
  { label: "Dashboard", href: "/super-admin/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Schools", href: "/super-admin/schools", icon: <Building2 size={20} /> },
  { label: "Subscriptions", href: "/super-admin/subscriptions", icon: <CreditCard size={20} /> },
  { label: "Analytics", href: "/super-admin/analytics", icon: <TrendingUp size={20} /> },
  { label: "Users", href: "/super-admin/users", icon: <Users size={20} /> },
  { label: "Settings", href: "/super-admin/settings", icon: <Settings size={20} /> },
]

export default function AnalyticsPage() {
  return (
    <ProtectedRoute requiredRoles={["super-admin"]}>
      <div className="flex">
        <Sidebar navItems={superAdminNavItems} title="Platform Admin" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Platform Analytics</h1>
              <p className="text-muted-foreground">View platform performance and metrics</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$528K</div>
                  <p className="text-xs text-muted-foreground mt-1">+18% YoY</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Schools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground mt-1">+3 this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">5.2K</div>
                  <p className="text-xs text-muted-foreground mt-1">+12% this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Churn Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">9%</div>
                  <p className="text-xs text-muted-foreground mt-1">-2% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Analytics Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                  <CardDescription>Monthly revenue over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { month: "May", revenue: 32000 },
                      { month: "June", revenue: 35000 },
                      { month: "July", revenue: 38000 },
                      { month: "August", revenue: 41000 },
                      { month: "September", revenue: 44000 },
                      { month: "October", revenue: 44000 },
                    ].map((item) => (
                      <div key={item.month} className="flex justify-between items-center">
                        <span className="font-semibold">{item.month}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent"
                              style={{ width: `${(item.revenue / 50000) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-semibold">${item.revenue / 1000}K</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subscription Plans Distribution</CardTitle>
                  <CardDescription>Schools by subscription plan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { plan: "Basic", schools: 4, percentage: 17 },
                      { plan: "Professional", schools: 14, percentage: 58 },
                      { plan: "Enterprise", schools: 6, percentage: 25 },
                    ].map((item) => (
                      <div key={item.plan}>
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">{item.plan}</span>
                          <span className="text-sm text-muted-foreground">{item.schools} schools</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-accent" style={{ width: `${item.percentage}%` }}></div>
                        </div>
                      </div>
                    ))}
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
