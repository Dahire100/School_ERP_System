"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

const studentNavItems = [
  { label: "Dashboard", href: "/student/dashboard", icon: <BookOpen size={20} /> },
  { label: "Student Wallet", href: "/student/wallet", icon: <BookOpen size={20} /> },
]

export default function WalletPage() {
  return (
    <ProtectedRoute requiredRoles={["student"]}>
      <div className="flex">
        <Sidebar navItems={studentNavItems} title="Student Portal" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Student Wallet</h1>
            <p className="text-muted-foreground mb-8">Manage your digital wallet and balance</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Current Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$250.50</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Spent</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$1,245.00</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Last Transaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">-$25.00</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Wallet Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Add Money</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Transactions
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View All Transactions</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Download Statement
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
