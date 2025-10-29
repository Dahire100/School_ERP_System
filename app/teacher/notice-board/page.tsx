"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

const teacherNavItems = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: <BookOpen size={20} /> },
  { label: "Digital Notice Board", href: "/teacher/notice-board", icon: <BookOpen size={20} /> },
]

export default function NoticeBoardPage() {
  return (
    <ProtectedRoute requiredRoles={["teacher"]}>
      <div className="flex">
        <Sidebar navItems={teacherNavItems} title="Teacher Portal" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Digital Notice Board</h1>
            <p className="text-muted-foreground mb-8">View school notices and announcements</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Notices</CardTitle>
                  <CardDescription>Latest school announcements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View All Notices</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Filter by Category
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Important Dates</CardTitle>
                  <CardDescription>School calendar and events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Calendar</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Events
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
