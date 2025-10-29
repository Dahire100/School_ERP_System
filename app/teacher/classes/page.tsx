"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, FileText, BarChart3, Settings, Eye } from "lucide-react"
import Link from "next/link"

const teacherNavItems = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: <BarChart3 size={20} /> },
  { label: "My Classes", href: "/teacher/classes", icon: <Users size={20} /> },
  { label: "Assignments", href: "/teacher/assignments", icon: <FileText size={20} /> },
  { label: "Attendance", href: "/teacher/attendance", icon: <Users size={20} /> },
  { label: "Marks", href: "/teacher/marks", icon: <BookOpen size={20} /> },
  { label: "Settings", href: "/teacher/settings", icon: <Settings size={20} /> },
]

const mockClasses = [
  { id: 1, name: "10-A", students: 35, subject: "Mathematics", room: "A-101" },
  { id: 2, name: "10-B", students: 32, subject: "Mathematics", room: "A-102" },
  { id: 3, name: "11-A", students: 38, subject: "Mathematics", room: "B-101" },
  { id: 4, name: "11-B", students: 36, subject: "Mathematics", room: "B-102" },
]

export default function ClassesPage() {
  return (
    <ProtectedRoute requiredRoles={["teacher"]}>
      <div className="flex">
        <Sidebar navItems={teacherNavItems} title="Teacher Portal" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">My Classes</h1>
              <p className="text-muted-foreground">Manage your classes and students</p>
            </div>

            {/* Classes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockClasses.map((cls) => (
                <Card key={cls.id}>
                  <CardHeader>
                    <CardTitle>{cls.name}</CardTitle>
                    <CardDescription>{cls.subject}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Total Students</p>
                        <p className="font-semibold">{cls.students}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Room Number</p>
                        <p className="font-semibold">{cls.room}</p>
                      </div>
                    </div>
                    <Link href={`/teacher/classes/${cls.id}`}>
                      <Button className="w-full gap-2">
                        <Eye size={16} />
                        View Class
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
