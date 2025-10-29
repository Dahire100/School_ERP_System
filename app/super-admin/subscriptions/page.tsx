"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Users, BarChart3, Settings, CreditCard, TrendingUp, Plus, Edit, Trash2 } from "lucide-react"

const superAdminNavItems = [
  { label: "Dashboard", href: "/super-admin/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Schools", href: "/super-admin/schools", icon: <Building2 size={20} /> },
  { label: "Subscriptions", href: "/super-admin/subscriptions", icon: <CreditCard size={20} /> },
  { label: "Analytics", href: "/super-admin/analytics", icon: <TrendingUp size={20} /> },
  { label: "Users", href: "/super-admin/users", icon: <Users size={20} /> },
  { label: "Settings", href: "/super-admin/settings", icon: <Settings size={20} /> },
]

const mockSubscriptions = [
  { id: 1, school: "ABC School", plan: "Professional", amount: 2000, status: "Active", renewalDate: "2025-12-15" },
  { id: 2, school: "XYZ Academy", plan: "Enterprise", amount: 5000, status: "Active", renewalDate: "2025-11-20" },
  {
    id: 3,
    school: "Global Institute",
    plan: "Professional",
    amount: 2000,
    status: "Active",
    renewalDate: "2025-12-01",
  },
  { id: 4, school: "Elite School", plan: "Basic", amount: 1000, status: "Expired", renewalDate: "2025-10-15" },
]

export default function SubscriptionsPage() {
  return (
    <ProtectedRoute requiredRoles={["super-admin"]}>
      <div className="flex">
        <Sidebar navItems={superAdminNavItems} title="Platform Admin" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Subscription Management</h1>
                <p className="text-muted-foreground">Manage school subscriptions and billing</p>
              </div>
              <Button className="gap-2">
                <Plus size={20} />
                New Subscription
              </Button>
            </div>

            {/* Subscription Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Subscriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">22</div>
                  <p className="text-xs text-muted-foreground mt-1">91% of schools</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$44K</div>
                  <p className="text-xs text-muted-foreground mt-1">From subscriptions</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Expiring Soon</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground mt-1">Next 30 days</p>
                </CardContent>
              </Card>
            </div>

            {/* Subscriptions Table */}
            <Card>
              <CardHeader>
                <CardTitle>All Subscriptions</CardTitle>
                <CardDescription>School subscription details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">School</th>
                        <th className="text-left py-3 px-4 font-semibold">Plan</th>
                        <th className="text-left py-3 px-4 font-semibold">Amount</th>
                        <th className="text-left py-3 px-4 font-semibold">Status</th>
                        <th className="text-left py-3 px-4 font-semibold">Renewal Date</th>
                        <th className="text-left py-3 px-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockSubscriptions.map((sub) => (
                        <tr key={sub.id} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-semibold">{sub.school}</td>
                          <td className="py-3 px-4">{sub.plan}</td>
                          <td className="py-3 px-4">${sub.amount}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                sub.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {sub.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">{sub.renewalDate}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                <Edit size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-destructive">
                                <Trash2 size={16} />
                              </Button>
                            </div>
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
