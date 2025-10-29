"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

const studentNavItems = [
  { label: "Dashboard", href: "/student/dashboard", icon: <BookOpen size={20} /> },
  { label: "Hostel", href: "/student/hostel", icon: <BookOpen size={20} /> },
]

export default function HostelPage() {
  return (
    <ProtectedRoute requiredRoles={["student"]}>
      <div className="flex">
        <Sidebar navItems={studentNavItems} title="Student Portal" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Hostel</h1>
            <p className="text-muted-foreground mb-8">View your hostel room and accommodation details</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Room Details</CardTitle>
                  <CardDescription>Your hostel accommodation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Hostel</span>
                    <span className="font-semibold">Boys Hostel A</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Room Number</span>
                    <span className="font-semibold">A-205</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bed Number</span>
                    <span className="font-semibold">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Roommates</span>
                    <span className="font-semibold">2</span>
                  </div>
                  <Button className="w-full mt-3">View Room Details</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hostel Information</CardTitle>
                  <CardDescription>Hostel rules and contact</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Rules</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Contact Warden
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Report Issue
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
