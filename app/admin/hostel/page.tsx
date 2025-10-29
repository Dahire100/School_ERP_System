"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <Users size={20} /> },
  { label: "Hostel", href: "/admin/hostel", icon: <Users size={20} /> },
]

export default function HostelPage() {
  return (
    <ProtectedRoute requiredRoles={["admin"]}>
      <div className="flex">
        <Sidebar navItems={adminNavItems} title="Admin Panel" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Hostel Management</h1>
            <p className="text-muted-foreground mb-8">Manage hostel facilities and student accommodation</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Rooms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">48</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Occupied</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">42</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">6</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Room Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View All Rooms</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Assign Room
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Student Accommodation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Residents</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Manage Checkout
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
