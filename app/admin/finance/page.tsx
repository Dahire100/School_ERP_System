"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, DollarSign, BarChart3, Settings, Plus } from "lucide-react"

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Students", href: "/admin/students", icon: <Users size={20} /> },
  { label: "Teachers", href: "/admin/teachers", icon: <BookOpen size={20} /> },
  { label: "Classes", href: "/admin/classes", icon: <Users size={20} /> },
  { label: "Finance", href: "/admin/finance", icon: <DollarSign size={20} /> },
  { label: "Settings", href: "/admin/settings", icon: <Settings size={20} /> },
]

export default function FinancePage() {
  return (
    <ProtectedRoute requiredRoles={["admin"]}>
      <div className="flex">
        <Sidebar navItems={adminNavItems} title="Admin Panel" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Finance Management</h1>
                <p className="text-muted-foreground">Manage fees, payments, and financial records</p>
              </div>
              <Button className="gap-2">
                <Plus size={20} />
                New Transaction
              </Button>
            </div>

            {/* Finance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$125,450</div>
                  <p className="text-xs text-muted-foreground mt-1">+15% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Pending Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$23,500</div>
                  <p className="text-xs text-muted-foreground mt-1">From 45 students</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Collection Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">84.2%</div>
                  <p className="text-xs text-muted-foreground mt-1">+3% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest financial activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b last:border-0">
                      <div>
                        <p className="font-semibold">Fee Payment - Student {i}</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">+$5,000</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
