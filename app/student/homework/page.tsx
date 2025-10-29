"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

const studentNavItems = [
  { label: "Dashboard", href: "/student/dashboard", icon: <FileText size={20} /> },
  { label: "H.W. / C.W.", href: "/student/homework", icon: <FileText size={20} /> },
]

export default function HomeworkPage() {
  return (
    <ProtectedRoute requiredRoles={["student"]}>
      <div className="flex">
        <Sidebar navItems={studentNavItems} title="Student Portal" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Homework / Classwork</h1>
            <p className="text-muted-foreground mb-8">View and submit homework and classwork</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Submitted</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">12</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Graded</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">10</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pending Assignments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Pending</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Submit Assignment
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Submitted Work</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Submitted</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Grades
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
