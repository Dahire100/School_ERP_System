"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Settings, Calendar, DollarSign, AlertCircle, CreditCard } from "lucide-react"

const parentNavItems = [
  { label: "Dashboard", href: "/parent/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Child Progress", href: "/parent/progress", icon: <BarChart3 size={20} /> },
  { label: "Attendance", href: "/parent/attendance", icon: <Calendar size={20} /> },
  { label: "Fees", href: "/parent/fees", icon: <DollarSign size={20} /> },
  { label: "Communication", href: "/parent/communication", icon: <AlertCircle size={20} /> },
  { label: "Settings", href: "/parent/settings", icon: <Settings size={20} /> },
]

const mockFees = [
  { month: "October 2025", amount: 500, status: "Paid", dueDate: "2025-10-31" },
  { month: "November 2025", amount: 500, status: "Pending", dueDate: "2025-11-30" },
  { month: "December 2025", amount: 500, status: "Pending", dueDate: "2025-12-31" },
]

export default function FeesPage() {
  return (
    <ProtectedRoute requiredRoles={["parent"]}>
      <div className="flex">
        <Sidebar navItems={parentNavItems} title="Parent Portal" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Fee Management</h1>
              <p className="text-muted-foreground">View and pay school fees</p>
            </div>

            {/* Fee Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$1,500</div>
                  <p className="text-xs text-muted-foreground mt-1">Annual fees</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Paid</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">$500</div>
                  <p className="text-xs text-muted-foreground mt-1">33% paid</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-destructive">$1,000</div>
                  <p className="text-xs text-muted-foreground mt-1">67% pending</p>
                </CardContent>
              </Card>
            </div>

            {/* Fee Records */}
            <Card>
              <CardHeader>
                <CardTitle>Fee Records</CardTitle>
                <CardDescription>Monthly fee payment history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockFees.map((fee) => (
                    <div key={fee.month} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold">{fee.month}</p>
                        <p className="text-xs text-muted-foreground">Due: {fee.dueDate}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold">${fee.amount}</p>
                          <span
                            className={`text-xs font-semibold ${
                              fee.status === "Paid" ? "text-green-600" : "text-destructive"
                            }`}
                          >
                            {fee.status}
                          </span>
                        </div>
                        {fee.status === "Pending" && (
                          <Button size="sm" className="gap-2">
                            <CreditCard size={16} />
                            Pay Now
                          </Button>
                        )}
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
