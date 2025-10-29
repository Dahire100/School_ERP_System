"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign } from "lucide-react"

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <DollarSign size={20} /> },
  { label: "Front Office", href: "/admin/front-office", icon: <DollarSign size={20} /> },
]

export default function FrontOfficePage() {
  return (
    <ProtectedRoute requiredRoles={["admin"]}>
      <div className="flex">
        <Sidebar navItems={adminNavItems} title="Admin Panel" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Front Office</h1>
            <p className="text-muted-foreground mb-8">Manage fees collection, income, and expenses</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Income</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$125.5K</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$45.2K</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Net Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$80.3K</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fees Collection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Fee Dues</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Record Payment
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Income Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Add Income</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Income
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expense Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Add Expense</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Expenses
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Reports</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Generate Report</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View History
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
