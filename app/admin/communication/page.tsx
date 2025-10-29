"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <BookOpen size={20} /> },
  { label: "Communication", href: "/admin/communication", icon: <BookOpen size={20} /> },
]

export default function CommunicationPage() {
  return (
    <ProtectedRoute requiredRoles={["admin"]}>
      <div className="flex">
        <Sidebar navItems={adminNavItems} title="Admin Panel" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Communication</h1>
            <p className="text-muted-foreground mb-8">Send bulk SMS and email to students and parents</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Send SMS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Compose SMS</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View History
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Send Email</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Compose Email</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View History
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Bulk Messaging</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Send to Class</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Send to All
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Message Templates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Templates</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Create Template
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
