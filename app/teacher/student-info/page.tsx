"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users } from "lucide-react"

const teacherNavItems = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: <Users size={20} /> },
  { label: "Student Info", href: "/teacher/student-info", icon: <Users size={20} /> },
]

export default function StudentInfoPage() {
  return (
    <ProtectedRoute requiredRoles={["teacher"]}>
      <div className="flex">
        <Sidebar navItems={teacherNavItems} title="Teacher Portal" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Student Information</h1>
            <p className="text-muted-foreground mb-8">View students in your classes</p>

            <div className="mb-6">
              <Input placeholder="Search students..." className="max-w-md" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Class 10-A</CardTitle>
                  <CardDescription>35 students</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Students</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Export List
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Class 10-B</CardTitle>
                  <CardDescription>32 students</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Students</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Export List
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Class 11-A</CardTitle>
                  <CardDescription>38 students</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Students</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Export List
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
