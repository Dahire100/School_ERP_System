"use client"

import { useState } from "react"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, BookOpen, DollarSign, BarChart3, Settings, Plus, Search, Edit, Trash2 } from "lucide-react"

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Students", href: "/admin/students", icon: <Users size={20} /> },
  { label: "Teachers", href: "/admin/teachers", icon: <BookOpen size={20} /> },
  { label: "Classes", href: "/admin/classes", icon: <Users size={20} /> },
  { label: "Finance", href: "/admin/finance", icon: <DollarSign size={20} /> },
  { label: "Settings", href: "/admin/settings", icon: <Settings size={20} /> },
]

const mockTeachers = [
  { id: 1, name: "Dr. Robert Brown", email: "robert@school.com", subject: "Mathematics", classes: "10-A, 10-B" },
  { id: 2, name: "Ms. Emily Davis", email: "emily@school.com", subject: "English", classes: "10-A, 10-C" },
  { id: 3, name: "Mr. James Wilson", email: "james@school.com", subject: "Science", classes: "10-B, 10-C" },
]

export default function TeachersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTeachers = mockTeachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <ProtectedRoute requiredRoles={["admin"]}>
      <div className="flex">
        <Sidebar navItems={adminNavItems} title="Admin Panel" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Teacher Management</h1>
                <p className="text-muted-foreground">Manage all teachers in the system</p>
              </div>
              <Button className="gap-2">
                <Plus size={20} />
                Add Teacher
              </Button>
            </div>

            {/* Search */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
                  <Input
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Teachers Table */}
            <Card>
              <CardHeader>
                <CardTitle>All Teachers</CardTitle>
                <CardDescription>{filteredTeachers.length} teachers found</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Name</th>
                        <th className="text-left py-3 px-4 font-semibold">Email</th>
                        <th className="text-left py-3 px-4 font-semibold">Subject</th>
                        <th className="text-left py-3 px-4 font-semibold">Classes</th>
                        <th className="text-left py-3 px-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTeachers.map((teacher) => (
                        <tr key={teacher.id} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">{teacher.name}</td>
                          <td className="py-3 px-4">{teacher.email}</td>
                          <td className="py-3 px-4">{teacher.subject}</td>
                          <td className="py-3 px-4">{teacher.classes}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                <Edit size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-destructive">
                                <Trash2 size={16} />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
