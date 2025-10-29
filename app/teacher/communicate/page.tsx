"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

const teacherNavItems = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: <BookOpen size={20} /> },
  { label: "Communicate", href: "/teacher/communicate", icon: <BookOpen size={20} /> },
]

export default function CommunicatePage() {
  return (
    <ProtectedRoute requiredRoles={["teacher"]}>
      <div className="flex">
        <Sidebar navItems={teacherNavItems} title="Teacher Portal" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Communication</h1>
            <p className="text-muted-foreground mb-8">Message students and parents</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Unread Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">5</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Conversations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">23</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Messages Sent</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">156</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Send Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Message Student</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Message Parent
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Inbox</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Messages</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Conversations
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
