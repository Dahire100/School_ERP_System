"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, DollarSign, BarChart3, Settings, Plus, Edit, Trash2 } from "lucide-react"

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Students", href: "/admin/students", icon: <Users size={20} /> },
  { label: "Teachers", href: "/admin/teachers", icon: <BookOpen size={20} /> },
  { label: "Classes", href: "/admin/classes", icon: <Users size={20} /> },
  { label: "Finance", href: "/admin/finance", icon: <DollarSign size={20} /> },
  { label: "Settings", href: "/admin/settings", icon: <Settings size={20} /> },
]

const mockClasses = [
  { id: 1, name: "10-A", teacher: "Dr. Robert Brown", students: 35, section: "A" },
  { id: 2, name: "10-B", teacher: "Mr. James Wilson", students: 32, section: "B" },
  { id: 3, name: "10-C", teacher: "Ms. Emily Davis", students: 38, section: "C" },
]

export default function ClassesPage() {
  return (
    <ProtectedRoute requiredRoles={["admin"]}>
      <div className="flex">
        <Sidebar navItems={adminNavItems} title="Admin Panel" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Class Management</h1>
                <p className="text-muted-foreground">Manage all classes in the system</p>
              </div>
              <Button className="gap-2">
                <Plus size={20} />
                Add Class
              </Button>
            </div>

            {/* Classes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockClasses.map((cls) => (
                <Card key={cls.id}>
                  <CardHeader>
                    <CardTitle>{cls.name}</CardTitle>
                    <CardDescription>Section {cls.section}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground">Class Teacher</p>
                        <p className="font-semibold">{cls.teacher}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Total Students</p>
                        <p className="font-semibold">{cls.students}</p>
                      </div>
                      <div className="flex gap-2 pt-4">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Edit size={16} className="mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 text-destructive bg-transparent">
                          <Trash2 size={16} className="mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
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
