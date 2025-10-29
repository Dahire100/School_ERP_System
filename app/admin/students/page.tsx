"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, BookOpen, DollarSign, BarChart3, Settings, Plus, Search, Edit, Trash2 } from "lucide-react"
import { useState } from "react"

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Students", href: "/admin/students", icon: <Users size={20} /> },
  { label: "Teachers", href: "/admin/teachers", icon: <BookOpen size={20} /> },
  { label: "Classes", href: "/admin/classes", icon: <Users size={20} /> },
  { label: "Finance", href: "/admin/finance", icon: <DollarSign size={20} /> },
  { label: "Settings", href: "/admin/settings", icon: <Settings size={20} /> },
]

const mockStudents = [
  { id: 1, name: "John Doe", email: "john@school.com", class: "10-A", rollNo: "001", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@school.com", class: "10-A", rollNo: "002", status: "Active" },
  { id: 3, name: "Mike Johnson", email: "mike@school.com", class: "10-B", rollNo: "003", status: "Active" },
  { id: 4, name: "Sarah Williams", email: "sarah@school.com", class: "10-B", rollNo: "004", status: "Inactive" },
]

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = mockStudents.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()),
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
                <h1 className="text-3xl font-bold text-foreground mb-2">Student Management</h1>
                <p className="text-muted-foreground">Manage all students in the system</p>
              </div>
              <Button className="gap-2">
                <Plus size={20} />
                Add Student
              </Button>
            </div>

            {/* Search and Filter */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
                    <Input
                      placeholder="Search by name or email..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Students Table */}
            <Card>
              <CardHeader>
                <CardTitle>All Students</CardTitle>
                <CardDescription>{filteredStudents.length} students found</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Name</th>
                        <th className="text-left py-3 px-4 font-semibold">Email</th>
                        <th className="text-left py-3 px-4 font-semibold">Class</th>
                        <th className="text-left py-3 px-4 font-semibold">Roll No</th>
                        <th className="text-left py-3 px-4 font-semibold">Status</th>
                        <th className="text-left py-3 px-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student) => (
                        <tr key={student.id} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">{student.name}</td>
                          <td className="py-3 px-4">{student.email}</td>
                          <td className="py-3 px-4">{student.class}</td>
                          <td className="py-3 px-4">{student.rollNo}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                student.status === "Active"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {student.status}
                            </span>
                          </td>
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
