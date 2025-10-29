"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

const studentNavItems = [
  { label: "Dashboard", href: "/student/dashboard", icon: <BookOpen size={20} /> },
  { label: "Transport", href: "/student/transport", icon: <BookOpen size={20} /> },
]

export default function TransportPage() {
  return (
    <ProtectedRoute requiredRoles={["student"]}>
      <div className="flex">
        <Sidebar navItems={studentNavItems} title="Student Portal" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Transport</h1>
            <p className="text-muted-foreground mb-8">View your bus route and transportation details</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bus Route</CardTitle>
                  <CardDescription>Your assigned bus route</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Bus Number</span>
                    <span className="font-semibold">BUS-12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Route</span>
                    <span className="font-semibold">North Route</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pickup Time</span>
                    <span className="font-semibold">7:30 AM</span>
                  </div>
                  <Button className="w-full mt-3">View Full Route</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Driver Information</CardTitle>
                  <CardDescription>Bus driver details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Driver Name</span>
                    <span className="font-semibold">John Smith</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phone</span>
                    <span className="font-semibold">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex justify-between">
                    <span>License</span>
                    <span className="font-semibold">Valid</span>
                  </div>
                  <Button className="w-full mt-3">Contact Driver</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
